import { Piece } from "../value/Piece";
import { PlayerType } from "../type/Player";

export class PieceOnStand {
  constructor(
    public readonly piece: Piece,
    public readonly master: PlayerType,
  ) {}
}
