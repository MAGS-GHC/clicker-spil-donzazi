let numberOfBananas = 0;
let boughtMonkey = false;
let numberOfMonkeys = 0;

function minFunktion() {
  //viser hvor mange bananer man har.
  numberOfBananas += 1;
  numberOfBananas += numberOfMonkeys;
  document.getElementById("demo").innerHTML = "Bananer = " + numberOfBananas;
}

let monkeycost = 10;
let yourMonkeys = 0;

function buyMonkey() {
  //viser om man har købt "Monkey-Upgrade" og hvor mange af dem man har.
  if (numberOfBananas >= monkeycost) {
    numberOfBananas = numberOfBananas - monkeycost;
    boughtMonkey = true;
    numberOfMonkeys++;
    monkeycost *= 2;
    yourMonkeys++;
    document.getElementById("demo").innerHTML = "Bananer = " + numberOfBananas;
    document.getElementById("yourMonkeys").innerHTML =
      "You have: " + yourMonkeys + " Monkey-Upgrade(s)";
    document.getElementById("abe-pris").innerHTML =
      "Monkey-Upgrade Costs Now = " + monkeycost;
    alert("Well Done! Your Upgrade Has Been Purchased!");
  } else {
    alert("You are runnning low on bananas, get more bananas to upgrade me!!");
  }
}

let autoClickerPrice = 20;
let bananasPerSecond = 0;
let boughtAutoClicker = 0;

function buyAutoclicker() {
  if (numberOfBananas >= autoClickerPrice) {
    numberOfBananas = numberOfBananas - autoClickerPrice;
    bananasPerSecond += 1;
    autoClickerPrice *= 2;
    boughtAutoClicker++;
    document.getElementById("demo").innerHTML = "Bananer = " + numberOfBananas;

    document.getElementById("yourautoclicker").innerHTML =
      "Your autoclicker is level: " + boughtAutoClicker;

    document.getElementById("autoclicker-pris").innerHTML =
      "Auto-Clicker-Upgrade Costs Now = " + autoClickerPrice;

    alert("Well Done! Your Upgrade Has Been Purchased!");
  } else {
    alert("You are runnning low on bananas, get more bananas to upgrade me!!");
  }
}

setInterval(function () {
  //denne her interval skal kun aktiveres, hvis Auto-Clicker-Upgrade er købt.
  if (boughtAutoClicker) {
    numberOfBananas += bananasPerSecond;
    banan1 += bananasPerSecond;
    if (boughtAutoClicker === 1) {
      document.getElementById("demo").innerHTML =
        "Bananer = " + numberOfBananas;
    } else {
      document.getElementById("demo").innerHTML = numberOfBananas;
    }
  }
}, 1000);

let highScore = 0;
let banan1 = 0;

function minFunktion2() {
  banan1 += 1;
  if (boughtMonkey) {
    banan1 += numberOfMonkeys;
  }
}

function highscore() {
  highScore = banan1;
  document.getElementById("highScore").innerHTML =
    "Total Bananas so far: " + highScore;
}
