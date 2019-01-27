var fs = require("fs");
// 都有同异步
// 删除目录文件
// fs.unlink('./test/test.js', function(err) {
//     if (err) {
//         throw err;
//     }
//     console.log('成功删除了 /test');
// });

// 异步读取 需要toString否则显示的时原始二进制数据所在的缓存区内容 也可以设置utf-8编码，这样就不需要toString
// fs.readFile('avatar.js', function (err, data) {
//       if (err)    return console.log(err);
//       console.log('异步读取：' + data.toString());
//   })
// 同步读取
// var data = fs.readFileSync('avatar.js');
// console.log('同步读取：' + data.toString());
// console.log('程序执行完毕。');

// 写入文件（如果文件不存在会创建一个文件）
// 写入时会先清空文件 也可追加配置{ 'flag': 'a' } 追加w为清空
// fs.writeFile('./test/test.js', 'test test', function(err) {
//     if (err) {
//         throw err;
//     }
//     console.log('Saved.');
// });

// 还有open close write read方法
// fs.read和fs.write功能类似fs.readFile和fs.writeFile()，但提供更底层的操作(流对象?)，实际应用中多用fs.readFile和fs.writeFile。
// 使用fs.read和fs.write读写文件需要使用fs.open打开文件和fs.close关闭文件。

// 打开文件
// fs.open('./test/test.js', 'r+', function(err, fd) {
//     if (err) {
//         throw err;
//     }
//     console.log('open file success.');
//     console.log(fd) // 3 文件描述符
//     // 这里还有个截取文件可以试试
//     fs.ftruncate(fd,8,function(err){
//          if(err) throw err;
//              var buffer = new Buffer(255);
//     // 读取文件
//     fs.read(fd, buffer, 0, 10, 0, function(err, bytesRead, buffer) {
//         if (err) {
//             throw err;
//         }
//         // 打印出buffer中存入的数据 bytesRead 字节数 缓存区
//         console.log(bytesRead, buffer.slice(0, bytesRead).toString())
//         // 关闭文件
//         fs.close(fd);
//     });
//     })

// });

// 打开文件
// fs.open('./test/test.js', `w`, function(err, fd) {
//     if (err) {
//         throw err;
//     }
//     console.log('open file success.');
//     var buffer = new Buffer('cosyer');
//     // 写入文件
//     fs.write(fd, buffer, 0, 6, 0, function(err, bytesWritten, buffer) {
//         if (err) {
//             throw err;
//         }
//         console.log('write success.');
//         // 打印出buffer中存入的数据
//         console.log(bytesWritten, buffer.slice(0, bytesWritten).toString());

//         // 关闭文件
//         fs.close(fd);
//     });
// });

// 创建文件夹目录 目录不存在
// fs.mkdir('./test', function(err) {
//     if (err) {
//         throw err;
//     }
//     console.log('make dir success.');
// });

// 读取目录
// fs.readdir('./test', function(err,files) {
//     if (err) {
//         throw err;
//     }
//     // files是一个数组
//     // 每个元素是此目录下的文件或文件夹的名称
//     console.log(files); // ['test.js']
// });

// 删除目录 目录为空
// fs.rmdir('./test',function(err){
//     if (err) {
//         throw err;
//     }
// })

// 判断目录存不存在
// fs.exists('./test',function(exists){
//     if(exists){
//        console.log("路径存在")
//     }
// })

// 文件中追加写入
// fs.appendFile('./test/test.js',"test test","utf-8",function(err){
//     if(err) throw err;
// })

// 同理
// fs.writeFile('./test/test.js',"juice",{ 'flag': 'a' },function(err){
//     if(err) throw err;
// })

// 异步打开文件
// fs.stat("./test/test.js",function(err,stats){
//     console.log(stats.isFile()); // 是否是文件判断
// })

// 复制文件
function copyIt(from, to) {
  fs.writeFileSync(to, fs.readFileSync(from));
  //fs.createReadStream(from).pipe(fs.createWriteStream(to));大文件复制
}
// in law
copyIt("./test/test.js", "./test/cp.js");
