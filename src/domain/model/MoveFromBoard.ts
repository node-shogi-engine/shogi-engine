import { Square } from "../type/Square";
import { PieceOnBoard } from "./PieceOnBoard";

export class MoveFromBoard {
  constructor(
    public readonly from: Square,
    public readonly to: Square,
    public readonly promotion: boolean,
    public readonly pieceOnBoard: PieceOnBoard,
  ) {}
}
