import { Square } from "../type/Square";
import { PieceStand } from "../value/PieceStand";
import { PieceOnStand } from "./PieceOnStand";

export class MoveFromStand {
  constructor(
    public readonly from: PieceStand,
    public readonly to: Square,
    public readonly promotion: boolean,
    public readonly pieceOnStand: PieceOnStand,
  ) {}
}
