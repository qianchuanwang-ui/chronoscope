import os
import io
import base64
from datetime import datetime, timedelta
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import matplotlib.pyplot as plt
import pysweph as swe  # 新しいエンジンに切り替え！

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

VENUS_SIGN_COSMETICS = [
    {"sign": "牡羊座", "cosme": "ちゅるんとした透け感シアーレッドのリップティントカラー💄", "color": "ストロベリーピンク"},
    {"sign": "牡牛座", "cosme": "お肌をふんわり上品に見せるラベンダーパウダーレース🎀", "color": "メルティベージュ"},
    {"sign": "双子座", "cosme": "目元がうるうる輝く微細パールの入ったリキッドアイシャドウグリッター✨", "color": "ピスタチオグリーン"},
    {"sign": "蟹座", "cosme": "内側からぽわっと上気したような練りチークピーチピンク🍑", "color": "ミルクティピンク"},
    {"sign": "獅子座", "cosme": "瞬きするたびドキッとさせる艶めきゴールドラメシャドウクローバー👑", "color": "サンセットオレンジ"},
    {"sign": "天秤座", "cosme": "どんなお洋服にもマッチする王道のうるツヤ大人ピンクベージュリップミント", "color": "ローズピンク"},
    {"sign": "蠍座", "cosme": "ちょっぴりミステリアスで大人っぽい深みボルドーのネイルマスカラ🔮", "color": "ヴィンテージワイン"},
    {"sign": "射手座", "cosme": "お顔全体をパッと明るく見せてくれるビタミンカラーのハイライターキャンディ", "color": "シトラスイエロー"},
    {"sign": "山羊座", "cosme": "凛とした美しさを引き出すブラウンニュアンスの大人アイライナーリボン", "color": "クラシックブラウン"},
    {"sign": "水瓶座", "cosme": "儚げで透明感が爆上がりするミントブルーのコントロールカラーベースアイス", "color": "ネオンラベンダー"},
    {"sign": "魚座", "cosme": "うるうるの質感がたまらない透明なぷっくりツヤツヤグロスジュエル", "color": "アクアブルー"}
]

