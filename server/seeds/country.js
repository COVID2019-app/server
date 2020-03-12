
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('country_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('country_table').insert([
        {
          "country_name": "China",
          "confirmed_cases": "80778",
          "deaths": "3158",
          "recovered": "61475",
          "severe_critical": "4492",
          "tested": "0",
          "active_cases": "16145"
        },
        {
          "country_name": "Thailand",
          "confirmed_cases": "59",
          "deaths": "1",
          "recovered": "31",
          "severe_critical": "1",
          "tested": "0",
          "active_cases": "27"
        },
        {
          "country_name": "Japan",
          "confirmed_cases": "634",
          "deaths": "15",
          "recovered": "118",
          "severe_critical": "26",
          "tested": "10024",
          "active_cases": "501"
        },
        {
          "country_name": "Diamond Princess",
          "confirmed_cases": "696",
          "deaths": "7",
          "recovered": "357",
          "severe_critical": "24",
          "tested": "0",
          "active_cases": "332"
        },
        {
          "country_name": "Korea, Republic of",
          "confirmed_cases": "7755",
          "deaths": "60",
          "recovered": "288",
          "severe_critical": "49",
          "tested": "222395",
          "active_cases": "7407"
        },
        {
          "country_name": "Taiwan",
          "confirmed_cases": "48",
          "deaths": "1",
          "recovered": "17",
          "severe_critical": "0",
          "tested": "10863",
          "active_cases": "30"
        },
        {
          "country_name": "United States of America",
          "confirmed_cases": "1158",
          "deaths": "34",
          "recovered": "8",
          "severe_critical": "7",
          "tested": "8554",
          "active_cases": "1116"
        },
        {
          "country_name": "Macau",
          "confirmed_cases": "10",
          "deaths": "0",
          "recovered": "10",
          "severe_critical": "0",
          "tested": "1620",
          "active_cases": "0"
        },
        {
          "country_name": "Hong Kong",
          "confirmed_cases": "126",
          "deaths": "3",
          "recovered": "67",
          "severe_critical": "5",
          "tested": "2432",
          "active_cases": "56"
        },
        {
          "country_name": "Singapore",
          "confirmed_cases": "178",
          "deaths": "0",
          "recovered": "96",
          "severe_critical": "9",
          "tested": "1364",
          "active_cases": "82"
        },
        {
          "country_name": "Vietnam",
          "confirmed_cases": "39",
          "deaths": "0",
          "recovered": "16",
          "severe_critical": "0",
          "tested": "2012",
          "active_cases": "23"
        },
        {
          "country_name": "Nepal",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "1",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "0"
        },
        {
          "country_name": "France",
          "confirmed_cases": "2281",
          "deaths": "48",
          "recovered": "12",
          "severe_critical": "9",
          "tested": "0",
          "active_cases": "2221"
        },
        {
          "country_name": "Australia",
          "confirmed_cases": "112",
          "deaths": "3",
          "recovered": "22",
          "severe_critical": "0",
          "tested": "7214",
          "active_cases": "87"
        },
        {
          "country_name": "Malaysia",
          "confirmed_cases": "149",
          "deaths": "0",
          "recovered": "24",
          "severe_critical": "2",
          "tested": "0",
          "active_cases": "125"
        },
        {
          "country_name": "Canada",
          "confirmed_cases": "102",
          "deaths": "1",
          "recovered": "8",
          "severe_critical": "1",
          "tested": "4146",
          "active_cases": "93"
        },
        {
          "country_name": "Sri Lanka",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "1",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "0"
        },
        {
          "country_name": "Germany",
          "confirmed_cases": "1966",
          "deaths": "3",
          "recovered": "25",
          "severe_critical": "2",
          "tested": "25000",
          "active_cases": "1938"
        },
        {
          "country_name": "United Arab Emirates",
          "confirmed_cases": "59",
          "deaths": "0",
          "recovered": "7",
          "severe_critical": "2",
          "tested": "0",
          "active_cases": "52"
        },
        {
          "country_name": "Finland",
          "confirmed_cases": "59",
          "deaths": "0",
          "recovered": "1",
          "severe_critical": "0",
          "tested": "600",
          "active_cases": "58"
        },
        {
          "country_name": "India",
          "confirmed_cases": "64",
          "deaths": "1",
          "recovered": "3",
          "severe_critical": "0",
          "tested": "3003",
          "active_cases": "60"
        },
        {
          "country_name": "Philippines",
          "confirmed_cases": "49",
          "deaths": "2",
          "recovered": "2",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "45"
        },
        {
          "country_name": "Cambodia",
          "confirmed_cases": "3",
          "deaths": "0",
          "recovered": "1",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "2"
        },
        {
          "country_name": "Italy",
          "confirmed_cases": "12462",
          "deaths": "827",
          "recovered": "1045",
          "severe_critical": "1028",
          "tested": "73154",
          "active_cases": "10590"
        },
        {
          "country_name": "United Kingdom",
          "confirmed_cases": "460",
          "deaths": "8",
          "recovered": "8",
          "severe_critical": "0",
          "tested": "27476",
          "active_cases": "444"
        },
        {
          "country_name": "Russia",
          "confirmed_cases": "28",
          "deaths": "0",
          "recovered": "2",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "26"
        },
        {
          "country_name": "Sweden",
          "confirmed_cases": "500",
          "deaths": "1",
          "recovered": "1",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "498"
        },
        {
          "country_name": "Spain",
          "confirmed_cases": "2277",
          "deaths": "54",
          "recovered": "183",
          "severe_critical": "11",
          "tested": "9",
          "active_cases": "2040"
        },
        {
          "country_name": "Belgium",
          "confirmed_cases": "314",
          "deaths": "1",
          "recovered": "1",
          "severe_critical": "0",
          "tested": "1707",
          "active_cases": "312"
        },
        {
          "country_name": "Egypt",
          "confirmed_cases": "59",
          "deaths": "1",
          "recovered": "1",
          "severe_critical": "0",
          "tested": "1835",
          "active_cases": "57"
        },
        {
          "country_name": "Iran",
          "confirmed_cases": "9000",
          "deaths": "354",
          "recovered": "2959",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "5687"
        },
        {
          "country_name": "Israel",
          "confirmed_cases": "76",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "76"
        },
        {
          "country_name": "Lebanon",
          "confirmed_cases": "61",
          "deaths": "2",
          "recovered": "1",
          "severe_critical": "2",
          "tested": "0",
          "active_cases": "58"
        },
        {
          "country_name": "Kuwait",
          "confirmed_cases": "72",
          "deaths": "0",
          "recovered": "2",
          "severe_critical": "5",
          "tested": "0",
          "active_cases": "70"
        },
        {
          "country_name": "Afghanistan",
          "confirmed_cases": "7",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "7"
        },
        {
          "country_name": "Bahrain",
          "confirmed_cases": "189",
          "deaths": "0",
          "recovered": "4",
          "severe_critical": "0",
          "tested": "7131",
          "active_cases": "185"
        },
        {
          "country_name": "Iraq",
          "confirmed_cases": "66",
          "deaths": "7",
          "recovered": "18",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "41"
        },
        {
          "country_name": "Oman",
          "confirmed_cases": "18",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "18"
        },
        {
          "country_name": "Austria",
          "confirmed_cases": "246",
          "deaths": "0",
          "recovered": "2",
          "severe_critical": "1",
          "tested": "5362",
          "active_cases": "244"
        },
        {
          "country_name": "Croatia",
          "confirmed_cases": "19",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "19"
        },
        {
          "country_name": "Switzerland",
          "confirmed_cases": "645",
          "deaths": "4",
          "recovered": "3",
          "severe_critical": "0",
          "tested": "4000",
          "active_cases": "638"
        },
        {
          "country_name": "Algeria",
          "confirmed_cases": "20",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "20"
        },
        {
          "country_name": "Brazil",
          "confirmed_cases": "52",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "52"
        },
        {
          "country_name": "Greece",
          "confirmed_cases": "102",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "3",
          "tested": "0",
          "active_cases": "102"
        },
        {
          "country_name": "Pakistan",
          "confirmed_cases": "18",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "18"
        },
        {
          "country_name": "North Macedonia",
          "confirmed_cases": "7",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "7"
        },
        {
          "country_name": "Georgia",
          "confirmed_cases": "15",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "15"
        },
        {
          "country_name": "Norway",
          "confirmed_cases": "629",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "2000",
          "active_cases": "629"
        },
        {
          "country_name": "Romania",
          "confirmed_cases": "47",
          "deaths": "0",
          "recovered": "6",
          "severe_critical": "0",
          "tested": "475",
          "active_cases": "41"
        },
        {
          "country_name": "Denmark",
          "confirmed_cases": "514",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "649",
          "active_cases": "514"
        },
        {
          "country_name": "Estonia",
          "confirmed_cases": "16",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "10",
          "active_cases": "16"
        },
        {
          "country_name": "Netherlands",
          "confirmed_cases": "503",
          "deaths": "4",
          "recovered": "0",
          "severe_critical": "1",
          "tested": "0",
          "active_cases": "499"
        },
        {
          "country_name": "San Marino",
          "confirmed_cases": "51",
          "deaths": "2",
          "recovered": "0",
          "severe_critical": "5",
          "tested": "92",
          "active_cases": "49"
        },
        {
          "country_name": "Nigeria",
          "confirmed_cases": "2",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "2"
        },
        {
          "country_name": "Lithuania",
          "confirmed_cases": "3",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "3"
        },
        {
          "country_name": "New Zealand",
          "confirmed_cases": "5",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "5"
        },
        {
          "country_name": "Belarus",
          "confirmed_cases": "12",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "12"
        },
        {
          "country_name": "Azerbaijan",
          "confirmed_cases": "8",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "8"
        },
        {
          "country_name": "Mexico",
          "confirmed_cases": "7",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "7"
        },
        {
          "country_name": "Iceland",
          "confirmed_cases": "81",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "81"
        },
        {
          "country_name": "Monaco",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "1"
        },
        {
          "country_name": "Qatar",
          "confirmed_cases": "262",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "3500",
          "active_cases": "262"
        },
        {
          "country_name": "Ecuador",
          "confirmed_cases": "17",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "17"
        },
        {
          "country_name": "Luxembourg",
          "confirmed_cases": "7",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "7"
        },
        {
          "country_name": "Ireland",
          "confirmed_cases": "43",
          "deaths": "1",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "397",
          "active_cases": "42"
        },
        {
          "country_name": "Czechia",
          "confirmed_cases": "91",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "1358",
          "active_cases": "91"
        },
        {
          "country_name": "Dominican Republic",
          "confirmed_cases": "2",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "2"
        },
        {
          "country_name": "Armenia",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "1"
        },
        {
          "country_name": "Indonesia",
          "confirmed_cases": "34",
          "deaths": "1",
          "recovered": "2",
          "severe_critical": "0",
          "tested": "793",
          "active_cases": "31"
        },
        {
          "country_name": "Andorra",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "1"
        },
        {
          "country_name": "Portugal",
          "confirmed_cases": "59",
          "deaths": "1",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "58"
        },
        {
          "country_name": "Jordan",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "1"
        },
        {
          "country_name": "Tunisia",
          "confirmed_cases": "2",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "2"
        },
        {
          "country_name": "Senegal",
          "confirmed_cases": "4",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "4"
        },
        {
          "country_name": "Latvia",
          "confirmed_cases": "5",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "224",
          "active_cases": "5"
        },
        {
          "country_name": "Saudi Arabia",
          "confirmed_cases": "44",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "44"
        },
        {
          "country_name": "Morocco",
          "confirmed_cases": "5",
          "deaths": "1",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "4"
        },
        {
          "country_name": "Ukraine",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "1"
        },
        {
          "country_name": "Argentina",
          "confirmed_cases": "19",
          "deaths": "1",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "18"
        },
        {
          "country_name": "Liechtenstein",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "1"
        },
        {
          "country_name": "Chile",
          "confirmed_cases": "23",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "23"
        },
        {
          "country_name": "Poland",
          "confirmed_cases": "31",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "1154",
          "active_cases": "31"
        },
        {
          "country_name": "Hungary",
          "confirmed_cases": "13",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "531",
          "active_cases": "13"
        },
        {
          "country_name": "Slovenia",
          "confirmed_cases": "47",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "1227",
          "active_cases": "47"
        },
        {
          "country_name": "Bosnia and Herzegovina",
          "confirmed_cases": "11",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "11"
        },
        {
          "country_name": "Palestine, State of",
          "confirmed_cases": "16",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "16"
        },
        {
          "country_name": "South Africa",
          "confirmed_cases": "13",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "300",
          "active_cases": "13"
        },
        {
          "country_name": "Vatican City",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "1"
        },
        {
          "country_name": "Cameroon",
          "confirmed_cases": "2",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "2"
        },
        {
          "country_name": "Bhutan",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "1"
        },
        {
          "country_name": "Serbia",
          "confirmed_cases": "12",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "12"
        },
        {
          "country_name": "Slovakia",
          "confirmed_cases": "10",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "306",
          "active_cases": "10"
        },
        { "country_name": "Togo", "confirmed_cases": "1", "deaths": "0", "recovered": "0", "severe_critical": "0", "tested": "0", "active_cases": "1" },
        {
          "country_name": "Colombia",
          "confirmed_cases": "9",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "9"
        },
        { "country_name": "Peru", "confirmed_cases": "7", "deaths": "0", "recovered": "0", "severe_critical": "0", "tested": "0", "active_cases": "7" },
        {
          "country_name": "Maldives",
          "confirmed_cases": "8",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "5",
          "active_cases": "8"
        },
        {
          "country_name": "Malta",
          "confirmed_cases": "6",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "6"
        },
        {
          "country_name": "Paraguay",
          "confirmed_cases": "5",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "1",
          "tested": "0",
          "active_cases": "5"
        },
        {
          "country_name": "Moldova",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "1"
        },
        {
          "country_name": "Costa Rica",
          "confirmed_cases": "9",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "9"
        },
        {
          "country_name": "Bangladesh",
          "confirmed_cases": "3",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "3"
        },
        {
          "country_name": "Bulgaria",
          "confirmed_cases": "6",
          "deaths": "1",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "70",
          "active_cases": "5"
        },
        {
          "country_name": "Albania",
          "confirmed_cases": "12",
          "deaths": "1",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "157",
          "active_cases": "11"
        },
        {
          "country_name": "Cyprus",
          "confirmed_cases": "6",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "6"
        },
        {
          "country_name": "Brunei",
          "confirmed_cases": "6",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "6"
        },
        {
          "country_name": "Mongolia",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "1"
        },
        {
          "country_name": "Panama",
          "confirmed_cases": "8",
          "deaths": "1",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "7"
        },
        {
          "country_name": "Congo (the Democratic Republic of the)",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "1"
        },
        {
          "country_name": "Burkina Faso",
          "confirmed_cases": "2",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "2"
        },
        {
          "country_name": "Jamaica",
          "confirmed_cases": "2",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "2"
        },
        {
          "country_name": "Turkey",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "1"
        },
        {
          "country_name": "Bolivia",
          "confirmed_cases": "2",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "2"
        },
        {
          "country_name": "Honduras",
          "confirmed_cases": "2",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "2"
        },
        {
          "country_name": "Côte d'Ivoire",
          "confirmed_cases": "1",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "0"
        },
        {
          "country_name": "French Polynesia",
          "confirmed_cases": "0",
          "deaths": "0",
          "recovered": "0",
          "severe_critical": "0",
          "tested": "0",
          "active_cases": "0"
        }
        
      ]);
    });
};
