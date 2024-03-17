import { Player } from "../../../../composeDiagram/value/Player";
import { SquarePosition } from "../../../../composeDiagram/value/SquarePosition";
import { moveAreaTest } from "./_helper";

/**
 * テストケース: (fike,rank)
 *  5,5 先手
 *  5,5 後手
 *  1,3 先手
 *  9,3 先手
 *  5,2 先手
 */
test("get PieceMove test as \"kNight\"", () => {
  const pieceType = "kNight";
  // 5,5 先手
  let currentPosition = new SquarePosition(5, 5);
  let playerType = Player.Sente;
  let expect = [
    [4, 3],
    [6, 3],
  ];
  moveAreaTest(pieceType, playerType, currentPosition);

  // 5,5 後手
  currentPosition = new SquarePosition(5, 5);
  playerType = Player.Gote;
  expect = [
    [4, 7],
    [6, 7],
  ];
  moveAreaTest(piece_type, playerType, currentPosition, expect);

  // 1,3 先手
  currentPosition = new SquarePosition(1, 3);
  playerType = Player.Sente;
  expect = [[2, 1]];
  moveAreaTest(piece_type, playerType, currentPosition, expect);

  // 9,3 先手
  currentPosition = new SquarePosition(9, 3);
  playerType = Player.Sente;
  expect = [[8, 1]];
  moveAreaTest(piece_type, playerType, currentPosition, expect);

  // 5,2 先手
  currentPosition = new SquarePosition(5, 2);
  playerType = Player.Sente;
  expect = [];
  moveAreaTest(piece_type, playerType, currentPosition, expect);
});
