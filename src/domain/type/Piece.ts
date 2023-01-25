import { PiecesInStand } from "./PiecesInStand";
// import { Square } from "./Square";
import { FileRankPair } from "./FileRankNumber";
import { PieceTypes } from "../const/PieceTypes";

export type PieceMoveFrom = FileRankPair | PiecesInStand;

export type PieceType = (typeof PieceTypes)[number];

const OneSquarePieceTypes = ["King", "Gold", "Silver", "Pawn"] as const;
export type OneSquarePiecetype = (typeof OneSquarePieceTypes)[number];

const LongRangePieceTypes = ["Rook", "Bishop", "Lance"] as const;
export type LongRangePieceType = (typeof LongRangePieceTypes)[number];

/* eslint-disable */
export type kNightPieceType = "kNight";

export type OneSquareArea = 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9;
