/**
 * Created by windows on 2016/11/6.
 */
var express = require('express');
var router = express.Router();

/* GET about */
router.get('/',function(req,res,next){
  //引用刚刚创建的视图：./views/about.jad文件
  res.render('home',{title:'Students System'});
});

module.exports = router;