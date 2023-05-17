#!/usr/bin/env python3
"""Utilities to read and write unicode code point to braille cell dict."""

import json


def print_all_braille_unicode(file_out="braille_from_english-map.json"):
    with open(file_out, "w", encoding="utf8") as file:
        u_to_d = {f"{i}": chr(i) for i in range(0x2800, 0x2840)}
        x = json.dump(u_to_d, file, indent=2, ensure_ascii=False)


def convert_braille_dict_to_array(file_in="braille_from_english-map.json",
                                  file_out="braille_from_english-array.json"):
    with open(file_in, "r", encoding="utf8") as file:
        e_to_u = json.load(file)
        a = [{"braille": v, "english": k} for k, v in e_to_u.items()]
    with open(file_out, "w", encoding="utf8") as file:
        x = json.dump(a, file, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    print_all_braille_unicode()
    convert_braille_dict_to_array()
