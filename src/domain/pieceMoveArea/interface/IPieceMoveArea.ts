import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { PlayerType } from "@/domain/composeDiagram/type/Player";
import { SquarePosition } from "@/domain/composeDiagram/value/SquarePosition";

export interface IPieceMoveArea {
  getSquarePositionsAsPlain: (
    currentPosition: SquarePosition,
    pieceMaster: PlayerType
  ) => SquarePosition[];

  getSquarePositionsAsOnDiagram: (
    currentPosition: SquarePosition,
    diagram: Diagram
  ) => SquarePosition[];
}
