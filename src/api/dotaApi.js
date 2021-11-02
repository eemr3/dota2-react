function fetApiDota() {
  fetch("https://community-dota-2.p.rapidapi.com/IDOTA2Match_570/GetMatchDetails/V001/?key=7D7B167A5A72A67E63B01266DFFE3615&match_id=27110133&matches_requested=Dota%202", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-dota-2.p.rapidapi.com",
      "x-rapidapi-key": "ed121a1d03msh77348ce902766c0p1f9053jsn2c2f2def7bd4"
    }
  })
    .then(response => response)
    .catch(err => {
      console.error(err);
    });
}

export { fetApiDota };
