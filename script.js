
import movies from "./movies.js"

console.log(`we have ${movies.length} movies in the store`)

let genre1 =document.getElementById("genre1");
let genre2 =document.getElementById("genre2");
let genre3 =document.getElementById("genre3");
let genre4 =document.getElementById("genre4");
let genre5 =document.getElementById("genre5");
let genre6 =document.getElementById("genre6");

let pointsSelect = document.getElementById("points");

let results = document.getElementById("results");
let messageDiv = document.getElementById("messageDiv");

let spin = document.getElementById("spin");

// let warning = document.getElementById("warning");
// ---- Movie finding Input Section DOM --- 
let findButton = document.getElementById("findButton");
let findMovie = document.querySelector("#findMovie");
// let message = document.getElementById("message");

// ----- Years section DOM----
let years = document.querySelector("#years");
let recentMovies = document.getElementById("recentMovies");

// --- Filter Section ---
const filter = document.getElementById("filter");
const div2 = document.querySelector(".div2");


let warning = document.createElement("p");
warning.id = "warning";
messageDiv.appendChild(warning);

let message = document.createElement("p");
message.id = "message";
messageDiv.appendChild(message);

// --- About Us Div----
let aboutUsDiv = document.getElementById("aboutUsDiv");
let aboutUsList = document.getElementById("aboutUsList");



const waitFor = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const array = [`<i class="fas fa-spinner"></i>`, `<i class="fas fa-spinner fa-rotate-90"></i>`, `<i class="fas fa-spinner fa-rotate-180"></i>`, `<i class="fas fa-spinner fa-rotate-270"></i>`];



const type = (param , point) => {
    
    warning.innerHTML = "";
    // console.log(param)

    return new Promise ( (resolve, reject) => {
        setTimeout( ()=> {
            let newArray = [];      

            movies.forEach(element => {
                if(param && point !== "zero"){
                    if(element.genre.includes(param)){
                        if(point !== "9" && point !== "5" && element.imdb>=point-1 && element.imdb<point){
                            //console.log("element");
                            newArray.push(element)
                            return newArray
                        } else if(point === "9" && element.imdb>=8){
                            newArray.push(element);
                            //console.log("element")
                            return newArray 
                        } else if (point === "5" && element.imdb<5){
                            newArray.push(element);
                            //console.log("element")
                            return newArray
                        }
                    } 
                } else if(param){
                    if(element.genre.includes(param)){
                        newArray.push(element);
                        //console.log("element")
                        return newArray
                    }
                } else if(point !== "zero"){
                    if(point !== "9" && point !== "5" && element.imdb>=point-1 && element.imdb<point){
                        //console.log("element");
                        newArray.push(element)
                        return newArray
                    } else if(point === "9" && element.imdb>=8){
                        newArray.push(element);
                        //console.log("element")
                        return newArray 
                    } else if (point === "5" && element.imdb<5){
                        newArray.push(element);
                        //console.log("element")
                        return newArray
                    }
                } 
            })

            //console.log(newArray);

            if(newArray.length > 0){
                newArray.forEach( item => {
                    let list = document.createElement("li");
                    list.innerHTML=`${item.name}<br>(${item.year}) <a href="${item.url}" target="_blank"> <br> <img class="resultIMG" src= "./films/${item["name"].split(/\s/).join('')}.jpg"> <br> </a>${item.genre.join(", ")}<br> (${item.imdb})`
    
                    results.appendChild(list);
                })
            } else {
                warning.innerHTML = "No matches found!"
            }
            
            resolve("movies positive")
            reject("something is wrong")
        },2500)
    })
}



