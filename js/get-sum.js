/**
 * @description 求范围内（开区间） 3 的倍数的数字之和
 * @param {number[]} arr 排序或乱序的数组
 * @param {number} start 开始范围
 * @param {number} end 结束范围
 * @returns {number} 返回和
 */
const getSumOfTriple = (arr, start = 0, end) => {
  // 请实现……
  let arr_filtered=arr.filter((value, index, array) => {
    if ((start < value < end===undefined?end:Number.MAX_SAFE_INTEGER)&&value%3===0) {
      return value
    }
  })
  return arr_filtered.reduce((pre,cur)=>{
    return pre+cur
  })
};

// * ---------------- 实现的效果：

{
  const arr = [5, 8, 3, 9, 4, 7, 1, 2, 6];

  //          [      3  9              6]

  console.log(getSumOfTriple(arr)); // => 18
}

{
  // * arr = [0, 7, 14, 21, ... , 987, 994]
  const arr = Array.from({ length: 143 }, (e, i) => i * 7);

  // 203, 210, 217, 224, 231, 238, ..., 455, 462, 469, 476, 483, 490, 497
  //      210            231       ...       462            483

  console.log(getSumOfTriple(arr, 200, 500)); // => 4851
}
