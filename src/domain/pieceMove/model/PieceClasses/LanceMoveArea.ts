import { FileRankService } from "@/domain/service/composeDiagram/FileRankService";
import { Player } from "@/domain/composeDiagram/value/Player";
import { SquarePosition } from "@/domain/composeDiagram/value/SquarePosition";
import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { FileRankNumber } from "@/domain/composeDiagram/type/FileRankNumber";
import { PlayerType } from "@/domain/composeDiagram/type/Player";
import { PieceMoveOnDiagram } from "@/domain/service/pieceMove/PieceMoveOnDiagram";
import { IPieceMoveArea } from "@/domain/pieceMove/interface/IPieceMoveArea";

const DirectionList = ["u", "d"] as const;
type Direction = (typeof DirectionList)[number];

export class LanceMoveArea implements IPieceMoveArea {
  public getSquarePositionsAsPlain(
    currnetPosition: SquarePosition,
    pieceMaster: PlayerType,
  ): SquarePosition[] {
    const direction: Direction = pieceMaster === Player.Sente ? "u" : "d";
    const squarePositionList: SquarePosition[] = this.SquarePositionsByDirection(currnetPosition, direction);
    return squarePositionList;
  }

  public getSquarePositionsAsOnDiagram(
    currnetPosition: SquarePosition,
    diagram: Diagram,
  ): SquarePosition[] {
    const master = PieceMoveOnDiagram.getPieceMasterByCurrnetPositionAndDiagram(
      currnetPosition,
      diagram,
    );
    const squarePositionList = this.getSquarePositionsAsPlain(
      currnetPosition,
      master,
    );
    return PieceMoveOnDiagram.slieceInWhereCanMoveOnDiagramForLongPiece(
      squarePositionList,
      currnetPosition,
      diagram,
    );
  }

  private SquarePositionsByDirection(
    currnetPosition: SquarePosition,
    direction: Direction,
  ): SquarePosition[] {
    const squarePositionList: SquarePosition[] = [];
    const currentFile = currnetPosition.file as number;
    let currentRank = currnetPosition.rank as number;
    let rankDirection: number;
    if (direction === "u") {
      rankDirection = -1;
    } else if (direction === "d") {
      rankDirection = 1;
    }
    const step = () => {
      currentRank += rankDirection;
    };
    step();
    while (FileRankService.isInFileRankNumber(currentFile, currentRank)) {
      squarePositionList.push(
        new SquarePosition(
          currentFile as FileRankNumber,
          currentRank as FileRankNumber,
        ),
      );
      step();
    }
    return squarePositionList;
  }
}
