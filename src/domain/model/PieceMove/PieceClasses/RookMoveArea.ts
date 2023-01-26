import { SquarePosition } from "../../../value/SquarePosition";
import { Diagram } from "../../Diagram";
import { FileRank } from "../../FileRank";
import { PieceMoveOnDiagram } from "../PieceMoveOnDiagram";
import { IPieceMoveArea } from "../PieceMoveAsPlain";
// type
import { FileRankNumber } from "../../../type/FileRankNumber";
import { PlayerType } from "../../../type/Player";

const DirectionList = ["u", "r", "d", "l"] as const;
type Direction = (typeof DirectionList)[number];

export class RookMoveArea implements IPieceMoveArea {
  public get_square_positions_as_plain(
    currnetPosition: SquarePosition,
    piece_master: PlayerType,
  ): SquarePosition[] {
    (() => {
      piece_master;
    })();
    // 駒のある位置を基準にして、各方向へ伸びていく効きを取得する
    const up_position_list = this._square_positions_by_direction(
      currnetPosition,
      "u",
    );
    const right_position_list = this._square_positions_by_direction(
      currnetPosition,
      "r",
    );
    const down_position_list = this._square_positions_by_direction(
      currnetPosition,
      "d",
    );
    const left_position_list = this._square_positions_by_direction(
      currnetPosition,
      "l",
    );
    // 各方向の移動範囲を結合する
    const square_position_list: SquarePosition[] = up_position_list.concat(
      right_position_list,
      down_position_list,
      left_position_list,
    );

    return square_position_list;
  }

  public get_square_positions_as_on_diagram(
    currnetPosition: SquarePosition,
    diagram: Diagram,
  ): SquarePosition[] {
    // 駒のある位置を基準にして、各方向へ伸びていく効きを取得する
    const up_position_list = this._square_positions_by_direction(
      currnetPosition,
      "u",
    );
    const right_position_list = this._square_positions_by_direction(
      currnetPosition,
      "r",
    );
    const down_position_list = this._square_positions_by_direction(
      currnetPosition,
      "d",
    );
    const left_position_list = this._square_positions_by_direction(
      currnetPosition,
      "l",
    );
    // 各方向にて、駒に突き当たるまでの範囲を取得
    const up_position_list_width_diagram = PieceMoveOnDiagram.sliece_in_where_can_move_on_diagram_for_long_piece(
      up_position_list,
      currnetPosition,
      diagram,
    );
    const right_position_list_width_diagram = PieceMoveOnDiagram.sliece_in_where_can_move_on_diagram_for_long_piece(
      right_position_list,
      currnetPosition,
      diagram,
    );
    const down_position_list_width_diagram = PieceMoveOnDiagram.sliece_in_where_can_move_on_diagram_for_long_piece(
      down_position_list,
      currnetPosition,
      diagram,
    );
    const left_position_list_width_diagram = PieceMoveOnDiagram.sliece_in_where_can_move_on_diagram_for_long_piece(
      left_position_list,
      currnetPosition,
      diagram,
    );
    // 各方向の移動範囲を結合する
    const square_position_list: SquarePosition[] = up_position_list_width_diagram.concat(
      right_position_list_width_diagram,
      down_position_list_width_diagram,
      left_position_list_width_diagram,
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
    if (direction == "u") {
      file_direction = 0;
      rank_direction = -1;
    } else if (direction == "r") {
      file_direction = -1;
      rank_direction = 0;
    } else if (direction == "d") {
      file_direction = 0;
      rank_direction = 1;
    } else if (direction == "l") {
      file_direction = 1;
      rank_direction = 0;
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
