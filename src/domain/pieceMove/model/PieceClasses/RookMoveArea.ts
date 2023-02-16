import { FileRankService } from "@/domain/service/composeDiagram/FileRankService";
import { SquarePosition } from "@/domain/composeDiagram/value/SquarePosition";
import { Diagram } from "@/domain/composeDiagram/model/Diagram";
// type
import { FileRankNumber } from "@/domain/composeDiagram/type/FileRankNumber";
// import { PlayerType } from "@/domain/composeDiagram/type/Player";
import { PieceMoveOnDiagram } from "@/domain/service/pieceMove/PieceMoveOnDiagram";
import { IPieceMoveArea } from "@/domain/pieceMove/interface/IPieceMoveArea";

const DirectionList = ["u", "r", "d", "l"] as const;
type Direction = (typeof DirectionList)[number];

export class RookMoveArea implements IPieceMoveArea {
  public getSquarePositionsAsPlain(
    currnetPosition: SquarePosition,
    // pieceMaster: PlayerType,
  ): SquarePosition[] {
    // (() => {
    //   pieceMaster;
    // })();
    // 駒のある位置を基準にして、各方向へ伸びていく効きを取得する
    const upPositionList = this.SquarePositionsByDirection(
      currnetPosition,
      "u",
    );
    const rightPositionList = this.SquarePositionsByDirection(
      currnetPosition,
      "r",
    );
    const downPositionList = this.SquarePositionsByDirection(
      currnetPosition,
      "d",
    );
    const leftPositionList = this.SquarePositionsByDirection(
      currnetPosition,
      "l",
    );
    // 各方向の移動範囲を結合する
    const squarePositionList: SquarePosition[] = upPositionList.concat(
      rightPositionList,
      downPositionList,
      leftPositionList,
    );

    return squarePositionList;
  }

  public getSquarePositionsAsOnDiagram(
    currnetPosition: SquarePosition,
    diagram: Diagram,
  ): SquarePosition[] {
    // 駒のある位置を基準にして、各方向へ伸びていく効きを取得する
    const upPositionList = this.SquarePositionsByDirection(
      currnetPosition,
      "u",
    );
    const rightPositionList = this.SquarePositionsByDirection(
      currnetPosition,
      "r",
    );
    const downPositionList = this.SquarePositionsByDirection(
      currnetPosition,
      "d",
    );
    const leftPositionList = this.SquarePositionsByDirection(
      currnetPosition,
      "l",
    );
    // 各方向にて、駒に突き当たるまでの範囲を取得
    const upPositionListWidthDiagram = PieceMoveOnDiagram.slieceInWhereCanMoveOnDiagramForLongPiece(
      upPositionList,
      currnetPosition,
      diagram,
    );
    const rightPositionListWidthDiagram = PieceMoveOnDiagram.slieceInWhereCanMoveOnDiagramForLongPiece(
      rightPositionList,
      currnetPosition,
      diagram,
    );
    const downPositionListWidthDiagram = PieceMoveOnDiagram.slieceInWhereCanMoveOnDiagramForLongPiece(
      downPositionList,
      currnetPosition,
      diagram,
    );
    const leftPositionListWidthDiagram = PieceMoveOnDiagram.slieceInWhereCanMoveOnDiagramForLongPiece(
      leftPositionList,
      currnetPosition,
      diagram,
    );
    // 各方向の移動範囲を結合する
    const squarePositionList: SquarePosition[] = upPositionListWidthDiagram.concat(
      rightPositionListWidthDiagram,
      downPositionListWidthDiagram,
      leftPositionListWidthDiagram,
    );
    return squarePositionList;
  }

  private SquarePositionsByDirection(
    currnetPosition: SquarePosition,
    direction: Direction,
  ): SquarePosition[] {
    const squarePositionList: SquarePosition[] = [];
    let currentFile = currnetPosition.file as number;
    let currentRank = currnetPosition.rank as number;
    let fileDirection: number;
    let rankDirection: number;
    if (direction === "u") {
      fileDirection = 0;
      rankDirection = -1;
    } else if (direction === "r") {
      fileDirection = -1;
      rankDirection = 0;
    } else if (direction === "d") {
      fileDirection = 0;
      rankDirection = 1;
    } else if (direction === "l") {
      fileDirection = 1;
      rankDirection = 0;
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
