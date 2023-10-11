let banan = 0;
let havemonkey = false;
let numberofmonkeys = 0;

function minFunktion() {
  banan += 1;
  if (havemonkey) {
    banan += numberofmonkeys;
  }
  if (banan === 1) {
    document.getElementById("demo").innerHTML = banan + " banan";
  } else {
    document.getElementById("demo").innerHTML = banan + " bananer";
  }
}

let monkeycost = 10;
let yourMonkeys = 0;

function buyMonkey() {
  if (banan >= monkeycost) {
    banan = banan - monkeycost;
    havemonkey = true;
    numberofmonkeys++;
    monkeycost *= 2;
    yourMonkeys++;
    document.getElementById("demo").innerHTML = banan + " bananer";
    document.getElementById("abe-pris").innerHTML =
      "Monkey-Upgrade price is now: " + monkeycost;
    document.getElementById("yourmonkeys").innerHTML =
      "You have: " + yourMonkeys + " Monkey-Upgrade(s)";
  } else {
    alert("You are runnning low on bananas, get more to and upgrade me again.");
  }
}

let autoClicker = 20;
let clickPerSecond = 1;
let yourautoclicker = 0;

function buyAutoclicker() {
  if (banan >= autoClicker) {
    banan = banan - autoClicker;
    clickPerSecond;
    autoClicker *= 2;
    yourautoclicker++;
    document.getElementById("demo").innerHTML = banan + " bananer";
    document.getElementById("autoclicker").innerHTML =
      "Well done! You now have the Auto-Clicker Upgrade! Next Upgrade costs: " +
      autoClicker;
    document.getElementById("yourautoclicker").innerHTML =
      "Your autoclicker is level: " + yourautoclicker + "/5";
  } else {
    alert("You are runnning low on bananas, get more to and upgrade me again.");
  }
}

setInterval(function () {
  banan += clickPerSecond;
  document.getElementById("demo").innerHTML = banan + " bananer";
}, 5000);
