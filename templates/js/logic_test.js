var Total = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoicGRhbmNlbGpuaiIsImEiOiJjamxlMzU0NHYwaHloM3Zyc3licWE0Ynl1In0.da7ON4ZY2wZJNaS-8_0RTQ"),
    Female = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoicGRhbmNlbGpuaiIsImEiOiJjamxlMzU0NHYwaHloM3Zyc3licWE0Ynl1In0.da7ON4ZY2wZJNaS-8_0RTQ"),
    Male = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoicGRhbmNlbGpuaiIsImEiOiJjamxlMzU0NHYwaHloM3Zyc3licWE0Ynl1In0.da7ON4ZY2wZJNaS-8_0RTQ");

var myMap = L.map("map", {
    center: [
         37.09, -103
    ],
    zoom: 4,
    layers: [Total,Female,Male]
  });
  
  var states= {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -86.79113,32.806671 ]
    },
    "properties": {
    "id":1,
    "state":"AL",
    "female_salary":35012,
    "male_salary":47034,
    "combined_salary":40782.56,
    "median_home_price":128000,
    "size":5,
    "Name":"Alabama",
    "ratio_total":3.138596498,
    "ratio_male":2.721435557,
    "ratio_female":3.655889409
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -152.404419,61.370716 ]
    },
    "properties": {
    "id":2,
    "state":"AK",
    "female_salary":47518,
    "male_salary":56422,
    "combined_salary":52059.04,
    "median_home_price":273700,
    "size":5,
    "Name":"Alaska",
    "ratio_total":5.257492263,
    "ratio_male":4.850944667,
    "ratio_female":5.759922556
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -111.431221,33.729759 ]
    },
    "properties": {
    "id":4,
    "state":"AZ",
    "female_salary":37966,
    "male_salary":46386,
    "combined_salary":42091.8,
    "median_home_price":233400,
    "size":5,
    "Name":"Arizona",
    "ratio_total":5.545023021,
    "ratio_male":5.031690596,
    "ratio_female":6.147605753
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -92.373123,34.969704 ]
    },
    "properties": {
    "id":5,
    "state":"AR",
    "female_salary":32242,
    "male_salary":41156,
    "combined_salary":36609.86,
    "median_home_price":123000,
    "size":5,
    "Name":"Arkansas",
    "ratio_total":3.359750625,
    "ratio_male":2.988628633,
    "ratio_female":3.81489982
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.681564,36.116203 ]
    },
    "properties": {
    "id":6,
    "state":"CA",
    "female_salary":45489,
    "male_salary":51417,
    "combined_salary":48453,
    "median_home_price":529900,
    "size":5,
    "Name":"California",
    "ratio_total":10.93637133,
    "ratio_male":10.30592995,
    "ratio_female":11.64897008
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -105.311104,39.059811 ]
    },
    "properties": {
    "id":8,
    "state":"CO",
    "female_salary":43206,
    "male_salary":51264,
    "combined_salary":47235,
    "median_home_price":348400,
    "size":5,
    "Name":"Colorado",
    "ratio_total":7.375886525,
    "ratio_male":6.79619226,
    "ratio_female":8.063694857
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -72.755371,41.597782 ]
    },
    "properties": {
    "id":9,
    "state":"CT",
    "female_salary":50991,
    "male_salary":64220,
    "combined_salary":57473.21,
    "median_home_price":246800,
    "size":5,
    "Name":"Connecticut",
    "ratio_total":4.294174625,
    "ratio_male":3.843039552,
    "ratio_female":4.840069816
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -75.507141,39.318523 ]
    },
    "properties": {
    "id":10,
    "state":"DE",
    "female_salary":41771,
    "male_salary":50924,
    "combined_salary":46164.44,
    "median_home_price":245900,
    "size":5,
    "Name":"Delaware",
    "ratio_total":5.326610699,
    "ratio_male":4.828764433,
    "ratio_female":5.886859304
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -81.686783,27.766279 ]
    },
    "properties": {
    "id":12,
    "state":"FL",
    "female_salary":36112,
    "male_salary":41586,
    "combined_salary":38739.52,
    "median_home_price":217300,
    "size":5,
    "Name":"Florida",
    "ratio_total":5.609258969,
    "ratio_male":5.225316212,
    "ratio_female":6.017390341
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -83.643074,33.040619 ]
    },
    "properties": {
    "id":13,
    "state":"GA",
    "female_salary":38278,
    "male_salary":46712,
    "combined_salary":42326.32,
    "median_home_price":162100,
    "size":5,
    "Name":"Georgia",
    "ratio_total":3.829768333,
    "ratio_male":3.470200377,
    "ratio_female":4.234808506
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -157.498337,21.094318 ]
    },
    "properties": {
    "id":15,
    "state":"HI",
    "female_salary":41224,
    "male_salary":49373,
    "combined_salary":45217.01,
    "median_home_price":624200,
    "size":5,
    "Name":"Hawaii",
    "ratio_total":13.80453949,
    "ratio_male":12.64253742,
    "ratio_female":15.14166505
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -114.478828,44.240459 ]
    },
    "properties": {
    "id":16,
    "state":"ID",
    "female_salary":34403,
    "male_salary":45305,
    "combined_salary":39854,
    "median_home_price":200300,
    "size":5,
    "Name":"Idaho",
    "ratio_total":5.025844332,
    "ratio_male":4.421145569,
    "ratio_female":5.822166672
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -88.986137,40.349457 ]
    },
    "properties": {
    "id":17,
    "state":"IL",
    "female_salary":42108,
    "male_salary":53111,
    "combined_salary":47499.47,
    "median_home_price":170700,
    "size":5,
    "Name":"Illinois",
    "ratio_total":3.593724309,
    "ratio_male":3.21402346,
    "ratio_female":4.053861499
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -86.258278,39.849426 ]
    },
    "properties": {
    "id":18,
    "state":"IN",
    "female_salary":36440,
    "male_salary":49157,
    "combined_salary":42671.33,
    "median_home_price":126000,
    "size":5,
    "Name":"Indiana",
    "ratio_total":2.952802268,
    "ratio_male":2.563215819,
    "ratio_female":3.457738749
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.210526,42.011539 ]
    },
    "properties": {
    "id":19,
    "state":"IA",
    "female_salary":37791,
    "male_salary":49385,
    "combined_salary":43588,
    "median_home_price":131600,
    "size":5,
    "Name":"Iowa",
    "ratio_total":3.019179591,
    "ratio_male":2.664776754,
    "ratio_female":3.482310603
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.726486,38.5266 ]
    },
    "properties": {
    "id":20,
    "state":"KS",
    "female_salary":37091,
    "male_salary":47891,
    "combined_salary":42491,
    "median_home_price":128400,
    "size":5,
    "Name":"Kansas",
    "ratio_total":3.021816385,
    "ratio_male":2.681088305,
    "ratio_female":3.461756221
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -84.670067,37.66814 ]
    },
    "properties": {
    "id":21,
    "state":"KY",
    "female_salary":36259,
    "male_salary":45521,
    "combined_salary":40797.38,
    "median_home_price":138700,
    "size":5,
    "Name":"Kentucky",
    "ratio_total":3.39972812,
    "ratio_male":3.046945366,
    "ratio_female":3.825257178
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -91.867805,31.169546 ]
    },
    "properties": {
    "id":22,
    "state":"LA",
    "female_salary":34793,
    "male_salary":50031,
    "combined_salary":42107.24,
    "median_home_price":152441.72,
    "size":5,
    "Name":"Louisiana",
    "ratio_total":3.620320876,
    "ratio_male":3.046945294,
    "ratio_female":4.38139051
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -69.381927,44.693947 ]
    },
    "properties": {
    "id":23,
    "state":"ME",
    "female_salary":40240,
    "male_salary":47890,
    "combined_salary":43988.5,
    "median_home_price":219700,
    "size":5,
    "Name":"Maine",
    "ratio_total":4.994487196,
    "ratio_male":4.587596575,
    "ratio_female":5.459741551
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -76.802101,39.063946 ]
    },
    "properties": {
    "id":24,
    "state":"MD",
    "female_salary":51247,
    "male_salary":61321,
    "combined_salary":56082.52,
    "median_home_price":273500,
    "size":5,
    "Name":"Maryland",
    "ratio_total":4.876742343,
    "ratio_male":4.460136006,
    "ratio_female":5.33689777
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.530106,42.230171 ]
    },
    "properties": {
    "id":25,
    "state":"MA",
    "female_salary":51666,
    "male_salary":62868,
    "combined_salary":57154.98,
    "median_home_price":386500,
    "size":5,
    "Name":"Massachusetts",
    "ratio_total":6.762315375,
    "ratio_male":6.147801743,
    "ratio_female":7.480741687
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -84.536095,43.326618 ]
    },
    "properties": {
    "id":26,
    "state":"MI",
    "female_salary":39825,
    "male_salary":50869,
    "combined_salary":45236.56,
    "median_home_price":138700,
    "size":5,
    "Name":"Michigan",
    "ratio_total":3.066104054,
    "ratio_male":2.726611492,
    "ratio_female":3.482736974
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.900192,45.694454 ]
    },
    "properties": {
    "id":27,
    "state":"MN",
    "female_salary":44132,
    "male_salary":53200,
    "combined_salary":48575.32,
    "median_home_price":213200,
    "size":5,
    "Name":"Minnesota",
    "ratio_total":4.389060124,
    "ratio_male":4.007518797,
    "ratio_female":4.83096166
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -89.678696,32.741646 ]
    },
    "properties": {
    "id":28,
    "state":"MS",
    "female_salary":31757,
    "male_salary":42146,
    "combined_salary":36743.72,
    "median_home_price":120400,
    "size":5,
    "Name":"Mississippi",
    "ratio_total":3.276750422,
    "ratio_male":2.856736108,
    "ratio_female":3.791290109
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -92.288368,38.456085 ]
    },
    "properties": {
    "id":29,
    "state":"MO",
    "female_salary":36514,
    "male_salary":46543,
    "combined_salary":41327.92,
    "median_home_price":145500,
    "size":5,
    "Name":"Missouri",
    "ratio_total":3.520622378,
    "ratio_male":3.126141418,
    "ratio_female":3.984772964
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -110.454353,46.921925 ]
    },
    "properties": {
    "id":30,
    "state":"MT",
    "female_salary":34028,
    "male_salary":46545,
    "combined_salary":40286.5,
    "median_home_price":212200,
    "size":5,
    "Name":"Montana",
    "ratio_total":5.267273156,
    "ratio_male":4.559028897,
    "ratio_female":6.236040907
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.268082,41.12537 ]
    },
    "properties": {
    "id":31,
    "state":"NE",
    "female_salary":36699,
    "male_salary":47352,
    "combined_salary":41918.97,
    "median_home_price":157200,
    "size":5,
    "Name":"Nebraska",
    "ratio_total":3.750092142,
    "ratio_male":3.319817537,
    "ratio_female":4.283495463
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.055374,38.313515 ]
    },
    "properties": {
    "id":32,
    "state":"NV",
    "female_salary":36681,
    "male_salary":45326,
    "combined_salary":41003.5,
    "median_home_price":261000,
    "size":5,
    "Name":"Nevada",
    "ratio_total":6.365310278,
    "ratio_male":5.758284428,
    "ratio_female":7.115400344
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.563896,43.452492 ]
    },
    "properties": {
    "id":33,
    "state":"NH",
    "female_salary":44550,
    "male_salary":53581,
    "combined_salary":48975.19,
    "median_home_price":253600,
    "size":5,
    "Name":"New Hampshire",
    "ratio_total":5.17813203,
    "ratio_male":4.733021034,
    "ratio_female":5.692480359
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -74.521011,40.298904 ]
    },
    "properties": {
    "id":34,
    "state":"NJ",
    "female_salary":50574,
    "male_salary":62311,
    "combined_salary":56325.13,
    "median_home_price":312400,
    "size":5,
    "Name":"New Jersey",
    "ratio_total":5.5463698,
    "ratio_male":5.013561008,
    "ratio_female":6.177087041
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -106.248482,34.840515 ]
    },
    "properties": {
    "id":35,
    "state":"NM",
    "female_salary":34668,
    "male_salary":42297,
    "combined_salary":38406.21,
    "median_home_price":182300,
    "size":5,
    "Name":"New Mexico",
    "ratio_total":4.746628215,
    "ratio_male":4.309998345,
    "ratio_female":5.258451598
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -74.948051,42.165726 ]
    },
    "properties": {
    "id":36,
    "state":"NY",
    "female_salary":47358,
    "male_salary":53124,
    "combined_salary":50125.68,
    "median_home_price":309100,
    "size":5,
    "Name":"New York",
    "ratio_total":6.166499886,
    "ratio_male":5.818462465,
    "ratio_female":6.526880358
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.806419,35.630066 ]
    },
    "properties": {
    "id":37,
    "state":"NC",
    "female_salary":36987,
    "male_salary":45180,
    "combined_salary":40919.64,
    "median_home_price":166900,
    "size":5,
    "Name":"North Carolina",
    "ratio_total":4.07872601,
    "ratio_male":3.694112439,
    "ratio_female":4.512396247
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.784012,47.528912 ]
    },
    "properties": {
    "id":38,
    "state":"ND",
    "female_salary":38407,
    "male_salary":51789,
    "combined_salary":45231.82,
    "median_home_price":201500,
    "size":5,
    "Name":"North Dakota",
    "ratio_total":4.454828481,
    "ratio_male":3.890787619,
    "ratio_female":5.246439451
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.764915,40.388783 ]
    },
    "properties": {
    "id":39,
    "state":"OH",
    "female_salary":38750,
    "male_salary":50227,
    "combined_salary":44373.73,
    "median_home_price":131000,
    "size":5,
    "Name":"Ohio",
    "ratio_total":2.952197167,
    "ratio_male":2.608158958,
    "ratio_female":3.380645161
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.928917,35.565342 ]
    },
    "properties": {
    "id":40,
    "state":"OK",
    "female_salary":33972,
    "male_salary":46027,
    "combined_salary":39999.5,
    "median_home_price":117000,
    "size":5,
    "Name":"Oklahoma",
    "ratio_total":2.925036563,
    "ratio_male":2.541986225,
    "ratio_female":3.444012716
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.070938,44.572021 ]
    },
    "properties": {
    "id":41,
    "state":"OR",
    "female_salary":40193,
    "male_salary":50676,
    "combined_salary":45434.5,
    "median_home_price":320500,
    "size":5,
    "Name":"Oregon",
    "ratio_total":7.054110863,
    "ratio_male":6.324492857,
    "ratio_female":7.974025328
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -77.209755,40.590752 ]
    },
    "properties": {
    "id":42,
    "state":"PA",
    "female_salary":41047,
    "male_salary":51780,
    "combined_salary":46306.17,
    "median_home_price":163400,
    "size":5,
    "Name":"Pennsylvania",
    "ratio_total":3.52868743,
    "ratio_male":3.155658555,
    "ratio_female":3.980802495
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.51178,41.680893 ]
    },
    "properties": {
    "id":44,
    "state":"RI",
    "female_salary":43541,
    "male_salary":53400,
    "combined_salary":48371.91,
    "median_home_price":268000,
    "size":5,
    "Name":"Rhode Island",
    "ratio_total":5.540405578,
    "ratio_male":5.018726592,
    "ratio_female":6.155118164
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.945007,33.856892 ]
    },
    "properties": {
    "id":45,
    "state":"SC",
    "female_salary":35043,
    "male_salary":45038,
    "combined_salary":39840.6,
    "median_home_price":149300,
    "size":5,
    "Name":"South Carolina",
    "ratio_total":3.747433523,
    "ratio_male":3.314978463,
    "ratio_female":4.260479982
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.438828,44.299782 ]
    },
    "properties": {
    "id":46,
    "state":"SD",
    "female_salary":35436,
    "male_salary":45384,
    "combined_salary":40410,
    "median_home_price":180900,
    "size":5,
    "Name":"South Dakota",
    "ratio_total":4.476614699,
    "ratio_male":3.985986251,
    "ratio_female":5.104977988
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -86.692345,35.747845 ]
    },
    "properties": {
    "id":47,
    "state":"TN",
    "female_salary":35916,
    "male_salary":43661,
    "combined_salary":39711.05,
    "median_home_price":147100,
    "size":5,
    "Name":"Tennessee",
    "ratio_total":3.704258638,
    "ratio_male":3.369139507,
    "ratio_female":4.095667669
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.563461,31.054487 ]
    },
    "properties": {
    "id":48,
    "state":"TX",
    "female_salary":37576,
    "male_salary":47351,
    "combined_salary":42365.75,
    "median_home_price":175200,
    "size":5,
    "Name":"Texas",
    "ratio_total":4.135415991,
    "ratio_male":3.700027455,
    "ratio_female":4.662550564
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -111.862434,40.150032 ]
    },
    "properties": {
    "id":49,
    "state":"UT",
    "female_salary":36022,
    "male_salary":51099,
    "combined_salary":43560.5,
    "median_home_price":264100,
    "size":5,
    "Name":"Utah",
    "ratio_total":6.062832153,
    "ratio_male":5.168398599,
    "ratio_female":7.33163067
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -72.710686,44.045876 ]
    },
    "properties": {
    "id":50,
    "state":"VT",
    "female_salary":41122,
    "male_salary":47840,
    "combined_salary":44481,
    "median_home_price":223100,
    "size":5,
    "Name":"Vermont",
    "ratio_total":5.015624649,
    "ratio_male":4.663461538,
    "ratio_female":5.42531978
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -78.169968,37.769337 ]
    },
    "properties": {
    "id":51,
    "state":"VA",
    "female_salary":44798,
    "male_salary":55817,
    "combined_salary":50087.12,
    "median_home_price":246300,
    "size":5,
    "Name":"Virginia",
    "ratio_total":4.917431867,
    "ratio_male":4.412634144,
    "ratio_female":5.498013304
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -121.490494,47.400902 ]
    },
    "properties": {
    "id":53,
    "state":"WA",
    "female_salary":45056,
    "male_salary":58864,
    "combined_salary":51960,
    "median_home_price":355600,
    "size":5,
    "Name":"Washington",
    "ratio_total":6.843725943,
    "ratio_male":6.041043762,
    "ratio_female":7.892400568
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.954453,38.491226 ]
    },
    "properties": {
    "id":54,
    "state":"WV",
    "female_salary":33228,
    "male_salary":46029,
    "combined_salary":39628.5,
    "median_home_price":104100,
    "size":5,
    "Name":"West Virginia",
    "ratio_total":2.626897309,
    "ratio_male":2.261617676,
    "ratio_female":3.132899964
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -89.616508,44.268543 ]
    },
    "properties": {
    "id":55,
    "state":"WI",
    "female_salary":39440,
    "male_salary":50399,
    "combined_salary":44919.5,
    "median_home_price":170100,
    "size":5,
    "Name":"Wisconsin",
    "ratio_total":3.786774118,
    "ratio_male":3.375066966,
    "ratio_female":4.312880325
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -107.30249,42.755966 ]
    },
    "properties": {
    "id":56,
    "state":"WY",
    "female_salary":39338,
    "male_salary":51234,
    "combined_salary":45286,
    "median_home_price":202600,
    "size":5,
    "Name":"Wyoming",
    "ratio_total":4.473788809,
    "ratio_male":3.954405278,
    "ratio_female":5.150236413
    }
  }
]
}



