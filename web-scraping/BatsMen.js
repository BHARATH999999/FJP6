const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);

let link2 ="https://www.espncricinfo.com/";
function cb(error, response, html) {
    if(error)
        console.error('error:', error); // Print the error if one occurred
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let name = document.querySelectorAll("table.batsman .batsman-cell.text-truncate.out .small");
        link2 += name[0].href;
        console.log(link2);
        request(link2, cb1);
    }
}

function cb1(error, response, html) {
    if(error)
        console.error('error:', error); // Print the error if one occurred
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let details = document.querySelectorAll(".player-card-padding .player_overview-grid div h5");
        console.log(details[0].textContent +"\n" + details[1].textContent);
    }
}
