import { FileRankService } from "./FileRankService";
import { ShogiBoard } from "../../composeDiagram/value/ShogiBoard";
import { SquareContent } from "../../composeDiagram/type/SquareContent";
import { INITIAL_PIECE_PLACEMENT } from "../../composeDiagram/const/InitialPiecePlacement";

export class ShogiBoardService {
  static factory(): ShogiBoard {
    const shogiBoard: ShogiBoard = {};
    // init two-dimensional
    FileRankService.numbers.forEach((file) => {
      shogiBoard[file] = {};
    });
    // create
    FileRankService.forEach((file, rank) => {
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
