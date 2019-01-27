var xlsx = require("node-xlsx");
var fs = require("fs");

var data = [
  {
    name: "sheet1",
    data: [
      ["ID", "Name", "Score"],
      ["1", "Michael", "99"],
      ["2", "Jordan", "98"]
    ]
  },
  {
    name: "sheet2",
    data: [["AA", "BB"], ["23", "24"]]
  }
];

// 写xlsx
var buffer = xlsx.build(data);
fs.writeFile("./resut.xlsx", buffer, function(err) {
  if (err) throw err;
  console.log("Write to xls has finished");

  // 读xlsx
  var obj = xlsx.parse("./" + "resut.xlsx");
  console.log(JSON.stringify(obj));
});

// fs操作
// var fs = require('fs');
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets');
// }
// var writeName = './assets/index.js';

// var writer = fs.createWriteStream(writeName);
// writer.write("/n")
