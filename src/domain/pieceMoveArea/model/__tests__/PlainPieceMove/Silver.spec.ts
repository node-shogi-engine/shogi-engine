import { Player } from "../../../../composeDiagram/value/Player";
import { SquarePosition } from "../../../../composeDiagram/value/SquarePosition";
import { moveAreaTest } from "./_helper";

/**
 * テストケース: (fike,rank)
 *  5,5 先手
 *  5,5 後手
 *
 *  結果の配列のマスの位置は、将棋盤の左上から始まり、右へ、折り返して下へ、の順番
 */
test("get PieceMove test as \"Silver\"", () => {
  const piece_type = "Silver";
  // 5,5 先手
  let currentPosition = new SquarePosition(5, 5);
  let playerType = Player.Sente;
  let expect = [
    [6, 4],
    [5, 4],
    [4, 4],
    // [ 6, 5 ],
    // [ 4, 5 ],
    [6, 6],
    // [ 5, 6 ],
    [4, 6],
  ];
  moveAreaTest(piece_type, playerType, currentPosition, expect);

  // 5,5 後手
  currentPosition = new SquarePosition(5, 5);
  playerType = Player.Gote;
  expect = [
    [4, 6],
    [5, 6],
    [6, 6],
    // [ 4, 5 ],
    // [ 6, 5 ],
    [4, 4],
    // [ 5, 4 ],
    [6, 4],
  ];
  moveAreaTest(piece_type, playerType, currentPosition, expect);
});
