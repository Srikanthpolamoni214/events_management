let searchInput = document.getElementById("searchInputs");
let suggestionbox = document.getElementById("suggestionbox");
let placecd = document.getElementById("placecd");


searchInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    bg.style.display = "none";
    results();
    suggestionbox.style.display = "none";
  }
});

// searchInput.addEventListener("input",results)


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
  cd.forEach((element,index) => {
    let div = document.createElement("div");

    div.classList.add("searchcd");
    
    let name = document.createElement("h4");
    name.innerHTML = element.By;
    name.style.height="40px"
    name.style.textAlign="center"
    name.style.color="black"
    

    let photo = document.createElement("img");
    photo.setAttribute("src", element.photo);
    
    photo.classList.add("photo")

    let desdiv = document.createElement("div");
    desdiv.classList.add("desdiv")
    let des = document.createElement("p");
    des.innerHTML = element.description;
    des.style.fontSize="14px"

    desdiv.append(des)

    let contact = document.createElement("div")
    contact.style.backgroundColor="green";
    contact.style.padding="12px"
    // <span class="shake"></span>
let para = document.createElement("p");
para.innerHTML=element.contact
para.style.display="inline";
para.style.color="white"
para.style.marginLeft="12px"
let span =document.createElement("span")
span.innerHTML=  `<i  style="font-size:20px;color:white;display:inline-block;" class="fa">&#xf095;</i>`
span.classList.add("shake-phone");

contact.append(span,para)

    div.append(name, photo, desdiv);
    // if(index==2||index==5){
    //   div.remove(contact)
    // }
    if (element.contact) {
      div.append(contact);
  }
    
    placecd.append(div);
    
  });
 
}



// when focus on searchInput
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
