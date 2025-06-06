const url = "https://swapi.dev/api/starships/";
let starships = [{}];

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

  //ship name
  let shipName = document.createElement("div");
  shipName.className = "ship-name";
  container.append(shipName);

  //ship price
  let shipPrice = document.createElement("div");
  shipPrice.className = "ship-price";
  container.append(shipPrice);

  //ship manufacturer
  let shipManufacturer = document.createElement("div");
  shipManufacturer.className = "ship-manufacturer";
  container.append(shipManufacturer);

  //ship max atmosphere speed
  let shipAtmoSpeed = document.createElement("div");
  shipAtmoSpeed.className = "ship-atmo-speed";
  container.append(shipAtmoSpeed);
  let atmoSpeedText = document.createElement("div");
  atmoSpeedText.className = "atmo-speed-text";
  container.append(atmoSpeedText);

  //ship cargo capacity
  let shipCargoCap = document.createElement("div");
  shipCargoCap.className = "ship-cargo-cap";
  container.append(shipCargoCap);
  let cargoCapText = document.createElement("div");
  cargoCapText.className = "cargo-cap-text";
  container.append(cargoCapText);

  //add text content to elements
  shipName.textContent = starship.name;
  shipPrice.textContent = `${parseInt(
    starship.cost_in_credits
  ).toLocaleString()} credits`;
  shipManufacturer.textContent = starship.manufacturer;
  shipAtmoSpeed.textContent = starship.max_atmosphering_speed;
  atmoSpeedText.textContent = "Max atmosphering speed";
  shipCargoCap.textContent = `${parseInt(
    starship.cargo_capacity
  ).toLocaleString()}`;
  cargoCapText.textContent = "Cargo Capacity";

  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  let filterArray = new Array();
  let maxPassengers = 10;

  for (let i = 0; i < input.length; i++) {
    if (input[i].passengers < maxPassengers) {
      let minCrew = parseInt(input[i].crew.slice(0, 2)); //not sure if necessary to slice, but some ships have crew listed x-y
      if (minCrew > 0) {
        filterArray.push(input[i]);
      }
    }
  }
  return filterArray;
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  let totalCost = 0;
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i].cost_in_credits)) {
      totalCost += parseInt(input[i].cost_in_credits);
    }
  }

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
