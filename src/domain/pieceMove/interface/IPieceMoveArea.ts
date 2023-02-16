import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { PlayerType } from "@/domain/composeDiagram/type/Player";
import { SquarePosition } from "@/domain/composeDiagram/value/SquarePosition";

export interface IPieceMoveArea {
  getSquarePositionsAsPlain: (
    currnetPosition: SquarePosition,
    pieceMaster: PlayerType
  ) => SquarePosition[];

  getSquarePositionsAsOnDiagram: (
    currnetPosition: SquarePosition,
    diagram: Diagram
  ) => SquarePosition[];
}
