import { Piece } from "./Piece";
import { PIECE_TYPE_LIST } from "../const/PieceType";
// type
import { PlayerType } from "../type/Player";
import { PieceType } from "../type/PieceClasses";
import { PiecesInStand } from "../type/PiecesInStand";
import { PieceOnStand } from "./PieceOnStand";

export class PieceStand {
  constructor(
    public readonly master: PlayerType,
    private pieces: PieceOnStand[] = [],
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
    const pieceOnStand = new PieceOnStand(piece);
    this.pieces.push(pieceOnStand);
  }

  public releasePiece(pieceType: PieceType): Piece {
    const pieceIndex = this.pieces.findIndex(
      (piece) => piece.type === pieceType,
    );
    if (pieceIndex < 0) {
      throw Error(`Piece stand has no ${pieceType}.`);
    }
    const moveOutPiece = this.pieces[pieceIndex].moveOut();
    const newPIeceList = this.pieces.slice(0, pieceIndex);
    newPIeceList.concat(this.pieces.slice(pieceIndex + 1));
    this.pieces = newPIeceList;
    return moveOutPiece;
  }
}
