import { Player } from "../../../value/Player";
import { SquarePosition } from "../../../value/SquarePosition";
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
  const piece_type = "kNight";
  // 5,5 先手
  let currnetPosition = new SquarePosition(5, 5);
  let playerType = Player.Sente;
  let expect = [
    [4, 3],
    [6, 3],
  ];
  moveAreaTest(piece_type, playerType, currnetPosition, expect);

  // 5,5 後手
  currnetPosition = new SquarePosition(5, 5);
  playerType = Player.Gote;
  expect = [
    [4, 7],
    [6, 7],
  ];
  moveAreaTest(piece_type, playerType, currnetPosition, expect);

  // 1,3 先手
  currnetPosition = new SquarePosition(1, 3);
  playerType = Player.Sente;
  expect = [[2, 1]];
  moveAreaTest(piece_type, playerType, currnetPosition, expect);

  // 9,3 先手
  currnetPosition = new SquarePosition(9, 3);
  playerType = Player.Sente;
  expect = [[8, 1]];
  moveAreaTest(piece_type, playerType, currnetPosition, expect);

  // 5,2 先手
  currnetPosition = new SquarePosition(5, 2);
  playerType = Player.Sente;
  expect = [];
  moveAreaTest(piece_type, playerType, currnetPosition, expect);
});
