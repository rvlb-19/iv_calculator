var lvlToCpm = {
	"1": 0.094,
	"1.5": 0.135137432,
	"2": 0.16639787,
  	"2.5": 0.192650919,
  	"3": 0.21573247,
	"3.5": 0.236572661,
	"4": 0.25572005,
	"4.5": 0.273530381,
	"5": 0.29024988,
	"5.5": 0.306057377,
	"6": 0.3210876,
	"6.5": 0.335445036,
	"7": 0.34921268,
	"7.5": 0.362457751,
	"8": 0.37523559,
	"8.5": 0.387592406,
	"9": 0.39956728,
	"9.5": 0.411193551,
	"10": 0.42250001,
	"10.5": 0.432926419,
	"11": 0.44310755,
	"11.5": 0.4530599578,
	"12": 0.46279839,
	"12.5": 0.472336083,
	"13": 0.48168495,
	"13.5": 0.4908558,
	"14": 0.49985844,
	"14.5": 0.508701765,
	"15": 0.51739395,
	"15.5": 0.525942511,
	"16": 0.53435433,
	"16.5": 0.542635767,
	"17": 0.55079269,
	"17.5": 0.558830576,
	"18": 0.56675452,
	"18.5": 0.574569153,
	"19": 0.58227891,
	"19.5": 0.589887917,
	"20": 0.59740001,
	"20.5": 0.604818814,
	"21": 0.61215729,
	"21.5": 0.619399365,
	"22": 0.62656713,
	"22.5": 0.633644533,
	"23": 0.64065295,
	"23.5": 0.647576426,
	"24": 0.65443563,
	"24.5": 0.661214806,
	"25": 0.667934,
	"25.5": 0.674577537,
	"26": 0.68116492,
	"26.5": 0.687680648,
	"27": 0.69414365,
	"27.5": 0.700538673,
	"28": 0.70688421,
	"28.5": 0.713164996,
	"29": 0.71939909,
	"29.5": 0.725571552,
	"30": 0.7317,
	"30.5": 0.734741009,
	"31": 0.73776948,
	"31.5": 0.740785574,
	"32": 0.74378943,
	"32.5": 0.746781211,
	"33": 0.74976104,
	"33.5": 0.752729087,
	"34": 0.75568551,
	"34.5": 0.758630378,
	"35": 0.76156384,
	"35.5": 0.764486065,
	"36": 0.76739717,
	"36.5": 0.770297266,
	"37": 0.7731865,
	"37.5": 0.776064962,
	"38": 0.77893275,
	"38.5": 0.781790055,
	"39": 0.78463697,
	"39.5": 0.787473578,
	"40": 0.79030001
}

var dustToLvl = {
	"200" : [1,1.5,2,2.5],
	"400" : [3,3.5,4,4.5],
	"600" : [5,5.5,6,6.5],
	"800" : [7,7.5,8,8.5],
	"1000" : [9,9.5,10,10.5],
	"1300" : [11,11.5,12,12.5],
	"1600" : [13,13.5,14,14.5],
	"1900" : [15,15.5,16,16.5],
	"2200" : [17,17.5,18,18.5],
	"2500" : [19,19.5,20,20.5],
	"3000" : [21,21.5,22,22.5],
	"3500" : [23,23.5,24,24.5],
	"4000" : [25,25.5,26,26.5],
	"4500" : [27,27.5,28,28.5],
	"5000" : [29,29.5,30,30.5],
	"6000" : [31,31.5,32,32.5],
	"7000" : [33,33.5,34,34.5],
	"8000" : [35,35.5,36,36.5],
	"9000" : [37,37.5,38,38.5],
	"10000" : [39,39.5,40,40.5]
}

