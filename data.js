const data = {
  rounds: [
    { name: "Final" }
  ],

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
      players: [
        { title: "England" }
      ]
    },

    bra: {
      players: [
        { title: "Brazil" }
      ]
    }
  }
};

createBracket(
  data,
  document.getElementById("bracket")
);
