import { PieceClasses } from "../../../value/PieceType";
import { Player } from "../../../value/Player";
import { SquarePosition } from "../../../value/SquarePosition";
import { move_area_test } from "./_helper";

/**
 * テストケース: (fike,rank)
 *  1,1
 *  5,5
 *  9,5
 *
 *  王・飛車・角は移動範囲判定に先後関係なし
 *  結果の配列のマスの位置は、将棋盤の左上から始まり、右へ、折り返して下へ、の順番
 */
test("get PieceMove test as \"King\"", () => {
  const pieceType = PieceClasses.King;
  // 1,1
  let currentPosition = new SquarePosition(1, 1);
  let playerType = Player.Sente;
  let expect = [
    [2, 1],
    [2, 2],
    [1, 2],
  ];
  move_area_test(pieceType, playerType, currentPosition, expect);

  // 5,5
  currentPosition = new SquarePosition(5, 5);
  playerType = Player.Sente;
  expect = [
    [6, 4],
    [5, 4],
    [4, 4],
    [6, 5],
    [4, 5],
    [6, 6],
    [5, 6],
    [4, 6],
  ];
  move_area_test(pieceType, playerType, currentPosition, expect);

  // 9,5
  currentPosition = new SquarePosition(9, 9);
  playerType = Player.Sente;
  expect = [
    [9, 8],
    [8, 8],
    [8, 9],
  ];
  move_area_test(pieceType, playerType, currentPosition, expect);
});
