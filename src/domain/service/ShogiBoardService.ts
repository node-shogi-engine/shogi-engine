import { FileRank } from "../model/FileRank";
import { ShogiBoard } from "../value/ShogiBoard";
import { SquareContent } from "../type/SquareContent";
import { INITIAL_PIECE_PLACEMENT } from "../const/InitialPiecePlacement";

export class ShogiBoardService {
  static factory(): ShogiBoard {
    const shogiBoard: ShogiBoard = {};
    // init two-dimensional
    FileRank.numbers.forEach((file) => {
      shogiBoard[file] = {};
    });
    // create
    FileRank.forEach((file, rank) => {
      const squareContent: SquareContent = null;
      shogiBoard[file][rank] = squareContent;
    });
    // put pieces
    INITIAL_PIECE_PLACEMENT.forEach((files, i) => {
      files.forEach((squareContent: SquareContent, j) => {
        if (squareContent) {
          const file = i + 1;
          const rank = j + 1;
          shogiBoard[file][rank] = squareContent;
        }
      });
    });
    return shogiBoard;
  }
}
