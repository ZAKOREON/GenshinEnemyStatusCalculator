const ENEMY_DATA = [
  {
      "name": "湖辺のヴィヴィアン",
      "path": "https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Tainted_Water-Spouting_Phantasm_Icon.png",
      "type": "Other",
      "rate": 65.2,
      "mag": 2
  },
  {
      "name": "湖辺のニニアン",
      "path": "https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Tainted_Water-Splitting_Phantasm_Icon.png",
      "type": "Other",
      "rate": 73,
      "mag": 2
  },
  {
      "name": "イゾルト",
      "path": "https://static.wikia.nocookie.net/gensin-impact/images/d/dd/Frost_Operative_Icon.png",
      "type": "Other",
      "rate": 66,
      "mag": 2
  },
  {
      "name": "自律スーパーコンピューティング型力場生成装置",
      "path": "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Arithmetic_Enhancer_Mek_Icon.png",
      "type": "Other",
      "rate": 38,
      "mag": 2
  },
  {
      "name": "リアム",
      "path": "https://static.wikia.nocookie.net/gensin-impact/images/9/91/Liam_Icon.png",
      "type": "Other",
      "rate": 61,
      "mag": 2
  },
  {
      "name": "ロッキー・アヴィルドセン",
      "path": "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Rocky_Avildsen_Icon.png",
      "type": "Other",
      "rate": 64,
      "mag": 2
  },
  {
      "name": "スネージヴナのディアンナラ",
      "path": "https://static.wikia.nocookie.net/gensin-impact/images/c/c6/Wind_Operative_Icon.png",
      "type": "Other",
      "rate": 62.6,
      "mag": 2
  },
  {
      "name": "赤璋巡岳府君",
      "path": "https://static.wikia.nocookie.net/gensin-impact/images/1/12/Geovishap_Icon.png",
      "type": "Other",
      "rate": 47.8,
      "mag": 2
  },
  {
      "name": "シネアス",
      "path": "https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Primordial_Bathysmal_Vishap_Icon.png",
      "type": "Other",
      "rate": 54,
      "mag": 2
  },
  {
      "name": "魔像プラエトリアニ",
      "path": "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/23/94675339/58a281322c63e65ad15683fe7427a02d_8875288911511888401.png",
      "type": "Elite",
      "rate": 4,
      "mag": 2
  },
  {
      "name": "魔像レガトゥス",
      "path": "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/23/94675339/3d9acabfe82467816e21ac130d1bf59a_5925693679090222723.png",
      "type": "Boss",
      "rate": 16,
      "mag": 2
  },
  {
      "name": "「召使」",
      "path": "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/23/94675339/6673f62e348a0eb42218a128deb8410e_6584525351850798651.png",
      "type": "WeeklyBoss",
      "rate": 75,
      "mag": 2
  },
  {
      "name": "玄文獣",
      "path": "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/01/31/94675339/d75494fa72798564617469b6393fac97_7615530157844771133.png",
      "type": "Elite",
      "rate": 4.2,
      "mag": 2
  },
  {
      "name": "山隠れの猊獣",
      "path": "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/01/31/94675339/f02b8c509e8b9e4440f8c7d044f8206e_5358668850199852689.png",
      "type": "Boss",
      "rate": 16.6,
      "mag": 2
  },
  {
      "name": "呑星の鯨",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/11/06/94675339/d6f05906844b79f1be3d4f049381a60f_6730019851764958623.png",
      "type": "WeeklyBoss",
      "rate": 64,
      "mag": 2
  },
  {
      "name": "水形タルパ",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/11/06/94675339/685c8e4b6a58dbed2c74cbbf1cbb977c_3966389409208072304.png",
      "type": "Boss",
      "rate": 22,
      "mag": 2
  },
  {
      "name": "ファデュイ・氷霜の従者",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/26/94675339/b2c598a4fa81be8bb43ba35074d92f74_5010376871687849394.png",
      "type": "Elite",
      "rate": 8,
      "mag": 2
  },
  {
      "name": "ファデュイ・烈風の従者",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/26/94675339/aae4d48597cbdb452d7113200f76a95d_8605861208737833595.png",
      "type": "Elite",
      "rate": 7,
      "mag": 2
  },
  {
      "name": "千年真珠の海駿",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/26/94675339/c4f5112a860768d0c0c581344c205174_4811251870955148481.png",
      "type": "Boss",
      "rate": 11,
      "mag": 2
  },
  {
      "name": "実験用フィールド生成装置",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/26/94675339/411a0336222dd0d0f0dd7ae5c80e43f4_9093335302437775192.png",
      "type": "Boss",
      "rate": 15.7,
      "mag": 2
  },
  {
      "name": "プクプク獣",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/20/94675339/640ca728bc061ad3a4a830e4ee987ec1_423851246562824176.png",
      "type": "Common",
      "rate": 1.3,
      "mag": 2
  },
  {
      "name": "チェルビックアプリシア",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/20/94675339/c58af38ac984e0b69693a33ef6750a5b_6032757936325575150.png",
      "type": "Common",
      "rate": 2.6,
      "mag": 2
  },
  {
      "name": "アワアワタツノコ・オス",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/20/94675339/48571f3d117c52e91764c7ff89d44b52_4416406348252890431.png",
      "type": "Common",
      "rate": 2.6,
      "mag": 2
  },
  {
      "name": "重甲ヤドカニ",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/20/94675339/329e20cf29240d29d0ac7fe36c2387ec_8430671281481229569.gif",
      "type": "Common",
      "rate": 0.78,
      "mag": 2
  },
  {
      "name": "建造特化型マシナリー",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/1344b14a8d98aa99c73716774fd35a77_8298589596381160425.png",
      "type": "Common",
      "rate": 7,
      "mag": 2
  },
  {
      "name": "殲滅特化型マシナリー",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/16ef076f8093794bc35bba0ea0516739_3828442202535540213.png",
      "type": "Common",
      "rate": 5.2,
      "mag": 2
  },
  {
      "name": "制圧特化型マシナリー",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/2f50163bfc40d3af453ccd6f2d227fe7_3896905905503394936.png",
      "type": "Common",
      "rate": 4,
      "mag": 2
  },
  {
      "name": "攻堅特化型マシナリー",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/f47330ba59a37b485805f076403c1e63_8333469613811944687.png",
      "type": "Common",
      "rate": 4.8,
      "mag": 2
  },
  {
      "name": "マシナリー・区域警戒型",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/6dc3e045a6a5328ef191cd16d2d33a5f_3135091519711000975.png",
      "type": "Common",
      "rate": 1.4,
      "mag": 2
  },
  {
      "name": "マシナリー・機敏採集型",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/97d935b7ef2029022d2afff1dda10858_2783839957643134628.png",
      "type": "Common",
      "rate": 2.4,
      "mag": 2
  },
  {
      "name": "マシナリー・地質探知型",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/9d2abe9dbb827e024899c843ff2f0270_1661273731842833055.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "マシナリー・演算力増幅器",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/b41d5988248088edd12a7f16da6657da_3934178820929979197.png",
      "type": "Common",
      "rate": 1.8,
      "mag": 2
  },
  {
      "name": "マシナリー・偵察記録型",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/03b6c3af19fcba75282ba382142a4b01_2177933101956325666.png",
      "type": "Common",
      "rate": 1.6,
      "mag": 2
  },
  {
      "name": "狂蔓ブリーチャープリムス",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/dd7d9c3c7e9285b9650a64fc6550622b_818037093322640846.png",
      "type": "Elite",
      "rate": 3,
      "mag": 2
  },
  {
      "name": "大型狂蔓ブリーチャープリムス",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/622d9d846f1b800fa92b4c9c24ece5a7_2741740616267668245.png",
      "type": "Elite",
      "rate": 8.4,
      "mag": 2
  },
  {
      "name": "瓦礫ブリーチャープリムス",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/1317767095153c379837899e6c332db7_6145465936670483682.png",
      "type": "Elite",
      "rate": 2.4,
      "mag": 2
  },
  {
      "name": "大型瓦礫ブリーチャープリムス",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/d94d8c4feac0e0795a26552689d6689c_5976646679275166678.png",
      "type": "Elite",
      "rate": 7.2,
      "mag": 2
  },
  {
      "name": "濁水粉砕の幻霊",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/72fbd17e93004303b15608ce7efc82bb_8090552884629237876.png",
      "type": "Elite",
      "rate": 5,
      "mag": 2
  },
  {
      "name": "濁水噴出の幻霊",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/19/94675339/8da283e7673adc136462e3910db364dd_5137295952416868989.png",
      "type": "Elite",
      "rate": 4,
      "mag": 2
  },
  {
      "name": "氷風組曲",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/17/94675339/377f3a8f5ea5fc082951815af746a2ae_2749286724487014087.png",
      "type": "Boss",
      "rate": 15,
      "mag": 2
  },
  {
      "name": "鉄甲熔炎帝王",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/17/94675339/92cf784732984089c7f5a91f7a42822c_253979639136398371.png",
      "type": "Boss",
      "rate": 12,
      "mag": 2
  },
  {
      "name": "深罪の浸礼者",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/12/132746206/2899a9fa6efec1006150467a00823c4a_7472462630279178950.png",
      "type": "Boss",
      "rate": 10,
      "mag": 2
  },
  {
      "name": "聖骸ツノワニ",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/12/132746206/99a307d9c543af7edbe3619235e526e2_6045427572905607674.png",
      "type": "Elite",
      "rate": 7,
      "mag": 2
  },
  {
      "name": "聖骸牙獣",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/12/132746206/acb74196bfe00408eedd23b1da5b8b20_1121392232078509621.png",
      "type": "Elite",
      "rate": 7,
      "mag": 2
  },
  {
      "name": "ヒルチャールレンジャー・水",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/12/132746206/b4f8e7f2b2567f1bfadb35aeb75ab701_4144497866846653073.png",
      "type": "Elite",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "ヒルチャールレンジャー・風",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/12/132746206/eb2ff17818f8f4420f9033724d997ea1_6140023768640621546.png",
      "type": "Elite",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "アペプのオアシス守護者",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/12/132746206/d6fda0fbccc37d41505ff1fcce5b6e77_1117326160813665377.png",
      "type": "WeeklyBoss",
      "rate": 34,
      "mag": 2
  },
  {
      "name": "アビスの使徒・落霜",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/02/27/132746206/b12b3d4c0195e8cce852ea4681c4d7fe_7774496266464835217.png",
      "type": "Elite",
      "rate": 8,
      "mag": 1
  },
  {
      "name": "黒蛇騎士・砕岩の斧",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/02/27/132746206/a02a8cc0f182ca2f8c6bd6fcb8eed8b6_1399387931649334872.png",
      "type": "Elite",
      "rate": 8,
      "mag": 2
  },
  {
      "name": "聖骸トビヘビ",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/01/18/157426200/d1b0d88f2f2bdb3e9bad3abf570ac911_2509637698172373130.png",
      "type": "Elite",
      "rate": 7,
      "mag": 2
  },
  {
      "name": "聖骸サソリ",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/01/18/157426200/ea2958c04ec8f00a5ec2d9f8dc1410e4_8439252711295412796.png",
      "type": "Elite",
      "rate": 7,
      "mag": 2
  },
  {
      "name": "聖骸赤鷲",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/01/18/157426200/534c13befe626c1aa2853a32def6f1f3_587848108548142581.png",
      "type": "Elite",
      "rate": 7,
      "mag": 2
  },
  {
      "name": "エルマイト旅団・フローラルリングダンサー",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/01/18/157426200/088685fa15801b65f875acec2cbfcfac_1959002225405508106.png",
      "type": "Common",
      "rate": 5,
      "mag": 2
  },
  {
      "name": "エルマイト旅団・サンドロアマスター",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/01/18/157426200/e3ada2f7642f67aa52b067345fae5a54_1685840861621546581.png",
      "type": "Common",
      "rate": 4.4,
      "mag": 2
  },
  {
      "name": "風蝕ウェネト",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/01/18/157426200/ca675a813c0acf7a5efbc88e7af636c2_798642083398178785.png",
      "type": "Boss",
      "rate": 15,
      "mag": 2
  },
  {
      "name": "アビサルヴィシャップの群れ",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/01/05/132746206/33663ed8f0c9f7500679a6bdb21590c6_704480488255970569.png",
      "type": "Boss",
      "rate": 12,
      "mag": 2
  },
  {
      "name": "「正機の神」",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/11/05/103265111/86791657203a69e453d8e217414b3f9e_4585189364498418962.png",
      "type": "WeeklyBoss",
      "rate": 38,
      "mag": 2
  },
  {
      "name": "無相の草",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/11/03/157426200/580b15e255e628d790bf49687894e4fa_3728123335783682244.png",
      "type": "Boss",
      "rate": 7,
      "mag": 1
  },
  {
      "name": "エルマイト旅団・ゲイルハンター",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/19/132746206/1d21ab234a065f179a1a3db8e171c21c_1389409729772533745.png",
      "type": "Common",
      "rate": 4.4,
      "mag": 2
  },
  {
      "name": "エルマイト旅団・ストーンエンチャンター",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/19/132746206/c757c4e26cff0dba6198a837cb900d1d_6476212060043910110.png",
      "type": "Common",
      "rate": 5,
      "mag": 2
  },
  {
      "name": "プカプカ風キノコン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/19/132746206/0b332fc89af26ece5c6402fc82cce5e5_1892933671916925008.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "グルグル炎キノコン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/19/132746206/912e3e8c1b00de91bd7ce8418263f461_2853302902013946615.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "トコトコ岩マッシュロン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/19/132746206/49216ca30200a7432b571186027efd61_1740136089942519386.png",
      "type": "Common",
      "rate": 2.8,
      "mag": 2
  },
  {
      "name": "ボヨヨン雷キノコン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/19/132746206/e7f8daca29f5d7f30844905016252907_4379907050191669564.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "プライマル構造体・探査機",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/19/132746206/60aa5a703106abea12e09b790da7972b_2228995231124406708.png",
      "type": "Elite",
      "rate": 3.4,
      "mag": 2
  },
  {
      "name": "プライマル構造体・再構築",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/18/132746206/60aa5a703106abea12e09b790da7972b_6075440516503137753.png",
      "type": "Elite",
      "rate": 3.4,
      "mag": 2
  },
  {
      "name": "プライマル構造体・重力場発生器",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/18/132746206/60aa5a703106abea12e09b790da7972b_4558996207205975618.png",
      "type": "Elite",
      "rate": 3.4,
      "mag": 2
  },
  {
      "name": "兆載永劫ドレイク",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/01/132746206/5ed960ef01a22660c0e92ab516835435_8256138063367773671.png",
      "type": "Boss",
      "rate": 17,
      "mag": 2
  },
  {
      "name": "半永久統制マトリックス",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/01/132746206/702fe9f038eb1bab144bd63853736da3_2810445897896740802.png",
      "type": "Boss",
      "rate": 16,
      "mag": 2
  },
  {
      "name": "遺跡ドレイク・陸行",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/13/132746206/85fb79a3bb0ffae3055d58dadb9fb11b_6452872454793720694.png",
      "type": "Elite",
      "rate": 7,
      "mag": 2
  },
  {
      "name": "遺跡ドレイク・飛空",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/13/132746206/85fb79a3bb0ffae3055d58dadb9fb11b_2530909788993002195.png",
      "type": "Elite",
      "rate": 5,
      "mag": 2
  },
  {
      "name": "エルマイト旅団・アックス",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/13/132746206/5d42b5c18ef3e3b1df5bc1df2373d51e_3415794407502951301.png",
      "type": "Common",
      "rate": 1.6,
      "mag": 2
  },
  {
      "name": "パタパタ氷マッシュロン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/10/194600931/20b2da81ddb5537e82d80a163f5e9c32_4387803064083011963.png",
      "type": "Common",
      "rate": 2.8,
      "mag": 2
  },
  {
      "name": "パタパタ草マッシュロン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/10/194600931/bfdb3e06fa910a13d550ff3a349c152f_4169390666281515251.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "グルグル雷キノコン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/10/194600931/2e2ac653620f1194c727cc4687c08754_7887468425889554783.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "ボヨヨン岩キノコン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/10/194600931/462c5af38decee9d376993edf73b702e_8398249461587336150.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "ボヨヨン炎キノコン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/10/194600931/890f0c41c5b1773fba0174ab8521b52c_5118333982537456672.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "グルグル氷キノコン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/10/194600931/672c8ee43f7b7b4f281ede0fbc5f926c_6727721858991206958.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "プカプカ草キノコン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/10/194600931/93ab547d2d1f2cf6145fddaf7fe4c32c_102845194533504530.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "トコトコ水マッシュロン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/10/194600931/9e8e5977e203c66d3edc884f03f4bb49_2288467680709066304.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "ボヨヨン風キノコン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/10/194600931/4428023ce42492ef24285eeb0f653c4b_5878136074070602563.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "草フライム",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/10/194600931/fadf14ff797dfdd9a87c3e03f5321fde_3234233090016307899.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "エルマイト旅団・クロスボウ",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/13/132746206/c2bd235637707a0f1905ae8b42207c81_6877520636143354470.png",
      "type": "Common",
      "rate": 1.2,
      "mag": 2
  },
  {
      "name": "エルマイト旅団・デイサンダー",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/13/132746206/5f9a54c0016a9a1c5ba5ad9e78398f10_2189565597555406092.png",
      "type": "Common",
      "rate": 4,
      "mag": 2
  },
  {
      "name": "エルマイト旅団・サンドウォーター",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/13/132746206/a0f86676af484d039ad829c899d1dd35_4916604768655031739.png",
      "type": "Common",
      "rate": 3.6,
      "mag": 2
  },
  {
      "name": "エルマイト旅団・ラインブレイカー",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/13/132746206/2d516994e260d7760f9394cb498e0991_9222459686527362942.png",
      "type": "Common",
      "rate": 1.6,
      "mag": 2
  },
  {
      "name": "エルマイト旅団・ベクドコルバン",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/13/132746206/57a287699b909c11a29fe6b6db610af5_1657125595906755369.png",
      "type": "Common",
      "rate": 1.2,
      "mag": 2
  },
  {
      "name": "エルマイト旅団・サンフロスト",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/13/132746206/2511ef76a6dee1e388fea0826bade579_5164154741748794330.png",
      "type": "Common",
      "rate": 3.6,
      "mag": 2
  },
  {
      "name": "エルマイト旅団・ソードダンサー",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/13/132746206/db927b5ac3dd814a05afe64931529478_4882961743753592785.png",
      "type": "Common",
      "rate": 1.6,
      "mag": 2
  },
  {
      "name": "迅電樹",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/10/194600931/cc5fbd3bdd4a48efb854968a3bfd22e8_2202683339951488498.png",
      "type": "Boss",
      "rate": 7,
      "mag": 1
  },
  {
      "name": "マッシュラプトル",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/10/194600931/2c52519dbc771ad29b2b7228c3ab3a36_5231085096883388913.png",
      "type": "Boss",
      "rate": 14,
      "mag": 2
  },
  {
      "name": "シャドウハスク・守衛",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Shadowy%2520Husk:%2520Defender_icon.png",
      "type": "Elite",
      "rate": 4,
      "mag": 2
  },
  {
      "name": "シャドウハスク・破陣",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Shadowy%2520Husk:%2520Line%2520Breaker_icon.png",
      "type": "Elite",
      "rate": 6,
      "mag": 2
  },
  {
      "name": "シャドウハスク・旗令",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Shadowy%2520Husk:%2520Standard%2520Bearer_icon.png",
      "type": "Elite",
      "rate": 5,
      "mag": 2
  },
  {
      "name": "黒蛇騎士・斬風の剣",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Black%2520Serpent%2520Knight:%2520Windcutter_icon.png",
      "type": "Elite",
      "rate": 7,
      "mag": 2
  },
  {
      "name": "黄金王獣",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Golden%2520Wolflord_icon.png",
      "type": "Boss",
      "rate": 12,
      "mag": 2
  },
  {
      "name": "魔偶剣鬼・霜馳",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Maguu%2520Kenki:%2520Galloping%2520Frost_icon.png",
      "type": "Boss",
      "rate": 20,
      "mag": 1
  },
  {
      "name": "魔偶剣鬼・孤風",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Maguu%2520Kenki:%2520Lone%2520Gale_icon.png",
      "type": "Boss",
      "rate": 20,
      "mag": 1
  },
  {
      "name": "魔偶剣鬼・凶面",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Maguu%2520Kenki:%2520Mask%2520of%2520Terror_icon.png",
      "type": "Boss",
      "rate": 20,
      "mag": 1
  },
  {
      "name": "魔偶剣鬼",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Maguu%2520Kenki_icon.png",
      "type": "Boss",
      "rate": 20,
      "mag": 1
  },
  {
      "name": "風フライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Anemo%2520Specter_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "風スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Anemo%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "ヒルチャールシャーマン・風",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Anemo%2520Samachurl_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "雷フライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Electro%2520Specter_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "雷音権現",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Thunder%2520Manifestation_icon.png",
      "type": "Boss",
      "rate": 14,
      "mag": 2
  },
  {
      "name": "雷蛍",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Electro%2520Cicin_icon.png",
      "type": "Common",
      "rate": 0.5,
      "mag": 1
  },
  {
      "name": "ヒルチャール・雷矢",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Electro%2520Hilichurl%2520Shooter_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "アビスの魔術師・雷",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Electro%2520Abyss%2520Mage_icon.png",
      "type": "Elite",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "ヒルチャール暴徒・雷斧",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Crackling%2520Axe%2520Mitachurl_icon.png",
      "type": "Elite",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "ヒルチャール・雷弾",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Electro%2520Hilichurl%2520Grenadier_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "雷スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Electro%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "ヒルチャールシャーマン・雷",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Electro%2520Samachurl_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "野伏・陣刀番",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Nobushi:%2520Jintouban_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "野伏・火付番",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Nobushi:%2520Hitsukeban_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "野伏・機巧番",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Nobushi:%2520Kikouban_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "遺跡防衛者",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/00b84ec82869522f41b0e6ed5445c69b_2319031160200694653.png",
      "type": "Elite",
      "rate": 4.2,
      "mag": 2
  },
  {
      "name": "遺跡重機",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Ruin%2520Grader_icon.png",
      "type": "Elite",
      "rate": 9,
      "mag": 1
  },
  {
      "name": "遺跡ハンター",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Ruin%2520Hunter_icon.png",
      "type": "Elite",
      "rate": 6,
      "mag": 1
  },
  {
      "name": "遺跡殲滅者",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/a3a41abc04cd4c1c7052f55d16a604fe_8870226645893532565.png",
      "type": "Elite",
      "rate": 3,
      "mag": 2
  },
  {
      "name": "遺跡サーペント",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Ruin%2520Serpent_icon.png",
      "type": "Boss",
      "rate": 16,
      "mag": 2
  },
  {
      "name": "遺跡巡視者",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/01abd95c760086f79bf6cfa333206563_1559056940285617346.png",
      "type": "Elite",
      "rate": 3,
      "mag": 2
  },
  {
      "name": "遺跡守衛",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Ruin%2520Guard_icon.png",
      "type": "Elite",
      "rate": 7,
      "mag": 1
  },
  {
      "name": "遺跡偵察者",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/1da5796e33027fa9de6fc0b86cb08be6_7314691072555798179.png",
      "type": "Elite",
      "rate": 4.2,
      "mag": 2
  },
  {
      "name": "空を裂く魔龍",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Stormterror_icon.png",
      "type": "WeeklyBoss",
      "rate": 9,
      "mag": 1
  },
  {
      "name": "草スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Dendro%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "ヒルチャールシャーマン・草",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Dendro%2520Samachurl_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "若陀龍王",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Azhdaha_icon.png",
      "type": "WeeklyBoss",
      "rate": 36,
      "mag": 1
  },
  {
      "name": "純水精霊",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Oceanid_icon.png",
      "type": "Boss",
      "rate": 14,
      "mag": 1
  },
  {
      "name": "禍津御建鳴神命",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Magatsu%2520Mitake%2520Narukami%2520no%2520Mikoto_icon.png",
      "type": "WeeklyBoss",
      "rate": 40,
      "mag": 2
  },
  {
      "name": "宝盗団・雷の薬剤師",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Treasure%2520Hoarders:%2520Electro%2520Potioneer_icon.png",
      "type": "Common",
      "rate": 1.6,
      "mag": 1
  },
  {
      "name": "宝盗団・粉砕者",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Treasure%2520Hoarders%2520-%2520Crusher_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "宝盗団・弓使い",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Treasure%2520Hoarders%2520-%2520Marksman_icon.png",
      "type": "Common",
      "rate": 1.2,
      "mag": 1
  },
  {
      "name": "宝盗団・炎の薬剤師",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Treasure%2520Hoarders:%2520Pyro%2520Potioneer_icon.png",
      "type": "Common",
      "rate": 1.6,
      "mag": 1
  },
  {
      "name": "宝盗団・海の男児",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Treasure%2520Hoarders%2520-%2520Seaman_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "宝盗団・水の薬剤師",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Treasure%2520Hoarders:%2520Hydro%2520Potioneer_icon.png",
      "type": "Common",
      "rate": 1.6,
      "mag": 1
  },
  {
      "name": "宝盗団・雑夫",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Treasure%2520Hoarders:%2520Handyman_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "宝盗団・斥候",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Treasure%2520Hoarders%2520-%2520Scout_icon.png",
      "type": "Common",
      "rate": 1.2,
      "mag": 1
  },
  {
      "name": "宝盗団・盗掘者",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Treasure%2520Hoarders:%2520Gravedigger_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "宝盗団・拳術家",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Treasure%2520Hoarders%2520-%2520Pugilist_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "宝盗団・氷の薬剤師",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Treasure%2520Hoarders:%2520Cryo%2520Potioneer_icon.png",
      "type": "Common",
      "rate": 1.6,
      "mag": 1
  },
  {
      "name": "トリックフラワー・雷",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Electro%2520Whopperflower_icon.png",
      "type": "Common",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "狂風のコア",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Eye%2520of%2520the%2520Storm_icon.png",
      "type": "Elite",
      "rate": 5,
      "mag": 1
  },
  {
      "name": "爆炎樹",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/2e62c5a258d6ab96f39ec3b00b6f1065_7490051344158295098.png",
      "type": "Boss",
      "rate": 7,
      "mag": 1
  },
  {
      "name": "ヒルチャール・爆弾",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Hilichurl%2520Grenadier_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "トリックフラワー・炎",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Pyro%2520Whopperflower_icon.png",
      "type": "Common",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "炎フライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Pyro%2520Specter_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "ヒルチャール・炎矢",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Pyro%2520Hilichurl%2520Shooter_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "アビスの魔術師・炎",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Pyro%2520Abyss%2520Mage_icon.png",
      "type": "Elite",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "ヒルチャール暴徒・炎斧",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Blazing%2520Axe%2520Mitachurl_icon.png",
      "type": "Elite",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "炎スライム",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/c7fb92fd449e65929287ca9ead3b4bc7_4294743575662101188.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "アビスの詠唱者・紫電",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Abyss%2520Lector:%2520Violet%2520Lightning_icon.png",
      "type": "Elite",
      "rate": 8,
      "mag": 1
  },
  {
      "name": "アビスの詠唱者・淵炎",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Abyss%2520Lector:%2520Fathomless%2520Flames_icon.png",
      "type": "Elite",
      "rate": 8,
      "mag": 1
  },
  {
      "name": "アビスの使徒・激流",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Abyss%2520Herald:%2520Wicked%2520Torrents_icon.png",
      "type": "Elite",
      "rate": 8,
      "mag": 1
  },
  {
      "name": "アビサルヴィシャップの幼体・噛氷",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/03/20/194600931/457671b64a891fac671a499f5189b730_945041577535549914.png",
      "type": "Elite",
      "rate": 4,
      "mag": 2
  },
  {
      "name": "アビサルヴィシャップの幼体・吞雷",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/03/20/194600931/0d09385b9a6ecda945f2a5a7e83d2edb_2186592269551657285.png",
      "type": "Elite",
      "rate": 4,
      "mag": 2
  },
  {
      "name": "アビサルヴィシャップの幼体・原種",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/03/20/194600931/e82083e9a30f68ba8680d8171c124d2b_5991304723441771090.png",
      "type": "Elite",
      "rate": 4,
      "mag": 2
  },
  {
      "name": "アビサルヴィシャップ・噛氷",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Rimebiter%2520Bathysmal%2520Vishap_icon.png",
      "type": "Boss",
      "rate": 4,
      "mag": 2
  },
  {
      "name": "アビサルヴィシャップ・吞雷",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Bolteater%2520Bathysmal%2520Vishap_icon.png",
      "type": "Boss",
      "rate": 4,
      "mag": 2
  },
  {
      "name": "アビサルヴィシャップ・原種",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Primordial%2520Bathysmal%2520Vishap_icon.png",
      "type": "Elite",
      "rate": 8,
      "mag": 2
  },
  {
      "name": "海乱鬼・雷騰",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Kairagi:%2520Dancing%2520Thunder_icon.png",
      "type": "Common",
      "rate": 7.6,
      "mag": 2
  },
  {
      "name": "海乱鬼・炎威",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Kairagi:%2520Fiery%2520Might_icon.png",
      "type": "Common",
      "rate": 4.8,
      "mag": 2
  },
  {
      "name": "プカプカ水キノコン",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Floating%2520Hydro%2520Fungus_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "水フライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Hydro%2520Specter_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "水蛍",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Hydro%2520Cicin_icon.png",
      "type": "Common",
      "rate": 0.5,
      "mag": 1
  },
  {
      "name": "アビスの魔術師・水",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Hydro%2520Abyss%2520Mage_icon.png",
      "type": "Elite",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "水スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Hydro%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "ヒルチャールシャーマン・水",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Hydro%2520Samachurl_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "ヒルチャール暴徒・木盾",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Wooden%2520Shieldwall%2520Mitachurl_icon.png",
      "type": "Elite",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "ヒルチャール・木盾",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Wooden%2520Shield%2520Hilichurl%2520Guard_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "無相の風",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Anemo%2520Hypostasis_icon.png",
      "type": "Boss",
      "rate": 7,
      "mag": 1
  },
  {
      "name": "無相の雷",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Electro%2520Hypostasis_icon.png",
      "type": "Boss",
      "rate": 7,
      "mag": 1
  },
  {
      "name": "無相の炎",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Pyro%2520Hypostasis_icon.png",
      "type": "Boss",
      "rate": 7,
      "mag": 1
  },
  {
      "name": "無相の水",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Hydro%2520Hypostasis_icon.png",
      "type": "Boss",
      "rate": 9,
      "mag": 1
  },
  {
      "name": "無相の岩",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Geo%2520Hypostasis_icon.png",
      "type": "Boss",
      "rate": 7,
      "mag": 1
  },
  {
      "name": "無相の氷",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Cryo%2520Hypostasis_icon.png",
      "type": "Boss",
      "rate": 7,
      "mag": 1
  },
  {
      "name": "ヒルチャール・戦士",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Hilichurl%2520Fighter_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "ファデュイ先遣隊・前鋒軍・風拳",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Fatui%2520Skirmisher%2520-%2520Anemoboxer%2520Vanguard_icon.png",
      "type": "Common",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "ファデュイ先遣隊・前鋒軍・雷ハンマー",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Fatui%2520Skirmisher%2520-%2520Electrohammer%2520Vanguard_icon.png",
      "type": "Common",
      "rate": 4,
      "mag": 1
  },
  {
      "name": "ファデュイ先遣隊・遊撃兵・炎銃",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Fatui%2520Skirmisher%2520-%2520Pyroslinger%2520Bracer_icon.png",
      "type": "Common",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "ファデュイ先遣隊・重衛士・水銃",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/5f1540ea08f51cdf0a609a1931003a29_835835721503851084.png",
      "type": "Common",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "ファデュイ先遣隊・遊撃兵・岩使い",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Fatui%2520Skirmisher%2520-%2520Geochanter%2520Bracer_icon.png",
      "type": "Common",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "ファデュイ先遣隊・重衛士・氷銃",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/13db2cb46c110ffd21f8397cf4bdc864_1244882992233952090.png",
      "type": "Common",
      "rate": 4,
      "mag": 1
  },
  {
      "name": "ファデュイ・雷蛍術師",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Fatui%2520Electro%2520Cicin%2520Mage_icon.png",
      "type": "Elite",
      "rate": 5,
      "mag": 1
  },
  {
      "name": "ファデュイ・ミラーメイデン",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Mirror%2520Maiden_icon.png",
      "type": "Elite",
      "rate": 6,
      "mag": 2
  },
  {
      "name": "ファデュイ・デットエージェント・炎",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Fatui%2520Pyro%2520Agent_icon.png",
      "type": "Elite",
      "rate": 5,
      "mag": 1
  },
  {
      "name": "ファデュイ・氷蛍術師",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/810e7c1e11af1d9f6f558d4553ed28af_4168965878846093921.png",
      "type": "Elite",
      "rate": 5,
      "mag": 1
  },
  {
      "name": "恒常からくり陣形",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Perpetual%2520Mechanical%2520Array_icon.png",
      "type": "Boss",
      "rate": 16,
      "mag": 2
  },
  {
      "name": "急凍樹",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Cryo%2520Regisvine_icon.png",
      "type": "Boss",
      "rate": 7,
      "mag": 1
  },
  {
      "name": "ベビーヴィシャップ・岩",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Geovishap%2520Hatchling_icon.png",
      "type": "Elite",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "ヴィシャップ・岩",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/4057b3c7d0c3635678abdd4109091f62_8948109343736993617.png",
      "type": "Elite",
      "rate": 8,
      "mag": 1
  },
  {
      "name": "岩フライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Geo%2520Specter_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "ヒルチャール暴徒・岩盾",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Rock%2520Shieldwall%2520Mitachurl_icon.png",
      "type": "Elite",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "ヒルチャール・岩盾",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Rock%2520Shield%2520Hilichurl%2520Guard_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "岩スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Geo%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "ヒルチャールシャーマン・岩",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Geo%2520Samachurl_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "ヒルチャール・射手",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Hilichurl%2520Shooter_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "変わったヒルチャール",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Unusual%2520Hilichurl_icon.png",
      "type": "Other",
      "rate": 1.6,
      "mag": 1
  },
  {
      "name": "大型風スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Large%2520Anemo%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "大型雷スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Large%2520Electro%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "大型草スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Large%2520Dendro%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "大型炎スライム",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/629ff248133db49d140e9bec1f3a5bb9_3124437013211604733.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "大型水スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Large%2520Hydro%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "大型岩スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Large%2520Geo%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "大型氷スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Large%2520Cryo%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "獣域ハウンド・雷",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/f98aad8ddb6a41ae54eb9b81c63f58da_8280051482592802504.png",
      "type": "Elite",
      "rate": 7,
      "mag": 2
  },
  {
      "name": "獣域ウェルプ・雷",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/67780178640303aeddfb6c453289fd3c_3676904845161485140.png",
      "type": "Elite",
      "rate": 2.4,
      "mag": 2
  },
  {
      "name": "獣域ハウンド・岩",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/4aa76a4d0124859749da800aa330f431_1577466395467772296.png",
      "type": "Elite",
      "rate": 7,
      "mag": 2
  },
  {
      "name": "獣域ウェルプ・岩",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/c0ad724314e188debb702e9ee2dde852_4848827079007512651.png",
      "type": "Elite",
      "rate": 2.4,
      "mag": 2
  },
  {
      "name": "エンシェントヴィシャップ・岩",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Primo%2520Geovishap_icon.png",
      "type": "Boss",
      "rate": 30,
      "mag": 1
  },
  {
      "name": "変異雷スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Mutant%2520Electro%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "北風の王狼、奔狼の領主",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Lupus%2520Boreas,%2520Dominator%2520of%2520Wolves_icon.png",
      "type": "WeeklyBoss",
      "rate": 18,
      "mag": 1
  },
  {
      "name": "ヒルチャール・突進",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Hilichurl%2520Berserker_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "氷フライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Cryo%2520Specter_icon.png",
      "type": "Common",
      "rate": 2,
      "mag": 2
  },
  {
      "name": "トリックフラワー・氷",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Cryo%2520Whopperflower_icon.png",
      "type": "Common",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "氷蛍",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/0d6c82ab76e23c8fe29cd0524d57bfe8_7042294487130050930.png",
      "type": "Common",
      "rate": 0.5,
      "mag": 1
  },
  {
      "name": "ヒルチャール・氷矢",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Cryo%2520Hilichurl%2520Shooter_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "ヒルチャール暴徒・氷盾",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Ice%2520Shieldwall%2520Mitachurl_icon.png",
      "type": "Elite",
      "rate": 3,
      "mag": 1
  },
  {
      "name": "ヒルチャール・氷盾",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Ice%2520Shield%2520Hilichurl%2520Guard_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "アビスの魔術師・氷",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Cryo%2520Abyss%2520Mage_icon.png",
      "type": "Elite",
      "rate": 2,
      "mag": 1
  },
  {
      "name": "ヒルチャール・氷弾",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Cryo%2520Hilichurl%2520Grenadier_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "氷スライム",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Cryo%2520Slime_icon.png",
      "type": "Common",
      "rate": 0.8,
      "mag": 1
  },
  {
      "name": "ヒルチャールシャーマン・氷",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Cryo%2520Samachurl_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "ヒルチャール・霜鎧の王",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/a9d0ba2233b2744eb97cb16fb68e8210_5889712152981482001.png",
      "type": "Elite",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "ヒルチャール・雷兜の王",
      "path": "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/21/132746206/c0b9fccb976922890793a88cefa44525_4478418637550120506.png",
      "type": "Elite",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "ヒルチャール・岩兜の王",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Stonehide%2520Lawachurl_icon.png",
      "type": "Elite",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "ヒルチャール",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Hilichurl_icon.png",
      "type": "Common",
      "rate": 1,
      "mag": 1
  },
  {
      "name": "「淑女」",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/La%2520Signora_icon.png",
      "type": "WeeklyBoss",
      "rate": 30,
      "mag": 2
  },
  {
      "name": "「公子」",
      "path": "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/enemy/Childe_icon.png",
      "type": "WeeklyBoss",
      "rate": 22,
      "mag": 1
  }
]

