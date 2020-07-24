/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const fs = require('fs')
const deleteMapFiles = (p) => {
  // 请实现……
  //稍微复习了一下，没用Path模块,路径上比较牵强
  fs.stat(p, (err, stats) => {
    if (stats.isDirectory()) {
      fs.readdir(p, function (err, dir) {
        if (err) {
          console.log(err)
        }
        // console.log(dir)
        let rm_files = []
        dir.forEach(name => {
          fs.stat(p+name,(err,stat)=>{
            if(stat.isDirectory()){
              deleteMapFiles(p+name+'/')
            }
          })
          if (name.endsWith('.map')) {
            rm_files.push(name)
          }
        })
        rm_files.forEach(file => {
          fs.unlink(p + file, err => {
            if (err) {
              console.log('delete ' + file + ' failed')
            }
            console.log('delete ' + file + ' success')
          })
        })
      })
    }
  })

};
deleteMapFiles('./node/playground/')
// * ------------------------------------------------

// * playground 文件夹目前的目录结构如下：

/*
playground
├── index.html
├── index.js
├── index.js.map
└── static
    ├── main.js
    ├── main.js.map
    ├── style.css
    └── style.css.map
*/

// * 调用 deleteMapFiles('./playground') ，将删除所有 map 文件
// * 然后文件结构应该如下：

/*
playground
├── index.html
├── index.js
└── static
    ├── main.js
    └── style.css
*/
