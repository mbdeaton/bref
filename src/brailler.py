import json

"""Write to json a dict: unicode code point to braille cell."""

filename = "scratch.json"

with open(filename, "w", encoding="utf8") as file:
    u_to_d = {f"{i}": chr(i) for i in range(0x2800, 0x2840)}
    x = json.dump(u_to_d, file, indent=2, ensure_ascii=False)
