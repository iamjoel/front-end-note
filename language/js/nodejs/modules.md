# 常用模块
### web
* [express](https://github.com/visionmedia/express) web开发框架
* [express-group-handlers](https://github.com/louischatriot/express-group-handlers) 路由的aop，比如希望在访问某些路由之前做一些其他操作（登陆等）
* [passport](https://github.com/jaredhanson/passport) 验证用户的express中间件
* [ejs](https://github.com/visionmedia/ejs) 页面模板。可以方便的把html改写成ejs。
* [express-partials](https://github.com/publicclass/express-partials) 让Express 3.x 支持ejs的layout(<%- body %>)
* [eco](https://github.com/sstephenson/eco) 页面模板,类似ejs。与ejs的不同点是：逻辑部分用CoffeeScript而不是javascript
* [jade](https://github.com/visionmedia/jade) 页面模板 源自ruby的[haml](http://haml.info/) 比ejs优雅简洁，但把html转换成jade要花一番功夫。
* [coffeecup](https://github.com/gradus/coffeecup) 页面模板 风格有些像 jade,但里面的内容各种用coffee。
* [Mongoskin](https://github.com/kissjs/node-mongoskin) mongoDB驱动。是在[mongodb-native](https://github.com/mongodb/node-mongodb-native)的基础上做的封装。
* [mongoose](https://github.com/LearnBoost/mongoose) mongoDB驱动。需要定义数据结构。
* [mysql](https://github.com/felixge/node-mysql) mysql驱动。
* [log4js](https://github.com/nomiddlename/log4js-node) 日志。
* [cheerio](https://github.com/MatthewMueller/cheerio) 解析html文档。解析的结果可以用jQuery的写法来筛选想要的dom元素。
* [JSDOM](https://github.com/tmpvar/jsdom) 和cheerio类似。但更强大。但要在windows安装是各种麻烦。
* [nodegrass](https://github.com/scottkiss/nodegrass) 抓取某地址的页面
* [path](https://npmjs.org/package/path) 文件路径操作
* [docpad](http://docpad.org/) 静态站点生成系统，一般是用来做博客
* [wintersmith](https://github.com/jnordberg/wintersmith) 同上
* [GeoIP-lite](https://github.com/bluesmoon/node-geoip) 根据ip获得该ip所在的城市和国家。

### 数据库
* [nedb](https://github.com/louischatriot/nedb) 嵌入式数据库。不需要太多连接的小型项目可用。


### 测试
* [mocha](http://visionmedia.github.io/mocha/) 测试框架,断言库可自由选择。用coffee就要用mocha(摩卡),哈哈~
* [Jasmine](https://github.com/pivotal/jasmine) BDD测试框架
* [chai.js](https://github.com/chaijs/chai)  BDD / TDD 断言库。支持 should.js,expect.js,assert，但不支持should.js的某些写法。
* [should.js](https://github.com/visionmedia/should.js) 断言库。可读性很强。
* [expect.js](https://github.com/LearnBoost/expect.js) 断言库。可读性很强，在should.js基础上构建。
* [zombie.js](http://zombie.labnotes.org/) 构造浏览器进行测试(headless browser)
* [phantomjs](http://phantomjs.org/) 无头的webkit
* [uiTest](https://npmjs.org/package/uitest) 前端UI测试框架

### 工具
* [nodemon](https://github.com/remy/nodemon/) 监视js文件的变化，文件变化时，重启服务。在web开发是很有用。[supervisor](https://npmjs.org/package/supervisor) 也是这么做。
* [anywhere](https://npmjs.org/package/anywhere) 可以在任意文件目录构建静态服务器
* [node-exif](https://github.com/gomfunkel/node-exif) 读取图片的元信息 (很多读图片元信息的node库需要安装一些软件，这个不用)
* [http-proxy](https://github.com/nodejitsu/node-http-proxy) 反向代理

### 更多node库的整理
* [jster](http://jster.net/)
* [joyent-nodeModules](https://github.com/joyent/node/wiki/Modules)
