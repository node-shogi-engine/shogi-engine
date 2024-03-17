import { FileRankService } from "@/domain/service/composeDiagram/FileRankService";
import { Player } from "@/domain/composeDiagram/value/Player";
import { SquarePosition } from "@/domain/composeDiagram/value/SquarePosition";
import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { FileRankNumber } from "@/domain/composeDiagram/type/FileRankNumber";
import { PlayerType } from "@/domain/composeDiagram/type/Player";
import { PieceMoveOnDiagram } from "@/domain/service/pieceMove/PieceMoveOnDiagram";
import { IPieceMoveArea } from "@/domain/pieceMoveArea/interface/IPieceMoveArea";

const DirectionList = ["u", "d"] as const;
type Direction = (typeof DirectionList)[number];

export class LanceMoveArea implements IPieceMoveArea {
  public getSquarePositionsAsPlain(
    currentPosition: SquarePosition,
    pieceMaster: PlayerType,
  ): SquarePosition[] {
    const direction: Direction = pieceMaster === Player.Sente ? "u" : "d";
    // prettier-ignore
    const squarePositionList: SquarePosition[] = (
      this.SquarePositionsByDirection(currentPosition, direction)
    );
    return squarePositionList;
  }

  public getSquarePositionsAsOnDiagram(
    currentPosition: SquarePosition,
    diagram: Diagram,
  ): SquarePosition[] {
    const master = PieceMoveOnDiagram.getPieceMasterBycurrentPositionAndDiagram(
      currentPosition,
      diagram,
    );
    const squarePositionList = this.getSquarePositionsAsPlain(
      currentPosition,
      master,
    );
    return PieceMoveOnDiagram.slieceInWhereCanMoveOnDiagramForLongPiece(
      squarePositionList,
      currentPosition,
      diagram,
    );
  }

  private SquarePositionsByDirection(
    currentPosition: SquarePosition,
    direction: Direction,
  ): SquarePosition[] {
    const squarePositionList: SquarePosition[] = [];
    const currentFile = currentPosition.file as number;
    let currentRank = currentPosition.rank as number;
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
