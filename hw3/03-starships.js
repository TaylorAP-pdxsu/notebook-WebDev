const url = "https://swapi.dev/api/starships/";
let starships = [{ name: "" }];

const fetchData = (url) => {
  // REtrieve the data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      starships = data.results;
    })
    .catch((error) => console.error(error));
};

fetchData(url);

const createSpaceshipComponent = (starship) => {
  const container = document.createElement("section"); // do not modify this line

  let shipName = document.createElement("div");
  shipName.className = "ship-name";
  container.append(shipName);

  let shipPrice = document.createElement("div");
  shipPrice.className = "ship-price";
  container.append(shipPrice);

  let shipManufacturer = document.createElement("div");
  shipManufacturer.className = "ship-manufacturer";
  container.append(shipManufacturer);

  let shipAtmoSpeed = document.createElement("div");
  shipAtmoSpeed.className = "ship-atmo-speed";
  container.append(shipAtmoSpeed);
  //let shipCargoCap = document.createElement("div");

  shipName.textContent = starship.name;
  shipPrice.textContent = starship.cost_in_credits;
  shipManufacturer.textContent = starship.manufacturer;
  shipAtmoSpeed.textContent =
    starship.max_atmosphering_speed + " Max atmosphering speed";
  // shipCargoCap.textContent = starship.cargo_capacity;

  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  const totalCost = 0;

  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
