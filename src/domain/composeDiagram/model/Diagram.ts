import { ShogiBoard } from "@/domain/composeDiagram/value/ShogiBoard";
// type
import { SquareContent } from "@/domain/composeDiagram/type/SquareContent";
import { PieceStandPair } from "@/domain/composeDiagram/type/PieceStandPair";
import { PlayerType } from "@/domain/composeDiagram/type/Player";
import { FileRankPair } from "@/domain/composeDiagram/type/FileRankNumber";
import { INITIAL_PIECE_STAND_PAIR } from "@/domain/composeDiagram/const/PieceStandPair";
import { PieceOnBoard } from "@/domain/composeDiagram/model/pieceWrapper/PieceOnBoard";
import { PLAYER_OPPOSITION } from "@/domain/composeDiagram/const/PlayerOpposition";
import { Player } from "@/domain/composeDiagram/value/Player";
// helper

export class Diagram {
  public readonly pieceStandPair: PieceStandPair;

  private currentTurn: PlayerType = Player.Sente;

  constructor(
    public readonly shogiBoard: ShogiBoard,
    currentTurn?: PlayerType,
    initialPieceStandPair?: PieceStandPair,
  ) {
    if (initialPieceStandPair) {
      this.pieceStandPair = initialPieceStandPair;
    } else {
      this.pieceStandPair = INITIAL_PIECE_STAND_PAIR;
    }
    if (currentTurn) {
      this.currentTurn = currentTurn;
    }
  }

  get turn(): PlayerType {
    return this.currentTurn;
  }

  public turnProgress() {
    this.currentTurn = PLAYER_OPPOSITION[this.currentTurn];
  }

  public getSquareContent(file_rank: FileRankPair): SquareContent {
    const [file, rank] = file_rank;
    return this.shogiBoard[file][rank];
  }

  public setSquareContentWithPiece(
    file_rank: FileRankPair,
    pieceOnBoard: PieceOnBoard,
  ): void {
    const [file, rank] = file_rank;
    this.shogiBoard[file][rank] = pieceOnBoard;
  }

  public setSquareContentToNull(file_rank: FileRankPair): void {
    const [file, rank] = file_rank;
    this.shogiBoard[file][rank] = null;
  }
}
