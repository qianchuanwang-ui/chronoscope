import os
import io
import base64
from datetime import datetime, timedelta, timezone
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import matplotlib.pyplot as plt

# 🌸 Skyfield天体計算エンジン
from skyfield.api import Loader

app = FastAPI()

# あらゆる通信を絶対に拒絶しない設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load = Loader('/tmp/skyfield-data')
ts = load.timescale()
eph = load('de421.bsp')

# 💡フォントエラーを防ぐため、サイン名と天体名は英語で処理します
SIGNS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]

VENUS_SIGN_COSMETICS = [
    {"sign": "Aries", "cosme": "ちゅるんとした透け感シアーレッドのリップティントカラー💄", "color": "ストロベリーピンク"},
    {"sign": "Taurus", "cosme": "お肌をふんわり上品に見せるラベンダーパウダーレース🎀", "color": "メルティベージュ"},
    {"sign": "Gemini", "cosme": "目元がうるうる輝く微細パールの入ったリキッドアイシャドウグリッター✨", "color": "ピスタチオグリーン"},
    {"sign": "Cancer", "cosme": "内側からぽわっと上気したような練りチークピーチピンク🍑", "color": "ミルクティピンク"},
    {"sign": "Leo", "cosme": "瞬きするたびドキッとさせる艶めきゴールドラメシャドウクローバー👑", "color": "サンセットオレンジ"},
    {"sign": "Virgo", "cosme": "素肌感を美しく引き立てるナチュラルでピュアな透明感パウダークリア", "color": "ピュアホワイト"},
    {"sign": "Libra", "cosme": "どんなお洋服にもマッチする王道のうるツヤ大人ピンクベージュリップミント", "color": "ローズピンク"},
    {"sign": "Scorpio", "cosme": "ちょっぴりミステリアスで大人っぽい深みボルドーのネイルマスカラ🔮", "color": "ヴィンテージワイン"},
    {"sign": "Sagittarius", "cosme": "お顔全体をパッと明るく見せてくれるビタミンカラーのハイライターキャンディ", "color": "シトラスイエロー"},
    {"sign": "Capricorn", "cosme": "凛とした美しさを引き出すブラウンニュアンスの大人アイライナーリボン", "color": "クラシックブラウン"},
    {"sign": "Aquarius", "cosme": "儚げで透明感が爆上がりするミントブルーのコントロールカラーベースアイス", "color": "ネオンラベンダー"},
    {"sign": "Pisces", "cosme": "うるうるの質感がたまらない透明なぷっくりツヤツヤグロスジュエル", "color": "アクアブルー"}
]

