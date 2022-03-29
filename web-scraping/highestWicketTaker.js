const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);

function cb(error, response, html) {
    if(error)
        console.error('error:', error); // Print the error if one occurred
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let name = document.querySelectorAll("td.text-nowrap .small");
        let wick = document.querySelectorAll("td.text-nowrap ~ td:nth-of-type(5)");
        // let name1 ={};
        let name2 = "";
        let max = 0;
        for(let i =0;i<name.length;i++){
            // let a = name[i].textContent;
            let b = wick[i].textContent;

            if(max < b ){
                max = b;
                name2 = name[i].textContent;
            }
            
        }

        console.log(name2);
        console.log(max + " Wickets");
    }
}