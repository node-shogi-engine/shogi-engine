import { Player } from "../../../../composeDiagram/value/Player";
import { SquarePosition } from "../../../../composeDiagram/value/SquarePosition";
import { moveAreaTest } from "./_helper";

/**
 * テストケース: (fike,rank)
 *  1,9 先手
 *  1,9 後手
 *  9,1 後手
 */
test("get PieceMove test as \"Lance\"", () => {
  const piece_type = "Lance";
  // 1,9 先手
  let currnetPosition = new SquarePosition(1, 9);
  let playerType = Player.Sente;
  let expect = [
    [1, 8],
    [1, 7],
    [1, 6],
    [1, 5],
    [1, 4],
    [1, 3],
    [1, 2],
    [1, 1],
  ];
  moveAreaTest(piece_type, playerType, currnetPosition, expect);

  // 1,9, 後手
  currnetPosition = new SquarePosition(1, 9);
  playerType = Player.Gote;
  expect = [
    // [ 1, 1 ],
    // [ 1, 2 ],
    // [ 1, 3 ],
    // [ 1, 4 ],
    // [ 1, 5 ],
    // [ 1, 6 ],
    // [ 1, 7 ],
    // [ 1, 8 ],
    // [ 1, 9 ],
  ];
  moveAreaTest(piece_type, playerType, currnetPosition, expect);

  // 9,1 後手
  currnetPosition = new SquarePosition(9, 1);
  playerType = Player.Gote;
  expect = [
    // [ 9, 1 ],
    [9, 2],
    [9, 3],
    [9, 4],
    [9, 5],
    [9, 6],
    [9, 7],
    [9, 8],
    [9, 9],
  ];
  moveAreaTest(piece_type, playerType, currnetPosition, expect);
});
