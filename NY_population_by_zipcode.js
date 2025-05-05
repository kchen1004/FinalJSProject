// Data from https://www.cubitplanning.com/citations/demographicsby-v2024
// Converted data to JSON with https://tableconvert.com/excel-to-json

const zipcodePopulation = [
        {
            "Zipcode": "06390",
            "Population": "53"
        },
        {
            "Zipcode": "10001",
            "Population": "29079"
        },
        {
            "Zipcode": "10002",
            "Population": "75517"
        },
        {
            "Zipcode": "10003",
            "Population": "53825"
        },
        {
            "Zipcode": "10004",
            "Population": "3875"
        },
        {
            "Zipcode": "10005",
            "Population": "9238"
        },
        {
            "Zipcode": "10006",
            "Population": "4475"
        },
        {
            "Zipcode": "10007",
            "Population": "7802"
        },
        {
            "Zipcode": "10009",
            "Population": "58341"
        },
        {
            "Zipcode": "10010",
            "Population": "31905"
        },
        {
            "Zipcode": "10011",
            "Population": "49344"
        },
        {
            "Zipcode": "10012",
            "Population": "21846"
        },
        {
            "Zipcode": "10013",
            "Population": "28215"
        },
        {
            "Zipcode": "10014",
            "Population": "29772"
        },
        {
            "Zipcode": "10016",
            "Population": "54297"
        },
        {
            "Zipcode": "10017",
            "Population": "14985"
        },
        {
            "Zipcode": "10018",
            "Population": "8764"
        },
        {
            "Zipcode": "10019",
            "Population": "44276"
        },
        {
            "Zipcode": "10020",
            "Population": "0"
        },
        {
            "Zipcode": "10021",
            "Population": "39479"
        },
        {
            "Zipcode": "10022",
            "Population": "34340"
        },
        {
            "Zipcode": "10023",
            "Population": "67468"
        },
        {
            "Zipcode": "10024",
            "Population": "62576"
        },
        {
            "Zipcode": "10025",
            "Population": "93223"
        },
        {
            "Zipcode": "10026",
            "Population": "37113"
        },
        {
            "Zipcode": "10027",
            "Population": "65068"
        },
        {
            "Zipcode": "10028",
            "Population": "45679"
        },
        {
            "Zipcode": "10029",
            "Population": "74848"
        },
        {
            "Zipcode": "10030",
            "Population": "30781"
        },
        {
            "Zipcode": "10031",
            "Population": "60305"
        },
        {
            "Zipcode": "10032",
            "Population": "55579"
        },
        {
            "Zipcode": "10033",
            "Population": "53611"
        },
        {
            "Zipcode": "10034",
            "Population": "39037"
        },
        {
            "Zipcode": "10035",
            "Population": "39082"
        },
        {
            "Zipcode": "10036",
            "Population": "30589"
        },
        {
            "Zipcode": "10037",
            "Population": "18333"
        },
        {
            "Zipcode": "10038",
            "Population": "23342"
        },
        {
            "Zipcode": "10039",
            "Population": "30512"
        },
        {
            "Zipcode": "10040",
            "Population": "41581"
        },
        {
            "Zipcode": "10044",
            "Population": "11998"
        },
        {
            "Zipcode": "10065",
            "Population": "31047"
        },
        {
            "Zipcode": "10069",
            "Population": "6669"
        },
        {
            "Zipcode": "10075",
            "Population": "23865"
        },
        {
            "Zipcode": "10103",
            "Population": "0"
        },
        {
            "Zipcode": "10110",
            "Population": "0"
        },
        {
            "Zipcode": "10111",
            "Population": "0"
        },
        {
            "Zipcode": "10112",
            "Population": "0"
        },
        {
            "Zipcode": "10115",
            "Population": "0"
        },
        {
            "Zipcode": "10119",
            "Population": "0"
        },
        {
            "Zipcode": "10128",
            "Population": "59000"
        },
        {
            "Zipcode": "10152",
            "Population": "0"
        },
        {
            "Zipcode": "10153",
            "Population": "0"
        },
        {
            "Zipcode": "10154",
            "Population": "0"
        },
        {
            "Zipcode": "10162",
            "Population": "1769"
        },
        {
            "Zipcode": "10165",
            "Population": "0"
        },
        {
            "Zipcode": "10167",
            "Population": "0"
        },
        {
            "Zipcode": "10168",
            "Population": "0"
        },
        {
            "Zipcode": "10169",
            "Population": "0"
        },
        {
            "Zipcode": "10170",
            "Population": "0"
        },
        {
            "Zipcode": "10171",
            "Population": "0"
        },
        {
            "Zipcode": "10172",
            "Population": "0"
        },
        {
            "Zipcode": "10173",
            "Population": "0"
        },
        {
            "Zipcode": "10174",
            "Population": "0"
        },
        {
            "Zipcode": "10177",
            "Population": "0"
        },
        {
            "Zipcode": "10199",
            "Population": "0"
        },
        {
            "Zipcode": "10271",
            "Population": "0"
        },
        {
            "Zipcode": "10278",
            "Population": "0"
        },
        {
            "Zipcode": "10279",
            "Population": "181"
        },
        {
            "Zipcode": "10280",
            "Population": "8668"
        },
        {
            "Zipcode": "10282",
            "Population": "5960"
        },
        {
            "Zipcode": "10301",
            "Population": "39799"
        },
        {
            "Zipcode": "10302",
            "Population": "19693"
        },
        {
            "Zipcode": "10303",
            "Population": "25993"
        },
        {
            "Zipcode": "10304",
            "Population": "45843"
        },
        {
            "Zipcode": "10305",
            "Population": "41714"
        },
        {
            "Zipcode": "10306",
            "Population": "57249"
        },
        {
            "Zipcode": "10307",
            "Population": "14821"
        },
        {
            "Zipcode": "10308",
            "Population": "29996"
        },
        {
            "Zipcode": "10309",
            "Population": "34918"
        },
        {
            "Zipcode": "10310",
            "Population": "25824"
        },
        {
            "Zipcode": "10311",
            "Population": "0"
        },
        {
            "Zipcode": "10312",
            "Population": "63345"
        },
        {
            "Zipcode": "10314",
            "Population": "93539"
        },
        {
            "Zipcode": "10451",
            "Population": "48975"
        },
        {
            "Zipcode": "10452",
            "Population": "76745"
        },
        {
            "Zipcode": "10453",
            "Population": "78270"
        },
        {
            "Zipcode": "10454",
            "Population": "40368"
        },
        {
            "Zipcode": "10455",
            "Population": "42940"
        },
        {
            "Zipcode": "10456",
            "Population": "86958"
        },
        {
            "Zipcode": "10457",
            "Population": "79375"
        },
        {
            "Zipcode": "10458",
            "Population": "78741"
        },
        {
            "Zipcode": "10459",
            "Population": "49753"
        },
        {
            "Zipcode": "10460",
            "Population": "61101"
        },
        {
            "Zipcode": "10461",
            "Population": "50900"
        },
        {
            "Zipcode": "10462",
            "Population": "75452"
        },
        {
            "Zipcode": "10463",
            "Population": "69373"
        },
        {
            "Zipcode": "10464",
            "Population": "4273"
        },
        {
            "Zipcode": "10465",
            "Population": "46457"
        },
        {
            "Zipcode": "10466",
            "Population": "74061"
        },
        {
            "Zipcode": "10467",
            "Population": "96304"
        },
        {
            "Zipcode": "10468",
            "Population": "79825"
        },
        {
            "Zipcode": "10469",
            "Population": "69855"
        },
        {
            "Zipcode": "10470",
            "Population": "15558"
        },
        {
            "Zipcode": "10471",
            "Population": "23400"
        },
        {
            "Zipcode": "10472",
            "Population": "63820"
        },
        {
            "Zipcode": "10473",
            "Population": "59778"
        },
        {
            "Zipcode": "10474",
            "Population": "11188"
        },
        {
            "Zipcode": "10475",
            "Population": "42771"
        },
        {
            "Zipcode": "10501",
            "Population": "1426"
        },
        {
            "Zipcode": "10502",
            "Population": "5875"
        },
        {
            "Zipcode": "10503",
            "Population": "127"
        },
        {
            "Zipcode": "10504",
            "Population": "7853"
        },
        {
            "Zipcode": "10505",
            "Population": "1295"
        },
        {
            "Zipcode": "10506",
            "Population": "6246"
        },
        {
            "Zipcode": "10507",
            "Population": "6044"
        },
        {
            "Zipcode": "10509",
            "Population": "20055"
        },
        {
            "Zipcode": "10510",
            "Population": "10027"
        },
        {
            "Zipcode": "10511",
            "Population": "2296"
        },
        {
            "Zipcode": "10512",
            "Population": "24238"
        },
        {
            "Zipcode": "10514",
            "Population": "12227"
        },
        {
            "Zipcode": "10516",
            "Population": "5607"
        },
        {
            "Zipcode": "10517",
            "Population": "551"
        },
        {
            "Zipcode": "10518",
            "Population": "789"
        },
        {
            "Zipcode": "10519",
            "Population": "188"
        },
        {
            "Zipcode": "10520",
            "Population": "12208"
        },
        {
            "Zipcode": "10522",
            "Population": "11464"
        },
        {
            "Zipcode": "10523",
            "Population": "9773"
        },
        {
            "Zipcode": "10524",
            "Population": "4298"
        },
        {
            "Zipcode": "10526",
            "Population": "2040"
        },
        {
            "Zipcode": "10527",
            "Population": "587"
        },
        {
            "Zipcode": "10528",
            "Population": "13822"
        },
        {
            "Zipcode": "10530",
            "Population": "13955"
        },
        {
            "Zipcode": "10532",
            "Population": "5253"
        },
        {
            "Zipcode": "10533",
            "Population": "7337"
        },
        {
            "Zipcode": "10535",
            "Population": "323"
        },
        {
            "Zipcode": "10536",
            "Population": "11010"
        },
        {
            "Zipcode": "10537",
            "Population": "2418"
        },
        {
            "Zipcode": "10538",
            "Population": "17709"
        },
        {
            "Zipcode": "10540",
            "Population": "114"
        },
        {
            "Zipcode": "10541",
            "Population": "26137"
        },
        {
            "Zipcode": "10542",
            "Population": "0"
        },
        {
            "Zipcode": "10543",
            "Population": "21022"
        },
        {
            "Zipcode": "10545",
            "Population": "182"
        },
        {
            "Zipcode": "10546",
            "Population": "1229"
        },
        {
            "Zipcode": "10547",
            "Population": "7361"
        },
        {
            "Zipcode": "10548",
            "Population": "4302"
        },
        {
            "Zipcode": "10549",
            "Population": "15858"
        },
        {
            "Zipcode": "10550",
            "Population": "40072"
        },
        {
            "Zipcode": "10552",
            "Population": "21499"
        },
        {
            "Zipcode": "10553",
            "Population": "10815"
        },
        {
            "Zipcode": "10560",
            "Population": "4914"
        },
        {
            "Zipcode": "10562",
            "Population": "33700"
        },
        {
            "Zipcode": "10566",
            "Population": "25484"
        },
        {
            "Zipcode": "10567",
            "Population": "20260"
        },
        {
            "Zipcode": "10570",
            "Population": "13391"
        },
        {
            "Zipcode": "10573",
            "Population": "40982"
        },
        {
            "Zipcode": "10576",
            "Population": "4904"
        },
        {
            "Zipcode": "10577",
            "Population": "5901"
        },
        {
            "Zipcode": "10578",
            "Population": "1851"
        },
        {
            "Zipcode": "10579",
            "Population": "8825"
        },
        {
            "Zipcode": "10580",
            "Population": "18073"
        },
        {
            "Zipcode": "10583",
            "Population": "40612"
        },
        {
            "Zipcode": "10588",
            "Population": "3081"
        },
        {
            "Zipcode": "10589",
            "Population": "7266"
        },
        {
            "Zipcode": "10590",
            "Population": "7314"
        },
        {
            "Zipcode": "10591",
            "Population": "23663"
        },
        {
            "Zipcode": "10594",
            "Population": "5512"
        },
        {
            "Zipcode": "10595",
            "Population": "7180"
        },
        {
            "Zipcode": "10596",
            "Population": "657"
        },
        {
            "Zipcode": "10597",
            "Population": "652"
        },
        {
            "Zipcode": "10598",
            "Population": "28894"
        },
        {
            "Zipcode": "10601",
            "Population": "10860"
        },
        {
            "Zipcode": "10603",
            "Population": "19201"
        },
        {
            "Zipcode": "10604",
            "Population": "12192"
        },
        {
            "Zipcode": "10605",
            "Population": "19371"
        },
        {
            "Zipcode": "10606",
            "Population": "17556"
        },
        {
            "Zipcode": "10607",
            "Population": "6222"
        },
        {
            "Zipcode": "10701",
            "Population": "70054"
        },
        {
            "Zipcode": "10703",
            "Population": "22135"
        },
        {
            "Zipcode": "10704",
            "Population": "31844"
        },
        {
            "Zipcode": "10705",
            "Population": "40390"
        },
        {
            "Zipcode": "10706",
            "Population": "9119"
        },
        {
            "Zipcode": "10707",
            "Population": "9755"
        },
        {
            "Zipcode": "10708",
            "Population": "21946"
        },
        {
            "Zipcode": "10709",
            "Population": "10274"
        },
        {
            "Zipcode": "10710",
            "Population": "25684"
        },
        {
            "Zipcode": "10801",
            "Population": "41984"
        },
        {
            "Zipcode": "10803",
            "Population": "13096"
        },
        {
            "Zipcode": "10804",
            "Population": "15228"
        },
        {
            "Zipcode": "10805",
            "Population": "21230"
        },
        {
            "Zipcode": "10901",
            "Population": "26224"
        },
        {
            "Zipcode": "10910",
            "Population": "0"
        },
        {
            "Zipcode": "10911",
            "Population": "18"
        },
        {
            "Zipcode": "10913",
            "Population": "5333"
        },
        {
            "Zipcode": "10914",
            "Population": "691"
        },
        {
            "Zipcode": "10915",
            "Population": "0"
        },
        {
            "Zipcode": "10916",
            "Population": "4531"
        },
        {
            "Zipcode": "10917",
            "Population": "1575"
        },
        {
            "Zipcode": "10918",
            "Population": "11937"
        },
        {
            "Zipcode": "10919",
            "Population": "1383"
        },
        {
            "Zipcode": "10920",
            "Population": "8493"
        },
        {
            "Zipcode": "10921",
            "Population": "4358"
        },
        {
            "Zipcode": "10922",
            "Population": "1072"
        },
        {
            "Zipcode": "10923",
            "Population": "9188"
        },
        {
            "Zipcode": "10924",
            "Population": "13612"
        },
        {
            "Zipcode": "10925",
            "Population": "4440"
        },
        {
            "Zipcode": "10926",
            "Population": "3741"
        },
        {
            "Zipcode": "10927",
            "Population": "12273"
        },
        {
            "Zipcode": "10928",
            "Population": "5273"
        },
        {
            "Zipcode": "10930",
            "Population": "10342"
        },
        {
            "Zipcode": "10931",
            "Population": "1170"
        },
        {
            "Zipcode": "10932",
            "Population": "14"
        },
        {
            "Zipcode": "10933",
            "Population": "312"
        },
        {
            "Zipcode": "10940",
            "Population": "53099"
        },
        {
            "Zipcode": "10941",
            "Population": "14761"
        },
        {
            "Zipcode": "10950",
            "Population": "65391"
        },
        {
            "Zipcode": "10952",
            "Population": "47169"
        },
        {
            "Zipcode": "10953",
            "Population": "0"
        },
        {
            "Zipcode": "10954",
            "Population": "27474"
        },
        {
            "Zipcode": "10956",
            "Population": "31420"
        },
        {
            "Zipcode": "10958",
            "Population": "2717"
        },
        {
            "Zipcode": "10960",
            "Population": "15277"
        },
        {
            "Zipcode": "10962",
            "Population": "4921"
        },
        {
            "Zipcode": "10963",
            "Population": "3940"
        },
        {
            "Zipcode": "10964",
            "Population": "1395"
        },
        {
            "Zipcode": "10965",
            "Population": "15526"
        },
        {
            "Zipcode": "10968",
            "Population": "2406"
        },
        {
            "Zipcode": "10969",
            "Population": "1333"
        },
        {
            "Zipcode": "10970",
            "Population": "11636"
        },
        {
            "Zipcode": "10973",
            "Population": "2300"
        },
        {
            "Zipcode": "10974",
            "Population": "3324"
        },
        {
            "Zipcode": "10975",
            "Population": "254"
        },
        {
            "Zipcode": "10976",
            "Population": "2215"
        },
        {
            "Zipcode": "10977",
            "Population": "71465"
        },
        {
            "Zipcode": "10979",
            "Population": "84"
        },
        {
            "Zipcode": "10980",
            "Population": "13793"
        },
        {
            "Zipcode": "10983",
            "Population": "5489"
        },
        {
            "Zipcode": "10984",
            "Population": "2760"
        },
        {
            "Zipcode": "10985",
            "Population": "18"
        },
        {
            "Zipcode": "10986",
            "Population": "1402"
        },
        {
            "Zipcode": "10987",
            "Population": "4041"
        },
        {
            "Zipcode": "10988",
            "Population": "684"
        },
        {
            "Zipcode": "10989",
            "Population": "8410"
        },
        {
            "Zipcode": "10990",
            "Population": "20370"
        },
        {
            "Zipcode": "10992",
            "Population": "10412"
        },
        {
            "Zipcode": "10993",
            "Population": "4230"
        },
        {
            "Zipcode": "10994",
            "Population": "5925"
        },
        {
            "Zipcode": "10996",
            "Population": "6549"
        },
        {
            "Zipcode": "10998",
            "Population": "3676"
        },
        {
            "Zipcode": "11001",
            "Population": "25714"
        },
        {
            "Zipcode": "11003",
            "Population": "44716"
        },
        {
            "Zipcode": "11004",
            "Population": "14296"
        },
        {
            "Zipcode": "11005",
            "Population": "2195"
        },
        {
            "Zipcode": "11010",
            "Population": "25618"
        },
        {
            "Zipcode": "11020",
            "Population": "5986"
        },
        {
            "Zipcode": "11021",
            "Population": "19474"
        },
        {
            "Zipcode": "11023",
            "Population": "9824"
        },
        {
            "Zipcode": "11024",
            "Population": "8821"
        },
        {
            "Zipcode": "11030",
            "Population": "17703"
        },
        {
            "Zipcode": "11040",
            "Population": "42344"
        },
        {
            "Zipcode": "11042",
            "Population": "232"
        },
        {
            "Zipcode": "11050",
            "Population": "32657"
        },
        {
            "Zipcode": "11096",
            "Population": "9897"
        },
        {
            "Zipcode": "11101",
            "Population": "39007"
        },
        {
            "Zipcode": "11102",
            "Population": "28349"
        },
        {
            "Zipcode": "11103",
            "Population": "35357"
        },
        {
            "Zipcode": "11104",
            "Population": "26825"
        },
        {
            "Zipcode": "11105",
            "Population": "38507"
        },
        {
            "Zipcode": "11106",
            "Population": "40657"
        },
        {
            "Zipcode": "11109",
            "Population": "7388"
        },
        {
            "Zipcode": "11201",
            "Population": "69251"
        },
        {
            "Zipcode": "11203",
            "Population": "76853"
        },
        {
            "Zipcode": "11204",
            "Population": "81368"
        },
        {
            "Zipcode": "11205",
            "Population": "50205"
        },
        {
            "Zipcode": "11206",
            "Population": "89231"
        },
        {
            "Zipcode": "11207",
            "Population": "93445"
        },
        {
            "Zipcode": "11208",
            "Population": "106901"
        },
        {
            "Zipcode": "11209",
            "Population": "70756"
        },
        {
            "Zipcode": "11210",
            "Population": "60398"
        },
        {
            "Zipcode": "11211",
            "Population": "65691"
        },
        {
            "Zipcode": "11212",
            "Population": "87946"
        },
        {
            "Zipcode": "11213",
            "Population": "69630"
        },
        {
            "Zipcode": "11214",
            "Population": "88994"
        },
        {
            "Zipcode": "11215",
            "Population": "70922"
        },
        {
            "Zipcode": "11216",
            "Population": "59913"
        },
        {
            "Zipcode": "11217",
            "Population": "42569"
        },
        {
            "Zipcode": "11218",
            "Population": "71313"
        },
        {
            "Zipcode": "11219",
            "Population": "94737"
        },
        {
            "Zipcode": "11220",
            "Population": "90792"
        },
        {
            "Zipcode": "11221",
            "Population": "90750"
        },
        {
            "Zipcode": "11222",
            "Population": "41418"
        },
        {
            "Zipcode": "11223",
            "Population": "78566"
        },
        {
            "Zipcode": "11224",
            "Population": "48469"
        },
        {
            "Zipcode": "11225",
            "Population": "56544"
        },
        {
            "Zipcode": "11226",
            "Population": "100022"
        },
        {
            "Zipcode": "11228",
            "Population": "42325"
        },
        {
            "Zipcode": "11229",
            "Population": "79802"
        },
        {
            "Zipcode": "11230",
            "Population": "88252"
        },
        {
            "Zipcode": "11231",
            "Population": "39704"
        },
        {
            "Zipcode": "11232",
            "Population": "26681"
        },
        {
            "Zipcode": "11233",
            "Population": "82711"
        },
        {
            "Zipcode": "11234",
            "Population": "87778"
        },
        {
            "Zipcode": "11235",
            "Population": "81958"
        },
        {
            "Zipcode": "11236",
            "Population": "95174"
        },
        {
            "Zipcode": "11237",
            "Population": "45233"
        },
        {
            "Zipcode": "11238",
            "Population": "58462"
        },
        {
            "Zipcode": "11239",
            "Population": "16047"
        },
        {
            "Zipcode": "11249",
            "Population": "45353"
        },
        {
            "Zipcode": "11354",
            "Population": "52325"
        },
        {
            "Zipcode": "11355",
            "Population": "79802"
        },
        {
            "Zipcode": "11356",
            "Population": "26956"
        },
        {
            "Zipcode": "11357",
            "Population": "42341"
        },
        {
            "Zipcode": "11358",
            "Population": "36496"
        },
        {
            "Zipcode": "11359",
            "Population": "0"
        },
        {
            "Zipcode": "11360",
            "Population": "19510"
        },
        {
            "Zipcode": "11361",
            "Population": "30402"
        },
        {
            "Zipcode": "11362",
            "Population": "18156"
        },
        {
            "Zipcode": "11363",
            "Population": "7515"
        },
        {
            "Zipcode": "11364",
            "Population": "36417"
        },
        {
            "Zipcode": "11365",
            "Population": "43258"
        },
        {
            "Zipcode": "11366",
            "Population": "12967"
        },
        {
            "Zipcode": "11367",
            "Population": "42210"
        },
        {
            "Zipcode": "11368",
            "Population": "107060"
        },
        {
            "Zipcode": "11369",
            "Population": "33354"
        },
        {
            "Zipcode": "11370",
            "Population": "28762"
        },
        {
            "Zipcode": "11371",
            "Population": "0"
        },
        {
            "Zipcode": "11372",
            "Population": "66995"
        },
        {
            "Zipcode": "11373",
            "Population": "99433"
        },
        {
            "Zipcode": "11374",
            "Population": "46128"
        },
        {
            "Zipcode": "11375",
            "Population": "75320"
        },
        {
            "Zipcode": "11377",
            "Population": "83545"
        },
        {
            "Zipcode": "11378",
            "Population": "37828"
        },
        {
            "Zipcode": "11379",
            "Population": "37378"
        },
        {
            "Zipcode": "11385",
            "Population": "103865"
        },
        {
            "Zipcode": "11411",
            "Population": "20501"
        },
        {
            "Zipcode": "11412",
            "Population": "41350"
        },
        {
            "Zipcode": "11413",
            "Population": "45072"
        },
        {
            "Zipcode": "11414",
            "Population": "31090"
        },
        {
            "Zipcode": "11415",
            "Population": "21379"
        },
        {
            "Zipcode": "11416",
            "Population": "26660"
        },
        {
            "Zipcode": "11417",
            "Population": "30091"
        },
        {
            "Zipcode": "11418",
            "Population": "36304"
        },
        {
            "Zipcode": "11419",
            "Population": "46938"
        },
        {
            "Zipcode": "11420",
            "Population": "50060"
        },
        {
            "Zipcode": "11421",
            "Population": "41937"
        },
        {
            "Zipcode": "11422",
            "Population": "33085"
        },
        {
            "Zipcode": "11423",
            "Population": "29105"
        },
        {
            "Zipcode": "11424",
            "Population": "0"
        },
        {
            "Zipcode": "11426",
            "Population": "19638"
        },
        {
            "Zipcode": "11427",
            "Population": "25124"
        },
        {
            "Zipcode": "11428",
            "Population": "18898"
        },
        {
            "Zipcode": "11429",
            "Population": "27933"
        },
        {
            "Zipcode": "11430",
            "Population": "448"
        },
        {
            "Zipcode": "11432",
            "Population": "63730"
        },
        {
            "Zipcode": "11433",
            "Population": "37777"
        },
        {
            "Zipcode": "11434",
            "Population": "67611"
        },
        {
            "Zipcode": "11435",
            "Population": "58424"
        },
        {
            "Zipcode": "11436",
            "Population": "21364"
        },
        {
            "Zipcode": "11439",
            "Population": "2171"
        },
        {
            "Zipcode": "11451",
            "Population": "0"
        },
        {
            "Zipcode": "11501",
            "Population": "21590"
        },
        {
            "Zipcode": "11507",
            "Population": "6581"
        },
        {
            "Zipcode": "11509",
            "Population": "1747"
        },
        {
            "Zipcode": "11510",
            "Population": "34814"
        },
        {
            "Zipcode": "11514",
            "Population": "4421"
        },
        {
            "Zipcode": "11516",
            "Population": "8733"
        },
        {
            "Zipcode": "11518",
            "Population": "10390"
        },
        {
            "Zipcode": "11520",
            "Population": "44873"
        },
        {
            "Zipcode": "11530",
            "Population": "28041"
        },
        {
            "Zipcode": "11542",
            "Population": "29020"
        },
        {
            "Zipcode": "11545",
            "Population": "11963"
        },
        {
            "Zipcode": "11547",
            "Population": "788"
        },
        {
            "Zipcode": "11548",
            "Population": "2171"
        },
        {
            "Zipcode": "11549",
            "Population": "2420"
        },
        {
            "Zipcode": "11550",
            "Population": "60658"
        },
        {
            "Zipcode": "11552",
            "Population": "26053"
        },
        {
            "Zipcode": "11553",
            "Population": "28344"
        },
        {
            "Zipcode": "11554",
            "Population": "35806"
        },
        {
            "Zipcode": "11556",
            "Population": "0"
        },
        {
            "Zipcode": "11557",
            "Population": "8503"
        },
        {
            "Zipcode": "11558",
            "Population": "8532"
        },
        {
            "Zipcode": "11559",
            "Population": "9130"
        },
        {
            "Zipcode": "11560",
            "Population": "6951"
        },
        {
            "Zipcode": "11561",
            "Population": "38847"
        },
        {
            "Zipcode": "11563",
            "Population": "22558"
        },
        {
            "Zipcode": "11565",
            "Population": "8908"
        },
        {
            "Zipcode": "11566",
            "Population": "35172"
        },
        {
            "Zipcode": "11568",
            "Population": "4198"
        },
        {
            "Zipcode": "11569",
            "Population": "996"
        },
        {
            "Zipcode": "11570",
            "Population": "28162"
        },
        {
            "Zipcode": "11572",
            "Population": "30627"
        },
        {
            "Zipcode": "11575",
            "Population": "19430"
        },
        {
            "Zipcode": "11576",
            "Population": "12796"
        },
        {
            "Zipcode": "11577",
            "Population": "12771"
        },
        {
            "Zipcode": "11579",
            "Population": "5037"
        },
        {
            "Zipcode": "11580",
            "Population": "42644"
        },
        {
            "Zipcode": "11581",
            "Population": "22652"
        },
        {
            "Zipcode": "11590",
            "Population": "48243"
        },
        {
            "Zipcode": "11596",
            "Population": "10378"
        },
        {
            "Zipcode": "11598",
            "Population": "14316"
        },
        {
            "Zipcode": "11691",
            "Population": "68704"
        },
        {
            "Zipcode": "11692",
            "Population": "23247"
        },
        {
            "Zipcode": "11693",
            "Population": "13066"
        },
        {
            "Zipcode": "11694",
            "Population": "21430"
        },
        {
            "Zipcode": "11697",
            "Population": "4123"
        },
        {
            "Zipcode": "11701",
            "Population": "28174"
        },
        {
            "Zipcode": "11702",
            "Population": "14002"
        },
        {
            "Zipcode": "11703",
            "Population": "17205"
        },
        {
            "Zipcode": "11704",
            "Population": "40285"
        },
        {
            "Zipcode": "11705",
            "Population": "8256"
        },
        {
            "Zipcode": "11706",
            "Population": "68648"
        },
        {
            "Zipcode": "11709",
            "Population": "6744"
        },
        {
            "Zipcode": "11710",
            "Population": "34459"
        },
        {
            "Zipcode": "11713",
            "Population": "9236"
        },
        {
            "Zipcode": "11714",
            "Population": "22475"
        },
        {
            "Zipcode": "11715",
            "Population": "3796"
        },
        {
            "Zipcode": "11716",
            "Population": "9750"
        },
        {
            "Zipcode": "11717",
            "Population": ""
        },
        {
            "Zipcode": "11718",
            "Population": "3185"
        },
        {
            "Zipcode": "11719",
            "Population": "3300"
        },
        {
            "Zipcode": "11720",
            "Population": "28669"
        },
        {
            "Zipcode": "11721",
            "Population": "6620"
        },
        {
            "Zipcode": "11722",
            "Population": "38443"
        },
        {
            "Zipcode": "11724",
            "Population": "2956"
        },
        {
            "Zipcode": "11725",
            "Population": "29050"
        },
        {
            "Zipcode": "11726",
            "Population": "21940"
        },
        {
            "Zipcode": "11727",
            "Population": "29393"
        },
        {
            "Zipcode": "11729",
            "Population": "26647"
        },
        {
            "Zipcode": "11730",
            "Population": "14376"
        },
        {
            "Zipcode": "11731",
            "Population": "29891"
        },
        {
            "Zipcode": "11732",
            "Population": "3546"
        },
        {
            "Zipcode": "11733",
            "Population": "17403"
        },
        {
            "Zipcode": "11735",
            "Population": "32778"
        },
        {
            "Zipcode": "11738",
            "Population": "20246"
        },
        {
            "Zipcode": "11739",
            "Population": "1191"
        },
        {
            "Zipcode": "11740",
            "Population": "10699"
        },
        {
            "Zipcode": "11741",
            "Population": "26356"
        },
        {
            "Zipcode": "11742",
            "Population": "13194"
        },
        {
            "Zipcode": "11743",
            "Population": "42423"
        },
        {
            "Zipcode": "11746",
            "Population": "66883"
        },
        {
            "Zipcode": "11747",
            "Population": "19826"
        },
        {
            "Zipcode": "11749",
            "Population": "3581"
        },
        {
            "Zipcode": "11751",
            "Population": "13152"
        },
        {
            "Zipcode": "11752",
            "Population": "8990"
        },
        {
            "Zipcode": "11753",
            "Population": "12729"
        },
        {
            "Zipcode": "11754",
            "Population": "17660"
        },
        {
            "Zipcode": "11755",
            "Population": "11953"
        },
        {
            "Zipcode": "11756",
            "Population": "42553"
        },
        {
            "Zipcode": "11757",
            "Population": "44571"
        },
        {
            "Zipcode": "11758",
            "Population": "54741"
        },
        {
            "Zipcode": "11762",
            "Population": "22447"
        },
        {
            "Zipcode": "11763",
            "Population": "30235"
        },
        {
            "Zipcode": "11764",
            "Population": "12530"
        },
        {
            "Zipcode": "11765",
            "Population": "808"
        },
        {
            "Zipcode": "11766",
            "Population": "11481"
        },
        {
            "Zipcode": "11767",
            "Population": "14495"
        },
        {
            "Zipcode": "11768",
            "Population": "21908"
        },
        {
            "Zipcode": "11769",
            "Population": "9031"
        },
        {
            "Zipcode": "11770",
            "Population": "124"
        },
        {
            "Zipcode": "11771",
            "Population": "10173"
        },
        {
            "Zipcode": "11772",
            "Population": "45006"
        },
        {
            "Zipcode": "11776",
            "Population": "23629"
        },
        {
            "Zipcode": "11777",
            "Population": "9347"
        },
        {
            "Zipcode": "11778",
            "Population": "12919"
        },
        {
            "Zipcode": "11779",
            "Population": "38273"
        },
        {
            "Zipcode": "11780",
            "Population": "15586"
        },
        {
            "Zipcode": "11782",
            "Population": "14537"
        },
        {
            "Zipcode": "11783",
            "Population": "21588"
        },
        {
            "Zipcode": "11784",
            "Population": "25986"
        },
        {
            "Zipcode": "11786",
            "Population": "6348"
        },
        {
            "Zipcode": "11787",
            "Population": "34656"
        },
        {
            "Zipcode": "11788",
            "Population": "17092"
        },
        {
            "Zipcode": "11789",
            "Population": "7447"
        },
        {
            "Zipcode": "11790",
            "Population": "19934"
        },
        {
            "Zipcode": "11791",
            "Population": "25194"
        },
        {
            "Zipcode": "11792",
            "Population": "8562"
        },
        {
            "Zipcode": "11793",
            "Population": "31497"
        },
        {
            "Zipcode": "11794",
            "Population": "1519"
        },
        {
            "Zipcode": "11795",
            "Population": "25063"
        },
        {
            "Zipcode": "11796",
            "Population": "3715"
        },
        {
            "Zipcode": "11797",
            "Population": "9338"
        },
        {
            "Zipcode": "11798",
            "Population": ""
        },
        {
            "Zipcode": "11801",
            "Population": "41792"
        },
        {
            "Zipcode": "11803",
            "Population": "30219"
        },
        {
            "Zipcode": "11804",
            "Population": "4613"
        },
        {
            "Zipcode": "11901",
            "Population": "32921"
        },
        {
            "Zipcode": "11930",
            "Population": "689"
        },
        {
            "Zipcode": "11931",
            "Population": "24"
        },
        {
            "Zipcode": "11932",
            "Population": "696"
        },
        {
            "Zipcode": "11933",
            "Population": "6784"
        },
        {
            "Zipcode": "11934",
            "Population": "8222"
        },
        {
            "Zipcode": "11935",
            "Population": "2946"
        },
        {
            "Zipcode": "11937",
            "Population": "21806"
        },
        {
            "Zipcode": "11939",
            "Population": "1741"
        },
        {
            "Zipcode": "11940",
            "Population": "5508"
        },
        {
            "Zipcode": "11941",
            "Population": "2472"
        },
        {
            "Zipcode": "11942",
            "Population": "5871"
        },
        {
            "Zipcode": "11944",
            "Population": "4744"
        },
        {
            "Zipcode": "11946",
            "Population": "17303"
        },
        {
            "Zipcode": "11947",
            "Population": "248"
        },
        {
            "Zipcode": "11948",
            "Population": "775"
        },
        {
            "Zipcode": "11949",
            "Population": "13159"
        },
        {
            "Zipcode": "11950",
            "Population": "16944"
        },
        {
            "Zipcode": "11951",
            "Population": "15830"
        },
        {
            "Zipcode": "11952",
            "Population": "4749"
        },
        {
            "Zipcode": "11953",
            "Population": "13383"
        },
        {
            "Zipcode": "11954",
            "Population": "4073"
        },
        {
            "Zipcode": "11955",
            "Population": "2626"
        },
        {
            "Zipcode": "11956",
            "Population": "293"
        },
        {
            "Zipcode": "11957",
            "Population": "1152"
        },
        {
            "Zipcode": "11958",
            "Population": "864"
        },
        {
            "Zipcode": "11959",
            "Population": "576"
        },
        {
            "Zipcode": "11960",
            "Population": "1037"
        },
        {
            "Zipcode": "11961",
            "Population": "12436"
        },
        {
            "Zipcode": "11962",
            "Population": "546"
        },
        {
            "Zipcode": "11963",
            "Population": "8114"
        },
        {
            "Zipcode": "11964",
            "Population": "2858"
        },
        {
            "Zipcode": "11965",
            "Population": "421"
        },
        {
            "Zipcode": "11967",
            "Population": "27266"
        },
        {
            "Zipcode": "11968",
            "Population": "14263"
        },
        {
            "Zipcode": "11970",
            "Population": "468"
        },
        {
            "Zipcode": "11971",
            "Population": "6507"
        },
        {
            "Zipcode": "11972",
            "Population": "309"
        },
        {
            "Zipcode": "11973",
            "Population": "42"
        },
        {
            "Zipcode": "11975",
            "Population": "423"
        },
        {
            "Zipcode": "11976",
            "Population": "2447"
        },
        {
            "Zipcode": "11977",
            "Population": "2782"
        },
        {
            "Zipcode": "11978",
            "Population": "4376"
        },
        {
            "Zipcode": "11980",
            "Population": "5138"
        },
        {
            "Zipcode": "12007",
            "Population": "314"
        },
        {
            "Zipcode": "12008",
            "Population": "610"
        },
        {
            "Zipcode": "12009",
            "Population": "8068"
        },
        {
            "Zipcode": "12010",
            "Population": "27339"
        },
        {
            "Zipcode": "12015",
            "Population": "4084"
        },
        {
            "Zipcode": "12017",
            "Population": "439"
        },
        {
            "Zipcode": "12018",
            "Population": "7069"
        },
        {
            "Zipcode": "12019",
            "Population": "15683"
        },
        {
            "Zipcode": "12020",
            "Population": "34140"
        },
        {
            "Zipcode": "12022",
            "Population": "1069"
        },
        {
            "Zipcode": "12023",
            "Population": "2364"
        },
        {
            "Zipcode": "12024",
            "Population": "80"
        },
        {
            "Zipcode": "12025",
            "Population": "5278"
        },
        {
            "Zipcode": "12027",
            "Population": "4706"
        },
        {
            "Zipcode": "12028",
            "Population": "1132"
        },
        {
            "Zipcode": "12029",
            "Population": "1017"
        },
        {
            "Zipcode": "12031",
            "Population": "224"
        },
        {
            "Zipcode": "12032",
            "Population": "710"
        },
        {
            "Zipcode": "12033",
            "Population": "7772"
        },
        {
            "Zipcode": "12035",
            "Population": "455"
        },
        {
            "Zipcode": "12036",
            "Population": "335"
        },
        {
            "Zipcode": "12037",
            "Population": "4045"
        },
        {
            "Zipcode": "12040",
            "Population": "29"
        },
        {
            "Zipcode": "12041",
            "Population": "353"
        },
        {
            "Zipcode": "12042",
            "Population": "286"
        },
        {
            "Zipcode": "12043",
            "Population": "7883"
        },
        {
            "Zipcode": "12045",
            "Population": "237"
        },
        {
            "Zipcode": "12046",
            "Population": "612"
        },
        {
            "Zipcode": "12047",
            "Population": "23406"
        },
        {
            "Zipcode": "12051",
            "Population": "5706"
        },
        {
            "Zipcode": "12052",
            "Population": "1931"
        },
        {
            "Zipcode": "12053",
            "Population": "4325"
        },
        {
            "Zipcode": "12054",
            "Population": "16988"
        },
        {
            "Zipcode": "12056",
            "Population": "1818"
        },
        {
            "Zipcode": "12057",
            "Population": "1966"
        },
        {
            "Zipcode": "12058",
            "Population": "1451"
        },
        {
            "Zipcode": "12059",
            "Population": "1531"
        },
        {
            "Zipcode": "12060",
            "Population": "1768"
        },
        {
            "Zipcode": "12061",
            "Population": "9778"
        },
        {
            "Zipcode": "12062",
            "Population": "1723"
        },
        {
            "Zipcode": "12063",
            "Population": "745"
        },
        {
            "Zipcode": "12064",
            "Population": "314"
        },
        {
            "Zipcode": "12065",
            "Population": "44726"
        },
        {
            "Zipcode": "12066",
            "Population": "1830"
        },
        {
            "Zipcode": "12067",
            "Population": "1250"
        },
        {
            "Zipcode": "12068",
            "Population": "2717"
        },
        {
            "Zipcode": "12069",
            "Population": "387"
        },
        {
            "Zipcode": "12070",
            "Population": "2404"
        },
        {
            "Zipcode": "12071",
            "Population": "221"
        },
        {
            "Zipcode": "12072",
            "Population": "3019"
        },
        {
            "Zipcode": "12074",
            "Population": "2833"
        },
        {
            "Zipcode": "12075",
            "Population": "3147"
        },
        {
            "Zipcode": "12076",
            "Population": "1316"
        },
        {
            "Zipcode": "12077",
            "Population": "6733"
        },
        {
            "Zipcode": "12078",
            "Population": "23087"
        },
        {
            "Zipcode": "12082",
            "Population": "3"
        },
        {
            "Zipcode": "12083",
            "Population": "3648"
        },
        {
            "Zipcode": "12084",
            "Population": "5054"
        },
        {
            "Zipcode": "12085",
            "Population": "309"
        },
        {
            "Zipcode": "12086",
            "Population": "1644"
        },
        {
            "Zipcode": "12087",
            "Population": "1678"
        },
        {
            "Zipcode": "12090",
            "Population": "5874"
        },
        {
            "Zipcode": "12092",
            "Population": "1423"
        },
        {
            "Zipcode": "12093",
            "Population": "1258"
        },
        {
            "Zipcode": "12094",
            "Population": "2560"
        },
        {
            "Zipcode": "12095",
            "Population": "12013"
        },
        {
            "Zipcode": "12106",
            "Population": "1963"
        },
        {
            "Zipcode": "12108",
            "Population": "396"
        },
        {
            "Zipcode": "12110",
            "Population": "19969"
        },
        {
            "Zipcode": "12115",
            "Population": "62"
        },
        {
            "Zipcode": "12116",
            "Population": "1533"
        },
        {
            "Zipcode": "12117",
            "Population": "2841"
        },
        {
            "Zipcode": "12118",
            "Population": "17056"
        },
        {
            "Zipcode": "12120",
            "Population": "596"
        },
        {
            "Zipcode": "12121",
            "Population": "2325"
        },
        {
            "Zipcode": "12122",
            "Population": "3555"
        },
        {
            "Zipcode": "12123",
            "Population": "4853"
        },
        {
            "Zipcode": "12124",
            "Population": "182"
        },
        {
            "Zipcode": "12125",
            "Population": "1147"
        },
        {
            "Zipcode": "12130",
            "Population": "305"
        },
        {
            "Zipcode": "12131",
            "Population": "209"
        },
        {
            "Zipcode": "12132",
            "Population": "129"
        },
        {
            "Zipcode": "12134",
            "Population": "4093"
        },
        {
            "Zipcode": "12136",
            "Population": "881"
        },
        {
            "Zipcode": "12137",
            "Population": "2347"
        },
        {
            "Zipcode": "12138",
            "Population": "2826"
        },
        {
            "Zipcode": "12139",
            "Population": "243"
        },
        {
            "Zipcode": "12140",
            "Population": "1526"
        },
        {
            "Zipcode": "12143",
            "Population": "5462"
        },
        {
            "Zipcode": "12144",
            "Population": "21631"
        },
        {
            "Zipcode": "12147",
            "Population": "508"
        },
        {
            "Zipcode": "12148",
            "Population": "4121"
        },
        {
            "Zipcode": "12149",
            "Population": "2176"
        },
        {
            "Zipcode": "12150",
            "Population": "665"
        },
        {
            "Zipcode": "12151",
            "Population": "986"
        },
        {
            "Zipcode": "12153",
            "Population": "751"
        },
        {
            "Zipcode": "12154",
            "Population": "2875"
        },
        {
            "Zipcode": "12155",
            "Population": "1812"
        },
        {
            "Zipcode": "12156",
            "Population": "939"
        },
        {
            "Zipcode": "12157",
            "Population": "4444"
        },
        {
            "Zipcode": "12158",
            "Population": "6221"
        },
        {
            "Zipcode": "12159",
            "Population": "8794"
        },
        {
            "Zipcode": "12160",
            "Population": "735"
        },
        {
            "Zipcode": "12161",
            "Population": "41"
        },
        {
            "Zipcode": "12164",
            "Population": "520"
        },
        {
            "Zipcode": "12165",
            "Population": "202"
        },
        {
            "Zipcode": "12166",
            "Population": "1459"
        },
        {
            "Zipcode": "12167",
            "Population": "2257"
        },
        {
            "Zipcode": "12168",
            "Population": "1691"
        },
        {
            "Zipcode": "12169",
            "Population": "407"
        },
        {
            "Zipcode": "12170",
            "Population": "5225"
        },
        {
            "Zipcode": "12172",
            "Population": "184"
        },
        {
            "Zipcode": "12173",
            "Population": "2040"
        },
        {
            "Zipcode": "12174",
            "Population": "571"
        },
        {
            "Zipcode": "12175",
            "Population": "725"
        },
        {
            "Zipcode": "12176",
            "Population": "431"
        },
        {
            "Zipcode": "12177",
            "Population": "361"
        },
        {
            "Zipcode": "12180",
            "Population": "54071"
        },
        {
            "Zipcode": "12182",
            "Population": "14273"
        },
        {
            "Zipcode": "12183",
            "Population": "2966"
        },
        {
            "Zipcode": "12184",
            "Population": "7547"
        },
        {
            "Zipcode": "12185",
            "Population": "1699"
        },
        {
            "Zipcode": "12186",
            "Population": "6608"
        },
        {
            "Zipcode": "12187",
            "Population": "739"
        },
        {
            "Zipcode": "12188",
            "Population": "11414"
        },
        {
            "Zipcode": "12189",
            "Population": "18205"
        },
        {
            "Zipcode": "12190",
            "Population": "683"
        },
        {
            "Zipcode": "12192",
            "Population": "1033"
        },
        {
            "Zipcode": "12193",
            "Population": "1829"
        },
        {
            "Zipcode": "12194",
            "Population": "213"
        },
        {
            "Zipcode": "12195",
            "Population": "155"
        },
        {
            "Zipcode": "12196",
            "Population": "3848"
        },
        {
            "Zipcode": "12197",
            "Population": "2275"
        },
        {
            "Zipcode": "12198",
            "Population": "7337"
        },
        {
            "Zipcode": "12202",
            "Population": "9500"
        },
        {
            "Zipcode": "12203",
            "Population": "30080"
        },
        {
            "Zipcode": "12204",
            "Population": "8423"
        },
        {
            "Zipcode": "12205",
            "Population": "25912"
        },
        {
            "Zipcode": "12206",
            "Population": "14592"
        },
        {
            "Zipcode": "12207",
            "Population": "2097"
        },
        {
            "Zipcode": "12208",
            "Population": "23936"
        },
        {
            "Zipcode": "12209",
            "Population": "10754"
        },
        {
            "Zipcode": "12210",
            "Population": "9725"
        },
        {
            "Zipcode": "12211",
            "Population": "13800"
        },
        {
            "Zipcode": "12222",
            "Population": "6494"
        },
        {
            "Zipcode": "12226",
            "Population": "0"
        },
        {
            "Zipcode": "12302",
            "Population": "27470"
        },
        {
            "Zipcode": "12303",
            "Population": "29989"
        },
        {
            "Zipcode": "12304",
            "Population": "22027"
        },
        {
            "Zipcode": "12305",
            "Population": "7764"
        },
        {
            "Zipcode": "12306",
            "Population": "27569"
        },
        {
            "Zipcode": "12307",
            "Population": "7977"
        },
        {
            "Zipcode": "12308",
            "Population": "13985"
        },
        {
            "Zipcode": "12309",
            "Population": "32996"
        },
        {
            "Zipcode": "12401",
            "Population": "35058"
        },
        {
            "Zipcode": "12404",
            "Population": "4046"
        },
        {
            "Zipcode": "12405",
            "Population": "449"
        },
        {
            "Zipcode": "12406",
            "Population": "609"
        },
        {
            "Zipcode": "12407",
            "Population": "197"
        },
        {
            "Zipcode": "12409",
            "Population": "877"
        },
        {
            "Zipcode": "12410",
            "Population": "379"
        },
        {
            "Zipcode": "12411",
            "Population": "288"
        },
        {
            "Zipcode": "12412",
            "Population": "603"
        },
        {
            "Zipcode": "12413",
            "Population": "3406"
        },
        {
            "Zipcode": "12414",
            "Population": "10034"
        },
        {
            "Zipcode": "12416",
            "Population": "129"
        },
        {
            "Zipcode": "12417",
            "Population": "984"
        },
        {
            "Zipcode": "12418",
            "Population": "321"
        },
        {
            "Zipcode": "12419",
            "Population": "1115"
        },
        {
            "Zipcode": "12420",
            "Population": "435"
        },
        {
            "Zipcode": "12421",
            "Population": "238"
        },
        {
            "Zipcode": "12422",
            "Population": "469"
        },
        {
            "Zipcode": "12423",
            "Population": "1033"
        },
        {
            "Zipcode": "12424",
            "Population": "242"
        },
        {
            "Zipcode": "12427",
            "Population": "926"
        },
        {
            "Zipcode": "12428",
            "Population": "6972"
        },
        {
            "Zipcode": "12429",
            "Population": "168"
        },
        {
            "Zipcode": "12430",
            "Population": "1232"
        },
        {
            "Zipcode": "12431",
            "Population": "1705"
        },
        {
            "Zipcode": "12432",
            "Population": "654"
        },
        {
            "Zipcode": "12433",
            "Population": "525"
        },
        {
            "Zipcode": "12434",
            "Population": "892"
        },
        {
            "Zipcode": "12435",
            "Population": "181"
        },
        {
            "Zipcode": "12436",
            "Population": "516"
        },
        {
            "Zipcode": "12438",
            "Population": "71"
        },
        {
            "Zipcode": "12439",
            "Population": "380"
        },
        {
            "Zipcode": "12440",
            "Population": "1577"
        },
        {
            "Zipcode": "12441",
            "Population": "58"
        },
        {
            "Zipcode": "12442",
            "Population": "425"
        },
        {
            "Zipcode": "12443",
            "Population": "3601"
        },
        {
            "Zipcode": "12444",
            "Population": "519"
        },
        {
            "Zipcode": "12446",
            "Population": "5232"
        },
        {
            "Zipcode": "12448",
            "Population": "163"
        },
        {
            "Zipcode": "12449",
            "Population": "2916"
        },
        {
            "Zipcode": "12450",
            "Population": "200"
        },
        {
            "Zipcode": "12451",
            "Population": "849"
        },
        {
            "Zipcode": "12452",
            "Population": "33"
        },
        {
            "Zipcode": "12453",
            "Population": "212"
        },
        {
            "Zipcode": "12454",
            "Population": "368"
        },
        {
            "Zipcode": "12455",
            "Population": "1859"
        },
        {
            "Zipcode": "12456",
            "Population": "666"
        },
        {
            "Zipcode": "12457",
            "Population": "1171"
        },
        {
            "Zipcode": "12458",
            "Population": "3195"
        },
        {
            "Zipcode": "12459",
            "Population": "73"
        },
        {
            "Zipcode": "12460",
            "Population": "161"
        },
        {
            "Zipcode": "12461",
            "Population": "1426"
        },
        {
            "Zipcode": "12463",
            "Population": "1531"
        },
        {
            "Zipcode": "12464",
            "Population": "1071"
        },
        {
            "Zipcode": "12465",
            "Population": "329"
        },
        {
            "Zipcode": "12466",
            "Population": "1947"
        },
        {
            "Zipcode": "12468",
            "Population": "1413"
        },
        {
            "Zipcode": "12469",
            "Population": "842"
        },
        {
            "Zipcode": "12470",
            "Population": "651"
        },
        {
            "Zipcode": "12471",
            "Population": "274"
        },
        {
            "Zipcode": "12472",
            "Population": "1118"
        },
        {
            "Zipcode": "12473",
            "Population": "693"
        },
        {
            "Zipcode": "12474",
            "Population": "891"
        },
        {
            "Zipcode": "12475",
            "Population": "569"
        },
        {
            "Zipcode": "12477",
            "Population": "18789"
        },
        {
            "Zipcode": "12480",
            "Population": "499"
        },
        {
            "Zipcode": "12481",
            "Population": "1359"
        },
        {
            "Zipcode": "12482",
            "Population": "601"
        },
        {
            "Zipcode": "12483",
            "Population": "59"
        },
        {
            "Zipcode": "12484",
            "Population": "3271"
        },
        {
            "Zipcode": "12485",
            "Population": "1136"
        },
        {
            "Zipcode": "12486",
            "Population": "1737"
        },
        {
            "Zipcode": "12487",
            "Population": "3829"
        },
        {
            "Zipcode": "12489",
            "Population": "114"
        },
        {
            "Zipcode": "12490",
            "Population": "0"
        },
        {
            "Zipcode": "12491",
            "Population": "2017"
        },
        {
            "Zipcode": "12492",
            "Population": "213"
        },
        {
            "Zipcode": "12493",
            "Population": "343"
        },
        {
            "Zipcode": "12494",
            "Population": "876"
        },
        {
            "Zipcode": "12495",
            "Population": "229"
        },
        {
            "Zipcode": "12496",
            "Population": "1241"
        },
        {
            "Zipcode": "12498",
            "Population": "4530"
        },
        {
            "Zipcode": "12501",
            "Population": "2374"
        },
        {
            "Zipcode": "12502",
            "Population": "1019"
        },
        {
            "Zipcode": "12503",
            "Population": "750"
        },
        {
            "Zipcode": "12504",
            "Population": "1057"
        },
        {
            "Zipcode": "12507",
            "Population": "279"
        },
        {
            "Zipcode": "12508",
            "Population": "19519"
        },
        {
            "Zipcode": "12512",
            "Population": "232"
        },
        {
            "Zipcode": "12513",
            "Population": "198"
        },
        {
            "Zipcode": "12514",
            "Population": "3120"
        },
        {
            "Zipcode": "12515",
            "Population": "1483"
        },
        {
            "Zipcode": "12516",
            "Population": "1748"
        },
        {
            "Zipcode": "12517",
            "Population": "270"
        },
        {
            "Zipcode": "12518",
            "Population": "5728"
        },
        {
            "Zipcode": "12520",
            "Population": "3088"
        },
        {
            "Zipcode": "12521",
            "Population": "1874"
        },
        {
            "Zipcode": "12522",
            "Population": "5074"
        },
        {
            "Zipcode": "12523",
            "Population": "2132"
        },
        {
            "Zipcode": "12524",
            "Population": "15079"
        },
        {
            "Zipcode": "12525",
            "Population": "1710"
        },
        {
            "Zipcode": "12526",
            "Population": "3427"
        },
        {
            "Zipcode": "12527",
            "Population": "42"
        },
        {
            "Zipcode": "12528",
            "Population": "13818"
        },
        {
            "Zipcode": "12529",
            "Population": "2345"
        },
        {
            "Zipcode": "12530",
            "Population": "218"
        },
        {
            "Zipcode": "12531",
            "Population": "2316"
        },
        {
            "Zipcode": "12533",
            "Population": "26770"
        },
        {
            "Zipcode": "12534",
            "Population": "17468"
        },
        {
            "Zipcode": "12538",
            "Population": "14104"
        },
        {
            "Zipcode": "12540",
            "Population": "9314"
        },
        {
            "Zipcode": "12542",
            "Population": "5859"
        },
        {
            "Zipcode": "12543",
            "Population": "3147"
        },
        {
            "Zipcode": "12544",
            "Population": "54"
        },
        {
            "Zipcode": "12545",
            "Population": "4389"
        },
        {
            "Zipcode": "12546",
            "Population": "2710"
        },
        {
            "Zipcode": "12547",
            "Population": "2808"
        },
        {
            "Zipcode": "12548",
            "Population": "1039"
        },
        {
            "Zipcode": "12549",
            "Population": "10896"
        },
        {
            "Zipcode": "12550",
            "Population": "54996"
        },
        {
            "Zipcode": "12553",
            "Population": "27300"
        },
        {
            "Zipcode": "12561",
            "Population": "18531"
        },
        {
            "Zipcode": "12563",
            "Population": "7456"
        },
        {
            "Zipcode": "12564",
            "Population": "7910"
        },
        {
            "Zipcode": "12565",
            "Population": "1575"
        },
        {
            "Zipcode": "12566",
            "Population": "11718"
        },
        {
            "Zipcode": "12567",
            "Population": "2498"
        },
        {
            "Zipcode": "12569",
            "Population": "9766"
        },
        {
            "Zipcode": "12570",
            "Population": "6324"
        },
        {
            "Zipcode": "12571",
            "Population": "10168"
        },
        {
            "Zipcode": "12572",
            "Population": "9168"
        },
        {
            "Zipcode": "12574",
            "Population": "422"
        },
        {
            "Zipcode": "12575",
            "Population": "1743"
        },
        {
            "Zipcode": "12577",
            "Population": "1613"
        },
        {
            "Zipcode": "12578",
            "Population": "2306"
        },
        {
            "Zipcode": "12580",
            "Population": "4169"
        },
        {
            "Zipcode": "12581",
            "Population": "1928"
        },
        {
            "Zipcode": "12582",
            "Population": "6157"
        },
        {
            "Zipcode": "12583",
            "Population": "1927"
        },
        {
            "Zipcode": "12585",
            "Population": "1252"
        },
        {
            "Zipcode": "12586",
            "Population": "12874"
        },
        {
            "Zipcode": "12589",
            "Population": "19639"
        },
        {
            "Zipcode": "12590",
            "Population": "35823"
        },
        {
            "Zipcode": "12592",
            "Population": "1280"
        },
        {
            "Zipcode": "12594",
            "Population": "3645"
        },
        {
            "Zipcode": "12601",
            "Population": "44696"
        },
        {
            "Zipcode": "12603",
            "Population": "41513"
        },
        {
            "Zipcode": "12604",
            "Population": "2118"
        },
        {
            "Zipcode": "12701",
            "Population": "12191"
        },
        {
            "Zipcode": "12719",
            "Population": "892"
        },
        {
            "Zipcode": "12720",
            "Population": "434"
        },
        {
            "Zipcode": "12721",
            "Population": "7590"
        },
        {
            "Zipcode": "12722",
            "Population": "0"
        },
        {
            "Zipcode": "12723",
            "Population": "1854"
        },
        {
            "Zipcode": "12724",
            "Population": "77"
        },
        {
            "Zipcode": "12725",
            "Population": "318"
        },
        {
            "Zipcode": "12726",
            "Population": "1169"
        },
        {
            "Zipcode": "12729",
            "Population": "1307"
        },
        {
            "Zipcode": "12732",
            "Population": "810"
        },
        {
            "Zipcode": "12733",
            "Population": "1891"
        },
        {
            "Zipcode": "12734",
            "Population": "563"
        },
        {
            "Zipcode": "12736",
            "Population": "149"
        },
        {
            "Zipcode": "12737",
            "Population": "1817"
        },
        {
            "Zipcode": "12738",
            "Population": "444"
        },
        {
            "Zipcode": "12740",
            "Population": "1683"
        },
        {
            "Zipcode": "12741",
            "Population": "309"
        },
        {
            "Zipcode": "12742",
            "Population": "132"
        },
        {
            "Zipcode": "12743",
            "Population": "319"
        },
        {
            "Zipcode": "12745",
            "Population": "6"
        },
        {
            "Zipcode": "12746",
            "Population": "598"
        },
        {
            "Zipcode": "12747",
            "Population": "2036"
        },
        {
            "Zipcode": "12748",
            "Population": "1616"
        },
        {
            "Zipcode": "12749",
            "Population": "507"
        },
        {
            "Zipcode": "12750",
            "Population": "33"
        },
        {
            "Zipcode": "12751",
            "Population": "1340"
        },
        {
            "Zipcode": "12752",
            "Population": "301"
        },
        {
            "Zipcode": "12754",
            "Population": "8525"
        },
        {
            "Zipcode": "12758",
            "Population": "4061"
        },
        {
            "Zipcode": "12759",
            "Population": "1835"
        },
        {
            "Zipcode": "12760",
            "Population": "337"
        },
        {
            "Zipcode": "12762",
            "Population": "453"
        },
        {
            "Zipcode": "12763",
            "Population": "615"
        },
        {
            "Zipcode": "12764",
            "Population": "1827"
        },
        {
            "Zipcode": "12765",
            "Population": "653"
        },
        {
            "Zipcode": "12766",
            "Population": "524"
        },
        {
            "Zipcode": "12767",
            "Population": "180"
        },
        {
            "Zipcode": "12768",
            "Population": "805"
        },
        {
            "Zipcode": "12769",
            "Population": "382"
        },
        {
            "Zipcode": "12770",
            "Population": "241"
        },
        {
            "Zipcode": "12771",
            "Population": "14345"
        },
        {
            "Zipcode": "12775",
            "Population": "2661"
        },
        {
            "Zipcode": "12776",
            "Population": "2046"
        },
        {
            "Zipcode": "12777",
            "Population": "791"
        },
        {
            "Zipcode": "12778",
            "Population": "456"
        },
        {
            "Zipcode": "12779",
            "Population": "2207"
        },
        {
            "Zipcode": "12780",
            "Population": "2245"
        },
        {
            "Zipcode": "12781",
            "Population": "138"
        },
        {
            "Zipcode": "12783",
            "Population": "1357"
        },
        {
            "Zipcode": "12784",
            "Population": "0"
        },
        {
            "Zipcode": "12785",
            "Population": "968"
        },
        {
            "Zipcode": "12786",
            "Population": "553"
        },
        {
            "Zipcode": "12787",
            "Population": "131"
        },
        {
            "Zipcode": "12788",
            "Population": "3122"
        },
        {
            "Zipcode": "12789",
            "Population": "2654"
        },
        {
            "Zipcode": "12790",
            "Population": "4341"
        },
        {
            "Zipcode": "12791",
            "Population": "589"
        },
        {
            "Zipcode": "12792",
            "Population": "171"
        },
        {
            "Zipcode": "12801",
            "Population": "14689"
        },
        {
            "Zipcode": "12803",
            "Population": "8915"
        },
        {
            "Zipcode": "12804",
            "Population": "28175"
        },
        {
            "Zipcode": "12808",
            "Population": "283"
        },
        {
            "Zipcode": "12809",
            "Population": "3639"
        },
        {
            "Zipcode": "12810",
            "Population": "488"
        },
        {
            "Zipcode": "12811",
            "Population": "177"
        },
        {
            "Zipcode": "12812",
            "Population": "265"
        },
        {
            "Zipcode": "12814",
            "Population": "1145"
        },
        {
            "Zipcode": "12815",
            "Population": "999"
        },
        {
            "Zipcode": "12816",
            "Population": "4692"
        },
        {
            "Zipcode": "12817",
            "Population": "2023"
        },
        {
            "Zipcode": "12819",
            "Population": "292"
        },
        {
            "Zipcode": "12820",
            "Population": "14"
        },
        {
            "Zipcode": "12821",
            "Population": "2228"
        },
        {
            "Zipcode": "12822",
            "Population": "6149"
        },
        {
            "Zipcode": "12823",
            "Population": "682"
        },
        {
            "Zipcode": "12824",
            "Population": "1022"
        },
        {
            "Zipcode": "12827",
            "Population": "3935"
        },
        {
            "Zipcode": "12828",
            "Population": "9775"
        },
        {
            "Zipcode": "12831",
            "Population": "17834"
        },
        {
            "Zipcode": "12832",
            "Population": "6395"
        },
        {
            "Zipcode": "12833",
            "Population": "5368"
        },
        {
            "Zipcode": "12834",
            "Population": "6137"
        },
        {
            "Zipcode": "12835",
            "Population": "2700"
        },
        {
            "Zipcode": "12836",
            "Population": "473"
        },
        {
            "Zipcode": "12837",
            "Population": "943"
        },
        {
            "Zipcode": "12838",
            "Population": "699"
        },
        {
            "Zipcode": "12839",
            "Population": "13618"
        },
        {
            "Zipcode": "12841",
            "Population": "87"
        },
        {
            "Zipcode": "12842",
            "Population": "952"
        },
        {
            "Zipcode": "12843",
            "Population": "729"
        },
        {
            "Zipcode": "12844",
            "Population": "207"
        },
        {
            "Zipcode": "12845",
            "Population": "4389"
        },
        {
            "Zipcode": "12846",
            "Population": "3007"
        },
        {
            "Zipcode": "12847",
            "Population": "667"
        },
        {
            "Zipcode": "12849",
            "Population": "398"
        },
        {
            "Zipcode": "12850",
            "Population": "2537"
        },
        {
            "Zipcode": "12851",
            "Population": "304"
        },
        {
            "Zipcode": "12852",
            "Population": "381"
        },
        {
            "Zipcode": "12853",
            "Population": "1384"
        },
        {
            "Zipcode": "12854",
            "Population": "98"
        },
        {
            "Zipcode": "12855",
            "Population": "198"
        },
        {
            "Zipcode": "12856",
            "Population": "300"
        },
        {
            "Zipcode": "12857",
            "Population": "613"
        },
        {
            "Zipcode": "12858",
            "Population": "167"
        },
        {
            "Zipcode": "12859",
            "Population": "1629"
        },
        {
            "Zipcode": "12860",
            "Population": "377"
        },
        {
            "Zipcode": "12861",
            "Population": "516"
        },
        {
            "Zipcode": "12862",
            "Population": "149"
        },
        {
            "Zipcode": "12863",
            "Population": "870"
        },
        {
            "Zipcode": "12864",
            "Population": "9"
        },
        {
            "Zipcode": "12865",
            "Population": "3353"
        },
        {
            "Zipcode": "12866",
            "Population": "39657"
        },
        {
            "Zipcode": "12870",
            "Population": "1770"
        },
        {
            "Zipcode": "12871",
            "Population": "3997"
        },
        {
            "Zipcode": "12872",
            "Population": "0"
        },
        {
            "Zipcode": "12873",
            "Population": "820"
        },
        {
            "Zipcode": "12874",
            "Population": "154"
        },
        {
            "Zipcode": "12878",
            "Population": "768"
        },
        {
            "Zipcode": "12883",
            "Population": "4781"
        },
        {
            "Zipcode": "12884",
            "Population": "567"
        },
        {
            "Zipcode": "12885",
            "Population": "4531"
        },
        {
            "Zipcode": "12886",
            "Population": "199"
        },
        {
            "Zipcode": "12887",
            "Population": "4629"
        },
        {
            "Zipcode": "12901",
            "Population": "32012"
        },
        {
            "Zipcode": "12903",
            "Population": "1740"
        },
        {
            "Zipcode": "12910",
            "Population": "1994"
        },
        {
            "Zipcode": "12911",
            "Population": "44"
        },
        {
            "Zipcode": "12912",
            "Population": "1860"
        },
        {
            "Zipcode": "12913",
            "Population": "1128"
        },
        {
            "Zipcode": "12914",
            "Population": "892"
        },
        {
            "Zipcode": "12915",
            "Population": "61"
        },
        {
            "Zipcode": "12916",
            "Population": "2250"
        },
        {
            "Zipcode": "12917",
            "Population": "1194"
        },
        {
            "Zipcode": "12918",
            "Population": "2762"
        },
        {
            "Zipcode": "12919",
            "Population": "2789"
        },
        {
            "Zipcode": "12920",
            "Population": "2509"
        },
        {
            "Zipcode": "12921",
            "Population": "2771"
        },
        {
            "Zipcode": "12922",
            "Population": "33"
        },
        {
            "Zipcode": "12923",
            "Population": "463"
        },
        {
            "Zipcode": "12924",
            "Population": "230"
        },
        {
            "Zipcode": "12926",
            "Population": "2493"
        },
        {
            "Zipcode": "12927",
            "Population": "308"
        },
        {
            "Zipcode": "12928",
            "Population": "1805"
        },
        {
            "Zipcode": "12929",
            "Population": "2882"
        },
        {
            "Zipcode": "12930",
            "Population": "866"
        },
        {
            "Zipcode": "12932",
            "Population": "1183"
        },
        {
            "Zipcode": "12933",
            "Population": "7"
        },
        {
            "Zipcode": "12934",
            "Population": "1147"
        },
        {
            "Zipcode": "12935",
            "Population": "1159"
        },
        {
            "Zipcode": "12936",
            "Population": "693"
        },
        {
            "Zipcode": "12937",
            "Population": "1340"
        },
        {
            "Zipcode": "12939",
            "Population": "162"
        },
        {
            "Zipcode": "12941",
            "Population": "1477"
        },
        {
            "Zipcode": "12942",
            "Population": "462"
        },
        {
            "Zipcode": "12943",
            "Population": "293"
        },
        {
            "Zipcode": "12944",
            "Population": "4043"
        },
        {
            "Zipcode": "12945",
            "Population": "535"
        },
        {
            "Zipcode": "12946",
            "Population": "4805"
        },
        {
            "Zipcode": "12950",
            "Population": "701"
        },
        {
            "Zipcode": "12952",
            "Population": "226"
        },
        {
            "Zipcode": "12953",
            "Population": "12842"
        },
        {
            "Zipcode": "12955",
            "Population": "494"
        },
        {
            "Zipcode": "12956",
            "Population": "1538"
        },
        {
            "Zipcode": "12957",
            "Population": "1721"
        },
        {
            "Zipcode": "12958",
            "Population": "1650"
        },
        {
            "Zipcode": "12959",
            "Population": "1790"
        },
        {
            "Zipcode": "12960",
            "Population": "995"
        },
        {
            "Zipcode": "12961",
            "Population": "92"
        },
        {
            "Zipcode": "12962",
            "Population": "5131"
        },
        {
            "Zipcode": "12964",
            "Population": "46"
        },
        {
            "Zipcode": "12965",
            "Population": "281"
        },
        {
            "Zipcode": "12966",
            "Population": "2962"
        },
        {
            "Zipcode": "12967",
            "Population": "1363"
        },
        {
            "Zipcode": "12969",
            "Population": "253"
        },
        {
            "Zipcode": "12970",
            "Population": "1022"
        },
        {
            "Zipcode": "12972",
            "Population": "7063"
        },
        {
            "Zipcode": "12973",
            "Population": "136"
        },
        {
            "Zipcode": "12974",
            "Population": "1545"
        },
        {
            "Zipcode": "12975",
            "Population": "107"
        },
        {
            "Zipcode": "12976",
            "Population": "196"
        },
        {
            "Zipcode": "12977",
            "Population": "1186"
        },
        {
            "Zipcode": "12978",
            "Population": "243"
        },
        {
            "Zipcode": "12979",
            "Population": "2542"
        },
        {
            "Zipcode": "12980",
            "Population": "1064"
        },
        {
            "Zipcode": "12981",
            "Population": "2233"
        },
        {
            "Zipcode": "12983",
            "Population": "7410"
        },
        {
            "Zipcode": "12985",
            "Population": "775"
        },
        {
            "Zipcode": "12986",
            "Population": "5304"
        },
        {
            "Zipcode": "12987",
            "Population": "188"
        },
        {
            "Zipcode": "12989",
            "Population": "1012"
        },
        {
            "Zipcode": "12992",
            "Population": "4129"
        },
        {
            "Zipcode": "12993",
            "Population": "1730"
        },
        {
            "Zipcode": "12996",
            "Population": "1937"
        },
        {
            "Zipcode": "12997",
            "Population": "1280"
        },
        {
            "Zipcode": "12998",
            "Population": "334"
        },
        {
            "Zipcode": "13020",
            "Population": "117"
        },
        {
            "Zipcode": "13021",
            "Population": "37479"
        },
        {
            "Zipcode": "13024",
            "Population": "1209"
        },
        {
            "Zipcode": "13026",
            "Population": "1703"
        },
        {
            "Zipcode": "13027",
            "Population": "35233"
        },
        {
            "Zipcode": "13028",
            "Population": "913"
        },
        {
            "Zipcode": "13029",
            "Population": "7594"
        },
        {
            "Zipcode": "13030",
            "Population": "3611"
        },
        {
            "Zipcode": "13031",
            "Population": "16076"
        },
        {
            "Zipcode": "13032",
            "Population": "12964"
        },
        {
            "Zipcode": "13033",
            "Population": "3660"
        },
        {
            "Zipcode": "13034",
            "Population": "2088"
        },
        {
            "Zipcode": "13035",
            "Population": "8191"
        },
        {
            "Zipcode": "13036",
            "Population": "9079"
        },
        {
            "Zipcode": "13037",
            "Population": "9519"
        },
        {
            "Zipcode": "13039",
            "Population": "17184"
        },
        {
            "Zipcode": "13040",
            "Population": "2683"
        },
        {
            "Zipcode": "13041",
            "Population": "12094"
        },
        {
            "Zipcode": "13042",
            "Population": "1884"
        },
        {
            "Zipcode": "13044",
            "Population": "2884"
        },
        {
            "Zipcode": "13045",
            "Population": "28388"
        },
        {
            "Zipcode": "13051",
            "Population": "52"
        },
        {
            "Zipcode": "13052",
            "Population": "1762"
        },
        {
            "Zipcode": "13053",
            "Population": "4756"
        },
        {
            "Zipcode": "13054",
            "Population": "1289"
        },
        {
            "Zipcode": "13057",
            "Population": "14476"
        },
        {
            "Zipcode": "13060",
            "Population": "2845"
        },
        {
            "Zipcode": "13061",
            "Population": "641"
        },
        {
            "Zipcode": "13062",
            "Population": "241"
        },
        {
            "Zipcode": "13063",
            "Population": "1644"
        },
        {
            "Zipcode": "13065",
            "Population": "131"
        },
        {
            "Zipcode": "13066",
            "Population": "12680"
        },
        {
            "Zipcode": "13068",
            "Population": "4464"
        },
        {
            "Zipcode": "13069",
            "Population": "23176"
        },
        {
            "Zipcode": "13071",
            "Population": "760"
        },
        {
            "Zipcode": "13072",
            "Population": "811"
        },
        {
            "Zipcode": "13073",
            "Population": "6246"
        },
        {
            "Zipcode": "13074",
            "Population": "4471"
        },
        {
            "Zipcode": "13076",
            "Population": "2521"
        },
        {
            "Zipcode": "13077",
            "Population": "6567"
        },
        {
            "Zipcode": "13078",
            "Population": "10564"
        },
        {
            "Zipcode": "13080",
            "Population": "3282"
        },
        {
            "Zipcode": "13081",
            "Population": "1094"
        },
        {
            "Zipcode": "13082",
            "Population": "4177"
        },
        {
            "Zipcode": "13083",
            "Population": "1861"
        },
        {
            "Zipcode": "13084",
            "Population": "3764"
        },
        {
            "Zipcode": "13087",
            "Population": "252"
        },
        {
            "Zipcode": "13088",
            "Population": "21875"
        },
        {
            "Zipcode": "13090",
            "Population": "29180"
        },
        {
            "Zipcode": "13092",
            "Population": "2707"
        },
        {
            "Zipcode": "13101",
            "Population": "2221"
        },
        {
            "Zipcode": "13102",
            "Population": "67"
        },
        {
            "Zipcode": "13103",
            "Population": "239"
        },
        {
            "Zipcode": "13104",
            "Population": "16504"
        },
        {
            "Zipcode": "13108",
            "Population": "6144"
        },
        {
            "Zipcode": "13110",
            "Population": "2374"
        },
        {
            "Zipcode": "13111",
            "Population": "1660"
        },
        {
            "Zipcode": "13112",
            "Population": "1827"
        },
        {
            "Zipcode": "13113",
            "Population": "41"
        },
        {
            "Zipcode": "13114",
            "Population": "7313"
        },
        {
            "Zipcode": "13115",
            "Population": "223"
        },
        {
            "Zipcode": "13116",
            "Population": "3657"
        },
        {
            "Zipcode": "13117",
            "Population": "211"
        },
        {
            "Zipcode": "13118",
            "Population": "5514"
        },
        {
            "Zipcode": "13119",
            "Population": "0"
        },
        {
            "Zipcode": "13120",
            "Population": "1881"
        },
        {
            "Zipcode": "13121",
            "Population": "0"
        },
        {
            "Zipcode": "13122",
            "Population": "1289"
        },
        {
            "Zipcode": "13123",
            "Population": "35"
        },
        {
            "Zipcode": "13124",
            "Population": "95"
        },
        {
            "Zipcode": "13126",
            "Population": "36199"
        },
        {
            "Zipcode": "13131",
            "Population": "2856"
        },
        {
            "Zipcode": "13132",
            "Population": "3561"
        },
        {
            "Zipcode": "13134",
            "Population": "129"
        },
        {
            "Zipcode": "13135",
            "Population": "6229"
        },
        {
            "Zipcode": "13136",
            "Population": "377"
        },
        {
            "Zipcode": "13138",
            "Population": "209"
        },
        {
            "Zipcode": "13140",
            "Population": "4192"
        },
        {
            "Zipcode": "13141",
            "Population": "643"
        },
        {
            "Zipcode": "13142",
            "Population": "6568"
        },
        {
            "Zipcode": "13143",
            "Population": "2405"
        },
        {
            "Zipcode": "13144",
            "Population": "1105"
        },
        {
            "Zipcode": "13145",
            "Population": "1794"
        },
        {
            "Zipcode": "13146",
            "Population": "2050"
        },
        {
            "Zipcode": "13147",
            "Population": "1043"
        },
        {
            "Zipcode": "13148",
            "Population": "10798"
        },
        {
            "Zipcode": "13152",
            "Population": "7548"
        },
        {
            "Zipcode": "13153",
            "Population": "510"
        },
        {
            "Zipcode": "13154",
            "Population": "38"
        },
        {
            "Zipcode": "13155",
            "Population": "654"
        },
        {
            "Zipcode": "13156",
            "Population": "2108"
        },
        {
            "Zipcode": "13157",
            "Population": "547"
        },
        {
            "Zipcode": "13158",
            "Population": "1377"
        },
        {
            "Zipcode": "13159",
            "Population": "5297"
        },
        {
            "Zipcode": "13160",
            "Population": "2321"
        },
        {
            "Zipcode": "13162",
            "Population": "150"
        },
        {
            "Zipcode": "13163",
            "Population": "334"
        },
        {
            "Zipcode": "13164",
            "Population": "2695"
        },
        {
            "Zipcode": "13165",
            "Population": "9429"
        },
        {
            "Zipcode": "13166",
            "Population": "5667"
        },
        {
            "Zipcode": "13167",
            "Population": "2984"
        },
        {
            "Zipcode": "13202",
            "Population": "6842"
        },
        {
            "Zipcode": "13203",
            "Population": "17387"
        },
        {
            "Zipcode": "13204",
            "Population": "19511"
        },
        {
            "Zipcode": "13205",
            "Population": "18562"
        },
        {
            "Zipcode": "13206",
            "Population": "16848"
        },
        {
            "Zipcode": "13207",
            "Population": "12383"
        },
        {
            "Zipcode": "13208",
            "Population": "22549"
        },
        {
            "Zipcode": "13209",
            "Population": "12995"
        },
        {
            "Zipcode": "13210",
            "Population": "19298"
        },
        {
            "Zipcode": "13211",
            "Population": "6155"
        },
        {
            "Zipcode": "13212",
            "Population": "20185"
        },
        {
            "Zipcode": "13214",
            "Population": "8713"
        },
        {
            "Zipcode": "13215",
            "Population": "14599"
        },
        {
            "Zipcode": "13219",
            "Population": "15546"
        },
        {
            "Zipcode": "13224",
            "Population": "8638"
        },
        {
            "Zipcode": "13244",
            "Population": "8816"
        },
        {
            "Zipcode": "13290",
            "Population": "0"
        },
        {
            "Zipcode": "13301",
            "Population": "113"
        },
        {
            "Zipcode": "13302",
            "Population": "1403"
        },
        {
            "Zipcode": "13303",
            "Population": "1455"
        },
        {
            "Zipcode": "13304",
            "Population": "1841"
        },
        {
            "Zipcode": "13305",
            "Population": "421"
        },
        {
            "Zipcode": "13308",
            "Population": "4239"
        },
        {
            "Zipcode": "13309",
            "Population": "5828"
        },
        {
            "Zipcode": "13310",
            "Population": "731"
        },
        {
            "Zipcode": "13312",
            "Population": "288"
        },
        {
            "Zipcode": "13313",
            "Population": "562"
        },
        {
            "Zipcode": "13314",
            "Population": "145"
        },
        {
            "Zipcode": "13315",
            "Population": "1239"
        },
        {
            "Zipcode": "13316",
            "Population": "5924"
        },
        {
            "Zipcode": "13317",
            "Population": "3970"
        },
        {
            "Zipcode": "13318",
            "Population": "982"
        },
        {
            "Zipcode": "13319",
            "Population": "434"
        },
        {
            "Zipcode": "13320",
            "Population": "2027"
        },
        {
            "Zipcode": "13321",
            "Population": "815"
        },
        {
            "Zipcode": "13322",
            "Population": "1059"
        },
        {
            "Zipcode": "13323",
            "Population": "11014"
        },
        {
            "Zipcode": "13324",
            "Population": "1714"
        },
        {
            "Zipcode": "13325",
            "Population": "882"
        },
        {
            "Zipcode": "13326",
            "Population": "4536"
        },
        {
            "Zipcode": "13327",
            "Population": "1956"
        },
        {
            "Zipcode": "13328",
            "Population": "1302"
        },
        {
            "Zipcode": "13329",
            "Population": "3326"
        },
        {
            "Zipcode": "13331",
            "Population": "175"
        },
        {
            "Zipcode": "13332",
            "Population": "2695"
        },
        {
            "Zipcode": "13333",
            "Population": "40"
        },
        {
            "Zipcode": "13334",
            "Population": "887"
        },
        {
            "Zipcode": "13335",
            "Population": "1388"
        },
        {
            "Zipcode": "13337",
            "Population": "690"
        },
        {
            "Zipcode": "13338",
            "Population": "1293"
        },
        {
            "Zipcode": "13339",
            "Population": "6131"
        },
        {
            "Zipcode": "13340",
            "Population": "7322"
        },
        {
            "Zipcode": "13342",
            "Population": "263"
        },
        {
            "Zipcode": "13343",
            "Population": "1543"
        },
        {
            "Zipcode": "13345",
            "Population": "184"
        },
        {
            "Zipcode": "13346",
            "Population": "6275"
        },
        {
            "Zipcode": "13348",
            "Population": "1529"
        },
        {
            "Zipcode": "13350",
            "Population": "9641"
        },
        {
            "Zipcode": "13352",
            "Population": "21"
        },
        {
            "Zipcode": "13353",
            "Population": "54"
        },
        {
            "Zipcode": "13354",
            "Population": "3124"
        },
        {
            "Zipcode": "13355",
            "Population": "883"
        },
        {
            "Zipcode": "13357",
            "Population": "10073"
        },
        {
            "Zipcode": "13360",
            "Population": "193"
        },
        {
            "Zipcode": "13361",
            "Population": "666"
        },
        {
            "Zipcode": "13363",
            "Population": "2290"
        },
        {
            "Zipcode": "13364",
            "Population": "359"
        },
        {
            "Zipcode": "13365",
            "Population": "8545"
        },
        {
            "Zipcode": "13367",
            "Population": "8786"
        },
        {
            "Zipcode": "13368",
            "Population": "1025"
        },
        {
            "Zipcode": "13402",
            "Population": "1295"
        },
        {
            "Zipcode": "13403",
            "Population": "7133"
        },
        {
            "Zipcode": "13404",
            "Population": "162"
        },
        {
            "Zipcode": "13406",
            "Population": "491"
        },
        {
            "Zipcode": "13407",
            "Population": "5125"
        },
        {
            "Zipcode": "13408",
            "Population": "3422"
        },
        {
            "Zipcode": "13409",
            "Population": "2123"
        },
        {
            "Zipcode": "13410",
            "Population": "575"
        },
        {
            "Zipcode": "13411",
            "Population": "2920"
        },
        {
            "Zipcode": "13413",
            "Population": "16940"
        },
        {
            "Zipcode": "13415",
            "Population": "92"
        },
        {
            "Zipcode": "13416",
            "Population": "2120"
        },
        {
            "Zipcode": "13417",
            "Population": "3012"
        },
        {
            "Zipcode": "13418",
            "Population": "186"
        },
        {
            "Zipcode": "13420",
            "Population": "890"
        },
        {
            "Zipcode": "13421",
            "Population": "12742"
        },
        {
            "Zipcode": "13424",
            "Population": "2285"
        },
        {
            "Zipcode": "13425",
            "Population": "1743"
        },
        {
            "Zipcode": "13428",
            "Population": "1470"
        },
        {
            "Zipcode": "13431",
            "Population": "1929"
        },
        {
            "Zipcode": "13433",
            "Population": "1708"
        },
        {
            "Zipcode": "13435",
            "Population": "337"
        },
        {
            "Zipcode": "13436",
            "Population": "107"
        },
        {
            "Zipcode": "13437",
            "Population": "254"
        },
        {
            "Zipcode": "13438",
            "Population": "3310"
        },
        {
            "Zipcode": "13439",
            "Population": "3667"
        },
        {
            "Zipcode": "13440",
            "Population": "41273"
        },
        {
            "Zipcode": "13441",
            "Population": "145"
        },
        {
            "Zipcode": "13450",
            "Population": "251"
        },
        {
            "Zipcode": "13452",
            "Population": "4850"
        },
        {
            "Zipcode": "13454",
            "Population": "754"
        },
        {
            "Zipcode": "13455",
            "Population": "71"
        },
        {
            "Zipcode": "13456",
            "Population": "4103"
        },
        {
            "Zipcode": "13457",
            "Population": "38"
        },
        {
            "Zipcode": "13459",
            "Population": "2034"
        },
        {
            "Zipcode": "13460",
            "Population": "4286"
        },
        {
            "Zipcode": "13461",
            "Population": "3046"
        },
        {
            "Zipcode": "13464",
            "Population": "1154"
        },
        {
            "Zipcode": "13468",
            "Population": "305"
        },
        {
            "Zipcode": "13469",
            "Population": "1107"
        },
        {
            "Zipcode": "13470",
            "Population": "771"
        },
        {
            "Zipcode": "13471",
            "Population": "2692"
        },
        {
            "Zipcode": "13472",
            "Population": "277"
        },
        {
            "Zipcode": "13473",
            "Population": "1060"
        },
        {
            "Zipcode": "13475",
            "Population": "49"
        },
        {
            "Zipcode": "13476",
            "Population": "2540"
        },
        {
            "Zipcode": "13477",
            "Population": "1468"
        },
        {
            "Zipcode": "13478",
            "Population": "3331"
        },
        {
            "Zipcode": "13480",
            "Population": "3454"
        },
        {
            "Zipcode": "13482",
            "Population": "73"
        },
        {
            "Zipcode": "13483",
            "Population": "405"
        },
        {
            "Zipcode": "13484",
            "Population": "103"
        },
        {
            "Zipcode": "13485",
            "Population": "1715"
        },
        {
            "Zipcode": "13486",
            "Population": "691"
        },
        {
            "Zipcode": "13488",
            "Population": "130"
        },
        {
            "Zipcode": "13489",
            "Population": "508"
        },
        {
            "Zipcode": "13490",
            "Population": "1346"
        },
        {
            "Zipcode": "13491",
            "Population": "3570"
        },
        {
            "Zipcode": "13492",
            "Population": "11233"
        },
        {
            "Zipcode": "13493",
            "Population": "2355"
        },
        {
            "Zipcode": "13494",
            "Population": "312"
        },
        {
            "Zipcode": "13495",
            "Population": "1889"
        },
        {
            "Zipcode": "13501",
            "Population": "40235"
        },
        {
            "Zipcode": "13502",
            "Population": "33241"
        },
        {
            "Zipcode": "13601",
            "Population": "37409"
        },
        {
            "Zipcode": "13602",
            "Population": "2700"
        },
        {
            "Zipcode": "13603",
            "Population": "13973"
        },
        {
            "Zipcode": "13605",
            "Population": "5106"
        },
        {
            "Zipcode": "13606",
            "Population": "2397"
        },
        {
            "Zipcode": "13607",
            "Population": "2061"
        },
        {
            "Zipcode": "13608",
            "Population": "1845"
        },
        {
            "Zipcode": "13611",
            "Population": "265"
        },
        {
            "Zipcode": "13612",
            "Population": "2940"
        },
        {
            "Zipcode": "13613",
            "Population": "2733"
        },
        {
            "Zipcode": "13614",
            "Population": "287"
        },
        {
            "Zipcode": "13615",
            "Population": "538"
        },
        {
            "Zipcode": "13616",
            "Population": "1560"
        },
        {
            "Zipcode": "13617",
            "Population": "12294"
        },
        {
            "Zipcode": "13618",
            "Population": "1696"
        },
        {
            "Zipcode": "13619",
            "Population": "10774"
        },
        {
            "Zipcode": "13620",
            "Population": "2150"
        },
        {
            "Zipcode": "13621",
            "Population": "683"
        },
        {
            "Zipcode": "13622",
            "Population": "2100"
        },
        {
            "Zipcode": "13623",
            "Population": "76"
        },
        {
            "Zipcode": "13624",
            "Population": "4438"
        },
        {
            "Zipcode": "13625",
            "Population": "1689"
        },
        {
            "Zipcode": "13626",
            "Population": "2322"
        },
        {
            "Zipcode": "13628",
            "Population": "185"
        },
        {
            "Zipcode": "13630",
            "Population": "1307"
        },
        {
            "Zipcode": "13632",
            "Population": "128"
        },
        {
            "Zipcode": "13633",
            "Population": "378"
        },
        {
            "Zipcode": "13634",
            "Population": "3866"
        },
        {
            "Zipcode": "13635",
            "Population": "1283"
        },
        {
            "Zipcode": "13636",
            "Population": "184"
        },
        {
            "Zipcode": "13637",
            "Population": "5280"
        },
        {
            "Zipcode": "13638",
            "Population": "172"
        },
        {
            "Zipcode": "13639",
            "Population": "23"
        },
        {
            "Zipcode": "13640",
            "Population": "305"
        },
        {
            "Zipcode": "13641",
            "Population": "69"
        },
        {
            "Zipcode": "13642",
            "Population": "9018"
        },
        {
            "Zipcode": "13643",
            "Population": "20"
        },
        {
            "Zipcode": "13645",
            "Population": "0"
        },
        {
            "Zipcode": "13646",
            "Population": "2373"
        },
        {
            "Zipcode": "13647",
            "Population": "159"
        },
        {
            "Zipcode": "13648",
            "Population": "2236"
        },
        {
            "Zipcode": "13649",
            "Population": "58"
        },
        {
            "Zipcode": "13650",
            "Population": "1268"
        },
        {
            "Zipcode": "13651",
            "Population": "127"
        },
        {
            "Zipcode": "13652",
            "Population": "1876"
        },
        {
            "Zipcode": "13654",
            "Population": "2370"
        },
        {
            "Zipcode": "13655",
            "Population": "3705"
        },
        {
            "Zipcode": "13656",
            "Population": "2945"
        },
        {
            "Zipcode": "13658",
            "Population": "2028"
        },
        {
            "Zipcode": "13659",
            "Population": "371"
        },
        {
            "Zipcode": "13660",
            "Population": "1953"
        },
        {
            "Zipcode": "13661",
            "Population": "2043"
        },
        {
            "Zipcode": "13662",
            "Population": "15737"
        },
        {
            "Zipcode": "13664",
            "Population": "401"
        },
        {
            "Zipcode": "13665",
            "Population": "686"
        },
        {
            "Zipcode": "13666",
            "Population": "236"
        },
        {
            "Zipcode": "13667",
            "Population": "3460"
        },
        {
            "Zipcode": "13668",
            "Population": "3313"
        },
        {
            "Zipcode": "13669",
            "Population": "15615"
        },
        {
            "Zipcode": "13670",
            "Population": "382"
        },
        {
            "Zipcode": "13672",
            "Population": "408"
        },
        {
            "Zipcode": "13673",
            "Population": "1983"
        },
        {
            "Zipcode": "13674",
            "Population": "154"
        },
        {
            "Zipcode": "13675",
            "Population": "51"
        },
        {
            "Zipcode": "13676",
            "Population": "13408"
        },
        {
            "Zipcode": "13678",
            "Population": "19"
        },
        {
            "Zipcode": "13679",
            "Population": "1169"
        },
        {
            "Zipcode": "13680",
            "Population": "1417"
        },
        {
            "Zipcode": "13681",
            "Population": "941"
        },
        {
            "Zipcode": "13682",
            "Population": "795"
        },
        {
            "Zipcode": "13683",
            "Population": "58"
        },
        {
            "Zipcode": "13684",
            "Population": "1105"
        },
        {
            "Zipcode": "13685",
            "Population": "2234"
        },
        {
            "Zipcode": "13687",
            "Population": "421"
        },
        {
            "Zipcode": "13690",
            "Population": "651"
        },
        {
            "Zipcode": "13691",
            "Population": "3172"
        },
        {
            "Zipcode": "13692",
            "Population": "216"
        },
        {
            "Zipcode": "13693",
            "Population": "315"
        },
        {
            "Zipcode": "13694",
            "Population": "1232"
        },
        {
            "Zipcode": "13695",
            "Population": "169"
        },
        {
            "Zipcode": "13696",
            "Population": "188"
        },
        {
            "Zipcode": "13697",
            "Population": "1951"
        },
        {
            "Zipcode": "13699",
            "Population": "2123"
        },
        {
            "Zipcode": "13730",
            "Population": "2763"
        },
        {
            "Zipcode": "13731",
            "Population": "1102"
        },
        {
            "Zipcode": "13732",
            "Population": "7438"
        },
        {
            "Zipcode": "13733",
            "Population": "5265"
        },
        {
            "Zipcode": "13734",
            "Population": "2243"
        },
        {
            "Zipcode": "13736",
            "Population": "1887"
        },
        {
            "Zipcode": "13738",
            "Population": "22"
        },
        {
            "Zipcode": "13739",
            "Population": "792"
        },
        {
            "Zipcode": "13740",
            "Population": "607"
        },
        {
            "Zipcode": "13743",
            "Population": "2893"
        },
        {
            "Zipcode": "13744",
            "Population": "1284"
        },
        {
            "Zipcode": "13746",
            "Population": "2432"
        },
        {
            "Zipcode": "13747",
            "Population": "0"
        },
        {
            "Zipcode": "13748",
            "Population": "3722"
        },
        {
            "Zipcode": "13750",
            "Population": "588"
        },
        {
            "Zipcode": "13751",
            "Population": "334"
        },
        {
            "Zipcode": "13752",
            "Population": "913"
        },
        {
            "Zipcode": "13753",
            "Population": "5629"
        },
        {
            "Zipcode": "13754",
            "Population": "2793"
        },
        {
            "Zipcode": "13755",
            "Population": "737"
        },
        {
            "Zipcode": "13756",
            "Population": "665"
        },
        {
            "Zipcode": "13757",
            "Population": "1121"
        },
        {
            "Zipcode": "13760",
            "Population": "42880"
        },
        {
            "Zipcode": "13774",
            "Population": "230"
        },
        {
            "Zipcode": "13775",
            "Population": "1839"
        },
        {
            "Zipcode": "13776",
            "Population": "395"
        },
        {
            "Zipcode": "13777",
            "Population": "445"
        },
        {
            "Zipcode": "13778",
            "Population": "5139"
        },
        {
            "Zipcode": "13780",
            "Population": "842"
        },
        {
            "Zipcode": "13782",
            "Population": "797"
        },
        {
            "Zipcode": "13783",
            "Population": "2200"
        },
        {
            "Zipcode": "13784",
            "Population": "383"
        },
        {
            "Zipcode": "13786",
            "Population": "440"
        },
        {
            "Zipcode": "13787",
            "Population": "3120"
        },
        {
            "Zipcode": "13788",
            "Population": "950"
        },
        {
            "Zipcode": "13790",
            "Population": "18560"
        },
        {
            "Zipcode": "13795",
            "Population": "3180"
        },
        {
            "Zipcode": "13796",
            "Population": "915"
        },
        {
            "Zipcode": "13797",
            "Population": "2105"
        },
        {
            "Zipcode": "13801",
            "Population": "1533"
        },
        {
            "Zipcode": "13802",
            "Population": "1206"
        },
        {
            "Zipcode": "13803",
            "Population": "3936"
        },
        {
            "Zipcode": "13804",
            "Population": "266"
        },
        {
            "Zipcode": "13806",
            "Population": "168"
        },
        {
            "Zipcode": "13807",
            "Population": "1260"
        },
        {
            "Zipcode": "13808",
            "Population": "1486"
        },
        {
            "Zipcode": "13809",
            "Population": "1688"
        },
        {
            "Zipcode": "13810",
            "Population": "1195"
        },
        {
            "Zipcode": "13811",
            "Population": "4102"
        },
        {
            "Zipcode": "13812",
            "Population": "2313"
        },
        {
            "Zipcode": "13813",
            "Population": "1148"
        },
        {
            "Zipcode": "13814",
            "Population": "28"
        },
        {
            "Zipcode": "13815",
            "Population": "12855"
        },
        {
            "Zipcode": "13820",
            "Population": "22954"
        },
        {
            "Zipcode": "13825",
            "Population": "2785"
        },
        {
            "Zipcode": "13826",
            "Population": "68"
        },
        {
            "Zipcode": "13827",
            "Population": "11713"
        },
        {
            "Zipcode": "13830",
            "Population": "4826"
        },
        {
            "Zipcode": "13832",
            "Population": "513"
        },
        {
            "Zipcode": "13833",
            "Population": "4176"
        },
        {
            "Zipcode": "13834",
            "Population": "108"
        },
        {
            "Zipcode": "13835",
            "Population": "1182"
        },
        {
            "Zipcode": "13838",
            "Population": "4185"
        },
        {
            "Zipcode": "13839",
            "Population": "1362"
        },
        {
            "Zipcode": "13841",
            "Population": "394"
        },
        {
            "Zipcode": "13842",
            "Population": "607"
        },
        {
            "Zipcode": "13843",
            "Population": "2014"
        },
        {
            "Zipcode": "13844",
            "Population": "543"
        },
        {
            "Zipcode": "13846",
            "Population": "259"
        },
        {
            "Zipcode": "13847",
            "Population": "15"
        },
        {
            "Zipcode": "13849",
            "Population": "4351"
        },
        {
            "Zipcode": "13850",
            "Population": "23675"
        },
        {
            "Zipcode": "13856",
            "Population": "5915"
        },
        {
            "Zipcode": "13859",
            "Population": "119"
        },
        {
            "Zipcode": "13860",
            "Population": "266"
        },
        {
            "Zipcode": "13861",
            "Population": "450"
        },
        {
            "Zipcode": "13862",
            "Population": "3667"
        },
        {
            "Zipcode": "13863",
            "Population": "430"
        },
        {
            "Zipcode": "13864",
            "Population": "1421"
        },
        {
            "Zipcode": "13865",
            "Population": "5823"
        },
        {
            "Zipcode": "13901",
            "Population": "19730"
        },
        {
            "Zipcode": "13902",
            "Population": "6921"
        },
        {
            "Zipcode": "13903",
            "Population": "17528"
        },
        {
            "Zipcode": "13904",
            "Population": "9138"
        },
        {
            "Zipcode": "13905",
            "Population": "28370"
        },
        {
            "Zipcode": "14001",
            "Population": "9122"
        },
        {
            "Zipcode": "14004",
            "Population": "11312"
        },
        {
            "Zipcode": "14005",
            "Population": "1788"
        },
        {
            "Zipcode": "14006",
            "Population": "9354"
        },
        {
            "Zipcode": "14008",
            "Population": "1484"
        },
        {
            "Zipcode": "14009",
            "Population": "5787"
        },
        {
            "Zipcode": "14011",
            "Population": "7382"
        },
        {
            "Zipcode": "14012",
            "Population": "2944"
        },
        {
            "Zipcode": "14013",
            "Population": "1612"
        },
        {
            "Zipcode": "14020",
            "Population": "22209"
        },
        {
            "Zipcode": "14024",
            "Population": "1606"
        },
        {
            "Zipcode": "14025",
            "Population": "3445"
        },
        {
            "Zipcode": "14026",
            "Population": "561"
        },
        {
            "Zipcode": "14027",
            "Population": "143"
        },
        {
            "Zipcode": "14028",
            "Population": "1377"
        },
        {
            "Zipcode": "14029",
            "Population": "31"
        },
        {
            "Zipcode": "14030",
            "Population": "2051"
        },
        {
            "Zipcode": "14031",
            "Population": "9741"
        },
        {
            "Zipcode": "14032",
            "Population": "10359"
        },
        {
            "Zipcode": "14033",
            "Population": "1412"
        },
        {
            "Zipcode": "14034",
            "Population": "2175"
        },
        {
            "Zipcode": "14035",
            "Population": "69"
        },
        {
            "Zipcode": "14036",
            "Population": "5745"
        },
        {
            "Zipcode": "14037",
            "Population": "923"
        },
        {
            "Zipcode": "14039",
            "Population": "101"
        },
        {
            "Zipcode": "14040",
            "Population": "1635"
        },
        {
            "Zipcode": "14041",
            "Population": "204"
        },
        {
            "Zipcode": "14042",
            "Population": "4207"
        },
        {
            "Zipcode": "14043",
            "Population": "24799"
        },
        {
            "Zipcode": "14047",
            "Population": "6072"
        },
        {
            "Zipcode": "14048",
            "Population": "14949"
        },
        {
            "Zipcode": "14051",
            "Population": "20333"
        },
        {
            "Zipcode": "14052",
            "Population": "17501"
        },
        {
            "Zipcode": "14054",
            "Population": "1359"
        },
        {
            "Zipcode": "14055",
            "Population": "1300"
        },
        {
            "Zipcode": "14056",
            "Population": "205"
        },
        {
            "Zipcode": "14057",
            "Population": "7632"
        },
        {
            "Zipcode": "14058",
            "Population": "2649"
        },
        {
            "Zipcode": "14059",
            "Population": "9413"
        },
        {
            "Zipcode": "14060",
            "Population": "346"
        },
        {
            "Zipcode": "14061",
            "Population": "101"
        },
        {
            "Zipcode": "14062",
            "Population": "3220"
        },
        {
            "Zipcode": "14063",
            "Population": "12722"
        },
        {
            "Zipcode": "14065",
            "Population": "1769"
        },
        {
            "Zipcode": "14066",
            "Population": "1004"
        },
        {
            "Zipcode": "14067",
            "Population": "4063"
        },
        {
            "Zipcode": "14068",
            "Population": "8504"
        },
        {
            "Zipcode": "14069",
            "Population": "492"
        },
        {
            "Zipcode": "14070",
            "Population": "5437"
        },
        {
            "Zipcode": "14072",
            "Population": "21441"
        },
        {
            "Zipcode": "14075",
            "Population": "44588"
        },
        {
            "Zipcode": "14080",
            "Population": "4434"
        },
        {
            "Zipcode": "14081",
            "Population": "2736"
        },
        {
            "Zipcode": "14082",
            "Population": "566"
        },
        {
            "Zipcode": "14083",
            "Population": "20"
        },
        {
            "Zipcode": "14085",
            "Population": "8439"
        },
        {
            "Zipcode": "14086",
            "Population": "35659"
        },
        {
            "Zipcode": "14091",
            "Population": "1402"
        },
        {
            "Zipcode": "14092",
            "Population": "10318"
        },
        {
            "Zipcode": "14094",
            "Population": "50526"
        },
        {
            "Zipcode": "14098",
            "Population": "2968"
        },
        {
            "Zipcode": "14101",
            "Population": "1984"
        },
        {
            "Zipcode": "14102",
            "Population": "1894"
        },
        {
            "Zipcode": "14103",
            "Population": "10836"
        },
        {
            "Zipcode": "14105",
            "Population": "5113"
        },
        {
            "Zipcode": "14108",
            "Population": "5301"
        },
        {
            "Zipcode": "14109",
            "Population": "1341"
        },
        {
            "Zipcode": "14111",
            "Population": "3125"
        },
        {
            "Zipcode": "14112",
            "Population": "38"
        },
        {
            "Zipcode": "14113",
            "Population": "646"
        },
        {
            "Zipcode": "14120",
            "Population": "44379"
        },
        {
            "Zipcode": "14125",
            "Population": "3668"
        },
        {
            "Zipcode": "14126",
            "Population": "301"
        },
        {
            "Zipcode": "14127",
            "Population": "30783"
        },
        {
            "Zipcode": "14129",
            "Population": "1228"
        },
        {
            "Zipcode": "14130",
            "Population": "110"
        },
        {
            "Zipcode": "14131",
            "Population": "5339"
        },
        {
            "Zipcode": "14132",
            "Population": "6432"
        },
        {
            "Zipcode": "14134",
            "Population": "57"
        },
        {
            "Zipcode": "14135",
            "Population": "109"
        },
        {
            "Zipcode": "14136",
            "Population": "5274"
        },
        {
            "Zipcode": "14138",
            "Population": "2019"
        },
        {
            "Zipcode": "14139",
            "Population": "2093"
        },
        {
            "Zipcode": "14141",
            "Population": "7624"
        },
        {
            "Zipcode": "14143",
            "Population": "1230"
        },
        {
            "Zipcode": "14145",
            "Population": "1275"
        },
        {
            "Zipcode": "14150",
            "Population": "41585"
        },
        {
            "Zipcode": "14166",
            "Population": "182"
        },
        {
            "Zipcode": "14167",
            "Population": "1931"
        },
        {
            "Zipcode": "14168",
            "Population": "90"
        },
        {
            "Zipcode": "14169",
            "Population": "84"
        },
        {
            "Zipcode": "14170",
            "Population": "2200"
        },
        {
            "Zipcode": "14171",
            "Population": "1736"
        },
        {
            "Zipcode": "14172",
            "Population": "3019"
        },
        {
            "Zipcode": "14173",
            "Population": "183"
        },
        {
            "Zipcode": "14174",
            "Population": "5768"
        },
        {
            "Zipcode": "14201",
            "Population": "12545"
        },
        {
            "Zipcode": "14202",
            "Population": "3764"
        },
        {
            "Zipcode": "14203",
            "Population": "2526"
        },
        {
            "Zipcode": "14204",
            "Population": "7748"
        },
        {
            "Zipcode": "14206",
            "Population": "22427"
        },
        {
            "Zipcode": "14207",
            "Population": "25731"
        },
        {
            "Zipcode": "14208",
            "Population": "12731"
        },
        {
            "Zipcode": "14209",
            "Population": "8373"
        },
        {
            "Zipcode": "14210",
            "Population": "15454"
        },
        {
            "Zipcode": "14211",
            "Population": "23951"
        },
        {
            "Zipcode": "14212",
            "Population": "13603"
        },
        {
            "Zipcode": "14213",
            "Population": "23072"
        },
        {
            "Zipcode": "14214",
            "Population": "21162"
        },
        {
            "Zipcode": "14215",
            "Population": "42813"
        },
        {
            "Zipcode": "14216",
            "Population": "23221"
        },
        {
            "Zipcode": "14217",
            "Population": "22566"
        },
        {
            "Zipcode": "14218",
            "Population": "20661"
        },
        {
            "Zipcode": "14219",
            "Population": "10894"
        },
        {
            "Zipcode": "14220",
            "Population": "23786"
        },
        {
            "Zipcode": "14221",
            "Population": "55153"
        },
        {
            "Zipcode": "14222",
            "Population": "15440"
        },
        {
            "Zipcode": "14223",
            "Population": "22363"
        },
        {
            "Zipcode": "14224",
            "Population": "41101"
        },
        {
            "Zipcode": "14225",
            "Population": "33801"
        },
        {
            "Zipcode": "14226",
            "Population": "29482"
        },
        {
            "Zipcode": "14227",
            "Population": "21669"
        },
        {
            "Zipcode": "14228",
            "Population": "24345"
        },
        {
            "Zipcode": "14260",
            "Population": "857"
        },
        {
            "Zipcode": "14261",
            "Population": "4970"
        },
        {
            "Zipcode": "14301",
            "Population": "11448"
        },
        {
            "Zipcode": "14302",
            "Population": "209"
        },
        {
            "Zipcode": "14303",
            "Population": "6210"
        },
        {
            "Zipcode": "14304",
            "Population": "28965"
        },
        {
            "Zipcode": "14305",
            "Population": "16433"
        },
        {
            "Zipcode": "14411",
            "Population": "12479"
        },
        {
            "Zipcode": "14413",
            "Population": "81"
        },
        {
            "Zipcode": "14414",
            "Population": "6722"
        },
        {
            "Zipcode": "14415",
            "Population": "132"
        },
        {
            "Zipcode": "14416",
            "Population": "3908"
        },
        {
            "Zipcode": "14418",
            "Population": "1147"
        },
        {
            "Zipcode": "14420",
            "Population": "20097"
        },
        {
            "Zipcode": "14422",
            "Population": "1693"
        },
        {
            "Zipcode": "14423",
            "Population": "4829"
        },
        {
            "Zipcode": "14424",
            "Population": "28851"
        },
        {
            "Zipcode": "14425",
            "Population": "13582"
        },
        {
            "Zipcode": "14427",
            "Population": "1875"
        },
        {
            "Zipcode": "14428",
            "Population": "7986"
        },
        {
            "Zipcode": "14432",
            "Population": "5583"
        },
        {
            "Zipcode": "14433",
            "Population": "4319"
        },
        {
            "Zipcode": "14435",
            "Population": "2398"
        },
        {
            "Zipcode": "14437",
            "Population": "8970"
        },
        {
            "Zipcode": "14441",
            "Population": "339"
        },
        {
            "Zipcode": "14445",
            "Population": "7604"
        },
        {
            "Zipcode": "14450",
            "Population": "43063"
        },
        {
            "Zipcode": "14453",
            "Population": "0"
        },
        {
            "Zipcode": "14454",
            "Population": "11044"
        },
        {
            "Zipcode": "14456",
            "Population": "19864"
        },
        {
            "Zipcode": "14462",
            "Population": "765"
        },
        {
            "Zipcode": "14463",
            "Population": "258"
        },
        {
            "Zipcode": "14464",
            "Population": "6725"
        },
        {
            "Zipcode": "14466",
            "Population": "1656"
        },
        {
            "Zipcode": "14467",
            "Population": "10468"
        },
        {
            "Zipcode": "14468",
            "Population": "19119"
        },
        {
            "Zipcode": "14469",
            "Population": "5789"
        },
        {
            "Zipcode": "14470",
            "Population": "7765"
        },
        {
            "Zipcode": "14471",
            "Population": "2792"
        },
        {
            "Zipcode": "14472",
            "Population": "9156"
        },
        {
            "Zipcode": "14475",
            "Population": "253"
        },
        {
            "Zipcode": "14476",
            "Population": "2456"
        },
        {
            "Zipcode": "14477",
            "Population": "1779"
        },
        {
            "Zipcode": "14478",
            "Population": "1393"
        },
        {
            "Zipcode": "14479",
            "Population": "61"
        },
        {
            "Zipcode": "14480",
            "Population": "532"
        },
        {
            "Zipcode": "14481",
            "Population": "1883"
        },
        {
            "Zipcode": "14482",
            "Population": "8233"
        },
        {
            "Zipcode": "14485",
            "Population": "4163"
        },
        {
            "Zipcode": "14486",
            "Population": "374"
        },
        {
            "Zipcode": "14487",
            "Population": "5632"
        },
        {
            "Zipcode": "14489",
            "Population": "7016"
        },
        {
            "Zipcode": "14502",
            "Population": "10515"
        },
        {
            "Zipcode": "14504",
            "Population": "1655"
        },
        {
            "Zipcode": "14505",
            "Population": "5165"
        },
        {
            "Zipcode": "14506",
            "Population": "866"
        },
        {
            "Zipcode": "14507",
            "Population": "1233"
        },
        {
            "Zipcode": "14510",
            "Population": "4781"
        },
        {
            "Zipcode": "14511",
            "Population": "529"
        },
        {
            "Zipcode": "14512",
            "Population": "4908"
        },
        {
            "Zipcode": "14513",
            "Population": "13501"
        },
        {
            "Zipcode": "14514",
            "Population": "5979"
        },
        {
            "Zipcode": "14515",
            "Population": "146"
        },
        {
            "Zipcode": "14516",
            "Population": "2184"
        },
        {
            "Zipcode": "14517",
            "Population": "2588"
        },
        {
            "Zipcode": "14519",
            "Population": "12487"
        },
        {
            "Zipcode": "14521",
            "Population": "3282"
        },
        {
            "Zipcode": "14522",
            "Population": "9230"
        },
        {
            "Zipcode": "14525",
            "Population": "2532"
        },
        {
            "Zipcode": "14526",
            "Population": "19348"
        },
        {
            "Zipcode": "14527",
            "Population": "12444"
        },
        {
            "Zipcode": "14529",
            "Population": "76"
        },
        {
            "Zipcode": "14530",
            "Population": "6396"
        },
        {
            "Zipcode": "14532",
            "Population": "3933"
        },
        {
            "Zipcode": "14533",
            "Population": "1754"
        },
        {
            "Zipcode": "14534",
            "Population": "33361"
        },
        {
            "Zipcode": "14536",
            "Population": "663"
        },
        {
            "Zipcode": "14537",
            "Population": "217"
        },
        {
            "Zipcode": "14539",
            "Population": "115"
        },
        {
            "Zipcode": "14541",
            "Population": "3523"
        },
        {
            "Zipcode": "14542",
            "Population": "33"
        },
        {
            "Zipcode": "14543",
            "Population": "3301"
        },
        {
            "Zipcode": "14544",
            "Population": "2274"
        },
        {
            "Zipcode": "14545",
            "Population": "136"
        },
        {
            "Zipcode": "14546",
            "Population": "4585"
        },
        {
            "Zipcode": "14548",
            "Population": "3695"
        },
        {
            "Zipcode": "14549",
            "Population": "404"
        },
        {
            "Zipcode": "14550",
            "Population": "1273"
        },
        {
            "Zipcode": "14551",
            "Population": "4969"
        },
        {
            "Zipcode": "14555",
            "Population": "1206"
        },
        {
            "Zipcode": "14556",
            "Population": "902"
        },
        {
            "Zipcode": "14557",
            "Population": "139"
        },
        {
            "Zipcode": "14559",
            "Population": "17646"
        },
        {
            "Zipcode": "14560",
            "Population": "2392"
        },
        {
            "Zipcode": "14561",
            "Population": "2198"
        },
        {
            "Zipcode": "14564",
            "Population": "16257"
        },
        {
            "Zipcode": "14568",
            "Population": "6023"
        },
        {
            "Zipcode": "14569",
            "Population": "6372"
        },
        {
            "Zipcode": "14571",
            "Population": "1001"
        },
        {
            "Zipcode": "14572",
            "Population": "4745"
        },
        {
            "Zipcode": "14580",
            "Population": "54466"
        },
        {
            "Zipcode": "14585",
            "Population": "167"
        },
        {
            "Zipcode": "14586",
            "Population": "13056"
        },
        {
            "Zipcode": "14588",
            "Population": "0"
        },
        {
            "Zipcode": "14589",
            "Population": "7904"
        },
        {
            "Zipcode": "14590",
            "Population": "5264"
        },
        {
            "Zipcode": "14591",
            "Population": "1453"
        },
        {
            "Zipcode": "14592",
            "Population": "119"
        },
        {
            "Zipcode": "14604",
            "Population": "2708"
        },
        {
            "Zipcode": "14605",
            "Population": "11796"
        },
        {
            "Zipcode": "14606",
            "Population": "27478"
        },
        {
            "Zipcode": "14607",
            "Population": "17577"
        },
        {
            "Zipcode": "14608",
            "Population": "12417"
        },
        {
            "Zipcode": "14609",
            "Population": "40171"
        },
        {
            "Zipcode": "14610",
            "Population": "14082"
        },
        {
            "Zipcode": "14611",
            "Population": "17595"
        },
        {
            "Zipcode": "14612",
            "Population": "35339"
        },
        {
            "Zipcode": "14613",
            "Population": "14740"
        },
        {
            "Zipcode": "14614",
            "Population": "1112"
        },
        {
            "Zipcode": "14615",
            "Population": "18255"
        },
        {
            "Zipcode": "14616",
            "Population": "26837"
        },
        {
            "Zipcode": "14617",
            "Population": "21287"
        },
        {
            "Zipcode": "14618",
            "Population": "24621"
        },
        {
            "Zipcode": "14619",
            "Population": "14223"
        },
        {
            "Zipcode": "14620",
            "Population": "22866"
        },
        {
            "Zipcode": "14621",
            "Population": "33349"
        },
        {
            "Zipcode": "14622",
            "Population": "12794"
        },
        {
            "Zipcode": "14623",
            "Population": "25689"
        },
        {
            "Zipcode": "14624",
            "Population": "38834"
        },
        {
            "Zipcode": "14625",
            "Population": "10667"
        },
        {
            "Zipcode": "14626",
            "Population": "29210"
        },
        {
            "Zipcode": "14627",
            "Population": "3008"
        },
        {
            "Zipcode": "14642",
            "Population": "0"
        },
        {
            "Zipcode": "14701",
            "Population": "39207"
        },
        {
            "Zipcode": "14706",
            "Population": "6118"
        },
        {
            "Zipcode": "14707",
            "Population": "113"
        },
        {
            "Zipcode": "14708",
            "Population": "139"
        },
        {
            "Zipcode": "14709",
            "Population": "1190"
        },
        {
            "Zipcode": "14710",
            "Population": "2951"
        },
        {
            "Zipcode": "14711",
            "Population": "1861"
        },
        {
            "Zipcode": "14712",
            "Population": "3079"
        },
        {
            "Zipcode": "14714",
            "Population": "556"
        },
        {
            "Zipcode": "14715",
            "Population": "2374"
        },
        {
            "Zipcode": "14716",
            "Population": "2343"
        },
        {
            "Zipcode": "14717",
            "Population": "612"
        },
        {
            "Zipcode": "14718",
            "Population": "1961"
        },
        {
            "Zipcode": "14719",
            "Population": "3334"
        },
        {
            "Zipcode": "14720",
            "Population": "853"
        },
        {
            "Zipcode": "14721",
            "Population": "176"
        },
        {
            "Zipcode": "14722",
            "Population": "292"
        },
        {
            "Zipcode": "14723",
            "Population": "1060"
        },
        {
            "Zipcode": "14724",
            "Population": "3099"
        },
        {
            "Zipcode": "14726",
            "Population": "2681"
        },
        {
            "Zipcode": "14727",
            "Population": "5039"
        },
        {
            "Zipcode": "14728",
            "Population": "856"
        },
        {
            "Zipcode": "14729",
            "Population": "768"
        },
        {
            "Zipcode": "14731",
            "Population": "1198"
        },
        {
            "Zipcode": "14732",
            "Population": "26"
        },
        {
            "Zipcode": "14733",
            "Population": "3201"
        },
        {
            "Zipcode": "14735",
            "Population": "2609"
        },
        {
            "Zipcode": "14736",
            "Population": "210"
        },
        {
            "Zipcode": "14737",
            "Population": "4071"
        },
        {
            "Zipcode": "14738",
            "Population": "3550"
        },
        {
            "Zipcode": "14739",
            "Population": "2494"
        },
        {
            "Zipcode": "14740",
            "Population": "1283"
        },
        {
            "Zipcode": "14741",
            "Population": "1957"
        },
        {
            "Zipcode": "14742",
            "Population": "104"
        },
        {
            "Zipcode": "14743",
            "Population": "2095"
        },
        {
            "Zipcode": "14744",
            "Population": "2186"
        },
        {
            "Zipcode": "14747",
            "Population": "2035"
        },
        {
            "Zipcode": "14748",
            "Population": "481"
        },
        {
            "Zipcode": "14750",
            "Population": "4411"
        },
        {
            "Zipcode": "14752",
            "Population": "171"
        },
        {
            "Zipcode": "14753",
            "Population": "929"
        },
        {
            "Zipcode": "14754",
            "Population": "633"
        },
        {
            "Zipcode": "14755",
            "Population": "2834"
        },
        {
            "Zipcode": "14756",
            "Population": "0"
        },
        {
            "Zipcode": "14757",
            "Population": "3112"
        },
        {
            "Zipcode": "14760",
            "Population": "17272"
        },
        {
            "Zipcode": "14767",
            "Population": "2156"
        },
        {
            "Zipcode": "14769",
            "Population": "849"
        },
        {
            "Zipcode": "14770",
            "Population": "2805"
        },
        {
            "Zipcode": "14772",
            "Population": "4431"
        },
        {
            "Zipcode": "14774",
            "Population": "322"
        },
        {
            "Zipcode": "14775",
            "Population": "2272"
        },
        {
            "Zipcode": "14777",
            "Population": "531"
        },
        {
            "Zipcode": "14778",
            "Population": "1428"
        },
        {
            "Zipcode": "14779",
            "Population": "6791"
        },
        {
            "Zipcode": "14781",
            "Population": "1859"
        },
        {
            "Zipcode": "14782",
            "Population": "2010"
        },
        {
            "Zipcode": "14783",
            "Population": "83"
        },
        {
            "Zipcode": "14784",
            "Population": "950"
        },
        {
            "Zipcode": "14785",
            "Population": "0"
        },
        {
            "Zipcode": "14787",
            "Population": "4863"
        },
        {
            "Zipcode": "14788",
            "Population": "95"
        },
        {
            "Zipcode": "14801",
            "Population": "5415"
        },
        {
            "Zipcode": "14802",
            "Population": "4627"
        },
        {
            "Zipcode": "14803",
            "Population": "1491"
        },
        {
            "Zipcode": "14804",
            "Population": "1501"
        },
        {
            "Zipcode": "14805",
            "Population": "723"
        },
        {
            "Zipcode": "14806",
            "Population": "2131"
        },
        {
            "Zipcode": "14807",
            "Population": "2865"
        },
        {
            "Zipcode": "14808",
            "Population": "470"
        },
        {
            "Zipcode": "14809",
            "Population": "2921"
        },
        {
            "Zipcode": "14810",
            "Population": "11412"
        },
        {
            "Zipcode": "14812",
            "Population": "2961"
        },
        {
            "Zipcode": "14813",
            "Population": "2465"
        },
        {
            "Zipcode": "14814",
            "Population": "2047"
        },
        {
            "Zipcode": "14815",
            "Population": "725"
        },
        {
            "Zipcode": "14816",
            "Population": "502"
        },
        {
            "Zipcode": "14817",
            "Population": "2811"
        },
        {
            "Zipcode": "14818",
            "Population": "1819"
        },
        {
            "Zipcode": "14819",
            "Population": "633"
        },
        {
            "Zipcode": "14820",
            "Population": "556"
        },
        {
            "Zipcode": "14821",
            "Population": "3015"
        },
        {
            "Zipcode": "14822",
            "Population": "826"
        },
        {
            "Zipcode": "14823",
            "Population": "3697"
        },
        {
            "Zipcode": "14824",
            "Population": "778"
        },
        {
            "Zipcode": "14825",
            "Population": "746"
        },
        {
            "Zipcode": "14826",
            "Population": "2134"
        },
        {
            "Zipcode": "14827",
            "Population": "0"
        },
        {
            "Zipcode": "14830",
            "Population": "18752"
        },
        {
            "Zipcode": "14836",
            "Population": "915"
        },
        {
            "Zipcode": "14837",
            "Population": "5633"
        },
        {
            "Zipcode": "14838",
            "Population": "2150"
        },
        {
            "Zipcode": "14839",
            "Population": "553"
        },
        {
            "Zipcode": "14840",
            "Population": "2514"
        },
        {
            "Zipcode": "14841",
            "Population": "827"
        },
        {
            "Zipcode": "14842",
            "Population": "930"
        },
        {
            "Zipcode": "14843",
            "Population": "12452"
        },
        {
            "Zipcode": "14845",
            "Population": "20552"
        },
        {
            "Zipcode": "14846",
            "Population": "978"
        },
        {
            "Zipcode": "14847",
            "Population": "2385"
        },
        {
            "Zipcode": "14850",
            "Population": "66495"
        },
        {
            "Zipcode": "14853",
            "Population": "2294"
        },
        {
            "Zipcode": "14854",
            "Population": "99"
        },
        {
            "Zipcode": "14855",
            "Population": "890"
        },
        {
            "Zipcode": "14856",
            "Population": "0"
        },
        {
            "Zipcode": "14858",
            "Population": "1405"
        },
        {
            "Zipcode": "14859",
            "Population": "1100"
        },
        {
            "Zipcode": "14860",
            "Population": "1079"
        },
        {
            "Zipcode": "14861",
            "Population": "1356"
        },
        {
            "Zipcode": "14864",
            "Population": "1144"
        },
        {
            "Zipcode": "14865",
            "Population": "2578"
        },
        {
            "Zipcode": "14867",
            "Population": "5188"
        },
        {
            "Zipcode": "14869",
            "Population": "996"
        },
        {
            "Zipcode": "14870",
            "Population": "10086"
        },
        {
            "Zipcode": "14871",
            "Population": "4497"
        },
        {
            "Zipcode": "14872",
            "Population": "596"
        },
        {
            "Zipcode": "14873",
            "Population": "1937"
        },
        {
            "Zipcode": "14874",
            "Population": "166"
        },
        {
            "Zipcode": "14877",
            "Population": "680"
        },
        {
            "Zipcode": "14878",
            "Population": "793"
        },
        {
            "Zipcode": "14879",
            "Population": "2345"
        },
        {
            "Zipcode": "14880",
            "Population": "1475"
        },
        {
            "Zipcode": "14881",
            "Population": "159"
        },
        {
            "Zipcode": "14882",
            "Population": "4193"
        },
        {
            "Zipcode": "14883",
            "Population": "4525"
        },
        {
            "Zipcode": "14884",
            "Population": "363"
        },
        {
            "Zipcode": "14885",
            "Population": "659"
        },
        {
            "Zipcode": "14886",
            "Population": "6654"
        },
        {
            "Zipcode": "14889",
            "Population": "1341"
        },
        {
            "Zipcode": "14891",
            "Population": "4527"
        },
        {
            "Zipcode": "14892",
            "Population": "7531"
        },
        {
            "Zipcode": "14893",
            "Population": "30"
        },
        {
            "Zipcode": "14894",
            "Population": "1316"
        },
        {
            "Zipcode": "14895",
            "Population": "9117"
        },
        {
            "Zipcode": "14897",
            "Population": "770"
        },
        {
            "Zipcode": "14898",
            "Population": "1501"
        },
        {
            "Zipcode": "14901",
            "Population": "14430"
        },
        {
            "Zipcode": "14903",
            "Population": "7140"
        },
        {
            "Zipcode": "14904",
            "Population": "14276"
        },
        {
            "Zipcode": "14905",
            "Population": "8976"
        }
    ];