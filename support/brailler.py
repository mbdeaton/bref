#!/usr/bin/env python3
"""Utilities to read and write unicode code point to braille cell mappings."""

import argparse
import json


def print_all_braille_unicode(file_out="braille_from_english-map.json"):
    """Print all 6-dot braille cells as a json object.

    Output:
        { "10240": "𐉀", ..., "10303": "⠿" }
    """
    with open(file_out, "w", encoding="utf8") as file:
        u_to_d = {f"{i}": chr(i) for i in range(0x2800, 0x2840)}
        x = json.dump(u_to_d, file, indent=2, ensure_ascii=False)


def convert_braille_dict_to_array(file_in="braille_from_english-map.json",
                                  file_out="braille_from_english-array.json"):
    """Print a json array of objects mapping braille to english.

    Output:
        [ {"braille": "⠁", "english": "a"},
          {"braille": "⠃", "english": "b"},
          ...
        ]
    """
    with open(file_in, "r", encoding="utf8") as file:
        e_to_u = json.load(file)
        a = [{"braille": v, "english": k} for k, v in e_to_u.items()]
    with open(file_out, "w", encoding="utf8") as file:
        x = json.dump(a, file, indent=2, ensure_ascii=False)


def reorder_braille_array(file_in="braille_from_english-array.json",
                          file_out="braille_map.json"):
    """Sort a json array braille-to-english objects by code poitnt.

    Output:
        [ {"braille": "⠀", "english": " "},
          {"braille": "⠁", "english": "a"},
          {"braille": "⠂", "english": "(ea)"},
          ...
        ]
    """
    with open(file_in, "r", encoding="utf8") as file:
        cells = json.load(file)
        cells.sort(key=lambda x: x["braille"])
    with open(file_out, "w", encoding="utf8") as file:
        x = json.dump(cells, file, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    # print_all_braille_unicode()
    # convert_braille_dict_to_array()
    reorder_braille_array()
