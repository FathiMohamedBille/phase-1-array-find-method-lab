function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}
//Example
const record=[
 {year: "2015", result: "W"},
 {year:"2014", result: "N/A"},
 {year: "2013", result: "L"},
 //...
];
console.log(superbowlwin(record));
//Output: "2015"