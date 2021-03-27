
import movies from "./movies.js"

let genre1 =document.getElementById("genre1");
let genre2 =document.getElementById("genre2");
let genre3 =document.getElementById("genre3");
let genre4 =document.getElementById("genre4");
let genre5 =document.getElementById("genre5");
let genre6 =document.getElementById("genre6");

let pointsSelect = document.getElementById("points");

let submitButton = document.getElementById("submitbtn");

let results = document.getElementById("results");

let spin = document.getElementById("spin");

let warning = document.getElementById("warning");

// ---- Movie finding Input Section DOM --- 
let findButton = document.getElementById("findButton");
let findMovie = document.querySelector("#findMovie");
let message = document.getElementById("message");

// ----- Years section DOM----
let years = document.querySelector("#years");
let recentMovies = document.getElementById("recentMovies");



const waitFor = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const array = [`<i class="fas fa-spinner"></i>`, `<i class="fas fa-spinner fa-rotate-90"></i>`, `<i class="fas fa-spinner fa-rotate-180"></i>`, `<i class="fas fa-spinner fa-rotate-270"></i>`];



const type = (param , point) => {
    //console.log(param);
    //console.log(point);
    let year = years.value;

    return new Promise ( (resolve, reject) => {
        setTimeout( ()=> {
            let newArray = [];      

            movies.forEach(element => {
                if(param && point !== "zero"){
                    if(element.genre === param){
                        if(point !== "9" && point !== "5" && element.imdb>point-1 && element.imdb<point){
                            //console.log("element");
                            newArray.push(element)
                            return newArray
                        } else if(point === "9" && element.imdb>8){
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
                    if(element.genre === param){
                        newArray.push(element);
                        //console.log("element")
                        return newArray
                    }
                } else if(point !== "zero"){
                    if(point !== "9" && point !== "5" && element.imdb>point-1 && element.imdb<point){
                        //console.log("element");
                        newArray.push(element)
                        return newArray
                    } else if(point === "9" && element.imdb>8){
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
                    list.innerHTML=`${item.name} (${item.year}) <a href="${item.url}" target="_blank"> <br> <img class="resultIMG" src= "./films/${item["name"].split(/\s/).join('')}.jpg"> <br> </a>${item.genre} (${item.imdb})`
    
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



submitButton.onclick = () => {

    results.innerHTML = "";
    warning.innerHTML = "";
    message.innerHTML = "";
    findMovie.value = "";
    findMovie.placeholder = "";


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

    results.innerHTML = "";
    warning.innerHTML = "";
    message.innerHTML = "";
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
        if(array.length>0){
            message.innerHTML = `<u>Here some possible suggestions for you!</u>`
        array.forEach( item => {
            let list = document.createElement("li");
            list.innerHTML=`${item.name} (${item.year}) <a href="${item.url}" target="_blank"> <br> <img class="resultIMG" src= "./films/${item["name"].split(/\s/).join('')}.jpg"> <br> </a>${item.genre} (${item.imdb})`
    
            results.appendChild(list);
        })
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

    results.innerHTML = "";
    warning.innerHTML = "";
    message.innerHTML = "";
    findMovie.value = "";
    findMovie.placeholder = "";
    message.innerHTML = `<u>Here the movies published in last 2 years!</u>`

    setTimeout(() => {
        movies.forEach(item => {
            if(item.year>2019){
                let list = document.createElement("li");
                list.innerHTML=`${item.name} (${item.year}) <a href="${item.url}" target="_blank"> <br> <img class="resultIMG" src= "./films/${item["name"].split(/\s/).join('')}.jpg"> <br> </a>${item.genre} (${item.imdb})`
        
                results.appendChild(list);
            }
        })
    }, 1000);
    
}

recentMovies.onclick = ()=> recentMoviesFunc();



const reversed = movies.reverse();

reversed.forEach(element=>{
    let list = document.createElement("li");
    list.innerHTML=`${element.name} (${element.year}) <a href="${element.url}" target="_blank"> <br> <img class="resultIMG" src= "./films/${element["name"].split(/\s/).join('')}.jpg"> <br> </a>${element.genre} (${element.imdb})`

    results.appendChild(list);
})