
let searchInput = document.getElementById("searchInputs");
let bg = document.getElementById("bg");
let suggestionbox = document.getElementById("suggestionbox");
let organizer = document.getElementById("organizer");
let bookEvent = document.getElementById("bookEvent-btn");
// searchInput.addEventListener("keypress", function (event) {
//   if (event.key == "Enter") {
//     bg.style.display = "none";
//     results();
//     suggestionbox.style.display="none"
//   }
// });

// // searchInput.addEventListener("input",results)
// // async function getData() {{
// //   let data = await fetch("http://localhost:3000");
// //   let json = await data.json();
// //   let op = json.data;

// // }
// bookEvent.addEventListener("click", function () {

//   window.location.href = "./bookEvents.html";
// });

  


// localStorage.getItem("role");
// if (localStorage.getItem("role") == "User") {
//     organizer.style.display ="none"
//     console.log("user",localStorage.getItem("role"));
// }
// let placecd = document.getElementById("placecd");
// async function results() {
//   let data = await fetch("https://faux-api.com/api/v1/events_2862747661137939");
//   let json = await data.json();
//   let op = json.result;
//   let srchvalue = searchInput.value.trim().toLowerCase();
//   placecd.classList.add("flex");

//   placecd.innerHTML = " ";
//   displaycd(op.filter((item) => item.By.toLowerCase().includes(srchvalue)));
// }

// function displaycd(cd) {
//   console.log(cd);
//   if (cd.length == 0) {
//     placecd.innerHTML = `<div style="text-align: center; margin: 30px ;"><h1 >Error:</h1>//search results not found <br> try again</div>`;
//     bg.style.display = "block";
//   }
//   cd.forEach((element) => {
//     let div = document.createElement("div");
   
//     div.classList.add("searchcd")
//     placecd.appendChild(div);
//     let name = document.createElement("h3");
//     name.innerHTML = element.By;

//     let photo =document.createElement("img");
//     photo.setAttribute("src",element.photo)
//     photo.style.height="250px";
//     photo.style.width="310px";

//     let des= document.createElement("p")
//     des.innerHTML=element.description
//     div.append(name,photo,des);
//     placecd.append(div)

//   });
// }

// searchInput.addEventListener("focus", async function filterSuggestions() {
//   let data = await fetch("https://faux-api.com/api/v1/events_2862747661137939");
//   let json = await data.json();
//   let op = json.result;

//   displaysuggestion(op.map((list) => list.By));
// });

// function displaysuggestion(list) {
//   suggestionbox.innerHTML = "";
//   if (list.length == 0) {
//     suggestionbox.style.display = "none";
//     return;
//   }
//   list.forEach((name) => {
//     let div = document.createElement("div");
//     div.innerHTML = name;

//     div.style.marginBottom = "12px";
//     div.classList.add("list");

//    div.onclick=function(){
        
//          bg.style.display="none"
//          setTimeout(() => {
          
          
//   searchInput.value=name

//           results()
          
          
//          }, 1000);
//          setTimeout(() => {
//           searchInput.value=""
          
//           let suggestionbox = document.getElementById("suggestionbox");
//   suggestionbox.style.display = "none";
//          }, 3000);
//    }

//     suggestionbox.appendChild(div,);
//     suggestionbox.style.display = "block";
//   });
// }
// bg.addEventListener("click", function () {
//   let suggestionbox = document.getElementById("suggestionbox");
//   suggestionbox.style.display = "none";
 
// });

// let event_1=document.getElementById("event_1");
// event_1.addEventListener("click",function(){
//   location.assign("events.html")
// })


// const track = document.querySelector('.carousel-track');
// const prevBtn = document.querySelector('.carousel-btn.prev');
// const nextBtn = document.querySelector('.carousel-btn.next');

// let cardIndex = 0;
// const cardWidth = 216; // card width + gap (200 + 16)

// nextBtn.addEventListener('click', () => {
//   const maxIndex = track.children.length - Math.floor(track.parentElement.offsetWidth / cardWidth);
//   if (cardIndex < maxIndex) {
//     cardIndex++;
//     track.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
//   }
// });

// prevBtn.addEventListener('click', () => {
//   if (cardIndex > 0) {
//     cardIndex--;
//     track.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
//   }
//   else{
//     cardIndex=0;
//     track.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
    
//   }
// });
if (searchInput) {
  searchInput.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      bg.style.display = "none";
      results();
      suggestionbox.style.display = "none";
    }
  });

  searchInput.addEventListener("focus", async function filterSuggestions() {
    let data = await fetch("https://faux-api.com/api/v1/events_2862747661137939");
    let json = await data.json();
    let op = json.result;

    displaysuggestion(op.map((list) => list.By));
  });
}

if (bookEvent) {
  bookEvent.addEventListener("click", function () {
    window.location.href = "./bookEvents.html";
  });
}

if (bg) {
  bg.addEventListener("click", function () {
    let suggestionbox = document.getElementById("suggestionbox");
    suggestionbox.style.display = "none";
  });
}

let event_1 = document.getElementById("event_1");
if (event_1) {
  event_1.addEventListener("click", function () {
    location.assign("events.html");
  });
}

// if (nextBtn && track) {
//   nextBtn.addEventListener('click', () => {
//     const maxIndex = track.children.length - Math.floor(track.parentElement.offsetWidth / cardWidth);
//     if (cardIndex < maxIndex) {
//       cardIndex++;
//       track.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
//     }
//   });
// }

