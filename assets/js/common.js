/*
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2020-12-09 00:25:11
 */
/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}



// 下面使用方式看下方
export function _debounce(fn, wait) {
  let time = null;
  return function () {
      let _self = this;
      let _ags = arguments;
      clearTimeout(time)
      time = setTimeout(function () {
          time = null
          fn.apply(_self, _ags)
      }, wait)
  }
}

export function timeFamat(n = 'y') {
  let date = new Date;
  let year = date.getFullYear();
  let month = date.getMonth() + 1
  if(n == 'y') {
    return year
  } else if(n == 'm') {
    return month
  }
}