var pkmnList = [
	{
		"dex" : 1,
		"name" : "Bulbasaur",
		"base" : {
			"stamina" : 90,
			"attack" : 126,
			"defense" : 126
		}
	},
	{
		"dex" : 2,
		"name" : "Ivysaur",
		"base" : {
			"stamina" : 120,
			"attack" : 156,
			"defense" : 158
		}
	},
	{
		"dex" : 3,
		"name" : "Venusaur",
		"base" : {
			"stamina" : 160,
			"attack" : 198,
			"defense" : 200
		}
	},
	{
		"dex" : 4,
		"name" : "Charmander",
		"base" : {
			"stamina" : 78,
			"attack" : 128,
			"defense" : 108
		}
	},
	{
		"dex" : 5,
		"name" : "Charmeleon",
		"base" : {
			"stamina" : 116,
			"attack" : 160,
			"defense" : 140
		}
	},
	{
		"dex" : 6,
		"name" : "Charizard",
		"base" : {
			"stamina" : 156,
			"attack" : 212,
			"defense" : 182
		}
	},
	{
		"dex" : 7,
		"name" : "Squirtle",
		"base" : {
			"stamina" : 88,
			"attack" : 112,
			"defense" : 142
		}
	},
	{
		"dex" : 8,
		"name" : "Wartortle",
		"base" : {
			"stamina" : 118,
			"attack" : 144,
			"defense" : 176
		}
	},
	{
		"dex" : 9,
		"name" : "Blastoise",
		"base" : {
			"stamina" : 158,
			"attack" : 186,
			"defense" : 222
		}
	},
	{
		"dex" : 10,
		"name" : "Caterpie",
		"base" : {
			"stamina" : 90,
			"attack" : 62,
			"defense" : 66
		}
	},
	{
		"dex" : 11,
		"name" : "Metapod",
		"base" : {
			"stamina" : 100,
			"attack" : 56,
			"defense" : 86
		}
	},
	{
		"dex" : 12,
		"name" : "Butterfree",
		"base" : {
			"stamina" : 120,
			"attack" : 144,
			"defense" : 144
		}
	},
	{
		"dex" : 13,
		"name" : "Weedle",
		"base" : {
			"stamina" : 80,
			"attack" : 68,
			"defense" : 64
		}
	},
	{
		"dex" : 14,
		"name" : "Kakuna",
		"base" : {
			"stamina" : 90,
			"attack" : 62,
			"defense" : 82
		}
	},
	{
		"dex" : 15,
		"name" : "Beedrill",
		"base" : {
			"stamina" : 130,
			"attack" : 144,
			"defense" : 130
		}
	},
	{
		"dex" : 16,
		"name" : "Pidgey",
		"base" : {
			"stamina" : 80,
			"attack" : 94,
			"defense" : 90
		}
	},
	{
		"dex" : 17,
		"name" : "Pidgeotto",
		"base" : {
			"stamina" : 126,
			"attack" : 126,
			"defense" : 122
		}
	},
	{
		"dex" : 18,
		"name" : "Pidgeot",
		"base" : {
			"stamina" : 166,
			"attack" : 170,
			"defense" : 166
		}
	},
	{
		"dex" : 19,
		"name" : "Rattata",
		"base" : {
			"stamina" : 60,
			"attack" : 92,
			"defense" : 86
		}
	},
	{
		"dex" : 20,
		"name" : "Raticate",
		"base" : {
			"stamina" : 110,
			"attack" : 146,
			"defense" : 150
		}
	},
	{
		"dex" : 21,
		"name" : "Spearow",
		"base" : {
			"stamina" : 80,
			"attack" : 102,
			"defense" : 78
		}
	},
	{
		"dex" : 22,
		"name" : "Fearow",
		"base" : {
			"stamina" : 130,
			"attack" : 168,
			"defense" : 146
		}
	},
	{
		"dex" : 23,
		"name" : "Ekans",
		"base" : {
			"stamina" : 70,
			"attack" : 112,
			"defense" : 112
		}
	},
	{
		"dex" : 24,
		"name" : "Arbok",
		"base" : {
			"stamina" : 120,
			"attack" : 166,
			"defense" : 166
		}
	},
	{
		"dex" : 25,
		"name" : "Pikachu",
		"base" : {
			"stamina" : 70,
			"attack" : 124,
			"defense" : 108
		}
	},
	{
		"dex" : 26,
		"name" : "Raichu",
		"base" : {
			"stamina" : 120,
			"attack" : 200,
			"defense" : 154
		}
	},
	{
		"dex" : 27,
		"name" : "Sandshrew",
		"base" : {
			"stamina" : 100,
			"attack" : 90,
			"defense" : 114
		}
	},
	{
		"dex" : 28,
		"name" : "Sandslash",
		"base" : {
			"stamina" : 150,
			"attack" : 150,
			"defense" : 172
		}
	},
	{
		"dex" : 29,
		"name" : "Nidoran♀",
		"base" : {
			"stamina" : 110,
			"attack" : 100,
			"defense" : 104
		}
	},
	{
		"dex" : 30,
		"name" : "Nidorina",
		"base" : {
			"stamina" : 140,
			"attack" : 132,
			"defense" : 136
		}
	},
	{
		"dex" : 31,
		"name" : "Nidoqueen",
		"base" : {
			"stamina" : 180,
			"attack" : 184,
			"defense" : 190
		}
	},
	{
		"dex" : 32,
		"name" : "Nidoran♂",
		"base" : {
			"stamina" : 92,
			"attack" : 110,
			"defense" : 94
		}
	},
	{
		"dex" : 33,
		"name" : "Nidorino",
		"base" : {
			"stamina" : 122,
			"attack" : 142,
			"defense" : 128
		}
	},
	{
		"dex" : 34,
		"name" : "Nidoking",
		"base" : {
			"stamina" : 162,
			"attack" : 204,
			"defense" : 170
		}
	},
	{
		"dex" : 35,
		"name" : "Clefairy",
		"base" : {
			"stamina" : 140,
			"attack" : 116,
			"defense" : 124
		}
	},
	{
		"dex" : 36,
		"name" : "Clefable",
		"base" : {
			"stamina" : 190,
			"attack" : 178,
			"defense" : 178
		}
	},
	{
		"dex" : 37,
		"name" : "Vulpix",
		"base" : {
			"stamina" : 76,
			"attack" : 106,
			"defense" : 118
		}
	},
	{
		"dex" : 38,
		"name" : "Ninetales",
		"base" : {
			"stamina" : 146,
			"attack" : 176,
			"defense" : 194
		}
	},
	{
		"dex" : 39,
		"name" : "Jigglypuff",
		"base" : {
			"stamina" : 230,
			"attack" : 98,
			"defense" : 54
		}
	},
	{
		"dex" : 40,
		"name" : "Wigglytuff",
		"base" : {
			"stamina" : 280,
			"attack" : 168,
			"defense" : 108
		}
	},
	{
		"dex" : 41,
		"name" : "Zubat",
		"base" : {
			"stamina" : 80,
			"attack" : 88,
			"defense" : 90
		}
	},
	{
		"dex" : 42,
		"name" : "Golbat",
		"base" : {
			"stamina" : 150,
			"attack" : 164,
			"defense" : 164
		}
	},
	{
		"dex" : 43,
		"name" : "Oddish",
		"base" : {
			"stamina" : 90,
			"attack" : 134,
			"defense" : 130
		}
	},
	{
		"dex" : 44,
		"name" : "Gloom",
		"base" : {
			"stamina" : 120,
			"attack" : 162,
			"defense" : 158
		}
	},
	{
		"dex" : 45,
		"name" : "Vileplume",
		"base" : {
			"stamina" : 150,
			"attack" : 202,
			"defense" : 190
		}
	},
	{
		"dex" : 46,
		"name" : "Paras",
		"base" : {
			"stamina" : 70,
			"attack" : 122,
			"defense" : 120
		}
	},
	{
		"dex" : 47,
		"name" : "Parasect",
		"base" : {
			"stamina" : 120,
			"attack" : 162,
			"defense" : 170
		}
	},
	{
		"dex" : 48,
		"name" : "Venonat",
		"base" : {
			"stamina" : 120,
			"attack" : 108,
			"defense" : 118
		}
	},
	{
		"dex" : 49,
		"name" : "Venomoth",
		"base" : {
			"stamina" : 140,
			"attack" : 172,
			"defense" : 154
		}
	},
	{
		"dex" : 50,
		"name" : "Diglett",
		"base" : {
			"stamina" : 20,
			"attack" : 108,
			"defense" : 86
		}
	},
	{
		"dex" : 51,
		"name" : "Dugtrio",
		"base" : {
			"stamina" : 70,
			"attack" : 148,
			"defense" : 140
		}
	},
	{
		"dex" : 52,
		"name" : "Meowth",
		"base" : {
			"stamina" : 80,
			"attack" : 104,
			"defense" : 94
		}
	},
	{
		"dex" : 53,
		"name" : "Persian",
		"base" : {
			"stamina" : 130,
			"attack" : 156,
			"defense" : 146
		}
	},
	{
		"dex" : 54,
		"name" : "Psyduck",
		"base" : {
			"stamina" : 100,
			"attack" : 132,
			"defense" : 112
		}
	},
	{
		"dex" : 55,
		"name" : "Golduck",
		"base" : {
			"stamina" : 160,
			"attack" : 194,
			"defense" : 176
		}
	},
	{
		"dex" : 56,
		"name" : "Mankey",
		"base" : {
			"stamina" : 80,
			"attack" : 112,
			"defense" : 96
		}
	},
	{
		"dex" : 57,
		"name" : "Primeape",
		"base" : {
			"stamina" : 130,
			"attack" : 178,
			"defense" : 150
		}
	},
	{
		"dex" : 58,
		"name" : "Growlithe",
		"base" : {
			"stamina" : 110,
			"attack" : 156,
			"defense" : 110
		}
	},
	{
		"dex" : 59,
		"name" : "Arcanine",
		"base" : {
			"stamina" : 180,
			"attack" : 230,
			"defense" : 180
		}
	},
	{
		"dex" : 60,
		"name" : "Poliwag",
		"base" : {
			"stamina" : 80,
			"attack" : 108,
			"defense" : 98
		}
	},
	{
		"dex" : 61,
		"name" : "Poliwhirl",
		"base" : {
			"stamina" : 130,
			"attack" : 132,
			"defense" : 132
		}
	},
	{
		"dex" : 62,
		"name" : "Poliwrath",
		"base" : {
			"stamina" : 180,
			"attack" : 180,
			"defense" : 202
		}
	},
	{
		"dex" : 63,
		"name" : "Abra",
		"base" : {
			"stamina" : 50,
			"attack" : 110,
			"defense" : 76
		}
	},
	{
		"dex" : 64,
		"name" : "Kadabra",
		"base" : {
			"stamina" : 80,
			"attack" : 150,
			"defense" : 112
		}
	},
	{
		"dex" : 65,
		"name" : "Alakazam",
		"base" : {
			"stamina" : 110,
			"attack" : 186,
			"defense" : 152
		}
	},
	{
		"dex" : 66,
		"name" : "Machop",
		"base" : {
			"stamina" : 140,
			"attack" : 118,
			"defense" : 96
		}
	},
	{
		"dex" : 67,
		"name" : "Machoke",
		"base" : {
			"stamina" : 160,
			"attack" : 154,
			"defense" : 144
		}
	},
	{
		"dex" : 68,
		"name" : "Machamp",
		"base" : {
			"stamina" : 180,
			"attack" : 198,
			"defense" : 180
		}
	},
	{
		"dex" : 69,
		"name" : "Bellsprout",
		"base" : {
			"stamina" : 100,
			"attack" : 158,
			"defense" : 78
		}
	},
	{
		"dex" : 70,
		"name" : "Weepinbell",
		"base" : {
			"stamina" : 130,
			"attack" : 190,
			"defense" : 110
		}
	},
	{
		"dex" : 71,
		"name" : "Victreebel",
		"base" : {
			"stamina" : 160,
			"attack" : 222,
			"defense" : 152
		}
	},
	{
		"dex" : 72,
		"name" : "Tentacool",
		"base" : {
			"stamina" : 80,
			"attack" : 106,
			"defense" : 136
		}
	},
	{
		"dex" : 73,
		"name" : "Tentacruel",
		"base" : {
			"stamina" : 160,
			"attack" : 170,
			"defense" : 196
		}
	},
	{
		"dex" : 74,
		"name" : "Geodude",
		"base" : {
			"stamina" : 80,
			"attack" : 106,
			"defense" : 118
		}
	},
	{
		"dex" : 75,
		"name" : "Graveler",
		"base" : {
			"stamina" : 110,
			"attack" : 142,
			"defense" : 156
		}
	},
	{
		"dex" : 76,
		"name" : "Golem",
		"base" : {
			"stamina" : 160,
			"attack" : 176,
			"defense" : 198
		}
	},
	{
		"dex" : 77,
		"name" : "Ponyta",
		"base" : {
			"stamina" : 100,
			"attack" : 168,
			"defense" : 138
		}
	},
	{
		"dex" : 78,
		"name" : "Rapidash",
		"base" : {
			"stamina" : 130,
			"attack" : 200,
			"defense" : 170
		}
	},
	{
		"dex" : 79,
		"name" : "Slowpoke",
		"base" : {
			"stamina" : 180,
			"attack" : 110,
			"defense" : 110
		}
	},
	{
		"dex" : 80,
		"name" : "Slowbro",
		"base" : {
			"stamina" : 190,
			"attack" : 184,
			"defense" : 198
		}
	},
	{
		"dex" : 81,
		"name" : "Magnemite",
		"base" : {
			"stamina" : 50,
			"attack" : 128,
			"defense" : 138
		}
	},
	{
		"dex" : 82,
		"name" : "Magneton",
		"base" : {
			"stamina" : 100,
			"attack" : 186,
			"defense" : 180
		}
	},
	{
		"dex" : 83,
		"name" : "Farfetch'd",
		"base" : {
			"stamina" : 104,
			"attack" : 138,
			"defense" : 132
		}
	},
	{
		"dex" : 84,
		"name" : "Doduo",
		"base" : {
			"stamina" : 70,
			"attack" : 126,
			"defense" : 96
		}
	},
	{
		"dex" : 85,
		"name" : "Dodrio",
		"base" : {
			"stamina" : 120,
			"attack" : 182,
			"defense" : 150
		}
	},
	{
		"dex" : 86,
		"name" : "Seel",
		"base" : {
			"stamina" : 130,
			"attack" : 104,
			"defense" : 138
		}
	},
	{
		"dex" : 87,
		"name" : "Dewgong",
		"base" : {
			"stamina" : 180,
			"attack" : 156,
			"defense" : 192
		}
	},
	{
		"dex" : 88,
		"name" : "Grimer",
		"base" : {
			"stamina" : 160,
			"attack" : 124,
			"defense" : 110
		}
	},
	{
		"dex" : 89,
		"name" : "Muk",
		"base" : {
			"stamina" : 210,
			"attack" : 180,
			"defense" : 188
		}
	},
	{
		"dex" : 90,
		"name" : "Shellder",
		"base" : {
			"stamina" : 60,
			"attack" : 120,
			"defense" : 112
		}
	},
	{
		"dex" : 91,
		"name" : "Cloyster",
		"base" : {
			"stamina" : 100,
			"attack" : 196,
			"defense" : 196
		}
	},
	{
		"dex" : 92,
		"name" : "Gastly",
		"base" : {
			"stamina" : 60,
			"attack" : 136,
			"defense" : 82
		}
	},
	{
		"dex" : 93,
		"name" : "Haunter",
		"base" : {
			"stamina" : 90,
			"attack" : 172,
			"defense" : 118
		}
	},
	{
		"dex" : 94,
		"name" : "Gengar",
		"base" : {
			"stamina" : 120,
			"attack" : 204,
			"defense" : 156
		}
	},
	{
		"dex" : 95,
		"name" : "Onix",
		"base" : {
			"stamina" : 70,
			"attack" : 90,
			"defense" : 186
		}
	},
	{
		"dex" : 96,
		"name" : "Drowzee",
		"base" : {
			"stamina" : 120,
			"attack" : 104,
			"defense" : 140
		}
	},
	{
		"dex" : 97,
		"name" : "Hypno",
		"base" : {
			"stamina" : 170,
			"attack" : 162,
			"defense" : 196
		}
	},
	{
		"dex" : 98,
		"name" : "Krabby",
		"base" : {
			"stamina" : 60,
			"attack" : 116,
			"defense" : 110
		}
	},
	{
		"dex" : 99,
		"name" : "Kingler",
		"base" : {
			"stamina" : 110,
			"attack" : 178,
			"defense" : 168
		}
	},
	{
		"dex" : 100,
		"name" : "Voltorb",
		"base" : {
			"stamina" : 80,
			"attack" : 102,
			"defense" : 124
		}
	},
	{
		"dex" : 101,
		"name" : "Electrode",
		"base" : {
			"stamina" : 120,
			"attack" : 150,
			"defense" : 174
		}
	},
	{
		"dex" : 102,
		"name" : "Exeggcute",
		"base" : {
			"stamina" : 120,
			"attack" : 110,
			"defense" : 132
		}
	},
	{
		"dex" : 103,
		"name" : "Exeggutor",
		"base" : {
			"stamina" : 190,
			"attack" : 232,
			"defense" : 164
		}
	},
	{
		"dex" : 104,
		"name" : "Cubone",
		"base" : {
			"stamina" : 100,
			"attack" : 102,
			"defense" : 150
		}
	},
	{
		"dex" : 105,
		"name" : "Marowak",
		"base" : {
			"stamina" : 120,
			"attack" : 140,
			"defense" : 202
		}
	},
	{
		"dex" : 106,
		"name" : "Hitmonlee",
		"base" : {
			"stamina" : 100,
			"attack" : 148,
			"defense" : 172
		}
	},
	{
		"dex" : 107,
		"name" : "Hitmonchan",
		"base" : {
			"stamina" : 100,
			"attack" : 138,
			"defense" : 204
		}
	},
	{
		"dex" : 108,
		"name" : "Lickitung",
		"base" : {
			"stamina" : 180,
			"attack" : 126,
			"defense" : 160
		}
	},
	{
		"dex" : 109,
		"name" : "Koffing",
		"base" : {
			"stamina" : 80,
			"attack" : 136,
			"defense" : 142
		}
	},
	{
		"dex" : 110,
		"name" : "Weezing",
		"base" : {
			"stamina" : 130,
			"attack" : 190,
			"defense" : 198
		}
	},
	{
		"dex" : 111,
		"name" : "Rhyhorn",
		"base" : {
			"stamina" : 160,
			"attack" : 110,
			"defense" : 116
		}
	},
	{
		"dex" : 112,
		"name" : "Rhydon",
		"base" : {
			"stamina" : 210,
			"attack" : 116,
			"defense" : 160
		}
	},
	{
		"dex" : 113,
		"name" : "Chansey",
		"base" : {
			"stamina" : 500,
			"attack" : 40,
			"defense" : 60
		}
	},
	{
		"dex" : 114,
		"name" : "Tangela",
		"base" : {
			"stamina" : 130,
			"attack" : 164,
			"defense" : 152
		}
	},
	{
		"dex" : 115,
		"name" : "Kangaskhan",
		"base" : {
			"stamina" : 210,
			"attack" : 142,
			"defense" : 178
		}
	},
	{
		"dex" : 116,
		"name" : "Horsea",
		"base" : {
			"stamina" : 60,
			"attack" : 122,
			"defense" : 100
		}
	},
	{
		"dex" : 117,
		"name" : "Seadra",
		"base" : {
			"stamina" : 110,
			"attack" : 176,
			"defense" : 150
		}
	},
	{
		"dex" : 118,
		"name" : "Goldeen",
		"base" : {
			"stamina" : 90,
			"attack" : 112,
			"defense" : 126
		}
	},
	{
		"dex" : 119,
		"name" : "Seaking",
		"base" : {
			"stamina" : 160,
			"attack" : 172,
			"defense" : 160
		}
	},
	{
		"dex" : 120,
		"name" : "Staryu",
		"base" : {
			"stamina" : 60,
			"attack" : 130,
			"defense" : 128
		}
	},
	{
		"dex" : 121,
		"name" : "Starmie",
		"base" : {
			"stamina" : 120,
			"attack" : 194,
			"defense" : 192
		}
	},
	{
		"dex" : 122,
		"name" : "Mr. Mime",
		"base" : {
			"stamina" : 80,
			"attack" : 154,
			"defense" : 196
		}
	},
	{
		"dex" : 123,
		"name" : "Scyther",
		"base" : {
			"stamina" : 140,
			"attack" : 176,
			"defense" : 180
		}
	},
	{
		"dex" : 124,
		"name" : "Jynx",
		"base" : {
			"stamina" : 130,
			"attack" : 172,
			"defense" : 134
		}
	},
	{
		"dex" : 125,
		"name" : "Electabuzz",
		"base" : {
			"stamina" : 130,
			"attack" : 198,
			"defense" : 160
		}
	},
	{
		"dex" : 126,
		"name" : "Magmar",
		"base" : {
			"stamina" : 130,
			"attack" : 214,
			"defense" : 158
		}
	},
	{
		"dex" : 127,
		"name" : "Pinsir",
		"base" : {
			"stamina" : 130,
			"attack" : 184,
			"defense" : 186
		}
	},
	{
		"dex" : 128,
		"name" : "Tauros",
		"base" : {
			"stamina" : 150,
			"attack" : 148,
			"defense" : 184
		}
	},
	{
		"dex" : 129,
		"name" : "Magikarp",
		"base" : {
			"stamina" : 40,
			"attack" : 42,
			"defense" : 84
		}
	},
	{
		"dex" : 130,
		"name" : "Gyarados",
		"base" : {
			"stamina" : 190,
			"attack" : 192,
			"defense" : 196
		}
	},
	{
		"dex" : 131,
		"name" : "Lapras",
		"base" : {
			"stamina" : 260,
			"attack" : 186,
			"defense" : 190
		}
	},
	{
		"dex" : 132,
		"name" : "Ditto",
		"base" : {
			"stamina" : 96,
			"attack" : 110,
			"defense" : 110
		}
	},
	{
		"dex" : 133,
		"name" : "Eevee",
		"base" : {
			"stamina" : 110,
			"attack" : 114,
			"defense" : 128
		}
	},
	{
		"dex" : 134,
		"name" : "Vaporeon",
		"base" : {
			"stamina" : 260,
			"attack" : 186,
			"defense" : 168
		}
	},
	{
		"dex" : 135,
		"name" : "Jolteon",
		"base" : {
			"stamina" : 130,
			"attack" : 192,
			"defense" : 174
		}
	},
	{
		"dex" : 136,
		"name" : "Flareon",
		"base" : {
			"stamina" : 130,
			"attack" : 238,
			"defense" : 178
		}
	},
	{
		"dex" : 137,
		"name" : "Porygon",
		"base" : {
			"stamina" : 130,
			"attack" : 156,
			"defense" : 158
		}
	},
	{
		"dex" : 138,
		"name" : "Omanyte",
		"base" : {
			"stamina" : 70,
			"attack" : 132,
			"defense" : 160
		}
	},
	{
		"dex" : 139,
		"name" : "Omastar",
		"base" : {
			"stamina" : 140,
			"attack" : 180,
			"defense" : 202
		}
	},
	{
		"dex" : 140,
		"name" : "Kabuto",
		"base" : {
			"stamina" : 60,
			"attack" : 148,
			"defense" : 142
		}
	},
	{
		"dex" : 141,
		"name" : "Kabutops",
		"base" : {
			"stamina" : 120,
			"attack" : 190,
			"defense" : 190
		}
	},
	{
		"dex" : 142,
		"name" : "Aerodactyl",
		"base" : {
			"stamina" : 160,
			"attack" : 182,
			"defense" : 162
		}
	},
	{
		"dex" : 143,
		"name" : "Snorlax",
		"base" : {
			"stamina" : 320,
			"attack" : 180,
			"defense" : 180
		}
	},
	{
		"dex" : 144,
		"name" : "Articuno",
		"base" : {
			"stamina" : 180,
			"attack" : 198,
			"defense" : 242
		}
	},
	{
		"dex" : 145,
		"name" : "Zapdos",
		"base" : {
			"stamina" : 180,
			"attack" : 232,
			"defense" : 194
		}
	},
	{
		"dex" : 146,
		"name" : "Moltres",
		"base" : {
			"stamina" : 180,
			"attack" : 242,
			"defense" : 194
		}
	},
	{
		"dex" : 147,
		"name" : "Dratini",
		"base" : {
			"stamina" : 82,
			"attack" : 128,
			"defense" : 110
		}
	},
	{
		"dex" : 148,
		"name" : "Dragonair",
		"base" : {
			"stamina" : 122,
			"attack" : 170,
			"defense" : 152
		}
	},
	{
		"dex" : 149,
		"name" : "Dragonite",
		"base" : {
			"stamina" : 182,
			"attack" : 250,
			"defense" : 212
		}
	},
	{
		"dex" : 150,
		"name" : "Mewtwo",
		"base" : {
			"stamina" : 212,
			"attack" : 284,
			"defense" : 202
		}
	},
	{
		"dex" : 151,
		"name" : "Mew",
		"base" : {
			"stamina" : 200,
			"attack" : 220,
			"defense" : 220
		}
	},
]

