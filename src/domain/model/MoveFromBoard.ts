import { PlayerType } from "../type/Player";
import { SquareContent } from "../type/SquareContent";
import { PieceOnBoard } from "./PieceOnBoard";

export class MoveFromBoard {
  public readonly player: PlayerType;

  constructor(
    public readonly from: SquareContent,
    public readonly to: SquareContent,
    public readonly promotion: boolean,
    public readonly pieceOnBoard: PieceOnBoard,
  ) {
    this.player = pieceOnBoard.master;
  }
}