const LEVEL_MULTIPLIER = [
  [5.367859, 5.404888],
  [6.818905, 6.867565],
  [8.421231, 8.483289],
  [10.17484, 10.252208],
  [12.07987, 12.174544],
  [14.13796, 14.251988],
  [16.34828, 16.483805],
  [17.50736, 17.65636],
  [19.26782, 19.436102],
  [21.09865, 21.287472],
  [24.06383, 24.350191],
  [27.14657, 27.538502],
  [30.34872, 30.854609],
  [33.90172, 34.542477],
  [37.58709, 38.37272],
  [41.4068, 42.347908],
  [46.00103, 47.130226],
  [50.05359, 51.37316],
  [54.18154, 57.933083],
  [65.1649, 62.656433],
  [68.61109, 67.4997],
  [72.10564, 72.46275],
  [75.35814, 77.45362],
  [79.78938, 82.53305],
  [84.30028, 87.70267],
  [88.9361, 92.40437],
  [93.66512, 97.388695],
  [98.48837, 102.556755],
  [103.4069, 109.56383],
  [108.4217, 116.679184],
  [114.4719, 123.90555],
  [120.6543, 131.39304],
  [125.744, 139.20303],
  [148.7045, 147.34232],
  [153.7546, 156.63199],
  [158.886, 166.4199],
  [165.88, 176.60277],
  [173.5809, 187.12581],
  [181.4102, 198.11426],
  [198.3841, 209.49992],
  [207.9781, 221.35829],
  [217.7367, 234.31367],
  [227.0249, 248.21857],
  [236.4653, 263.0379],
  [264.514, 281.4478],
  [273.7571, 300.1646],
  [289.6475, 319.93707],
  [305.8628, 340.79654],
  [322.4075, 362.84512],
  [367.8213, 386.00797],
  [384.5919, 405.81985],
  [401.5548, 426.7509],
  [418.7124, 448.33606],
  [436.0667, 470.60852],
  [452.5111, 500.87494],
  [466.241, 529.12994],
  [483.8348, 558.18567],
  [503.1843, 588.0836],
  [522.7799, 619.623],
  [616.9946, 652.1601],
  [637.3271, 685.4282],
  [659.6903, 725.286],
  [682.2833, 766.45514],
  [711.7287, 808.56494],
  [734.9008, 857.3944],
  [753.9569, 899.7023],
  [829.3079, 943.45435],
  [855.3966, 987.4856],
  [879.7074, 1032.8478],
  [960.8343, 1078.629],
  [987.2563, 1125.0859],
  [1016.308, 1176.6754],
  [1037.415, 1225.4973],
  [1067.75, 1276.6016],
  [1098.412, 1349.6738],
  [1123.775, 1419.612],
  [1153.119, 1492.4435],
  [1182.76, 1566.4338],
  [1210.233, 1645.9409],
  [1366.735, 1740.0337],
  [1394.867, 1832.4424],
  [1423.247, 1926.5065],
  [1440.909, 2018.1666],
  [1485.468, 2109.6982],
  [1503.56, 2223.0679],
  [1532.91, 2317.169],
  [1563.946, 2412.8042],
  [1598.809, 2510.078],
  [1634.08, 2613.8433],
  [1792.851, 2731.1755],
  [1835.423, 2831.9614],
  [1882.428, 2934.1345],
  [1930.047, 3063.6953],
  [1996.661, 3191.605],
  [2042.759, 3344.277],
  [2055.588, 3495.401],
  [2069.809, 3644.6707],
  [2256.937, 3791.2686],
  [2272.524, 3934.9932],
  [2706.502, 4082.7458]
]

