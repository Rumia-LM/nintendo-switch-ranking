const gameData = [
  {
    rank: 1,
    title: "スーパー マリオパーティ ジャンボリー [Nintendo Switch]",
    price: "¥6,106",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/K0001634610.jpg",
    release_date: "2024年10月17日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 2,
    title: "ドラゴンクエストIII そして伝説へ… [Nintendo Switch]",
    price: "¥6,282",
    image_url: "https://m.media-amazon.com/images/I/61mJHMLthgL._SL160_.jpg",
    release_date: "2024年11月14日",
    maker: "スクウェア・エニックス(SQUARE ENIX)"
  },
  {
    rank: 3,
    title: "ゼルダの伝説 知恵のかりもの [Nintendo Switch]",
    price: "¥6,174",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/K0001634611.jpg",
    release_date: "2024年 9月26日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 4,
    title: "ロマンシング サガ2 リベンジオブザセブン [Nintendo Switch]",
    price: "¥5,640",
    image_url: "https://m.media-amazon.com/images/I/5164nn-zuRL._SL160_.jpg",
    release_date: "2024年10月24日",
    maker: "スクウェア・エニックス(SQUARE ENIX)"
  },
  {
    rank: 5,
    title: "三國志8 REMAKE [Nintendo Switch]",
    price: "¥7,980",
    image_url: "https://a.sofmap.com/images/product/medium/4988615183935.jpg",
    release_date: "2024年10月24日",
    maker: "コーエーテクモゲームス"
  },
  {
    rank: 6,
    title: "Wizardry： Proving Grounds of the Mad Overlord DELUXE EDITION [Nintendo Switch]",
    price: "¥―",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/nowprinting.gif",
    release_date: "2024年10月10日",
    maker: "SUPERDELUXE GAMES(スーパーデラックスゲームス)"
  },
  {
    rank: 7,
    title: "スーパーマリオRPG [Nintendo Switch]",
    price: "¥2,699",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/K0001547121.jpg",
    release_date: "2023年11月17日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 8,
    title: "桃太郎電鉄 ～昭和 平成 令和も定番！～ [Nintendo Switch]",
    price: "¥5,100",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/K0001187544.jpg",
    release_date: "2020年11月19日",
    maker: "コナミ(KONAMI)"
  },
  {
    rank: 9,
    title: "Wizardry： Proving Grounds of the Mad Overlord [通常版] [Nintendo Switch]",
    price: "¥4,380",
    image_url: "https://m.media-amazon.com/images/I/41zTZSS9fYL._SL160_.jpg",
    release_date: "2024年10月10日",
    maker: "SUPERDELUXE GAMES(スーパーデラックスゲームス)"
  },
  {
    rank: 10,
    title: "パワフルプロ野球2024-2025 [Nintendo Switch]",
    price: "¥6,880",
    image_url: "https://m.media-amazon.com/images/I/41RpYhpinCL._SL160_.jpg",
    release_date: "2024年 7月18日",
    maker: "コナミ(KONAMI)"
  },
  {
    rank: 11,
    title: "大乱闘スマッシュブラザーズ SPECIAL [Nintendo Switch]",
    price: "¥6,282",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/K0001039549.jpg",
    release_date: "2018年12月7日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 12,
    title: "リングフィット アドベンチャー [Nintendo Switch]",
    price: "¥7,830",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/K0001192045.jpg",
    release_date: "2019年10月18日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 13,
    title: "ゼルダの伝説 ティアーズ オブ ザ キングダム [Nintendo Switch]",
    price: "¥6,537",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/K0001165320.jpg",
    release_date: "2023年 5月12日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 14,
    title: "ウマ娘 プリティーダービー 熱血ハチャメチャ大感謝祭！ [Nintendo Switch]",
    price: "¥3,671",
    image_url: "https://m.media-amazon.com/images/I/51Lny6OzxQL._SL160_.jpg",
    release_date: "2024年 8月30日",
    maker: "Cygames(サイゲームス)"
  },
  {
    rank: 15,
    title: "北海道連鎖殺人 オホーツクに消ゆ ～追憶の流氷・涙のニポポ人形～ [Nintendo Switch]",
    price: "¥7,080",
    image_url: "https://m.media-amazon.com/images/I/51At++prCyL._SL160_.jpg",
    release_date: "2024年 9月12日",
    maker: "ジー・モード(G-mode)"
  },
  {
    rank: 16,
    title: "ドラゴンクエストXI 過ぎ去りし時を求めて S [新価格版] [Nintendo Switch]",
    price: "¥4,419",
    image_url: "https://m.media-amazon.com/images/I/51GDcyh-OGL._SL160_.jpg",
    release_date: "2020年12月4日",
    maker: "スクウェア・エニックス(SQUARE ENIX)"
  },
  {
    rank: 17,
    title: "あつまれ どうぶつの森 [Nintendo Switch]",
    price: "¥5,261",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/K0001090396.jpg",
    release_date: "2020年 3月20日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 18,
    title: "マリオカート8 デラックス",
    price: "¥5,492",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/K0000932975.jpg",
    release_date: "2017年 4月28日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 19,
    title: "EA SPORTS FC 25 [Nintendo Switch]",
    price: "¥5,438",
    image_url: "https://m.media-amazon.com/images/I/41ixbgFnNwL._SL160_.jpg",
    release_date: "2024年 9月27日",
    maker: "エレクトロニック・アーツ(Electronic Arts)"
  },
  {
    rank: 20,
    title: "スプラトゥーン3 [Nintendo Switch]",
    price: "¥5,140",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/K0001333398.jpg",
    release_date: "2022年 9月9日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 21,
    title: "ひみつのアイプリ あつめて！シークレットメモリーズ [Nintendo Switch]",
    price: "¥5,281",
    image_url: "https://m.media-amazon.com/images/I/61RmYhb4R1L._SL160_.jpg",
    release_date: "2024年12月5日",
    maker: "日本コロムビア"
  },
  {
    rank: 22,
    title: "マリオ&ルイージRPG ブラザーシップ！ [Nintendo Switch]",
    price: "¥6,106",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/K0001634606.jpg",
    release_date: "2024年11月7日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 23,
    title: "桃太郎電鉄ワールド ～地球は希望でまわってる！～ [Nintendo Switch]",
    price: "¥4,673",
    image_url: "https://dist.joshinweb.jp/emall/img/sm/JSN_C00001/middle/49/88602/4988602176490.jpg",
    release_date: "2023年11月16日",
    maker: "コナミ(KONAMI)"
  },
  {
    rank: 24,
    title: "Recolit [Nintendo Switch]",
    price: "¥3,294",
    image_url: "https://m.media-amazon.com/images/I/41eA4T2D-OL._SL160_.jpg",
    release_date: "2024年10月17日",
    maker: "room6"
  },
  {
    rank: 25,
    title: "スーパーマリオブラザーズ ワンダー [Nintendo Switch]",
    price: "¥5,279",
    image_url: "https://m.media-amazon.com/images/I/51Xm50RwidL._SL160_.jpg",
    release_date: "2023年10月20日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 26,
    title: "マリオパーティ スーパースターズ [Nintendo Switch]",
    price: "¥5,098",
    image_url: "https://m.media-amazon.com/images/I/51bOH5kQXSS._SL160_.jpg",
    release_date: "2021年10月29日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 27,
    title: "トラブル・マギア ～訳アリ少女は未来を勝ち取るために異国の魔法学校へ留学します～ [通常版] [Nintendo Switch]",
    price: "¥7,103",
    image_url: "https://dist.joshinweb.jp/emall/img/sm/JSN_C00001/middle/49/95857/4995857098385.jpg",
    release_date: "2024年 9月12日",
    maker: "アイディアファクトリー(IDEA FACTORY)"
  },
  {
    rank: 28,
    title: "ルイージマンション2 HD [Nintendo Switch]",
    price: "¥4,900",
    image_url: "https://m.media-amazon.com/images/I/51KBUnHR-BL._SL160_.jpg",
    release_date: "2024年 6月27日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 29,
    title: "ゼルダの伝説 夢をみる島 [通常版] [Nintendo Switch]",
    price: "¥5,636",
    image_url: "https://img1.kakaku.k-img.com/images/productimage/t/K0001129827.jpg",
    release_date: "2019年 9月20日",
    maker: "任天堂(Nintendo)"
  },
  {
    rank: 30,
    title: "ディズニー ミュージックパレード アンコール [Nintendo Switch]",
    price: "¥5,382",
    image_url: "https://m.media-amazon.com/images/I/51+XyJMKq2L._SL160_.jpg",
    release_date: "2024年11月21日",
    maker: "イマジニア(Imagineer)"
  },
];
