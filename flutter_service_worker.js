'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "10ec8d387096bb798ea877e976facf2d",
"favicon.ico": "1d6cee012affce1ad1f3be84c5b853f7",
"index.html": "795bbcb626f8cef05600448b9ea20c2e",
"/": "795bbcb626f8cef05600448b9ea20c2e",
"main.dart.js": "1347f4c53128e181a9902cb9a1f1e979",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon.ico": "1d6cee012affce1ad1f3be84c5b853f7",
"icons/Icon-192.png": "7ef827956e3f5ec1391a6c96eb4aa999",
"icons/icon-192-maskable.png": "f9329df82adf2a51be7bbcf04e975db2",
"icons/icon-512-maskable.png": "90cec78afa610a774846e2b7f92c34d9",
"icons/Icon-512.png": "e21c26e95d1245298419c96f6e1f8b11",
"manifest.json": "498f5853098e61b3b3a63fe5d701e1c6",
".git/ORIG_HEAD": "6f2097550b5a490dea8c41fd2c8b54ec",
".git/config": "3a403b05972b3992aa403e43d10c00f0",
".git/objects/0d/4344c426f24757e2b79eb6e2dfefea74e90311": "5fbb1296b72b578e3998038deeb548c5",
".git/objects/0d/146a7d635ccddf6203a33694c1a77d712a02f7": "33b8d98485f307460608a5346ccefe60",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/2f551cd335a578ee92a72c798a4c3e7bc6f17a": "c694310c6fca205ffbdccb017f9b5b40",
".git/objects/57/4ab5aaab18f9a6e850a6429a3609b8c7e9dbc8": "9d0c54532fcf77cb03f139af7eee72f8",
".git/objects/57/c7ac5687295d663c67b0c7656a6346201cce1b": "ecd2d38a4fe191c2cb5f296c913bc4de",
".git/objects/3b/03d8080ee7f912b1163370d00280bde9fd1972": "344aff69d11192b1ba731e6f2f9265e2",
".git/objects/9e/c5c8d57a1471e245a9f91ae0acef468e09df93": "bf287fd96117a0e0a762fc44027b071a",
".git/objects/9e/c7507610f0f928346d3824af89dbbce713a3e3": "ba8cdd7e75f12c3e4e6d0b11c9829e8c",
".git/objects/6a/de4ecc99c985ff2aff1f9aa8cfecd6ccfe75fe": "da8319fc0c84e5fad97f573cfd83b05e",
".git/objects/35/781c0b7bb87671bedf8de5f4c532e771d5f071": "68fdff750256c440a0a00069b4d68da4",
".git/objects/56/4b75a9e7cf474ff85a3b04ddb3f1bb2e133f58": "90320b4b9ff73e379686e197f4fe03c6",
".git/objects/58/b6c0f5147bc3219283abf093648651779fea44": "fd26c5ca82d25bf84855fe2ecc3d20f8",
".git/objects/67/89d882f7ff7fd3cdf1844c67a3a2c739650caf": "1ed05a688265f0e7c9bcbfb8ec5717fd",
".git/objects/94/b117abe9bde0835089f452d5fb3e6ef362a18e": "9cf65e9ec47d131442f312af72daeb56",
".git/objects/0e/220bd2d6ec71063654dc29be714aa8269094ba": "cad71e585aeee8dc21032dfe6abb315c",
".git/objects/34/e0a3d24e4a2b2ae10c2612f7e8bc1921d847e0": "855ee2db28b989ab8db8cfa0d1df9903",
".git/objects/5a/21d5580d53d9235feed752f018b8f675a8cbc4": "619c45cde4a7f5b5046fb6cd6eb46815",
".git/objects/b2/6db082be5a5e0ba8b76772473e1e2eca7c2b94": "9e9e1255b800cea86ec79b44f4b54ede",
".git/objects/d9/1134773bde1214eb22f5de9a5fa9596c02c846": "3332418f58201fa7c1799c932ed0ac35",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/da/d5deb53ca926c6b13863009e85da22a7d2b513": "ec7403d4af64064618a627f41dbe6fb3",
".git/objects/b4/7296b6e30291cfc55ccf3192a2273f7841b230": "af79a44f67df272aa4e1e9a6f4f41a9f",
".git/objects/a5/d27150b56bb31973d720bcbb010d1857d47c0f": "2be02af38b8f54b7761266ecd7e67a3d",
".git/objects/bd/511b5c9df20e32be04b7d2aad76e41d7d01cb5": "41c181c6e8674bee86b854e3824632ab",
".git/objects/d1/316468fc192b84a69ccae1da14fa28e5e8e399": "e94e8b0be3935eea66e44c32c4fc0780",
".git/objects/ae/2506f8686492d9393ea3d48e8b882918217bf6": "fee5608a4334cb7cda9a21d2f5dfc542",
".git/objects/d8/bee24fa88b056dcb0168031e375ba4dd11f31c": "2f2f952b0a62f48823004eb5da8f92af",
".git/objects/e5/ecf9dffd942ec1a67e80ab09fea4dd70ce75b4": "1a61b874e98d5853b3a166bee5e4e511",
".git/objects/f4/b4c2110abf628ee111c10046df66a801267f47": "a505859cb71d3418063dbdca206ad600",
".git/objects/c0/eb3e2a328bcf1b1c6b39bbc67a493d2fbd37fb": "099c40ffb32e6b6dc1c74cae08a7e1d4",
".git/objects/ee/62a4022b9951e07ceb048029238e2b79b0752e": "229951aca422d18556a11e53a70cae11",
".git/objects/fc/e0a88bff3d5845479094b44b24ba45585a4a6d": "03ec2dcda420a2d1ec312313cb3f193b",
".git/objects/fc/006f991cf77fb4a22b43d50816e7858109590d": "75ae72513bd0badcd40785738dcc3e7c",
".git/objects/e3/f3e645dea7af32a5a0f5c9446af3f26eef0133": "295006c57b867014f3af301781442513",
".git/objects/e4/7dd289dedd2b5b1afe0c3364b737611b4d5c24": "17a0c13ffd6df18d1608eca113e7f3fc",
".git/objects/fe/2058f7424b238cb47a86387aab2716eb893404": "7c81c51f4d593a0f7ad69b1dbaa6aa48",
".git/objects/c8/cf58849c9afc39357ead6e91b424345f193965": "99bf23ea4f0ec57808586b0476cde0d5",
".git/objects/fb/32176f49138dd66906e79e8b95a2c94ae03c27": "cd42a842ab5f6e60fca581f5b4d995f6",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/1a59fadde66566809ecf7ef9ff6aeb72ef9b82": "162eb5cee7cb46a93d9dc6f894ee83d1",
".git/objects/11/171945eccd5db1ffb8414b860d347c0c68eeaf": "93868c69b297bfbde6e37f155d9702e6",
".git/objects/7d/c4569c069df34d9ff51a009bd6389b13710c37": "3fe4b2d5ec7a0f521d3696c8081342e4",
".git/objects/16/e05860499fb571beedb72ced9ba4afe3fbe372": "7ce63d30bd3d022c615eaf815ba40801",
".git/objects/42/79c5603e320a663b5f8ddabda568b1db9246f1": "5f94f9e360c43c0073c99ec328207ee8",
".git/objects/42/5ffaba101534af7d6a140dc7e9c39891b3cff2": "c574ced3adeb54f52ed464bda248917e",
".git/objects/1a/462f3a048c96998cb862353eb25048cb55f83d": "7af6cc3025d4f74b6327291f6dc83e76",
".git/objects/17/06743959d70068f71aba73f4a3d7f295f3da16": "4487499af8b8dc1db98bb27cff5b694d",
".git/objects/7b/180fa5b0360869455875e8ff218eb7594bc44d": "734260a6f07c60fec614d0a93bb48f87",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/8c007537c47dabdfb3affe7fc7b98a67cf5214": "1653219c55eeae8235333eede5d3a88e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/305f5142d82ce8c848bdd29e9eb23f9d3e7cbf": "e0cfd33cbd1105b8414283f5360c8bb4",
".git/objects/96/a111fa05d97f61cc273ed1191afb7781487cd1": "f1c38bec7c59709210b854246fa82bc4",
".git/objects/54/662330e096759cfa28f3c728f42502e98dcc48": "1d037954d7ba7cc3f8783cc3ccfcbe6d",
".git/objects/30/cb62bd2847e8d4c663ea17d58af0c2b463f6ee": "5a38392c551ba0fe7b06a424ca325280",
".git/objects/5b/050eb3b58203734b1d351e396b5e6886f0a4df": "56c2248ef342dd0d01e24a365b6a7c26",
".git/objects/37/d4109173bed81b9119b50490f078226abb1797": "d973051d939f58068580ec6932f6ed44",
".git/objects/08/4766d55a11039c3f32ddbef9d5d531d424f952": "f8ef2a0066c734a24e2c7f72fa082cac",
".git/objects/08/1b369515535aac336ba724930c96861de68a4b": "d41564067dda283516dfc23c6de68715",
".git/objects/01/c363bf41081fd227ab546dd442b58f1a76f140": "6677f6e75ec9b3439014952da611fbcb",
".git/objects/06/1215d4d5e999bf6b8a1e6e57e4907b9446a35b": "a7fa42363a5f5edba0e8068c28baf19f",
".git/objects/6c/7a8b2964d3ad8fcf9f5e199c274c8b47c62f7f": "ba3831556ac5d10ae9d2b3af86dcfbac",
".git/objects/39/1c0747d051f6dfe53ce9592f9c03e246ae621b": "1fbe65cf830dff27ff61c17bf03bdf17",
".git/objects/99/e03cae0833ec1d19ab264d894463cfbacbb443": "040d7fc5a351540dd1610143de45ca37",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/64/13cb06224fb57f9b0fa4e288a185afa025f011": "298f8914e3b83837813eae5637827f43",
".git/objects/d3/4c2d643add9098cec7d0eb16bc4eb81711901b": "6758b63a0e5867601a2f8c725d662323",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/a7/264c06ada505f56295b1ac5d3411d7fc8c1d84": "f4ab7260275377dff029aa784b42460a",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d2/8d10108e5152c6221687e443567225cfd057b3": "cd954062e2e1db63a10cc9cd5788dba4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/03446d34224db6a69f09d23738197ee0787e58": "01fb579ebd2d4706c244a0602a6cce60",
".git/objects/db/05b329a2434e6717c809a12aa3d411bc8693aa": "0241822ba20b91dafd96d4769e7b695d",
".git/objects/a8/3ae07d14a71a973368eb338098b01d2513eb83": "79359d421ee0e7f0e68c4de0a63ef07f",
".git/objects/c3/e9627f99cd7153b66be6a774d006bf79d2663a": "2f734a617c36fd037b296bee07a6495a",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e1/bc29de124cbd5ee0b7e1e9044e5ecd0bc72bff": "ccfa3d6a490657ff01c3c76cd69f5780",
".git/objects/e1/c74d894a28eac858714bff774c71ed3baa7b04": "f7eef23fadd4f6afb79c8468e24cf206",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/f0/1f7db613f3ab914eaff38826eb7b026a4b3be6": "224e6e3633d38721a17a6e8228a9333c",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/2c/dafb14fed2102791828cb93526542263c3c372": "8b472c1850f3c80cf17e6609ea87de2a",
".git/objects/2c/97c14212218d30ba2f1cc720bd11561ae7ea0f": "5ec13686c1074ad9fbf98099541d99e3",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/d7d8410a303b5a41b95d78a2c6c1c067d877d8": "1b09c4220f06257183a0e0145cc264d0",
".git/objects/41/cb144300ed187cd5e3a6b4db23fefa7c13ffbe": "47b9741abed3b5456b1ea08bc25e8bb3",
".git/objects/83/e669633e971ac776c22f5810da5c3bfddc496a": "802ceb35f4a69ec8e55aca8a788a5207",
".git/objects/84/816566f33707242eb061fafcdeb06f2a980e98": "93cd48311378b375d42f7688ae3f5cf8",
".git/objects/24/04385908b6ec3c0920f582f376e8dc07a70fd6": "ad70de7660d62ac41a87ba0ef9fbe5bb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/15/282fabbcf4dde6d3c3009308798a95ebdbaa3e": "7f29d5a6308771b52d7c52d778ff3255",
".git/objects/8c/b0e9c7108a5dfd59070b1e63db5e9a38f7f255": "b8944b601b1af1b2d43cc6a160a59827",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/2e/ae858c11a030d7296ecf066bf7e93278d49869": "e66fb756821ef289652a4c457327c9f1",
".git/objects/13/6395fdf724120ce8620bc324ca5bfc04ec28c6": "11e09446811d059c64e0981f5711b2e0",
".git/objects/13/132c9dbb84ad05a12881ccb3b491e3dae5ea45": "1039c212578ecf10b5fb428edf53a96c",
".git/objects/7a/a42a64b00c8d747629232c4943bbfebe8b32ad": "9d6e0082464079e72db445c170314afc",
".git/objects/22/6c7e4434f35693af5a9c04504a972a0354ae61": "5d0a6b5c502649a3ba38e3661985e15f",
".git/objects/25/c50ed9918b63ea2dfbb0634031caeb3a5e045d": "44e380a58af77125643b60767eac3ae1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4de5bc0002493312d14175ddb27063da",
".git/logs/refs/heads/master": "414a966c10a196962def5ce04d42e1f8",
".git/logs/refs/heads/main": "81d79b1f6e896c8578501881f1f3a49d",
".git/logs/refs/remotes/origin/master": "11b5fff76ec5ad1b6dfa3adc1225ac7f",
".git/logs/refs/remotes/origin/main": "43b60b9d0f77be1adef6b80d62fed644",
".git/logs/refs/stash": "c0a4bf00f68160a2a13d339208e452a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "6f2097550b5a490dea8c41fd2c8b54ec",
".git/refs/heads/main": "ef178c436269ce683037eee4883bf70b",
".git/refs/remotes/origin/master": "6f2097550b5a490dea8c41fd2c8b54ec",
".git/refs/remotes/origin/main": "ef178c436269ce683037eee4883bf70b",
".git/refs/stash": "8b92b5808b1682a00916ab425894ee8e",
".git/index": "4a65c8016b5bae392ce0d061c96599c9",
".git/COMMIT_EDITMSG": "bc5d0c382d8e332fab10e555b652b811",
".git/FETCH_HEAD": "4064568db62d7c911459eddeef15ac25",
"assets/AssetManifest.json": "20aead5e509724996110e1d2b85b950c",
"assets/NOTICES": "58caef53080da15bc6d2b03da4375c41",
"assets/FontManifest.json": "cf3c681641169319e61b61bd0277378f",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/khalti_flutter/assets/payment/connect-ips.svg": "d6dec4787c7233dc7f5862f588355dfd",
"assets/packages/khalti_flutter/assets/payment/ebanking.svg": "f3194c2c543b2dc3211ad66d7b38776f",
"assets/packages/khalti_flutter/assets/payment/wallet.svg": "334172609f45671f3a6fc8494f5359de",
"assets/packages/khalti_flutter/assets/payment/mobilebanking.svg": "d330bd6fa7f5c1445121042b85a86b50",
"assets/packages/khalti_flutter/assets/payment/sct.svg": "391f0a569f6021ba08b2bace6067538d",
"assets/packages/khalti_flutter/assets/dialog/info.svg": "c10fa621ec57b2cec6e0b15d35f0ba69",
"assets/packages/khalti_flutter/assets/dialog/success.svg": "49566d38a0c225e95241c025b87d962c",
"assets/packages/khalti_flutter/assets/dialog/error.svg": "04bdc43ab1451975f939f0b40289c5fb",
"assets/packages/khalti_flutter/assets/logo/khalti.svg": "ca48562ef24de3a8e31901de5845aaa8",
"assets/packages/khalti_flutter/assets/logo/khalti-inner-icon.svg": "1f349f9fd4f4b2f2c4df8afdd7f7c71e",
"assets/packages/khalti_flutter/assets/logo/connect-ips.svg": "ea35ce77ea086b55778f3f5356658201",
"assets/packages/khalti_flutter/assets/logo/sct.svg": "8b032a098e9073d75e8bda7079492cba",
"assets/packages/khalti_flutter/assets/error/no-internet.svg": "770e67f4e2118e6404d573b7be8e3cca",
"assets/packages/khalti_flutter/assets/error/general-error.svg": "e64aa723b6f78b8aeff9eeb7f6785f52",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "6bf84579813fd481ec5e24e73927500d",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/empty_alerts.svg": "0073eb2c8b84fac78df6e5f12268c30d",
"assets/assets/khalti.png": "f94b6981d3c06934a4881bc0c30ad3ed",
"assets/assets/ic_launcher.png": "9e3ac77f142ff9f99cd5f2a14490299d",
"assets/assets/notification.wav": "1cd120af88e39f3da95a75e2538cda0d",
"assets/assets/empty_notes.svg": "e11e8306b6051de05e29ac09d7195bd0",
"assets/assets/empty_watchlist.svg": "4901387bf18e683f631856bab38fc1fd",
"assets/assets/esewa.png": "e1b532c29d4627beaaa2b7868374f0e5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