const HILICHURL_BASE_HP = 13.584;

ENEMY_DATA.sort((a, b) => a["name"] > b["name"]? 1 : -1);
ENEMY_DATA.map((v, i) => v["serial"] = i);

const selectedEnemyArray = [];
const setting = {
  "dpsReferenceTime": 90,
  "buff": 1,
}

window.addEventListener("load", () => {
  setEnemyTable();
  updateSelectedEnemy();
})

const enemyFilterInput = document.getElementById("enemyFilterInput");
const enemyTableContent = document.getElementById("enemyTableContent");
const selectedEnemyFrame = document.getElementById("selectedEnemyFrame");
const dpsReferenceTime = document.getElementById("dpsReferenceTime");
const abyssBuffCheckbox = document.getElementById("abyssBuffCheckbox");
const abyssBuffSelector = document.getElementById("abyssBuffSelector");
const multiplayerBuffCheckbox = document.getElementById("multiplayerBuffCheckbox");
const multiplayerBuffSelector = document.getElementById("multiplayerBuffSelector");
const totalHP = document.getElementById("totalHP");
const needDPS = document.getElementById("needDPS");

const operateNumber = (index, type, min, max) => {
  const target = event.target;
  const current = Number(target.textContent);
  target.textContent  = "";

  const input = document.createElement("input");
  input.type = "number";
  input.name = "operateInput"
  input.className = "operate-input";
  input.value = current;
  input.dataset.info = `${index},${type},${min},${max}`;
  
  input.addEventListener("keydown", updateNumber);
  input.addEventListener("blur", updateNumber);

  target.appendChild(input);
  input.select();
}

