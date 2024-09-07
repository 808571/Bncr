/**
 * @author JC
 * @name ele_check_user
 * @team October
 * @version 1.0.3
 * @description 饿了么失效账号查询通知,需要ck中添加wxUid,common配置中添加wxToken,如果想立刻执行输入指令 elmcheck;
 * @rule ^(elmcheck)$
 * @cron 0 15 6,12,18 * * *
 * @admin false
 * @public false
 * @priority 9999
 * @disable false
 * @systemVersion >=:3.0.0
 * @authentication true
 * @classification ["工具"]
 */

/*
饿了么失效账号查询，需要ck中添加wxUid,脚本移植tg群https://t.me/+yFIpDg5G09FhYTll
推送 wxpush，要求 cookie 里面有 wxUid,如'unb=xxx;cookie2=xxxUSERID=xx;SID=xxx;wxUid=xx;'
*/

/*
v1.0.3 修复失效账号备注值没取到的问题
*/

/** Code Encryption Block[419fd178b7a37c9eae7b7426c4a04203f5f502784ecfb5aec20d23d78e2e72e31d5a984126d763a3ea6c623f86bb4cc2d3194c959ae21fbd37b0d00ac65fe6f0c6fe333fd0f2f08f56b2e169cc1cb1292e6775871f1beb59851dc1faab7ebc66fc0da8864d1693afd9def806bf7f6a4d2624b0d465e78a220e44ce71c09ea8c6d369fbd9dc47a65a4ceb9e4fd82e2186ebce9c50f879fae04b101b8a04db0db47c5ae48e6e4f82cfc3e86935893c6506898ac948c0a133d2ea966b67b5ca89497d3457cc0a89d6295a96d3ab494e559f0eaa8d9a0e8659565299577047dabeca1ea6efef7f384c9bebfd8b16ea79d9c08723ad520903fc3ee21e9e3df7634f8dee5aea739b0ffcd97c5bd1ae2b9e01cf29e18ef78ccdcb8bc83083a061ca3ee31c1e090425de35ef27cf266c5ee5d07afcf36322bf895d4f563f815c25f37a62966477960e04c724c44f55091f0e34309fff3b23409680be36d612d6a03fe317488e8a8af2a16c01431836dcf6bd0f58716ed2ab5933a97a320fd450a7b4a7ae3e9c46dfaab723f40fe23520a0f6bf537408a09fe1b28e6d7dc0116817692567298ee902dfa53747fbc855a911821b1f536c25d34089c67918f3fd8c503c30c9d9310b43a78ca17c03f72813b86a01e247740bd9465aff056b24549e50f82c1eacf026d4db1b3edadab45990a296f997b65c2bdffe86ef0741d98df861c7505661f9a360f59ed9dff378610b52cd961c5ffd25821508a8384c4b94d2ce289badf73f082e0f6423ff68f51f13337adbbef20ecb84c8bc4809d7b2b7e4711919dc9d6f0216ed1c6182ea758297448c50701d3198215d271ae3fcab653a41ef770175c56e491b22d82191a30700ced375e6a4ddda11c174c68cc88ce150cbafa0b64ae171c1e5ceaa64306c2c24166880e46f4977f85b974839a4d725581ae1da0d0028222bc687a144f240bc636b99d94a887f1bbe3f5a593d9c785037876e4e2845f15a80380650fea9666e3f5d08266344d76b617580eac204f89dc206ac236f643ed3340ca1cd72b56e99a6fb92551529b05f5780db8855b820f4498a130036ca4ddf6d2dcb46f8ca2b34db34b6702ecee4a1d0c510ad204a098fef6813d2f6413119e7771cc98932cadcd313949fc55dbcb4770903a62644279e1f7531d530624c45717b8e7f1753a0bbd25a77e39514cf6635495fc58951b09c80534f54ef52cbb54b7d0462ca51f90c27fe0ea877316e6432917bb77502b3f09594037e0e40fa4f52feb1e6ef69c9cba3544462b6ff74514c02dfe65c04979f35f0379e666a056c7ac62da3f640e173cf9005bdb25a16841b1cdfd77f70f309b49e055dcb325577a95a650fdcc70f75e6fecb0dd19b9aa1fd0a2474784d2c53cbf25354ade90c95165e8535a60228353d0643c2e8618ed4698519e69d014d7a34f12163b4456172db792567f5948b0d7bb35e6f58ebe00eac67507f9f088ea1582936b0415932f40f82d6ac635fd81c97fa4b28a2c96be2de781ace110c0259b6a73c65fc79e34e06c7f6fcc109f82375de3390b988e7fc8a083924063241891bba2acebec20e542c37c0736c7a07239cb21e7f4a109f3dacf26706d87c4bc6cbadabf87ace43ccb4ec136a70d6d2f78682a3052729d5999b9751f61bdc935fd3ffc0afa3af4c4ddf6e120798b63b91a0066ae76b9170307ae70092ba3bdaaf2974f2629d04f25ba374a1fd735007315b52bf475f333a25619ab9ee6d52e0bd9a280fc076ddcd432b4143679d2e4da9f068fd3ba34090d60609c315475d1c8e169f83fb79e25a95446acfb55fad30f5f2a972d9b34ffc29e8055b0e6fbfcbb0121fa1128d507516aa440986072fc6b587baf9efa6f0ffdb7fc4e63b38e6ecea682b1979bbb4f901bc2ed2670952342dc0414063ac2f9f4aaa945d5ffc042cb3baef3fa9d32d3cbd93bcf63549c5681c207678ca8b8fbf7a2d7080513829d1d2c0f8e4289d73583cff4deb77415ba603503b3bc187461e5f0136d926e56f5c999a34e497f6f4e78b46b9142033c57cdaf69e8243c0bd5a8ea62d566c186ae9788662cb6440c7e5b9dd669baf31be27539bd2c2dfcd92fdc23ada539309a894e21ac845ead88c5e1709bfce4f33d1c6f05b5898ac9f6b686f8555664e4c6ba4690658b35e5ba1fbb32a83722bf16387f1a967edd166d8e60389cccc3dabe39a4ebdf87cdac0f3643969a5a8a873c9074dfb77114ea1647d646a98101347ea8a5104aa5fef659eddc08550647b2f7aefd93762f74952714eba853803c36d7c2021abaa10f94d507ba74155f556bb87333657953c66b58a0e6fb2a48e08c46b51d740beda6e3b02010be92207cac5b6d878f1078fd679f45b3e04def254688119e5dd018dc3da32b8bedf2c81e278268fc5322d57ccfd95fa0367d0c135019e1d4ae6f290d421f301e74aac87936b70966c0ba8e1e36a0b2c617471ba58d14677b9af3641d37cc5fb3038536c0166e1c6e93c8738426611232e9787957989739f6cea32a524bddf1633aac97c0c378095a716ebb4a3c1b2a510c034eeac13aa7ee1456651145edb6fece764e5e2e970a063d8e1c68a01f3a8b7eb686e1b78decdbea21e620f30bf07ac1a6b8c08daa2527c467c806f71f99439a22ff2dabdf23ea8d2cea99d3f3a374fc629861a97391708e734f88d69ca85dec5e05752f698d00d10f58f47ed548d1a0c2978087db34feb38f77e8854161a06deb688ddf80a2151f1ed4756ae55ebb1ab184f09d2ca2770d37afcba03ecb3f17e5301aec1911a9ba703e48b21a6841ba5d0b2dcd77a1bcb856fc59cf793f17e54cd1da56b8bbba25076e513e0247e73fea2076d6c7cc218ad26e04fb9d6c1dce692aa98f57a86c682a9aae0249eff08c0a106dcb93833714cb87bbaa3f78f8e7bf0b50694a3e19f33dcda150fc049d92efe484c413ad68dff1f6c245111f025b1f315c8e5e0efcec572f39ee3f97eb8e373df0057101167338883d2661027ac08f83d95332e72b50c8497a1791e45f3c9dda4349e37b266ef54933653ca3a11b2bbeee8f36857984c04b09a4093b80c87d529fd7149db1b6530cdd64caa42411571cbbf7c5fda2e740ba5c11c8cff9f1827428f57f71acfa5372a4420b0dd26fc8c460235a30c25e2a22a6a8c4c9c3377f44a0fe83ab84550add1681a4eaeac4b4145fa5f88573764630b431570926d739f4b7eecdc1bd3ea90310ab401c4a217bb83d7712ed0a7772d096f471b56be3512595e69c156dcc0c388ce0cf824cce11705b06533331f4a0d6edf7e1a03d5545c5c873fbbd8e0ace9b17537da40825560d168456356994cda4b54bc9a2e16ed9513cb9ebaad527ea66b838931337763c0e8d517f60217644d288dadef740eedc5fd44aec483572b8613f0675989ccb3ddf4500088352b7ad8ff06de5c51f539eb5597584d74705f4a290c2fc7264548e33949a67509deb7bccf6de01be731964ed4a8c02a4b5259d641747e8a90a4eb45e0fd4dc36b9ecc507daceff18016df9b6a31f5bf762953a5237bdd55a4f86cb65c200338475ba0cfdb35f79f265d50dad9f71a7d6921ed27d2a13f0a41d5fae2fb85c790196d2fecb8a551e11a547f2499ffd4c5bf06d5328b21e35a8456a38cf217dfd54be4ec4d979f1aae0af7d29221bd83bc4026e4a5c0cfe03fd6e771099f5ca80d82e79d396267e41645bc64603e090f3ceb9654135dcf8d9504360fcc94933cb6a1c43e47fdf3db72c14e54279392044c92b1549710d0d2cdcd5e792b5a4b351977b95878f77463666d0b1db5fb896969340932d075dc5f6ef5f9d32f5d0f9f4b595da406511cba801b3c664bc3d6a4290955271179f90d073846d03d3d38fdec63bfda3999c562c620fda6a1ef280f7f5f6a49d88839367d1b53b35f36283b60c62a86c401c904273160e9af6df9071e5e63d0ca6d8a094b13643b6764b52beb82b67acafb434c00424ad8d8053dc5b8f7e307abe4a1355e90d2cc8966af45ab81d2392679dee335ff1ea24072536467e9d9ee78b0f48abf25b785fbc1ccd0e7c2916943cbfe7e98f99af2ae5a0d424facebaea03e0e02d6fc064d8ab7980ea96331d2bf2de4d15a7fecec7352f1ac10655cb62fe648401a07f6e7f2af4e4f0fadfef90c4df911977fbae7be296a10cca86fd5405b8e700effcdf4572110646dc928b307a0c21c70798476883ae7167f4c1b9fbb0893a9682d1be11e9b11278fe2dd278166ed0780edecd842c8154113a10593265b994abd1121dc902759e070fd5036111d3bfd2d29991d83a579820f4c6b6239920836bec07d5888fd36445e2b5bd257335469a7246cae0076044f525336127c456aa80d4f19ac268feac106b7ff128aff48d16960b4b9ec79b904fdc5ee05f6e491db279f034a2c9bae063df4f72d086fc6bbb713d7d784e4c34d402ce5f7bd8332a8ba7637d7014a09ab001d36507d7a35379cac1b16c0e49120849d69291a63517178cb258f0db9d7ce50f3a0103e450a72d72b65ac48052943ec983075829070bbe0a9988efb010f0182413ba1e07beae8ca8d2bc4358e875b564465f73203e78520209ef3e26cfc4792b6893316d48e35163fa236d929d28bf6a09aa7000ebb058ac9026312166942d0dd91129e8b02007be5033e015e24b21c3142fa335759b1ecf35670e8385ce73049263a6083733f603a872f8f1884fae715e031b4888f9b62354b4920b2cd72e07c539b5e600e3041eccda7df392032024e80b57b9aaf5255c88a8e0b37521bd67a24bb4a1bfe8bdbc80fffda1c2bfa4f4b4005cb0260153fe1fa72397733c466a32d7e4e86457444447e8fffc9cb8859ced24d97a3e6a045ed9ea37877c96cd262798233b24c50d8eab2320ba92c8d506313ea45d6174026f3f0eb508ebadb03731ee331ed9790b26ceb9af71046a7989bf507d1c5b29ee41c60f08d413487b4866bd6a4aa016e4fe2fd188d2e9406595e4782c23f9bc7a6487158cb1a86757676484c910e881bbf94081865d828a5a9bff135f9cbe57faf03cf6614cc5aa5ffb2ea7fd8dac00e0d8b096bc8022fa9c5eb31623e8694727f279a47a8e9b10c053601dd172dee6133c428164f46410caacdce2ec10b98af7795cd221950a2b68f4a18cd54afd923ff5a086888556155df2f1db57a8d041d542e46ecd6f4c92c6ea44761553d5d0d8d9ccf40dd17a80a9f34e475a2ab8524b7edcd6e2f0b8be38d83805d322f74a9c957178dcc246fed4cf79110eead8a6576958987ad16718dc15453086babf8061a1a6efb02bb7de85702bfb81c604434662478fd0e9555c1ad6ca1f3d168b79ec9b719830dcdbaa5ff9175e821885d4129e6a5cfeb830dd52a42cdcf3fd67972afe34d89cb785bd8764748b3fbfdc35d2b15a405fb4f89a3e3fe6ccdacf7dac5fa2114bad1b4f6f8e4db3f25116eb8044f227663ff9602ec190ff5b4107f36b49f9d291b9834983b33c021d00de7d4f1f1a9828fa28d2461e43f3976e433c117b773789b33a58ce04fe0ff198cc0da180b42db16211366ccb2a09453511b8f1e3df07f725a174e8ba5b539db3afbc58b] */