
const movies = {
    action: {
        imdb8: [["The Dark Knight",2008,"9.0","https://www.imdb.com/title/tt0468569/?ref_=adv_li_tt"],["The Lord of the Rings",2003,"8.9","https://www.imdb.com/title/tt0167260/?ref_=adv_li_tt"],["The Matrix",1999,"8.7","https://www.imdb.com/title/tt0133093/?ref_=adv_li_tt"]],
        imdb7: [["Avengers: Age of Ultron",2015,"7.3","https://www.imdb.com/title/tt2395427/?ref_=adv_li_tt"],["Thor: Ragnarok",2017,"7.9","https://www.imdb.com/title/tt3501632/?ref_=adv_li_tt"],["The Gentlemen",2019,"7.8","https://www.imdb.com/title/tt8367814/?ref_=adv_li_tt"]],
        imdb5: [["Gemini Man",2019,"5.7","https://www.imdb.com/title/tt1025100/?ref_=adv_li_tt"],["Birds of Prey",2020,"6.1","https://www.imdb.com/title/tt7713068/?ref_=adv_li_tt"],["News of the World",2020,"6.8","https://www.imdb.com/title/tt6878306/?ref_=adv_li_tt"],["Justice League",2017,"6.3","https://www.imdb.com/title/tt0974015/?ref_=adv_li_tt"]],
        imdb4: [["The Marine",2006,"4.7","https://www.imdb.com/title/tt0419946/?ref_=adv_li_tt"],["Ra.One",2011,"4.7","https://www.imdb.com/title/tt1562871/?ref_=adv_li_tt"],["Sadak 2",2020,"1.1","https://www.imdb.com/title/tt7886848/?ref_=adv_li_tt"],["Alone in the Dark",2005,"2.4","https://www.imdb.com/title/tt0369226/?ref_=adv_li_tt"]]
    },
    comedy: { 
        imdb8: [["Parasite",2019,"8.6","https://www.imdb.com/title/tt6751668/?ref_=adv_li_tt"],["Deadpool",2016,"8,0","https://www.imdb.com/title/tt1431045/?ref_=adv_li_tt"],["The Grand Budapest Hotel",2014,"8.1","https://www.imdb.com/title/tt2278388/?ref_=adv_li_tt"],["Soul", 2020, "8.1", "https://www.imdb.com/title/tt2948372/?ref_=adv_li_tt"]],
        imdb7: [["Once Upon a Time... In Hollywood",2019,"7,6","https://www.imdb.com/title/tt7131622/?ref_=adv_li_tt"],["Knives Out",2019,"7,9", "https://www.imdb.com/title/tt8946378/?ref_=adv_li_tt"], ["The Gentlemen", 2019,"7,8","https://www.imdb.com/title/tt8367814/?ref_=adv_li_tt"], ["Captain Fantastic", 2016, "7,9", "https://www.imdb.com/title/tt3553976/?ref_=adv_li_tt"]],
        imdb5:[["The SpongeBob Movie: Sponge on the Run",2020, "6,0","https://www.imdb.com/title/tt4823776/?ref_=adv_li_tt"],["Police Academy", 1984,"6,7", "https://www.imdb.com/title/tt0087928/?ref_=adv_li_tt"], ["EuroTrip",2004,"6,6","https://www.imdb.com/title/tt0356150/?ref_=adv_li_tt"],["Blithe Spirit",2020,"5,4","https://www.imdb.com/title/tt10334148/?ref_=adv_li_tt" ]],
        imdb4: [["We Can Be Heroes", 2020, "4,7","https://www.imdb.com/title/tt10600398/?ref_=adv_li_tt"],["Charlie's Angels",2019, "4,8","https://www.imdb.com/title/tt5033998/?ref_=adv_li_tt"],["Chick Fight",2020,"4,5","https://www.imdb.com/title/tt10944486/?ref_=adv_li_tt"],["Taxi",2004,"4,5","https://www.imdb.com/title/tt0316732/?ref_=adv_li_tt"]]
    },
    animation: {
        imdb8: [["The Lion King",1994,"8.5","https://www.imdb.com/title/tt0110357/?ref_=adv_li_tt"],["Toy Story",1995,"8.3","https://www.imdb.com/title/tt0114709/?ref_=adv_li_tt"],["Up",2009,"8.2","https://www.imdb.com/title/tt1049413/?ref_=adv_li_tt"], ["Aladdin",1992, "8.0","https://www.imdb.com/title/tt0103639/?ref_=adv_li_tt"]],
        imdb7: [["Toy Story 2",1999,"7.9","https://www.imdb.com/title/tt0120363/?ref_=adv_li_tt"],["How to Train Your Dragon",2014,"7.8","https://www.imdb.com/title/tt1646971/?ref_=adv_li_tt"],["Shrek",2001,"7.8","https://www.imdb.com/title/tt0126029/?ref_=adv_li_tt"],["Moana",2016,"7.6","https://www.imdb.com/title/tt3521164/?ref_=adv_li_tt"]],
        imdb5: [["Surf's Up",2007,"6.7","https://www.imdb.com/title/tt0423294/?ref_=adv_li_tt"],["Over the Hedge",2006,"6.7","https://www.imdb.com/title/tt0327084/?ref_=adv_li_tt"],["The Secret Life of Peds", 2016,"6,5","https://www.imdb.com/title/tt2709768/?ref_=adv_li_tt"],["Happ Feet",2006,"6.4","https://www.imdb.com/title/tt0366548/?ref_=adv_li_tt"]],
        imdb4:[["Garfield",2004,"5.0","https://www.imdb.com/title/tt0356634/?ref_=adv_li_tt"],["The Emoji Movie",2007,"3.3","https://www.imdb.com/title/tt4877122/?ref_=adv_li_tt"],["Meet the Spartans",2008,"2.8","https://www.imdb.com/title/tt1073498/?ref_=adv_li_tt"]]
    },
    horror: {
        imdb8: [["Psycho", 1960, "8.5", "https://www.imdb.com/title/tt0054215/?ref_=adv_li_tt"],
        ["The Shining", 1980, "8.4", "https://www.imdb.com/title/tt0081505/?ref_=adv_li_tt"],
        ["Alien", 1979, "8.4", "https://www.imdb.com/title/tt0078748/?ref_=adv_li_tt"],
        ["Tumbbad" , 2018, "8.3", "https://www.imdb.com/title/tt8239946/?ref_=adv_li_tt"]],
        imdb7: [["Let The Right One In", 2008, "7.9", "https://www.imdb.com/title/tt1139797/?ref_=adv_li_tt"],
        ["Shaun of the Dead", 2004, "7.9", "https://www.imdb.com/title/tt0365748/?ref_=adv_li_tt"],
        ["Dawn of the Dead", 1978, "7.9", "https://www.imdb.com/title/tt0077402/?ref_=adv_li_tt"],
        ["King Kong" , 1933, "7.9", "https://www.imdb.com/title/tt0024216/?ref_=adv_li_tt"]],
        imdb5: [["The Call", 2013, "6.7", "https://www.imdb.com/title/tt1911644/?ref_=adv_li_tt"],
        ["Altered States", 1980, "6.9", "https://www.imdb.com/title/tt0080360/?ref_=adv_li_tt"],
        ["The House That Jack Built", 2018, "6.8", "https://www.imdb.com/title/tt4003440/?ref_=adv_li_tt"],
        ["Housebound" , 2014, "6.8", "https://www.imdb.com/title/tt3504048/?ref_=adv_li_tt"]],
        imdb4: [["Child's Play", 1975, "5.9", "https://www.imdb.com/title/tt8663516/?ref_=adv_li_tt"],
        ["Vivarium", 2019, "5.8", "https://www.imdb.com/title/tt8368406/?ref_=adv_li_tt"],
        ["High Life", 2018, "5.8", "https://www.imdb.com/title/tt4827558/?ref_=adv_li_tt"],
        ["Jigsaw 1" , 2017, "5.8", "https://www.imdb.com/title/tt3348730/?ref_=adv_li_tt"]],
    },
    drama:{
        imdb8: [["The Shawshank Redemption",1994,"9.3","https://www.imdb.com/title/tt0111161/?ref_=adv_li_tt"],["The Godfather",1972,"9.2","https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt"],["12 Angry Men",1957,"9.0","https://www.imdb.com/title/tt0050083/?ref_=adv_li_tt"], ["Hababam Sinifi ",1975,"9.3","https://www.imdb.com/title/tt0252487/?ref_=adv_li_tt"]],
        imdb7: [["Schindler's List",1993,"8.9","https://www.imdb.com/title/tt0108052/?ref_=adv_li_tt"], ["Forrest Gump",1994,"8.8","https://www.imdb.com/title/tt0109830/?ref_=adv_li_tt"], ["Interstellar",2014,"8.6","https://www.imdb.com/title/tt0816692/?ref_=adv_li_tt"], ["Saving Private Ryan ",1998,"8.6","https://www.imdb.com/title/tt0120815/?ref_=adv_li_tt"]],
        imdb5:[["I'm Thinking of Ending Things",2020,"6.6","https://www.imdb.com/title/tt7939766/?ref_=adv_li_tt"],["Contagion",2011,"6.7","https://www.imdb.com/title/tt1598778/?ref_=adv_li_tt"],["Rebecca",2020,"6.0","https://www.imdb.com/title/tt2235695/?ref_=adv_li_tt"], ["The Lovely Bones",2009,"6.7","https://www.imdb.com/title/tt0380510/?ref_=adv_li_tt"]],
        imdb4:[["Cuties",2020,"3.1","https://www.imdb.com/title/tt9196192/?ref_=adv_li_tt"],["The Room ",2003,"3.7","https://www.imdb.com/title/tt0368226/?ref_=adv_li_tt"],["The Butterfly Effect 2",2006,"4.5","https://www.imdb.com/title/tt0457297/?ref_=adv_li_tt"], ["In the Land of Blood and Honey ",2011,"4.5","https://www.imdb.com/title/tt1714209/?ref_=adv_li_tt"]]
    },
    fantasy: {
        imdb8: [["The Green Mile", 1999, "8.6", "https://www.imdb.com/title/tt0038650/?ref_=adv_li_tt"],
        ["It's a Wonderful Life", 1946, "8.6", "https://www.imdb.com/title/tt8368406/?ref_=adv_li_tt"],
        ["Baahubali 2: The Conclusion", 2017, "8.2", "https://www.imdb.com/title/tt4849438/?ref_=adv_li_tt"],
        ["Soul" , 2020, "8.1", "https://www.imdb.com/title/tt2948372/?ref_=adv_li_tt"]],
        imdb7: [["Isle of Dogs", 2018, "7.9", "https://www.imdb.com/title/tt5104604/?ref_=adv_li_tt"],
        ["The Man from Earth", 2007, "7.9", "https://www.imdb.com/title/tt0756683/?ref_=adv_li_tt"],
        ["Life of Pi", 2012, "7.9", "https://www.imdb.com/title/tt0454876/?ref_=adv_li_tt"],
        ["Harry Potter and the Prisoner of Azkaban" , 2004, "7.9", "https://www.imdb.com/title/tt0304141/?ref_=adv_li_tt"]],
        imdb5: [["Yesterday 3", 2019, "6.8", "https://www.imdb.com/title/tt8079248/?ref_=adv_li_tt"],
        ["Storks", 2016, "6.8", "https://www.imdb.com/title/tt4624424/?ref_=adv_li_tt"],
        ["Odd Thomas", 2013, "6.8", "https://www.imdb.com/title/tt1767354/?ref_=adv_li_tt"],
        ["The Imaginarium of Doctor Parnassus" , 2009, "6.8", "https://www.imdb.com/title/tt1054606/?ref_=adv_li_tt"]],
        imdb4: [["Mortal Kombat", 1995, "5.8", "https://www.imdb.com/title/tt0113855/?ref_=adv_li_tt"],
        ["Ice Age: Collision Course", 2016, "5.7", "https://www.imdb.com/title/tt3416828/?ref_=adv_li_tt"],
        ["Pan", 2015, "5.7", "https://www.imdb.com/title/tt3332064/?ref_=adv_li_tt"],
        ["Chicken Little" , 2005, "5.7", "https://www.imdb.com/title/tt0371606/?ref_=adv_li_tt"]],
    },
}


