import brailleMap from "./braille_map.json";

export default class Braille {
  static brailleCells = brailleMap;
  static mapAToB = Braille.createMap(brailleMap);
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

  static isBraille(str) {
    for (let token of str) {
      if (
        token.charCodeAt(0) >= parseInt("2800", 16) &&
        token.charCodeAt(0) <= parseInt("283F", 16)
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  static singleToAscii(token) {
    if (token.length !== 1) {
      throw new Error("Arg must be a single unicode code point");
    }
    if (!Braille.isBraille(token)) {
      throw new Error("Arg must have codepoint in range [0x2800, 0x283F]");
    }
    return Braille.mapBToA[token];
  }

  static toAscii(string) {
    const tokens = string.split("");
    let trans = "";
    for (let token of tokens) {
      trans += Braille.singleToAscii(token);
    }
    return trans;
  }

  static singleToBraille(token) {
    if (!(token in Braille.mapAToB)) {
      throw new Error(`Translation of ${token} not found`);
    }
    return Braille.mapAToB[token.toLowerCase()];
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
}
