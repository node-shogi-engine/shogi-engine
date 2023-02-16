import { OneSquareArea } from "@/domain/pieceMove/type/PieceClasses";
import { PieceClasses } from "@/domain/composeDiagram/value/PieceClasses";
/* eslint-disable */

// one square pieces
const King: OneSquareArea[] = [7, 8, 9, 4, 6, 1, 2, 3];

const Gold: OneSquareArea[] = [7, 8, 9, 4, 6, 2];
const Silver: OneSquareArea[] = [
  7, 8, 9,

  1, 3,
];
const Pawn: OneSquareArea[] = [8];
// long range pieces
// export const Rook: OneSquareArea[] = [
//   1,  3,

//   7,  9,
// ];
// export const Bishop: OneSquareArea[] = [
//     2,
//   4,  6,
//     8,
// ];
// export const Lance: OneSquareArea[] = [
//     2,

// ];
// // kNight
// export const kNight = [null];

export const PIECE_CLASS_MOVES = {
  [PieceClasses.King]: King,
  [PieceClasses.Gold]: Gold,
  [PieceClasses.Silver]: Silver,
  [PieceClasses.Pawn]: Pawn,
};
