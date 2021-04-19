
const movies = [

    {name:"Avengers Age of Ultron",year:2015,imdb:"7.3",url:"https://www.imdb.com/title/tt2395427/?ref_=adv_li_tt",genre:["action","adventure","sci-fi"]},
    {name: "Seaspiracy", year:2021,imdb:"8.4", url:"https://www.imdb.com/video/vi2277490713?playlistId=tt14152756&ref_=tt_ov_vi",genre:["documentary"]},
    {name:"The Godfather",year:1972,imdb:"9.2",url:"https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt",genre:["drama", "crime"]},
    {name:"12 Angry Men",year:1957,imdb:"9.0",url:"https://www.imdb.com/title/tt0050083/?ref_=adv_li_tt",genre:["drama", "crime"]},
    {name:"Schindler's List",year:1993,imdb:"8.9",url:"https://www.imdb.com/title/tt0108052/?ref_=adv_li_tt",genre:["drama", "biography", "history"]},
    {name:`The Lord of the Rings The Return of the King`,year:2003,imdb:"8.9",url:"https://www.imdb.com/title/tt0167260/?ref_=adv_li_tt",genre:["action", "adventure", "drama"]},
    {name: "Pulp Fiction", year:1994, imdb:"8.8", url:"https://www.imdb.com/title/tt0110912/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=C3N53WH6TG5JR9G3BZFA&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_8",genre:["crime", "drama"]},
    {name:"The Dark Knight",year:2008,imdb:"9.0",url:"https://www.imdb.com/title/tt0468569/?ref_=adv_li_tt",genre:["action", "crime", "drama"]},
    {name: "The Good the Bad and the Ugly", year:1966,imdb:"8.8", url:"https://www.imdb.com/title/tt0060196/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=C3N53WH6TG5JR9G3BZFA&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_9",genre:["western"]},
    {name:"The Shawshank Redemption",year:1994,imdb:"9.3",url:"https://www.imdb.com/title/tt0111161/?ref_=adv_li_tt",genre:["drama"]},
    {name: "Fight Club", year:1999,imdb:"8.8", url:"https://www.imdb.com/title/tt0137523/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=C3N53WH6TG5JR9G3BZFA&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_11",genre:["drama"]},
    {name:"Forrest Gump",year:1994,imdb:"8.8",url:"https://www.imdb.com/title/tt0109830/?ref_=adv_li_tt",genre:["drama","romance"]},
    {name: "Inception", year:2010,imdb:"8.8", url:"https://www.imdb.com/video/vi2959588889?playlistId=tt1375666&ref_=tt_ov_vi",genre:["action", "adventure", "sci-fi"]},
    {name: "The Lord of the Rings The Two Towers", year:2002,imdb:"8.7", url:"https://www.imdb.com/title/tt0167261/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=C3N53WH6TG5JR9G3BZFA&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=vp_back",genre:["action", "adventure", "drama"]},
    {name: "Star Wars Episode 5-The Empire Strikes Back", year:1980,imdb:"8.7", url:"https://www.imdb.com/title/tt0080684/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=C3N53WH6TG5JR9G3BZFA&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_15",genre:["action","adventure","fantasy"]},
    {name:"The Matrix",year:1999,imdb:"8.7",url:"https://www.imdb.com/title/tt0133093/?ref_=adv_li_tt",genre:["action", "sci-fi"]},
    {name: "Goodfellas", year:1990,imdb:"8.6", url:"https://www.imdb.com/title/tt0099685/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=C3N53WH6TG5JR9G3BZFA&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_17",genre:["biography","crime","drama"]},
    {name: "One Flew Over the Cuckoo's Nest", year:1975,imdb:"8.6", url:"https://www.imdb.com/title/tt0073486/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=C3N53WH6TG5JR9G3BZFA&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_18",genre:["drama"]},
    {name: "Seven Samurai", year:1954,imdb:"8.6", url:"https://www.imdb.com/title/tt0047478/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=0RQ8A3V3M89BVPWA544A&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_19",genre:["action","adventure","drama"]},
    {name: "Se7en", year:1995,imdb:"8.6", url:"https://www.imdb.com/title/tt0114369/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=0RQ8A3V3M89BVPWA544A&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_20",genre:["crime","drama","mystery"]},
    {name:"Thor Ragnarok",year:2017,imdb:"7.9",url:"https://www.imdb.com/title/tt3501632/?ref_=adv_li_tt", genre:["action","adventure","comedy"]},
    {name: "The Lord of the Rings The Fellowship of the Ring", year:2001,imdb:"8.8", url:"https://www.imdb.com/title/tt0120737/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=C3N53WH6TG5JR9G3BZFA&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_10",genre:["action","adventure","drama"]},
    {name: "Life Is Beautiful", year:1997,imdb:"8.6", url:"https://www.imdb.com/title/tt0118799/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=Z6Y7J098NFTTBF2GMY4S&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_21",genre:["comedy","drama","romance"]},
    {name: "City of God", year:2002,imdb:"8.6", url:"https://www.imdb.com/title/tt0317248/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=Z6Y7J098NFTTBF2GMY4S&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_22",genre:["crime","drama"]},
    {name: "The Godfather Part 2", year:1974,imdb:"9.0", url:"https://www.imdb.com/title/tt0071562/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=C3N53WH6TG5JR9G3BZFA&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_3",genre:["crime", "drama"]},
    {name: "The Silence of the Lambs", year:1991,imdb:"8.6", url:"https://www.imdb.com/title/tt0102926/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=Z6Y7J098NFTTBF2GMY4S&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_23",genre:["crime","drama","thriller"]},
    {name:"It's a Wonderful Life",year: 1946, imdb:"8.6",url: "https://www.imdb.com/title/tt8368406/?ref_=adv_li_tt",genre:["drama","family","fantasy"]},
    {name: "Star Wars Episode IV -A New Hope", year:1977,imdb:"8.6", url:"https://www.imdb.com/title/tt0076759/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=BDVWYK4H6FCKWW9ZHKEK&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_25",genre:["action","adventure","fantasy"]},
    {name:"Saving Private Ryan ",year:1998,imdb:"8.6",url:"https://www.imdb.com/title/tt0120815/?ref_=adv_li_tt",genre:["drama","war"]},
    {name:"The Green Mile",year: 1999, imdb:"8.6",url: "https://www.imdb.com/title/tt0038650/?ref_=adv_li_tt",genre:["fantasy","crime","drama"]},
    {name: "Spirited Away", year:2001,imdb:"8.5", url:"https://www.imdb.com/title/tt0245429/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=18PSZXJ2EERY2S32YQQR&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_28",genre:["animation","adventure","family"]},
    {name:"Interstellar", year:2014, imdb:"8.6", url:"https://www.imdb.com/title/tt0816692/?ref_=adv_li_tt", genre:["adventure","drama","sci-fi"]},
    {name:"Parasite",year:2019,imdb:"8.6",url:"https://www.imdb.com/title/tt6751668/?ref_=adv_li_tt",genre:["comedy","drama","thriller"]},
    {name: "Léon The Professional", year:1994,imdb:"8.5", url:"https://www.imdb.com/video/vi2744254745?playlistId=tt0110413&ref_=tt_pr_ov_vi",genre:["action","crime","drama"]},
    {name:"The Gentlemen",year:2019,imdb:"7.8",url:"https://www.imdb.com/title/tt8367814/?ref_=adv_li_tt",genre:["action","comedy","crime"]},
    {name:"Birds of Prey",year:2020,imdb:"6.1",url:"https://www.imdb.com/title/tt7713068/?ref_=adv_li_tt",genre:["action","adventure","comedy"]},
    {name: "Hara-Kiri", year:1962,imdb:"8.5", url:"https://www.imdb.com/title/tt0056058/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=6TEHZ42RPG746JM6BC3W&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_32",genre:["action","drama","mystery"]},
    {name: "The Usual Suspects", year:1995,imdb:"8.5", url:"https://www.imdb.com/video/vi2717188377?playlistId=tt0114814&ref_=tt_ov_vi",genre:["crime","mystery","thriller"]},
    {name:"The Lion King",year:1994,imdb:"8.5",url:"https://www.imdb.com/title/tt0110357/?ref_=adv_li_tt",genre:["animation","adventure","drama"]},
    {name: "The Pianist", year:2002,imdb:"8.5", url:"https://www.imdb.com/title/tt0253474/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=6TEHZ42RPG746JM6BC3W&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_35",genre:["biography", "drama","music"]},
    {name: "Terminator 2 Judgment Day", year:1991,imdb:"8.5", url:"https://www.imdb.com/video/vi2748889369?playlistId=tt0103064&ref_=tt_pr_ov_vi",genre:["action","sci-fi"]},
    {name: "Back to the Future", year:1985,imdb:"8.5", url:"https://www.imdb.com/video/vi252380953?playlistId=tt0088763&ref_=tt_pr_ov_vi",genre:["adventure","comedy","sci-fi"]},
    {name:"News of the World",year:2020,imdb:"6.8",url:"https://www.imdb.com/title/tt6878306/?ref_=adv_li_tt",genre:["action","adventure","drama"]},
    {name:"Soul", year:2020,imdb: "8.1",url: "https://www.imdb.com/title/tt2948372/?ref_=adv_li_tt",genre:["comedy","animation"]},
    {name:"Deadpool",year:2016,imdb:"8.0",url:"https://www.imdb.com/title/tt1431045/?ref_=adv_li_tt",genre:["comedy","action","adventure"]},
    {name: "American History X", year:1998,imdb:"8.5", url:"https://www.imdb.com/video/vi854001177?playlistId=tt0120586&ref_=tt_pr_ov_vi",genre:["drama"]},
    {name: "Modern Times", year:1936,imdb:"8.5", url:"https://www.imdb.com/title/tt0027977/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=PFN3DJ14K1YZRRDYNFX2&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_39",genre:["comedy","drama","family"]},
    {name: "Gladiator", year:2000,imdb:"8.5", url:"https://www.imdb.com/video/vi2628367897?playlistId=tt0172495&ref_=tt_ov_vi",genre:["action","adventure","drama"]},
    {name:"Psycho", year:1960,imdb: "8.5",url: "https://www.imdb.com/title/tt0054215/?ref_=adv_li_tt",genre:["horror","mystery","thriller"]},
    {name: "The Departed", year:2006,imdb:"8.5", url:"https://www.imdb.com/title/tt0407887/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=PFN3DJ14K1YZRRDYNFX2&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_42",genre:["crime","drama","thriller"]},
    {name:"The SpongeBob Movie Sponge on the Run",year:2020,imdb: "6.0",url:"https://www.imdb.com/title/tt4823776/?ref_=adv_li_tt",genre:["comedy","animation","adventure"]},
    {name: "City Lights", year:1931,imdb:"8.5", url:"https://www.imdb.com/title/tt0021749/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=PFN3DJ14K1YZRRDYNFX2&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_43",genre:["comedy","romance","drama"]},
    {name: "The Intouchables", year:2011,imdb:"8.5", url:"https://www.imdb.com/title/tt1675434/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=PFN3DJ14K1YZRRDYNFX2&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_44",genre:["biography","comedy","drama"]},
    {name: "Whiplash", year:2014,imdb:"8.5", url:"https://www.imdb.com/title/tt2582802/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=PFN3DJ14K1YZRRDYNFX2&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_45",genre:["drama","music"]},
    {name: "Grave of the Fireflies", year:1988,imdb:"8.5", url:"https://www.imdb.com/video/vi1377679385?playlistId=tt0095327&ref_=tt_ov_vi",genre:["animation","war"]},
    {name: "The Prestige", year:2006,imdb:"8.5", url:"https://www.imdb.com/title/tt0482571/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=PFN3DJ14K1YZRRDYNFX2&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_47",genre:["drama","mystery","sci-fi"]},
    {name: "Once Upon a Time in the West", year:1968,imdb:"8.4", url:"https://www.imdb.com/video/vi239075865?playlistId=tt0064116&ref_=tt_ov_vi",genre:["western"]},
    {name:"Let The Right One In",year: 2008,imdb: "7.9",url: "https://www.imdb.com/title/tt1139797/?ref_=adv_li_tt",genre:["fantasy","crime"]},
    {name:"Shaun of the Dead",year: 2004,imdb: "7.9",url: "https://www.imdb.com/title/tt0365748/?ref_=adv_li_tt",genre:["horror","comedy"]},
    {name:"How to Train Your Dragon 2",year:2014,imdb:"7.8",url:"https://www.imdb.com/title/tt1646971/?ref_=adv_li_tt",genre:["animation","action","adventure"]},
    {name: "Casablanca", year:1942,imdb:"8.4", url:"https://www.imdb.com/video/vi6095897?playlistId=tt0034583&ref_=tt_ov_vi",genre:["drama","romance","war"]},
    {name: "Cinema Paradiso", year:1988,imdb:"8.4", url:"https://www.imdb.com/video/vi2800655897?playlistId=tt0095765&ref_=tt_pr_ov_vi",genre:["drama","romance"]},
    {name: "Rear Window", year:1954,imdb:"8.4", url:"https://www.imdb.com/video/vi2391784473?playlistId=tt0047396&ref_=tt_pr_ov_vi",genre:["mystery","thriller"]},
    {name:"Alien", year:1979, imdb:"8.4", url:"https://www.imdb.com/title/tt0078748/?ref_=adv_li_tt",genre:["horror","sci-fi"]},
    {name: "Apocalypse Now", year:1979,imdb:"8.4", url:"https://www.imdb.com/video/vi3543773721?playlistId=tt0078788&ref_=tt_pr_ov_vi",genre:["drama","mystery","war"]},
    {name: "About Time", year:2013,imdb:"7.8", url:"https://www.imdb.com/video/vi802400281?playlistId=tt2194499&ref_=tt_ov_vi",genre:["comedy","romance","fantasy"]},
    {name: "Memento", year:2000 ,imdb:"8.4", url:"https://www.imdb.com/title/tt0209144/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=RCBKMMZZM9JK7F56FGF6&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_54",genre:["mystery","thriller"]},
    {name: "The Great Dictator", year:1940,imdb:"8.4", url:"https://www.imdb.com/title/tt0032553/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=RCBKMMZZM9JK7F56FGF6&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_55",genre:["comedy","war","drama"]},
    {name: "Indiana Jones and the Raiders of the Lost Ark", year:1981,imdb:"8.4", url:"https://www.imdb.com/title/tt0082971/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=RCBKMMZZM9JK7F56FGF6&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_56",genre:["action","adventure"]},
    {name: "Django Unchained", year:2012,imdb:"8.4", url:"https://www.imdb.com/video/vi2291574553?playlistId=tt1853728&ref_=tt_pr_ov_vi",genre:["drama","western"]},
    {name: "The Lives of Others", year:2006,imdb:"8.4", url:"https://www.imdb.com/title/tt0405094/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=RCBKMMZZM9JK7F56FGF6&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_58",genre:["drama","mystery","thriller"]},
    {name: "The Notebook", year:2004,imdb:"7.8", url:"https://www.imdb.com/video/vi2603746073?playlistId=tt0332280&ref_=tt_ov_vi",genre:["romance","drama"]},
    {name: "In Time", year:2011,imdb:"6.7", url:"https://www.imdb.com/video/vi775265305?playlistId=tt1637688&ref_=tt_ov_vi",genre:["action","sci-fi","thriller"]},
    {name: "Paths of Glory", year:1957,imdb:"8.4", url:"https://www.imdb.com/video/vi763627801?playlistId=tt0050825&ref_=tt_pr_ov_vi",genre:["war"]},
    {name: "Hamilton", year:2020,imdb:"8.5", url:"https://www.imdb.com/video/vi3591880217?playlistId=tt8503618&ref_=tt_ov_vi",genre:["biography","drama","history"]},
    {name: "WALL.E", year:2008,imdb:"8.4", url:"https://www.imdb.com/video/vi2192703769?playlistId=tt0910970&ref_=tt_pr_ov_vi",genre:["animation","adventure","family"]},
    {name: "Joker", year:2019,imdb:"8.4", url:"https://www.imdb.com/video/vi1723318041?playlistId=tt7286456&ref_=tt_ov_vi",genre:["crime","drama","thriller"]},
    {name: "Tom and Jerry", year:2021,imdb:"5.2", url:"https://www.imdb.com/video/vi734511385?playlistId=tt1361336&ref_=tt_ov_vi",genre:["animation","comedy","family"]},
    {name: "Tenet", year:2020,imdb:"7.5", url:"https://www.imdb.com/video/vi2051194393?playlistId=tt6723592&ref_=tt_ov_vi",genre:["action","sci-fi","thriller"]},
    {name:"The Shining",year: 1980,imdb: "8.4",url: "https://www.imdb.com/title/tt0081505/?ref_=adv_li_tt",genre:["horror","drama"]},
    {name: "Avengers Infinity War", year:2018,imdb:"8.4", url:"https://www.imdb.com/video/vi528070681?playlistId=tt4154756&ref_=tt_ov_vi",genre:["action","adventure","sci-fi"]},
    {name: "Sunset Blvd.", year:1950,imdb:"8.4", url:"https://www.imdb.com/video/vi2388460569?playlistId=tt0043014&ref_=tt_ov_vi",genre:["drama","film-noir"]},
    {name: "Witness for the Prosecution", year:1957,imdb:"8.4", url:"https://www.imdb.com/video/vi421183001?playlistId=tt0051201&ref_=tt_ov_vi",genre:["crime","mystery"]},
    {name: "Oldboy", year:2003,imdb:"8.3", url:"https://www.imdb.com/video/vi3130917145?playlistId=tt0364569&ref_=tt_ov_vi",genre:["action","drama","mystery"]},
    {name: "Spider-Man Into the Spider-Verse", year:2018,imdb:"8.4", url:"https://www.imdb.com/video/vi1489877529?playlistId=tt4633694&ref_=tt_ov_vi",genre:["animation","action","drama"]},
    {name: "Princess Mononoke", year:1997,imdb:"8.3", url:"https://www.imdb.com/video/vi2563293465?playlistId=tt0119698&ref_=tt_pr_ov_vi",genre:["animation","action","adventure"]},
    {name: "Dr. Strangelove or How I Learned to Stop Worrying and Love the Bomb", year:1964,imdb:"8.3", url:"https://www.imdb.com/video/vi3726294553?playlistId=tt0057012&ref_=tt_pr_ov_vi",genre:["comedy"]},
    {name: "The Dark Knight Rises", year:2012,imdb:"8.3", url:"https://www.imdb.com/video/vi2376312089?playlistId=tt1345836&ref_=tt_ov_vi",genre:["action","adventure"]},
    {name: "Once Upon a Time in America", year:1984,imdb:"8.3", url:"https://www.imdb.com/video/vi2777395225?playlistId=tt0087843&ref_=tt_pr_ov_vi",genre:["crime","drama"]},
    {name:"Once Upon a Time... In Hollywood",year:2019,imdb:"7.6",url:"https://www.imdb.com/title/tt7131622/?ref_=adv_li_tt",genre:["comedy","drama"]},
    {name: "Your Name.", year:2016,imdb:"8.3", url:"https://www.imdb.com/video/vi1705097753?playlistId=tt5311514&ref_=tt_pr_ov_vi",genre:["animation","drama","fantasy"]},
    {name: "Aliens", year:1986,imdb:"8.3", url:"https://www.imdb.com/video/vi368744473?playlistId=tt0090605&ref_=tt_ov_vi",genre:["action","adventure","sci-fi"]},
    {name: "Coco", year:2017,imdb:"8.4", url:"https://www.imdb.com/video/vi4249729305?playlistId=tt2380307&ref_=tt_ov_vi",genre:["animation","adventure","family"]},
    {name: "Avengers Endgame", year:2019,imdb:"8.3", url:"https://www.imdb.com/video/vi2163260441?playlistId=tt4154796&ref_=tt_ov_vi",genre:["action","adventure","drama"]},
    {name: "Capernaum", year:2018,imdb:"8.3", url:"https://www.imdb.com/video/vi1667873305?playlistId=tt8267604&ref_=tt_ov_vi",genre:["drama"]},
    {name: "American Beauty", year:1999,imdb:"8.3", url:"https://www.imdb.com/video/vi788506137?playlistId=tt0169547&ref_=tt_ov_vi",genre:["drama"]},
    {name: "Braveheart", year:1995,imdb:"8.3", url:"https://www.imdb.com/video/vi2874063641?playlistId=tt0112573&ref_=tt_pr_ov_vi",genre:["biography","drama","history"]},
    {name: "High and Low", year:1963,imdb:"8.3", url:"https://www.imdb.com/video/vi2921184793?playlistId=tt0057565&ref_=tt_ov_vi",genre:["crime","mystery"]},
    {name:"Toy Story",year:1995,imdb:"8.3",url:"https://www.imdb.com/title/tt0114709/?ref_=adv_li_tt",genre:["animation","adventure","comedy"]},
    {name: "Das Boot", year:1981,imdb:"8.3", url:"https://www.imdb.com/video/vi4153458201?playlistId=tt0082096&ref_=tt_ov_vi",genre:["adventure","drama","thriller"]},
    {name: "3 Idiots", year:2009,imdb:"8.3", url:"https://www.imdb.com/video/vi3086596889?playlistId=tt1187043&ref_=tt_ov_vi",genre:["comedy","drama"]},
    {name: "Amadeus", year:1984,imdb:"8.3", url:"https://www.imdb.com/video/vi2535496985?playlistId=tt0086879&ref_=tt_ov_vi",genre:["biography","history","drama"]},
    {name: "Inglourious Basterds", year:2009,imdb:"8.3", url:"https://www.imdb.com/title/tt0361748/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=SKZKXGKESCZZ3XSZ0GEN&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_85",genre:["adventure","war"]},
    {name: "Good Will Hunting", year:1997,imdb:"8.3", url:"https://www.imdb.com/video/vi1281211929?playlistId=tt0119217&ref_=tt_ov_vi",genre:["drama","romance"]},
    {name: "Star Wars Episode VI - Return of the Jedi", year:1983,imdb:"8.3", url:"https://www.imdb.com/video/vi1702936345?playlistId=tt0086190&ref_=tt_pr_ov_vi",genre:["action","adventure","fantasy"]},
    {name: "Like Stars on Earth", year:2007,imdb:"8.3", url:"https://www.imdb.com/video/vi1834943001?playlistId=tt0986264&ref_=tt_ov_vi",genre:["drama","family"]},
    {name: "Reservoir Dogs", year:1992,imdb:"8.3", url:"https://www.imdb.com/video/vi3028484377?playlistId=tt0105236&ref_=tt_ov_vi",genre:["crime","thriller"]},
    {name: "2001 A Space Odyssey", year:1968,imdb:"8.3", url:"https://www.imdb.com/video/vi2674767897?playlistId=tt0062622&ref_=tt_pr_ov_vi",genre:["adventure","sci-fi"]},
    {name: "Requiem for a Dream", year:2000,imdb:"8.3", url:"https://www.imdb.com/video/vi2156069145?playlistId=tt0180093&ref_=tt_pr_ov_vi",genre:["drama"]},
    {name: "The Hunt", year:2012,imdb:"8.3", url:"https://www.imdb.com/video/vi2244519449?playlistId=tt2106476&ref_=tt_ov_vi",genre:["drama"]},
    {name: "Vertigo", year:1958,imdb:"8.3", url:"https://www.imdb.com/video/vi216072473?playlistId=tt0052357&ref_=tt_ov_vi",genre:["mystery","romance","thriller"]},
    {name: "M", year:1931,imdb:"8.3", url:"https://www.imdb.com/video/vi605863449?playlistId=tt0022100&ref_=tt_ov_vi",genre:["crime","mystery","thriller"]},
    {name: "Eternal Sunshine of the Spotless Mind", year:2004,imdb:"8.3", url:"https://www.imdb.com/video/vi2292515097?playlistId=tt0338013&ref_=tt_ov_vi",genre:["romance","sci-fi","drama"]},
    {name: "Citizen Kane", year:1941,imdb:"8.3", url:"https://www.imdb.com/video/vi568630553?playlistId=tt0033467&ref_=tt_ov_vi",genre:["drama","mystery"]},
    {name: "Dangal", year:2016,imdb:"8.4", url:"https://www.imdb.com/video/vi2094904857?playlistId=tt5074352&ref_=tt_ov_vi",genre:["action","biography","drama"]},
    {name: "Come and See", year:1985,imdb:"8.2", url:"https://www.imdb.com/video/vi129958169?playlistId=tt0091251&ref_=tt_ov_vi",genre:["drama", "thriller", "war"]},
    {name: "Singin' in the Rain", year:1952,imdb:"8.2", url:"https://www.imdb.com/video/vi2086470681?playlistId=tt0045152&ref_=tt_ov_vi",genre:["comedy","musical","romance"]},
    {name: "The Kid", year:1921,imdb:"8.2", url:"https://www.imdb.com/title/tt0012349/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=7F5BT6G4GRHGWBA2GSR3&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_100",genre:["comedy","drama","family"]},
    {name: "Bicycle Thieves", year:1948,imdb:"8.2", url:"https://www.imdb.com/video/vi36354073?playlistId=tt0040522&ref_=tt_ov_vi",genre:["drama"]},
    {name: "Full Metal Jacket", year:1987,imdb:"8.2", url:"https://www.imdb.com/video/vi3225663513?playlistId=tt0093058&ref_=tt_ov_vi",genre:["drama","war"]},
    {name: "Ikiru", year:1952,imdb:"8.2", url:"https://www.imdb.com/video/vi626900505?playlistId=tt0044741&ref_=tt_ov_vi",genre:["drama"]},
    
    
    // {name: "", year:"",imdb:"", url:"",genre:[]},
    

    
    
    // {name:"Justice League",year:2017,imdb:"6.3",url:"https://www.imdb.com/title/tt0974015/?ref_=adv_li_tt",genre:"action"},

    
   
    
    // {name:"Alone in the Dark",year:2005,imdb:"2.4",url:"https://www.imdb.com/title/tt0369226/?ref_=adv_li_tt",genre:"action"},

    // {name:"The Grand Budapest Hotel",year:2014,imdb:"8.1",url:"https://www.imdb.com/title/tt2278388/?ref_=adv_li_tt",genre:"comedy"},

    // {name:"Knives Out",year:2019,imdb:"7.9",url: "https://www.imdb.com/title/tt8946378/?ref_=adv_li_tt",genre:"comedy"},

    // {name:"The Gentlemen", year:2019,imdb:"7.8",url:"https://www.imdb.com/title/tt8367814/?ref_=adv_li_tt",genre:"comedy"},

    // {name:"Captain Fantastic", year:2016,imdb: "7.9",url: "https://www.imdb.com/title/tt3553976/?ref_=adv_li_tt",genre:"comedy"},

    
    // {name:"Police Academy", year:1984,imdb:"6.7",url: "https://www.imdb.com/title/tt0087928/?ref_=adv_li_tt",genre:"comedy"},

    // {name:"EuroTrip",year:2004,imdb:"6.6",url:"https://www.imdb.com/title/tt0356150/?ref_=adv_li_tt",genre:"comedy"},

    

    
    // {name:"Charlie's Angels",year:2019,imdb: "4.8",urk:"https://www.imdb.com/title/tt5033998/?ref_=adv_li_tt",genre:"comedy"},

    // {name:"Chick Fight",year:2020,imdb:"4.5",urk:"https://www.imdb.com/title/tt10944486/?ref_=adv_li_tt",genre:"comedy"},

    // {name:"Taxi",year:2004,imdb:"4.5",urk:"https://www.imdb.com/title/tt0316732/?ref_=adv_li_tt",genre:"comedy"},

    // {name:"Up",year:2009,imdb:"8.2",url:"https://www.imdb.com/title/tt1049413/?ref_=adv_li_tt",genre:"animation"},

    // {name:"Aladdin",year:1992, imdb:"8.0",url:"https://www.imdb.com/title/tt0103639/?ref_=adv_li_tt",genre:"animation"},

    
    
    // {name:"Shrek",year:2001,imdb:"7.8",url:"https://www.imdb.com/title/tt0126029/?ref_=adv_li_tt",genre:"animation"},

    // {name:"Moana",year:2016,imdb:"7.6",url:"https://www.imdb.com/title/tt3521164/?ref_=adv_li_tt",genre:"animation"},

    // {name:"Surf's Up",year:2007,imdb:"6.7",url:"https://www.imdb.com/title/tt0423294/?ref_=adv_li_tt",genre:"animation"},

    // {name:"Over the Hedge",year:2006,imdb:"6.7",url:"https://www.imdb.com/title/tt0327084/?ref_=adv_li_tt",genre:"animation"},

    // {name:"The Secret Life of Peds", year:2016,imdb:"6,5",url:"https://www.imdb.com/title/tt2709768/?ref_=adv_li_tt",genre:"animation"},

    // {name:"Happ Feet",year:2006,imdb:"6.4",url:"https://www.imdb.com/title/tt0366548/?ref_=adv_li_tt",genre:"animation"},

    // {name:"Garfield",year:2004,imdb:"5.0",url:"https://www.imdb.com/title/tt0356634/?ref_=adv_li_tt",genre:"animation"},

    // {name:"Meet the Spartans",year:2008,imdb:"2.8",url:"https://www.imdb.com/title/tt1073498/?ref_=adv_li_tt",genre:"animation"},

    
    // {name:"Tumbbad" ,year: 2018,imdb: "8.3",url: "https://www.imdb.com/title/tt8239946/?ref_=adv_li_tt",genre:"horror"},
    
    
    // {name:"The Call",year: 2013,imdb: "6.7",url: "https://www.imdb.com/title/tt1911644/?ref_=adv_li_tt",genre:"horror"},
    
    // {name:"Altered States",year: 1980,imdb: "6.9",url: "https://www.imdb.com/title/tt0080360/?ref_=adv_li_tt",genre:"horror"},
    // {name:"The House That Jack Built",year: 2018,imdb: "6.8",url: "https://www.imdb.com/title/tt4003440/?ref_=adv_li_tt",genre:"horror"},
    // {name:"Housebound" ,year: 2014, imdb:"6.8",url: "https://www.imdb.com/title/tt3504048/?ref_=adv_li_tt",genre:"horror"},
    
    // {name:"Child's Play",year: 1975,imdb: "5.9",url: "https://www.imdb.com/title/tt8663516/?ref_=adv_li_tt",genre:"horror"},
    // {name:"Vivarium",year: 2019,imdb: "5.8",url: "https://www.imdb.com/title/tt8368406/?ref_=adv_li_tt",genre:"horror"},
    // {name:"High Life", year:2018,imdb: "5.8",url: "https://www.imdb.com/title/tt4827558/?ref_=adv_li_tt",genre:"horror"},
    // {name:"Jigsaw 1" ,year: 2017,imdb: "5.8",url: "https://www.imdb.com/title/tt3348730/?ref_=adv_li_tt",genre:"horror"},

    
    // {name:"Hababam Sinifi",year:1975,imdb:"9.3",url:"https://www.imdb.com/title/tt0252487/?ref_=adv_li_tt",genre:"drama"},
    
    // {name:"I'm Thinking of Ending Things",year:2020,imdb:"6.6",url:"https://www.imdb.com/title/tt7939766/?ref_=adv_li_tt",genre:"drama"},
    // {name:"Contagion",year:2011,imdb:"6.7",url:"https://www.imdb.com/title/tt1598778/?ref_=adv_li_tt",genre:"drama"},
    // {name:"Rebecca",year:2020,imdb:"6.0",url:"https://www.imdb.com/title/tt2235695/?ref_=adv_li_tt",genre:"drama"},
    // {name:"The Lovely Bones",year:2009,imdb:"6.7",url:"https://www.imdb.com/title/tt0380510/?ref_=adv_li_tt",genre:"drama"},
    
    // {name:"Cuties",year:2020,imdb:"3.1",url:"https://www.imdb.com/title/tt9196192/?ref_=adv_li_tt",genre:"drama"},
    // {name:"The Room ",year:2003,imdb:"3.7",url:"https://www.imdb.com/title/tt0368226/?ref_=adv_li_tt",genre:"drama"},
    // {name:"The Butterfly Effect 2",year:2006,imdb:"4.5",url:"https://www.imdb.com/title/tt0457297/?ref_=adv_li_tt",genre:"drama"},
    // {name:"In the Land of Blood and Honey",year:2011,imdb:"4.5",url:"https://www.imdb.com/title/tt1714209/?ref_=adv_li_tt",genre:"drama"},

    
    // {name:"Baahubali 2 The Conclusion",year: 2017, imdb:"8.2",url: "https://www.imdb.com/title/tt4849438/?ref_=adv_li_tt",genre:"fantasy"},
    
    // {name:"Isle of Dogs",year: 2018,imdb: "7.9",url: "https://www.imdb.com/title/tt5104604/?ref_=adv_li_tt",genre:"fantasy"},
    // {name:"The Man from Earth", year:2007, imdb:"7.9",url: "https://www.imdb.com/title/tt0756683/?ref_=adv_li_tt",genre:"fantasy"},
    // {name:"Life of Pi",year: 2012,imdb: "7.9",url: "https://www.imdb.com/title/tt0454876/?ref_=adv_li_tt",genre:"fantasy"},
    // {name:"Harry Potter and the Prisoner of Azkaban" ,year: 2004, imdb:"7.9",url: "https://www.imdb.com/title/tt0304141/?ref_=adv_li_tt",genre:"fantasy"},
    // {name:"Yesterday 3",year: 2019,imdb: "6.8",url: "https://www.imdb.com/title/tt8079248/?ref_=adv_li_tt",genre:"fantasy"},
    // {name:"Storks", year:2016,imdb: "6.8",url: "https://www.imdb.com/title/tt4624424/?ref_=adv_li_tt",genre:"fantasy"},
    // {name:"Odd Thomas",year: 2013,imdb: "6.8",url: "https://www.imdb.com/title/tt1767354/?ref_=adv_li_tt",genre:"fantasy"},
    // {name:"The Imaginarium of Doctor Parnassus" ,year: 2009,imdb: "6.8", url:"https://www.imdb.com/title/tt1054606/?ref_=adv_li_tt",genre:"fantasy"},
    
    // {name:"Mortal Kombat", year:1995,imdb: "5.8", url:"https://www.imdb.com/title/tt0113855/?ref_=adv_li_tt",genre:"fantasy"},
    // {name:"Ice Age Collision Course",year: 2016,imdb: "5.7",url: "https://www.imdb.com/title/tt3416828/?ref_=adv_li_tt",genre:"fantasy"},
    // {name:"Pan", year:2015,imdb: "5.7", url:"https://www.imdb.com/title/tt3332064/?ref_=adv_li_tt",genre:"fantasy"},
    // {name:"Chicken Little" ,year: 2005, imdb:"5.7",url: "https://www.imdb.com/title/tt0371606/?ref_=adv_li_tt",genre:"fantasy"},
]


export default movies;