SWEET_MEANINGS = {
    ("Transit 太陽", "Natal 太陽"): "🎂Myニューイヤーのはじまり🎂 あなたという存在にスポットライトが当たる特別な日！いつもよりちょっぴり主役気分で、新しい目標を宣言しちゃおう！",
    ("Transit 太陽", "Natal 水星"): "おしゃべりスイッチONの日📣 あなたの言葉がみんなの心にすーっと届くよ。大切な連絡や、SNSの発信、ブログの更新をするなら今日が絶対おすすめ！",
    ("Transit 太陽", "Natal 金星"): "🧸愛されヒロインモード🧸 あなたの「可愛い魅力」がじわじわ溢れ出ちゃう日！すれ違う人が思わず振り返るような、無敵のオーラをまとえるよ。ご褒ベを買っちゃおう♪",
    ("Transit 太陽", "Natal 火星"): "エネルギー満タン！やる気スイッチ💥 ずっと後回しにしていたことに、楽しく一歩を踏み出せる日。今日のあなたなら、どんな壁も「えいっ！」って乗り越えられちゃうよ！",
    ("Transit 太陽", "Natal 木星"): "🌈神さまからのプチギフト🌈 ラッキーなことがトントン拍子で起こりそうな予感。笑顔でいるだけで、ハッピーな引き寄せが向こうからやってくるよ♪",
    ("Transit 金星", "Natal 太陽"): "🦋きゅん活アップデート🦋 あなたの「好き！」という気持ちが満たされるご褒美デー。お気に入りのコスメやお洋服を身にまとって、お出かけしてみてね！",
    ("Transit 金星", "Natal 水星"): "お耳が幸せになる日ロリポップ 心地いい音楽を聴いたり、推しの動画を見たり、友達とウキウキするおしゃべりを楽しんで。可愛いアイデアも浮かびそう！",
    ("Transit 金星", "Natal 金星"): "🌟ヴィーナス・リターン（金星回帰）🌟 恋愛運＆美容運が最高潮を迎える、あなただけの特別な日！自分へのとびきりのご褒美や、イメチェン、大好きな人へのアプローチに最高のタイミングだよ💖",
    ("Transit 金星", "Natal 火星"): "💘恋のロマンス警報発令中💘 眠っていた恋心がドキドキ動き出すかも！いつもよりちょっぴり素直になって、甘えてみるのが愛されるコツだよ♪",
    ("Transit 金星", "Natal 木星"): "🧁お砂糖たっぷりのハッピーライフ🧁 どこにいっても優しくされたり、欲しかったものをプレゼントされたり、甘〜い幸せに包まれる日。遠慮せず受け取ってね！",
    ("Transit 水星", "Natal 太陽"): "💡知的好奇心のスイッチ💡 「これ知りたい！」「やってみたい！」というアンテナがピピッと反応する日。本屋さんやネットサーフィンに素敵なヒントがあるよ！",
    ("Transit 水星", "Natal 金星"): "💌きゅんとするメッセージ💌 好きな人や大切な友達から、心がほっこりするような嬉しい連絡が届くかも。あなたからも、可愛いスタンプ付きで連絡してみて♪",
    ("Transit 水星", "Natal 木星"): "お悩みすっきり解決デー解決 難しく考えていたことが、「なーんだ、こうすればいいんだ！」って急にクリアになるよ。未来の楽しい作戦会議をひらこう！",
    ("Transit 火星", "Natal 太陽"): "🔥無敵のエネルギーチャージ🔥 「絶対にやり遂げる！」という熱いパワーが湧いてくる日。ちょっとアクティブに身体を動かしたり、お部屋の模様替えをするのもスッキリして吉！",
    ("Transit 火星", "Natal 金星"): "⚡️恋の電撃スパイス⚡️ 刺激的な出会いや、ドキッとするようなドラマチックな展開があるかも？情熱的な星のパワーが、あなたの恋をちょっぴり後押ししてくれるよ。",
    ("Transit 木星", "Natal 太陽"): "✨12年に一度のご褒美タイム✨ あなたの可能性が無限に広がる、最強の幸運期が到来！この日にスタートしたことは、これからぐんぐん大きく育っていくよ。自分を信じて進もう！",
    ("Transit 木星", "Natal 金星"): "🎀世界があなたに恋をする日🎀 恋愛も、人間関係も、楽しいことも全部欲張れちゃうキラキラデー。あなたを大切にしてくれる素敵な人とのご縁が結ばれるかも！",
    ("Transit 木星", "Natal 水星"): "🚀才能の扉がパカッと開く🚀 あなたがこれまで頑張ってきたことや、得意なことがたくさんの人に認められるとき。自信を持って周りにアピールしてみてね！",
    ("Transit 土星", "Natal 太陽"): "🧸お守りモードの土台づくり🧸 これからのあなたをもっと強く、素敵にするための「心の整理整頓」がおこる日。焦らずゆっくり、自分のペースを愛してあげてね。",
    ("Transit 土星", "Natal 金星"): "💎永遠のタカラモノを見つける日💎 一時のときめきではなく、これからもずっとずっと大切にしていきたい「本物の愛」や「絆」を、時間をかけてじっくり育てる落ち着いたパワーが流れています。",
    ("Transit 天王星", "Natal 太陽"): "🔮新しいわたしに生まれ変わる予感🔮 思いがけないハッピーな変化が舞い込んでくる日。今までのこだわりを「ぽいっ」と手放すと、もっと素敵なハッピーが飛び込んでくるよ！",
    ("Transit 海王星", "Natal 金星"): "🎡魔法にかけられた夢の国🎡 まるで映画やファンタジーの世界にいるような、ロマンチックな妄想やインスピレーションが広がる日。アートや可愛い世界観にたっぷり浸ってね。",
    ("Transit 冥王星", "Natal 太陽"): "🌟大逆転！奇跡のシナリオ🌟 もやもやしていた現実がガラッと180度変わるような、パワフルな再生のエネルギー。ピンチに見えても、それは大幸運へ向かうためのステップだから大丈夫！",
}

