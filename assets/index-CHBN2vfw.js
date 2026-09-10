var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=`modulepreload`,r=function(e){return`./`+e},i={},a=function(e,t,a){let o=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function u(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}o=l(t.map(t=>{if(t=r(t,a),t=u(t),t in i)return;i[t]=!0;let o=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let r=e[n];if(r.href===t&&(!o||r.rel===`stylesheet`))return}let s=document.createElement(`link`);if(s.rel=o?`stylesheet`:n,o||(s.as=`script`),s.crossOrigin=``,s.href=t,c&&s.setAttribute(`nonce`,c),document.head.appendChild(s),o)return new Promise((e,n)=>{s.addEventListener(`load`,e),s.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(let e of t||[])e.status===`rejected`&&s(e.reason);return e().catch(s)})},o=t({Asteroid:()=>f,AsteroidOffset:()=>S,CalculationFlag:()=>g,CalculationFlags:()=>j,CalendarType:()=>l,CommonCalculationFlags:()=>_,CommonEclipseTypes:()=>y,DateTimeImpl:()=>k,EclipseType:()=>v,EclipseTypeFlags:()=>N,FictitiousPlanet:()=>p,HousePoint:()=>h,HouseSystem:()=>m,LunarEclipseImpl:()=>T,LunarPoint:()=>d,NumberOfPlanets:()=>23,Planet:()=>u,PlanetaryMoonOffset:()=>C,RiseTransitFlag:()=>x,SiderealMode:()=>b,SolarEclipseImpl:()=>D,SwissEphemeris:()=>L,default:()=>z,normalizeEclipseTypes:()=>F,normalizeFlags:()=>P,swisseph:()=>R}),s=Object.defineProperty,c=(e,t)=>s(e,`name`,{value:t,configurable:!0}),l=(e=>(e[e.Julian=0]=`Julian`,e[e.Gregorian=1]=`Gregorian`,e))(l||{}),u=(e=>(e[e.Sun=0]=`Sun`,e[e.Moon=1]=`Moon`,e[e.Mercury=2]=`Mercury`,e[e.Venus=3]=`Venus`,e[e.Mars=4]=`Mars`,e[e.Jupiter=5]=`Jupiter`,e[e.Saturn=6]=`Saturn`,e[e.Uranus=7]=`Uranus`,e[e.Neptune=8]=`Neptune`,e[e.Pluto=9]=`Pluto`,e[e.Earth=14]=`Earth`,e[e.EclipticNutation=-1]=`EclipticNutation`,e[e.FixedStar=-10]=`FixedStar`,e))(u||{}),d=(e=>(e[e.MeanNode=10]=`MeanNode`,e[e.TrueNode=11]=`TrueNode`,e[e.MeanApogee=12]=`MeanApogee`,e[e.OsculatingApogee=13]=`OsculatingApogee`,e[e.InterpolatedApogee=21]=`InterpolatedApogee`,e[e.InterpolatedPerigee=22]=`InterpolatedPerigee`,e))(d||{}),f=(e=>(e[e.Chiron=15]=`Chiron`,e[e.Pholus=16]=`Pholus`,e[e.Ceres=17]=`Ceres`,e[e.Pallas=18]=`Pallas`,e[e.Juno=19]=`Juno`,e[e.Vesta=20]=`Vesta`,e))(f||{}),p=(e=>(e[e.Cupido=40]=`Cupido`,e[e.Hades=41]=`Hades`,e[e.Zeus=42]=`Zeus`,e[e.Kronos=43]=`Kronos`,e[e.Apollon=44]=`Apollon`,e[e.Admetos=45]=`Admetos`,e[e.Vulkanus=46]=`Vulkanus`,e[e.Poseidon=47]=`Poseidon`,e[e.Isis=48]=`Isis`,e[e.Nibiru=49]=`Nibiru`,e[e.Harrington=50]=`Harrington`,e[e.NeptuneLeverrier=51]=`NeptuneLeverrier`,e[e.NeptuneAdams=52]=`NeptuneAdams`,e[e.PlutoLowell=53]=`PlutoLowell`,e[e.PlutoPickering=54]=`PlutoPickering`,e[e.Vulcan=55]=`Vulcan`,e[e.WhiteMoon=56]=`WhiteMoon`,e[e.Proserpina=57]=`Proserpina`,e[e.Waldemath=58]=`Waldemath`,e))(p||{}),m=(e=>(e.Placidus=`P`,e.Koch=`K`,e.Porphyrius=`O`,e.Regiomontanus=`R`,e.Campanus=`C`,e.Equal=`A`,e.VehlowEqual=`V`,e.WholeSign=`W`,e.Meridian=`X`,e.Azimuthal=`H`,e.PolichPage=`T`,e.Alcabitus=`B`,e.Morinus=`M`,e))(m||{}),h=(e=>(e[e.Ascendant=0]=`Ascendant`,e[e.MC=1]=`MC`,e[e.ARMC=2]=`ARMC`,e[e.Vertex=3]=`Vertex`,e[e.EquatorialAscendant=4]=`EquatorialAscendant`,e[e.CoAscendant1=5]=`CoAscendant1`,e[e.CoAscendant2=6]=`CoAscendant2`,e[e.PolarAscendant=7]=`PolarAscendant`,e))(h||{}),g=(e=>(e[e.JPLEphemeris=1]=`JPLEphemeris`,e[e.SwissEphemeris=2]=`SwissEphemeris`,e[e.MoshierEphemeris=4]=`MoshierEphemeris`,e[e.Heliocentric=8]=`Heliocentric`,e[e.TruePositions=16]=`TruePositions`,e[e.J2000=32]=`J2000`,e[e.NoNutation=64]=`NoNutation`,e[e.Speed3=128]=`Speed3`,e[e.Speed=256]=`Speed`,e[e.NoGravitationalDeflection=512]=`NoGravitationalDeflection`,e[e.NoAberration=1024]=`NoAberration`,e[e.Equatorial=2048]=`Equatorial`,e[e.XYZ=4096]=`XYZ`,e[e.Radians=8192]=`Radians`,e[e.Barycentric=16384]=`Barycentric`,e[e.Topocentric=32768]=`Topocentric`,e[e.Sidereal=65536]=`Sidereal`,e[e.ICRS=131072]=`ICRS`,e[e.DpsidepsIAU1980=262144]=`DpsidepsIAU1980`,e[e.JPLHorizons=524288]=`JPLHorizons`,e[e.JPLHorizonsApprox=1048576]=`JPLHorizonsApprox`,e))(g||{}),_={Astrometric:1536,DefaultSwissEphemeris:258,DefaultMoshier:260},v=(e=>(e[e.Central=1]=`Central`,e[e.NonCentral=2]=`NonCentral`,e[e.Total=4]=`Total`,e[e.Annular=8]=`Annular`,e[e.Partial=16]=`Partial`,e[e.AnnularTotal=32]=`AnnularTotal`,e[e.Penumbral=64]=`Penumbral`,e))(v||{}),y={AllSolar:63,AllLunar:84},b=(e=>(e[e.FaganBradley=0]=`FaganBradley`,e[e.Lahiri=1]=`Lahiri`,e[e.DeLuce=2]=`DeLuce`,e[e.Raman=3]=`Raman`,e[e.Ushashashi=4]=`Ushashashi`,e[e.Krishnamurti=5]=`Krishnamurti`,e[e.DjwhalKhul=6]=`DjwhalKhul`,e[e.Yukteshwar=7]=`Yukteshwar`,e[e.JNBhasin=8]=`JNBhasin`,e[e.BabylKugler1=9]=`BabylKugler1`,e[e.BabylKugler2=10]=`BabylKugler2`,e[e.BabylKugler3=11]=`BabylKugler3`,e[e.BabylHuber=12]=`BabylHuber`,e[e.BabylEtPSC=13]=`BabylEtPSC`,e[e.Aldebaran15Tau=14]=`Aldebaran15Tau`,e[e.Hipparchos=15]=`Hipparchos`,e[e.Sassanian=16]=`Sassanian`,e[e.GalacticCenter0Sag=17]=`GalacticCenter0Sag`,e[e.J2000=18]=`J2000`,e[e.J1900=19]=`J1900`,e[e.B1950=20]=`B1950`,e[e.SuryaSiddhanta=21]=`SuryaSiddhanta`,e[e.SuryaSiddhantaMeanSun=22]=`SuryaSiddhantaMeanSun`,e[e.Aryabhata=23]=`Aryabhata`,e[e.AryabhataMeanSun=24]=`AryabhataMeanSun`,e[e.SSRevati=25]=`SSRevati`,e[e.SSCitra=26]=`SSCitra`,e[e.TrueCitra=27]=`TrueCitra`,e[e.TrueRevati=28]=`TrueRevati`,e[e.TruePushya=29]=`TruePushya`,e[e.GalacticCenterGilBrand=30]=`GalacticCenterGilBrand`,e[e.GalacticEquatorIAU1958=31]=`GalacticEquatorIAU1958`,e[e.GalacticEquator=32]=`GalacticEquator`,e[e.GalacticEquatorMidMula=33]=`GalacticEquatorMidMula`,e[e.Skydram=34]=`Skydram`,e[e.TrueMula=35]=`TrueMula`,e[e.DhruvaGalCenterMulaWilhelm=36]=`DhruvaGalCenterMulaWilhelm`,e[e.Aryabhata522=37]=`Aryabhata522`,e[e.BabylBritton=38]=`BabylBritton`,e[e.UserDefined=255]=`UserDefined`,e))(b||{}),x=(e=>(e[e.Rise=1]=`Rise`,e[e.Set=2]=`Set`,e[e.UpperTransit=4]=`UpperTransit`,e[e.LowerTransit=8]=`LowerTransit`,e))(x||{}),S=1e4,C=9e3,w=class{constructor(e,t,n,r,i,a,o,s){this.type=e,this.maximum=t,this.partialBegin=n,this.partialEnd=r,this.totalBegin=i,this.totalEnd=a,this.penumbralBegin=o,this.penumbralEnd=s}isTotal(){return!!(this.type&4)}isPartial(){return!!(this.type&16)}isPenumbralOnly(){return!!(this.type&64)&&!(this.type&20)}getTotalityDuration(){if(!this.isTotal()||this.totalBegin===0||this.totalEnd===0)return 0;let e=(this.totalEnd-this.totalBegin)*24;return e>0?e:0}getPartialDuration(){if(this.partialBegin===0||this.partialEnd===0)return 0;let e=(this.partialEnd-this.partialBegin)*24;return e>0?e:0}getTotalDuration(){if(this.penumbralBegin===0||this.penumbralEnd===0)return 0;let e=(this.penumbralEnd-this.penumbralBegin)*24;return e>0?e:0}},T=(c(w,`LunarEclipseImpl`),w),E=class{constructor(e,t,n,r,i,a,o,s){this.type=e,this.maximum=t,this.partialBegin=n,this.partialEnd=r,this.centralBegin=i,this.centralEnd=a,this.centerLineBegin=o,this.centerLineEnd=s}isTotal(){return!!(this.type&4)}isAnnular(){return!!(this.type&8)}isHybrid(){return!!(this.type&32)}isPartial(){return!!(this.type&16)}isCentral(){return!!(this.type&1)}
:root {
  --bg-main: #0d0c0a; /* 🌌 夜空をイメージした洗練された漆黒 */
  --bg-input-card: #181614; /* 💡 入力エリアは高級感のある黒 */
  
  /* 💜 メッセージカード専用の神秘的なくすみパープル */
  --bg-msg-card: linear-gradient(135deg, #231b30 0%, #1a1526 100%); 
  
  --text-main: #faf6f0; /* 生成りホワイトで目に優しい明るさ */
  --text-sub: #c4b9ae; /* 読みやすさを追求した明るいベージュ */
  --accent-gold: #c5a880; /* 上品なアクセントゴールド */
  --border-light: rgba(197, 168, 128, 0.2);

  /* 🎨 漆黒と紫の背景に美しく映える、光を宿したくすみカラーパレット */
  --planet-color-0: #f0a395; /* 太陽: シルキーピンク */
  --planet-color-2: #a5b7d4; /* 水星: ミスティブルー */
  --planet-color-3: #ebd0d9; /* 金星: シャンパンローズ */
  --planet-color-4: #de9b8e; /* 火星: コーラルレッド */
  --planet-color-5: #e3cca1; /* 木星: ルミナスゴールド */
  --planet-color-6: #b8b1aa; /* 土星: スモーキーグレー */
  --planet-color-7: #a7bfae; /* 天王星: ペールミント */
  --planet-color-8: #cbbce3; /* 海王星: シアーラベンダー */
  --planet-color-9: #948294; /* 冥王星: アンティークモーヴ */
}

body {
  background-color: var(--bg-main) !important;
  color: var(--text-main) !important;
}

.container { max-width: 680px; margin: 0 auto; padding: 40px 20px; }

.header { text-align: center; margin-bottom: 32px; }
.header h1 { font-family: 'Noto Serif JP', serif; font-weight: 700; font-size: 24px; letter-spacing: 0.05em; color: var(--text-main); }
.header .subtitle { color: #b3a79d !important; }
.input-card { 
  background: var(--bg-input-card); 
  padding: 24px; 
  border-radius: 16px; 
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4); 
  margin-bottom: 32px; 
  border: 1px solid var(--border-light); 
}

.input-card label { color: #b3a79d; font-size: 13px; font-weight: 500; display: block; margin-bottom: 6px; }

.form-control { 
  width: 100%; 
  padding: 12px; 
  font-size: 14px; 
  border: 1px solid rgba(226, 222, 213, 0.15); 
  border-radius: 8px; 
  background-color: #24211e; 
  color: var(--text-main); 
  outline: none; 
}
.form-control::-webkit-calendar-picker-indicator { filter: invert(0.9); }

.btn-submit { 
  width: 100%; 
  padding: 14px; 
  background: var(--accent-gold); 
  color: #0d0c0a; 
  border: none; 
  border-radius: 8px; 
  font-size: 15px; 
  font-weight: 700; 
  cursor: pointer; 
  letter-spacing: 0.05em; 
  transition: opacity 0.2s;
}
.btn-submit:hover { opacity: 0.9; }
.btn-submit:disabled { background: #4a443f; color: #b3a79d; cursor: not-allowed; }

.filter-tabs { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 12px; margin-bottom: 24px; }
.tab-btn { white-space: nowrap; padding: 8px 14px; background: #24211e; border: 1px solid var(--border-light); border-radius: 20px; font-size: 13px; color: #b3a79d; cursor: pointer; }
.tab-btn.active { background: var(--text-main); color: var(--bg-main); border-color: var(--text-main); font-weight: 700; }
.schedule-card {
  position: relative; 
  margin-bottom: 16px; 
  padding: 18px; 
  border-radius: 12px; 
  background: var(--bg-msg-card) !important; 
  box-shadow: 0 4px 20px rgba(15, 10, 25, 0.5); 
  border-left: 4px solid var(--p-color, var(--accent-gold));
  border-top: 1px solid rgba(197, 168, 128, 0.12);
  border-right: 1px solid rgba(197, 168, 128, 0.05);
  border-bottom: 1px solid rgba(197, 168, 128, 0.05);
}

.card-badge {
  display: inline-block; 
  font-size: 11px; 
  padding: 2px 10px; 
  border-radius: 12px; 
  margin-bottom: 10px; 
  background: rgba(13, 12, 10, 0.4) !important; 
  color: var(--text-sub) !important;
  border: 1px solid rgba(197, 168, 128, 0.15);
}

.card-title {
  font-family: 'Noto Serif JP', serif; 
  font-size: 16px; 
  color: var(--text-main) !important; 
  margin-bottom: 8px; 
  font-weight: 700;
  letter-spacing: 0.02em;
}

.card-desc {
  font-size: 13px; 
  color: var(--text-sub) !important; 
  line-height: 1.6; 
  padding-right: 24px;
}

.retro-notice {
  margin-top: 12px !important; 
  padding: 10px 14px !important; 
  background: rgba(255, 158, 187, 0.08) !important; 
  border-radius: 8px !important; 
  font-size: 12px !important; 
  color: #ff9ebb !important; /* 💖 高発色なネオンルミナスピンク */
  border: 1px dashed rgba(255, 158, 187, 0.4) !important; 
  font-weight: 700 !important; 
  letter-spacing: 0.03em !important;
  text-align: left !important; 
  line-height: 1.5 !important;
}

.astrologer-column {
  margin-top: 48px; 
  padding: 24px; 
  background: var(--bg-msg-card) !important; 
  border-radius: 16px; 
  border: 1px solid var(--border-light) !important; 
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.4); 
  text-align: center;
}
.astrologer-column h4 { color: var(--text-main) !important; }
.astrologer-column p { color: var(--text-sub) !important; }

.schedule-card.planet-0 { --p-color: var(--planet-color-0); }
.schedule-card.planet-2 { --p-color: var(--planet-color-2); }
.schedule-card.planet-3 { --p-color: var(--planet-color-3); }
.schedule-card.planet-4 { --p-color: var(--planet-color-4); }
.schedule-card.planet-5 { --p-color: var(--planet-color-5); }
.schedule-card.planet-6 { --p-color: var(--planet-color-6); }
.schedule-card.planet-7 { --p-color: var(--planet-color-7); }
.schedule-card.planet-8 { --p-color: var(--planet-color-8); }
.schedule-card.planet-9 { --p-color: var(--planet-color-9); }
`,V={"0_0_120":{title:`がんばらなくても大丈夫。あなたが自然に褒められるご褒美デー`,desc:`💻【仕事】無理に自分を大きく見せたり気合いを入れすぎなくても、いつものあなたのままで仕事がサクサク進む日です。周りの人から「いつもありがとう」と言われたり、頑張りが自然と認められやすいよ。のびのびと自分のペースで仕事を楽しんでね。
❤️【恋愛】飾らないいつものあなたが一番愛される日。気になるお相手とも、緊張せずにリラックスして楽しいおしゃべりができます。お気に入りの靴を履いてお出かけすると、さらに嬉しいお誘いが入るかも。
🪙【金運】嬉しいご褒美が舞い込みやすいハッピーな日。いつも頑張っている自分へ「お疲れ様」の気持ちを込めて、ずっと欲しかったものを素真面目に買ってあげると、お金の巡りがどんどん良くなります。`},"0_1_120":{title:`心のお財布をゆるめて。感情がふんわり満たされる極上のお休みデー`,desc:`💻【仕事】職場の人間関係がとても優しくなって、トゲトゲした空気が消える日。お互いに助け合いながら、穏やかなペースで仕事が進みます。今日はピリピリせず、職場の机の上を少し片付けたり、次の準備をのんびりやるのがおすすめ。
❤️【恋愛】プライベートの幸せが優しく満たされる日。おうちで一緒においしいスイーツを食べたり、ゴロゴロしながら映画を観るような、あったかいデートが一番うまくいきます。素のあなたを見せるのがカギ。
🪙【金運】おうちの暮らしをちょっとリッチにするプチお買い物がおすすめ。上質なフカフカのタオルや、リラックスできるお気に入りの香りのアロマを買うと、心が落ち着いてさらに良いお金の引き寄せが起きます。`},"0_2_120":{title:`頭がスッキリ冴え渡る！おしゃべりやメールがサクサク進む知性日`,desc:`💻【仕事】頭の回転がとっても軽やかになる日！ブログやSNSの文章を書いたり、大事なメールの返信、会議での発表、アイデア出しはすべて今日やるのがベスト。バラバラだった考えがまとまり、あなたの言葉が周りにきれいに伝わります。
❤️【恋愛】言葉のセンスがとても可愛くなる日。デートの約束をしたり、メッセージのやり取りをすると、驚くほど自然に会話が大盛り上がりします。ずっと伝えたかったメッセージを思い切って送るのにも最高のタイミング。
🪙【金運】お仕事用の勉強グッズ or 必要な書類の手続きを丁寧に進めるのにぴったりな日。欲しかった本や、自分を高めるためのマニュアル、便利なツールなどを買うと、使ったお金以上のお得な結果になって返ってきます。`},"0_3_120":{title:`愛され運がマックス！ただそこにいるだけでみんなに優しくされる日`,desc:`💻【仕事】あなたの可愛いセンスやお洒落が、職場の人やお客さまから大絶賛される日。堅苦しいやり取りも、あなたの笑顔と明るい愛嬌のおかげで、面白いほどトントン拍子に進みます。自信を持って周りを引っ張ってね。
❤️【恋愛】恋の追い風がびゅんびゅん吹く日！可愛くお洒落をしてお出かけすると、行く先々で親切にされたり、嬉しいおねだりがすんなり通りやすいよ。気になるお相手へのメッセージも今日送るのが絶対にオススメ✨
🪙【金運】欲しかったコスメやファッション、自分をいたわるケアグッズを買うのにこれ以上ない最高の日。値段で迷っていたものも、今日買うと心が120%大満足して、お財布にもハッピーな豊かさが返ってきます。`},"0_4_120":{title:`フットワークが超軽い！面倒なことも笑顔でクリアできるアクティブ日`,desc:`💻【仕事】体と心の元気がぴったり噛み合って、いつもなら「面倒だな」と思う仕事もサクサク動いて片付けられる日！フットワーク軽く新しいお仕事に挑戦したり、たまった作業を爆速で終わらせるパワーが長続きします。
❤️【恋愛】あなたの素真面目な「好き」の気持ちが、お相手の心に真っ直ぐ届く日。気まずかった関係を新しくやり直したり、自分から「ここに行こう！」と明るくデートに誘うと、お相手もすんなり喜んで乗ってくれます。
🪙【金運】フットワーク軽く外にお出かけした先に、嬉しい金運のヒントがあります。新しく運動やスポーツを始めたり、毎日を元気にする健康的なアイテム、アクティブに動くための新しい靴への投資が大大吉です。`},"0_0_90":{title:`焦りは禁物。ハーブティーを飲んでゆっくり進むお休みデー`,desc:`💻【仕事】なんだかやる気にブレーキがかかるように感じるかも。焦って無理に進めようとせず、今日は書類のミスをチェックしたり、机の片付けをしてのんびり過ごすのが大正解です。
❤️【恋愛】自分を可愛く見せようと無理をして、ちょっぴり空回りしやすい日。お相手の顔色を気にしすぎなくても大丈夫。今日は無理に会おうとせず、おうちで自分のためにパックをしてゆっくり過ごしてね。
🪙【金運】ストレスがたまると、ついネットショッピングで衝動買いしたくなっちゃうかも！お財布を開く前にあったかいお茶を飲んで一呼吸置くと、本当に必要なものだけを選べて、無駄遣いをきれいに防げます。`},"0_1_90":{title:`感情がうるうる揺れやすい日。スマホを閉じて早く寝るのが大正解`,desc:`💻【仕事】身近な人のちょっとした一言に、いつもより心がチクッと傷ついてしまいがち。全部星の引力のせいにして、今日は難しい仕事は明日に回し、自分の心を一番に守って定時でサクッと帰りましょう！
❤️【恋愛】寂しさや不安から、お相手に「もっと優しくして！」と可愛いわがままを拗らせてケンカしちゃいそうな予感。モヤモヤしたらスマホを閉じて、ふわふわの毛布にくるまって早く寝るのが一番の開運です。
🪙【金運】寂しさやイライラを、お買い物や甘いものでドカンと埋めたくなったら星のいたずら。今日はお財布をバッグの奥にしまって、コンビニのちょっとおいしい贅沢スイーツを1個だけ買って自分を甘やかしてね。`},"0_3_90":{title:`お買い物欲が暴走しそう！？わがままをスイーツで癒やすリセット日`,desc:`💻【仕事】集中力が途切れがちで、プライベートのことやお洒落のことばかり考えて上の空になっちゃうかも。仕事中は「1時間だけがんばる！」と細かく時間を区切って、お気に入りの香りで気分転換をしてね。
❤️【恋愛】お相手のちょっとした態度にヤキモチを焼いて、1人でモヤモヤ悩んで疲れてしまうかも。それはあなたがピュアな証拠。今日はお相手を追いかけず、大好きな友達とおしゃべりしてエネルギーを逃がして✨
🪙【金運】可愛いお洋服やコスメ見つけて、お財布の予算をオーバーしそうなお買い物欲がむくむく湧いてきそう！「今日じゃなくても大丈夫」と自分に言い聞かせて、本当に大きな買い物は数日待つのが大正解です。`},"0_4_90":{title:`心がソワソワ焦る日。勢いで決めずに、一呼吸置いて進おう`,desc:`💻【仕事】気持ちばかりが焦って空回りし、予定が急に変わってイライラしやすい日。フライングして失敗しそうな時は、あったかいお茶を飲んで、もう一度今日のスケジュールをノートに優しく書き直してみてね。
❤️【恋愛】気持ちが焦って、お相手にちょっぴりキツい口調で怒りをぶつけてしまいがち。売り言葉に買い言葉になりそうな時はストップ！お気に入りの音楽を聴いて、まずは自分の心を一番に甘やかしてあげて。
🪙【金運】焦って大きな買い物の契約をしたり、勢いに任せてお金を動かすと、後で「失敗したな」と後悔しがち。今日はお札を動かさず、おいしいスープでも飲んでおうちでのんびり過ごしのが一番のラッキーです。`},"2_0_0":{title:`言葉の魔法が使える日！大事な連絡やブログの書き込みに最高の日`,desc:`💻【仕事】頭の回転がいつもより何倍もスッキリ早くなる日です！ブログやSNSの文章を書いたり、大事なメールの返信、会議での発表、これからの計画を立てる仕事はすべて今日やるのがベスト。あなたのアイデアが周りにきれいに伝わり、面白いほどすんなりOKが貰えます。
❤️【恋愛】おしゃべりのテンポがとっても心地よく弾む日。ずっと言えずにいた真面目なおねがいや、今後の相談ごとを、重くならずにサラッと優しく伝えるのに一番良いタイミングです。夜にLINEを送るのも大吉。
🪙【金運】色々と調べることで、おトクな情報が見つかる日。スマホやパソコンの買い替え、お仕事に役立つ便利なツールの購入、スキルアップのための勉強にお金を使うと、あとで何倍ものプラスになって返ってきます。`},"2_1_0":{title:`自分の『本当の気持ち』と向き合う日。ノートに願いを書くノートタイム`,desc:`💻【仕事】これからの目標ややりたい仕事を、ノートに書き出して頭の中を整理するのにぴったりな日。ゴチャゴチャしていた作業の順番がすっきり分かって、明日から何をすればいいか、具体的なステップがキレイに見えてきます。
❤️【恋愛】心の中にある「本当はもっとこうしたい」という優しい本音に気づける日。お気に入りのカフェで手帳に想いを書き出してみると、お相手に対して意地を張らない、一番素直で可愛い言葉が見つかるよ。
🪙【金運】これからの毎日の暮らしに役立つ、知的なお買い物にツキがあります。おうちで家計簿をつけたり、これからの計画的なお金の細かな計算を静かに進めておくと、おサイフの神様が味方してくれます。`},"2_3_0":{title:`おしゃべりが楽しすぎる日！あなたの言葉が周りをハッピーにする日`,desc:`💻【仕事】あなたの書く文章や発言に、可愛い愛嬌とハッピーな魅力が最高に乗る日です！SNSでの告知、接客や営業トーク、お店の案内文は今日書くのが大成功のコツ。親しみやすい言葉で発信すると、ファンがドカンと増えます。
❤️【恋愛】メッセージがスムーズに弾むトキメキ日！お相手をクスッと笑わせる可愛いスタンプを送ったり、小さなおねだりを伝えてみると、驚くほどトントン拍子にデートの約束が決まっちゃうような楽しい波です。
🪙【金運】センスの良い素敵なおトク情報が集まる日。お洒落な友人からのクチコミを頼りに、気になっていた話題の美容アイテムや、自分へのご褒美スイーツをネットでポチッと買うと、大満足のお買い物ができます。`},"2_4_0":{title:`迷いが消えてサクッと決まる！たまった作業を爆速で片付ける日`,desc:`💻【仕事】ウジウジ悩むのを完全にやめて、即断即決で動ける日！たまっていた面倒な事務作業、山積みのメール返信、後回しにしていた苦手なタスクを、驚くほどのスピードで一気に終わらせてスッキリできます。
❤️【恋愛】心のモヤモヤや弱気がバサッと消え去ります。自分から自然な流れで「ここに行こう！」とデートに誘ったり、お相手との関係を一歩前に進めるための、ハッキリとした優しい勇気が湧いてくる日です。
🪙【金運】お買い物の決断力が上がる日。買おうか長年ずっと迷っていたお仕事用の機材や、自分を高めるための勉強レッスン代など、必要なものへスピーディーにお金を支払うと、未来の豊かさを力強く呼び寄せます。`},"2_0_90":{title:`連絡のすれ違いやスマホの誤送信に注意。確認重視の丁寧ピリオド`,desc:`💻【仕事】頭が急いで空回りしやすく、メールの誤字脱字やスケジュールの勘違いが起きやすいとき。大事な連絡や契約の返信は、送る前にもう一度「宛先」と「日時」を指差し確認すると、星のイタズラを完璧に防げます。
❤️【恋愛】「そんなつもりで言ったんじゃないのに…」という言葉のすれ違いが起きやすい波。文章がそっけなくなりがちなので、可愛い絵文字やスタンプをいつもより多めに添えて気持ちをまろやかに伝えてね。
🪙【金運】ネットの買い物で、サイズや色を間違えてポチッと注文してしまいがち。決済ボタンを押す前に、買い物かごの中身をゆっくり見直すのが大正解です。`},"2_4_90":{title:`言葉がちょっぴりトゲトゲしちゃうかも。一拍置いて話す作戦期`,desc:`💻【仕事】正論を相手にぶつけたくなったり、周りの仕事の遅さにイライラしちゃうかも。それはあなたの知性が鋭くなっている証拠です。会議では一呼吸置いてから発言すると、あなたの評価がグッと高まります。
❤️【恋愛】お相手に対して「なんで分かってくれないの？」と、言葉のキックを飛ばしたくなる予感。モヤモヤしたらスマホを裏返し、お気に入りの音楽を大音量で聴いて自分の脳内をゴキゲンにしよう✨
🪙【金運】「今すぐ買わなきゃ！」と焦って焦燥感からお金を払いたくなるかも。今買わなくても逃げません。あったかいココアでも飲んで、一晩寝かせてからもう一度考えてみて。`},"3_0_0":{title:`愛されオーラが全開！ただそこにいるだけでみんなに優しくされる日`,desc:`💻【仕事】あなたの可愛いセンスや笑顔が120%発揮される日。あなたが職場にいるだけで雰囲気がパッと明るくなり、接客やお願いごとがびっくりするほどまろやかに進みます。自分の意見も自信を持って伝えてね。
❤️【恋愛】お姫様スポットライトデー！あなたの魅力が一番輝くので、お相手から褒め言葉を貰いやすいハッピー日です。デートの約束をしたり、新しい出会いの場にお出かけするのにこれ以上ない最高の日。
🪙【金運】美容や自分磨きへのお金使いが大吉。可愛くお洒落をしてお出かけすると、行く先々で親切にされたり、ずっと欲しかったコスメや洋服を最高のタイミングで手に入れられるような嬉しい引き寄せがあります。`},"3_1_0":{title:`おうち時間を最高にリッチに。大好きな空間でのんびり過ごす贅沢デー`,desc:`💻【仕事】ガツガツがんばるのをそっとお休みして、心地よいペースでお仕事をがんばる日。仕事デスクの上にお気に入りの小物を1つ置くだけで、頭の中がスッキリして、良いアイデアがふんわり浮かんできます。
❤️【恋愛】プライベートの心が100%満たされる日。おうちでおいしいお茶を淹れて、親しい人と他愛ないおしゃべりをしたり映画をのんびり観るような、リラックスしたおうちデートで愛が深まります。
🪙【金運】インテリアや上質なルームウェア、おうち時間を贅沢にしてくれるお取り寄せスイーツにお金を使うのが大吉。心がホッと満たされるお買い物をすることで、おサイフの巡りもどんどん良くなります。`},"3_2_0":{title:`送るメッセージに恋の魔法がかかる✨ 嬉しい返信がすぐ届くトキメキ日`,desc:`💻【仕事】あなたが作る文章やお礼のメールに、とても優しい気配りが宿る日。日頃お世話になっている人へ感謝のメッセージを送ると、仕事の信頼関係がバシッと強くなって、これからの作業がサクサク進みます。
❤️【恋愛】送るLINEに可愛い魔法がかかる日！可愛くおねだりするメッセージを送ったりデートの約束を提案すると、お相手から驚くほどトントン拍子に嬉しい返信が返ってくる楽しいタイミングです。
🪙【金運】読みたかった本や、センスを磨くための習い事マニュアルを探すのに向いている日。言葉を扱う趣味や、知的な自分磨きへのプチ投資が、将来大きなハッピーになってあなたに返ってきます。`},"3_4_90":{title:`「ご褒美」のやりすぎにちょっぴり注意。自分を甘やかすリセット期`,desc:`💻【仕事】お仕事モードが完全にオフになり、サボりたくなったり甘いものばかり食べたくなっちゃうかも！そんな時は「30分だけ集中したら美味しいチョコを食べる」と自分に可愛いニンジンをぶら下げて乗り切ろう。
❤️【恋愛】寂しがりやな自分や、おねだりしたい気持ちがムクムク湧いてきて空回りしやすいとき。お相手にぶつける前に、まずは自分自身に「毎日がんばっててエライ！」と声をかけて、お気に入りの入浴剤でお風呂を楽しんで。
🪙【金運】お買い物欲が暴走して、予算オーバーのコスメや洋服を勢いで買ってしまいがち。今日はお財布をバッグの奥深くにしまって、ウインドウショッピングで可愛いエネルギーを充電するだけに留めるのが大大吉。`},"4_0_0":{title:`やる気エンジン全開！ダメ元で一歩踏み出すと壁をぶち抜ける日`,desc:`💻【仕事】圧倒的なやる気と行動力が見る日です！「いつかやろう」と後回しにしていた大変な仕事や、苦手な人への連絡、新しい企画の提案など、今日のうちに強気でダイレクトに切り込んで片付けちゃいましょう。
❤️【恋愛】普段なら恥ずかしくて待ってしまう場面でも、今日だけは自分から大胆にリードしたくなる熱いパッションが宿ります。受け身の恋愛を卒業して、自分から楽しいお誘いを仕掛ける大チャンス！
🪙【金運】勝負運がめちゃくちゃ強い大吉日。ずっとやりたかったお仕事の計画にお金を投資したり、独立に向けた具体的な一歩としておサイフを開くのが最高。自分を信じて動くことで、未来の豊かさを掴めます。`},"4_1_0":{title:`モヤモヤをパワーに変える！お部屋を丸ごと大掃除するお片付けデー`,desc:`💻【仕事】心の中にため込んでいたイライラが、ものすごい突破力に変わる日。たまったゴミや古い書類、いらないデータをバサバサと一気に整理して、お仕事環境をすっきり新しく生まれ変わらせて大吉。
❤️【恋愛】ちょっぴり短気になりやすい反面、自分の本音をしっかりと行動に移せるパワフルな日です。感情をお相手にぶつけそうな時は、思いきりスポーツをしたりカラオケに行って、元気に発散させてね。
🪙【金運】おうちをピカピカに掃除するための便利グッズを買ったり、スタミナをつけるための贅沢なお肉料理にお金を使うのが大吉。お部屋と体の中をすっきり綺麗に整えることで、金運の通り道がキレイになります。`},"4_2_0":{title:`頭のキレが最高レベル！たまった事務作業を爆速で片付ける日`,desc:`💻【仕事】あなたの知性に強烈なブースターがつきます！言葉のスピードが速くなり、面倒な書類作成や事務作業、山積みの連絡を一気に爆速で片付けられます。会議での議論や交渉事でも、あなたが主導権を握れます。
❤️【恋愛】お互いの本音をぶつけ合う徹底的な対話に向いている日。売り言葉に買い言葉でケンカにならないよう、一呼吸置きながら優しく、でも本気で向き合うことで、うやむやだった関係がすっきり解決します。
🪙【金運】作業の効率を劇的にアップさせてくれる最新のスマホやパソコン、便利なツールを購入すると大正解。ここで使うお仕事ツールへの投資は、あとから何倍もの成果になってあなたの手元に戻ってきます。`},"4_3_0":{title:`あなたが恋の主導権を握る時！お洒落をして大胆にアプローチする日`,desc:`💻【仕事】あなたの作品やクリエイティブなアイデアが、周りの人の心を熱く揺さぶる日。一歩前に出て、攻めの発信や自分の価値を大きくアピールする発信をすると、驚くほど大成功を収めます。
❤️【恋愛】強烈なときめきが湧き上がる日！大人な余裕を持って、お相手を可愛く転がしたり、自分からデートを仕掛けて主導権をガチッと握っちゃいましょう。いつもよりお色気のあるメイクが武器になるよ。
🪙【金運】お洒落の攻め期です！いつもより大胆なお洋服、勝負コスメ、大人の香水を購入すると、あなたの放つ引力が最大に跳ね上がります。自分を1番輝かせるためのお買い物が、最高の金運を呼びます。`},"4_3_120":{title:`趣味も仕事もパッション全開！あなたの『好き』が周りを巻き込むとき`,desc:`💻【仕事】あなたのクリエイティブなアイデアや、熱い情情熱にスポットライトが当たるとき。やりたかった企画を発信したり、自分の作品を周りにアピールすると、驚くほどトントン派手にファンや味方が増えていきます。
❤️【恋愛】恋の戦闘力が最高レベルにアップ！受け身の姿勢をやめて、自分から「ここに行きたいな！」と明るくデートを仕掛けると、お相手のハートをガチッと射止めちゃうようなハッピーな引き寄せ期です✨
🪙【金運】自分を一番輝かせるためのお洒落、勝負コスメ、大人の香水への投資が最高の金運を呼びます。お財布を開いて新しい自分の魅力を手に入れることで、未来の豊かな財運が力強く動き出します。`}},H=null,U=[],W=[{id:0,name:`自分自身・本質`,emoji:`☉`},{id:1,name:`私生活・心`,emoji:`☾`},{id:2,name:`知性・会話`,emoji:`☿`},{id:3,name:`恋愛・楽しさ`,emoji:`♀`},{id:4,name:`やる気・行動`,emoji:`♂`},{id:5,name:`拡大・幸運`,emoji:`♃`},{id:6,name:`課題・試練`,emoji:`♄`},{id:7,name:`個性・打破`,emoji:`♅`},{id:8,name:`理想・スピ`,emoji:`♆`},{id:9,name:`底力・リreset`,emoji:`♇`}],G=[{id:0,name:`太陽（舞台）`,emoji:`☉`},{id:2,name:`水星（仕事）`,emoji:`☿`},{id:3,name:`金星（ワクワク）`,emoji:`♀`},{id:4,name:`火星（情熱）`,emoji:`♂`}];async function K(e,t){try{if(H&&typeof H.calculatePosition==`function`){let n=await H.calculatePosition(e,t,0);if(n&&typeof n.longitude==`number`&&!isNaN(n.longitude))return n.longitude}}catch{}let n=(e-2451545)/36525,r=e-2451545,i={0:{L:280.466+36000.77*n,w:282.937,e:.0167},1:{L:218.316+481267.88*n,w:83.353,e:.0549},2:{L:252.251+149472.67*n,w:77.456,e:.2056},3:{L:181.979+58517.815*n,w:131.532,e:.0068},4:{L:355.453+19140.303*n,w:336.041,e:.0934},5:{L:34.404+3034.746*n,w:14.753,e:.0484},6:{L:49.944+1222.114*n,w:92.431,e:.0541},7:{L:313.232+428.482*n,w:170.964,e:.0473},8:{L:304.88+218.459*n,w:44.971,e:.0086},9:{base:240,speed:.004}};if(t===9){let e=(i.base+r*i.speed)%360;return e<0?e+360:e}let a=i[t]||i,o=a.L%360;o<0&&(o+=360);let s=(o-a.w)*Math.PI/180,c=(2*a.e-a.e**3/4)*Math.sin(s)+1.25*a.e**2*Math.sin(2*s),l=o+c*180/Math.PI;if(t===2||t===3||t===4){let e=i.L%360,n=(o-e)*Math.PI/180;l+=(t===2?14:t===3?28:8.5)*Math.sin(n)}return l%=360,l<0?l+360:l}function q(e){let t=e.getUTCFullYear(),n=e.getUTCMonth()+1,r=e.getUTCDate(),i=e.getUTCHours()+e.getUTCMinutes()/60+e.getUTCSeconds()/3600;n<=2&&(--t,n+=12);let a=Math.floor(t/100),o=2-a+Math.floor(a/4);return Math.floor(365.25*(t+4716))+Math.floor(30.6001*(n+1))+r+o-1524.5+i/24}function J(e,t,n){return n===`上旬`?`1日～10日`:n===`中旬`?`11日～20日`:`21日～${new Date(e,t,0).getDate()}日`}async function Y(){let e=document.createElement(`style`);e.textContent=B,document.head.appendChild(e);try{H=new(z||o)({ephePath:`./ephe/`,wasmBinaryFile:`./assets/swisseph-BmP0Bw24.wasm`})
,H&&typeof H.init==`function`&&await H.init()}catch{}let t=localStorage.getItem(`astrology_birthdate`)||`1995-10-10T12:00`,n=localStorage.getItem(`astrology_scan_year`)||`2026`,r=document.getElementById(`app`);if(!r)return;r.innerHTML=`
    <div class="container">
      <div class="header">
        <h1>クロノスコープ運勢</h1>
        <p class="notice-text">
          🔮 効果の保証はありません
        </p>
        <p class="author">
          produced by れいさん
        </p>
      </div>
      <div class="input-card">
        <div class="form-row">
          <div class="form-group" 
               style="grid-column:span 2;">
            <label>生まれた日時</label>
            <input type="datetime-local" 
                   id="birthdate" 
                   class="form-control" 
                   value="${t}">
          </div>
        </div>
        <div class="form-row" 
             style="margin-top: 12px;">
          <div class="form-group" 
               style="grid-column:span 2;">
            <label>占いたい西暦</label>
            <input type="number" 
                   id="scanyear" 
                   class="form-control" 
                   value="${n}" 
                   min="1900" max="2100">
          </div>
        </div>
        <button id="calcBtn" 
                class="btn-submit" 
                style="margin-top:16px;">
          スキャン！
        </button>
      </div>
      <div id="resultSection" 
           style="display: none;">
        <div class="filter-tabs" 
             id="filterTabs">
          <button class="tab-btn active" 
                  data-type="all">
            ✨ すべて
          </button>
          <button class="tab-btn" 
                  data-type="good">
            💖 好調期
          </button>
          <button class="tab-btn" 
                  data-type="bad">
            ⚠️ 注意期
          </button>
        </div>
        <div class="schedule-list" 
             id="scheduleList"></div>
      </div>
    </div>`;let i=document.getElementById(`calcBtn`);i&&i.addEventListener(`click`,X),Q()}async function X(){let e=document.getElementById(`birthdate`).value,t=document.getElementById(`scanyear`).value;if(!e||!t){alert(`入力してね✨`);return}localStorage.setItem(`astrology_birthdate`,e),localStorage.setItem(`astrology_scan_year`,t);let n=document.getElementById(`calcBtn`),r=document.getElementById(`resultSection`);n.disabled=!0,r.style.display=`none`,U=[];let i=W,a=q(new Date(e)),o={};for(let e=0;e<i.length;e++){let t=i[e],n=await K(a,t.id);o[String(t.id)]=typeof n==`number`&&!isNaN(n)?n:0}let s=parseInt(t,10),c=s%4==0&&s%100!=0||s%400==0?366:365,l=new Date(s,0,1,12,0,0),u=q(l),d={0:5,2:2.5,3:3,4:4},f=[0,2,3,4],p=[{angle:0,name:`合 (0°)`,emoji:`☌`,type:`good`},{angle:120,name:`トライン`,emoji:`△`,type:`good`},{angle:90,name:`スクエア`,emoji:`□`,type:`bad`},{angle:180,name:`オポ`,emoji:`☍`,type:`bad`}],m=[],h={};for(let e=1;e<=12;e++)[`上旬`,`中旬`,`下旬`].forEach(t=>{let n=`${e}_${t}`;m.push(n),h[n]={monthNum:e,periodName:t,rangeStr:J(s,e,t),allAspects:[]}});for(let e=0;e<c;e++){e%15==0&&await new Promise(e=>setTimeout(e,1));let t=u+e,n=new Date(l.getTime()+e*24*60*60*1e3),r=n.getMonth()+1,a=n.getDate(),s=`下旬`;a<=10?s=`上旬`:a<=20&&(s=`中旬`);let c=h[`${r}_${s}`];if(c)for(let e=0;e<f.length;e++){let n=f[e],r=G.find(e=>e.id===n),s=await K(t,n),l=d[n]||3;for(let e=0;e<i.length;e++){let t=i[e],u=o[String(t.id)],d=Math.abs(s-u);d>180&&(d=360-d);for(let e=0;e<p.length;e++){let i=p[e],o=Math.abs(d-i.angle);if(o<=l){let e=V[`${n}_${t.id}_${i.angle}`];e&&c.allAspects.push({transitPlanet:r,natalPlanet:t,aspect:i,score:o,dayNumber:a,title:e.title,desc:e.desc})}}}}}for(let e of m){let t=h[e],n=t.monthNum,r=t.periodName===`上旬`?1:t.periodName===`中旬`?11:21,a=t.periodName===`上旬`?10:t.periodName===`中旬`?20:new Date(s,n,0).getDate();if(t.allAspects.length===0)for(let e=r;e<=a;e++){let r=q(new Date(s,n-1,e,12,0,0));for(let n of f){let a=G.find(e=>e.id===n),s=await K(r,n);for(let r of i){let i=o[String(r.id)],c=Math.abs(s-i);c>180&&(c=360-c);for(let i of p){let o=Math.abs(c-i.angle);if(o<=8){let s=V[`${n}_${r.id}_${i.angle}`];s&&t.allAspects.push({transitPlanet:a,natalPlanet:r,aspect:i,score:o,dayNumber:e,title:s.title,desc:s.desc})}}}}}let c={};if(t.allAspects.forEach(e=>{if(!e||!e.transitPlanet||!e.natalPlanet||!e.aspect)return;let t=`${e.transitPlanet.id}_${e.natalPlanet.id}_${e.aspect.angle}`;(!c[t]||e.score<c[t].score)&&(c[t]=e)}),t.allAspects=Object.values(c),t.allAspects.length===0){let e=q(new Date(s,n-1,r,12,0,0)),a=[];for(let t of f){let n=G.find(e=>e.id===t),s=await K(e,t);for(let e of i){let i=o[String(e.id)],c=Math.abs(s-i);c>180&&(c=360-c);for(let i of p){let o=Math.abs(c-i.angle),s=V[`${t}_${e.id}_${i.angle}`];s&&a.push({transitPlanet:n,natalPlanet:e,aspect:i,score:o,dayNumber:r,title:s.title,desc:s.desc})}}}a.length>0&&(a.sort((e,t)=>e.score-t.score),t.allAspects.push(a))}}let g=null;m.forEach(e=>{let t=h[e];if(!t||!t.allAspects||t.allAspects.length===0)return;t.monthNum!==g&&(g=t.monthNum);let n=[],r=[],i=[],a=t.allAspects.filter(e=>e&&e.transitPlanet&&e.transitPlanet.id===0&&e.natalPlanet&&e.natalPlanet.id!==0);if(a.length>0){a.sort((e,t)=>e.score-t.score);let e=a[0];if(e&&e.transitPlanet&&e.natalPlanet&&e.aspect){r.push({transitPlanet:e.transitPlanet,natalPlanet:e.natalPlanet,aspect:e.aspect,title:e.title||``,desc:e.desc||``,monthNum:t.monthNum,periodName:t.periodName,rangeStr:t.rangeStr,peakDay:e.dayNumber||1}),n.push(e.natalPlanet.id);let a=`0_${e.natalPlanet.id}`;i.push(a)}}let o=t.allAspects.filter(e=>e&&e.transitPlanet&&e.transitPlanet.id!==0&&e.natalPlanet&&!n.includes(e.natalPlanet.id));if(o.length>0){o.sort((e,t)=>e.score-t.score);for(let e=0;e<o.length;e++){let s=a.length>0?3:2;if(r.length>=s)break;let c=o[e];if(!c||!c.natalPlanet||!c.transitPlanet||!c.aspect)continue;let l=`${c.transitPlanet.id}_${c.natalPlanet.id}`;!n.includes(c.natalPlanet.id)&&!i.includes(l)&&(r.push({transitPlanet:c.transitPlanet,natalPlanet:c.natalPlanet,aspect:c.aspect,title:c.title||``,desc:c.desc||``,monthNum:t.monthNum,periodName:t.periodName,rangeStr:t.rangeStr,peakDay:c.dayNumber||1}),n.push(c.natalPlanet.id),i.push(l))}}r.sort((e,t)=>e.peakDay-t.peakDay),r.forEach(e=>{e&&U.push(e)})});let _=[];for(let e=0;e<U.length;e++){let t=U[e];if(t){if(t.dateRangeLabel=`${t.monthNum}月${t.periodName}`,_.length>0){let e=_[_.length-1];if(e&&e.title===t.title){e.dateRangeLabel=`${e.monthNum}月${e.periodName}～${t.monthNum}月${t.periodName}`,e.peakDayLabel=`${e.monthNum}月${e.peakDay}日、${t.monthNum}月${t.peakDay}日頃`;continue}}t.peakDayLabel=`${t.monthNum}月${t.peakDay}日頃`,_.push(t)}}U=_,r.style.display=`block`,n.disabled=!1,Z(U)}function Z(e){let t=document.getElementById(`scheduleList`);if(!t)return;if(e.length===0){t.innerHTML=`
      <div class="no-data">
        見つかりませんでした。
      </div>`;return}let n=``,r=null;e.forEach(t=>{if(!t||!t.aspect||!t.transitPlanet||!t.natalPlanet)return;let i=t.aspect.type===`good`,a=(t.desc||``).replace(/\n/g,`<br>`),o=t.monthNum;if(o!==r){r=o;let t=e.filter(e=>e&&e.monthNum===o).map(e=>({transitPlanetId:e.transitPlanet.id,title:e.title,rawDate:new Date(2026,o-1,1)})),i=``;typeof getMonthlyThemeTitle==`function`&&(i=getMonthlyThemeTitle(t,o-1));let a=i&&i.trim()!==``&&!i.includes(`余白月`)&&!i.includes(`undefined`);n+=`
        <div class="monthly-header-divider">
          <h2>🌙 ${o}月の星</h2>
          ${a?`<p class="monthly-sub"
             >${i}</p>`:``}
        </div>`}let s=i?`#ff69b4`:`#ffd700`,c=i?`💖 好調期`:`⚠️ 注意期`;n+=`
      <div class="schedule-card planet-${t.transitPlanet.id}" 
           data-type="${t.aspect.type}">
        <div class="card-top-row">
          <div class="card-badges-group">
            <span class="card-badge-period">
              📅 ${t.dateRangeLabel}
            </span>
            <span class="peak-day-gold-badge">
              🎯 ${t.peakDayLabel}
            </span>
          </div>
          <span style="font-size:14px; 
            font-weight:800; 
            color:${s};">
            ${c} 
            (${t.transitPlanet.emoji} 
             ${t.aspect.emoji} 
             ${t.natalPlanet.emoji} 
             ${t.aspect.name})
          </span>
        </div>
        <div class="card-stimulus">
          今の【${t.transitPlanet.name}】 ➔ 
          あなたの【${t.natalPlanet.name}】
        </div>
        <div class="card-title"
          >${t.title}</div>
        <div class="card-desc"
          >${a}</div>
      </div>`}),t.innerHTML=n}function Q(){let e=document.getElementById(`filterTabs`);e&&e.addEventListener(`click`,t=>{let n=t.target.closest(`.tab-btn`);if(!n)return;e.querySelectorAll(`.tab-btn`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-type`),i=document.querySelectorAll(`.schedule-card`);document.querySelectorAll(`.monthly-header-divider`).forEach(e=>{e.style.display=r===`all`?`block`:`none`}),i.forEach(e=>{let t=e.getAttribute(`data-type`);e.style.display=r===`all`||t===r?`block`:`none`})})}Y();
