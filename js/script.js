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
		"dex" : 143,
		"name" : "Snorlax",
		"base" : {
			"stamina" : 320,
			"attack" : 180,
			"defense" : 180
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

function calculate() {
	results.innerHTML="";
	pkmn = pkmnList[document.getElementById('pkmn-list').selectedIndex-1];
	hp = document.getElementById('pkmn-hp').value;
	cp = document.getElementById('pkmn-cp').value;
	lvls = document.getElementById('level-list');
	cpm = lvlToCpm[lvls.options[lvls.selectedIndex].innerHTML]
	if(pkmn != null && hp != null && cp != null && cpm != null) {
		var combs=[];
		for(var s=0 ; s<=15 ; s++) {
			if(hp==calculateHP(pkmn["base"],{"stamina" : s},cpm)) {
				for(var a=0 ; a<=15 ; a++) {
					for(var d=0 ; d<=15 ; d++) {
						var ivs={"stamina" : s, "attack" : a, "defense" : d};
						if(cp==calculateCP(pkmn["base"],ivs,cpm)){
							combs.push(ivs);
						}
					}
				}
			}
		}
		var p = document.createElement("p");
		p.innerHTML = "<strong> COMBINAÇÕES POSSÍVEIS: </strong>"+combs.length;
		results.appendChild(p);
		for(var i=0 ; i<combs.length ; i++) {
			var comb = JSON.stringify(combs[i],null,2);
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
		opt.innerHTML = ("#" + pkmn["dex"] + " - " + pkmn["name"]);
		sel.appendChild(opt);
	}

	var dust = document.getElementById('pkmn-dust');
	dust.addEventListener("change", function() {
		sel = document.getElementById('level-list');
		lvls = dustToLvl[dust.value];
		while(sel.length > 1) sel.remove(1);
		if(lvls != null) {
			for(var i=0 ; i < lvls.length ; i++) {
				var opt = document.createElement('option');
				opt.value = i+1;
				opt.innerHTML = lvls[i];
				sel.appendChild(opt);
			}
		}
	});
}
