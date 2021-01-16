import { post } from './http'
import { reviseParam } from './url'

export function getTransactionsCount (data) {
  // const d = ['0x0', true]
  const data2 = reviseParam(data, 0)
  return post({
    method: 'post',
    data: data2
  })
}

export function getBlockByNumber (number, bean = true) {
  // const d = ['0x0', true]
  number = '0x' + number
  const data = [number, bean]
  const data2 = reviseParam(data, 1)
  return post({
    method: 'post',
    data: data2
  })
}

export function getBlockByHash (hashData, bean = true) {
  // const d = ['0x0', true]
  const data = [hashData, bean]
  const data2 = reviseParam(data, 2)
  return post({
    method: 'post',
    data: data2
  })
}

export function getTbTransactionByPkHash (hashData) {
  // const d = ['0x0', true]
  const data = [hashData]
  const data2 = reviseParam(data, 3)
  return post({
    method: 'post',
    data: data2
  })
}

export function getTbTransactionReceiptByPkHash (hashData) {
  // const d = ['0x0', true]
  const data = [hashData]
  const data2 = reviseParam(data, 4)
  return post({
    method: 'post',
    data: data2
  })
}

export function getTbTransactionInfo (blockHeight, transactionHash) {
  // 输入只有区块高度时，将该区块的所有交易显示出来
  if (transactionHash) {
    return getTbTransactionByPkHash(transactionHash)
  } else if (blockHeight) {
    blockHeight = parseInt(blockHeight).toString(16)
    return getBlockByNumber(blockHeight)
  }
}
