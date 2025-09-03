let portfolioData;
fetch("/data/portfolioItems.json")
  .then((res) => res.json())
  .then((data) => {
    portfolioData = data.portfolio;
  })
  .catch((err) => console.error(err));

