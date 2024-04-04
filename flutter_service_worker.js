'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6cdbf614bb6c85217258608d650c740e",
".git/config": "9e09cf9f0d195a517bdcbf03b3c91ad5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1466375953254d7055f41e7a8c4692b2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b33ce13098fd2590426776ae2b7a9d90",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4c1d129d0344b1df298d9a71ecc7a502",
".git/logs/refs/heads/main": "0f0f22e8dcfdd2017e2e53093de19d21",
".git/logs/refs/remotes/origin/main": "091af92488a365d0773fc54c902f5e10",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0a/1e51b54c5446e560ae9d2d212660f48d77fe85": "51327f4f947462c5cc2976c8ea60dadc",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/0f9e483f7326f34fb5a6c674d7439b52678410": "7fe7f714ca61ad30e9b1cb4a10e8473b",
".git/objects/0f/8bb962ace26c9621dc4d7b43fa3f09e7704596": "b813b51a8b493bbe648007fdbc262bd5",
".git/objects/16/6d3b8d8c920fdad4eff30dd0d969fc7da995e2": "3627637c922beedb0756513c3251abd2",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/1a/709eda8d48f9a7612231df53d68842f380d8ad": "367e5d7b55a7a9db7640887fa64f0fd1",
".git/objects/1c/adbe37966444baa0bb09c6ee750cee1ee715eb": "786baf44ef162b609aba0248ff6c1432",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/7be8ddc040d3af3dc9be878b5da4ad559eb2ed": "86d0273588e4beac3cb4e4586855ff0a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/27/30cf25a4b8e961a6e744ddb49a6f6766d2bfd3": "be3dddc7f837b012be679680c64afa00",
".git/objects/28/2be1a171384cb3d33d0327699a7859c7854be9": "47b69bd9509a0c535540cbd2053ec80d",
".git/objects/29/dd7ea7c23ec9d2463cec530d6a125606c42185": "47be0d17ec9694c8246c0d1d324cfee9",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/33/84e915e947cab48b91e0f1e0fd0d17b67ac7c4": "d348a569565e0862abf91c2a0009d8b4",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/4b56a680c490c92415f63b14b045579b432fd9": "68e8a645ab8ce34442e8507ca3317c20",
".git/objects/3a/d5ebd45a0de4f7d254b1b5beff1a5faed9fd7b": "1808d31fc8cde85cfdbaacc48b054a6b",
".git/objects/3f/8d067fa955a5da515573fc869afe03cb5e0b71": "a6415c93cb01e932936573ec97b9ddb2",
".git/objects/3f/e93d70596f2793cbf7af11f5abb19c5568cd28": "f2f5570b341c8356804d7c07f99d8787",
".git/objects/40/8ad2ee6beae35b624db2a9aca3cc2c973a0f77": "4beec9278cabf069e8a717a3b1fc16a5",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/41/da260c06466b10a985a65c0d8f648c63fd6013": "1bf652507db84f0d6650f720e9f23578",
".git/objects/43/072ac59536e6d3310d1c9ac5b5b8a3b98d98a1": "5bd12d70b29f6e44e4382abbd0cf0e7b",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/4d/2f2880054165485d4234d4dba8e8c8f9850fe0": "c59b5b542157f4191811dc0e62e3a848",
".git/objects/4f/96a40d6aabc2c79555644937aa29f6197aa91f": "5f42e191f1a922c65ef4ff5de729629b",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/96ca4687953f37eacf7ccc2ab0aed13ed1ce13": "ba697a9d0b8752b7cdf4f50ec62b39d6",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/55/9176c63e9c8a3a0160a6229632b7f518c64d83": "9a7c413078b9eb7cd5ff67dcdc1e0dc5",
".git/objects/57/d76d7e9334e89c4e65b8063dfc84f2c4f91154": "fdd7420146eb3e33f0bd3c916807e48e",
".git/objects/59/57af0ea79450707323faf9f0233a45a1cfb037": "cda3b5e252405f70ef0b11d0396225cc",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/69/00101c5a8f1b17688b5cbca0ae0c8cd12581f9": "9544a4d026ebf22d82f49142938bb115",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/6f/aaaae2d6bb03d94d10b1970f3252a4334c556f": "e7b4f8c8748bee57f5825568938633c6",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/7f/22fd0f50b1142c7abcc119f227ad653f9a7f2b": "1ec285a0d2a514afac7db4dbba824194",
".git/objects/83/8fb93443e2d7a10696dc8dcbecc96613119eab": "2443e8c6bf6b2b73d252ea04aaf915e4",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/84/f32e252d6856600ed570bdc3585b8f65d708a7": "eddc51873779bda0fa2bee6af66d50db",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/8d/4377b16a686e0ff1b4366330c18c843c74e8ea": "cd082c6b596c36b1171b4f2bd33514ec",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/98/c39f212fe98aa5792604b88a79703ff75371f7": "fc0cf0a4d961e0a0330d1cd84f8b1249",
".git/objects/9f/c43006527ca19079c420176cf8378d2e5153fb": "6340e2830755004ac4e1ac402ad40a9d",
".git/objects/a4/792c56789b6339c05bf624ece54795a7bbc213": "435e0ffa8f8939d5ff276b2a0ea7e6ce",
".git/objects/a5/cdfe7e7fcdb49f9d4ce1872badbee40e074701": "04ebc9b2fb44135f40733e8e4ed5141c",
".git/objects/a6/f538d67798744b4d5a2a7b0dd199b2ebf4ffc9": "f4e91e73952b25299ad97a0a7af420a6",
".git/objects/a8/a15d4281548c1701153635ca7cd33037e42313": "e8c345498951ad448364a61e24ec9b25",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ab/b94ed6ea0816b6665a73bb8608dfc002d4d31e": "d030ac4c6a99e776640b34c26e540225",
".git/objects/ac/17948d89393957ece4d6d9858a1acb71043446": "99287e303be80797077a4ef494bb884c",
".git/objects/ad/a3859ec00d12da6fbc47e138eef85e960e1a5b": "a6fbedfcde9734cc19c084b7b6c160e5",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/c9261a01f08ee5580ab944fe356c84123ec82f": "5f436bdf5d09e228cbdc1620b0356217",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b1/7a234ec092aa751621b63b83e5f0f295e09a61": "5b66676f215c8584ac3eeb0ec300ee6d",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b6/9e941ebdf4f6d8faff474b2649dc90a985789d": "d57fdc5fba1efc7f445ee06ca5b64617",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/db200ada72f0ec11288bfbbfb8c63ba28daddd": "7794a067855549a328e713515308c782",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/bc/f2d5078a28466261b34956d93b362ae17f0398": "3d5af3406ae3361419e62f37767b7d37",
".git/objects/c7/99997e4212b4668c9369ef00c43bdba817be33": "2a28ab3c3112d55df19c8958fb6a74e6",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/d8/d2e14a30b574e85d25cb055e9a5a43066a51a7": "c4b198729316175cc57cb476549b7f26",
".git/objects/d8/fffb89da049496e17ee31fab4a6e7629d01167": "0e8d2737172b3e18bef594122352c138",
".git/objects/d9/0b3c0cb088bce8c93ed9de73f9983c3901fb8b": "d20259402886b3038e52f8a22dfa9fbe",
".git/objects/dd/603dae941da1a1f39fd672582108d977ce4a2b": "7b5557b302d09107e07034bf574d9386",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e7/96fd1e898b61d461d736f5b09ac8133be4ef7b": "dc5f546fc933d5150f5974f2d9467f5c",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/e9737ec626815e324584f89c6441b8133c58ab": "a590428a816be886479a7ad15cc45f5e",
".git/objects/ef/723a162bab7e3ee9e257ffc4c3edae5d2ac7b5": "3ccc2de5a51a7d26a30218b76acb684c",
".git/objects/ef/bd67ba6a8b97c21d9a079b1505afbc95e2143c": "43417d604a318fda59f88cc9b786c4be",
".git/objects/f1/af2fff50e2e613a0096f3a203107770adc87cb": "2db0b5ade24fc5facc348f3d11ac375c",
".git/objects/f3/d413ce2390b7a5dc6c6716e6cc45c14c1e8321": "0e017cc022a49f883331724b5a597415",
".git/objects/f6/0d74b888173ed0c8edb8449402509ac014bba8": "91e2a810f592f4d6dde04d239b5ff33a",
".git/objects/f8/c76307a6f4435726806e84044f35132ec3b62f": "c9a96dc5eddfe5ea69ef301f3636c3be",
".git/objects/fc/d60431cfdfdf59c4d2bba09a2170d8459a0909": "9285e1f3d049b1946b047f30fb46d4f4",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/objects/ff/51b0270b9ed0d0f74cd31e36efb95544aa70ad": "179c92dfaa1ffe923ab719fe03e5ed81",
".git/refs/heads/main": "3b8da9d703be6aad54c5c2957d08eed2",
".git/refs/remotes/origin/main": "3b8da9d703be6aad54c5c2957d08eed2",
"assets/AssetManifest.bin": "7b368c83a8d267c6202892a14fea5d07",
"assets/AssetManifest.json": "057492ba2b34e39ca68e07ed246b6eff",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/excel_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/icons/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/assets/icons/menu_dashboard.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/icons/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/assets/icons/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/assets/images/bk_logo.png": "5f05e7ce30b2bbd3f26b8ed6a242f130",
"assets/assets/images/excel.png": "327c7ded1863e4985b2df74986b24456",
"assets/assets/images/fingerprint-scan%2520(1).png": "8b4c52c15664ec8284f840d524fb99cf",
"assets/assets/images/fingerprint-scan.png": "ea9543f14b3f81058a36151b71dfe783",
"assets/assets/images/hardware.png": "c6ed7cafef7161f45e4f922d0f6b73c1",
"assets/assets/images/id-card.png": "616fa1cfc0657c9ecd6fcd7d7e65031e",
"assets/assets/images/instruction_1.png": "7aa27e779f4119de3f653ef5433f870f",
"assets/assets/images/instruction_2.png": "7970a8efcb8579257d4d3705bda77376",
"assets/assets/images/key.png": "92cb65441bd54246d78d01ee6d1d5a72",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/logo_hardware.png": "c67b2987bc04e5a6c669022281239ce1",
"assets/assets/images/logo_hardware_removebg.png": "e961cdd1d82d6df6772d23a620d86cf0",
"assets/assets/images/password.png": "f148996a2712645878bc0349ba0b4b8c",
"assets/assets/images/pdf.png": "9a85752042ae270b88114895b82da2c1",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/FontManifest.json": "425d3a9987ec6bacc32eb76d9c997a3b",
"assets/fonts/MaterialIcons-Regular.otf": "7340c5e3997d89eb7867b70c752fe784",
"assets/NOTICES": "a5f50cd7031aebe8805c6d7dc4b0e58c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "b3cfd6832181cbaa3c98988c49d34641",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.ico": "09ee745177dcfd3db76a792f353ee742",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "8b5c0a1175c3e3751ca7ac31260a3209",
"icons/Icon-512.png": "3b3fd0e6b0bbc4d68c9d8aad23b8fbc0",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "482c14fec234b768e281d0be3946ec3a",
"/": "482c14fec234b768e281d0be3946ec3a",
"main.dart.js": "f32721d9ced223241a5db54f9d4bfadb",
"manifest.json": "79f60fc8fb1e0916fa6d6370380771c2",
"version.json": "30824cccf852c3a87f5285fc99397eb4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
