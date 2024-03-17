import { Player } from "../../../../composeDiagram/value/Player";
import { SquarePosition } from "../../../../composeDiagram/value/SquarePosition";
import { moveAreaTest } from "./_helper";

/**
 * テストケース: (fike,rank)
 *  1,1
 *  5,5
 *
 *  王・飛車・角は移動範囲判定に先後関係なし
 */
test("get PieceMove test as \"Rook\"", () => {
  const piece_type = "Rook";
  // 1,1
  let currentPosition = new SquarePosition(1, 1);
  let playerType = Player.Sente;
  let expect = [
    // down
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [1, 8],
    [1, 9],
    // left
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 1],
    [8, 1],
    [9, 1],
  ];
  moveAreaTest(piece_type, playerType, currentPosition, expect);

  // 5,5
  currentPosition = new SquarePosition(5, 5);
  playerType = Player.Sente;
  expect = [
    // up
    [5, 4],
    [5, 3],
    [5, 2],
    [5, 1],
    // right
    [4, 5],
    [3, 5],
    [2, 5],
    [1, 5],
    // down
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
    // left
    [6, 5],
    [7, 5],
    [8, 5],
    [9, 5],
  ];
  moveAreaTest(piece_type, playerType, currentPosition, expect);
});
