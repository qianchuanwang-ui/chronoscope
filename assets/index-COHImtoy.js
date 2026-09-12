(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`modulepreload`,t=function(e,t){return new URL(e,t).href},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function u(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}o=l(i.map(i=>{if(i=t(i,a),i=u(i),i in n)return;n[i]=!0;let o=i.endsWith(`.css`);for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}let s=document.createElement(`link`);if(s.rel=o?`stylesheet`:e,o||(s.as=`script`),s.crossOrigin=``,s.href=i,c&&s.setAttribute(`nonce`,c),document.head.appendChild(s),o)return new Promise((e,t)=>{s.addEventListener(`load`,e),s.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[])t.status===`rejected`&&s(t.reason);return r().catch(s)})},i=Object.defineProperty,a=(e,t)=>i(e,`name`,{value:t,configurable:!0}),o=(e=>(e[e.Julian=0]=`Julian`,e[e.Gregorian=1]=`Gregorian`,e))(o||{}),s=(e=>(e.Placidus=`P`,e.Koch=`K`,e.Porphyrius=`O`,e.Regiomontanus=`R`,e.Campanus=`C`,e.Equal=`A`,e.VehlowEqual=`V`,e.WholeSign=`W`,e.Meridian=`X`,e.Azimuthal=`H`,e.PolichPage=`T`,e.Alcabitus=`B`,e.Morinus=`M`,e))(s||{}),c=(e=>(e[e.Ascendant=0]=`Ascendant`,e[e.MC=1]=`MC`,e[e.ARMC=2]=`ARMC`,e[e.Vertex=3]=`Vertex`,e[e.EquatorialAscendant=4]=`EquatorialAscendant`,e[e.CoAscendant1=5]=`CoAscendant1`,e[e.CoAscendant2=6]=`CoAscendant2`,e[e.PolarAscendant=7]=`PolarAscendant`,e))(c||{}),l=(e=>(e[e.JPLEphemeris=1]=`JPLEphemeris`,e[e.SwissEphemeris=2]=`SwissEphemeris`,e[e.MoshierEphemeris=4]=`MoshierEphemeris`,e[e.Heliocentric=8]=`Heliocentric`,e[e.TruePositions=16]=`TruePositions`,e[e.J2000=32]=`J2000`,e[e.NoNutation=64]=`NoNutation`,e[e.Speed3=128]=`Speed3`,e[e.Speed=256]=`Speed`,e[e.NoGravitationalDeflection=512]=`NoGravitationalDeflection`,e[e.NoAberration=1024]=`NoAberration`,e[e.Equatorial=2048]=`Equatorial`,e[e.XYZ=4096]=`XYZ`,e[e.Radians=8192]=`Radians`,e[e.Barycentric=16384]=`Barycentric`,e[e.Topocentric=32768]=`Topocentric`,e[e.Sidereal=65536]=`Sidereal`,e[e.ICRS=131072]=`ICRS`,e[e.DpsidepsIAU1980=262144]=`DpsidepsIAU1980`,e[e.JPLHorizons=524288]=`JPLHorizons`,e[e.JPLHorizonsApprox=1048576]=`JPLHorizonsApprox`,e))(l||{}),u={Astrometric:1536,DefaultSwissEphemeris:258,DefaultMoshier:260},d=class{constructor(e,t,n,r,i,a,o,s){this.type=e,this.maximum=t,this.partialBegin=n,this.partialEnd=r,this.totalBegin=i,this.totalEnd=a,this.penumbralBegin=o,this.penumbralEnd=s}isTotal(){return!!(this.type&4)}isPartial(){return!!(this.type&16)}isPenumbralOnly(){return!!(this.type&64)&&!(this.type&20)}getTotalityDuration(){if(!this.isTotal()||this.totalBegin===0||this.totalEnd===0)return 0;let e=(this.totalEnd-this.totalBegin)*24;return e>0?e:0}getPartialDuration(){if(this.partialBegin===0||this.partialEnd===0)return 0;let e=(this.partialEnd-this.partialBegin)*24;return e>0?e:0}getTotalDuration(){if(this.penumbralBegin===0||this.penumbralEnd===0)return 0;let e=(this.penumbralEnd-this.penumbralBegin)*24;return e>0?e:0}},f=(a(d,`LunarEclipseImpl`),d),p=class{constructor(e,t,n,r,i,a,o,s){this.type=e,this.maximum=t,this.partialBegin=n,this.partialEnd=r,this.centralBegin=i,this.centralEnd=a,this.centerLineBegin=o,this.centerLineEnd=s}isTotal(){return!!(this.type&4)}isAnnular(){return!!(this.type&8)}isHybrid(){return!!(this.type&32)}isPartial(){return!!(this.type&16)}isCentral(){return!!(this.type&1)}isNonCentral(){return!!(this.type&2)}},m=(a(p,`SolarEclipseImpl`),p),h=class{constructor(e,t,n,r,i=1){this.year=e,this.month=t,this.day=n,this.hour=r,this.calendarType=i}toISOString(){let e=Math.floor(this.hour),t=Math.floor((this.hour-e)*60),n=Math.floor(((this.hour-e)*60-t)*60),r=Math.floor((((this.hour-e)*60-t)*60-n)*1e3),i=Math.abs(this.year).toString().padStart(4,`0`);return`${this.year<0?`-`:``}${i}-${this.month.toString().padStart(2,`0`)}-${this.day.toString().padStart(2,`0`)}T${e.toString().padStart(2,`0`)}:${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}.${r.toString().padStart(3,`0`)}Z`}toString(){let e=this.calendarType===1?`Gregorian`:`Julian`;return`${this.year<0?`${Math.abs(this.year)} BCE`:this.year.toString()}-${this.month.toString().padStart(2,`0`)}-${this.day.toString().padStart(2,`0`)} ${this.hour.toFixed(6)} hours (${e})`}},g=(a(h,`DateTimeImpl`),h),_=class{constructor(e){this.flags=0,e!==void 0&&this.add(e)}add(e){return Array.isArray(e)?e.forEach(e=>this.flags|=e):this.flags|=e,this}remove(e){return Array.isArray(e)?e.forEach(e=>this.flags&=~e):this.flags&=~e,this}has(e){return(this.flags&e)===e}toNumber(){return this.flags}static from(...e){return new _(e)}static get swissEphemerisWithSpeed(){return _.from(2,256)}static get moshierWithSpeed(){return _.from(4,256)}static get astrometric(){return _.from(2,1024,512)}static get heliocentric(){return _.from(2,8)}static get topocentric(){return _.from(2,32768)}static get equatorial(){return _.from(2,2048,256)}},v=(a(_,`_CalculationFlags`),_),y=class{constructor(e){this.flags=0,e!==void 0&&this.add(e)}add(e){return Array.isArray(e)?e.forEach(e=>this.flags|=e):this.flags|=e,this}has(e){return(this.flags&e)===e}toNumber(){return this.flags}static from(...e){return new y(e)}static get allSolar(){return new y([1,2,4,8,16,32])}static get allLunar(){return new y([4,16,64])}static get totalOnly(){return y.from(4)}static get totalAndPartial(){return y.from(4,16)}},b=(a(y,`_EclipseTypeFlags`),y);function x(e){return typeof e==`number`?e:e instanceof v?e.toNumber():Array.isArray(e)?v.from(...e).toNumber():e}a(x,`normalizeFlags`);function S(e){return typeof e==`number`?e:e instanceof b?e.toNumber():Array.isArray(e)?b.from(...e).toNumber():e}a(S,`normalizeEclipseTypes`);var C=class{constructor(){this.module=null,this.ready=!1}async init(e){if(this.ready)return;let t=await r(()=>import(`./swisseph-BtfJwKK5.js`),[],import.meta.url),n;if(n=typeof t.default==`function`?t.default:typeof t==`function`?t:t.default?t.default:t.SwissEphModule||t,typeof n!=`function`)throw Error(`Failed to load WASM module: SwissEphModule factory function not found`);let i=e;if(!i)try{i=new URL(``+new URL(`swisseph-BmP0Bw24.wasm`,import.meta.url).href,``+import.meta.url).href}catch{i=`swisseph.wasm`}this.module=await n({locateFile:a((e,t)=>e===`swisseph.wasm`?i:t?t+e:e,`locateFile`)}),this._wrapFunctions(),this.ready=!0,console.log(`Swiss Ephemeris WASM initialized:`,this.version())}_wrapFunctions(){let e=this.module;this._julday=e.cwrap(`swe_julday_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`]),this._getPlanetName=e.cwrap(`swe_get_planet_name_wrap`,`string`,[`number`]),this._setSiderealMode=e.cwrap(`swe_set_sid_mode_wrap`,null,[`number`,`number`,`number`]),this._getAyanamsa=e.cwrap(`swe_get_ayanamsa_ut_wrap`,`number`,[`number`]),this._close=e.cwrap(`swe_close_wrap`,null,[]),this._version=e.cwrap(`swe_version_wrap`,`string`,[])}_checkReady(){if(!this.ready)throw Error(`SwissEphemeris not initialized. Call await swe.init() first.`)}version(){return this._checkReady(),this._version()}setEphemerisPath(e){this._checkReady();let t=this.module,n=t.allocateUTF8(e||``);t.ccall(`swe_set_ephe_path_wrap`,null,[`number`],[n]),t._free(n)}async loadStandardEphemeris(){let e=`https://cdn.jsdelivr.net/gh/aloistr/swisseph/ephe`;await this.loadEphemerisFiles([{name:`sepl_18.se1`,url:`${e}/sepl_18.se1`},{name:`semo_18.se1`,url:`${e}/semo_18.se1`},{name:`seas_18.se1`,url:`${e}/seas_18.se1`}])}async loadEphemerisFiles(e){this._checkReady();let t=this.module;try{t.FS.mkdir(`/ephemeris`)}catch{}for(let n of e){let e=await fetch(n.url);if(!e.ok)throw Error(`Failed to download ${n.name}: ${e.statusText}`);let r=await e.arrayBuffer(),i=new Uint8Array(r);t.FS.writeFile(`/ephemeris/${n.name}`,i)}this.setEphemerisPath(`/ephemeris`)}julianDay(e,t,n,r=0,i=o.Gregorian){if(this._checkReady(),!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(r))throw TypeError(`julianDay requires finite numbers. Received: year=${e}, month=${t}, day=${n}, hour=${r}`);return this._julday(e,t,n,r,i)}dateToJulianDay(e,t=o.Gregorian){if(this._checkReady(),!(e instanceof Date))throw TypeError(`dateToJulianDay expects a Date object`);let n=e.getUTCFullYear(),r=e.getUTCMonth()+1,i=e.getUTCDate(),a=e.getUTCHours(),s=e.getUTCMinutes(),c=e.getUTCSeconds(),l=e.getUTCMilliseconds();if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a))throw TypeError(`Invalid Date object provided to dateToJulianDay. Date.toString() returned: "${e.toString()}". Please ensure the date is valid (e.g., avoid new Date("invalid")).`);let u=a+s/60+c/3600+l/36e5;return this.julianDay(n,r,i,u,t)}julianDayToDate(e,t=o.Gregorian){this._checkReady();let n=this.module,r=n._malloc(4),i=n._malloc(4),a=n._malloc(4),s=n._malloc(8);n.ccall(`swe_revjul_wrap`,null,[`number`,`number`,`number`,`number`,`number`,`number`],[e,t,r,i,a,s]);let c=n.getValue(r,`i32`),l=n.getValue(i,`i32`),u=n.getValue(a,`i32`),d=n.getValue(s,`double`);return n._free(r),n._free(i),n._free(a),n._free(s),new g(c,l,u,d,t)}calculatePosition(e,t,n=u.DefaultMoshier){this._checkReady();let r=x(n),i=this.module,a=i._malloc(48),o=i._malloc(256),s=i.ccall(`swe_calc_ut_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`],[e,t,r,a,o]);if(s<0){let e=i.UTF8ToString(o);throw i._free(a),i._free(o),Error(e)}let c=[];for(let e=0;e<6;e++)c[e]=i.getValue(a+e*8,`double`);return i._free(a),i._free(o),{longitude:c[0],latitude:c[1],distance:c[2],longitudeSpeed:c[3],latitudeSpeed:c[4],distanceSpeed:c[5],flags:s}}getCelestialBodyName(e){return this._checkReady(),this._getPlanetName(e)}setSiderealMode(e,t=0,n=0){this._checkReady(),this._setSiderealMode(e,t,n)}getAyanamsa(e){return this._checkReady(),this._getAyanamsa(e)}getAyanamsaExUt(e,t=l.SwissEphemeris){this._checkReady();let n=x(t),r=this.module,i=r._malloc(8),a=r._malloc(256);try{if(r.ccall(`swe_get_ayanamsa_ex_ut_wrap`,`number`,[`number`,`number`,`number`,`number`],[e,n,i,a])<0){let e=r.UTF8ToString(a);throw Error(e||`Failed to calculate ayanamsa`)}return r.getValue(i,`double`)}finally{r._free(i),r._free(a)}}findNextLunarEclipse(e,t=l.MoshierEphemeris,n=0,r=!1){this._checkReady();let i=x(t),a=S(n),o=this.module,s=o._malloc(80),c=o._malloc(256),u=o.ccall(`swe_lun_eclipse_when_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],[e,i,a,s,+!!r,c]);if(u<0){let e=o.UTF8ToString(c);throw o._free(s),o._free(c),Error(e)}let d=[];for(let e=0;e<10;e++)d[e]=o.getValue(s+e*8,`double`);return o._free(s),o._free(c),new f(u,d[0],d[1],d[2],d[3],d[4],d[5],d[6])}findNextSolarEclipse(e,t=l.MoshierEphemeris,n=0,r=!1){this._checkReady();let i=x(t),a=S(n),o=this.module,s=o._malloc(80),c=o._malloc(256),u=o.ccall(`swe_sol_eclipse_when_glob_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],[e,i,a,s,+!!r,c]);if(u<0){let e=o.UTF8ToString(c);throw o._free(s),o._free(c),Error(e)}let d=[];for(let e=0;e<10;e++)d[e]=o.getValue(s+e*8,`double`);return o._free(s),o._free(c),new m(u,d[0],d[1],d[2],d[3],d[4],d[5],d[6])}calculateHouses(e,t,n,r=s.Placidus){this._checkReady();let i=this.module,a=i._malloc(104),o=i._malloc(80),l=r.charCodeAt(0);i.ccall(`swe_houses_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],[e,t,n,l,a,o]);let u=[];for(let e=0;e<13;e++)u[e]=i.getValue(a+e*8,`double`);let d=[];for(let e=0;e<10;e++)d[e]=i.getValue(o+e*8,`double`);return i._free(a),i._free(o),{cusps:u,ascendant:d[c.Ascendant],mc:d[c.MC],armc:d[c.ARMC],vertex:d[c.Vertex],equatorialAscendant:d[c.EquatorialAscendant],coAscendant1:d[c.CoAscendant1],coAscendant2:d[c.CoAscendant2],polarAscendant:d[c.PolarAscendant],houseSystem:r}}close(){this.ready&&this._close()}};a(C,`SwissEphemeris`);var w=C,T=new w;typeof window<`u`&&(window.SwissEphemeris=w,window.swisseph=T);var E={"0_0_120":{title:`がんばらなくても大丈夫。あなたが自然に褒められるご褒美デー`,desc:`💻【仕事】無理に自分を大きく見せたり気合いを入れすぎなくても、いつものあなたのままで仕事がサクサク進む日です。周りの人から「いつもありがとう」と言われたり、頑張りが自然と認められやすいよ。のびのびと自分のペースで仕事を楽しんでね。
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
🪙【金運】自分を一番輝かせるためのお洒落、勝負コスメ、大人の香水への投資が最高の金運を呼びます。お財布を開いて新しい自分の魅力を手に入れることで、未来の豊かな財運が力強く動き出します。`}};function D(e,t){let n=e.filter(e=>e.rawDate&&e.rawDate.getMonth()===t);if(n.length===0)return`穏やかで心地よい星の余白月`;let r={0:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9},i=n[0];return n.forEach(e=>{i&&r[e.transitPlanetId]>r[i.transitPlanetId]&&(i=e)}),i&&i.title?i.title.replace(/【.*?】/g,``)+` ✨`:`穏やかで心地よい星の余白月`}var O=[{id:`sun_venus`,p1:0,p2:3,name:`太陽 × 金星`,title:`あたたかい絆に満たされる「愛情と家庭の調和サイクル」`,desc:`家庭的な雰囲気のあたたかい愛情に恵まれる時期です。身近な人と心の通い合う穏やかな時間を過ごすことで、人生の幸福度がグッと高まります。`},{id:`sun_jupiter`,p1:0,p2:5,name:`太陽 × 木星`,title:`発展の可能性が開く「運命の転換サイクル」`,desc:`あなた自身の社会的な発展の可能性や、素晴らしい好転のチャンスとなる転機が訪れます。恐れずに新しい扉を開くことで、ステージが引き上げられます。`},{id:`sun_neptune`,p1:0,p2:8,name:`太陽 × 海王星`,title:`無理せずエネルギーを養う「心身のご自愛期間」`,desc:`体力の低下や、精神的な落ち込みが起きやすいタイミングです。これは「しっかり休んで」という星からのサイン。健康を守るためにも、自分を一番に甘やかして英気を養いましょう。`},{id:`sun_pluto`,p1:0,p2:9,name:`太陽 × 冥王星`,title:`新たな局面へと突き進む「大飛躍のタイミング」`,desc:`あなたの中に強力なリーダーシップが増加し、人生の新しい局面へと堂々と踏み出していく時期です。圧倒的な底力で大きな飛躍を遂げることができます。`},{id:`sun_node`,p1:0,p2:10,name:`太陽 × ドラゴンヘッド`,title:`絆を整え調和をもたらす「家庭の絆・問題解決期」`,desc:`家庭的な人的構成や、身近な対人関係における問題解決がスムーズに進む期間です。素晴らしいチームワークが生まれ、絆がより強固なものへと変化します。`},{id:`sun_asc`,p1:0,p2:11,name:`太陽 × ASC`,title:`関わりから気付きを得る「自己認識アップデート期」`,desc:`他者との関係性によってもたらされる問題点や課題に、ハッとスポットライトが当たる時期です。相手を通して本当の自分を深く認識し、アップデートできます。`},{id:`sun_mc`,p1:0,p2:12,name:`太陽 × MC`,title:`自分らしさをまっすぐ打ち出す「人間性の確立期間」`,desc:`自己主張の強さがポジティブな形で社会へ発揮される時期です。あなたという人間性のコアを堂々と周囲に示すことで、確固たる信頼を勝ち取れます。`},{id:`moon_venus`,p1:1,p2:3,name:`月 × 金星`,title:`素直に甘えて愛される「きらめき愛情サイクル」`,desc:`恋愛運が最高潮に達し、ちょっぴり甘え体質な一面が魅力として輝く時期です。大切な人とピュアな愛情の喜びを心ゆくまで満喫することができます。`},{id:`moon_uranus`,p1:1,p2:7,name:`月 × 天王星`,title:`新鮮な風を受け入れる「突発的な環境アップデート」`,desc:`プライベートや環境に、突然の変化がもたらされやすいタイミングです。あなたの柔軟な感性を活かして機転を利かせ、スマートに対応していくことで新しい道が開けます。`},{id:`moon_neptune`,p1:1,p2:8,name:`月 × 海王星`,title:`インスピレーションが湧き出る「芸術センスの目覚め」`,desc:`あなたの内側に眠っていた芸術的な才能や、豊かな感受性がパッと目覚める時期です。創作活動や直感を活かしたアクションに素晴らしい追い風が吹きます。`},{id:`mercury_venus`,p1:2,p2:3,name:`水星 × 金星`,title:`技術や知識の完成度を高める「芸事・スキルの熟練期」`,desc:`誰かへの教えやすさや、あなた自身のスキルの熟練度が爆発的に高まる時期です。学び事やレッスン、クリエイティブな表現が素晴らしい成果を結びます。`},{id:`mercury_jupiter`,p1:2,p2:5,name:`水星 × 木星`,title:`思考とアイデアが冴え渡る「精神の活気みなぎる期間」`,desc:`あなた自身の精神活動の状態が、非常に活気に満ちてポジティブになる期間です。素晴らしいアイデアが次々と溢れ、ビジネスや勉強がサクサク進みます。`},{id:`mercury_pluto`,p1:2,p2:9,name:`水星 × 冥王星`,title:`あなたの名前が広く知れ渡る「名誉・ステップアップ期」`,desc:`あなたの手がけた発信や研究が社会から認められ、名誉や栄誉を獲得して有名になるチャンスが巡ってきます。強烈な影響力を世の中に与える時期です。`},{id:`mercury_node`,p1:2,p2:10,name:`水星 × ドラゴンヘッド`,title:`次のステージへ舵を切る「新規開拓・チーム結成期」`,desc:`新規の仕事を立ち上げたり、将来の右腕となるような素晴らしい人材を獲得するビジネスチャンス期です。新たな契約やパートナーシップが実を結びます。`},{id:`venus_mars`,p1:3,p2:4,name:`金星 × 火星`,title:`情熱の炎がパッと燃え上がる「情熱ロマンスブースター」`,desc:`理屈抜きで、一目で相手に惚れてしまうような強烈な恋の衝動が訪れるロマンス期です。あなたの中の眠っていたパッションが最高潮に呼び覚まされます。`},{id:`venus_jupiter`,p1:3,p2:5,name:`金星 × 木星`,title:`全天体があなたを祝福する「愛の喜び満喫サークル」`,desc:`人生における愛情の喜びをこれでもかと全身で感じられる最高のハッピータイムです。素晴らしい幸福感と引き寄せの波があなたを包み込みます。`},{id:`venus_uranus`,p1:3,p2:7,name:`金星 × 天王星`,title:`電撃的なときめきに包まれる「新鮮ロマンス遭遇期」`,desc:`日常をガラリと変えるような、新鮮なロマンスやときめきに遭遇する時期です。予想もしなかったドラマチックな愛の展開があなたを驚かせます。`},{id:`venus_neptune`,p1:3,p2:8,name:`金星 × 海王星`,title:`境界線を整え本実を見つめる「愛のデトックス成熟期」`,desc:`これまでの関係性が優しく変化し、環境の移り変わりによる別れや、愛の境界線を整える時期です。依存を手放し、本当の自立した愛へと成熟するための大切なステップです。`},{id:`venus_pluto`,p1:3,p2:9,name:`金星 × 冥王星`,title:`魂を揺さぶる至福を味わう「最高幸福・絶頂期」`,desc:`心の底から湧き上がる大きな喜びと、奇跡の豊かさを掴む最高幸福・絶頂期です。人生における素晴らしい喜びを感じるドラマチックな体験が訪れます。運命を動かすほどの強い愛の磁力が発生します。`},{id:`venus_mc`,p1:3,p2:12,name:`金星 × MC`,title:`大好きな想いを形にする「自由恋愛の実現サークル」`,desc:`あなたの望んでいた理想の自由恋愛が、見事に成就・実現へと向かう嬉しい時期です。社会的な立場や世間の目を気にせず、純粋な愛の形を謳歌できます。`},{id:`mars_jupiter`,p1:4,p2:5,name:`火星 × 木星`,title:`独自の魅力がスポットライトを浴びる「才能開花・タレント期」`,desc:`あなたの中に眠っていた圧倒的なタレント性やスター性が周囲に認められる時期です。自己表現やパフォーマンスにおいて、人気と注目を一身に集めます。`},{id:`mars_saturn`,p1:4,p2:6,name:`火星 × 土星`,title:`次章へ進むための美しい節目「運命の軌道修正・一段落期」`,desc:`走り続けてきた足を一度止め、次の章へ進むための美しい節目・一段落期です。これまでの無理な働き方や活動に、何らかの終了、休止、またはホッとするひと区切りがもたらされる時期です。荷物を下ろして休息をとりましょう。`},{id:`mars_uranus`,p1:4,p2:7,name:`火星 × 天王星`,title:`心身を美しく整え直す「セルフケア・治療改善サイクル」`,desc:`医療による適切な治療や、徹底的なセルフケアによって、体調や環境をガラリと新しく改善できる時期です。素晴らしい技術によって不調を克服できます。`},{id:`mars_neptune`,p1:4,p2:8,name:`火星 × 海王星`,title:`無理せず心身を解放する「ディープクレンジング期間」`,desc:`心と体の抵抗力の著しい低下を感じやすいデトックス期間です。エネルギーが漏れてしまわないよう、この時期は戦うのをやめ、心身をディープに浄化してあげましょう。`},{id:`mars_pluto`,p1:4,p2:9,name:`火星 × 冥王星`,title:`不可能を可能に変える「ブレイクスルー・大成サイクル」`,desc:`どんな高い壁や大きな困難に対しても、それをガツンとぶち抜いていく圧倒的な突破力が湧いてくる時期です。あなたのこれまでの努力が見事に大成します。`},{id:`jupiter_saturn`,p1:5,p2:6,name:`木星 × 土星`,title:`じっくりと土台を馴染ませる「安心基盤・適応サイクル」`,desc:`新しい環境や人生の大きな変化に対して、じっくりと時間をかけて適応していく期間です。焦らず忍耐強く土台を固めることで、今後の確固たる安定が作られます。`},{id:`jupiter_uranus`,p1:5,p2:7,name:`木星 × 天王星`,title:`まさかのラッキーが舞い込む「ミラクル棚ぼた転機」`,desc:`現状を劇的に好転させる、突然の変化のチャンスが巡ってきます。「棚ぼた」のようなミラクルな引き寄せを体験しやすい、大いなる飛躍のタイミングです。`},{id:`jupiter_neptune`,p1:5,p2:8,name:`木星 × 海王星`,title:`視野を広げて正解を選び直す「視野拡大・軌道修正期」`,desc:`これまでの見込み違いや、判断の誤りにハッと気違い、正しい方向へサッと軌道修正ができる時期です。思い込みのバイアスが消成され、視界がクリアになります。`},{id:`jupiter_pluto`,p1:5,p2:9,name:`木星 × 冥王星`,title:`莫大な果実を手にする「大成功ラッシュ期間」`,desc:`手がけているビジネスや、ここ一番での勝負、あるいはギャンブルなどで圧倒的な大成功を収めるチャンス期間です。富と成功のエネルギーが一点集中します。`},{id:`jupiter_node`,p1:5,p2:10,name:`木星 × ドラゴンヘッド`,title:`最高の仲間に巡り合う「強力協調・発展サイクル」`,desc:`他者との共同による仕事やプロジェクトが、素晴らしい調和の元で大発展していく時期です。人脈からの協力によって、夢の実現スピードが何倍にも加速します。`},{id:`jupiter_mc`,p1:5,p2:12,name:`木星 × MC`,title:`社会的評価がガツンと上がる「キャリア栄転タイミング」`,desc:`あなた自身の社会的な地位の向上による成功をしっかりと掴み取れる華やかな時期です。キャリアにおける大きな栄転や、憧れの立場を獲得できます。`},{id:`saturn_uranus`,p1:6,p2:7,name:`土星 × 天王星`,title:`プレッシャーを跳ね返す「困難克服・新風ブースター」`,desc:`心地よい精神の緊張感や、目の前の大きな困難を見事な知恵と精神力で克服していく時期です。この壁を乗り越えることで、一回り大きな自分に成長できます。`},{id:`saturn_neptune`,p1:6,p2:8,name:`土星 × 海王星`,title:`静かに心をヒーリングする「リフレッシュ・休息期間」`,desc:`過度なストレスによる精神的な落ち込みや、不調を感じやすい時期です。星が「少し立ち止まって」と教えてくれているので、静かな環境で心をたっぷり労わってあげましょう。`},{id:`saturn_pluto`,p1:6,p2:9,name:`土星 × 冥王星`,title:`1途な情熱を注ぎ込む「一意専心・こだわり期間」`,desc:`自分自身の能力を過信することによるこだわりが強まる時期です。その凄まじい集中力を専門分野に向けることで、唯一無二の偉業を達成できます。`},{id:`uranus_neptune`,p1:7,p2:8,name:`天王星 × 海王星`,title:`魂の関係性を美しく昇華する「魂のステップアップ期」`,desc:`親しい人との関係性の変化や、環境の移り変わりによる別れを経験する時期です。これは寂しいことではなく、お互いの魂が次のステージへ進化するための必要な節目です。`},{id:`uranus_pluto`,p1:7,p2:9,name:`天王星 × 冥王星`,title:`常識をアップデートする「ライフスタイル革新サイクル」`,desc:`あなたの中にこれまでにない強烈な創造力や、斬新な発想力が溢れ出てくる時期です。これまでの古いやり方をガラリと塗り替える、自分自身の人生革命を起こせます。`},{id:`uranus_asc`,p1:7,p2:11,name:`天王星 × ASC`,title:`新しい環境へ軽やかに馴染む「機敏適応フェーズ」`,desc:`新体制や新しいライフスタイルへの適応性が、驚くほど機敏に発揮される時期です。周囲の環境が変わっても、持ち前のフットワークの軽さで瞬時に味方にできます。`},{id:`neptune_pluto`,p1:8,p2:9,name:`海王星 × 冥王星`,title:`ブレる心を優しくリセットする「宿命再生のタイミング」`,desc:`意志薄弱による一時的な自己嫌悪や、迷いが生じやすい宿命の調整期間です。自分の弱さを丸ごと愛してあげることで、ブレない強い精神へと生まれ変わることができます。`},{id:`neptune_node`,p1:8,p2:10,name:`海王星 × ドラゴンヘッド`,title:`不要な欲を手放して軽くなる「メンタル調停サイクル」`,desc:`過剰な欲求によるバランスの崩れが出やすいタイミングです。「本当に大切なものは何か」を思い出し、心のバランスを綺麗に調停してあげることで深い安心が手に入ります。`},{id:`pluto_mc`,p1:9,p2:12,name:`冥王星 × MC`,title:`主導権を完全に掌握する「完全自由・大成功サイクル」`,desc:`すべての自由裁量（自分の決断）によって、人生のビッグチャンスや成功を掴み取る強烈な時期です。他人に雇われるのではなく、自分の意志で未来を切り拓いていけます。`}],k=`
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
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.container { max-width: 680px; margin: 0 auto; padding: 40px 20px; }

.header { text-align: center; margin-bottom: 32px; }
.header h1 { font-family: 'Noto Serif JP', serif; font-weight: 700; font-size: 24px; letter-spacing: 0.05em; color: var(--text-main); }
.header .notice-text { color: #b3a79d !important; font-size: 12px; margin-top: 4px; }
.header .author { color: var(--accent-gold) !important; font-size: 13px; font-weight: 500; margin-top: 2px; }

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
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.btn-submit:hover { opacity: 0.9; }

.btn-submit:disabled { 
  background: #24211e !important; 
  color: #c4b9ae !important; 
  border: 1px solid rgba(197, 168, 128, 0.2); 
  cursor: not-allowed; 
}

#scanChara {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 14px;
}

.scan-bubble {
  position: relative; 
  display: inline-block;
  background: #24211e; 
  color: #faf6f0; 
  font-size: 13px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #c5a880; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4), 0 0 10px rgba(197, 168, 128, 0.15);
  letter-spacing: 0.04em;
  line-height: 1.6;
  text-align: center;
  box-sizing: border-box;
  animation: bubblePulse 1.5s infinite ease-in-out;
}

@keyframes bubblePulse {
  0% { opacity: 0.85; transform: scale(0.99); }
  50% { opacity: 1; transform: scale(1.01); }
  100% { opacity: 0.85; transform: scale(0.99); }
}

/* 🚗 画面をハイスピードで横切るキャラクター単体のアニメーション */
.scan-dash-chara {
  position: fixed;
  top: 25%; 
  left: -200px;
  width: 130px;
  height: 130px;
  background: url('chronospeed.png') no-repeat center/contain;
  z-index: 9999;
  pointer-events: none;
}
.scan-dash-chara.active {
  animation: scanDashEffect 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes scanDashEffect {
  0% { left: -200px; transform: scale(0.8) rotate(0deg); }
  25% { left: 30%; transform: scale(1) rotate(-6deg); }
  40% { left: 25%; transform: scale(1) rotate(6deg); }
  100% { left: 100vw; transform: scale(1.2) rotate(-3deg); }
}

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
  box-sizing: border-box;
}

.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.card-badges-group {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* 📅 大きくなって見やすくなった日付・期間バッジ */
.card-badge-period {
  display: inline-block; 
  font-size: 13px; 
  padding: 3px 10px; 
  border-radius: 12px; 
  background: rgba(13, 12, 10, 0.4) !important; 
  color: var(--text-sub) !important;
  border: 1px solid rgba(197, 168, 128, 0.15);
}

/* 🎯 大きくなって見やすくなったゴールドピーク日付バッジ */
.peak-day-gold-badge {
  display: inline-block;
  font-size: 13px; 
  padding: 3px 10px; 
  border-radius: 12px;
  background: rgba(197, 168, 128, 0.15) !important;
  color: var(--accent-gold) !important;
  border: 1px solid rgba(197, 168, 128, 0.3);
  font-weight: 700;
}

.card-stimulus {
  font-size: 12px;
  color: var(--accent-gold);
  font-weight: 600;
  margin-bottom: 4px;
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
}

.monthly-header-divider {
  margin-top: 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--border-light);
  padding-bottom: 12px;
}
.monthly-header-divider h2 {
  font-family: 'Noto Serif JP', serif;
  font-size: 20px;
  margin: 0;
  color: var(--text-main);
}
.monthly-sub {
  font-size: 13px;
  color: var(--text-sub);
  margin: 4px 0 0 0;
}

.no-data {
  text-align: center;
  padding: 32px;
  color: var(--text-sub);
  font-size: 14px;
  background: var(--bg-input-card);
  border-radius: 12px;
  border: 1px dashed var(--border-light);
}

.retro-notice {
  margin-top: 12px !important; 
  padding: 10px 14px !important; 
  background: rgba(255, 158, 187, 0.08) !important; 
  border-radius: 8px !important; 
  font-size: 12px !important; 
  color: #ff9ebb !important; 
  border: 1px dashed rgba(255, 158, 187, 0.4) !important; 
  font-weight: 700 !important; 
  letter-spacing: 0.03em !important;
  text-align: left !important; 
  line-height: 1.5 !important;
}

.schedule-card.planet-0 { --p-color: var(--planet-color-0); }
.schedule-card.planet-2 { --p-color: var(--planet-color-2); }
.schedule-card.planet-3 { --p-color: var(--planet-color-3); }
.schedule-card.planet-4 { --p-color: var(--planet-color-4); }
.schedule-card.planet-5 { --p-color: var(--planet-color-5); }
.schedule-card.planet-6 { --p-color: var(--planet-color-6); }
.schedule-card.planet-7 { --p-color: var(--planet-color-7); }
.schedule-card.planet-8 { --p-color: var(--planet-color-8); }
.schedule-card.planet-9 { --p-color: var(--planet-color-9); }

.month-tabs {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  margin-bottom: 24px;
}
@media (max-width: 480px) {
  .month-tabs {
    grid-template-columns: repeat(4, 1fr);
  }
}
.month-tab-btn {
  padding: 10px 6px;
  background: #1e1b18;
  border: 1px solid rgba(197, 168, 128, 0.2);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #c4b9ae;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
}
.month-tab-btn.active {
  background: #c5a880;
  color: #0d0c0a;
  border-color: #c5a880;
  font-weight: 700;
  box-shadow: 0 0 12px rgba(197, 168, 128, 0.3);
}
`,A=[{id:0,name:`自分自身・本質`,emoji:`☉`},{id:1,name:`私生活・心`,emoji:`☾`},{id:2,name:`知性・会話`,emoji:`☿`},{id:3,name:`恋愛・楽しさ`,emoji:`♀`},{id:4,name:`やる気・行動`,emoji:`♂`},{id:5,name:`拡大・幸運`,emoji:`♃`},{id:6,name:`課題・試練`,emoji:`♄`},{id:7,name:`個性・打破`,emoji:`♅`},{id:8,name:`理想・スピ`,emoji:`♆`},{id:9,name:`底力・リセット`,emoji:`♇`}],j=[{id:0,name:`太陽（舞台）`,emoji:`☉`},{id:2,name:`水星（仕事）`,emoji:`☿`},{id:3,name:`金星（ワクワク）`,emoji:`♀`},{id:4,name:`火星（情熱）`,emoji:`♂`}],M=j.map(e=>e.id),N={0:5,2:2.5,3:3,4:4},P=[{angle:0,name:`合 (0°)`,emoji:`☌`,type:`good`},{angle:120,name:`トライン`,emoji:`△`,type:`good`},{angle:90,name:`スクエア`,emoji:`□`,type:`bad`},{angle:180,name:`オポ`,emoji:`☍`,type:`bad`}],F={0:{name:`太陽`,emoji:`☉`},1:{name:`月`,emoji:`☾`},2:{name:`水星`,emoji:`☿`},3:{name:`金星`,emoji:`♀`},4:{name:`火星`,emoji:`♂`},5:{name:`木星`,emoji:`♃`},6:{name:`土星`,emoji:`♄`},7:{name:`天王星`,emoji:`♅`},8:{name:`海王星`,emoji:`♆`},9:{name:`冥王星`,emoji:`♇`},10:{name:`ドラゴンヘッド`,emoji:`☊`},11:{name:`ASC`,emoji:`✨`},12:{name:`MC`,emoji:`👑`}},I=null,L=[],R=1,z=[],B=null;function V(e){let t=e%45;return t<0&&(t+=45),t}function H(e,t){let n=Math.abs(e-t),r=(e+t)/2;return n>180&&(r+=180),V(r)}function U(e){let t=e.getUTCFullYear(),n=e.getUTCMonth()+1,r=e.getUTCDate(),i=e.getUTCHours()+e.getUTCMinutes()/60+e.getUTCSeconds()/3600;n<=2&&(t--,n+=12);let a=Math.floor(t/100),o=2-a+Math.floor(a/4);return Math.floor(365.25*(t+4716))+Math.floor(30.6001*(n+1))+r+o-1524.5+i/24}async function W(e,t){try{if(I&&typeof I.calculatePosition==`function`){let n=await I.calculatePosition(e,t,0);if(n&&typeof n.longitude==`number`&&!isNaN(n.longitude))return n.longitude}}catch{}let n=(e-2451545)/36525,r={0:{L:280.466+36000.77*n,w:282.937,e:.0167},1:{L:218.316+481267.88*n,w:83.353,e:.0549},2:{L:252.251+149472.67*n,w:77.456,e:.2056},3:{L:181.979+58517.815*n,w:131.532,e:.0068},4:{L:355.453+19140.303*n,w:336.041,e:.0934},5:{L:34.404+3034.746*n,w:14.753,e:.0484},6:{L:49.944+1222.114*n,w:92.431,e:.0541},7:{L:313.232+428.482*n,w:170.964,e:.0473},8:{L:304.88+218.459*n,w:44.971,e:.0086},9:{base:240,speed:.004}};if(t===9){let t=(r.base+e*r.speed)%360;return t<0?t+360:t}let i=r[t]||r,a=i.L%360;a<0&&(a+=360);let o=(a-i.w)*Math.PI/180,s=(2*i.e-i.e**3/4)*Math.sin(o)+1.25*i.e**2*Math.sin(2*o),c=a+s*180/Math.PI;if(t===2||t===3||t===4){let e=r.L%360,n=(a-e)*Math.PI/180;c+=(t===2?14:t===3?28:8.5)*Math.sin(n)}return c%=360,c<0?c+360:c}async function G(e,t,n){let r=[],i=new Date(t),a={...e};a[10]||=a[0]?(a[0]+120)%360:45,a[11]||=a[0]?(a[0]+90)%360:15,a[12]||=a[0]?(a[0]+180)%360:105;let o=O.map(e=>{let t=a[String(e.p1)]===void 0?0:a[String(e.p1)],n=a[String(e.p2)]===void 0?0:a[String(e.p2)];return{...e,dialPos:H(t,n)}});for(let e of o){let t=null,a=null,o=!1,s=new Date(n-1,0,1);for(let c=0;c<1095;c++){let l=new Date(s.getTime()+c*24*60*60*1e3);if(l.getTime()<i.getTime())continue;let u=(l.getTime()-i.getTime())/31536e6,d=V(await W(U(new Date(i.getTime()+u*24*60*60*1e3)),0)),f=Math.abs(d-e.dialPos);f>22.5&&(f=45-f),f<=1?(t||=new Date(l),a=new Date(l),l.getFullYear()===n&&(o=!0)):t&&o?(K(r,e,t,a,n),t=null,o=!1):o||(t=null)}t&&o&&K(r,e,t,a,n)}return r}function K(e,t,n,r,i){let a=F[t.p1],o=F[t.p2],s=new Date(i,0,1),c=new Date(i,11,31,23,59,59),l=n.getTime()<s.getTime(),u=r.getTime()>c.getTime(),d=l?s:n,f=u?c:r;e.push({planetComboStr:`${a.emoji} ${a.name} × ${o.emoji} ${o.name}`,title:t.title,desc:t.desc||``,startDate:new Date(d),endDate:new Date(f),startStr:`${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`,endStr:`${f.getFullYear()}年${f.getMonth()+1}月${f.getDate()}日`,continuesFromPrevYear:l,continuesToNextYear:u})}function q(e){if(!B||z.length===0)return``;let t=new Date(B,e-1,1,0,0,0),n=new Date(B,e,0,23,59,59),r=z.filter(e=>e.startDate.getTime()<=n.getTime()&&e.endDate.getTime()>=t.getTime());if(r.length===0)return``;let i=`<p class="monthly-sub" style="margin: 16px 0 12px; font-weight:700; color:#c5a880;">🧭 この月にかかる運命のサイクル</p>`;return r.forEach(e=>{let t=e.desc&&e.desc.trim()!==``?e.desc:`あなたのこれからの未来において、もっともダイナミックな変化と大きな恩恵がもたらされる、人生の極めて重要な大転換期の期間です。`,n=``;e.continuesFromPrevYear&&e.continuesToNextYear?n=`<div style="margin-top:8px; font-size:12px; color:#a99a86;">※このサイクルは前の年から始まり、来年以降も続きます。</div>`:e.continuesFromPrevYear?n=`<div style="margin-top:8px; font-size:12px; color:#a99a86;">※このサイクルは前の年から続いています。</div>`:e.continuesToNextYear&&(n=`<div style="margin-top:8px; font-size:12px; color:#a99a86;">※このサイクルは来年以降も続きます。</div>`),i+=`
      <div class="schedule-card" data-type="roadmap" style="border-left: 4px solid #c5a880; margin-bottom: 16px;">
        <div class="card-top-row" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <div class="card-badges-group">
            <span class="card-badge-period" style="background: rgba(197, 168, 128, 0.15) !important; color: #c5a880 !important; font-weight:700; padding:3px 10px; border-radius:12px; font-size:13px;">⏳ 運命のサイクル</span>
            <span class="peak-day-gold-badge" style="background: #c5a880 !important; color: #0d0c0a !important; font-weight:800; padding:3px 10px; border-radius:12px; font-size:13px; margin-left:4px;">🎯 ${e.startStr} ～ ${e.endStr}</span>
          </div>
        </div>
        <div class="card-stimulus" style="color: #faf6f0; font-weight: 700; font-size: 15px; margin-top:8px;">
          ${e.title}
        </div>
        <div class="card-title" style="font-size: 13px; color: #c5a880 !important; margin-top: 6px; font-weight: 700; font-family:inherit;">
          💫 響き合うあなたの星： ${e.planetComboStr}
        </div>
        <div class="card-desc" style="margin-top: 10px; font-size: 13px; line-height: 1.6; color: #faf6f0;">
          ${t.replace(/\n/g,`<br>`)}
        </div>
        ${n}
      </div>
    `}),i}function J(e){let t=document.getElementById(`resultSection`);if(!t)return;let n=document.getElementById(`halfSumSection`);if(n||(n=document.createElement(`div`),n.id=`halfSumSection`,n.style.marginTop=`40px`,t.appendChild(n)),e.length===0){n.innerHTML=`
      <div class="monthly-header-divider"><h2>🧭 運命サイクル</h2></div>
      <div class="no-data">この年に人生の大きな変化を迎える特別な星の重なりはありません。穏やかで平和な安定期です。</div>
    `;return}n.innerHTML=`
    <div class="monthly-header-divider"><h2>🧭 運命サイクルについて</h2></div>
    <p class="monthly-sub" style="margin-bottom: 16px;">🎯マーク付きのカードは、各月のタブの【一番上】にも一緒に表示されています。</p>
    <div class="schedule-card" style="border: 1px dashed #c5a880; background: rgba(13, 12, 10, 0.8); margin-top: 10px; padding: 20px; border-radius: 8px;">
      <div style="font-size: 15px; font-weight: 800; color: #c5a880; display: flex; align-items: center; gap: 6px;">
        🔮 運命サイクルを読む特別なヒント
      </div>
      <div style="margin-top: 10px; font-size: 13px; line-height: 1.7; color: #c4b9ae;">
        <p style="margin-bottom: 10px;">サイクルのタイムラインを見ていると、<b>「大成功や開運のサイクル」と「体調ケアや調整のサイクル」の日付が同じ時期に重なること</b>があります。これはアプリのバグではなく、占星術におけるとても大切な真実です。</p>
        <p style="margin-bottom: 10px;">人生の大きな飛躍（ステップアップ）を迎えるとき、私たちの魂や身体は、次の新しいステージにふさわしい自分になるために、古いエネルギーを外に出そうとします。そのため、<b>『嬉しいチャンスが舞い込むと同時に、デトックスとして一時的な疲れや環境の一段落が同時に起きる』</b>というのは、星が正しく動いている最高の証拠なのです。</p>
        <p style="margin-bottom: 0;">もし重なる時期を見つけたら、怖がる必要はまったくありません。<b>「今はアクセルを踏んで思いきり羽ばたくと同時に、夜はスマホを閉じて自分を全力で労わってあげる、最高のご自愛セット期間なんだな」</b>と捉えてみてください。星の波を両方味方につけることで、運命の波を一番しなやかに乗りこなすことができますよ✨</p>
      </div>
    </div>
  `}function Y(){let e=document.getElementById(`monthTabs`);if(!e)return;let t=``;for(let e=1;e<=12;e++)t+=`<button class="month-tab-btn ${e===R?`active`:``}" data-month="${e}">${e}月</button>`;e.innerHTML=t,e.querySelectorAll(`.month-tab-btn`).forEach(t=>{t.addEventListener(`click`,t=>{e.querySelectorAll(`.month-tab-btn`).forEach(e=>e.classList.remove(`active`)),t.target.classList.add(`active`),R=parseInt(t.target.getAttribute(`data-month`),10),X(L);let n=document.getElementById(`filterTabs`);n&&(n.querySelectorAll(`.tab-btn`).forEach(e=>e.classList.remove(`active`)),n.querySelector(`[data-type="all"]`).classList.add(`active`))})})}function X(e){let t=document.getElementById(`scheduleList`);if(!t)return;let n=e.filter(e=>e&&e.monthNum===R);if(n.length===0&&z.length===0){t.innerHTML=`<div class="no-data">この月のデータは見つかりませんでした。</div>`;return}let r=n.map(e=>({transitPlanetId:e.transitPlanet?e.transitPlanet.id:null,title:e.title,rawDate:new Date(B||2026,R-1,1)})),i=``;typeof D==`function`&&(i=D(r,R-1));let a=i&&i.trim()!==``&&!i.includes(`余白月`)&&!i.includes(`undefined`),o=`<div class="monthly-header-divider"><h2>🌙 ${R}月の星</h2>${a?`<p class="monthly-sub">${i}</p>`:``}</div>`;o+=q(R),n.length>0&&n.forEach(e=>{if(!e||!e.aspect||!e.transitPlanet||!e.natalPlanet)return;let t=e.aspect.type===`good`,n=e.aspect.type===`flat`,r=(e.desc||``).replace(/\n/g,`<br>`),i=`#ff69b4`,a=`💖 好調期`;n?(i=`#a7bfae`,a=`🍃 フラット期`):t||(i=`#ffd700`,a=`⚠️ 注意期`),o+=`
        <div class="schedule-card planet-${e.transitPlanet.id}" data-type="${n?`all`:e.aspect.type}">
          <div class="card-top-row">
            <div class="card-badges-group">
              <span class="card-badge-period">📅 ${e.dateRangeLabel}</span>
              <span class="peak-day-gold-badge">🎯 ${e.peakDayLabel}</span>
            </div>
            <span style="font-size:13px; font-weight:800; color:${i};">${a} (${e.transitPlanet.emoji} ${e.aspect.emoji} ${e.natalPlanet.emoji} ${e.aspect.name})</span>
          </div>
          <div class="card-stimulus">今の【${e.transitPlanet.name}】 ➔ あなたの【${e.natalPlanet.name}】</div>
          <div class="card-title">${e.title}</div>
          <div class="card-desc">${r}</div>
        </div>`}),t.innerHTML=o}function Z(){let e=document.getElementById(`filterTabs`);e&&e.addEventListener(`click`,t=>{let n=t.target.closest(`.tab-btn`);if(!n)return;e.querySelectorAll(`.tab-btn`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-type`);document.querySelectorAll(`.schedule-card`).forEach(e=>{let t=e.getAttribute(`data-type`);e.style.display=r===`all`||t===r?`block`:`none`})})}async function Q(){let e=document.getElementById(`birthdate`).value,t=document.getElementById(`scanyear`).value;if(!e||!t){alert(`入力してね✨`);return}localStorage.setItem(`astrology_birthdate`,e),localStorage.setItem(`astrology_scan_year`,t);let n=document.getElementById(`calcBtn`),r=document.getElementById(`resultSection`),i=document.getElementById(`scanChara`),a=n.textContent;i&&(i.innerHTML=`<div class="scan-bubble">星々をスキャン中！<br>ちょっと待ってね✨</div>`);let o=document.getElementById(`scanCharaChaser`);o&&(o.classList.remove(`active`),o.offsetWidth,o.classList.add(`active`)),n.textContent=`大スキャン中... ⏳`,n.disabled=!0,r.style.display=`none`,L=[],await new Promise(e=>setTimeout(e,300));try{let n=A,i=new Date(e),a=U(i),o={};for(let e=0;e<n.length;e++){let t=n[e],r=await W(a,t.id);o[String(t.id)]=typeof r==`number`&&!isNaN(r)?r:0}let s=parseInt(t,10);if(s<i.getFullYear()){alert(`占いたい西暦には、あなたが生まれた年（${i.getFullYear()}年）以降の未来を入力してね🔮✨`);return}let c=s%4==0&&s%100!=0||s%400==0?366:365,l=new Date(s,0,1,12,0,0),u=U(l),d=Array.from({length:c},()=>[]);for(let e=0;e<c;e++){e%15==0&&await new Promise(e=>setTimeout(e,1));let t=u+e,r=new Date(l.getTime()+e*24*60*60*1e3),i=r.getMonth()+1,a=r.getDate();for(let r of M){let s=j.find(e=>e.id===r),c=await W(t,r),l=N[r]||3;for(let t of n){let n=o[String(t.id)],u=Math.abs(c-n);u>180&&(u=360-u);for(let n of P){let o=Math.abs(u-n.angle);if(o<=l){let c=E[`${r}_${t.id}_${n.angle}`];c&&d[e].push({transitPlanet:s,natalPlanet:t,aspect:n,score:o,month:i,day:a,title:c.title,desc:c.desc,uniqueKey:`${r}_${t.id}_${n.angle}`})}}}}}for(let e=1;e<=12;e++){let t=[];for(let n=0;n<c;n++){let r=new Date(l.getTime()+n*24*60*60*1e3);r.getMonth()+1===e&&t.push({day:r.getDate(),aspects:d[n]})}let n={};t.forEach(e=>{let t={};e.aspects.forEach(e=>{(!t[e.uniqueKey]||e.score<t[e.uniqueKey].score)&&(t[e.uniqueKey]=e)}),Object.values(t).forEach(t=>{n[t.uniqueKey]||(n[t.uniqueKey]=[]);let r=n[t.uniqueKey],i=!1;for(let n of r)if(e.day>=n.start-1&&e.day<=n.end+1){n.end=Math.max(n.end,e.day),n.start=Math.min(n.start,e.day),t.score<n.bestScore&&(n.bestScore=t.score),i=!0;break}i||r.push({start:e.day,end:e.day,bestScore:t.score,data:t})})});let r=[];if(Object.keys(n).forEach(e=>{n[e].forEach(e=>{r.push(e)})}),r.length>0){r.sort((e,t)=>e.bestScore-t.bestScore);let t=r.slice(0,4);t.sort((e,t)=>e.start-t.start),t.forEach(t=>{let n=t.data,r=t.start===t.end?`${e}月${t.start}日頃`:`${e}月${t.start}日～${t.end}日頃`,i=t.start<=10?`上旬`:t.start<=20?`中旬`:`下旬`;L.push({transitPlanet:n.transitPlanet,natalPlanet:n.natalPlanet,aspect:n.aspect,title:n.title||``,desc:n.desc||``,monthNum:e,periodName:i,dateRangeLabel:`${e}月${i}`,peakDayLabel:r,isFlat:!1,startDay:t.start})})}else L.push({transitPlanet:{id:99,name:`星の余白`,emoji:`🌙`},natalPlanet:{id:99,name:`あなたの心`,emoji:`✨`},aspect:{angle:99,name:`フラット`,emoji:`🍃`,type:`flat`},title:`星たちの穏やかな余白期間。特に何もない日はフラットにいこう`,desc:`☕ 今の空はおだやかで、あなたの星を強く揺さぶるようなピリピリした角度はありません。焦らず自分をただ優しくフラットに整えてあげるのが一番の開運アクションです。`,monthNum:e,periodName:`全体`,dateRangeLabel:`${e}月全体`,peakDayLabel:`${e}月全体`,isFlat:!0,startDay:1})}L.sort((e,t)=>e.monthNum===t.monthNum?e.startDay-t.startDay:e.monthNum-t.monthNum),R=1,Y(),r.style.display=`block`;let f=await G(o,e,s);z=f,B=s,X(L),J(f)}finally{i&&(i.innerHTML=``);let e=document.getElementById(`scanCharaChaser`);e&&e.classList.remove(`active`),n.textContent=a,n.style.opacity=`1`,n.disabled=!1}}async function $(){let e=document.createElement(`style`);e.textContent=k,document.head.appendChild(e);try{let e=window.location.pathname.endsWith(`/`)?window.location.pathname:window.location.pathname.substring(0,window.location.pathname.lastIndexOf(`/`)+1);I=new w({ephePath:e+`ephe/`,wasmBinaryFile:e+`assets/swisseph-BmP0Bw24.wasm`}),I&&typeof I.init==`function`&&await I.init()}catch{}let t=localStorage.getItem(`astrology_birthdate`)||`1995-10-10T12:00`,n=localStorage.getItem(`astrology_scan_year`)||`2026`,r=document.getElementById(`app`);if(!r)return;r.innerHTML=`
    <div id="scanCharaChaser" class="scan-dash-chara"></div>
    <div class="container">
      <div class="header">
        <h1>クロノスコープ運勢</h1>
        <p class="notice-text">🔮 効果の保証はありません</p>
        <p class="author">produced by れいさん</p>
      </div>
      <div class="input-card">
        <div class="form-row">
          <div class="form-group" style="grid-column:span 2;">
            <label>生まれた日時</label>
            <input type="datetime-local" id="birthdate" class="form-control" value="${t}">
          </div>
        </div>
        <div class="form-row" style="margin-top: 12px;">
          <div class="form-group" style="grid-column:span 2;">
            <label>占いたい西暦</label>
            <input type="number" id="scanyear" class="form-control" value="${n}" min="1900" max="2100">
          </div>
        </div>
        <button id="calcBtn" class="btn-submit" style="margin-top:16px;">大スキャン！</button>
        <div id="scanChara" style="margin-top: 16px; text-align: center; width: 100%;"></div>
      </div>
      <div id="resultSection" style="display: none;">
        <div class="month-tabs" id="monthTabs"></div>
        <div class="filter-tabs" id="filterTabs">
          <button class="tab-btn active" data-type="all">✨ すべて</button>
          <button class="tab-btn" data-type="good">💖 好調期</button>
          <button class="tab-btn" data-type="bad">⚠️ 注意期</button>
        </div>
        <div class="schedule-list" id="scheduleList"></div>
      </div>
    </div>`;let i=document.getElementById(`calcBtn`);i&&i.addEventListener(`click`,Q),Z()}$();