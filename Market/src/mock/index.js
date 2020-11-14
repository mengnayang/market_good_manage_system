const fs = require('fs')
const path = require('path')
const Mock = require('mockjs')
const JSON5 = require('json5')

function getJSONFile(filepath) {
    var json = fs.readFileSync(path.join(__dirname,filepath),'utf-8')
    return JSON5.parse(json)
}

module.exports = function(app) {
    app.get('/staff/user/userInfo',function(req,res){
        var json = getJSONFile('./userInfo.json5')
        res.json(Mock.mock(json))
    })
}