const updateNumber = () => {
  if(event.key == undefined || event.key == "Enter") {
    const input = event.target;
    const info = input.dataset.info.split(",");
    const [index, type, min, max] = [Number(info[0]), info[1], Number(info[2]), Number(info[3])];

    const number = (input.value < min) ? min : ((input.value > max) ? max : input.value);
    selectedEnemyArray[index][type] = Number(number);
    
    updateSelectedEnemy();
  }
}

const setEnemyTable = () => {
  const ratio = document.getElementsByName("enemyTypeRatios");
  const type = ["Common", "Elite", "Boss", "WeeklyBoss", "Other"][[...ratio].map(v => v.checked).indexOf(true)];
  
  enemyTableContent.textContent = "";
  for(let i=0; i<ENEMY_DATA.length; i++) {
    if(ENEMY_DATA[i]["type"] !== type) continue;
    const html = [
      `<div class="enemy-item">`,
      `  <div class="enemy-image" style="background-image: url('${ENEMY_DATA[i]["path"]}');"></div>`,
      `  <div class="enemy-name">${ENEMY_DATA[i]["name"]}</div>`,
      `  <div class="enemy-level">`,
      `    <div class="enemy-level-option" onclick="selectEnemy(${ENEMY_DATA[i]["serial"]}, 93)">93</div>`,
      `    <div class="enemy-level-option" onclick="selectEnemy(${ENEMY_DATA[i]["serial"]}, 95)">95</div>`,
      `    <div class="enemy-level-option" onclick="selectEnemy(${ENEMY_DATA[i]["serial"]}, 98)">98</div>`,
      `    <div class="enemy-level-option" onclick="selectEnemy(${ENEMY_DATA[i]["serial"]}, 100)">100</div>`,
      `    <div class="enemy-level-option" onclick="selectEnemy(${ENEMY_DATA[i]["serial"]})">Any</div>`,
      `  </div>`,
      `</div>`,
    ].join("");
    enemyTableContent.insertAdjacentHTML("beforeend", html);
  }

  enemyTableContent.parentElement.scroll({top: 0, behavior: "auto"});
  filteringEnemyTable();
}