SWEET_MEANINGS = {
    ("Transit Sun", "Natal Sun"): "🎂Myニューイヤーのはじまり🎂 あなたという存在にスポットライトが当たる特別な日！いつもよりちょっぴり主役気分で、新しい目標を宣言しちゃおう！",
    ("Transit Sun", "Natal Mercury"): "おしゃべりスイッチONの日📣 あなたの言葉がみんなの心にすーっと届くよ。大切な連絡や、SNSの発信、ブログの更新をするなら今日が絶対おすすめ！",
    ("Transit Sun", "Natal Venus"): "🧸愛されヒロインモード🧸 あなたの「可愛い魅力」がじわじわ溢れ出ちゃう日！すれ違う人が思わず振り返るような、無敵のオーラをまとえるよ。ご褒ベを買っちゃおう♪",
    ("Transit Sun", "Natal Mars"): "エネルギー満タン！やる気スイッチ💥 ずっと後回しにしていたことに、楽しく一歩を踏出せる日。今日のあなたなら、どんな壁も「えいっ！」って乗り越えられちゃうよ！",
    ("Transit Sun", "Natal Jupiter"): "🌈神さまからのプチギフト🌈 ラッキーなことがトントン拍子で起こりそうな予感。笑顔でいるだけで、ハッピーな引き寄せが向こうからやってくるよ♪",
    ("Transit Venus", "Natal Sun"): "🦋きゅん活アップデート🦋 あなたの「好き！」という気持ちが満たされるご褒美デー。お気に入りのコスメやお洋服を身にまとって、お出かけしてみてね！",
    ("Transit Venus", "Natal Mercury"): "お耳が幸せになる日ロリポップ 心地いい音楽を聴いたり、推しの動画を見たり、友達とウキウキするおしゃべりを楽しんで。可愛いアイデアも浮かびそう！",
    ("Transit Venus", "Natal Venus"): "🌟ヴィーナス・リターン（金星回帰）🌟 恋愛運＆美容運が最高潮を迎える、あなただけの特別な日！自分へのとびきりのご褒美や、イメチェン、大好きな人へのアプローチに最高のタイミングだよ💖",
    ("Transit Venus", "Natal Mars"): "💘恋のロマンス警報発令中💘 眠っていた恋心がドキドキ動き出すかも！いつもよりちょっぴり素真になって、甘えてみるのが愛されるコツだよ♪",
    ("Transit Venus", "Natal Jupiter"): "🧁お砂糖たっぷりのハッピーライフ🧁 どこにいっても優しくされたり、欲しかったものをプレゼントされたり、甘〜い幸せに包まれる日。遠慮せず受け取ってね！",
    ("Transit Mercury", "Natal Sun"): "💡知的好奇心のスイッチ💡 「これ知りたい！」「やってみたい！」というアンテナがピピッと反応する日。本屋さんやネットサーフィンに素敵なヒントがあるよ！",
    ("Transit Mercury", "Natal Venus"): "💌きゅんとするメッセージ💌 好きな人や大切な友達から、心がほっこりするような嬉しい連絡が届くかも。あなたからも、可愛いスタンプ付きで連絡してみて♪",
    ("Transit Mercury", "Natal Jupiter"): "お悩みすっきり解決デー解決 難しく考えていたことが、「なーんだ、こうすればいいんだ！」って急にクリアになるよ。未来の楽しい作戦会議をひらこう！",
    ("Transit Mars", "Natal Sun"): "🔥無敵のエネルギーチャージ🔥 「絶対にやり遂げる！」という熱いパワーが湧いてくる日。ちょっとアクティブに身体を動かしたり、お部屋の模様替えをするのもスッキリして吉！",
    ("Transit Mars", "Natal Venus"): "⚡️恋の電撃スパイス⚡️ 刺激的な出会いや、ドキッとするようなドラマチックな展開があるかも？情熱的な星のパワーが、あなたの恋をちょっぴり後押ししてくれるよ。",
    ("Transit Jupiter", "Natal Sun"): "✨12年に一度のご褒美タイム✨ あなたの可能性が無限に広がる、最強の幸運期が到来！この日にスタートしたことは、これからぐんぐん大きく育っていくよ。自分を信じて進もう！",
    ("Transit Jupiter", "Natal Venus"): "🎀世界があなたに恋をする日🎀 恋愛も、人間関係も、楽しいことも全部欲張れちゃうキラキラデー。あなたを大切にしてくれる素敵な人とのご縁が結ばれるかも！",
    ("Transit Jupiter", "Natal Mercury"): "🚀才能の扉がパカッと開く🚀 あなたがこれまで頑張ってきたことや、得意なことがたくさんの人に認められるとき。自信を持って周りにアピールしてみてね！",
    ("Transit Saturn", "Natal Sun"): "🧸お守りモードの土台づくり🧸 これからのあなたをもっと強く、素敵にするための「心の整理整頓」がおこる日。焦らずゆっくり、自分のペースを愛してあげてね。",
    ("Transit Saturn", "Natal Venus"): "💎永遠のタカラモノを見つける日💎 一時のときめきではなく、これからもずっとずっと大切にしていきたい「本物の愛」や「絆」を、時間をかけてじっくり育てる落ち着いたパワーが流れています。",
}

