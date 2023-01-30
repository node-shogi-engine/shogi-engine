import { ShogiBoard } from "../value/ShogiBoard";
// type
import { SquareContent } from "../type/SquareContent";
import { PieceStandPair } from "../type/PieceStandPair";
import { PlayerType } from "../type/Player";
import { FileRankPair } from "../type/FileRankNumber";
import { INITIAL_PIECE_STAND_PAIR } from "../const/PieceStandPair";
import { PieceOnBoard } from "./PieceOnBoard";
import { PLAYER_OPPOSITION } from "../const/PlayerOpposition";
import { Player } from "../value/Player";
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