enemyFilterInput.addEventListener("focus", () => {
  enemyFilterInput.select();
})

const filteringEnemyTable = () => {
  const word = enemyFilterInput.value;
  const items = enemyTableContent.children;
  for(let i=0; i<items.length; i++) {
    if(items[i].getElementsByClassName("enemy-name")[0].textContent.indexOf(word) != -1) {
      items[i].classList.remove("hide");
    }
    else items[i].classList.add("hide");
  }
}

const calcHP = (item, level) => {
  return Math.round(HILICHURL_BASE_HP * item["rate"] * LEVEL_MULTIPLIER[level-1][item["mag"]-1] * setting["buff"]);
}

const updateSelectedEnemy = () => {
  selectedEnemyFrame.textContent = "";
  for(let i=0; i<selectedEnemyArray.length; i++) {
    const [item, level, number] = [selectedEnemyArray[i]["item"], selectedEnemyArray[i]["level"], selectedEnemyArray[i]["number"]];
    const hp = calcHP(item, level);
    const html = [
      `<div class="selected-enemy-item" title="${item["name"]}">`,
      `  <div class="selected-enemy-image" style="background-image: url('${item["path"]}');" onclick="removeSelectedEnemy(${i})"></div>`,
      `  <div class="selected-enemy-setting">`,
      `    <div class="selected-enemy-level" onclick="operateNumber(${i}, 'level', 1, 100)">${level}</div>`,
      `    <div class="number-of-enemies" onclick="operateNumber(${i}, 'number', 1, 100)">${number}</div>`,
      `  </div>`,
      `  <div class="selected-enemy-hp">${hp} × ${number}</div>`,
      `</div>`
    ].join("");
    selectedEnemyFrame.insertAdjacentHTML("beforeend", html);
  }

  const hp = selectedEnemyArray.reduce((sum, v) => sum + calcHP(v["item"], v["level"]) * v["number"], 0);
  totalHP.textContent = hp.toLocaleString();
  needDPS.textContent = Math.round(hp / setting["dpsReferenceTime"]).toLocaleString();
}

