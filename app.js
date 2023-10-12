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
    alert("Well Done! Your Upgrade Has Been Purchased!");
  } else {
    alert("You are runnning low on bananas, get more bananas to upgrade me!!");
  }
}

let autoClicker = 20;
let clickPerSecond = 0;
let yourautoclicker = 0;

function buyAutoclicker() 
  if (banan >= autoClicker) {
    banan = banan - autoClicker;
    clickPerSecond += 1;
    autoClicker *= 2;
    yourautoclicker++;
    document.getElementById("demo").innerHTML = banan + " bananer";
     function buyAutoclicker() {
      autoClicker;
    document.getElementById("yourautoclicker").innerHTML =
      "Your autoclicker is level: " + yourautoclicker + "/5";
    alert("Well Done! Your Upgrade Has Been Purchased!");
  } else {
    alert("You are runnning low on bananas, get more bananas to upgrade me!!");
  }
}

setInterval(function () {
  banan += clickPerSecond;
  banan1 += clickPerSecond;
  document.getElementById("demo").innerHTML = banan + " bananer";
}, 1000);

let highScore = 0;
let banan1 = 0;

function minFunktion2() {
  banan1 += 1;
  if (havemonkey) {
    banan1 += numberofmonkeys;
  }
}

function highscore() {
  highScore = banan1;
  document.getElementById("highscore").innerHTML =
    "Total Bananas so far: " + highScore;
}