var results = document.getElementById('results');

function calculateHP(base,iv,cpm){
	return Math.max(10, Math.floor((base["stamina"]+iv["stamina"])*cpm));
}

function calculateCP(base,iv,cpm){
	atk=(base["attack"]+iv["attack"])*cpm;
	def=(base["defense"]+iv["defense"])*cpm;
	sta=(base["stamina"]+iv["stamina"])*cpm;
	return Math.max(10, Math.floor(atk*Math.sqrt(def*sta)/10));
}

function setRangeIVs() {
	var range = {
		"stamina":{"min":0,"max":15},
		"attack":{"min":0,"max":15},
		"defense":{"min":0,"max":15}
	};
	var ivRange = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	var minStamina = parseInt(document.getElementById('pkmn-min-sta').value);
	if(ivRange.indexOf(minStamina) != -1) range["stamina"]["min"] = minStamina;
	var maxStamina = parseInt(document.getElementById('pkmn-max-sta').value);
	if(ivRange.indexOf(maxStamina) != -1) range["stamina"]["max"] = maxStamina;
	var minAttack = parseInt(document.getElementById('pkmn-min-atk').value);
	if(ivRange.indexOf(minAttack) != -1) range["attack"]["min"] = minAttack;
	var maxAttack = parseInt(document.getElementById('pkmn-max-atk').value);
	if(ivRange.indexOf(maxAttack) != -1) range["attack"]["max"] = maxAttack;
	var minDefense = parseInt(document.getElementById('pkmn-min-def').value);
	if(ivRange.indexOf(minDefense) != -1) range["defense"]["min"] = minDefense;
	var maxDefense = parseInt(document.getElementById('pkmn-max-def').value);
	if(ivRange.indexOf(maxDefense) != -1) range["defense"]["max"] = maxDefense;
	return range;
}

