let searchInput = document.getElementById("searchInputs");
let suggestionbox = document.getElementById("suggestionbox");

searchInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    bg.style.display = "none";
    results();
    suggestionbox.style.display = "none";
  }
});

// searchInput.addEventListener("input",results)

let placecd = document.getElementById("placecd");

async function results() {
  let data = await fetch("https://faux-api.com/api/v1/events_2862747661137939");
  let json = await data.json();
  let op = json.result;
  let srchvalue = searchInput.value.trim().toLowerCase();
  placecd.classList.add("flex");

  placecd.innerHTML = " ";
  displaycd(op.filter((item) => item.By.toLowerCase().includes(srchvalue)));
}

function displaycd(cd) {
  console.log(cd);
  if (cd.length == 0) {
    placecd.innerHTML = `<div style="text-align: center; margin: 30px ;"><h1 >Error:</h1>//search results not found <br> try again</div>`;
  }
  cd.forEach((element) => {
    let div = document.createElement("div");

    div.classList.add("searchcd");
    placecd.appendChild(div);
    let name = document.createElement("h3");
    name.innerHTML = element.By;

    let photo = document.createElement("img");
    photo.setAttribute("src", element.photo);
    photo.style.height = "250px";
    photo.style.width = "310px";

    let des = document.createElement("p");
    des.innerHTML = element.description;
    div.append(name, photo, des);
    placecd.append(div);
  });
}

searchInput.addEventListener("focus", async function filterSuggestions() {
  let data = await fetch("https://faux-api.com/api/v1/events_2862747661137939");
  let json = await data.json();
  let op = json.result;

  displaysuggestion(op.map((list) => list.By));
});

function displaysuggestion(list) {
  suggestionbox.innerHTML = "";
  if (list.length == 0) {
    suggestionbox.style.display = "none";
    return;
  }
  list.forEach((name) => {
    let div = document.createElement("div");
    div.innerHTML = name;

    div.style.marginBottom = "12px";
    div.classList.add("list");

    div.onclick = function () {
      
      setTimeout(() => {
        searchInput.value = name;
      results();
      }, 1000);

      setTimeout(() => {
        searchInput.value=""
        let suggestionbox = document.getElementById("suggestionbox");
    suggestionbox.style.display = "none";
      }, 2000);
    };

    suggestionbox.appendChild(div);
    suggestionbox.style.display = "block";
  });
}

let bg =document.getElementById("bg");
bg.addEventListener("click", function () {
    let suggestionbox = document.getElementById("suggestionbox");
    suggestionbox.style.display = "none";
  });
  
window.addEventListener("load",results)
