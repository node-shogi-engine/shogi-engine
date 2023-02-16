import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { DiagramService } from "@/domain/service/composeDiagram/DiagramService";
import { DiagramPresenter } from "@/presentation/DiagramPresenter";

test("Diagram create test", () => {
  const diagram: Diagram = DiagramService.getInitialDiagram();
  // console.dir(diagram.shogi_board);
  const expectString = "987654321 \n"
    + "LNSGKGSNL1\n"
    + "-R-----B-2\n"
    + "PPPPPPPPP3\n"
    + "---------4\n"
    + "---------5\n"
    + "---------6\n"
    + "PPPPPPPPP7\n"
    + "-B-----R-8\n"
    + "LNSGKGSNL9\n";
  expect(DiagramPresenter.show(diagram)).toEqual(expectString);
});
