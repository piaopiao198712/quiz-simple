/**
 * @description 用正则获取 URL 中的 host，一定要用正则哦
 * @param {string} url 完整的url
 * @returns {string} 返回 url 中的 host
 */
const getHostName = (url) => {
  // 请实现……
  let reg=/\/{2}([^/]*)\//
  if(reg.test(url)){
    // console.log(url.match(reg))
    return url.match(reg)[1]
  }
  //在//和/之间
  //很忧伤，不能同时作用于`https://help.github.com/cn/github`    `help.github.com/cn/github`  `https://help.github.com`
};

// * ---------------- 实现的效果：
{
  console.log(getHostName(`https://help.github.com/cn/github`)); // => `help.github.com`
  // console.log(getHostName(`help.github.com/cn/github`)); // => `help.github.com`
  // console.log(getHostName(`https://help.github.com`)); // => `help.github.com`
}