PLANETS = {
    "太陽": swe.SUN, "水星": swe.MERCURY, "金星": swe.VENUS, 
    "火星": swe.MARS, "木星": swe.JUPITER, "土星": swe.SATURN,
    "天王星": swe.URANUS, "海王星": swe.NEPTUNE, "冥王星": swe.PLUTO
}

class NatalInput(BaseModel):
    year: int
    month: int
    day: int
    hour: int
    minute: int

def get_lucky_cosmetic():
    now = datetime.now()
    et = swe.julday(now.year, now.month, now.day, 12.0)
    res = swe.calc_ut(et, swe.VENUS)
    lon = res
    sign_idx = int(lon // 30)
    if sign_idx >= 12: sign_idx = 11
    return VENUS_SIGN_COSMETICS[sign_idx]

@app.post("/api/fortune")
def get_fortune(birth: NatalInput):
    try:
        lucky = get_lucky_cosmetic()
        birth_et = swe.julday(birth.year, birth.month, birth.day, birth.hour + birth.minute/60.0)
        natal_positions = {}
        for name, code in PLANETS.items():
            res = swe.calc_ut(birth_et, code)
            natal_positions[name] = res

        start_date = datetime.now()
        hits = []
        
        for i in range(180):
            current_date = start_date + timedelta(days=i)
            et = swe.julday(current_date.year, current_date.month, current_date.day, 12.0)
            
            for t_name, t_code in PLANETS.items():
                t_res = swe.calc_ut(et, t_code)
                t_pos = t_res
                
                for n_name, n_pos in natal_positions.items():
                    diff = abs(t_pos - n_pos)
                    if diff > 180: diff = 360 - diff
                        
                    if diff <= 2.0:
                        meaning = SWEET_MEANINGS.get(
                            (f"Transit {t_name}", f"Natal {n_name}"), 
                            f"🌟星たちのハーモニー🌟 {t_name}とあなたの{n_name}がぴったり重なって、特別なエネルギーが満ちていくよ。"
                        )
                        hits.append({
                            "date": current_date.strftime("%m月%d日"),
                            "title": f"Transit {t_name} × My {n_name}",
                            "text": meaning,
                            "days_away": i
                        })
                        break
        
        hits = sorted(hits, key=lambda x: x["days_away"])[:5]

        fig, ax = plt.subplots(figsize=(6, 3), facecolor='#FFF5F5')
        ax.set_facecolor('#FFFFFF')
        
        if hits:
            dates = [h["date"] for h in hits]
            labels = [h["title"] for h in hits]
            ax.plot(dates, [1]*len(dates), "o", color="#FF94B7", markersize=12)
            for idx, label in enumerate(labels):
                ax.annotate(label, (dates[idx], 1), textcoords="offset points", 
                            xytext=(0,15), ha='center', color="#555555", fontsize=9)
        else:
            ax.text(0.5, 0.5, "ここ3ヶ月はのんびり穏やか期だよ", ha='center', va='center')

        ax.spines['top'].set_visible(False)
        ax.spines['right'].set_visible(False)
        ax.spines['left'].set_visible(False)
        ax.get_yaxis().set_visible(False)
        ax.tick_params(axis='x', colors='#FF94B7')
        plt.tight_layout()

        buf = io.BytesIO()
        plt.savefig(buf, format='png', dpi=150)
        buf.seek(0)
        img_str = base64.b64encode(buf.read()).decode('utf-8')
        plt.close()

        return {
            "lucky_cosme": lucky["cosme"],
            "lucky_color": lucky["color"],
            "timeline_image": f"data:image/png;base64,{img_str}", 
            "forecast": hits
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
