/*
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-12-09 00:25:55
 * @LastEditors: Bruce Feng
 * @LastEditTime: 2020-12-21 15:19:09
 */
/**
 * xiegaolei
 */
import { objectMerge } from './common'

// 递归格式化成多维数组
function listToTreeMulti(list, root = 0, pk = 'id', pid = 'pid', child = 'children', other = null) {
  const tree = []
  if (list) {
    list.forEach(item => {
      if (item[pid] === root) {
        if (other !== null) {
          item = objectMerge(item, other)
        }
        const children = listToTreeMulti(list, item[pk], pk, pid, child, other)
        if (children.length) {
          item[child] = children
        }
        tree.push(item)
      }
    })
  }
  return tree
}

function getParentsId(list, id, pk = 'id', pid = 'pid') {
  let tree = []
  if (list) {
    list.forEach(item => {
      if (item[pk] === id) {
        tree.unshift(item[pid])
        const parent = getParentsId(list, item[pid], pk, pid)
        if (parent.length) {
          tree = tree.concat(parent)
        }
      }
    })
  }
  return tree
}

// 递归修改值
function upadteArr(arr, attr, val, source) {
  if (arr) {
    arr.map(item => {
      if (item[attr] === val) {
        objectMerge(item, source)
      } else {
        upadteArr(item.children, attr, val, source)
      }
    })
  }

  return arr
}

const tree = {
  listToTreeMulti,
  getParentsId,
  upadteArr
}

export default tree

