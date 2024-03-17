import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { DiagramPresenter } from "@/presentation/DiagramPresenter";
import { DiagramService } from "@/domain/service/composeDiagram/DiagramService";

// test("Diagram create test", () => {
//   const diagram: Diagram = DiagramService.getInitialDiagram();
//   // console.dir(diagram.shogi_board);
//   const expectString = "987654321 \n"
//     + "LNSGKGSNL1\n"
//     + "-R-----B-2\n"
//     + "PPPPPPPPP3\n"
//     + "---------4\n"
//     + "---------5\n"
//     + "---------6\n"
//     + "PPPPPPPPP7\n"
//     + "-B-----R-8\n"
//     + "LNSGKGSNL9\n";
//   expect(DiagramPresenter.show(diagram)).toEqual(expectString);
// });

const expectedJson = `{
  "board": {
    "1": {
      "1": {
        "piece": {
          "type": "Lance",
          "isPromotable": true,
          "typeInitial": "L",
          "isReversed": false
        },
        "master": "Gote"
      },
      "2": null,
      "3": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Gote"
      },
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Sente"
      },
      "8": null,
      "9": {
        "piece": {
          "type": "Lance",
          "isPromotable": true,
          "typeInitial": "L",
          "isReversed": false
        },
        "master": "Sente"
      }
    },
    "2": {
      "1": {
        "piece": {
          "type": "kNight",
          "isPromotable": true,
          "typeInitial": "N",
          "isReversed": false
        },
        "master": "Gote"
      },
      "2": {
        "piece": {
          "type": "Bishop",
          "isPromotable": true,
          "typeInitial": "B",
          "isReversed": false
        },
        "master": "Gote"
      },
      "3": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Gote"
      },
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Sente"
      },
      "8": {
        "piece": {
          "type": "Rook",
          "isPromotable": true,
          "typeInitial": "R",
          "isReversed": false
        },
        "master": "Sente"
      },
      "9": {
        "piece": {
          "type": "kNight",
          "isPromotable": true,
          "typeInitial": "N",
          "isReversed": false
        },
        "master": "Sente"
      }
    },
    "3": {
      "1": {
        "piece": {
          "type": "Silver",
          "isPromotable": true,
          "typeInitial": "S",
          "isReversed": false
        },
        "master": "Gote"
      },
      "2": null,
      "3": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Gote"
      },
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Sente"
      },
      "8": null,
      "9": {
        "piece": {
          "type": "Silver",
          "isPromotable": true,
          "typeInitial": "S",
          "isReversed": false
        },
        "master": "Sente"
      }
    },
    "4": {
      "1": {
        "piece": {
          "type": "Gold",
          "isPromotable": false,
          "typeInitial": "G",
          "isReversed": false
        },
        "master": "Gote"
      },
      "2": null,
      "3": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Gote"
      },
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Sente"
      },
      "8": null,
      "9": {
        "piece": {
          "type": "Gold",
          "isPromotable": false,
          "typeInitial": "G",
          "isReversed": false
        },
        "master": "Sente"
      }
    },
    "5": {
      "1": {
        "piece": {
          "type": "King",
          "isPromotable": false,
          "typeInitial": "K",
          "isReversed": false
        },
        "master": "Gote"
      },
      "2": null,
      "3": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Gote"
      },
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Sente"
      },
      "8": null,
      "9": {
        "piece": {
          "type": "King",
          "isPromotable": false,
          "typeInitial": "K",
          "isReversed": false
        },
        "master": "Sente"
      }
    },
    "6": {
      "1": {
        "piece": {
          "type": "Gold",
          "isPromotable": false,
          "typeInitial": "G",
          "isReversed": false
        },
        "master": "Gote"
      },
      "2": null,
      "3": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Gote"
      },
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Sente"
      },
      "8": null,
      "9": {
        "piece": {
          "type": "Gold",
          "isPromotable": false,
          "typeInitial": "G",
          "isReversed": false
        },
        "master": "Sente"
      }
    },
    "7": {
      "1": {
        "piece": {
          "type": "Silver",
          "isPromotable": true,
          "typeInitial": "S",
          "isReversed": false
        },
        "master": "Gote"
      },
      "2": null,
      "3": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Gote"
      },
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Sente"
      },
      "8": null,
      "9": {
        "piece": {
          "type": "Silver",
          "isPromotable": true,
          "typeInitial": "S",
          "isReversed": false
        },
        "master": "Sente"
      }
    },
    "8": {
      "1": {
        "piece": {
          "type": "kNight",
          "isPromotable": true,
          "typeInitial": "N",
          "isReversed": false
        },
        "master": "Gote"
      },
      "2": {
        "piece": {
          "type": "Rook",
          "isPromotable": true,
          "typeInitial": "R",
          "isReversed": false
        },
        "master": "Gote"
      },
      "3": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Gote"
      },
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Sente"
      },
      "8": {
        "piece": {
          "type": "Bishop",
          "isPromotable": true,
          "typeInitial": "B",
          "isReversed": false
        },
        "master": "Sente"
      },
      "9": {
        "piece": {
          "type": "kNight",
          "isPromotable": true,
          "typeInitial": "N",
          "isReversed": false
        },
        "master": "Sente"
      }
    },
    "9": {
      "1": {
        "piece": {
          "type": "Lance",
          "isPromotable": true,
          "typeInitial": "L",
          "isReversed": false
        },
        "master": "Gote"
      },
      "2": null,
      "3": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Gote"
      },
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "piece": {
          "type": "Pawn",
          "isPromotable": true,
          "typeInitial": "P",
          "isReversed": false
        },
        "master": "Sente"
      },
      "8": null,
      "9": {
        "piece": {
          "type": "Lance",
          "isPromotable": true,
          "typeInitial": "L",
          "isReversed": false
        },
        "master": "Sente"
      }
    }
  },
  "stand": {
    "Sente": {
      "master": "Sente",
      "pieces": []
    },
    "Gote": {
      "master": "Gote",
      "pieces": []
    }
  }
}`;

test("Diagram json test", () => {
  const diagram: Diagram = DiagramService.getInitialDiagram();
  expect(DiagramPresenter.json(diagram)).toEqual(expectedJson);
});
