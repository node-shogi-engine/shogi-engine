import { SquareContent } from "../type/SquareContent";
import { PieceStand } from "./PieceStand";
import { PieceOnStand } from "./PieceOnStand";
import { PlayerType } from "../type/Player";

export class MoveFromStand {
  public readonly player: PlayerType;

  constructor(
    public readonly from: PieceStand,
    public readonly to: SquareContent,
    public readonly promotion: boolean,
    public readonly pieceOnStand: PieceOnStand,
  ) {
    this.player = pieceOnStand.master;
  }
}
