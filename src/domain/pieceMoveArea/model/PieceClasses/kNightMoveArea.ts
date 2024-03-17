import { FileRankService } from "@/domain/service/composeDiagram/FileRankService";
import { Player } from "@/domain/composeDiagram/value/Player";
import { SquarePosition } from "@/domain/composeDiagram/value/SquarePosition";
import { Diagram } from "@/domain/composeDiagram/model/Diagram";
// import { FileRankService } from "@/domain/service/FileRankService";
import { PieceMoveOnDiagram } from "@/domain/service/pieceMove/PieceMoveOnDiagram";
// type
import { FileRankNumber } from "@/domain/composeDiagram/type/FileRankNumber";
import { PlayerType } from "@/domain/composeDiagram/type/Player";
import { IPieceMoveArea } from "@/domain/pieceMoveArea/interface/IPieceMoveArea";

// eslint-disable-next-line @typescript-eslint/naming-convention
export class kNightMoveArea implements IPieceMoveArea {
  public getSquarePositionsAsPlain(
    currentPosition: SquarePosition,
    pieceMaster: PlayerType,
  ): SquarePosition[] {
    const squarePositionList: SquarePosition[] = [];
    const currentFile = currentPosition.file;
    const currentRank = currentPosition.rank;
    const targetFilePair = [currentFile - 1, currentFile + 1];
    const targetRank = pieceMaster === Player.Sente ? currentRank - 2 : currentRank + 2;
    targetFilePair.forEach((targetFile) => {
      if (FileRankService.isInFileRankNumber(targetFile, targetRank)) {
        squarePositionList.push(
          new SquarePosition(
            targetFile as FileRankNumber,
            targetRank as FileRankNumber,
          ),
        );
      }
    });
    return squarePositionList;
  }

  public getSquarePositionsAsOnDiagram(
    currentPosition: SquarePosition,
    diagram: Diagram,
  ): SquarePosition[] {
    const master = PieceMoveOnDiagram.getPieceMasterByCurrentPositionAndDiagram(
      currentPosition,
      diagram,
    );
    const squarePositionList = this.getSquarePositionsAsPlain(
      currentPosition,
      master,
    );
    return PieceMoveOnDiagram.filterInInWhereCanMoveOnDiagramForOneSquarePiece(
      squarePositionList,
      diagram,
    );
  }
}
