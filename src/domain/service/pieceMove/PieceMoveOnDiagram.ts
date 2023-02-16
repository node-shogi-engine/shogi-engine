import { SquarePosition } from "@/domain/composeDiagram/value/SquarePosition";
import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { SquareContent } from "@/domain/composeDiagram/type/SquareContent";
import { FileRankPair } from "@/domain/composeDiagram/type/FileRankNumber";
import { PieceOnBoard } from "@/domain/composeDiagram/model/pieceWrapper/PieceOnBoard";
import { PlayerType } from "@/domain/composeDiagram/type/Player";
// import { PieceMoveAreaFactory } from "./PlainPieceMoveAreaFactory";

export class PieceMoveOnDiagram {
  // static methods for
  static getPieceMasterByCurrnetPositionAndDiagram(
    currnetPosition: SquarePosition,
    diagram: Diagram,
  ): PlayerType {
    const { file, rank } = currnetPosition;
    const piece: SquareContent = diagram.getSquareContent([file, rank]);
    if (!piece) {
      throw Error(`There is no piece, in file: ${file}, rank: ${rank}`);
    }
    return piece.master;
  }

  // 効きの止まる場所を取得し、そこまでの配列を返す関数、足の長い駒に使う
  static slieceInWhereCanMoveOnDiagramForLongPiece(
    squarePositionList: SquarePosition[],
    currnetPosition: SquarePosition,
    diagram: Diagram,
  ) {
    const master = this.getPieceMasterByCurrnetPositionAndDiagram(
      currnetPosition,
      diagram,
    );
    const squareHasPiece = (squarePosition: SquarePosition) => {
      const fileRankPair: FileRankPair = squarePosition.pair;
      return !!diagram.getSquareContent(fileRankPair);
    };
    const index = squarePositionList.findIndex(squareHasPiece);
    // 効きを遮る駒が存在しない場合
    if (index < 0) {
      return squarePositionList;
    }
    const squarePosition: SquarePosition = squarePositionList[index];
    const pieceInCurrnetPosition: SquareContent = diagram.getSquareContent(squarePosition.pair);
    if (pieceInCurrnetPosition?.master === master) {
      return squarePositionList.slice(0, index);
    }
    return squarePositionList.slice(0, index + 1);
  }

  // 効きの止まる場所を取得し、そこまでの配列を返す関数、1マスの範囲で移動する駒に使う
  static filterInInWhereCanMoveOnDiagramForOneSquarePiece(
    squarePositionList: SquarePosition[],
    diagram: Diagram,
  ): SquarePosition[] {
    const squarePositionNotHasMastersPiece = (
      squarePosition: SquarePosition,
    ) => {
      const squareContent = diagram.getSquareContent(squarePosition.pair);
      return !(squareContent?.master === diagram.turn);
    };
    const resultList: SquarePosition[] = squarePositionList.filter(
      squarePositionNotHasMastersPiece,
    );
    return resultList;
  }

  constructor(
    private currnetPosition: SquarePosition,
    private diagram: Diagram,
  ) {}

  //
  public getCanMoveArea(): SquarePosition[] {
    const squarePositions: SquarePosition[] = PieceMoveAreaFactory.factory(
      this.piece.pieceType,
    ).getSquarePositionsAsOnDiagram(this.CurrnetPosition, this.Diagram);
    return squarePositions;
  }

  private get piece(): PieceOnBoard {
    const { file, rank } = this.currnetPosition;
    const piece: SquareContent = this.diagram.getSquareContent([file, rank]);
    if (!piece) {
      throw Error(`There is no piece, in file: ${file}, rank: ${rank}`);
    }
    return piece;
  }
}
