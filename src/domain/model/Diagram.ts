import { ShogiBoard } from "../value/ShogiBoard";
// type
import { SquareContent } from "../type/SquareContent";
import { PieceStandPair } from "../type/PieceStandPair";
import { PlayerType } from "../type/Player";
import { FileRankPair } from "../type/FileRankNumber";
import { INITIAL_PIECE_STAND_PAIR } from "../const/PieceStandPair";
// helper

export class Diagram {
  public readonly pieceStandPair: PieceStandPair;

  constructor(
    public readonly currentTurn: PlayerType,
    public readonly shogiBoard: ShogiBoard,
    initialPieceStandPair?: PieceStandPair,
  ) {
    if (initialPieceStandPair) {
      this.pieceStandPair = initialPieceStandPair;
    } else {
      this.pieceStandPair = INITIAL_PIECE_STAND_PAIR;
    }
  }

  public getSquare(file_rank: FileRankPair): SquareContent {
    const [file, rank] = file_rank;
    return this.shogiBoard[file][rank];
  }

  // private _moved_from_square_position(move: Move) {
  //   const from: Square = move.from as Square;
  //   const { to } = move;
  //   const target_position_piece = this._put_piece_into_square_position(
  //     from,
  //     to,
  //     move.piece,
  //   );
  //   // 移動先に駒が居たら場合
  //   if (target_position_piece) {
  //     const player: PlayerType = move.piece.master;
  //     // 駒が取られる (駒の所有者の変更)
  //     target_position_piece.be_taken_by(player);
  //     // 駒台に駒を増やす
  //     const piece_stand = this.PieceStandPair.get(player) as PieceStand;
  //     piece_stand.take_piece(target_position_piece);
  //   }
  // }

  // private _moved_from_piece_in_hand(move: Move) {
  //   const from: PieceStand = move.from as PieceStand;
  //   const { to } = move;
  //   this._put_piece_into_square_position(from, to, move.piece);
  // }

  // private _put_piece_into_square_position(
  //   from: PieceMoveFrom,
  //   to: Square,
  //   piece: Piece,
  // ): Piece | null {
  //   // remove piece in position come from

  //   if (from instanceof Square) {
  //     from.remove_piece();
  //   }
  //   if (from instanceof PieceStand) {
  //     const piece_stand = this.piece_stands.get(from.master) as PieceStand;
  //     piece_stand.release_piece(piece);
  //   }
  //   const target_position_piece = to.put_piece(piece);
  //   return target_position_piece;
  // }
}
