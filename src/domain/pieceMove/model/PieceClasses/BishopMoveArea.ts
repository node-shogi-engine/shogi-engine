import { FileRankService } from "@/domain/service/composeDiagram/FileRankService";
import { SquarePosition } from "@/domain/composeDiagram/value/SquarePosition";
import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { FileRankNumber } from "@/domain/composeDiagram/type/FileRankNumber";
import { PieceMoveOnDiagram } from "@/domain/service/pieceMove/PieceMoveOnDiagram";
import { IPieceMoveArea } from "@/domain/pieceMove/interface/IPieceMoveArea";

const DirectionList = ["ur", "dr", "ul", "dl"] as const;
type Direction = (typeof DirectionList)[number];

export class BishopMoveArea implements IPieceMoveArea {
  public getSquarePositionsAsPlain(
    currnetPosition: SquarePosition,
    // pieceMaster: PlayerType,
  ): SquarePosition[] {
    // (() => {
    //   pieceMaster;
    // })();
    // 駒のある位置を基準にして、各方向へ伸びていく効きを取得する
    const upRightPositionList = this.squarePositionsByDirection(
      currnetPosition,
      "ur",
    );
    const downRightPositionList = this.squarePositionsByDirection(
      currnetPosition,
      "dr",
    );
    const upLeftPositionList = this.squarePositionsByDirection(
      currnetPosition,
      "ul",
    );
    const downLeftPositionList = this.squarePositionsByDirection(
      currnetPosition,
      "dl",
    );
    // 各方向の移動範囲を結合する
    const squarePositionList: SquarePosition[] = upRightPositionList.concat(
      downRightPositionList,
      upLeftPositionList,
      downLeftPositionList,
    );

    return squarePositionList;
  }

  public getSquarePositionsAsOnDiagram(
    currnetPosition: SquarePosition,
    diagram: Diagram,
  ): SquarePosition[] {
    // 駒のある位置を基準にして、各方向へ伸びていく効きを取得する
    const upRightPositionList: SquarePosition[] = this.squarePositionsByDirection(currnetPosition, "ur");
    const downRightPositionList: SquarePosition[] = this.squarePositionsByDirection(currnetPosition, "dr");
    const upLeftPositionList: SquarePosition[] = this.squarePositionsByDirection(currnetPosition, "ul");
    const downLeftPositionList: SquarePosition[] = this.squarePositionsByDirection(currnetPosition, "dl");
    // 各方向にて、駒に突き当たるまでの範囲を取得
    // prettier-ignore
    const upRightPositionListWidthDiagram = (
      PieceMoveOnDiagram.slieceInWhereCanMoveOnDiagramForLongPiece(
        upRightPositionList,
        currnetPosition,
        diagram,
      )
    );
    // prettier-ignore
    const downRightPositionListWidthDiagram = (
      PieceMoveOnDiagram.slieceInWhereCanMoveOnDiagramForLongPiece(
        downRightPositionList,
        currnetPosition,
        diagram,
      )
    );
    // prettier-ignore
    const upLeftPositionListWidthDiagram = (
      PieceMoveOnDiagram.slieceInWhereCanMoveOnDiagramForLongPiece(
        upLeftPositionList,
        currnetPosition,
        diagram,
      )
    );
    // prettier-ignore
    const downLeftPositionListWidthDiagram = (
      PieceMoveOnDiagram.slieceInWhereCanMoveOnDiagramForLongPiece(
        downLeftPositionList,
        currnetPosition,
        diagram,
      )
    );
    // 各方向の移動範囲を結合する
    const squarePositionList: SquarePosition[] = upRightPositionListWidthDiagram.concat(
      downRightPositionListWidthDiagram,
      upLeftPositionListWidthDiagram,
      downLeftPositionListWidthDiagram,
    );
    return squarePositionList;
  }

  private squarePositionsByDirection(
    currnetPosition: SquarePosition,
    direction: Direction,
  ): SquarePosition[] {
    const squarePositionList: SquarePosition[] = [];
    let currentFile = currnetPosition.file as number;
    let currentRank = currnetPosition.rank as number;
    let fileDirection: number;
    let rankDirection: number;
    if (direction === "ur") {
      fileDirection = -1;
      rankDirection = -1;
    } else if (direction === "dr") {
      fileDirection = -1;
      rankDirection = 1;
    } else if (direction === "ul") {
      fileDirection = 1;
      rankDirection = -1;
    } else if (direction === "dl") {
      fileDirection = 1;
      rankDirection = 1;
    }
    const step = () => {
      currentFile += fileDirection;
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
