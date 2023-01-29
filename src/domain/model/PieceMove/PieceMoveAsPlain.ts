import { SquarePosition } from "../../value/SquarePosition";
import { PieceMoveAreaFactory } from "../../service/PlainPieceMoveAreaFactory";
import { Diagram } from "../Diagram";
// type
import { PieceType } from "../../type/PieceClasses";
import { PlayerType } from "../../type/Player";

export interface IPieceMoveArea {
  get_square_positions_as_plain: (
    currnetPosition: SquarePosition,
    piece_master: PlayerType
  ) => SquarePosition[];

  get_square_positions_as_on_diagram: (
    currnetPosition: SquarePosition,
    diagram: Diagram
  ) => SquarePosition[];
}

export class PieceMoveAsPlain {
  constructor(
    private _piece_type: PieceType,
    private currnetPosition: SquarePosition,
    private _piece_master: PlayerType,
  ) {}

  //
  public getCanMoveArea(): SquarePosition[] {
    const square_positions: SquarePosition[] = PieceMoveAreaFactory.factory(
      this._piece_type,
    ).get_square_positions_as_plain(this.currnetPosition, this._piece_master);
    return square_positions;
  }
}
