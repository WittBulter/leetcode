const hand = [{
  color: [1, 2, 3, 4],
  effect: [],
},{
  color: [2, 3],
  effect: [],
},{
  color: [1, 3],
  effect: [],
}]
const handCount = [{
  name: 1,
  nums: 2,
},{
  name: 2,
  nums: 2,
},{
  name: 3,
  nums: 3,
},{
  name: 4,
  nums: 1,
}]

// 一张2 两张3
const deal = [2, 3, 3]

const well = () => {
  handCount.sort((pre, next) => pre.nums - next.nums)
  
  
}