// if (prevBtn && track) {
//   prevBtn.addEventListener('click', () => {
//     if (cardIndex > 0) {
//       cardIndex--;
//     } else {
//       cardIndex = 0;
//     }
//     track.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
//   });
// }



// async function getData() {
//   const res = await fetch("http://localhost:3000/events");
//   const data = await res.json();
//   const allEvents = data;

//   const images = [img1, img2, img3, img4, img5, img6];

//   allEvents.slice(0, images.length).forEach((event, index) => {
//     // event.photo already has /uploads/filename, so no need to add 'uploads/' again
//     images[index].src = `http://localhost:3000${event.photo}`;
//   });
// }
// getData();
// async function getData() {
//   const res = await fetch("http://localhost:3000/events");
//   const data = await res.json();
//   const allEvents = data;
//   console.log(allEvents);
//    allEvents.map((item) => {
//     // <div class="card h-100">
//     //   <div class="img-wrapper"><img id="img6" src="" alt="Card 6"></div>
//     //   <div class="card-body">
//     //     <h5 class="card-title">Card 6</h5>
//     //     <p class="card-text">Description for card 6.</p>
//     //     <a href="#" class="btn btn-primary">Go</a>
//     //   </div>
//     // </div>
//     let card = document.createElement("div");
//     card.classList.add("card", "h-100");
//     let imgWrapper = document.createElement("div");
//     imgWrapper.classList.add("img-wrapper");
//     let img = document.createElement("img");
//     img.src = `http://localhost:3000${item.photo}`;
//     img.alt = "Card Image";
//     imgWrapper.appendChild(img);
//     let cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");
//     let cardTitle = document.createElement("h5");
//     cardTitle.classList.add("card-title");
//     cardTitle.innerText = item.organizer;
//     let cardText = document.createElement("p");
//     cardText.classList.add("card-text");
//     cardText.innerText = item.description;
//     let cardLink = document.createElement("a");
//     cardLink.href = "#";
//     cardLink.classList.add("btn", "btn-primary");
//     cardLink.innerText = "Go";
//     cardBody.append(cardTitle, cardText, cardLink);

//     card.append(imgWrapper, cardBody);
//     cardData.appendChild(card);
//   }
//   );
//   }
  

//   getData()


document.addEventListener("DOMContentLoaded", function () {
  fetch("https://events-management-voe0.onrender.com/events") // your backend endpoint
    .then(response => response.json())
    .then(data => {
      const cardDataContainer = document.getElementById("card-data");
console.log(data)
      data.forEach(item => {
      
 let card = document.createElement("div");
    card.classList.add("card");
    card.style.height="500px"
    let imgWrapper = document.createElement("div");
    imgWrapper.classList.add("img-wrapper");
    imgWrapper.style.height="400px"
    imgWrapper.style.marginTop="-50px"
    let img = document.createElement("img");
    img.style.height="250px"
    img.src = `https://events-management-voe0.onrender.com/events${item.photo}`;
    img.alt = "Card Image";
    imgWrapper.appendChild(img);
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = item.organizer;
    let paraDiv= document.createElement("div");
    paraDiv.style.padding="4px"
    paraDiv.style.margin="4px"
    paraDiv.style.border="1px solid lightgrey"
    paraDiv.style.fontSize="12px"
    paraDiv.style.height="120px"
    paraDiv.style.overflow="hidden"
    paraDiv.style.overflowY="scroll"
    
    
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = item.description;
    let cardLink = document.createElement("a");
    cardLink.href = "#";
  
    cardLink.classList.add("btn", "btn-primary");
    cardLink.innerText = "Book Now";
        paraDiv.appendChild(cardText)

        let button =document.createElement("button")
        button.classList.add("btn","btn-primary")
        button.innerText="Book Now"
        button.style.marginTop="10px"
        button.style.marginBottom="10px"
        button.style.marginLeft="10px"
        button.style.marginRight="10px"
        button.style.padding="10px"
        button.style.width="100px"
        button.style.height="40px"
        button.style.borderRadius="10px"
        button.style.background="#007bff"
        button.style.color="white"
        button.style.border="none"
        button.style.cursor="pointer"
        button.style.outline="none"
        
        button.style.boxShadow="0px 0px 10px rgba(0,0, 0,0.2)"
        button.addEventListener("click",function(){
          console.log("Booked")
              window.location.href = "./bookEvents.html";

  
              })


    cardBody.append(cardTitle, paraDiv, button);

    card.append(imgWrapper, cardBody);
    cardDataContainer.appendChild(card);
          
        
      });

      cardDataContainer.classList.remove("d-none"); // make it visible if needed

      buildCarousel(); // build carousel *after* cards are added
    })
    .catch(error => {
      console.error("Error fetching events:", error);
    });

  function buildCarousel() {
    const isMobile = window.innerWidth < 768;
    const cardsPerSlide = isMobile ? 1 : 3;

    const allCards = document.querySelectorAll("#card-data .card");
    const carouselContent = document.getElementById("carouselContent");
    carouselContent.innerHTML = ""; // Clear any old content

    for (let i = 0; i < allCards.length; i += cardsPerSlide) {
      const item = document.createElement("div");
      item.className = "carousel-item" + (i === 0 ? " active" : "");

      const row = document.createElement("div");
      row.className = "row justify-content-center";

      for (let j = i; j < i + cardsPerSlide && j < allCards.length; j++) {
        const col = document.createElement("div");
        col.className = isMobile ? "col-12" : "col-12 col-md-4 mb-3";
        col.appendChild(allCards[j]);
        row.appendChild(col);
      }

      item.appendChild(row);
      carouselContent.appendChild(item);
    }
  }
});