function combinationInRange(comb,range) {
	if(range["stamina"]["min"] > comb["stamina"] || range["stamina"]["max"] < comb["stamina"]){
		return false;
	}
	if(range["attack"]["min"] > comb["attack"] || range["attack"]["max"] < comb["attack"]){
		return false;
	}
	if(range["defense"]["min"] > comb["defense"] || range["defense"]["max"] < comb["defense"]){
		return false;
	}
	return true;
}

function calculate() {
	results.innerHTML="";
	pkmn = pkmnList[document.getElementById('pkmn-list').selectedIndex-1];
	hp = document.getElementById('pkmn-hp').value;
	cp = document.getElementById('pkmn-cp').value;
	lvls = document.getElementById('level-list');
	cpm = lvlToCpm[lvls.options[lvls.selectedIndex].innerHTML]
	if(pkmn != null && hp != null && cp != null && cpm != null) {
		var combs=[], filterCombs=[];
		var range = setRangeIVs();
		/*
			Calcula-se todas as combinações possíveis (sem aplicar o filtro),
			pois dejesa-se implementar futuramente um tracking de combinações,
			que seria prejudicado caso o filtro fosse modificado à cada query.
		*/
		for(var s=0 ; s<=15 ; s++) {
			if(hp==calculateHP(pkmn["base"],{"stamina" : s},cpm)) {
				for(var a=0 ; a<=15 ; a++) {
					for(var d=0 ; d<=15 ; d++) {
						var ivs={"stamina" : s, "attack" : a, "defense" : d};
						if(cp==calculateCP(pkmn["base"],ivs,cpm)){
							combs.push(ivs);
							if(combinationInRange(ivs,range)) {
								filterCombs.push(ivs);
							}
						}
					}
				}
			}
		}
		var p = document.createElement("p");
		p.innerHTML = "<strong>RANGE DE HP E CP PARA O POKÉMON SELECIONADO</strong>"
		results.appendChild(p);
		var p = document.createElement("p");
		p.innerHTML = pkmn["name"] + " Level " + lvls.options[lvls.selectedIndex].innerHTML + ": ";
		p.innerHTML += "HP[" + calculateHP(pkmn["base"],{"stamina":0},cpm) + "," + calculateHP(pkmn["base"],{"stamina":15},cpm) + "] - ";
		p.innerHTML += "CP[" + calculateCP(pkmn["base"],{"stamina":0,"attack":0,"defense":0},cpm) + "," + calculateCP(pkmn["base"],{"stamina":15,"attack":15,"defense":15},cpm) + "]";
		results.appendChild(p);
		var p = document.createElement("p");
		p.innerHTML = "<strong> TOTAL DE COMBINAÇÕES POSSÍVEIS: </strong>"+combs.length;
		results.appendChild(p);
		var p = document.createElement("p");
		p.innerHTML = "<strong> COMBINAÇÕES POSSÍVEIS COM O FILTRO: </strong>"+filterCombs.length;
		results.appendChild(p);
		for(var i=0 ; i<filterCombs.length ; i++) {
			var comb = JSON.stringify(filterCombs[i],null,2);
			var p = document.createElement("p");
			p.innerHTML = (((comb.replace(/"/g,"")).replace('{',"")).replace('}',"")).toUpperCase();
			results.appendChild(p);
		}
	} else {
		var p = document.createElement("p");
		p.innerHTML = "Preencha todos os campos!";
		results.appendChild(p);
	}
}

window.onload = function() {
	var calcBtn = document.getElementById('calc-btn');
	calcBtn.onclick = calculate

	var sel = document.getElementById('pkmn-list');

	for(var i=0 ; i < pkmnList.length ; i++) {
		var pkmn = pkmnList[i];
		var opt = document.createElement('option');
		opt.value = pkmn["dex"];
		opt.innerHTML = (pkmn["name"] + " - #" + pkmn["dex"]);
		sel.appendChild(opt);
	}

	var dust = document.getElementById('pkmn-dust');
	var dustValues = Object.keys(dustToLvl)
	for(var i=0 ; i < dustValues.length ; i++) {
		var opt = document.createElement('option');
		opt.value = i+1;
		opt.innerHTML = dustValues[i];
		dust.appendChild(opt);
	}
	dust.addEventListener("change", function() {
		sel = document.getElementById('level-list');
		lvls = dustToLvl[dust.options[dust.selectedIndex].innerHTML];
		if(lvls == null) {
			while(sel.length > 1) sel.remove(1);
		} else if(sel.options.length == 1) {
			for(var i=0 ; i < lvls.length ; i++) {
				var opt = document.createElement('option');
				opt.value = i+1;
				opt.innerHTML = lvls[i];
				sel.appendChild(opt);
			}
		} else {
			for(var i=0 ; i < lvls.length ; i++) {
				var opt = sel.options[i+1]
				opt.innerHTML = lvls[i];
			}
		}
	});
}
