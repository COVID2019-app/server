
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('state_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('state_table').insert([
        
          {
            
            "state_name": "Hubei",
            "country_id": 2,
            "last_update": "2020-03-21T10:13:08",
            "confirmed": 67800,
            "deaths": 3139,
            "recovered": 58946,
            "latitude": 30.9756,
            "longitude": 112.2707
          },
          {
            
            "state_name": "",
            "country_id": 25,
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 53578,
            "deaths": 4825,
            "recovered": 6072,
            "latitude": 41.8719,
            "longitude": 12.5674
          },
          {
            
            "state_name": "",
            "country_id": 29,
            "last_update": "2020-03-21T13:13:30",
            "confirmed": 25374,
            "deaths": 1375,
            "recovered": 2125,
            "latitude": 40.4637,
            "longitude": -3.7492
          },
          {
            
            "state_name": "",
            "country_id": 19,
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 22213,
            "deaths": 84,
            "recovered": 233,
            "latitude": 51.1657,
            "longitude": 10.4515
          },
          {
            
            "state_name": "",
            "country_id": 32,
            "last_update": "2020-03-21T11:13:12",
            "confirmed": 20610,
            "deaths": 1556,
            "recovered": 7635,
            "latitude": 32.4279,
            "longitude": 53.688
          },
          {
            
            "state_name": 14,
            "country_id": 14,
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 14282,
            "deaths": 562,
            "recovered": 12,
            "latitude": 46.2276,
            "longitude": 2.2137
          },
          {
            
            "state_name": "New York",
            "country_id": 8,
            "last_update": "2020-03-21T22:43:04",
            "confirmed": 11710,
            "deaths": 60,
            "recovered": 0,
            "latitude": 42.1657,
            "longitude": -74.9481
          },
          {
            
            "state_name": "",
            "country_id": "Korea, South",
            "last_update": "2020-03-21T11:13:12",
            "confirmed": 8799,
            "deaths": 102,
            "recovered": 1540,
            "latitude": 35.9078,
            "longitude": 127.7669
          },
          {
            
            "state_name": "",
            "country_id": "Switzerland",
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 6575,
            "deaths": 75,
            "recovered": 15,
            "latitude": 46.8182,
            "longitude": 8.2275
          },
          {
            
            "state_name": 26,
            "country_id": 26,
            "last_update": "2020-03-21T20:43:03",
            "confirmed": 5018,
            "deaths": 233,
            "recovered": 65,
            "latitude": 55.3781,
            "longitude": -3.436
          },
          {
            
            "state_name": "Netherlands",
            "country_id": "Netherlands",
            "last_update": "2020-03-21T14:43:04",
            "confirmed": 3631,
            "deaths": 136,
            "recovered": 2,
            "latitude": 52.1326,
            "longitude": 5.2913
          },
          {
            
            "state_name": "",
            "country_id": "Belgium",
            "last_update": "2020-03-21T11:13:12",
            "confirmed": 2815,
            "deaths": 67,
            "recovered": 263,
            "latitude": 50.5039,
            "longitude": 4.4699
          },
          {
            
            "state_name": "",
            "country_id": "Austria",
            "last_update": "2020-03-21T14:43:03",
            "confirmed": 2814,
            "deaths": 8,
            "recovered": 9,
            "latitude": 47.5162,
            "longitude": 14.5501
          },
          {
            
            "state_name": "",
            "country_id": "Norway",
            "last_update": "2020-03-21T17:13:07",
            "confirmed": 2118,
            "deaths": 7,
            "recovered": 1,
            "latitude": 60.472,
            "longitude": 8.4689
          },
          {
            
            "state_name": "Washington",
            "country_id": 8,
            "last_update": "2020-03-21T22:43:04",
            "confirmed": 1793,
            "deaths": 94,
            "recovered": 0,
            "latitude": 47.4009,
            "longitude": -121.4905
          },
          {
            
            "state_name": "",
            "country_id": "Sweden",
            "last_update": "2020-03-21T14:43:03",
            "confirmed": 1763,
            "deaths": 20,
            "recovered": 16,
            "latitude": 60.1282,
            "longitude": 18.6435
          },
          {
            
            "state_name": "Guangdong",
            "country_id": 2,
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 1400,
            "deaths": 8,
            "recovered": 1325,
            "latitude": 23.3417,
            "longitude": 113.4244
          },
          {
            
            "state_name": "California",
            "country_id": 8,
            "last_update": "2020-03-21T22:43:04",
            "confirmed": 1364,
            "deaths": 24,
            "recovered": 0,
            "latitude": 36.1162,
            "longitude": -119.6816
          },
          {
            
            "state_name": "New Jersey",
            "country_id": 8,
            "last_update": "2020-03-21T19:43:03",
            "confirmed": 1327,
            "deaths": 16,
            "recovered": 0,
            "latitude": 40.2989,
            "longitude": -74.521
          },
          {
            
            "state_name": "Denmark",
            "country_id": "Denmark",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 1326,
            "deaths": 13,
            "recovered": 1,
            "latitude": 56.2639,
            "longitude": 9.5018
          },
          {
            
            "state_name": "",
            "country_id": "Portugal",
            "last_update": "2020-03-21T13:13:30",
            "confirmed": 1280,
            "deaths": 12,
            "recovered": 5,
            "latitude": 39.3999,
            "longitude": -8.2245
          },
          {
            
            "state_name": "Henan",
            "country_id": 2,
            "last_update": "2020-03-14T09:53:08",
            "confirmed": 1273,
            "deaths": 22,
            "recovered": 1250,
            "latitude": 33.882,
            "longitude": 113.614
          },
          {
            
            "state_name": "Zhejiang",
            "country_id": 2,
            "last_update": "2020-03-21T03:43:03",
            "confirmed": 1236,
            "deaths": 1,
            "recovered": 1219,
            "latitude": 29.1832,
            "longitude": 120.0934
          },
          {
            
            "state_name": "",
            "country_id": 16,
            "last_update": "2020-03-21T11:43:06",
            "confirmed": 1183,
            "deaths": 4,
            "recovered": 114,
            "latitude": 4.2105,
            "longitude": 101.9758
          },
          {
            
            "state_name": "",
            "country_id": 44,
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 1021,
            "deaths": 15,
            "recovered": 2,
            "latitude": -14.235,
            "longitude": -51.9253
          },
          {
            
            "state_name": "Hunan",
            "country_id": 2,
            "last_update": "2020-03-14T08:33:03",
            "confirmed": 1018,
            "deaths": 4,
            "recovered": 1014,
            "latitude": 27.6104,
            "longitude": 111.7088
          },
          {
            
            "state_name": "",
            "country_id": 4,
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 1007,
            "deaths": 35,
            "recovered": 232,
            "latitude": 36.2048,
            "longitude": 138.2529
          },
          {
            
            "state_name": "",
            "country_id": 67,
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 995,
            "deaths": 0,
            "recovered": 6,
            "latitude": 49.8175,
            "longitude": 15.473
          },
          {
            
            "state_name": "Anhui",
            "country_id": 2,
            "last_update": "2020-03-11T02:18:14",
            "confirmed": 990,
            "deaths": 6,
            "recovered": 984,
            "latitude": 31.8257,
            "longitude": 117.2264
          },
          {
            
            "state_name": "Jiangxi",
            "country_id": 2,
            "last_update": "2020-03-12T02:13:04",
            "confirmed": 935,
            "deaths": 1,
            "recovered": 934,
            "latitude": 27.614,
            "longitude": 115.7221
          },
          {
            
            "state_name": "",
            "country_id": 33,
            "last_update": "2020-03-21T11:43:06",
            "confirmed": 883,
            "deaths": 1,
            "recovered": 36,
            "latitude": 31.0461,
            "longitude": 34.8516
          },
          {
            
            "state_name": "Michigan",
            "country_id": "8",
            "last_update": "2020-03-21T22:43:04",
            "confirmed": 788,
            "deaths": 5,
            "recovered": 0,
            "latitude": 43.3266,
            "longitude": -84.5361
          },
          {
            
            "state_name": "",
            "country_id": 66,
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 785,
            "deaths": 3,
            "recovered": 5,
            "latitude": 53.1424,
            "longitude": -7.6921
          },
          {
            
            "state_name": "Shandong",
            "country_id": 2,
            "last_update": "2020-03-21T00:43:02",
            "confirmed": 764,
            "deaths": 7,
            "recovered": 749,
            "latitude": 36.3427,
            "longitude": 118.1498
          },
          {
            
            "state_name": "Illinois",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 753,
            "deaths": 6,
            "recovered": 0,
            "latitude": 40.3495,
            "longitude": -88.9861
          },
          {
            
            "state_name": "",
            "country_id": "Pakistan",
            "last_update": "2020-03-21T20:13:21",
            "confirmed": 730,
            "deaths": 3,
            "recovered": 13,
            "latitude": 30.3753,
            "longitude": 69.3451
          },
          {
            
            "state_name": "Diamond Princess",
            "country_id": "Cruise Ship",
            "last_update": "2020-03-21T02:13:32",
            "confirmed": 712,
            "deaths": 8,
            "recovered": 325,
            "latitude": 35.4498,
            "longitude": 139.6649
          },
          {
            
            "state_name": "",
            "country_id": "Luxembourg",
            "last_update": "2020-03-21T13:13:30",
            "confirmed": 670,
            "deaths": 8,
            "recovered": 0,
            "latitude": 49.8153,
            "longitude": 6.1296
          },
          {
            
            "state_name": "",
            "country_id": "Turkey",
            "last_update": "2020-03-21T01:43:03",
            "confirmed": 670,
            "deaths": 9,
            "recovered": 0,
            "latitude": 38.9637,
            "longitude": 35.2433
          },
          {
            
            "state_name": "Florida",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 659,
            "deaths": 13,
            "recovered": 0,
            "latitude": 27.7663,
            "longitude": -81.6868
          },
          {
            
            "state_name": "Jiangsu",
            "country_id": 2,
            "last_update": "2020-03-15T01:53:02",
            "confirmed": 631,
            "deaths": 0,
            "recovered": 631,
            "latitude": 32.9711,
            "longitude": 119.455
          },
          {
            
            "state_name": "Louisiana",
            "country_id": 8,
            "last_update": "2020-03-21T15:43:05",
            "confirmed": 585,
            "deaths": 16,
            "recovered": 0,
            "latitude": 31.1695,
            "longitude": -91.8678
          },
          {
            
            "state_name": "Texas",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:17",
            "confirmed": 581,
            "deaths": 5,
            "recovered": 0,
            "latitude": 31.0545,
            "longitude": -97.5635
          },
          {
            
            "state_name": "Chongqing",
            "country_id": 2,
            "last_update": "2020-03-15T03:53:04",
            "confirmed": 576,
            "deaths": 6,
            "recovered": 570,
            "latitude": 30.0572,
            "longitude": 107.874
          },
          {
            
            "state_name": "Sichuan",
            "country_id": 2,
            "last_update": "2020-03-21T01:13:11",
            "confirmed": 542,
            "deaths": 3,
            "recovered": 536,
            "latitude": 30.6171,
            "longitude": 102.7103
          },
          {
            
            "state_name": "",
            "country_id": "Chile",
            "last_update": "2020-03-21T14:43:03",
            "confirmed": 537,
            "deaths": 0,
            "recovered": 6,
            "latitude": -35.6751,
            "longitude": -71.543
          },
          {
            
            "state_name": "",
            "country_id": "Poland",
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 536,
            "deaths": 5,
            "recovered": 1,
            "latitude": 51.9194,
            "longitude": 19.1451
          },
          {
            
            "state_name": "",
            "country_id": "Greece",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 530,
            "deaths": 13,
            "recovered": 19,
            "latitude": 39.0742,
            "longitude": 21.8243
          },
          {
            
            "state_name": "Massachusetts",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 525,
            "deaths": 1,
            "recovered": 0,
            "latitude": 42.2302,
            "longitude": -71.5301
          },
          {
            
            "state_name": "",
            "country_id": "Finland",
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 523,
            "deaths": 1,
            "recovered": 10,
            "latitude": 61.9241,
            "longitude": 25.7482
          },
          {
            
            "state_name": "Georgia",
            "country_id": 8,
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 507,
            "deaths": 14,
            "recovered": 0,
            "latitude": 33.0406,
            "longitude": -83.6431
          },
          {
            
            "state_name": "",
            "country_id": "Ecuador",
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 506,
            "deaths": 7,
            "recovered": 3,
            "latitude": -1.8312,
            "longitude": -78.1834
          },
          {
            
            "state_name": "Beijing",
            "country_id": 2,
            "last_update": "2020-03-21T05:13:04",
            "confirmed": 504,
            "deaths": 8,
            "recovered": 396,
            "latitude": 40.1824,
            "longitude": 116.4142
          },
          {
            
            "state_name": "Heilongjiang",
            "country_id": 2,
            "last_update": "2020-03-20T02:13:46",
            "confirmed": 484,
            "deaths": 13,
            "recovered": 463,
            "latitude": 47.862,
            "longitude": 127.7615
          },
          {
            
            "state_name": "",
            "country_id": "Qatar",
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 481,
            "deaths": 0,
            "recovered": 27,
            "latitude": 25.3548,
            "longitude": 51.1839
          },
          {
            
            "state_name": "",
            "country_id": "Iceland",
            "last_update": "2020-03-21T17:13:18",
            "confirmed": 473,
            "deaths": 1,
            "recovered": 22,
            "latitude": 64.9631,
            "longitude": -19.0208
          },
          {
            
            "state_name": "",
            "country_id": "Indonesia",
            "last_update": "2020-03-21T11:43:06",
            "confirmed": 450,
            "deaths": 38,
            "recovered": 15,
            "latitude": -0.7893,
            "longitude": 113.9213
          },
          {
            
            "state_name": "New South Wales",
            "country_id": "Australia",
            "last_update": "2020-03-21T13:13:35",
            "confirmed": 436,
            "deaths": 6,
            "recovered": 4,
            "latitude": -33.8688,
            "longitude": 151.2093
          },
          {
            
            "state_name": "",
            "country_id": "Singapore",
            "last_update": "2020-03-21T13:13:30",
            "confirmed": 432,
            "deaths": 2,
            "recovered": 140,
            "latitude": 1.3521,
            "longitude": 103.8198
          },
          {
            
            "state_name": "British Columbia",
            "country_id": "Canada",
            "last_update": "2020-03-21T21:13:30",
            "confirmed": 424,
            "deaths": 10,
            "recovered": 4,
            "latitude": 53.7267,
            "longitude": -127.6476
          },
          {
            
            "state_name": "",
            "country_id": "Thailand",
            "last_update": "2020-03-21T12:13:19",
            "confirmed": 411,
            "deaths": 1,
            "recovered": 42,
            "latitude": 15.87,
            "longitude": 100.9925
          },
          {
            
            "state_name": "Pennsylvania",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:17",
            "confirmed": 396,
            "deaths": 2,
            "recovered": 0,
            "latitude": 40.5908,
            "longitude": -77.2098
          },
          {
            
            "state_name": "",
            "country_id": "Saudi Arabia",
            "last_update": "2020-03-21T14:43:03",
            "confirmed": 392,
            "deaths": 0,
            "recovered": 16,
            "latitude": 23.8859,
            "longitude": 45.0792
          },
          {
            
            "state_name": "Colorado",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 390,
            "deaths": 4,
            "recovered": 0,
            "latitude": 39.0598,
            "longitude": -105.3111
          },
          {
            
            "state_name": "",
            "country_id": "Slovenia",
            "last_update": "2020-03-21T14:43:03",
            "confirmed": 383,
            "deaths": 1,
            "recovered": 0,
            "latitude": 46.1512,
            "longitude": 14.9955
          },
          {
            
            "state_name": "Shanghai",
            "country_id": 2,
            "last_update": "2020-03-21T04:43:06",
            "confirmed": 380,
            "deaths": 3,
            "recovered": 327,
            "latitude": 31.202,
            "longitude": 121.4491
          },
          {
            
            "state_name": "Ontario",
            "country_id": "Canada",
            "last_update": "2020-03-21T21:13:30",
            "confirmed": 377,
            "deaths": 3,
            "recovered": 6,
            "latitude": 51.2538,
            "longitude": -85.3232
          },
          {
            
            "state_name": "Tennessee",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 371,
            "deaths": 1,
            "recovered": 0,
            "latitude": 35.7478,
            "longitude": -86.6923
          },
          {
            
            "state_name": "",
            "country_id": "Romania",
            "last_update": "2020-03-21T13:13:32",
            "confirmed": 367,
            "deaths": 0,
            "recovered": 52,
            "latitude": 45.9432,
            "longitude": 24.9668
          },
          {
            
            "state_name": "",
            "country_id": "India",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 330,
            "deaths": 4,
            "recovered": 23,
            "latitude": 20.5937,
            "longitude": 78.9629
          },
          {
            
            "state_name": "Hebei",
            "country_id": 2,
            "last_update": "2020-03-13T11:09:03",
            "confirmed": 318,
            "deaths": 6,
            "recovered": 310,
            "latitude": 38.0428,
            "longitude": 114.5149
          },
          {
            
            "state_name": "",
            "country_id": "Peru",
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 318,
            "deaths": 5,
            "recovered": 1,
            "latitude": -9.19,
            "longitude": -75.0152
          },
          {
            
            "state_name": "",
            "country_id": "Philippines",
            "last_update": "2020-03-21T12:13:19",
            "confirmed": 307,
            "deaths": 19,
            "recovered": 13,
            "latitude": 12.8797,
            "longitude": 121.774
          },
          {
            
            "state_name": "",
            "country_id": "Estonia",
            "last_update": "2020-03-21T12:13:19",
            "confirmed": 306,
            "deaths": 0,
            "recovered": 1,
            "latitude": 58.5953,
            "longitude": 25.0136
          },
          {
            
            "state_name": "",
            "country_id": "Russia",
            "last_update": "2020-03-21T14:43:03",
            "confirmed": 306,
            "deaths": 1,
            "recovered": 12,
            "latitude": 61.524,
            "longitude": 105.3188
          },
          {
            
            "state_name": "",
            "country_id": "Bahrain",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 305,
            "deaths": 1,
            "recovered": 125,
            "latitude": 26.0667,
            "longitude": 50.5577
          },
          {
            
            "state_name": "Fujian",
            "country_id": 2,
            "last_update": "2020-03-21T01:13:10",
            "confirmed": 303,
            "deaths": 1,
            "recovered": 295,
            "latitude": 26.0789,
            "longitude": 117.9874
          },
          {
            
            "state_name": "",
            "country_id": "Egypt",
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 294,
            "deaths": 10,
            "recovered": 41,
            "latitude": 26.8206,
            "longitude": 30.8025
          },
          {
            
            "state_name": "Wisconsin",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 282,
            "deaths": 4,
            "recovered": 0,
            "latitude": 44.2685,
            "longitude": -89.6165
          },
          {
            
            "state_name": "Hong Kong",
            "country_id": 2,
            "last_update": "2020-03-21T09:13:14",
            "confirmed": 273,
            "deaths": 4,
            "recovered": 98,
            "latitude": 22.3,
            "longitude": 114.2
          },
          {
            
            "state_name": "Guangxi",
            "country_id": 2,
            "last_update": "2020-03-20T00:43:02",
            "confirmed": 254,
            "deaths": 2,
            "recovered": 250,
            "latitude": 23.8298,
            "longitude": 108.7881
          },
          {
            
            "state_name": "North Carolina",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 253,
            "deaths": 0,
            "recovered": 0,
            "latitude": 35.6301,
            "longitude": -79.8064
          },
          {
            
            "state_name": "Shaanxi",
            "country_id": 2,
            "last_update": "2020-03-21T01:43:03",
            "confirmed": 248,
            "deaths": 3,
            "recovered": 239,
            "latitude": 35.1917,
            "longitude": 108.8701
          },
          {
            
            "state_name": "Ohio",
            "country_id": 8,
            "last_update": "2020-03-21T19:43:03",
            "confirmed": 248,
            "deaths": 3,
            "recovered": 0,
            "latitude": 40.3888,
            "longitude": -82.7649
          },
          {
            
            "state_name": "",
            "country_id": "South Africa",
            "last_update": "2020-03-21T12:13:19",
            "confirmed": 240,
            "deaths": 0,
            "recovered": 0,
            "latitude": -30.5595,
            "longitude": 22.9375
          },
          {
            
            "state_name": "Victoria",
            "country_id": "Australia",
            "last_update": "2020-03-21T13:13:35",
            "confirmed": 229,
            "deaths": 0,
            "recovered": 8,
            "latitude": -37.8136,
            "longitude": 144.9631
          },
          {
            
            "state_name": "Queensland",
            "country_id": "Australia",
            "last_update": "2020-03-21T13:13:35",
            "confirmed": 221,
            "deaths": 0,
            "recovered": 8,
            "latitude": -28.0167,
            "longitude": 153.4
          },
          {
            
            "state_name": "",
            "country_id": "Iraq",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 214,
            "deaths": 17,
            "recovered": 51,
            "latitude": 33.2232,
            "longitude": 43.6793
          },
          {
            
            "state_name": "",
            "country_id": "Croatia",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 206,
            "deaths": 1,
            "recovered": 5,
            "latitude": 45.1,
            "longitude": 15.2
          },
          {
            
            "state_name": "",
            "country_id": "Mexico",
            "last_update": "2020-03-21T12:13:19",
            "confirmed": 203,
            "deaths": 2,
            "recovered": 4,
            "latitude": 23.6345,
            "longitude": -102.5528
          },
          {
            
            "state_name": "",
            "country_id": "Panama",
            "last_update": "2020-03-21T02:13:32",
            "confirmed": 200,
            "deaths": 1,
            "recovered": 0,
            "latitude": 8.538,
            "longitude": -80.7821
          },
          {
            
            "state_name": "",
            "country_id": "Colombia",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 196,
            "deaths": 0,
            "recovered": 1,
            "latitude": 4.5709,
            "longitude": -74.2973
          },
          {
            
            "state_name": "Alberta",
            "country_id": "Canada",
            "last_update": "2020-03-21T02:43:03",
            "confirmed": 195,
            "deaths": 1,
            "recovered": 0,
            "latitude": 53.9333,
            "longitude": -116.5765
          },
          {
            
            "state_name": "Connecticut",
            "country_id": 8,
            "last_update": "2020-03-21T02:43:03",
            "confirmed": 194,
            "deaths": 4,
            "recovered": 0,
            "latitude": 41.5978,
            "longitude": -72.7554
          },
          {
            
            "state_name": "Maryland",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 193,
            "deaths": 2,
            "recovered": 0,
            "latitude": 39.0639,
            "longitude": -76.8021
          },
          {
            
            "state_name": "",
            "country_id": "Lebanon",
            "last_update": "2020-03-21T12:13:19",
            "confirmed": 187,
            "deaths": 4,
            "recovered": 4,
            "latitude": 33.8547,
            "longitude": 35.8623
          },
          {
            
            "state_name": "Quebec",
            "country_id": "Canada",
            "last_update": "2020-03-21T21:13:30",
            "confirmed": 181,
            "deaths": 5,
            "recovered": 0,
            "latitude": 52.9399,
            "longitude": -73.5491
          },
          {
            
            "state_name": "",
            "country_id": "Slovakia",
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 178,
            "deaths": 1,
            "recovered": 0,
            "latitude": 48.669,
            "longitude": 19.699
          },
          {
            
            "state_name": "Yunnan",
            "country_id": 2,
            "last_update": "2020-03-16T23:53:02",
            "confirmed": 176,
            "deaths": 2,
            "recovered": 172,
            "latitude": 24.974,
            "longitude": 101.487
          },
          {
            
            "state_name": "",
            "country_id": "Kuwait",
            "last_update": "2020-03-21T12:13:19",
            "confirmed": 176,
            "deaths": 0,
            "recovered": 27,
            "latitude": 29.3117,
            "longitude": 47.4818
          },
          {
            
            "state_name": "",
            "country_id": "Serbia",
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 171,
            "deaths": 1,
            "recovered": 1,
            "latitude": 44.0165,
            "longitude": 21.0059
          },
          {
            
            "state_name": "South Carolina",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:17",
            "confirmed": 171,
            "deaths": 3,
            "recovered": 0,
            "latitude": 33.8569,
            "longitude": -80.945
          },
          {
            
            "state_name": "Hainan",
            "country_id": 2,
            "last_update": "2020-03-16T14:38:45",
            "confirmed": 168,
            "deaths": 6,
            "recovered": 161,
            "latitude": 19.1959,
            "longitude": 109.7453
          },
          {
            
            "state_name": "",
            "country_id": "Bulgaria",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 163,
            "deaths": 3,
            "recovered": 3,
            "latitude": 42.7339,
            "longitude": 25.4858
          },
          {
            
            "state_name": "Nevada",
            "country_id": 8,
            "last_update": "2020-03-21T02:43:03",
            "confirmed": 161,
            "deaths": 2,
            "recovered": 0,
            "latitude": 38.3135,
            "longitude": -117.0554
          },
          {
            
            "state_name": "",
            "country_id": "Armenia",
            "last_update": "2020-03-21T12:13:19",
            "confirmed": 160,
            "deaths": 0,
            "recovered": 1,
            "latitude": 40.0691,
            "longitude": 45.0382
          },
          {
            
            "state_name": "",
            "country_id": "Argentina",
            "last_update": "2020-03-21T15:13:44",
            "confirmed": 158,
            "deaths": 4,
            "recovered": 3,
            "latitude": -38.4161,
            "longitude": -63.6167
          },
          {
            
            "state_name": "Virginia",
            "country_id": 8,
            "last_update": "2020-03-21T19:43:03",
            "confirmed": 156,
            "deaths": 2,
            "recovered": 0,
            "latitude": 37.7693,
            "longitude": -78.17
          },
          {
            
            "state_name": "",
            "country_id": "Taiwan*",
            "last_update": "2020-03-21T07:43:02",
            "confirmed": 153,
            "deaths": 2,
            "recovered": 28,
            "latitude": 23.7,
            "longitude": 121.0
          },
          {
            
            "state_name": "",
            "country_id": "United Arab Emirates",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 153,
            "deaths": 2,
            "recovered": 38,
            "latitude": 23.4241,
            "longitude": 53.8478
          },
          {
            
            "state_name": "Guizhou",
            "country_id": 2,
            "last_update": "2020-03-18T01:53:03",
            "confirmed": 146,
            "deaths": 2,
            "recovered": 144,
            "latitude": 26.8154,
            "longitude": 106.8748
          },
          {
            
            "state_name": "",
            "country_id": "San Marino",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 144,
            "deaths": 20,
            "recovered": 4,
            "latitude": 43.9424,
            "longitude": 12.4578
          },
          {
            
            "state_name": "Mississippi",
            "country_id": 8,
            "last_update": "2020-03-21T17:13:44",
            "confirmed": 140,
            "deaths": 1,
            "recovered": 0,
            "latitude": 32.7416,
            "longitude": -89.6787
          },
          {
            
            "state_name": "",
            "country_id": "Algeria",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 139,
            "deaths": 15,
            "recovered": 32,
            "latitude": 28.0339,
            "longitude": 1.6596
          },
          {
            
            "state_name": "Minnesota",
            "country_id": 8,
            "last_update": "2020-03-21T19:43:03",
            "confirmed": 138,
            "deaths": 1,
            "recovered": 0,
            "latitude": 45.6945,
            "longitude": -93.9002
          },
          {
            
            "state_name": "Tianjin",
            "country_id": 2,
            "last_update": "2020-03-19T23:43:03",
            "confirmed": 137,
            "deaths": 3,
            "recovered": 133,
            "latitude": 39.3054,
            "longitude": 117.323
          },
          {
            
            "state_name": "Utah",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:17",
            "confirmed": 136,
            "deaths": 0,
            "recovered": 0,
            "latitude": 40.15,
            "longitude": -111.8624
          },
          {
            
            "state_name": "Gansu",
            "country_id": 2,
            "last_update": "2020-03-21T03:13:13",
            "confirmed": 134,
            "deaths": 2,
            "recovered": 113,
            "latitude": 36.0611,
            "longitude": 103.8343
          },
          {
            
            "state_name": "Shanxi",
            "country_id": 2,
            "last_update": "2020-03-13T11:09:03",
            "confirmed": 133,
            "deaths": 0,
            "recovered": 133,
            "latitude": 37.5777,
            "longitude": 112.2922
          },
          {
            
            "state_name": "Alabama",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 131,
            "deaths": 0,
            "recovered": 0,
            "latitude": 32.3182,
            "longitude": -86.9023
          },
          {
            
            "state_name": "Indiana",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 128,
            "deaths": 4,
            "recovered": 0,
            "latitude": 39.8494,
            "longitude": -86.2583
          },
          {
            
            "state_name": "Liaoning",
            "country_id": 2,
            "last_update": "2020-03-20T01:43:03",
            "confirmed": 126,
            "deaths": 2,
            "recovered": 122,
            "latitude": 41.2956,
            "longitude": 122.6085
          },
          {
            
            "state_name": "",
            "country_id": "Latvia",
            "last_update": "2020-03-21T12:13:19",
            "confirmed": 124,
            "deaths": 0,
            "recovered": 1,
            "latitude": 56.8796,
            "longitude": 24.6032
          },
          {
            
            "state_name": "Arkansas",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:17",
            "confirmed": 122,
            "deaths": 0,
            "recovered": 0,
            "latitude": 34.9697,
            "longitude": -92.3731
          },
          {
            
            "state_name": "Arizona",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 118,
            "deaths": 1,
            "recovered": 0,
            "latitude": 33.7298,
            "longitude": -111.4312
          },
          {
            
            "state_name": "",
            "country_id": "Costa Rica",
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 117,
            "deaths": 2,
            "recovered": 2,
            "latitude": 9.7489,
            "longitude": -83.7534
          },
          {
            
            "state_name": "Oregon",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 114,
            "deaths": 5,
            "recovered": 0,
            "latitude": 44.572,
            "longitude": -122.0709
          },
          {
            
            "state_name": "",
            "country_id": "Dominican Republic",
            "last_update": "2020-03-21T15:13:45",
            "confirmed": 112,
            "deaths": 2,
            "recovered": 0,
            "latitude": 18.7357,
            "longitude": -70.1627
          },
          {
            
            "state_name": "",
            "country_id": "Uruguay",
            "last_update": "2020-03-21T12:13:19",
            "confirmed": 110,
            "deaths": 0,
            "recovered": 0,
            "latitude": -32.5228,
            "longitude": -55.7658
          },
          {
            
            "state_name": "",
            "country_id": "Hungary",
            "last_update": "2020-03-21T12:13:19",
            "confirmed": 103,
            "deaths": 4,
            "recovered": 7,
            "latitude": 47.1625,
            "longitude": 19.5033
          },
          {
            
            "state_name": "",
            "country_id": "Morocco",
            "last_update": "2020-03-21T20:43:02",
            "confirmed": 96,
            "deaths": 3,
            "recovered": 3,
            "latitude": 31.7917,
            "longitude": -7.0926
          },
          {
            
            "state_name": "",
            "country_id": "Vietnam",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 94,
            "deaths": 0,
            "recovered": 17,
            "latitude": 14.0583,
            "longitude": 108.2772
          },
          {
            
            "state_name": "",
            "country_id": "Bosnia and Herzegovina",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 93,
            "deaths": 1,
            "recovered": 2,
            "latitude": 43.9159,
            "longitude": 17.6791
          },
          {
            
            "state_name": "Jilin",
            "country_id": 2,
            "last_update": "2020-03-16T00:22:10",
            "confirmed": 93,
            "deaths": 1,
            "recovered": 92,
            "latitude": 43.6661,
            "longitude": 126.1923
          },
          {
            
            "state_name": "Faroe Islands",
            "country_id": "Denmark",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 92,
            "deaths": 0,
            "recovered": 0,
            "latitude": 61.8926,
            "longitude": -6.9118
          },
          {
            
            "state_name": "Western Australia",
            "country_id": "Australia",
            "last_update": "2020-03-21T13:13:35",
            "confirmed": 90,
            "deaths": 1,
            "recovered": 0,
            "latitude": -31.9505,
            "longitude": 115.8605
          },
          {
            
            "state_name": "",
            "country_id": "Andorra",
            "last_update": "2020-03-21T15:13:45",
            "confirmed": 88,
            "deaths": 0,
            "recovered": 1,
            "latitude": 42.5063,
            "longitude": 1.5218
          },
          {
            
            "state_name": "Kentucky",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:17",
            "confirmed": 87,
            "deaths": 3,
            "recovered": 0,
            "latitude": 37.6681,
            "longitude": -84.6701
          },
          {
            
            "state_name": "",
            "country_id": "Jordan",
            "last_update": "2020-03-20T20:43:02",
            "confirmed": 85,
            "deaths": 0,
            "recovered": 1,
            "latitude": 30.5852,
            "longitude": 36.2384
          },
          {
            
            "state_name": "",
            "country_id": "North Macedonia",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 85,
            "deaths": 0,
            "recovered": 1,
            "latitude": 41.6086,
            "longitude": 21.7453
          },
          {
            
            "state_name": "",
            "country_id": "Cyprus",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 84,
            "deaths": 0,
            "recovered": 0,
            "latitude": 35.1264,
            "longitude": 33.4299
          },
          {
            
            "state_name": "",
            "country_id": "Brunei",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 83,
            "deaths": 0,
            "recovered": 2,
            "latitude": 4.5353,
            "longitude": 114.7277
          },
          {
            
            "state_name": "",
            "country_id": "Lithuania",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 83,
            "deaths": 1,
            "recovered": 1,
            "latitude": 55.1694,
            "longitude": 23.8813
          },
          {
            
            "state_name": "",
            "country_id": "Moldova",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 80,
            "deaths": 1,
            "recovered": 1,
            "latitude": 47.4116,
            "longitude": 28.3699
          },
          {
            
            "state_name": "",
            "country_id": "Sri Lanka",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 77,
            "deaths": 0,
            "recovered": 1,
            "latitude": 7.8731,
            "longitude": 80.7718
          },
          {
            
            "state_name": "District of Columbia",
            "country_id": 8,
            "last_update": "2020-03-21T02:43:03",
            "confirmed": 77,
            "deaths": 1,
            "recovered": 0,
            "latitude": 38.8974,
            "longitude": -77.0268
          },
          {
            
            "state_name": "",
            "country_id": "Albania",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 76,
            "deaths": 2,
            "recovered": 2,
            "latitude": 41.1533,
            "longitude": 20.1683
          },
          {
            
            "state_name": "",
            "country_id": "Belarus",
            "last_update": "2020-03-21T20:43:03",
            "confirmed": 76,
            "deaths": 0,
            "recovered": 15,
            "latitude": 53.7098,
            "longitude": 27.9534
          },
          {
            
            "state_name": "Xinjiang",
            "country_id": 2,
            "last_update": "2020-03-11T02:18:14",
            "confirmed": 76,
            "deaths": 3,
            "recovered": 73,
            "latitude": 41.1129,
            "longitude": 85.2401
          },
          {
            
            "state_name": "Inner Mongolia",
            "country_id": 2,
            "last_update": "2020-03-19T01:03:02",
            "confirmed": 75,
            "deaths": 1,
            "recovered": 74,
            "latitude": 44.0935,
            "longitude": 113.9448
          },
          {
            
            "state_name": "Ningxia",
            "country_id": 2,
            "last_update": "2020-03-16T14:38:45",
            "confirmed": 75,
            "deaths": 0,
            "recovered": 75,
            "latitude": 37.2692,
            "longitude": 106.1655
          },
          {
            
            "state_name": "Missouri",
            "country_id": 8,
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 74,
            "deaths": 3,
            "recovered": 0,
            "latitude": 38.4561,
            "longitude": -92.2884
          },
          {
            
            "state_name": "",
            "country_id": "Malta",
            "last_update": "2020-03-21T15:13:45",
            "confirmed": 73,
            "deaths": 0,
            "recovered": 2,
            "latitude": 35.9375,
            "longitude": 14.3754
          },
          {
            
            "state_name": "Maine",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 70,
            "deaths": 0,
            "recovered": 0,
            "latitude": 44.6939,
            "longitude": -69.3819
          },
          {
            
            "state_name": "",
            "country_id": "Venezuela",
            "last_update": "2020-03-21T20:43:03",
            "confirmed": 70,
            "deaths": 0,
            "recovered": 0,
            "latitude": 6.4238,
            "longitude": -66.5897
          },
          {
            
            "state_name": "Iowa",
            "country_id": 8,
            "last_update": "2020-03-21T19:43:03",
            "confirmed": 68,
            "deaths": 0,
            "recovered": 0,
            "latitude": 42.0115,
            "longitude": -93.2105
          },
          {
            
            "state_name": "South Australia",
            "country_id": "Australia",
            "last_update": "2020-03-21T13:13:35",
            "confirmed": 67,
            "deaths": 0,
            "recovered": 3,
            "latitude": -34.9285,
            "longitude": 138.6007
          },
          {
            
            "state_name": "Rhode Island",
            "country_id": 8,
            "last_update": "2020-03-21T19:43:03",
            "confirmed": 66,
            "deaths": 0,
            "recovered": 0,
            "latitude": 41.6809,
            "longitude": -71.5118
          },
          {
            
            "state_name": "",
            "country_id": "Burkina Faso",
            "last_update": "2020-03-21T13:13:32",
            "confirmed": 64,
            "deaths": 2,
            "recovered": 5,
            "latitude": 12.2383,
            "longitude": -1.5616
          },
          {
            
            "state_name": "",
            "country_id": "Tunisia",
            "last_update": "2020-03-21T15:13:45",
            "confirmed": 60,
            "deaths": 1,
            "recovered": 0,
            "latitude": 33.8869,
            "longitude": 9.5375
          },
          {
            
            "state_name": "Kansas",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 57,
            "deaths": 2,
            "recovered": 0,
            "latitude": 38.5266,
            "longitude": -96.7265
          },
          {
            
            "state_name": "New Hampshire",
            "country_id": 8,
            "last_update": "2020-03-21T00:13:22",
            "confirmed": 55,
            "deaths": 0,
            "recovered": 0,
            "latitude": 43.4525,
            "longitude": -71.5639
          },
          {
            
            "state_name": "",
            "country_id": "Azerbaijan",
            "last_update": "2020-03-21T20:43:03",
            "confirmed": 53,
            "deaths": 1,
            "recovered": 11,
            "latitude": 40.1431,
            "longitude": 47.5769
          },
          {
            
            "state_name": "",
            "country_id": "Cambodia",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 53,
            "deaths": 0,
            "recovered": 1,
            "latitude": 12.5657,
            "longitude": 104.991
          },
          {
            
            "state_name": "",
            "country_id": "Guadeloupe",
            "last_update": "2020-03-21T13:13:35",
            "confirmed": 53,
            "deaths": 0,
            "recovered": 0,
            "latitude": 16.265,
            "longitude": -61.551
          },
          {
            
            "state_name": "",
            "country_id": "Kazakhstan",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 53,
            "deaths": 0,
            "recovered": 0,
            "latitude": 48.0196,
            "longitude": 66.9237
          },
          {
            
            "state_name": "Oklahoma",
            "country_id": 8,
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 53,
            "deaths": 1,
            "recovered": 0,
            "latitude": 35.5653,
            "longitude": -96.9289
          },
          {
            
            "state_name": "",
            "country_id": "New Zealand",
            "last_update": "2020-03-21T02:13:32",
            "confirmed": 52,
            "deaths": 0,
            "recovered": 0,
            "latitude": -40.9006,
            "longitude": 174.886
          },
          {
            
            "state_name": "",
            "country_id": "Oman",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 52,
            "deaths": 0,
            "recovered": 12,
            "latitude": 21.4735,
            "longitude": 55.9754
          },
          {
            
            "state_name": "",
            "country_id": "Georgia",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 49,
            "deaths": 0,
            "recovered": 1,
            "latitude": 42.3154,
            "longitude": 43.3569
          },
          {
            
            "state_name": "",
            "country_id": "Trinidad and Tobago",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 49,
            "deaths": 0,
            "recovered": 1,
            "latitude": 10.6918,
            "longitude": -61.2225
          },
          {
            
            "state_name": "Diamond Princess",
            "country_id": 8,
            "last_update": "2020-03-20T19:43:03",
            "confirmed": 49,
            "deaths": 0,
            "recovered": 0,
            "latitude": 35.4437,
            "longitude": 139.638
          },
          {
            
            "state_name": "",
            "country_id": "Senegal",
            "last_update": "2020-03-21T01:43:03",
            "confirmed": 47,
            "deaths": 0,
            "recovered": 5,
            "latitude": 14.4974,
            "longitude": -14.4524
          },
          {
            
            "state_name": "",
            "country_id": "Ukraine",
            "last_update": "2020-03-21T21:13:10",
            "confirmed": 47,
            "deaths": 3,
            "recovered": 1,
            "latitude": 48.3794,
            "longitude": 31.1656
          },
          {
            
            "state_name": "",
            "country_id": "Reunion",
            "last_update": "2020-03-21T13:13:35",
            "confirmed": 45,
            "deaths": 0,
            "recovered": 0,
            "latitude": -21.1151,
            "longitude": 55.5364
          },
          {
            
            "state_name": "Delaware",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 45,
            "deaths": 0,
            "recovered": 0,
            "latitude": 39.3185,
            "longitude": -75.5071
          },
          {
            
            "state_name": "New Mexico",
            "country_id": 8,
            "last_update": "2020-03-20T21:43:03",
            "confirmed": 43,
            "deaths": 0,
            "recovered": 0,
            "latitude": 34.8405,
            "longitude": -106.2485
          },
          {
            
            "state_name": "",
            "country_id": "Uzbekistan",
            "last_update": "2020-03-21T21:13:10",
            "confirmed": 43,
            "deaths": 0,
            "recovered": 0,
            "latitude": 41.3775,
            "longitude": 64.5853
          },
          {
            
            "state_name": "Nebraska",
            "country_id": 8,
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 38,
            "deaths": 0,
            "recovered": 0,
            "latitude": 41.1254,
            "longitude": -98.2681
          },
          {
            
            "state_name": "",
            "country_id": "Liechtenstein",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 37,
            "deaths": 0,
            "recovered": 0,
            "latitude": 47.166,
            "longitude": 9.5554
          },
          {
            
            "state_name": "Hawaii",
            "country_id": 8,
            "last_update": "2020-03-21T02:43:03",
            "confirmed": 37,
            "deaths": 0,
            "recovered": 0,
            "latitude": 21.0943,
            "longitude": -157.4983
          },
          {
            
            "state_name": "Idaho",
            "country_id": 8,
            "last_update": "2020-03-21T02:43:03",
            "confirmed": 36,
            "deaths": 0,
            "recovered": 0,
            "latitude": 44.2405,
            "longitude": -114.4788
          },
          {
            
            "state_name": "",
            "country_id": "Martinique",
            "last_update": "2020-03-20T10:13:37",
            "confirmed": 32,
            "deaths": 1,
            "recovered": 0,
            "latitude": 14.6415,
            "longitude": -61.0242
          },
          {
            
            "state_name": "Channel Islands",
            "country_id": 26,
            "last_update": "2020-03-21T21:13:29",
            "confirmed": 32,
            "deaths": 0,
            "recovered": 0,
            "latitude": 49.3723,
            "longitude": -2.3644
          },
          {
            
            "state_name": "Vermont",
            "country_id": 8,
            "last_update": "2020-03-20T21:43:03",
            "confirmed": 29,
            "deaths": 2,
            "recovered": 0,
            "latitude": 44.0459,
            "longitude": -72.7107
          },
          {
            
            "state_name": "North Dakota",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 28,
            "deaths": 0,
            "recovered": 0,
            "latitude": 47.5289,
            "longitude": -99.784
          },
          {
            
            "state_name": "",
            "country_id": "Cameroon",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 27,
            "deaths": 0,
            "recovered": 0,
            "latitude": 3.848,
            "longitude": 11.5021
          },
          {
            
            "state_name": "Saskatchewan",
            "country_id": "Canada",
            "last_update": "2020-03-21T02:43:03",
            "confirmed": 26,
            "deaths": 0,
            "recovered": 0,
            "latitude": 52.9399,
            "longitude": -106.4509
          },
          {
            
            "state_name": "",
            "country_id": "Bangladesh",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 25,
            "deaths": 2,
            "recovered": 3,
            "latitude": 23.685,
            "longitude": 90.3563
          },
          {
            
            "state_name": "",
            "country_id": "Afghanistan",
            "last_update": "2020-03-20T14:43:04",
            "confirmed": 24,
            "deaths": 0,
            "recovered": 1,
            "latitude": 33.9391,
            "longitude": 67.71
          },
          {
            
            "state_name": "",
            "country_id": "Honduras",
            "last_update": "2020-03-20T14:13:08",
            "confirmed": 24,
            "deaths": 0,
            "recovered": 0,
            "latitude": 15.2,
            "longitude": -86.2419
          },
          {
            
            "state_name": "",
            "country_id": "Congo (Kinshasa)",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 23,
            "deaths": 1,
            "recovered": 0,
            "latitude": -4.0383,
            "longitude": 21.7587
          },
          {
            
            "state_name": "Grand Princess",
            "country_id": 8,
            "last_update": "2020-03-20T19:43:03",
            "confirmed": 23,
            "deaths": 0,
            "recovered": 0,
            "latitude": 37.6489,
            "longitude": -122.6655
          },
          {
            
            "state_name": "Wyoming",
            "country_id": 8,
            "last_update": "2020-03-21T19:43:03",
            "confirmed": 23,
            "deaths": 0,
            "recovered": 0,
            "latitude": 42.756,
            "longitude": -107.3025
          },
          {
            
            "state_name": "",
            "country_id": "Nigeria",
            "last_update": "2020-03-21T15:13:46",
            "confirmed": 22,
            "deaths": 0,
            "recovered": 1,
            "latitude": 9.082,
            "longitude": 8.6753
          },
          {
            
            "state_name": "Nova Scotia",
            "country_id": "Canada",
            "last_update": "2020-03-21T21:13:30",
            "confirmed": 21,
            "deaths": 0,
            "recovered": 0,
            "latitude": 44.682,
            "longitude": -63.7443
          },
          {
            
            "state_name": "",
            "country_id": "Cuba",
            "last_update": "2020-03-21T02:13:32",
            "confirmed": 21,
            "deaths": 1,
            "recovered": 0,
            "latitude": 21.5218,
            "longitude": -77.7812
          },
          {
            
            "state_name": "Montana",
            "country_id": 8,
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 21,
            "deaths": 0,
            "recovered": 0,
            "latitude": 46.9219,
            "longitude": -110.4544
          },
          {
            
            "state_name": "Puerto Rico",
            "country_id": 8,
            "last_update": "2020-03-21T19:43:03",
            "confirmed": 21,
            "deaths": 1,
            "recovered": 0,
            "latitude": 18.2208,
            "longitude": -66.5901
          },
          {
            
            "state_name": "",
            "country_id": "Bolivia",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 19,
            "deaths": 0,
            "recovered": 0,
            "latitude": -16.2902,
            "longitude": -63.5887
          },
          {
            
            "state_name": "",
            "country_id": "Ghana",
            "last_update": "2020-03-21T23:13:17",
            "confirmed": 19,
            "deaths": 1,
            "recovered": 0,
            "latitude": 7.9465,
            "longitude": -1.0232
          },
          {
            
            "state_name": "Manitoba",
            "country_id": "Canada",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 18,
            "deaths": 0,
            "recovered": 0,
            "latitude": 53.7609,
            "longitude": -98.8139
          },
          {
            
            "state_name": "Macau",
            "country_id": 2,
            "last_update": "2020-03-21T22:13:24",
            "confirmed": 18,
            "deaths": 0,
            "recovered": 10,
            "latitude": 22.1667,
            "longitude": 113.55
          },
          {
            
            "state_name": "Qinghai",
            "country_id": 2,
            "last_update": "2020-03-11T02:18:14",
            "confirmed": 18,
            "deaths": 0,
            "recovered": 18,
            "latitude": 35.7452,
            "longitude": 95.9956
          },
          {
            
            "state_name": "",
            "country_id": "French Guiana",
            "last_update": "2020-03-21T21:13:30",
            "confirmed": 18,
            "deaths": 0,
            "recovered": 6,
            "latitude": 3.9339,
            "longitude": -53.1258
          },
          {
            
            "state_name": "",
            "country_id": "Paraguay",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 18,
            "deaths": 1,
            "recovered": 0,
            "latitude": -23.4425,
            "longitude": -58.4438
          },
          {
            
            "state_name": "New Brunswick",
            "country_id": "Canada",
            "last_update": "2020-03-21T21:13:30",
            "confirmed": 17,
            "deaths": 0,
            "recovered": 0,
            "latitude": 46.5653,
            "longitude": -66.4619
          },
          {
            
            "state_name": "",
            "country_id": "Guatemala",
            "last_update": "2020-03-21T21:13:14",
            "confirmed": 17,
            "deaths": 1,
            "recovered": 0,
            "latitude": 15.7835,
            "longitude": -90.2308
          },
          {
            
            "state_name": "",
            "country_id": "Rwanda",
            "last_update": "2020-03-20T20:43:03",
            "confirmed": 17,
            "deaths": 0,
            "recovered": 0,
            "latitude": -1.9403,
            "longitude": 29.8739
          },
          {
            
            "state_name": "Tasmania",
            "country_id": "Australia",
            "last_update": "2020-03-21T13:13:35",
            "confirmed": 16,
            "deaths": 0,
            "recovered": 3,
            "latitude": -41.4545,
            "longitude": 145.9707
          },
          {
            
            "state_name": "",
            "country_id": "Jamaica",
            "last_update": "2020-03-20T14:13:11",
            "confirmed": 16,
            "deaths": 1,
            "recovered": 2,
            "latitude": 18.1096,
            "longitude": -77.2975
          },
          {
            
            "state_name": "",
            "country_id": "Togo",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 16,
            "deaths": 0,
            "recovered": 1,
            "latitude": 8.6195,
            "longitude": 0.8248
          },
          {
            
            "state_name": "French Polynesia",
            "country_id": 14,
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 15,
            "deaths": 0,
            "recovered": 0,
            "latitude": -17.6797,
            "longitude": -149.4068
          },
          {
            
            "state_name": "Alaska",
            "country_id": 8,
            "last_update": "2020-03-21T23:13:18",
            "confirmed": 15,
            "deaths": 0,
            "recovered": 0,
            "latitude": 61.3707,
            "longitude": -152.4044
          },
          {
            
            "state_name": "Guam",
            "country_id": 8,
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 15,
            "deaths": 0,
            "recovered": 0,
            "latitude": 13.4443,
            "longitude": 144.7937
          },
          {
            
            "state_name": "",
            "country_id": "Cote d'Ivoire",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 14,
            "deaths": 0,
            "recovered": 1,
            "latitude": 7.54,
            "longitude": -5.5471
          },
          {
            
            "state_name": "",
            "country_id": "Kyrgyzstan",
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 14,
            "deaths": 0,
            "recovered": 0,
            "latitude": 41.2044,
            "longitude": 74.7661
          },
          {
            
            "state_name": "",
            "country_id": "Mauritius",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 14,
            "deaths": 1,
            "recovered": 0,
            "latitude": -20.3484,
            "longitude": 57.5522
          },
          {
            
            "state_name": "",
            "country_id": "Montenegro",
            "last_update": "2020-03-20T20:43:03",
            "confirmed": 14,
            "deaths": 0,
            "recovered": 0,
            "latitude": 42.7087,
            "longitude": 19.3744
          },
          {
            
            "state_name": "South Dakota",
            "country_id": 8,
            "last_update": "2020-03-20T02:43:10",
            "confirmed": 14,
            "deaths": 1,
            "recovered": 0,
            "latitude": 44.2998,
            "longitude": -99.4388
          },
          {
            
            "state_name": "",
            "country_id": "Maldives",
            "last_update": "2020-03-15T18:20:18",
            "confirmed": 13,
            "deaths": 0,
            "recovered": 0,
            "latitude": 3.2028,
            "longitude": 73.2207
          },
          {
            
            "state_name": "",
            "country_id": "Monaco",
            "last_update": "2020-03-21T13:13:32",
            "confirmed": 11,
            "deaths": 0,
            "recovered": 0,
            "latitude": 43.7384,
            "longitude": 7.4246
          },
          {
            
            "state_name": "Grand Princess",
            "country_id": "Canada",
            "last_update": "2020-03-20T03:13:18",
            "confirmed": 10,
            "deaths": 0,
            "recovered": 0,
            "latitude": 37.6489,
            "longitude": -122.6655
          },
          {
            
            "state_name": "",
            "country_id": "Mongolia",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 10,
            "deaths": 0,
            "recovered": 0,
            "latitude": 46.8625,
            "longitude": 103.8467
          },
          {
            
            "state_name": "Gibraltar",
            "country_id": 26,
            "last_update": "2020-03-19T20:13:52",
            "confirmed": 10,
            "deaths": 0,
            "recovered": 2,
            "latitude": 36.1408,
            "longitude": -5.3536
          },
          {
            
            "state_name": "Australian Capital Territory",
            "country_id": "Australia",
            "last_update": "2020-03-21T13:13:35",
            "confirmed": 9,
            "deaths": 0,
            "recovered": 0,
            "latitude": -35.4735,
            "longitude": 149.0124
          },
          {
            
            "state_name": "",
            "country_id": "Ethiopia",
            "last_update": "2020-03-20T14:13:11",
            "confirmed": 9,
            "deaths": 0,
            "recovered": 0,
            "latitude": 9.145,
            "longitude": 40.4897
          },
          {
            
            "state_name": "West Virginia",
            "country_id": 8,
            "last_update": "2020-03-21T02:43:03",
            "confirmed": 8,
            "deaths": 0,
            "recovered": 0,
            "latitude": 38.4912,
            "longitude": -80.9545
          },
          {
            
            "state_name": "",
            "country_id": "Guyana",
            "last_update": "2020-03-17T10:53:03",
            "confirmed": 7,
            "deaths": 1,
            "recovered": 0,
            "latitude": 4.8604,
            "longitude": -58.9302
          },
          {
            
            "state_name": "",
            "country_id": "Kenya",
            "last_update": "2020-03-19T02:33:08",
            "confirmed": 7,
            "deaths": 0,
            "recovered": 0,
            "latitude": -0.0236,
            "longitude": 37.9062
          },
          {
            
            "state_name": "",
            "country_id": "Mayotte",
            "last_update": "2020-03-21T13:13:35",
            "confirmed": 7,
            "deaths": 0,
            "recovered": 0,
            "latitude": -12.8275,
            "longitude": 45.1662
          },
          {
            
            "state_name": "",
            "country_id": "Seychelles",
            "last_update": "2020-03-20T15:43:24",
            "confirmed": 7,
            "deaths": 0,
            "recovered": 0,
            "latitude": -4.6796,
            "longitude": 55.492
          },
          {
            
            "state_name": "",
            "country_id": "Barbados",
            "last_update": "2020-03-21T02:43:03",
            "confirmed": 6,
            "deaths": 0,
            "recovered": 0,
            "latitude": 13.1939,
            "longitude": -59.5432
          },
          {
            
            "state_name": "Newfoundland and Labrador",
            "country_id": "Canada",
            "last_update": "2020-03-21T21:13:29",
            "confirmed": 6,
            "deaths": 0,
            "recovered": 0,
            "latitude": 53.1355,
            "longitude": -57.6604
          },
          {
            
            "state_name": "",
            "country_id": "Equatorial Guinea",
            "last_update": "2020-03-19T20:43:03",
            "confirmed": 6,
            "deaths": 0,
            "recovered": 0,
            "latitude": 1.6508,
            "longitude": 10.2679
          },
          {
            
            "state_name": "",
            "country_id": "Tanzania",
            "last_update": "2020-03-19T11:33:36",
            "confirmed": 6,
            "deaths": 0,
            "recovered": 0,
            "latitude": -6.369,
            "longitude": 34.8888
          },
          {
            
            "state_name": "United States Virgin Islands",
            "country_id": 8,
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 6,
            "deaths": 0,
            "recovered": 0,
            "latitude": 18.3358,
            "longitude": -64.8963
          },
          {
            
            "state_name": "Aruba",
            "country_id": "Netherlands",
            "last_update": "2020-03-20T02:43:10",
            "confirmed": 5,
            "deaths": 0,
            "recovered": 0,
            "latitude": 12.5211,
            "longitude": -69.9683
          },
          {
            
            "state_name": "",
            "country_id": "Bahamas, The",
            "last_update": "2020-03-21T02:43:03",
            "confirmed": 4,
            "deaths": 0,
            "recovered": 0,
            "latitude": 25.0343,
            "longitude": -77.3963
          },
          {
            
            "state_name": "New Caledonia",
            "country_id": 14,
            "last_update": "2020-03-21T17:43:03",
            "confirmed": 4,
            "deaths": 0,
            "recovered": 0,
            "latitude": -20.9043,
            "longitude": 165.618
          },
          {
            
            "state_name": "St Martin",
            "country_id": 14,
            "last_update": "2020-03-19T09:33:04",
            "confirmed": 4,
            "deaths": 0,
            "recovered": 0,
            "latitude": 18.0708,
            "longitude": -63.0501
          },
          {
            
            "state_name": "",
            "country_id": "Gabon",
            "last_update": "2020-03-21T02:13:32",
            "confirmed": 4,
            "deaths": 1,
            "recovered": 0,
            "latitude": -0.8037,
            "longitude": 11.6094
          },
          {
            
            "state_name": "",
            "country_id": "Suriname",
            "last_update": "2020-03-20T14:43:04",
            "confirmed": 4,
            "deaths": 0,
            "recovered": 0,
            "latitude": 3.9193,
            "longitude": -56.0278
          },
          {
            
            "state_name": "Northern Territory",
            "country_id": "Australia",
            "last_update": "2020-03-20T21:13:29",
            "confirmed": 3,
            "deaths": 0,
            "recovered": 0,
            "latitude": -12.4634,
            "longitude": 130.8456
          },
          {
            
            "state_name": "",
            "country_id": "Cabo Verde",
            "last_update": "2020-03-21T15:13:46",
            "confirmed": 3,
            "deaths": 0,
            "recovered": 0,
            "latitude": 16.5388,
            "longitude": -23.0418
          },
          {
            
            "state_name": "",
            "country_id": "Central African Republic",
            "last_update": "2020-03-20T20:43:03",
            "confirmed": 3,
            "deaths": 0,
            "recovered": 0,
            "latitude": 6.6111,
            "longitude": 20.9394
          },
          {
            
            "state_name": "",
            "country_id": "Congo (Brazzaville)",
            "last_update": "2020-03-19T20:13:56",
            "confirmed": 3,
            "deaths": 0,
            "recovered": 0,
            "latitude": -0.228,
            "longitude": 15.8277
          },
          {
            
            "state_name": "",
            "country_id": "El Salvador",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 3,
            "deaths": 0,
            "recovered": 0,
            "latitude": 13.7942,
            "longitude": -88.8965
          },
          {
            
            "state_name": "Saint Barthelemy",
            "country_id": 14,
            "last_update": "2020-03-16T14:38:45",
            "confirmed": 3,
            "deaths": 0,
            "recovered": 0,
            "latitude": 17.9,
            "longitude": -62.8333
          },
          {
            
            "state_name": "",
            "country_id": "Liberia",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 3,
            "deaths": 0,
            "recovered": 0,
            "latitude": 6.4281,
            "longitude": -9.4295
          },
          {
            
            "state_name": "",
            "country_id": "Madagascar",
            "last_update": "2020-03-20T22:13:53",
            "confirmed": 3,
            "deaths": 0,
            "recovered": 0,
            "latitude": -18.7669,
            "longitude": 46.8691
          },
          {
            
            "state_name": "",
            "country_id": "Namibia",
            "last_update": "2020-03-19T20:13:52",
            "confirmed": 3,
            "deaths": 0,
            "recovered": 0,
            "latitude": -22.9576,
            "longitude": 18.4904
          },
          {
            
            "state_name": "Curacao",
            "country_id": "Netherlands",
            "last_update": "2020-03-19T08:53:03",
            "confirmed": 3,
            "deaths": 1,
            "recovered": 0,
            "latitude": 12.1696,
            "longitude": -68.99
          },
          {
            
            "state_name": "Cayman Islands",
            "country_id": 26,
            "last_update": "2020-03-19T20:13:56",
            "confirmed": 3,
            "deaths": 1,
            "recovered": 0,
            "latitude": 19.3133,
            "longitude": -81.2546
          },
          {
            
            "state_name": "",
            "country_id": "Zimbabwe",
            "last_update": "2020-03-21T12:43:08",
            "confirmed": 3,
            "deaths": 0,
            "recovered": 0,
            "latitude": -19.0154,
            "longitude": 29.1549
          },
          {
            
            "state_name": "",
            "country_id": "Angola",
            "last_update": "2020-03-21T14:43:04",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": -11.2027,
            "longitude": 17.8739
          },
          {
            
            "state_name": "",
            "country_id": "Benin",
            "last_update": "2020-03-18T14:13:56",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": 9.3077,
            "longitude": 2.3158
          },
          {
            
            "state_name": "",
            "country_id": "Bhutan",
            "last_update": "2020-03-20T14:13:37",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": 27.5142,
            "longitude": 90.4336
          },
          {
            
            "state_name": "Prince Edward Island",
            "country_id": "Canada",
            "last_update": "2020-03-19T18:43:03",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": 46.5107,
            "longitude": -63.4168
          },
          {
            
            "state_name": "Greenland",
            "country_id": "Denmark",
            "last_update": "2020-03-19T08:13:19",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": 71.7069,
            "longitude": -42.6043
          },
          {
            
            "state_name": "",
            "country_id": "Guinea",
            "last_update": "2020-03-21T02:13:32",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": 9.9456,
            "longitude": -9.6966
          },
          {
            
            "state_name": "",
            "country_id": "Haiti",
            "last_update": "2020-03-21T14:43:04",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": 18.9712,
            "longitude": -72.2852
          },
          {
            
            "state_name": "",
            "country_id": "Kosovo",
            "last_update": "2020-03-15T18:20:19",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": 42.6026,
            "longitude": 20.903
          },
          {
            
            "state_name": "",
            "country_id": "Mauritania",
            "last_update": "2020-03-19T02:33:08",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": 21.0079,
            "longitude": -10.9408
          },
          {
            
            "state_name": "",
            "country_id": "Nicaragua",
            "last_update": "2020-03-21T02:13:34",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": 12.8654,
            "longitude": -85.2072
          },
          {
            
            "state_name": "",
            "country_id": "Saint Lucia",
            "last_update": "2020-03-17T04:32:19",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": 13.9094,
            "longitude": -60.9789
          },
          {
            
            "state_name": "",
            "country_id": "Sudan",
            "last_update": "2020-03-18T12:13:09",
            "confirmed": 2,
            "deaths": 1,
            "recovered": 0,
            "latitude": 12.8628,
            "longitude": 30.2176
          },
          {
            
            "state_name": "Bermuda",
            "country_id": 26,
            "last_update": "2020-03-21T03:13:14",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": 32.3078,
            "longitude": -64.7505
          },
          {
            
            "state_name": "",
            "country_id": "Zambia",
            "last_update": "2020-03-19T01:53:06",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0,
            "latitude": -13.1339,
            "longitude": 27.8493
          },
          {
            
            "state_name": "",
            "country_id": "Antigua and Barbuda",
            "last_update": "2020-03-15T18:20:19",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 17.0608,
            "longitude": -61.7964
          },
          {
            
            "state_name": "Northwest Territories",
            "country_id": "Canada",
            "last_update": "2020-03-21T21:13:30",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 64.8255,
            "longitude": -124.8457
          },
          {
            
            "state_name": "",
            "country_id": "Cape Verde",
            "last_update": "2020-03-21T23:43:02",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 15.1111,
            "longitude": -23.6167
          },
          {
            
            "state_name": "",
            "country_id": "Chad",
            "last_update": "2020-03-21T03:13:14",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 15.4542,
            "longitude": 18.7322
          },
          {
            
            "state_name": "Tibet",
            "country_id": 2,
            "last_update": "2020-03-11T02:18:14",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 1,
            "latitude": 31.6927,
            "longitude": 88.0924
          },
          {
            
            "state_name": "",
            "country_id": "Djibouti",
            "last_update": "2020-03-19T14:53:06",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 11.8251,
            "longitude": 42.5903
          },
          {
            
            "state_name": "",
            "country_id": "East Timor",
            "last_update": "2020-03-21T14:43:04",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": -8.55,
            "longitude": 125.56
          },
          {
            
            "state_name": "",
            "country_id": "Eritrea",
            "last_update": "2020-03-21T21:13:30",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 15.1794,
            "longitude": 39.7823
          },
          {
            
            "state_name": "",
            "country_id": "Eswatini",
            "last_update": "2020-03-15T06:41:54",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": -26.5225,
            "longitude": 31.4659
          },
          {
            
            "state_name": "",
            "country_id": "Fiji",
            "last_update": "2020-03-19T14:53:06",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": -17.7134,
            "longitude": 178.065
          },
          {
            
            "state_name": "",
            "country_id": "Gambia, The",
            "last_update": "2020-03-18T14:13:56",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 13.4432,
            "longitude": -15.3101
          },
          {
            
            "state_name": "",
            "country_id": "Holy See",
            "last_update": "2020-03-13T22:22:02",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 41.9029,
            "longitude": 12.4534
          },
          {
            
            "state_name": "",
            "country_id": "Nepal",
            "last_update": "2020-03-13T22:22:03",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 1,
            "latitude": 28.3949,
            "longitude": 84.124
          },
          {
            
            "state_name": "Sint Maarten",
            "country_id": "Netherlands",
            "last_update": "2020-03-20T21:13:30",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 18.0425,
            "longitude": -63.0548
          },
          {
            
            "state_name": "",
            "country_id": "Niger",
            "last_update": "2020-03-20T02:13:52",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 17.6078,
            "longitude": 8.0817
          },
          {
            
            "state_name": "",
            "country_id": "Papua New Guinea",
            "last_update": "2020-03-21T23:43:02",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": -6.315,
            "longitude": 143.9555
          },
          {
            
            "state_name": "",
            "country_id": "Saint Vincent and the Grenadines",
            "last_update": "2020-03-14T16:33:03",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 12.9843,
            "longitude": -61.2872
          },
          {
            
            "state_name": "",
            "country_id": "Somalia",
            "last_update": "2020-03-18T00:53:03",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 5.1521,
            "longitude": 46.1996
          },
          {
            
            "state_name": 8,
            "country_id": 8,
            "last_update": "2020-03-21T19:43:03",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 171,
            "latitude": 37.0902,
            "longitude": -95.7129
          },
          {
            
            "state_name": "",
            "country_id": "Uganda",
            "last_update": "2020-03-21T23:43:02",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 1.0,
            "longitude": 32.0
          },
          {
            
            "state_name": "Isle of Man",
            "country_id": 26,
            "last_update": "2020-03-20T15:13:21",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 54.2361,
            "longitude": -4.5481
          },
          {
            
            "state_name": "Montserrat",
            "country_id": 26,
            "last_update": "2020-03-18T11:53:04",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "latitude": 16.7425,
            "longitude": -62.1874
          },
          {
            
            "state_name": "From Diamond Princess",
            "country_id": "Australia",
            "last_update": "2020-03-14T02:33:04",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": 35.4437,
            "longitude": 139.638
          },
          {
            
            "state_name": "French Guiana",
            "country_id": 14,
            "last_update": "2020-03-18T14:33:15",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": 4.0,
            "longitude": -53.0
          },
          {
            
            "state_name": "Guadeloupe",
            "country_id": 14,
            "last_update": "2020-03-18T14:33:15",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": 16.25,
            "longitude": -61.5833
          },
          {
            
            "state_name": "Mayotte",
            "country_id": 14,
            "last_update": "2020-03-18T14:33:15",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": -12.8431,
            "longitude": 45.1383
          },
          {
            
            "state_name": "Reunion",
            "country_id": 14,
            "last_update": "2020-03-18T14:33:15",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": -21.1351,
            "longitude": 55.2471
          },
          {
            
            "state_name": "",
            "country_id": "Greenland",
            "last_update": "2020-03-19T09:33:04",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": 72.0,
            "longitude": -40.0
          },
          {
            
            "state_name": "",
            "country_id": "Guam",
            "last_update": "2020-03-18T19:14:33",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": 13.4443,
            "longitude": 144.7937
          },
          {
            
            "state_name": "",
            "country_id": "Guernsey",
            "last_update": "2020-03-17T18:33:03",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": 49.45,
            "longitude": -2.58
          },
          {
            
            "state_name": "",
            "country_id": "Jersey",
            "last_update": "2020-03-17T18:33:03",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": 49.19,
            "longitude": -2.11
          },
          {
            
            "state_name": "",
            "country_id": "Puerto Rico",
            "last_update": "2020-03-17T16:13:14",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": 18.2,
            "longitude": -66.5
          },
          {
            
            "state_name": "",
            "country_id": "Republic of the Congo",
            "last_update": "2020-03-17T21:33:03",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": -1.44,
            "longitude": 15.556
          },
          {
            
            "state_name": "",
            "country_id": "The Bahamas",
            "last_update": "2020-03-19T12:13:38",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": 24.25,
            "longitude": -76.0
          },
          {
            
            "state_name": "",
            "country_id": "The Gambia",
            "last_update": "2020-03-18T14:13:56",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "latitude": 13.4667,
            "longitude": -16.6
          }
         
      ]);
    });
};
