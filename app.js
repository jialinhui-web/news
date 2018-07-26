// 入口文件
// 一,导包
var express = require('express');
var router = require('./router');
const bodyParser = require('body-parser');

// 二,配置包
var app = express();
app.use(bodyParser.urlencoded({ extends: false }));
app.engine('html', require('express-art-template'));
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

// 三,挂载路由
app.use(router);

// 四,监听端口
app.listen(12345, ()=>{
	console.log('run -----')
})