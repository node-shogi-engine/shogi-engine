import { PieceOnBoard } from "../model/PieceOnBoard";
import { PieceType } from "../type/PieceClasses";
import { PlayerType } from "../type/Player";
import { Player } from "../value/Player";
import { PieceClasses } from "../value/PieceClasses";
import { Piece } from "../model/Piece";
import { SquareContent } from "../type/SquareContent";

const generatePieceOnBoard = (
  pieceType: PieceType,
  master: PlayerType,
): PieceOnBoard => {
  const piece = new Piece(pieceType);
  const pieceOnBoard = new PieceOnBoard(piece, master);
  return pieceOnBoard;
};

export const INITIAL_PIECE_PLACEMENT: SquareContent[][] = [
  // file 1
  [
    generatePieceOnBoard(PieceClasses.Lance, Player.Gote), // 1
    null, // 2
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote), // 3
    null, // 4
    null, // 5
    null, // 6
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente), // 7
    null, // 8
    generatePieceOnBoard(PieceClasses.Lance, Player.Sente), // 9
  ],
  [
    // file 2
    generatePieceOnBoard(PieceClasses.kNight, Player.Gote), // 1
    generatePieceOnBoard(PieceClasses.Bishop, Player.Gote), // 2
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote), // 3
    null, // 4
    null, // 5
    null, // 6
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente), // 7
    generatePieceOnBoard(PieceClasses.Rook, Player.Sente), // 8
    generatePieceOnBoard(PieceClasses.kNight, Player.Sente), // 9
  ],
  [
    // file 3
    generatePieceOnBoard(PieceClasses.Silver, Player.Gote), // 1
    null, // 2
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote), // 3
    null, // 4
    null, // 5
    null, // 6
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente), // 7
    null, // 8
    generatePieceOnBoard(PieceClasses.Silver, Player.Sente), // 9
  ],
  [
    // file 4
    generatePieceOnBoard(PieceClasses.Gold, Player.Gote), // 1
    null, // 2
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote), // 3
    null, // 4
    null, // 5
    null, // 6
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente), // 7
    null, // 8
    generatePieceOnBoard(PieceClasses.Gold, Player.Sente), // 9
  ],
  [
    // file 5
    generatePieceOnBoard(PieceClasses.King, Player.Gote), // 1
    null, // 2
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote), // 3
    null, // 4
    null, // 5
    null, // 6
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente), // 7
    null, // 8
    generatePieceOnBoard(PieceClasses.King, Player.Sente), // 9
  ],
  [
    // file 6
    generatePieceOnBoard(PieceClasses.Gold, Player.Gote), // 1
    null, // 2
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote), // 3
    null, // 4
    null, // 5
    null, // 6
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente), // 7
    null, // 8
    generatePieceOnBoard(PieceClasses.Gold, Player.Sente), // 9
  ],
  [
    // file 7
    generatePieceOnBoard(PieceClasses.Silver, Player.Gote), // 1
    null, // 2
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote), // 3
    null, // 4
    null, // 5
    null, // 6
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente), // 7
    null, // 8
    generatePieceOnBoard(PieceClasses.Silver, Player.Sente), // 9
  ],
  [
    // file 8
    generatePieceOnBoard(PieceClasses.kNight, Player.Gote), // 1
    generatePieceOnBoard(PieceClasses.Rook, Player.Gote), // 2
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote), // 3
    null, // 4
    null, // 5
    null, // 6
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente), // 7
    generatePieceOnBoard(PieceClasses.Bishop, Player.Sente), // 8
    generatePieceOnBoard(PieceClasses.kNight, Player.Sente), // 9
  ],
  [
    // file 9
    generatePieceOnBoard(PieceClasses.Lance, Player.Gote), // 1
    null, // 2
    generatePieceOnBoard(PieceClasses.Pawn, Player.Gote), // 3
    null, // 4
    null, // 5
    null, // 6
    generatePieceOnBoard(PieceClasses.Pawn, Player.Sente), // 7
    null, // 8
    generatePieceOnBoard(PieceClasses.Lance, Player.Sente), // 9
  ],
];
