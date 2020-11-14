const Mock = require('mockjs')

let id = Mock.mock('@id')

console.log(id)

let obj = Mock.mock({
    id:'@id',
    name:'@name'
})
console.log(obj)

let obj1 = Mock.mock({
    id:'@id()',
    name:'@name()',
    date:'@date()',
})

console.log(obj1)