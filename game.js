

let button = document.getElementById("button");
let images = document.getElementById("images");
let titles = document.getElementById("titles");



async function firstTry(){

    let array = [];

    const data = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "f7b90963eamshf47dc9bcd5e7ff5p1b0d21jsna5168b2db105",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    }
    try{
        let response = await fetch("https://imdb8.p.rapidapi.com/title/get-top-rated-movies", data);
        // console.log(response);
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            jsonResponse.forEach( element => {
                const newValue = element.id.split("/");
                array.push(newValue[2]);
            });
            return listMovies(array);
        } else {
            throw new Error("error")
        }
    } catch (err) {console.log(err)}


    console.log(array);

    
}

// firstTry();

button.onclick = () => firstTry(); 



async function imagesFunc(event){
    console.log(event.target.parentElement.id)
    images.innerHTML = "";

    const data = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "f7b90963eamshf47dc9bcd5e7ff5p1b0d21jsna5168b2db105",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    }

    

    try{
        let response = await fetch(`https://imdb8.p.rapidapi.com/title/get-images?tconst=${event.target.parentElement.id}&limit=25`, data);
        // console.log(response);
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            
            jsonResponse.images.forEach(element=>{
                let photo = document.createElement("img");
                photo.src = element.url;
                photo.id = event.target.id;
                images.appendChild(photo)
            })
            
        } else {
            throw new Error("error")
        }
    } catch (err) {console.log(err)}

    for(let i = 0; i<8; i++){
        let photo = document.createElement("img");
        photo.src = jsonResponse.images[i].url;
        photo.id = event.target.id;
        images.appendChild(photo)
    }
    
    
}


const listMovies = (param) => {

    let random = Math.floor(Math.random()*param.length);

    const oneQuestion = param[random];

    let list = document.createElement("li");
    list.innerHTML = `<button>${oneQuestion}</button>`;
    list.id = oneQuestion;

    list.addEventListener("click", imagesFunc);


    titles.appendChild(list);



    // param.forEach(item => {
    //     let list = document.createElement("li");
    //     list.innerHTML = item;
    //     list.id = item;

    //     list.addEventListener("click", imagesFunc);


    //     titles.appendChild(list);
    // })

}


