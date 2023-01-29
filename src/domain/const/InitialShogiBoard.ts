import { PieceOnBoard } from "../model/PieceOnBoard";
import { PieceType } from "../type/Piece";
import { PlayerType } from "../type/Player";
import { Player } from "../value/Player";
import { ShogiBoard } from "../value/ShogiBoard";
import { PieceSetAsDefault } from "./PieceSet";
import { PieceClasses } from "../value/PieceType";

const usedIndexList: number[] = [];
const generatePieceOnBoard = (
  pieceType: PieceType,
  master: PlayerType,
): PieceOnBoard => {
  const matchPiece = PieceSetAsDefault.find((piece, index) => {
    if (piece.type === pieceType && !usedIndexList.includes(index)) {
      usedIndexList.push(index);
      return true;
    }
    return false;
  });
  if (matchPiece) {
    return new PieceOnBoard(matchPiece, master);
  }
  throw Error(`Piece type ${pieceType} is no remainig in piece set.`);
};

export const INITIAL_SHOGI_BOARD: ShogiBoard = [
  // file 1
  [
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote),
    generatePieceOnBoard(PieceClasses.Lance, Player.Gote),
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote),
    null,
    null,
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente),
    null,
    generatePieceOnBoard(PieceClasses.Lance, Player.Sente),
  ],
  [
    // file 2
    generatePieceOnBoard(PieceClasses.kNight, Player.Gote),
    generatePieceOnBoard(PieceClasses.Bishop, Player.Gote),
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote),
    null,
    null,
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente),
    generatePieceOnBoard(PieceClasses.Rook, Player.Sente),
    generatePieceOnBoard(PieceClasses.kNight, Player.Sente),
  ],
  [
    // file 3
    generatePieceOnBoard(PieceClasses.Silver, Player.Gote),
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote),
    null,
    null,
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente),
    null,
    generatePieceOnBoard(PieceClasses.Silver, Player.Sente),
  ],
  [
    // file 4
    generatePieceOnBoard(PieceClasses.Gold, Player.Gote),
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote),
    null,
    null,
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente),
    null,
    generatePieceOnBoard(PieceClasses.Gold, Player.Sente),
  ],
  [
    // file 5
    generatePieceOnBoard(PieceClasses.King, Player.Gote),
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote),
    null,
    null,
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente),
    null,
    generatePieceOnBoard(PieceClasses.King, Player.Sente),
  ],
  [
    // file 6
    generatePieceOnBoard(PieceClasses.Gold, Player.Gote),
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote),
    null,
    null,
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente),
    null,
    generatePieceOnBoard(PieceClasses.Gold, Player.Sente),
  ],
  [
    // file 7
    generatePieceOnBoard(PieceClasses.Silver, Player.Gote),
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote),
    null,
    null,
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente),
    null,
    generatePieceOnBoard(PieceClasses.Silver, Player.Sente),
  ],
  [
    // file 8
    generatePieceOnBoard(PieceClasses.kNight, Player.Gote),
    generatePieceOnBoard(PieceClasses.Rook, Player.Gote),
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote),
    null,
    null,
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente),
    generatePieceOnBoard(PieceClasses.Bishop, Player.Sente),
    generatePieceOnBoard(PieceClasses.kNight, Player.Sente),
  ],
  [
    // file 9
    generatePieceOnBoard(PieceClasses.Lance, Player.Gote),
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote),
    null,
    null,
    null,
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente),
    null,
    generatePieceOnBoard(PieceClasses.Lance, Player.Sente),
  ],
];
