import braille from "./braille.json";

export default class Braille {
  static mapAToB = braille;
  static mapBToA = Braille.invertMap(braille);

  static invertMap(obj) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
  }

  static toAscii(braille) {
    return Braille.mapBToA[braille];
  }

  static toBraille(ascii) {
    return Braille.mapAToB[ascii.toLowerCase()];
  }
}
