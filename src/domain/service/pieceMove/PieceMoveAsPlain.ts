import { SquarePosition } from "@/domain/composeDiagram/value/SquarePosition";
import { PieceMoveAreaFactory } from "@/domain/service/pieceMove/PlainPieceMoveAreaFactory";
// type
import { PieceType } from "@/domain/composeDiagram/type/PieceClasses";
import { PlayerType } from "@/domain/composeDiagram/type/Player";

export class PieceMoveAsPlain {
  constructor(
    private pieceType: PieceType,
    private currentPosition: SquarePosition,
    private pieceMaster: PlayerType,
  ) {}

  //
  public getCanMoveArea(): SquarePosition[] {
    const squarePositions: SquarePosition[] = PieceMoveAreaFactory.factory(
      this.pieceType,
    )?.getSquarePositionsAsPlain(this.currentPosition, this.pieceMaster);
    return squarePositions;
  }
}
