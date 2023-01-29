import { Piece } from "./Piece";
import { PIECE_TYPE_LIST } from "../const/PieceType";
// type
import { PlayerType } from "../type/Player";
import { PieceType } from "../type/PieceClasses";
import { PiecesInStand } from "../type/PiecesInStand";

export class PieceStand {
  constructor(
    public readonly master: PlayerType,
    private pieces: Piece[] = [],
  ) {}

  get top(): PiecesInStand {
    const pieceMap: PiecesInStand = {};
    PIECE_TYPE_LIST.forEach((piece_type) => {
      pieceMap[piece_type as string] = 0;
    });
    this.pieces.forEach((piece) => {
      pieceMap[piece.type] += 1;
    });
    return pieceMap;
  }

  public getNumberOfPieceType(piece_type: PieceType): number {
    return this.top[piece_type];
  }

  public takePiece(piece: Piece): void {
    this.pieces.push(piece);
  }

  public releasePiece(piece: Piece): void {
    const pieceIndex = this.pieces.indexOf(piece);
    if (pieceIndex < 0) {
      throw Error(`Piece stand has no ${piece.type}.`);
    }
    this.pieces.splice(pieceIndex, 1);
  }
}
