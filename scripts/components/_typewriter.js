let titleString = document.getElementsByClassName("title").item(0).innerHTML;
let stringStore = "<h1>" + titleString + "</h1>";
titleString = "";
let i = 0;

console.log(document.getElementsByClassName("title"));

function typeWriter() {
  if (i < stringStore.length) {
    titleString += stringStore[i];
    document.getElementsByClassName("title").item(0).innerText = titleString;
    i++;
    setTimeout(typeWriter, 50);
  } else {
    setTimeout(fadeBack, 1000);
  }
}

function fadeBack() {
  document.getElementsByClassName("title").item(0).classList.add("fade");
  setTimeout(function () {
    document.getElementsByClassName("title").item(0).innerHTML =
      "Hey! I'm <span class='teal'>Noah</span></h1>";
    document.getElementsByClassName("title").item(0).classList.remove("fade");
  }, 500);
}

typeWriter();