let genre1 =document.getElementById("genre1");
let genre2 =document.getElementById("genre2");
let genre3 =document.getElementById("genre3");
let genre4 =document.getElementById("genre4");
let genre5 =document.getElementById("genre5");
let genre6 =document.getElementById("genre6");

let pointsSelect = document.getElementById("points");

let submitButton = document.getElementById("submitbtn");

let results = document.getElementById("results")


const type = (param , point) => {
    return new Promise ( (resolve, reject) => {
        setTimeout( ()=> {
                let randomAction = movies[param][point];
                //console.log(movies[param][point]);
                randomAction.forEach( item => {
                    let list = document.createElement("li");
                    list.innerHTML= `<a href="${item[3]}" target="_blank">${item[0]}</a> (${item[1]})`;
                    results.appendChild(list);
                })
                resolve("lkjdlkjefejofiwe")
                reject("sdasdasdasdasd")
        },2000)
    })
}



submitButton.onclick = () => {

    results.innerHTML = "";

    let genre1Check =document.getElementById("genre1").checked;
    let genre2Check =document.getElementById("genre2").checked;
    let genre3Check =document.getElementById("genre3").checked;
    let genre4Check =document.getElementById("genre4").checked;
    let genre5Check =document.getElementById("genre5").checked;
    let genre6Check =document.getElementById("genre6").checked;

    let parameter;
    let point = pointsSelect.value;

    if(genre1Check && point !== "zero"){
        parameter = genre1.value;
    } else if(genre2Check && point !== "zero"){
        parameter = genre2.value;
    } else if(genre3Check && point !== "zero"){
        parameter = genre3.value;
    } else if(genre4Check && point !== "zero"){
        parameter = genre4.value;
    } else if(genre5Check && point !== "zero"){
        parameter = genre5.value;
    } else if(genre6Check && point !== "zero"){
        parameter = genre6.value;
    } else {
        alert(`Please make both Selections!`);
    }
    // console.log(parameter, point);
    if(parameter){
        type(parameter, point)
        .then( (res)=> {console.log(res)})
        .catch( (err) => {console.log(err)})
    }
}




