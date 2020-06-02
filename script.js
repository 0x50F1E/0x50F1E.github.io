var form = document.forms.myform,
    elem = form.elements;

class LetterTarget {
    constructor() {
        this.palette = [];
    }
    paletteToggle(substitution) {
        if (this.palette.includes(substitution)) {
            this.palette = this.palette.filter(function(e) {
                return e !== substitution
            })
        } else {
            this.palette.push(substitution);
        }
    }
}
var lettertargets = [];

for (var i = 0; i < 26; i++) {
    lettertargets.push(new LetterTarget());
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

elem.num_chk.onclick = function() {
    lettertargets[0].paletteToggle('4');
    lettertargets[1].paletteToggle('6');
    lettertargets[4].paletteToggle('3');
    lettertargets[8].paletteToggle('1');
    lettertargets[14].paletteToggle('0');
    lettertargets[18].paletteToggle('5');
    lettertargets[25].paletteToggle('2');
}
elem.acc_chk.onclick = function() {
    lettertargets[0].paletteToggle('á');
    lettertargets[4].paletteToggle('ë');
}

elem.sym_chk.onclick = function() {
    lettertargets[0].paletteToggle('@');
    lettertargets[2].paletteToggle('©');
    lettertargets[4].paletteToggle('€');
    lettertargets[2].paletteToggle('©');
    lettertargets[11].paletteToggle('£');
    lettertargets[18].paletteToggle('$');
    lettertargets[19].paletteToggle('+');
    lettertargets[24].paletteToggle('¥');
}

elem.grk_chk.onclick = function() {
    lettertargets[0].paletteToggle('α');
    lettertargets[0].paletteToggle('Α');
    lettertargets[0].paletteToggle('Δ');
    lettertargets[1].paletteToggle('β');
    lettertargets[1].paletteToggle('Β');
    lettertargets[1].paletteToggle('Ϧ');
    lettertargets[4].paletteToggle('Σ');
    lettertargets[4].paletteToggle('Ξ');
    lettertargets[4].paletteToggle('ξ');
    lettertargets[4].paletteToggle('ϵ');
    lettertargets[5].paletteToggle('Ϝ');
    lettertargets[5].paletteToggle('ϝ');
    lettertargets[7].paletteToggle('Η');
    lettertargets[8].paletteToggle('Ι');
    lettertargets[8].paletteToggle('ι');
    lettertargets[9].paletteToggle('Ϳ');
    lettertargets[10].paletteToggle('Κ');
    lettertargets[10].paletteToggle('κ');
    lettertargets[12].paletteToggle('ϻ');
    lettertargets[12].paletteToggle('Ϻ');
    lettertargets[13].paletteToggle('η');
    lettertargets[13].paletteToggle('Ν');
    lettertargets[13].paletteToggle('ͷ');
    lettertargets[14].paletteToggle('δ');
    lettertargets[14].paletteToggle('Θ');
    lettertargets[14].paletteToggle('θ');
    lettertargets[14].paletteToggle('Ο');
    lettertargets[14].paletteToggle('ο');
    lettertargets[14].paletteToggle('σ');
    lettertargets[15].paletteToggle('Ρ');
    lettertargets[15].paletteToggle('ρ');
    lettertargets[18].paletteToggle('ϩ');
    lettertargets[19].paletteToggle('Ͳ');
    lettertargets[19].paletteToggle('Ͳ');
    lettertargets[19].paletteToggle('ϯ');
    lettertargets[20].paletteToggle('μ');
    lettertargets[21].paletteToggle('ν');
    lettertargets[22].paletteToggle('Ψ');
    lettertargets[22].paletteToggle('ψ');
    lettertargets[22].paletteToggle('ω');
    lettertargets[23].paletteToggle('Χ');
    lettertargets[23].paletteToggle('χ');
    lettertargets[24].paletteToggle('γ');
    lettertargets[24].paletteToggle('Υ');
    lettertargets[25].paletteToggle('Ζ');
}

elem.cyr_chk.onclick = function() {
    lettertargets[0].paletteToggle('А');
    lettertargets[0].paletteToggle('а');
    lettertargets[0].paletteToggle('а');
    lettertargets[1].paletteToggle('Б');
    lettertargets[1].paletteToggle('В');
    lettertargets[1].paletteToggle('в');
    lettertargets[1].paletteToggle('ь');
    lettertargets[1].paletteToggle('б');
    lettertargets[1].paletteToggle('ъ');
    lettertargets[2].paletteToggle('С');
    lettertargets[2].paletteToggle('Ҫ');
    lettertargets[2].paletteToggle('с');
    lettertargets[4].paletteToggle('Ѐ');
    lettertargets[4].paletteToggle('Ё');
    lettertargets[4].paletteToggle('Є');
    lettertargets[4].paletteToggle('е');
    lettertargets[4].paletteToggle('ѐ');
    lettertargets[4].paletteToggle('ё');
    lettertargets[4].paletteToggle('є');
    lettertargets[4].paletteToggle('Е');
    lettertargets[4].paletteToggle('З');
    lettertargets[7].paletteToggle('Н');
    lettertargets[7].paletteToggle('н');
    lettertargets[7].paletteToggle('ћ');
    lettertargets[8].paletteToggle('І');
    lettertargets[8].paletteToggle('Ї');
    lettertargets[8].paletteToggle('і');
    lettertargets[8].paletteToggle('ї');
    lettertargets[9].paletteToggle('Ј');  
		lettertargets[9].paletteToggle('ј');
    lettertargets[10].paletteToggle('Ќ');
    lettertargets[10].paletteToggle('К');
    lettertargets[10].paletteToggle('к');
    lettertargets[10].paletteToggle('ќ');
    lettertargets[12].paletteToggle('М');
    lettertargets[12].paletteToggle('м');
    lettertargets[13].paletteToggle('И');
    lettertargets[13].paletteToggle('И');
    lettertargets[13].paletteToggle('И');
    lettertargets[13].paletteToggle('Й');
    lettertargets[13].paletteToggle('ѝ');
    lettertargets[14].paletteToggle('О');
    lettertargets[14].paletteToggle('о');
    lettertargets[14].paletteToggle('Ѻ');
    lettertargets[14].paletteToggle('ѻ');
    lettertargets[15].paletteToggle('Р');
    lettertargets[15].paletteToggle('р');
    lettertargets[17].paletteToggle('Я');    
    lettertargets[18].paletteToggle('Ѕ');
    lettertargets[18].paletteToggle('ѕ');
    lettertargets[19].paletteToggle('Т');
    lettertargets[19].paletteToggle('т');
    lettertargets[20].paletteToggle('Ц');
    lettertargets[20].paletteToggle('џ');
    lettertargets[21].paletteToggle('ѵ');
    lettertargets[21].paletteToggle('Ѷ');
    lettertargets[21].paletteToggle('ѷ');
    lettertargets[21].paletteToggle('Ѵ');
    lettertargets[22].paletteToggle('Ш');
    lettertargets[22].paletteToggle('Щ');
    lettertargets[22].paletteToggle('ѿ');
    lettertargets[22].paletteToggle('ш');
    lettertargets[22].paletteToggle('щ');
    lettertargets[23].paletteToggle('Х');
    lettertargets[23].paletteToggle('х');
    lettertargets[24].paletteToggle('У');
    lettertargets[24].paletteToggle('Ў');
    lettertargets[24].paletteToggle('у');
    lettertargets[24].paletteToggle('ў');

}

elem.b.onclick = function() {
	if(elem.watch_chk.checked == true) {
  	document.getElementById("output").innerHTML = leet_limited(document.getElementById("input").value);
  } else {
  	document.getElementById("output").innerHTML = leet(document.getElementById("input").value);
  }
};

function leet(parsestring) {
    for (var i = 0; i < parsestring.length; i++) {
        if ((parsestring.charCodeAt(i) - 65 >= 0 && parsestring.charCodeAt(i) - 65 <= 26) || (parsestring.charCodeAt(i) - 97 >= 0 && parsestring.charCodeAt(i) - 97 <= 26)) {
            var lettercode;
            var iscaps;
            if (parsestring.charCodeAt(i) >= 97) {
                lettercode = parsestring.charCodeAt(i) - 97;
                iscaps = false;
            } else {
                lettercode = parsestring.charCodeAt(i) - 65;
                iscaps = true;
            }
            if (lettertargets[lettercode].palette.length > 0) {
                var this_pal = lettertargets[lettercode].palette;
                var to_replace = this_pal[getRandomInt(this_pal.length)];
                parsestring = parsestring.replaceAt(i, to_replace);
            }
        }
    }
    return parsestring;
}



function leet_limited(parsestring) {
// words taken from an online list of government-surveilled terms, some recent topical ones mixed in
var watchlist = ["Department","Homeland","Security","DHS","Federal","Emergency","Management","Agency","FEMA","Coast","Guard","USCG","Custom","Border","Protection","CBP","Patrol","Secret","Service","USSS","National","Operation","Center","NOC","Defense","Immigration","Enforcement","ICE","Agent","Task","Force","Central","Intelligence","CIA","Fusion","Drug","DEA","Secure","Initiative","SBI","Bureau","Investigation","FBI","Alcohol","Tobacco","Firearm","ATF","US","Citizenship","CIS","Air","Marshal","FAMS","Transportation","Administration","TSA","Aviation","FAA","Red","Cross","United","Nations","UN","Assassination","Attack","Domestic","Drill","Exercise","Cop","Law","Authorities","Disaster","assistance","DNDO","Nuclear","Detection","Office","preparedness","Mitigation","Prevention","Response","Recovery","Dirty","bomb","First","responder","Maritime","domain","awareness","MDA","Militia","Shooting","Shots","fired","Evacuation","Death","Hostage","Explosion","explosive","Police","medical","team","DMAT","Organized","crime","Gang","State","Breach","Threat","Standoff","SWAT","Screening","Lockdown","squad","Crash","Looting","Riot","Landing","Pipe","Incident","Facility","Hazmat","Chemical","spill","Suspicious","package","device","Toxic","laboratory","Cloud","Plume","Radiation","Radioactive","Leak","Biological","infection","event","burn","Epidemic","Hazardous","material","Industrial","Powder","white","Gas","Spillover","Anthrax","Blister","Exposure","Nerve","Ricin","Sarin","North","Korea","Outbreak","Contamination","Virus","Bacteria","Recall","Ebola","Food","Poisoning","Foot","Mouth","FMD","H5N1","Avian","Flu","Salmonella","Small","Pox","Plague","Human","Animal","Influenza","Disease","Control","CDC","FDA","Public","Health","Agro","Terror","Tuberculosis","TB","Agriculture","Listeria","Symptoms","Mutation","Resistant","Antiviral","Wave","Pandemic","Waterborne","airborne","Sick","Swine","Pork","Strain","Quarantine","H1N1","Vaccine","Tamiflu","Norvo","World","Organization","WHO","Viral","Hemorrhagic","Fever","Coli","Infrastructure","Airport","CIKR","Critical","Key","Resources","AMTRAK","Collapse","Computer","Communications","Telecommunications","Metro","WMATA","Airplane","fire","Subway","BART","MARTA","Port","Authority","NBIC","Biosurveillance","Integration","Grid","Power","Smart","Body","scanner","Electric","Failure","outage","Blackout","Brownout","Dock","Bridge","Cancelled","Delays","disruption","cartel","Violence","Narcotic","Cocaine","Decapitated","Consulate","Consular","war","army","Methamphetamine","banner","Shootout","Execution","Gunfight","Trafficking","Kidnap","Bust","Meth","Lab","trade","Illegal","immigrant","Smuggling","smuggler","Assassin","Terrorism","Environmental","terrorist","Eco","Conventional","weapon","Target","grade","Enriched","Ammonium","nitrate","Improvised","IED","brick","Car","cache","Suicide","bomber","substance","Pirate","Extremism","Radical","Home","grown","Plot","Nationalist","Recruitment","Fundamentalism","Hurricane","Tornado","Twister","Tsunami","Earthquake","Tremor","Flood","Storm","Crest","Temblor","Extreme","weather","Forest","Brush","Stranded","Stuck","Help","Hail","Wildfire","Warning","Magnitude","Avalanche","Typhoon","Shelter-in-place","Snow","Blizzard","Sleet","Mud","slide","Mudslide","Erosion","Brown","out","Watch","Lightening","Aid","Relief","Closure","Interstate","Burst","Broadcast","System","Cyber","Botnet","DDOS","dedicated","denial","Malware","Trojan","Keylogger","Command","2600","Spammer","Phishing","Rootkit","Phreaking","Cain","abel","Brute","forcing","Mysql","injection","Cyberattack","Cyberterror","Hacker","China","Conficker","Worm","Scammer","Social","media","Nazi","TERF","Ahmaud","Aubrey","Breonna","Taylor","George","Floyd","Tamir","Rice","Dontre","Hamilton","Michael","Eric","Garner","John","Crawford","Ezel","Ford","Dante","Parker","Tanisha","Anderson","Akai","Gurlery","Rumain","Brisbon","Jerame","Reid","Tony","Robison","Phillip","Harris","Walter","Scott","Freddie","Gray","Sean","Reed","Steven","Demarco","Ariane","McCree","Terrance","Franklin","Miles","Hall","Jamee","Johnson","Antwon","Rose","Stephon","Clark","Yassin","Mohamed","Finan","Darius","Berhe","Tarver","William","Green","Kwame","Jones","De’von","Bailey","Christopher","Whitfield","Anthony","Hill","Logan","Robinson","Gregory","Jamarion","JaQuavion","Slaton","Ryan","Twyman","Brandon","Webber","Jimmy","Atchison","Willie","McCoy","Emantic","Fitzgerald","Bradford","D’ettrick","Griffin","Jemel","Roberson","DeAndre","Ballard","Botham","Shem","Jean","Robert","Lawrence","Lamar","Smith","Ramarley","Manuel","Graham","Loggins","Trayvon","Martin","Wendell","Allen","Kendrec","McDade","Larry","Jackson","Jonathan","Ferrell","Jordan","Baker","Victor","Ezell","Kajieme","Powell","Laquan","Mcdonald","antifa","agitator","president","house","sniper","pepper","spray","tear","CS","rubber","bullet","foam","loot","shell","cannon","drone","UAV","brutal","kill","death","gore","run"
];
		var wordlist = parsestring.trim().split(" ");
   	var finalstring = "";
    console.log(wordlist.length);
    console.log(watchlist.length);
		for(var i = 0; i < wordlist.length; i++) {
    	for(var j = 0; j < watchlist.length; j++) {
    		if(wordlist[i].toLowerCase().includes(watchlist[j].toLowerCase()) == 1) {
        wordlist[i] = leet(wordlist[i]);
        console.log(wordlist[i]);
        break;
        }
    	}
      finalstring = finalstring.concat(wordlist[i] + ' ');
      console.log(finalstring);
    }
    return finalstring;
}
