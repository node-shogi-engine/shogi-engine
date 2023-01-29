import { DiagramService } from "../../service/DiagramService";
import { MoveService } from "../../service/MoveService";
import { Move } from "../type/Move";

test("Move test", () => {
  const diagram = DiagramService.getInitialDiagram();
  const move: Move = MoveService.create_move_from_pair(diagram, {
    from: [7, 7],
    to: [7, 6],
    promotion: false,
  });
  diagram.moved(move);
  const expectString = "987654321 \n"
    + "LNSGKGSNL1\n"
    + "-R-----B-2\n"
    + "PPPPPPPPP3\n"
    + "---------4\n"
    + "---------5\n"
    + "--P------6\n"
    + "PP-PPPPPP7\n"
    + "-B-----R-8\n"
    + "LNSGKGSNL9\n";
  expect(diagram.diagram_to_string()).toEqual(expectString);
});
