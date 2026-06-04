import { createBracket } from "https://cdn.jsdelivr.net/npm/bracketry/+esm";

const data = {
  rounds: [
  { name: "Round of 32" },
  { name: "Round of 16" },
  { name: "Quarter-finals" },
  { name: "Semi-finals" },
  { name: "Final" }
]

  matches: [
    {
      roundIndex: 0,
      order: 0,
      sides: [
        { contestantId: "eng" },
        { contestantId: "bra" }
      ]
    }
  ],

  contestants: {
    eng: {
      players: [{ title: "England 🏴" }]
    },
    bra: {
      players: [{ title: "Brazil 🇧🇷" }]
    }
  }
};

createBracket(
  data,
  document.getElementById("bracket")
);
