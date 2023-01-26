import { Player } from "../../../value/Player";
import { SquarePosition } from "../../../value/SquarePosition";
import { Diagram } from "../../Diagram";
import { FileRank } from "../../FileRank";
import { PieceMoveOnDiagram } from "../PieceMoveOnDiagram";
import { IPieceMoveArea } from "../PieceMoveAsPlain";
// type
import { FileRankNumber } from "../../../type/FileRankNumber";
import { PlayerType } from "../../../type/Player";

export class kNightMoveArea implements IPieceMoveArea {
  public get_square_positions_as_plain(
    currnetPosition: SquarePosition,
    piece_master: PlayerType,
  ): SquarePosition[] {
    const square_position_list: SquarePosition[] = [];
    const current_file = currnetPosition.file;
    const current_rank = currnetPosition.rank;
    const target_file_pair = [current_file - 1, current_file + 1];
    const target_rank = piece_master == Player.Sente ? current_rank - 2 : current_rank + 2;
    target_file_pair.map((target_file) => {
      if (FileRank.is_in_file_rank_number(target_file, target_rank)) {
        square_position_list.push(
          new SquarePosition(
            target_file as FileRankNumber,
            target_rank as FileRankNumber,
          ),
        );
      }
    });
    return square_position_list;
  }

  public get_square_positions_as_on_diagram(
    currnetPosition: SquarePosition,
    diagram: Diagram,
  ): SquarePosition[] {
    const master = PieceMoveOnDiagram.get_piece_master_by_currnetPosition_and_diagram(
      currnetPosition,
      diagram,
    );
    const square_position_list = this.get_square_positions_as_plain(
      currnetPosition,
      master,
    );
    return PieceMoveOnDiagram.filter_in_in_where_can_move_on_diagram_for_one_square_piece(
      square_position_list,
      diagram,
    );
  }
}
