//We start with a variable by the name "cookies" set to the value "0", because that is what we start with.

let cookies = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;
let bakerPrice = 20;

// - Everytime we want the cookies to go up by one, we use a shorthand which is "cookies += 1", because that is our variable.

// - And we have to bind the HTML to Javascript for our <p>-tag to go up on the website. To do that, we use the "document.getElementById("") to connect with our <p>-tag-id that we have in our HTML, which is "cookie-text".

// - Then we use the ".innerHTML" to get what's inside the opening-and-closing html tags, which is "Cookies: 0" and we add (+) the variable at the end, because that is what's going up by 1 everytime we click on the "button".

function bakeCookie() {
  cookies += cookiesPerClick;
  document.getElementById("cookie-text").innerHTML = "Cookies: " + cookies;
}

// - Now we want to add an "upgrade" to our cookie-clicker-game. We add a "baker" as an upgrade, so now everytime u click, it goes up by 2 instead of 1.

// - We first add another variable and this time we set the value to "1" in stead of "0".

// - We then change our "bakeCookie"-function, so we set the "cookies +=" to our second variable, which is "cookiesPerClick". Our second variable is set to "1".

// - We add another input to our HTML file which is similar to the first input, but this time we change the onclick-value to "hireBaker".

// - So now if we click on the "Bake a Cookie"-input-button, it goes up by "1", but if we then click on the "Hire a Baker"-input-button, it now goes up by 2 everytime, because we got an upgrade.

// - The more time we click on the "Hire a Baker"-input-button the more it goes up by our upgraded value. So if we click the "Hire a Baker"-input-button 1 time, it goes up by 1, if we do it again, it goes up by 2 etc.. because it's getting upgraded by 1 everytime.

function hireBaker() {
  if (cookies >= bakerPrice) {
    cookiesPerClick += 1;
    cookies -= bakerPrice;
    bakerPrice = Math.round(bakerPrice * 1.1);
    document.getElementById("cookie-text").innerHTML = "Cookies: " + cookies;
    document.getElementById("bakerPriceText").innerHTML =
      "Baker Price now:  " + bakerPrice + " cookies!";
  } else {
    alert("You don't have enough cookies for this upgrade!");
  }
}

// - (Funtion from above)
// - To ensure that we don't buy multiple bakers and get a million cookies, we want it to cost something. Let's say that it's going to cost 20-cookies to get a baker, we then use an "if-statement". We say that "if" our cookies are ">=" (bigger-than-equal) to 20, we can then execute our "cookiesPerClick += 1;"-variable.

// - Now we need to deduct the cookies that the user is using to buy a Baker with. To do so, we say that everytime the user buys a Baker, the cost i 20. We put our "cookies"-variable in the "if-statement". That means that everytime our "cookiesPerClick" goes up by "1", ww got to take away the cost, which is 20-cookies.

// - "If" we have less than 20-cookies, we then use an "Else-statement" and give an "alert"-message, where we tell the user, that they can't buy a Baker.

// - Now we have to update our cookies immediately, so that everytime we buy a Baker and we spend 20 cookies on it, the cost will be shown and deducted. So we are going to copy "document.getElementById("cookie-text").innerHTML = "Cookies: " + cookies;" from our first function and paste it in our second function. What this i doing is it's accessing the document-Id which is "cookie-text" and changing the ".innerHTML" to "Cookies" + the variable "cookies".

// - To challenge the user when they buy upgrades in the game (like the baker), we want to set the price to exponentiel growth. That means that the first time it cost 20 cookies, but the next time it costs more and more etc.. To do so, we use the "bakerPrice *=1.1", so instead of it goes up linear, it goes up exponentiel with .10% everytime. But this gives us a lot of decimals, and to remove that, we use the Math.round function.

function hireAutoBaker() {
  if (cookies >= 50) {
    cookies -= 50;
    cookiesPerSecond += 1;
    document.getElementById("cookie-text").innerHTML = "Cookies: " + cookies;
  } else {
    alert("You don't have enough cookies for this upgrade!");
  }
}

setInterval(function () {
  cookies += cookiesPerSecond;
  document.getElementById("cookie-text").innerHTML = "Cookies: " + cookies;
}, 1000);

// "setInterval" is an intergrated function in Javascript.
// The "setInterval" function tells the script to run whatever that's inside the curly-brackets ({}) every 1000 millisecond.
// The "cookies += 1;" means that the amount of cookies we have will +=1 every second.
