def taum_bday(b, w, bc, wc, z):
    black_cost = 0
    white_cost = 0

    if wc+z < bc:
        black_cost = (wc+z) * b
    else:
        black_cost = bc * b

    if bc+z < wc:
        white_cost = (bc+z) * w
    else:
        white_cost = wc * w

    return black_cost + white_cost