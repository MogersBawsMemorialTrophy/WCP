const data = {
  rounds: [
    {
      name: "Quarterfinals",
      matches: [
        {
          sides: [
            { team: { name: "England" } },
            { team: { name: "USA" } }
          ]
        },
        {
          sides: [
            { team: { name: "Brazil" } },
            { team: { name: "Japan" } }
          ]
        }
      ]
    },
    {
      name: "Semifinal",
      matches: [
        {
          sides: [
            { team: { name: "Winner QF1" } },
            { team: { name: "Winner QF2" } }
          ]
        }
      ]
    }
  ]
};

bracketry.createBracket(
  data,
  document.getElementById("bracket")
);
