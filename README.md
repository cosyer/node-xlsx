## node操作excel
目前支持写Excel的node.js模块：

- node-xlsx: 基于Node.js解析excel文件数据及生成excel文件；

- excel-parser: 基于Node.js解析excel文件数据，支持xls及xlsx格式文件；

- excel-export : 基于Node.js将数据生成导出excel文件，生成文件格式为xlsx；

- node-xlrd: 基于node.js从excel文件中提取数据，仅支持xls格式文件。

```javascript
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
```