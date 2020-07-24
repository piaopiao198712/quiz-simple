// * 代码开发过程中有一个常见的技术需求，对简单的数据对象进行克隆
// * 那么你实际是怎么做的？

// * ---------------- 解决下文中缺少 clone 函数的问题……
// 在这里写代码……
const clone = function (obj) {
  let c_obj
  if (!(obj instanceof Object)) {
    c_obj = obj
  } else if (Object.prototype.toString.call(obj).toLowerCase().indexOf('array')>0) {
    c_obj = []
    for (let item of obj) {
      c_obj.push(clone(item))
    }
  } else if(Object.prototype.toString.call(obj).toLowerCase().indexOf('function')>0) {
    c_obj = obj
  }else if (Object.prototype.toString.call(obj).toLowerCase().indexOf('regexp')>0) {
    let xiushi = ''
    xiushi += obj.multiline ? 'm' :''
    xiushi +=  obj.global ? 'g' : ''
    xiushi += obj.ignoreCase ? 'i' : ''
    c_obj = new RegExp(obj.source, xiushi)
  } else if (Object.prototype.toString.call(obj).toLowerCase() === '[object object]') {
    c_obj = {}
    for (let key in obj) {
      c_obj[key] = clone(obj[key])
    }
  }
  return c_obj
}
// let a = [1,3,7]
// let b = clone(a)
// console.log(b)
//脑抽了，indexOf那里卡老半天
//实现了基本数据类型，引用数据类型（普通对象，函数，正则，数组）的简单深拷贝
// * ---------------- 实现的效果：

{
  const data = {
    person: [
      {
        id: 114514,
        age: 24,
        type: 'student',
        reg:/asd/gi,
        fn:function(){
          console.log('i am fn')
        }
      },
    ],
  };

  const mirrorData = clone(data);
  mirrorData.person[0].age = 19;

  console.log(mirrorData.person[0].age === 19);
  console.log(data.person[0].age === 24);
  console.log(mirrorData,data)
}
