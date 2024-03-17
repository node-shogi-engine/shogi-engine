import { FileRankPair } from "@/domain/composeDiagram/type/FileRankNumber";
import { PieceOnBoard } from "@/domain/composeDiagram/model/pieceWrapper/PieceOnBoard";
import { Diagram } from "@/domain/composeDiagram/model/Diagram";

export class MoveAreaInBoard {
  public readonly moveAreaAsPlain: FileRankPair[];

  public readonly moveAreaOnDiagram: FileRankPair[];

  constructor(
    public readonly currentPosition: FileRankPair,
    public readonly pieceOnBoard: PieceOnBoard,
    private diagram: Diagram,
  ) {
    this.moveAreaAsPlain = this.getSquarePositionsAsPlain(currentPosition, pieceOnBoard);
    this.moveAreaOnDiagram = this.getSquarePositionsAsOnDiagram(
      currentPosition,
      pieceOnBoard,
      diagram,
    );
  }

  private getSquarePositionsAsPlain(
    currentPosition: FileRankPair,
    pieceOnBoard: PieceOnBoard,
  ) :FileRankPair[] {
    const pieceType = pieceOnBoard.pieceType;
    
  }

  private getSquarePositionsAsOnDiagram(
    currentPosition: FileRankPair,
    pieceOnBoard: PieceOnBoard,
    diagram: Diagram,
  ) :FileRankPair[] {

  }
}