const spinFunc = (param)=> {

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



function mainFunc(){

    // ---- this part is needed because of the filter way---
    let results = document.getElementById("results");
    let pointsSelect = document.getElementById("points");
    let genre1 =document.getElementById("genre1");
    let genre2 =document.getElementById("genre2");
    let genre3 =document.getElementById("genre3");
    let genre4 =document.getElementById("genre4");
    let genre5 =document.getElementById("genre5");
    let genre6 =document.getElementById("genre6");


    results.innerHTML = "";
    warning.innerHTML = "";
    message.innerHTML = "";
    findMovie.value = "";
    findMovie.placeholder = "";
    aboutUsDiv.innerHTML = "";


    let genre1Check =document.getElementById("genre1").checked;
    let genre2Check =document.getElementById("genre2").checked;
    let genre3Check =document.getElementById("genre3").checked;
    let genre4Check =document.getElementById("genre4").checked;
    let genre5Check =document.getElementById("genre5").checked;
    let genre6Check =document.getElementById("genre6").checked;

    let parameter;
    let point = pointsSelect.value;

    if(genre1Check){
        parameter = genre1.value;
    } else if(genre2Check){
        parameter = genre2.value;
    } else if(genre3Check){
        parameter = genre3.value;
    } else if(genre4Check){
        parameter = genre4.value;
    } else if(genre5Check){
        parameter = genre5.value;
    } else if(genre6Check ){
        parameter = genre6.value;
    } else {
        parameter = false;
    }


    // ---- this is the IMPORTANT part. GIVING A PARAMETER!!!
    
    // console.log(parameter, point);
    if(parameter || point !== "zero"){
        type(parameter, point)
        .then( (res)=> {console.log(res)})
        .catch( (err) => {console.log(err)});

        spinFunc(array[0])
        .then ( ()=> {return waitFor(500)})
        .then ( () => {return spinFunc(array[1])})
        .then ( ()=> {return waitFor(500)})
        .then ( () => {return spinFunc(array[2])})
        .then ( ()=> {return waitFor(500)})
        .then ( () => {return spinFunc(array[3])})
        .then ( ()=> {return waitFor(500)})
        .then ( () => {return spinFunc(array[0])})
        .then ( ()=> {return waitFor(500)})
        .then ( () => {return spinFunc("")})
        .catch ( (err) => console.log(err));
    }

    if(parameter === false && point === "zero"){
        warning.innerHTML = "Please, make at least one selection!";
        console.log("afdasffasdf")
    }


}



const findFunction = () => {
    const value = findMovie.value.toLowerCase();
    const newValue = value.split(/\s/).join('');
    console.log(value);
    let array = [];

    message.innerHTML = "";
    aboutUsDiv.innerHTML = "";

    if(results){
        results.innerHTML = "";
    }
    
    warning.innerHTML = "";
    
    findMovie.value = "";
    findMovie.placeholder = "";
    

    movies.forEach(element => {
        const newName = element["name"].split(/\s/).join('').toLowerCase();
        //console.log(newName)
        if(newValue){
            if(newName.includes(newValue)){
                array.push(element);
                return array
            }
        } else {
            findMovie.placeholder = "Please,type something!"
        }
    });

    setTimeout(() => {
        if(newValue){
            if(array.length>0){
                message.innerHTML = `<u>Here some possible suggestions for you!</u>`;
            array.forEach( item => {
                let list = document.createElement("li");
                list.innerHTML=`${item.name}<br>(${item.year}) <a href="${item.url}" target="_blank"> <br> <img class="resultIMG" src= "./films/${item["name"].split(/\s/).join('')}.jpg"> <br> </a>${item.genre.join(", ")}<br> (${item.imdb})`
        
                results.appendChild(list);
            })
            } else {
                message.innerHTML = `<u>We are sorry! No matches found :(</u>`;
                console.log(value)
            }
        }   
    }, 1000);
}



findButton.onclick = ()=> findFunction();
findMovie.addEventListener("keyup", (e)=>{
    //console.log(e);
    if(e.key === "Enter"){
        findFunction()
    }
},false)



const recentMoviesFunc = ()=>{

    let results = document.getElementById("results");
    
    div2.innerHTML = "";
    results.innerHTML = "";
    findMovie.value = "";
    findMovie.placeholder = "";
    aboutUsDiv.innerHTML = "";
    warning.innerHTML = "";

    message.innerHTML = `<u>Here some movies published in the last 2 years for you!</u>`
    

    setTimeout(() => {
        
        movies.forEach(item => {
            if(item.year>2019){
                let list = document.createElement("li");
                list.innerHTML=`${item.name}<br>(${item.year}) <a href="${item.url}" target="_blank"> <br> <img class="resultIMG" src= "./films/${item["name"].split(/\s/).join('')}.jpg"> <br> </a>${item.genre.join(", ")}<br> (${item.imdb})`
        
                results.appendChild(list);
            }
        })
    }, 500);
    
}

recentMovies.onclick = ()=> recentMoviesFunc();


// --------------- Home Screen Content ---------


let randomArray = [];
let randomNumberArray = [];
let count = 0;

for(let i=0;i<30;i++){
    let randomNumber = Math.floor(Math.random()*movies.length);
    if(randomNumberArray.includes(randomNumber)){
        count ++;
    } else {
        randomNumberArray.push(randomNumber);
    }
    
}

// console.log(count);

// console.log(randomNumberArray);

randomNumberArray.forEach(element=>{
    randomArray.push(movies[element])
})

randomArray.forEach(element=>{
    let list = document.createElement("li");
    list.innerHTML=`${element.name}<br>(${element.year}) <a href="${element.url}" target="_blank"> <br> <img class="resultIMG" src= "./films/${element["name"].split(/\s/).join('')}.jpg"> <br> </a>${element.genre.join(", ")}<br> (${element.imdb})`

    results.appendChild(list);
})



// -------------- Filter Logic -------------


function filterFunction() {

    message.innerHTML = "";
    aboutUsDiv.innerHTML = "";
    warning.innerHTML = "";
    
    div2.innerHTML = `
    <h1>Movie Selector</h1>
​
        
​
        <h3>Choose your taste...</h3>
        
        <form action="/action_page.php">
            <div>
                <input type="radio" id="genre1" value="action" name="genre" class="kinds">
                <label for="genre1"> Action </label>
​
                <input type="radio" id="genre2" value="comedy" name="genre" class="kinds">
                <label for="genre2"> Comedy </label>
​
                <input type="radio" id="genre3" value="animation" name="genre" class="kinds">
                <label for="genre3"> Animation</label>
                <br>
​
                <input type="radio" id="genre4" value="horror" name="genre" class="kinds">
                <label for="genre4"> Horror </label>
​
                <input type="radio" id="genre5" value="drama" name="genre" class="kinds">
                <label for="genre5"> Drama</label>
​
                <input type="radio" id="genre6" value="fantasy" name="genre" class="kinds">
                <label for="genre6"> Fantasy </label>
            </div>
​
            <hr>
​
            <div>
                <label class="imdbLabel" for="imdb">Select the IMDB:</label>
                <select id="points">
                <option value="zero">None</option>
                <option value="9">8+</option>
                <option value="8">7 - 7.9</option>
                <option value="7">6 - 6.9</option>
                <option value="6">5.1 - 5.9</option>
                <option value="5">Below 5</option>
                </select>
            </div>
            <div id="yearDiv">
                <label class="yearsLabel" for="years">Year published:</label>
                <input type="text" id="years" placeholder="Is not working, just for now:)">
            </div>
​
            <hr>
​
            <div>
                <button type="button" id="submitbtn">Search</button>
                <span id="spin"></span>
                
                
            </div>
          </form>
    `;

    document.getElementById("submitbtn").addEventListener("click", mainFunc);

}



filter.addEventListener("click", filterFunction);



// ---- About Us Section --- 




function aboutUs(){
    div2.innerHTML = "";
    results.innerHTML = "";
    message.innerHTML = "";
    warning.innerHTML = "";

    aboutUsDiv.innerHTML = `
    <h1 id="aboutUsH1">Who are we?</h1>

    <div id="aboutUsDiv">
        <p id="introduction">
            We are some junior but ambitious students with the big dreams...
        </p>
    </div>
    `;
}

aboutUsList.addEventListener("click", aboutUs);



////////////// Next Updates /////////////

// ----- Year filter will be added -----

// ------ Multi-Genres option will be available --------

// ------- Find Input will response immediately after each key --------