PLANET_OBJECTS = {
    "Sun": eph['sun'], "Mercury": eph['mercury'], "Venus": eph['venus'], "Mars": eph['mars'],
    "Jupiter": eph['jupiter barycenter'], "Saturn": eph['saturn barycenter'],
    "Uranus": eph['uranus barycenter'], "Neptune": eph['neptune barycenter'], "Pluto": eph['pluto barycenter']
}

class NatalInput(BaseModel):
    year: int
    month: int
    day: int
    hour: int
    minute: int

def get_lon(body, time):
    astrometric = eph['earth'].at(time).observe(body)
    lat, lon, distance = astrometric.ecliptic_latlon()
    return lon.degrees

def get_lucky_cosmetic():
    now = datetime.now(timezone.utc)
    t = ts.utc(now.year, now.month, now.day, now.hour, now.minute)
    v_lon = get_lon(eph['venus'], t)
    
    sign_idx = int(v_lon // 30) % 12
    v_sign = SIGNS[sign_idx]
    
    for c in VENUS_SIGN_COSMETICS:
        if c["sign"] == v_sign:
            return c
    return VENUS_SIGN_COSMETICS[0]

@app.post("/api/fortune")
def get_fortune(birth: NatalInput):
    try:
        lucky = get_lucky_cosmetic()
        
        jst = timezone(timedelta(hours=9))
        birth_dt = datetime(birth.year, birth.month, birth.day, birth.hour, birth.minute, tzinfo=jst)
        birth_utc = birth_dt.astimezone(timezone.utc)
        t_birth = ts.utc(birth_utc.year, birth_utc.month, birth_utc.day, birth_utc.hour, birth_utc.minute)
        
        natal_positions = {}
        for name, body in PLANET_OBJECTS.items():
            natal_positions[name] = get_lon(body, t_birth)

        start_date = datetime.now(timezone.utc)
        hits = []
        
        for i in range(180):
            current_date = start_date + timedelta(days=i)
            t_current = ts.utc(current_date.year, current_date.month, current_date.day, 12, 0)
            
            for t_name, t_body in PLANET_OBJECTS.items():
                t_pos = get_lon(t_body, t_current)
                
                for n_name, n_pos in natal_positions.items():
                    diff = abs(t_pos - n_pos)
                    if diff > 180: diff = 360 - diff
                        
                    if diff <= 2.0:
                        meaning = SWEET_MEANINGS.get(
                            (f"Transit {t_name}", f"Natal {n_name}"), 
                            f"🌟星たちのハーモニー🌟 {t_name}とあなたの{n_name}がぴったり重なって、特別なエネルギーが満ちていくよ。"
                        )
                        # 画面表示用のタイトルをマッピング
                        title_jp = f"{t_name} x My {n_name}"
                        title_jp = title_jp.replace("Sun", "太陽").replace("Mercury", "水星").replace("Venus", "金星").replace("Mars", "火星").replace("Jupiter", "木星").replace("Saturn", "土星")
                        
                        hits.append({
                            "date": current_date.strftime("%m月%d日"),
                            "title": title_jp,
                            "text": meaning,
                            "days_away": i
                        })
                        break
        
        hits = sorted(hits, key=lambda x: x["days_away"])[:5]

        # 📊 グラフ生成（文字化けエラーを避けるため英語表記に変更）
        fig, ax = plt.subplots(figsize=(6, 3), facecolor='#FFF5F5')
        ax.set_facecolor('#FFFFFF')
        
        if hits:
            dates = [h["date"] for h in hits]
            labels = [h["title"] for h in hits]
            ax.plot(dates, [1]*len(dates), "o", color="#FF94B7", markersize=12)
            for idx, label in enumerate(labels):
                # 💡エラー回避のためグラフ内の表記をシンプルにします
                graph_label = label.split(" x ")[0] 
                ax.annotate(graph_label, (dates[idx], 1), textcoords="offset points", 
                            xytext=(0,15), ha='center', color="#555555", fontsize=9)
        else:
            ax.text(0.5, 0.5, "Calm Days", ha='center', va='center', color="#FF94B7")

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
