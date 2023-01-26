import { ShogiBoard } from "../value/ShogiBoard";
import { PieceStand } from "../value/PieceStand";
import { Move } from "../type/Move";
// import { PieceOnBoard } from "./PieceOnBoard";
import { Player } from "../value/Player";
// import { Turn } from "../value/Turn";
import { Square } from "../type/Square";
import { range } from "../service/utils";
// type
import { PieceStandPair } from "../type/PieceStand";
import { PieceMoveFrom } from "../type/Piece";
import { PlayerType } from "../type/Player";
import { FileRankPair } from "../type/FileRankNumber";
import { InitialShogiBoard } from "../const/InitialShogiBoard";

export class Diagram {
  static getInitialDiagram(): Diagram {
    return new Diagram(Player.Sente, InitialShogiBoard);
  }

  public readonly pieceStandPair: PieceStandPair;

  constructor(
    public readonly currentTurn: PlayerType,
    public readonly shogiBoard: ShogiBoard,
    initialPieceStandPair?: PieceStandPair,
  ) {
    if (initialPieceStandPair) {
      this.pieceStandPair = initialPieceStandPair;
    } else {
      this.pieceStandPair = new Map([
        [Player.Sente, new PieceStand(Player.Sente, [])],
        [Player.Gote, new PieceStand(Player.Gote, [])],
      ]);
    }
  }

  get piece_stands(): PieceStandPair {
    return this.pieceStandPair;
  }

  public get_square(file_rank: FileRankPair): Square {
    return this.shogiBoard[file_rank[0]][file_rank[1]];
  }

  public moved(move: Move) {
    if (move.piece.master != this.turn) {
      throw Error(
        `Turn unmatched, current Turn is ${this.turn}, passed move's player is ${move.piece.master}`,
      );
    }
    if (move.from instanceof Square) {
      this._moved_from_square_position(move);
    }
    if (move.from instanceof PieceStand) {
      this._moved_from_piece_in_hand(move);
    }
    this.currentTurn.advance();
  }

  private _moved_from_square_position(move: Move) {
    const from: Square = move.from as Square;
    const { to } = move;
    const target_position_piece = this._put_piece_into_square_position(
      from,
      to,
      move.piece,
    );
    // 移動先に駒が居たら場合
    if (target_position_piece) {
      const player: PlayerType = move.piece.master;
      // 駒が取られる (駒の所有者の変更)
      target_position_piece.be_taken_by(player);
      // 駒台に駒を増やす
      const piece_stand = this.PieceStandPair.get(player) as PieceStand;
      piece_stand.take_piece(target_position_piece);
    }
  }

  private _moved_from_piece_in_hand(move: Move) {
    const from: PieceStand = move.from as PieceStand;
    const { to } = move;
    this._put_piece_into_square_position(from, to, move.piece);
  }

  private _put_piece_into_square_position(
    from: PieceMoveFrom,
    to: Square,
    piece: Piece,
  ): Piece | null {
    // remove piece in position come from

    if (from instanceof Square) {
      from.remove_piece();
    }
    if (from instanceof PieceStand) {
      const piece_stand = this.piece_stands.get(from.master) as PieceStand;
      piece_stand.release_piece(piece);
    }
    const target_position_piece = to.put_piece(piece);
    return target_position_piece;
  }

  public diagram_to_string() {
    let diagram_string = "";
    // shogi_board
    for (const i of range(0, 10)) {
      const r = i;
      for (const j of range(0, 10)) {
        const f = 9 - j;
        if (r == 0) {
          if (f == 0) {
            diagram_string += " ";
            continue;
          }
          diagram_string += f;
          continue;
        }
        if (f == 0) {
          diagram_string += r;
          continue;
        }
        diagram_string += this.shogi_board[f][r].piece?.type_initial || "-";
      }
      diagram_string += "\n";
    }
    return diagram_string;
  }
}
