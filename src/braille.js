import brailleCells from "./braille_from_english-array.json";

export default class Braille {
  static brailleCells = brailleCells;
  static mapAToB = Braille.createMap(brailleCells);
  static mapBToA = Braille.invertMap(Braille.mapAToB);

  static createMap(array) {
    let obj = {};
    array.forEach((elem) => {
      obj[elem.english] = elem.braille;
    });
    return obj;
  }

  static invertMap(obj) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
  }

  static singleToAscii(braille) {
    if (braille.length !== 1) {
      throw new Error("Arg must be a single unicode code point");
    }
    if (
      braille.charCodeAt(0) < parseInt("2800", 16) ||
      braille.charCodeAt(0) > parseInt("283F", 16)
    ) {
      throw new Error("Arg must have codepoint in range [0x2800, 0x283F]");
    }
    return Braille.mapBToA[braille];
  }

  static toBraille(string) {
    const tokens = string.split("");
    let trans = [];
    for (let i = 0; i < tokens.length; ) {
      let start = i;
      let next = i + 1;
      if (tokens[i] === "(") {
        next = start + tokens.slice(start).indexOf(")") + 1;
      } else if (tokens[i] === "[") {
        next = start + tokens.slice(start).indexOf("]") + 1;
      }
      trans.push(Braille.singleToBraille(tokens.slice(start, next).join("")));
      i = next;
    }
    return trans.join("");
  }

  static singleToBraille(ascii) {
    if (!(ascii in Braille.mapAToB)) {
      throw new Error(`Translation of ${ascii} not found`);
    }
    return Braille.mapAToB[ascii.toLowerCase()];
  }
}
