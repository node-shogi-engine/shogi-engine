import { Piece } from "@/domain/composeDiagram/model/Piece";
import { PieceType } from "@/domain/composeDiagram/type/PieceClasses";

export class PieceOnStand {
  constructor(private readonly piece: Piece) {}

  get type(): PieceType {
    return this.piece.type;
  }

  public moveOut(): Piece {
    return this.piece;
  }
}
