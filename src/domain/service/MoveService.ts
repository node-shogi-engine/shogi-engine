import { Diagram } from "../model/Diagram";
import { PieceStand } from "../model/PieceStand";
import { FileRankPair } from "../const/FileRankNumber";
import { Move } from "../model/type/Move";
import { Piece } from "../model/Piece";
import { Square } from "../type/SquareContent";

export type MoveOptionAsPair = {
  from?: FileRankPair;
  to: FileRankPair;
  promotion: boolean;
};

export class MoveService {
  static factory();
  static create_move_from_pair(diagram: Diagram, option: MoveOptionAsPair) {
    const to = diagram.get_square(option.to);
    if (option.from) {
      const from: Square = diagram.get_square(option.from);
      return new Move(from, to, option.promotion);
    }
    const from: PieceStand = diagram.piece_stands.get(
      diagram.turn,
    ) as PieceStand;
    // new PieceStand(diagram.turn, []);
    const move = new Move(from, to, option.promotion);
    return move;
  }

  static create_move_from_square(
    from: Square,
    to: Square,
    promotion: boolean = false,
  ) {
    const move = new Move(from, to, promotion);
    return move;
  }

  static create_move_from_piece_stand(
    from: PieceStand,
    piece: Piece,
    to: Square,
    promotion: boolean = false,
  ) {
    const move = new Move(from, to, promotion, piece);
    return move;
  }
}
