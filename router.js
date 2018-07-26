// 路由模块
// 一,导包
var express = require('express');
var user = require('./controller/c_user');

// 二,实例化对象
var router = express.Router();

// 三,监听请求,实现处理函数
// 登录页面展示
router.get('/signin', user.showSignin)
		.post('')

// 四,导出
module.exports = router;