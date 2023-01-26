import { SquarePosition } from "../../../value/SquarePosition";
import { Diagram } from "../../Diagram";
import { FileRank } from "../../FileRank";
import { PieceMoveOnDiagram } from "../PieceMoveOnDiagram";
import { IPieceMoveArea } from "../PieceMoveAsPlain";
// type
import { FileRankNumber } from "../../../type/FileRankNumber";
import { PlayerType } from "../../../type/Player";

const DirectionList = ["ur", "dr", "ul", "dl"] as const;
type Direction = (typeof DirectionList)[number];

export class BishopMoveArea implements IPieceMoveArea {
  public get_square_positions_as_plain(
    currnetPosition: SquarePosition,
    piece_master: PlayerType,
  ): SquarePosition[] {
    (() => {
      piece_master;
    })();
    // 駒のある位置を基準にして、各方向へ伸びていく効きを取得する
    const up_right_position_list = this._square_positions_by_direction(
      currnetPosition,
      "ur",
    );
    const down_right_position_list = this._square_positions_by_direction(
      currnetPosition,
      "dr",
    );
    const up_left_position_list = this._square_positions_by_direction(
      currnetPosition,
      "ul",
    );
    const down_left_position_list = this._square_positions_by_direction(
      currnetPosition,
      "dl",
    );
    // 各方向の移動範囲を結合する
    const square_position_list: SquarePosition[] = up_right_position_list.concat(
      down_right_position_list,
      up_left_position_list,
      down_left_position_list,
    );

    return square_position_list;
  }

  public get_square_positions_as_on_diagram(
    currnetPosition: SquarePosition,
    diagram: Diagram,
  ): SquarePosition[] {
    // 駒のある位置を基準にして、各方向へ伸びていく効きを取得する
    const up_right_position_list = this._square_positions_by_direction(
      currnetPosition,
      "ur",
    );
    const down_right_position_list = this._square_positions_by_direction(
      currnetPosition,
      "dr",
    );
    const up_left_position_list = this._square_positions_by_direction(
      currnetPosition,
      "ul",
    );
    const down_left_position_list = this._square_positions_by_direction(
      currnetPosition,
      "dl",
    );
    // 各方向にて、駒に突き当たるまでの範囲を取得
    const up_right_position_list_width_diagram = PieceMoveOnDiagram.sliece_in_where_can_move_on_diagram_for_long_piece(
      up_right_position_list,
      currnetPosition,
      diagram,
    );
    const down_right_position_list_width_diagram = PieceMoveOnDiagram.sliece_in_where_can_move_on_diagram_for_long_piece(
      down_right_position_list,
      currnetPosition,
      diagram,
    );
    const up_left_position_list_width_diagram = PieceMoveOnDiagram.sliece_in_where_can_move_on_diagram_for_long_piece(
      up_left_position_list,
      currnetPosition,
      diagram,
    );
    const down_left_position_list_width_diagram = PieceMoveOnDiagram.sliece_in_where_can_move_on_diagram_for_long_piece(
      down_left_position_list,
      currnetPosition,
      diagram,
    );
    // 各方向の移動範囲を結合する
    const square_position_list: SquarePosition[] = up_right_position_list_width_diagram.concat(
      down_right_position_list_width_diagram,
      up_left_position_list_width_diagram,
      down_left_position_list_width_diagram,
    );
    return square_position_list;
  }

  private _square_positions_by_direction(
    currnetPosition: SquarePosition,
    direction: Direction,
  ): SquarePosition[] {
    const square_position_list: SquarePosition[] = [];
    let current_file = currnetPosition.file as number;
    let current_rank = currnetPosition.rank as number;
    let file_direction: number;
    let rank_direction: number;
    if (direction == "ur") {
      file_direction = -1;
      rank_direction = -1;
    } else if (direction == "dr") {
      file_direction = -1;
      rank_direction = 1;
    } else if (direction == "ul") {
      file_direction = 1;
      rank_direction = -1;
    } else if (direction == "dl") {
      file_direction = 1;
      rank_direction = 1;
    }
    const step = () => {
      current_file += file_direction;
      current_rank += rank_direction;
    };
    step();
    while (FileRank.is_in_file_rank_number(current_file, current_rank)) {
      square_position_list.push(
        new SquarePosition(
          current_file as FileRankNumber,
          current_rank as FileRankNumber,
        ),
      );
      step();
    }
    return square_position_list;
  }
}
