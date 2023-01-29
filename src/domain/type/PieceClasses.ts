import { PIECE_TYPE_LIST } from "../const/PieceType";

export type PieceType = (typeof PIECE_TYPE_LIST)[number];

const OneSquarePieceTypeList = ["King", "Gold", "Silver", "Pawn"] as const;
export type OneSquarePiecetype = (typeof OneSquarePieceTypeList)[number];

const LongRangePieceTypeList = ["Rook", "Bishop", "Lance"] as const;
export type LongRangePieceType = (typeof LongRangePieceTypeList)[number];

/* eslint-disable */
export type kNightPieceType = "kNight";

export type OneSquareArea = 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9;
