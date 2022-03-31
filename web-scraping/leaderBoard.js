const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
let leaderboard = [];

request(link, cb);

function cb(error, response, html) {
    if(error)
        console.error('error:', error); // Print the error if one occurred
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScoreCards = document.querySelectorAll('a[data-hover="Scorecard"]');

        for(let i =0;i<allScoreCards.length;i++){
            let link = allScoreCards[i].href;

            let completeLink = "https://www.espncricinfo.com" + link;

            // console.log(completeLink);

            request(completeLink,cb1);
        }

    }
}

function cb1(error,response,html){
    if(error)
        console.error('error:', error); // Print the error if one occurred
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsMenRow = document.querySelectorAll(".table.batsman tbody tr");

        for(let i = 0;i<batsMenRow.length;i++){
            let cells = batsMenRow[i].querySelectorAll("td");

            if(cells.length == 8){
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let balls = cells[3].textContent;
                let fours = cells[5].textContent;
                let sixes = cells[6].textContent;

                // console.log(name,runs,balls,fours,sixes);
                processPlayer(name,runs,balls,fours,sixes);
            }
        }
    }
}


// processPlayer('Rohit','15','4','2','4');
// processPlayer('Virat','50','20','4','3')
// processPlayer('Rohit','40','20','1','2');


function processPlayer(name,runs,balls,fours,sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for(let i=0;i<leaderboard.length;i++){
        let playerObj = leaderboard[i];
        if(playerObj.Name == name){
            //will do some work here
            playerObj.Runs+=runs;
            playerObj.Balls+=balls;
            playerObj.Fours+=fours;
            playerObj.Sixes+=sixes;
            return;
        }
    }
    // code coming here means we did not find our player inside leaderboard
    let obj = {
        Name:name,
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes
    }
    leaderboard.push(obj);
    // console.log(leaderboard);
}


