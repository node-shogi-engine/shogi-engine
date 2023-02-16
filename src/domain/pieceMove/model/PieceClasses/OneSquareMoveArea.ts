import { FileRankService } from "@/domain/service/composeDiagram/FileRankService";
import { Player } from "@/domain/composeDiagram/value/Player";
import { SquarePosition } from "@/domain/composeDiagram/value/SquarePosition";
import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { FileRankNumber } from "@/domain/composeDiagram/type/FileRankNumber";
import { PieceType } from "@/domain/composeDiagram/type/PieceClasses";
import { PlayerType } from "@/domain/composeDiagram/type/Player";
import { SquareContent } from "@/domain/composeDiagram/type/SquareContent";
import { PieceMoveOnDiagram } from "@/domain/service/pieceMove/PieceMoveOnDiagram";
import { PIECE_CLASS_MOVES } from "@/domain/pieceMove/const/PieceClassMoves";
import { OneSquareArea } from "@/domain/pieceMove/type/PieceClasses";
import { IPieceMoveArea } from "@/domain/pieceMove/interface/IPieceMoveArea";

export class OneSquareMoveArea implements IPieceMoveArea {
  static readonly OneSquareMoveArea: { [key: string]: OneSquareArea[] } = PIECE_CLASS_MOVES;

  static getFileRankFromNumber(number: OneSquareArea): number[] {
    const numberFileRankMap = {
      9: [-1, -1],
      6: [-1, 0],
      3: [-1, 1],
      8: [0, -1],
      2: [0, 1],
      // 5: [],
      7: [1, -1],
      4: [1, 0],
      1: [1, 1],
    };
    return numberFileRankMap[number];
  }

  constructor(private pieceType: PieceType) {}

  public getSquarePositionsAsPlain(
    currnetPosition: SquarePosition,
    piece_master: PlayerType,
  ): SquarePosition[] {
    // specific piece props
    const specificPieceCanMoveArea = piece_master === Player.Sente
      ? OneSquareMoveArea.OneSquareMoveArea[this.pieceType]
      : OneSquareMoveArea.OneSquareMoveArea[this.pieceType].map(
        (area) => (10 - area) as OneSquareArea, // 後手番の時、移動可能範囲を上下左右逆にする
      );
    const currentFile = currnetPosition.file;
    const currentRank = currnetPosition.rank;

    // functions
    const pieceMoveAreaAsNumber = (number: OneSquareArea): number[] => {
      const [fileDestination, rankDestination] = OneSquareMoveArea.getFileRankFromNumber(number);
      const fileAsNumber: number = currentFile + fileDestination;
      const rankAsNumber: number = currentRank + rankDestination;
      // squarePositionList.push(square_position);
      return [fileAsNumber, rankAsNumber];
    };
    const removeSquareOutOfShogiBoard = (
      file_rankAsNumber: number[],
    ): boolean => {
      const fileAsNumber: number = file_rankAsNumber[0];
      const rankAsNumber: number = file_rankAsNumber[1];
      return FileRankService.isInFileRankNumber(fileAsNumber, rankAsNumber);
    };
    const generateSquarePositionFromNumber = (
      file_rankAsNumber: number[],
    ) => {
      const file: FileRankNumber = FileRankService.castNumberToFileRank(
        file_rankAsNumber[0],
      );
      const rank: FileRankNumber = FileRankService.castNumberToFileRank(
        file_rankAsNumber[1],
      );
      return new SquarePosition(file, rank);
    };

    // result
    const squarePositionList: SquarePosition[] = specificPieceCanMoveArea
      .map(pieceMoveAreaAsNumber)
      .filter(removeSquareOutOfShogiBoard)
      .map(generateSquarePositionFromNumber);
    return squarePositionList;
  }

  public getSquarePositionsAsOnDiagram(
    currnetPosition: SquarePosition,
    diagram: Diagram,
  ): SquarePosition[] {
    const { file, rank } = currnetPosition;
    const squareContent: SquareContent = diagram.getSquareContent([file, rank]);
    const master = squareContent?.master;
    if (!master) {
      throw Error(`There is no piece, in file: ${file}, rank: ${rank}.`);
    }
    const squarePositionList = this.getSquarePositionsAsPlain(
      currnetPosition,
      master,
    );
    return PieceMoveOnDiagram.filterInInWhereCanMoveOnDiagramForOneSquarePiece(
      squarePositionList,
      diagram,
    );
  }
}