// var geojsonLayer = new L.GeoJSON.AJAX("foo.geojson");       
// geojsonLayer.addTo(map);



function styleInfo (feature){
 return {
      opacity: 0.9,
      fillOpacity: 0.9,
      fillColor: getColor(feature.properties.ratio_total),
      //color: "#000000",
      //radius: getRadius(feature.properties.ratio_total),
      stroke: true,
      weight: 0.3
    };
  }

 // This function determines the color of the marker based on the quantity.
  function getColor(ratio) {
    switch (true) {
      case ratio > 12:
        return "#bd0026";
      case ratio > 10:
        return "#f03b20";
      case ratio > 8:
        return "#fd8d3c";
      case ratio > 6:
        return "#feb24c";
      case ratio > 4:
        return "#fed976";
      case ratio > 2:
        return "#ffffb2";
      default:
        return "#ffffb2";
    }
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
  function getRadius(ratio) {
    if (ratio === 0) {
      return 1;
    }

    return ratio * 4;
  }
  console.log(states)
  var image = 'https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-01/Hawaii1_Web72DPI_crop.jpg?itok=ZnJSRAUq'
  var image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeyFO3dLwf5MFJsjjx2MkrLCf4eVfRTHGEI4zgQoxs6cijH2t'
  // Here we add a GeoJSON layer to the map once the file is loaded.
//  var Total = L.geoJson(states, {

//     // We turn each feature into a circleMarker on the map.
//     pointToLayer: function(feature, latlng) {
//       return L.circleMarker(latlng,{radius:getRadius(feature.properties.ratio_total)});
//     },
//     // We set the style for each circleMarker using our styleInfo function.
//     style: styleInfo,
//     // We create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
//      onEachFeature: function(feature, layer) {
//                 if(feature.properties.state==='HI'){
//                 layer.bindPopup("<h3><strong>"+feature.properties.state+"</h3></strong><br>" +  "<img src="+ image +">"+"<br>"+"TTL Housing - Income Ratio: "+ feature.properties.ratio_total+"<br>" +" Median Housing Price: " +feature.properties.median_home_price +"<br>"+" Median Houshold Income: " +feature.properties.combined_salary, {closeButton: false, offset: L.point(0, -20)});
//                 }
//                 else if(feature.properties.state==='WV'){
//                 layer.bindPopup("<h3><strong>"+feature.properties.state+"</h3></strong><br>" +  "<img src="+ image2 +">"+"<br>"+"TTL Housing - Income Ratio: "+ feature.properties.ratio_total+"<br>" +" Median Housing Price: " +feature.properties.median_home_price +"<br>"+" Median Houshold Income: " +feature.properties.combined_salary, {closeButton: false, offset: L.point(0, -20)});
//                 }
//                 else
//                 layer.bindPopup("<h3><strong>"+feature.properties.state+"</h3></strong><br>" + "TTL Housing - Income Ratio: "+ feature.properties.ratio_total+"<br>" +" Median Housing Price: " +feature.properties.median_home_price +"<br>"+" Median Houshold Income: " +feature.properties.combined_salary, {closeButton: false, offset: L.point(0, -20)});
//                 layer.on('mouseover', function() { layer.openPopup(); });
//                 layer.on('mouseout', function() { layer.closePopup(); }); 
                
//                 }         
//    })
  var Age = L.geoJson(states, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng,{radius:getRadius(feature.properties.ratio_female)});
    },
    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // We create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
     onEachFeature: function(feature, layer) {
    
                layer.bindPopup("<h3><strong>"+feature.properties.state+"</h3></strong><br>" + "Female Housing - Income Ratio: "+ feature.properties.ratio_female+"<br>" +" Median Housing Price: " +feature.properties.median_home_price +"<br>"+" Median Female Income: " +feature.properties.female_salary, {closeButton: false, offset: L.point(0, -20)});
                layer.on('mouseover', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });    
            }
   })
   var Units = L.geoJson(states, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng,{radius:getRadius(feature.properties.ratio_male)});
    },
    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // We create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
     onEachFeature: function(feature, layer) {
    
                layer.bindPopup("<h3><strong>"+feature.properties.state+"</h3></strong><br>" +"Male Housing - Income Ratio: "+ feature.properties.ratio_male+"<br>" +" Median Housing Price: " +feature.properties.median_home_price +"<br>"+" Median Male Income: " +feature.properties.male_salary, {closeButton: false, offset: L.point(0, -20)});
                layer.on('mouseover', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });   
                
            }
   })
   var all = L.layerGroup([Total, Female, Male]);

   var baseMaps = {
    "Total": Total,
    "Age": Age,
    "Units": Units
    
  };
  var overlayMaps = {
    "All": all
    
  }

  L.control.layers(baseMaps,overlayMaps).addTo(myMap);
  
  
  var legend = L.control({position: 'bottomright'});

  // // Then add all the details for the legend
   legend.onAdd = function (myMap) {
     var div = L.DomUtil.create('div', 'info legend'),//;

      grades = [2, 4, 6, 8, 10, 12],//;
      colors = [
      "#ffffb2",
      "#fed976",
      "#feb24c",
      "#fd8d3c",
      "#f03b20",
      "#bd0026"
     ];

  //   // Looping through our intervals to generate a label with a colored square for each interval.
     for (var i = 0; i < grades.length; i++) {
       div.innerHTML +=
         "<i style='background: " + colors[i] + "></i> " +
         grades[i] + (grades[i] ? "&ndash;" + grades[i] + "<br>" : "+");
     }
     return div;
   };

  // // Finally, we our legend to the map.
   legend.addTo(myMap);