const selectEnemy = (serial, lv=null) => {
  const tmpLv = (lv == null) ? Number(prompt("レベルを入力してください (1 - 100)")) : Number(lv);
  const level = (tmpLv < 1) ? 1 : ((tmpLv > 100) ? 100 : tmpLv)
  
  if(level == NaN) return 0;

  for(let i=0; i<selectedEnemyArray.length; i++) {
    if(selectedEnemyArray[i]["item"]["serial"] == serial && selectedEnemyArray[i]["level"] == lv) {
      selectedEnemyArray[i]["number"]++;
      updateSelectedEnemy();
      return 0;
    }
  }

  const item = ENEMY_DATA.filter(v => v["serial"] == serial)[0];

  const enemy = {
    "item": item,
    "level": level,
    "number": 1
  }
  selectedEnemyArray.push(enemy);
  updateSelectedEnemy();
}

const removeSelectedEnemy = (index) => {
  selectedEnemyArray.splice(index, 1);
  updateSelectedEnemy();
}

const allResetSelectedEnemy = () => {
  selectedEnemyArray.splice(0);
  updateSelectedEnemy();
}

const updateBuff = () => {
  setting["dpsReferenceTime"] = Number(dpsReferenceTime.value);
  setting["buff"] = 1;
  setting["buff"] = setting["buff"] * (abyssBuffCheckbox.checked ? Number(abyssBuffSelector.value) : 1);
  setting["buff"] = setting["buff"] * (multiplayerBuffCheckbox.checked ? Number(multiplayerBuffSelector.value) : 1);
  
  updateSelectedEnemy();
}
