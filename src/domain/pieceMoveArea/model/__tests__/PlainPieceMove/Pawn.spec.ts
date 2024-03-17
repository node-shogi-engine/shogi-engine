import { Player } from "../../../../composeDiagram/value/Player";
import { SquarePosition } from "../../../../composeDiagram/value/SquarePosition";
import { moveAreaTest } from "./_helper";

/**
 * テストケース: (fike,rank)
 *  7,7 先手
 *  5,1 先手
 *  3,3 後手
 *  5,9 後手
 */
test("get PieceMove test as \"Pawn\"", () => {
  const piece_type = "Pawn";
  // 7,7 先手
  let currentPosition = new SquarePosition(7, 7);
  let playerType = Player.Sente;
  let expect = [[7, 6]];
  moveAreaTest(piece_type, playerType, currentPosition, expect);

  // 5,1 先手
  currentPosition = new SquarePosition(5, 1);
  playerType = Player.Sente;
  expect = [];
  moveAreaTest(piece_type, playerType, currentPosition, expect);

  // 3,3 後手
  currentPosition = new SquarePosition(3, 3);
  playerType = Player.Gote;
  expect = [[3, 4]];
  moveAreaTest(piece_type, playerType, currentPosition, expect);

  // 5,9 後手
  currentPosition = new SquarePosition(5, 9);
  playerType = Player.Gote;
  expect = [];
  moveAreaTest(piece_type, playerType, currentPosition, expect);
});
