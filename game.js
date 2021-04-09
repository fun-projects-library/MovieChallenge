let button = document.getElementById("button");
let images = document.getElementById("images");
let titles = document.getElementById("titles");
let questionClickDiv = document.getElementById("questionClickDiv");
let answersTable = document.getElementById("answersTable");
let resultsPart = document.getElementById("resultsPart");
let resetBtn = document.getElementById("reset");

const arraySpin = [`<i class="fas fa-spinner"></i>`, `<i class="fas fa-spinner fa-rotate-90"></i>`, `<i class="fas fa-spinner fa-rotate-180"></i>`, `<i class="fas fa-spinner fa-rotate-270"></i>`];

let overviewDiv = document.getElementById("overviewDiv")


let data;
// Use your own API key from -- https://rapidapi.com/apidojo/api/imdb8 ;

/* 
----- Should be something below !!!
let data = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "paste your API here!!!!!",
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
  },
};
*/

if (data) {
  console.log("Everything should work");
} else {
  alert(
    "First, you need to get API keys(Check line 16 for the address! Free...)"
  );
}

async function firstTry() {
  images.innerHTML = "";
  titles.innerHTML = "";
  answersTable.innerHTML = "";
  overviewDiv.innerHTML = "";


  spinFunc(arraySpin[0])
        .then ( ()=> {return waitFor(400)})
        .then ( () => {return spinFunc(arraySpin[1])})
        .then ( ()=> {return waitFor(400)})
        .then ( () => {return spinFunc(arraySpin[2])})
        .then ( ()=> {return waitFor(400)})
        .then ( () => {return spinFunc(arraySpin[3])})
        .then ( ()=> {return waitFor(400)})
        .then ( () => {return spinFunc(arraySpin[0])})
        .then ( ()=> {return waitFor(400)})
        .then ( () => {return spinFunc("")})
        .catch ( (err) => console.log(err));


  let array = [];

  try {
    let response = await fetch(
      "https://imdb8.p.rapidapi.com/title/get-top-rated-movies",
      data
    );
    //console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      //console.log(jsonResponse);
      jsonResponse.forEach((element) => {
        const newValue = element.id.split("/");
        array.push(newValue[2]);
      });
      return listMovies(array);
    } else {
      throw new Error("error");
    }
  } catch (err) {
    console.log(err);
  }

  console.log(array);
}

button.onclick = () => firstTry();

const listMovies = (param) => {
  let selections = [];
  let numbers = [];
  let count = 0;
  // questionClickDiv.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * param.length);
    if (numbers.includes(random)) {
      count++;
    } else {
      numbers.push(random);
    }
  }

  // console.log(numbers)

  numbers.forEach((i) => {
    const oneQuestion = param[i];
    selections.push(oneQuestion);
  });

  // console.log(selections)

  imagesFunc(selections);
};

async function imagesFunc(param) {
  //console.log(event.target.parentElement.id);
  images.innerHTML = "";
  titles.innerHTML = "";
  let wrongOptions = [];

  let randomPick = Math.floor(Math.random() * param.length);

  for (let i = 0; i < param.length; i++) {
    if (param[i] !== param[randomPick]) {
      wrongOptions.push(param[i]);
    }
  }

  //console.log(param[randomPick]);
  //console.log(wrongOptions);

  try {
    let response = await fetch(
      `https://imdb8.p.rapidapi.com/title/get-images?tconst=${param[randomPick]}&limit=25`,
      data
    );
    // console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      const titlePath = jsonResponse.images[0];
      console.log(titlePath.relatedTitles[0].title);
      let questionHead = document.createElement("h3");
      questionHead.innerHTML =
        "Which movie do you think these scenes are from...";
      questionHead.id = "questionHead";
      images.appendChild(questionHead);

      for (let i = 0; i < 9; i++) {
        let photo = document.createElement("img");
        photo.src = jsonResponse.images[i].url;
        // photo.id = param[randomPick];
        images.appendChild(photo);
      }
    } else {
      throw new Error("error");
    }
  } catch (err) {
    console.log(err);
  }

  options(param, param[randomPick]);
}

function options(param, correctTitle) {
  // console.log(param);

  for (let i = 0; i < param.length; i++) {
    fetch(
      `https://imdb8.p.rapidapi.com/title/get-images?tconst=${param[i]}&limit=25`,
      data
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      })
      .then((jsonResponse) => {
        const titlePath = jsonResponse.images[0];
        // console.log(titlePath.relatedTitles[0].title);
        let answer = document.createElement("td");
        answer.innerHTML = titlePath.relatedTitles[0].title;
        answer.classList.add("answer");
        answer.id = param[i];
        // console.log(answer.id)
        answer.addEventListener("click", function (e) {
          if (e.target.id === correctTitle) {
            // console.log(e);
            let correctAnswer = document.getElementById(e.target.id);
            //console.log(e.target.id);
            correctAnswer.style.backgroundColor = "yellowgreen";
            new Audio(`./applause.mp3`).play();
            overviewFunction(e.target.id);
          } else {
            let wrongAnswer = document.getElementById(e.target.id);
            //console.log(wrongAnswer);
            wrongAnswer.style.backgroundColor = "red";
            new Audio(`wrong.mp3`).play();
          }
        });
        answersTable.appendChild(answer);
      })
      .catch((err) => console.log(err));
  }
}

// function questionResult() {}

function reset() {
  images.innerHTML = "";
  titles.innerHTML = "";
  answersTable.innerHTML = "";
  overviewDiv.innerHTML = "";
}

resetBtn.onclick = () => reset();


// --------- Spin Functions ------

function spinFunc(param){

  let spin = document.getElementById("spin");

  return new Promise ( (resolve, reject) => {
      if(param){
          spin.innerHTML = param;
          resolve(param)
      } else {
          spin.innerHTML = "";
          reject(`spin negative`)
      } 
  })
};

function waitFor(ms){ return new Promise(resolve => setTimeout(resolve, ms))};



// ------- Overwiev information -----

function overviewFunction(title){
  // console.log(title)
  fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${title}&currentCountry=US`, data)
.then(response =>{
  if(response.ok){
    return response.json()
  } else {
    throw new Error("overwiev part failed!")
  }})
.then(jsonResponse => {
  console.log(jsonResponse)
  let details = document.createElement("p");
  details.innerHTML = `<img class="overviewIMG" src="${jsonResponse.title.image.url}" />
  <br>
  <b>${jsonResponse.title.title}</b> (${jsonResponse.title.year})
  <br>
  ${jsonResponse.genres.join(", ")}
  <br><br>
  <span id="overviewText">${jsonResponse.plotOutline.text}</span>
  <br>
  <u>Top Rank</u>: `+" "+` ${jsonResponse.ratings.topRank}. (${jsonResponse.ratings.rating})
  <br>
  <u>Running Time</u>: `+" "+` ${jsonResponse.title.runningTimeInMinutes} minutes`
  overviewDiv.appendChild(details)
})
.catch (err => {
  console.log(err)
});

}




///////////////////  NEXT UPDATES  //////////////

// ------ MUTE button will be added --------

// ------ Records part will be added and stored -----