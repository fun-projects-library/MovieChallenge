
const movies = [

    {name:"The Dark Knight",year:2008,imdb:"9.0",url:"https://www.imdb.com/title/tt0468569/?ref_=adv_li_tt",genre:"action"},
    {name:"The Lord of the Rings",year:2003,imdb:"8.9",url:"https://www.imdb.com/title/tt0167260/?ref_=adv_li_tt",genre:"action"},
    {name:"The Matrix",year:1999,imdb:"8.7",url:"https://www.imdb.com/title/tt0133093/?ref_=adv_li_tt",genre:["action", "drama"]},

    {name:"Avengers Age of Ultron",year:2015,imdb:"7.3",url:"https://www.imdb.com/title/tt2395427/?ref_=adv_li_tt",genre:"action"},
    {name:"Thor Ragnarok",year:2017,imdb:"7.9",url:"https://www.imdb.com/title/tt3501632/?ref_=adv_li_tt",genre:"action"},
    {name:"The Gentlemen",year:2019,imdb:"7.8",url:"https://www.imdb.com/title/tt8367814/?ref_=adv_li_tt",genre:"action"},

    {name:"Gemini Man",year:2019,imdb:"5.7",url:"https://www.imdb.com/title/tt1025100/?ref_=adv_li_tt",genre:"action"},
    {name:"Birds of Prey",year:2020,imdb:"6.1",url:"https://www.imdb.com/title/tt7713068/?ref_=adv_li_tt",genre:"action"},
    {name:"News of the World",year:2020,imdb:"6.8",url:"https://www.imdb.com/title/tt6878306/?ref_=adv_li_tt",genre:"action"},
    {name:"Justice League",year:2017,imdb:"6.3",url:"https://www.imdb.com/title/tt0974015/?ref_=adv_li_tt",genre:"action"},

    {name:"The Marine",year:2006,imdb:"4.7",url:"https://www.imdb.com/title/tt0419946/?ref_=adv_li_tt",genre:"action"},
    {name:"Ra One",year:2011,imdb:"4.7",url:"https://www.imdb.com/title/tt1562871/?ref_=adv_li_tt",genre:"action"},
    {name:"Sadak 2",year:2020,imdb:"1.1",url:"https://www.imdb.com/title/tt7886848/?ref_=adv_li_tt",genre:"action"},
    {name:"Alone in the Dark",year:2005,imdb:"2.4",url:"https://www.imdb.com/title/tt0369226/?ref_=adv_li_tt",genre:"action"},

 
    {name:"Parasite",year:2019,imdb:"8.6",url:"https://www.imdb.com/title/tt6751668/?ref_=adv_li_tt",genre:"comedy"},
    {name:"Deadpool",year:2016,imdb:"8.0",url:"https://www.imdb.com/title/tt1431045/?ref_=adv_li_tt",genre:"comedy"},
    {name:"The Grand Budapest Hotel",year:2014,imdb:"8.1",url:"https://www.imdb.com/title/tt2278388/?ref_=adv_li_tt",genre:"comedy"},
    {name:"Soul", year:2020,imdb: "8.1",url: "https://www.imdb.com/title/tt2948372/?ref_=adv_li_tt",genre:"comedy"},

    {name:"Once Upon a Time... In Hollywood",year:2019,imdb:"7.6",url:"https://www.imdb.com/title/tt7131622/?ref_=adv_li_tt",genre:"comedy"},
    {name:"Knives Out",year:2019,imdb:"7.9",url: "https://www.imdb.com/title/tt8946378/?ref_=adv_li_tt",genre:"comedy"},
    {name:"The Gentlemen", year:2019,imdb:"7.8",url:"https://www.imdb.com/title/tt8367814/?ref_=adv_li_tt",genre:"comedy"},
    {name:"Captain Fantastic", year:2016,imdb: "7.9",url: "https://www.imdb.com/title/tt3553976/?ref_=adv_li_tt",genre:"comedy"},

    {name:"The SpongeBob Movie Sponge on the Run",year:2020,imdb: "6.0",url:"https://www.imdb.com/title/tt4823776/?ref_=adv_li_tt",genre:"comedy"},
    {name:"Police Academy", year:1984,imdb:"6.7",url: "https://www.imdb.com/title/tt0087928/?ref_=adv_li_tt",genre:"comedy"},
    {name:"EuroTrip",year:2004,imdb:"6.6",url:"https://www.imdb.com/title/tt0356150/?ref_=adv_li_tt",genre:"comedy"},
    {name:"Blithe Spirit",year:2020,imdb:"5.4",url:"https://www.imdb.com/title/tt10334148/?ref_=adv_li_tt",genre:"comedy"},

    {name:"We Can Be Heroes", year:2020, imdb:"4.7",urk:"https://www.imdb.com/title/tt10600398/?ref_=adv_li_tt",genre:"comedy"},
    {name:"Charlie's Angels",year:2019,imdb: "4.8",urk:"https://www.imdb.com/title/tt5033998/?ref_=adv_li_tt",genre:"comedy"},
    {name:"Chick Fight",year:2020,imdb:"4.5",urk:"https://www.imdb.com/title/tt10944486/?ref_=adv_li_tt",genre:"comedy"},
    {name:"Taxi",year:2004,imdb:"4.5",urk:"https://www.imdb.com/title/tt0316732/?ref_=adv_li_tt",genre:"comedy"},


    {name:"The Lion King",year:1994,imdb:"8.5",url:"https://www.imdb.com/title/tt0110357/?ref_=adv_li_tt",genre:"animation"},
    {name:"Toy Story",year:1995,imdb:"8.3",url:"https://www.imdb.com/title/tt0114709/?ref_=adv_li_tt",genre:"animation"},
    {name:"Up",year:2009,imdb:"8.2",url:"https://www.imdb.com/title/tt1049413/?ref_=adv_li_tt",genre:"animation"},
    {name:"Aladdin",year:1992, imdb:"8.0",url:"https://www.imdb.com/title/tt0103639/?ref_=adv_li_tt",genre:"animation"},

    {name:"Toy Story 2",year:1999,imdb:"7.9",url:"https://www.imdb.com/title/tt0120363/?ref_=adv_li_tt",genre:"animation"},
    {name:"How to Train Your Dragon",year:2014,imdb:"7.8",url:"https://www.imdb.com/title/tt1646971/?ref_=adv_li_tt",genre:"animation"},
    {name:"Shrek",year:2001,imdb:"7.8",url:"https://www.imdb.com/title/tt0126029/?ref_=adv_li_tt",genre:"animation"},
    {name:"Moana",year:2016,imdb:"7.6",url:"https://www.imdb.com/title/tt3521164/?ref_=adv_li_tt",genre:"animation"},

    {name:"Surf's Up",year:2007,imdb:"6.7",url:"https://www.imdb.com/title/tt0423294/?ref_=adv_li_tt",genre:"animation"},
    {name:"Over the Hedge",year:2006,imdb:"6.7",url:"https://www.imdb.com/title/tt0327084/?ref_=adv_li_tt",genre:"animation"},
    {name:"The Secret Life of Peds", year:2016,imdb:"6,5",url:"https://www.imdb.com/title/tt2709768/?ref_=adv_li_tt",genre:"animation"},
    {name:"Happ Feet",year:2006,imdb:"6.4",url:"https://www.imdb.com/title/tt0366548/?ref_=adv_li_tt",genre:"animation"},

    {name:"Garfield",year:2004,imdb:"5.0",url:"https://www.imdb.com/title/tt0356634/?ref_=adv_li_tt",genre:"animation"},
    {name:"The Emoji Movie",year:2007,imdb:"3.3",url:"https://www.imdb.com/title/tt4877122/?ref_=adv_li_tt",genre:"animation"},
    {name:"Meet the Spartans",year:2008,imdb:"2.8",url:"https://www.imdb.com/title/tt1073498/?ref_=adv_li_tt",genre:"animation"},

    {name:"Psycho", year:1960,imdb: "8.5",url: "https://www.imdb.com/title/tt0054215/?ref_=adv_li_tt",genre:"horror"},
    {name:"The Shining",year: 1980,imdb: "8.4",url: "https://www.imdb.com/title/tt0081505/?ref_=adv_li_tt",genre:"horror"},
    {name:"Alien", year:1979, imdb:"8.4", url:"https://www.imdb.com/title/tt0078748/?ref_=adv_li_tt",genre:"horror"},
    {name:"Tumbbad" ,year: 2018,imdb: "8.3",url: "https://www.imdb.com/title/tt8239946/?ref_=adv_li_tt",genre:"horror"},
    
    {name:"Let The Right One In",year: 2008,imdb: "7.9",url: "https://www.imdb.com/title/tt1139797/?ref_=adv_li_tt",genre:"horror"},
    {name:"Shaun of the Dead",year: 2004,imdb: "7.9",url: "https://www.imdb.com/title/tt0365748/?ref_=adv_li_tt",genre:"horror"},
    {name:"Dawn of the Dead",year: 1978,imdb: "7.9",url: "https://www.imdb.com/title/tt0077402/?ref_=adv_li_tt",genre:"horror"},
    {name:"King Kong" ,year: 1933,imdb: "7.9", url:"https://www.imdb.com/title/tt0024216/?ref_=adv_li_tt",genre:"horror"},
    
    {name:"The Call",year: 2013,imdb: "6.7",url: "https://www.imdb.com/title/tt1911644/?ref_=adv_li_tt",genre:"horror"},
    {name:"Altered States",year: 1980,imdb: "6.9",url: "https://www.imdb.com/title/tt0080360/?ref_=adv_li_tt",genre:"horror"},
    {name:"The House That Jack Built",year: 2018,imdb: "6.8",url: "https://www.imdb.com/title/tt4003440/?ref_=adv_li_tt",genre:"horror"},
    {name:"Housebound" ,year: 2014, imdb:"6.8",url: "https://www.imdb.com/title/tt3504048/?ref_=adv_li_tt",genre:"horror"},
    
    {name:"Child's Play",year: 1975,imdb: "5.9",url: "https://www.imdb.com/title/tt8663516/?ref_=adv_li_tt",genre:"horror"},
    {name:"Vivarium",year: 2019,imdb: "5.8",url: "https://www.imdb.com/title/tt8368406/?ref_=adv_li_tt",genre:"horror"},
    {name:"High Life", year:2018,imdb: "5.8",url: "https://www.imdb.com/title/tt4827558/?ref_=adv_li_tt",genre:"horror"},
    {name:"Jigsaw 1" ,year: 2017,imdb: "5.8",url: "https://www.imdb.com/title/tt3348730/?ref_=adv_li_tt",genre:"horror"},

    {name:"The Shawshank Redemption",year:1994,imdb:"9.3",url:"https://www.imdb.com/title/tt0111161/?ref_=adv_li_tt",genre:"drama"},
    {name:"The Godfather",year:1972,imdb:"9.2",url:"https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt",genre:"drama"},
    {name:"12 Angry Men",year:1957,imdb:"9.0",url:"https://www.imdb.com/title/tt0050083/?ref_=adv_li_tt",genre:"drama"},
    {name:"Hababam Sinifi",year:1975,imdb:"9.3",url:"https://www.imdb.com/title/tt0252487/?ref_=adv_li_tt",genre:"drama"},
    
    {name:"Schindler's List",year:1993,imdb:"8.9",url:"https://www.imdb.com/title/tt0108052/?ref_=adv_li_tt",genre:"drama"},
    {name:"Forrest Gump",year:1994,imdb:"8.8",url:"https://www.imdb.com/title/tt0109830/?ref_=adv_li_tt",genre:"drama"},
    {name:"Interstellar",year:2014,imdb:"8.6",url:"https://www.imdb.com/title/tt0816692/?ref_=adv_li_tt",genre:"drama"},
    {name:"Saving Private Ryan ",year:1998,imdb:"8.6",url:"https://www.imdb.com/title/tt0120815/?ref_=adv_li_tt",genre:"drama"},
    
    {name:"I'm Thinking of Ending Things",year:2020,imdb:"6.6",url:"https://www.imdb.com/title/tt7939766/?ref_=adv_li_tt",genre:"drama"},
    {name:"Contagion",year:2011,imdb:"6.7",url:"https://www.imdb.com/title/tt1598778/?ref_=adv_li_tt",genre:"drama"},
    {name:"Rebecca",year:2020,imdb:"6.0",url:"https://www.imdb.com/title/tt2235695/?ref_=adv_li_tt",genre:"drama"},
    {name:"The Lovely Bones",year:2009,imdb:"6.7",url:"https://www.imdb.com/title/tt0380510/?ref_=adv_li_tt",genre:"drama"},
    
    {name:"Cuties",year:2020,imdb:"3.1",url:"https://www.imdb.com/title/tt9196192/?ref_=adv_li_tt",genre:"drama"},
    {name:"The Room ",year:2003,imdb:"3.7",url:"https://www.imdb.com/title/tt0368226/?ref_=adv_li_tt",genre:"drama"},
    {name:"The Butterfly Effect 2",year:2006,imdb:"4.5",url:"https://www.imdb.com/title/tt0457297/?ref_=adv_li_tt",genre:"drama"},
    {name:"In the Land of Blood and Honey",year:2011,imdb:"4.5",url:"https://www.imdb.com/title/tt1714209/?ref_=adv_li_tt",genre:"drama"},


    {name:"The Green Mile",year: 1999, imdb:"8.6",url: "https://www.imdb.com/title/tt0038650/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"It's a Wonderful Life",year: 1946, imdb:"8.6",url: "https://www.imdb.com/title/tt8368406/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"Baahubali 2 The Conclusion",year: 2017, imdb:"8.2",url: "https://www.imdb.com/title/tt4849438/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"Soul" ,year: 2020, imdb:"8.1",url: "https://www.imdb.com/title/tt2948372/?ref_=adv_li_tt",genre:"fantasy"},
    
    {name:"Isle of Dogs",year: 2018,imdb: "7.9",url: "https://www.imdb.com/title/tt5104604/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"The Man from Earth", year:2007, imdb:"7.9",url: "https://www.imdb.com/title/tt0756683/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"Life of Pi",year: 2012,imdb: "7.9",url: "https://www.imdb.com/title/tt0454876/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"Harry Potter and the Prisoner of Azkaban" ,year: 2004, imdb:"7.9",url: "https://www.imdb.com/title/tt0304141/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"Yesterday 3",year: 2019,imdb: "6.8",url: "https://www.imdb.com/title/tt8079248/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"Storks", year:2016,imdb: "6.8",url: "https://www.imdb.com/title/tt4624424/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"Odd Thomas",year: 2013,imdb: "6.8",url: "https://www.imdb.com/title/tt1767354/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"The Imaginarium of Doctor Parnassus" ,year: 2009,imdb: "6.8", url:"https://www.imdb.com/title/tt1054606/?ref_=adv_li_tt",genre:"fantasy"},
    
    {name:"Mortal Kombat", year:1995,imdb: "5.8", url:"https://www.imdb.com/title/tt0113855/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"Ice Age Collision Course",year: 2016,imdb: "5.7",url: "https://www.imdb.com/title/tt3416828/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"Pan", year:2015,imdb: "5.7", url:"https://www.imdb.com/title/tt3332064/?ref_=adv_li_tt",genre:"fantasy"},
    {name:"Chicken Little" ,year: 2005, imdb:"5.7",url: "https://www.imdb.com/title/tt0371606/?ref_=adv_li_tt",genre:"fantasy"},
]


export default movies;