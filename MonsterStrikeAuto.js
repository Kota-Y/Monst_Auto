/******************************************************************/
/*ラジオボタンの値を取得*/
/******************************************************************/
function RadioCheck()
{
	var time = document.getElementsByName("time");

	var check;	//チェックされているラジオボタンのvalue

	for(var i = 0; i < time.length; i++)
	{
		if(time[i].checked)
		{
			check = time[i].value;
		}
	}
	return check;
}
/******************************************************************/
/*hiddenの値を変更(ラーx専用)*/
/******************************************************************/
function HiddenRa()
{
	var check = RadioCheck();
	document.getElementById("ra").value = check;
}
/******************************************************************/
/*hiddenの値を変更(運極限定(タス曜日))*/
/******************************************************************/
function HiddenLimitTasu()
{
	var check = RadioCheck();
	document.getElementById("limit_tasu").value = check;
}
/******************************************************************/
/*hiddenの値を変更(運極限定(超絶))*/
/******************************************************************/
function HiddenLimitHard()
{
	var check = RadioCheck();
	document.getElementById("limit_hard").value = check;
}
/******************************************************************/
/*hiddenの値を変更(誰でも(超絶))*/
/******************************************************************/
function HiddenAnybodyHard()
{
	var check = RadioCheck();
	document.getElementById("anybody_hard").value = check;
}
/******************************************************************/
/*hiddenの値を変更(運極限定(降臨))*/
/******************************************************************/
function HiddenLimitNormal()
{
	var check = RadioCheck();
	document.getElementById("limit_normal").value = check;
}
/******************************************************************/
/*hiddenの値を変更(誰でも(降臨))*/
/******************************************************************/
function HiddenAnybodyNormal()
{
	var check = RadioCheck();
	document.getElementById("anybody_normal").value = check;
}
/******************************************************************/
/*hiddenの値を変更(神殿)*/
/******************************************************************/
function HiddenTemple()
{
	var check = RadioCheck();
	document.getElementById("temple").value = check;
}
/******************************************************************/
/*属性とモンスター名を連動*/
/******************************************************************/
function SelectLinkage()
{
	const LINKAGE_NOMBER = 2;	//連動するフォームの数

	var attribute = [document.forms.linkage_limit.attribute_limit,document.forms.linkage_anybody.attribute_anybody];
	var kind_normal = [document.forms.linkage_limit.kind_limit_normal,document.forms.linkage_anybody.kind_anybody_normal];

	for(var i = 0; i < LINKAGE_NOMBER; i++)
	{
		kind_normal[i].options.length = 0;
	}

	for(var i = 0; i < LINKAGE_NOMBER; i++)
	{
		if (attribute[i].options[attribute[i].selectedIndex].value == "火")
		{
			kind_normal[i].options[0]  = new Option("赤穂浪士","討入り気分で恋する忠臣蔵");
			kind_normal[i].options[1]  = new Option("アスタロト","地獄の輪舞曲");
			kind_normal[i].options[2]  = new Option("ヴィシャス","赤い凶星の暗殺者");
			kind_normal[i].options[3]  = new Option("宇宙人グレイ","UFO襲来か？謎の大爆発");
			kind_normal[i].options[4]  = new Option("ガーゴイル","堕落のブラッディ・パンク");
			kind_normal[i].options[5]  = new Option("雲母大佐","戦場に咲き誇る真紅の華");
			kind_normal[i].options[6]  = new Option("スルト","世界を焼き尽くす焔の巨人");
			kind_normal[i].options[7]  = new Option("ズーマー","アンドロメダからの挑戦状");
			kind_normal[i].options[8]  = new Option("世阿弥","義侠に燃え立つ能面の英雄");
			kind_normal[i].options[9]  = new Option("ハートの女王","激情のキラークィーン");
			kind_normal[i].options[10] = new Option("ヒュドラ","星になった炎の眷属");
			kind_normal[i].options[11] = new Option("ファイアードラゴン","灼熱の業火");
			kind_normal[i].options[12] = new Option("フラム・フュジ","バーニング・スカイ");
			kind_normal[i].options[13] = new Option("ブリアレーオ","ラ・マンチャの熱い風");
			kind_normal[i].options[14] = new Option("桃太郎","吉備ノ国の赤き剣士");
			kind_normal[i].options[15] = new Option("モルドレッド","裏切りの聖騎士");
			kind_normal[i].options[16] = new Option("羅刹","平安京を血に染める暗殺鬼");
			kind_normal[i].options[17] = new Option("ロック鳥","怪翼が切り裂く赤い夜");
			kind_normal[i].options[18] = new Option("ワイアット・アープ","OK牧場の血闘");
		}
		else if (attribute[i].options[attribute[i].selectedIndex].value == "水")
		{
			kind_normal[i].options[0]  = new Option("沖田総司","水面に映る、美しき死相");
			kind_normal[i].options[1]  = new Option("オリガ","絶対零度");
			kind_normal[i].options[2]  = new Option("カイ","雪に鎖された永遠のパズル");
			kind_normal[i].options[3]  = new Option("クィーンバタフライ","危ない！毒水蝶の美しき罠");
			kind_normal[i].options[4]  = new Option("クラーケン","魔海の破壊王");
			kind_normal[i].options[5]  = new Option("クルップⅣD","フーリレン・ゲニー");
			kind_normal[i].options[6]  = new Option("秋刀魚","鮮度抜群！海鳴の中の怪刃");
			kind_normal[i].options[7]  = new Option("始皇帝","万里を翔る蒼龍");
			kind_normal[i].options[8]  = new Option("ジョーカー","道化師は空っぽの魂で笑う");
			kind_normal[i].options[9]  = new Option("ZENIGATA","十手に染みる男の涙");
			kind_normal[i].options[10] = new Option("平清盛","瀬戸内の海路を制した覇者");
			kind_normal[i].options[11] = new Option("鉄扇公主","蒼風舞う愛の芭蕉扇");
			kind_normal[i].options[12] = new Option("ドラキュラ","冷血伯爵が棲む吸血鬼城");
			kind_normal[i].options[13] = new Option("ぬらりひょん","百鬼夜行の総大将");
			kind_normal[i].options[14] = new Option("フォックスメタル","狐穴の覆面レスラー現る！");
			kind_normal[i].options[15] = new Option("ブルーロブスター","荒ぶる海の殺意のマリネ");
			kind_normal[i].options[16] = new Option("マリーアントワネット","水色革命！ケーキは如何？");
			kind_normal[i].options[17] = new Option("ミケランジェロ","狂気にも似た蒼い激情");
			kind_normal[i].options[18] = new Option("リリス","死海のレクイエム");
			kind_normal[i].options[19] = new Option("ルイ13世","君主の心はいつもブルー");

		}
		else if (attribute[i].options[attribute[i].selectedIndex].value == "木")
		{
			kind_normal[i].options[0]  = new Option("一寸法師","小槌をうちし碧き法師");
			kind_normal[i].options[1]  = new Option("ガッチェス","木獅子！ガッチェスの王国");
			kind_normal[i].options[2]  = new Option("ギガ・マンティス","SOS！狙われた緑の地球");
			kind_normal[i].options[3]  = new Option("サターン","決戦！土星魔機神サターン");
			kind_normal[i].options[4]  = new Option("ジュラザウラー","最凶生物");
			kind_normal[i].options[5]  = new Option("ジライヤ","ガマ油山のからくり忍法帖");
			kind_normal[i].options[6]  = new Option("スノーマン","襲来警報発動中");
			kind_normal[i].options[7]  = new Option("セイレーン","死を誘う潮風のメロディ");
			kind_normal[i].options[8]  = new Option("セルケト","蠍女の緑髪に御用心");
			kind_normal[i].options[9]  = new Option("近松門左衛門","松の原を蝕む浄瑠璃地獄");
			kind_normal[i].options[10] = new Option("張角","民衆を束ねし教団の大樹");
			kind_normal[i].options[11] = new Option("貂蝉","月をも惑わす可憐な花");
			kind_normal[i].options[12] = new Option("天狗","敵か？味方か？木ノ葉天狗");
			kind_normal[i].options[13] = new Option("徳川慶喜","英明なり、華将軍");
			kind_normal[i].options[14] = new Option("バジリスク","絶望のデッド・フォレスト");
			kind_normal[i].options[15] = new Option("PC-G3","電脳グリーン・ファントム");
			kind_normal[i].options[16] = new Option("ブルジオン","B・ソーンズ・改");
			kind_normal[i].options[17] = new Option("ポルターガイスト","幽霊屋敷のグリーンノイズ");
			kind_normal[i].options[18] = new Option("メデューサ","ゴルゴンの呪樹");
		}

		else if (attribute[i].options[attribute[i].selectedIndex].value == "光")
		{
			kind_normal[i].options[0]  = new Option("伊400","和国の姫君");
			kind_normal[i].options[1]  = new Option("ヴィシュヌ","天啓のアヴァターラ");
			kind_normal[i].options[2]  = new Option("エビルインライト","神か悪魔か");
			kind_normal[i].options[3]  = new Option("エメラルドドラゴン","翠玉宿せし光の竜・改");
			kind_normal[i].options[4]  = new Option("袁紹","偉大なる袁家の末裔");
			kind_normal[i].options[5]  = new Option("オロチマル","雷遁のホワイトスネイク");
			kind_normal[i].options[6]  = new Option("カヴァレッタ","働く蟻と眩しいキリギリス");
			kind_normal[i].options[7]  = new Option("ゴースト","黄金のファンタズマ");
			kind_normal[i].options[8]  = new Option("座敷わらし","黄金色した童唄");
			kind_normal[i].options[9]  = new Option("ジャック","光るカボチャの玩具箱");
			kind_normal[i].options[10] = new Option("信号鬼","迅雷の交差点");
			kind_normal[i].options[11] = new Option("セクシーローラー","鋼のキューティブロンド");
			kind_normal[i].options[12] = new Option("チタン元帥","魔鉱帝国の総司令官");
			kind_normal[i].options[13] = new Option("テュポーン","天界震わすガイアの子");
			kind_normal[i].options[14] = new Option("ネロ","暴君を照らす悪意の閃光");
			kind_normal[i].options[15] = new Option("パイン","パインの気まぐれ大進撃");
			kind_normal[i].options[16] = new Option("フェンリル","神を喰う狼牙の邪光");
			kind_normal[i].options[17] = new Option("プリンセスノッコ","キラキラ胞子の毒姫様");
			kind_normal[i].options[18] = new Option("ベヒーモス","天界の神が創りし傑作");
			kind_normal[i].options[19] = new Option("ムラマサ","現世に仇なす幽界の妖刀");
			kind_normal[i].options[20] = new Option("源頼朝","鎌倉を照らす源氏の栄光");
			kind_normal[i].options[21] = new Option("ランプの精マリーダ","ランプが夢見る黄金の夜");
			kind_normal[i].options[22] = new Option("リシュリュー","国家を操る信仰の光");
		}
		else if (attribute[i].options[attribute[i].selectedIndex].value == "闇")
		{     
			kind_normal[i].options[0]  = new Option("イエティ","夜の雪山で見た！巨大足跡");
			kind_normal[i].options[1]  = new Option("稲荷","御伽草子の黒妖狐");
			kind_normal[i].options[2]  = new Option("オリジナル","原点");
			kind_normal[i].options[3]  = new Option("カブトロス","銀河の闇から来襲！昆虫軍");
			kind_normal[i].options[4]  = new Option("かまいたち","闇路に疾走るつむじ風");
			kind_normal[i].options[5]  = new Option("牛魔王","摩雲洞に棲む妖魔の闇王");
			kind_normal[i].options[6]  = new Option("クリシュナ","魅惑のブラックサファイア");
			kind_normal[i].options[7]  = new Option("サテライト","衛星少女的孤独");
			kind_normal[i].options[8]  = new Option("ジルドレ","闇に堕ちた救国の英雄");
			kind_normal[i].options[9]  = new Option("スラッシュ","闇に選ばれし覇王");
			kind_normal[i].options[10] = new Option("ゼペット","夢の国を呑み込む宇宙鯨");
			kind_normal[i].options[11] = new Option("ゼロ","原点");
			kind_normal[i].options[12] = new Option("滝夜叉姫","都の夜を震わす丑の刻参り");
			kind_normal[i].options[13] = new Option("ダ・ヴィンチ","天才、それは宇宙の奇跡");
			kind_normal[i].options[14] = new Option("ダークドラゴン","常闇の邪神");
			kind_normal[i].options[15] = new Option("デスアーク","強襲！暗黒総統デスアーク");
			kind_normal[i].options[16] = new Option("董卓","暴虐！魔王の黒い覇道");
			kind_normal[i].options[17] = new Option("ドリルマックス","復讐のブラックメタル");
			kind_normal[i].options[18] = new Option("バステト","闇夜のストレイキャット");
			kind_normal[i].options[19] = new Option("バハムート","黒紫蝕の巨獣");
			kind_normal[i].options[20] = new Option("ビゼラー","闇狼！ビゼラーの牢獄");
			kind_normal[i].options[21] = new Option("魔女ヴァニラ","魔女と黒い安息日");
			kind_normal[i].options[22] = new Option("ムラサメ","眠りから覚めし虹睨の妖刀");			
			kind_normal[i].options[23] = new Option("ギガゾンビ","精霊王の黒き宿願");			
		}
	} 
}