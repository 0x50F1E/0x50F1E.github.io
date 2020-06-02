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
  lettertargets[4].paletteToggle('Σ');
  lettertargets[4].paletteToggle('Ξ');
  lettertargets[4].paletteToggle('ξ');
  lettertargets[7].paletteToggle('Η');
  lettertargets[8].paletteToggle('Ι');
  lettertargets[8].paletteToggle('ι');
  lettertargets[10].paletteToggle('Κ');
  lettertargets[10].paletteToggle('κ');
  lettertargets[13].paletteToggle('η');
  lettertargets[13].paletteToggle('Ν');
  lettertargets[14].paletteToggle('δ');
  lettertargets[14].paletteToggle('Θ');
  lettertargets[14].paletteToggle('θ');
  lettertargets[14].paletteToggle('Ο');
  lettertargets[14].paletteToggle('ο');
  lettertargets[14].paletteToggle('σ');
  lettertargets[15].paletteToggle('Ρ');
  lettertargets[15].paletteToggle('ρ');
  lettertargets[20].paletteToggle('μ');
  lettertargets[21].paletteToggle('ν');
  lettertargets[22].paletteToggle('Ψ');
  lettertargets[22].paletteToggle('ψ');
  lettertargets[22].paletteToggle('ω');
  lettertargets[23].paletteToggle('Χ');
  lettertargets[23].paletteToggle('χ');
  lettertargets[24].paletteToggle('γ');
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
  lettertargets[1].paletteToggle('ъ');
 	lettertargets[2].paletteToggle('С');
  lettertargets[2].paletteToggle('С́');
  lettertargets[2].paletteToggle('Ҫ');
  lettertargets[2].paletteToggle('с');
}

elem.b.onclick = function() {
  var parsestring = document.getElementById("input").value
  for (var i = 0; i < parsestring.length; i++) {
    if ((parsestring.charCodeAt(i) - 65 >= 0 && parsestring.charCodeAt(i) - 65 <= 26)||(parsestring.charCodeAt(i) - 97 >= 0 && parsestring.charCodeAt(i) - 97 <= 26)) {
      var lettercode;
      var iscaps;
      if(parsestring.charCodeAt(i) >= 97){
      	lettercode = parsestring.charCodeAt(i) - 97;
        iscaps = false;
      } else {
      	lettercode = parsestring.charCodeAt(i) - 65;
      	iscaps = true;
      }
      if(lettertargets[lettercode].palette.length > 0) {
      	var this_pal = lettertargets[lettercode].palette;
        var to_replace = this_pal[getRandomInt(this_pal.length)];
      	parsestring = parsestring.replaceAt(i,to_replace);
      }
    }
  }
  /*if (document.getElementById("num_chk").checked == true) {
    parsestring = parsestring.replaceAll(irgx, '1');
    parsestring = parsestring.replaceAll(srgx, function() {
      switch (getRandomInt(2)) {
        case 0:
          return '2';
        case 1:
          return '5'
      }
    });
    parsestring = parsestring.replaceAll(ergx, '3');
    parsestring = parsestring.replaceAll(argx, '4');
    parsestring = parsestring.replaceAll(brgx, '6');
    parsestring = parsestring.replaceAll(orgx, '0');
    parsestring = parsestring.replaceAll(atergx, '8');
  }*/

  document.getElementById("output").innerHTML = parsestring;
};
