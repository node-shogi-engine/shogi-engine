import { Piece } from "@/domain/composeDiagram/model/Piece";
import { PlayerType } from "@/domain/composeDiagram/type/Player";
import { PieceType } from "@/domain/composeDiagram/type/PieceClasses";

export class PieceOnBoard {
  constructor(
    private readonly piece: Piece,
    public readonly master: PlayerType,
  ) {}

  get pieceType(): PieceType {
    return this.piece.type;
  }

  get initial(): string {
    return this.piece.typeInitial;
  }

  get isPromotable(): boolean {
    return this.piece.isPromotable;
  }

  get isPromoted(): boolean {
    return this.piece.isPromoted;
  }

  public moveOut(): Piece {
    return this.piece;
  }

  public promotion(): void {
    this.piece.promotion();
  }

  public beToken(): Piece {
    this.piece.beTaken();
    return this.piece;
  }
}
