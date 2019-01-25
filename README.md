# 职场简历

> 理性主义者，爱科幻，爱探索。

* 求职意向: `技术主管(偏前端)` / `前端研发工程师+`

## 基本信息

* 姓名：王春岩
* 手机：18815285492（浙江宁波）
* 地址：浙江省杭州市五常大道附近某小区
* 邮箱：jobs@robolt.uu.me

## 技能树

```
(0)['constructor']['constructor']('return ++[[]][+[]];')();
```

![https://www.codewars.com/users/Bolt](https://www.codewars.com/users/Bolt/badges/micro)

* HTML - 基础必备技能
	* (jade / pug) / (mustache / handlebars) / ejs - 曾经熟练使用级别
* CSS - 基础必备技能
	* __less - 熟练使用级别__
	* postcss - 能够集成至各类脚手架
		* cssnext - 尝鲜使用级别
* Javascript - 基础必备技能
	* workflow
		* __npm script - 熟练使用级别__
		* gulp - 熟练使用级别
		* grunt - 尝鲜使用级别
	* bundler / module loader
		* parcel - 略读源码级别, 实现插件
			* [github:BoltDoggy/parcel-plugin-vue](https://github.com/BoltDoggy/parcel-plugin-vue) - star 220+
		* browserify - 实现原理分析级别
		* __webpack - 熟练使用级别__
		* rollup - 尝鲜使用级别
		* ~~requirejs / seajs - 曾经熟练使用, 现不推荐使用~~
	* framework
		* __Vue - 精通使用级别__
			* Nuxt - 傻瓜式框架
		* ~~Angularjs@1 - 曾经精通使用级别, 但弃用很久~~
		* React - 尝鲜使用级别, 曾协助朋友入门此框架
			* Next - 尝鲜使用级别, 曾协助朋友入门此框架
			* RN - 尝鲜使用级别
		* Angular(>2) - 尝鲜使用级别
	* librarys
		* jquery - 曾经精通使用级别, 仍能快速入手
		* lodash / underscore - 按需使用级别
		* ueditor - 根据业务定制化使用
		* ... - 尝鲜使用级别
	* superset
		* __ES6 / ES next - 熟练使用级别__
			* babel - 能够集成至各类脚手架
		* typescript - 尝鲜使用级别
		* flow - 尝鲜使用级别
	* NodeJS Server - 可以做一些开发环境的工具, 未尝试在生产环境长期稳定运行的大型服务
		* __express - 实现过一个前端资源动态生成服务用于生产环境__, 使用 CDN 缓存, 一般不会出现高并发请求
		* koa - 前端资源动态生成服务的重构版, 未用于生产环境
	* Other
		* 微信小程序 - 尝鲜使用级别, 曾协助朋友修复 Bug
			* wepy - 尝鲜使用级别, 曾协助朋友修复 Bug
		* 微信小游戏 - 尝鲜使用级别
		* electron - 尝鲜使用级别
		* nwjs - 尝鲜使用级别
* 其它客户端开发
	* iOS - 尝鲜使用级别, IDE 使用入门, 命令行编译, 模拟器启动
	* 安卓 - 尝鲜使用级别, IDE 使用入门, 命令行编译, 模拟器启动
* 服务端开发
	* ~~PHP - 曾经熟练使用级别~~
	* Java - 大学课程, 入门级别
* 服务器运维
	* nginx - 尝鲜使用级别, 个人云服务器, TEDxNingbo.org 日常运维
		* HTTPS / 反向代理 / 重定向
	* apache - 尝鲜使用级别
		* XAMPP - PHP 本地环境快速部署
	* SQL 类 - 大学课程, 入门级别
	* MongoDB - 曾经尝鲜学习级别
* ... - 快速学习, 立即投入使用

## 工作信息

### 杭州大搜车汽车服务有限公司

* `2015.01-现在` 杭州大搜车汽车服务有限公司 前端开发工程师

项目成就

> 公司运营为车商建站(S端)
> 	=> 车商操作编辑后台(B端)
> 		=> 买车用户访问车商网站(C端)

> 公司运营发布活动(S端活动): 面向车商(B端) / 面向买车用户(C端)
>
> 公司运营发起活动(S端)
> 	=> 车商使用编辑后台启用活动(B端活动)
> 		=> 买车用户访问车商活动(C端)

> 公司运营编辑运营文章(S端)
> 	=> 车商转载/改编运营文章(B端运营)
>		=> 买车用户访问车商网站/公众号(C端)

* 车商微店前端(车商网站手机版) - 日均 uv 10 万+, pv 100 万+
	* 新版车辆列表页/详情页 - APP 级体验
		* 代码懒加载优化 / 图片懒加载优化
		* vue-router history mode, 无刷新跳转
		* 本地数据存储, 无加载等待体验
	* 微店首页 - 模块化定制, 每家车商独具个性
		* webpack code split, 根据数据按需加载不同模块
		* 后台可视化编辑界面
* 其它项目
	* 车商网站前端
	* 车商网站微店编辑后台
	* 公司内网文章编辑器定制
	* 车商活动页面

技术成就

* 基于 `nodejs` 的前端资源动态生成服务
	* ~~前期用于 jade / less / commonjs 的自动化编译~~
		* 使用本地编译 + nginx 托管后, 本方案废弃
	* 目前仍用于各车商网站的不同主题颜色的样式自动化编译
* 基于公司定制 vue-cli 的定制 template 脚手架
	* 加入 `px2rem` + `lib-flexible`
* `gulp` + `browserify` 前端脚手架(已弃用)

管理成就

* 由于入职较早, 辅助新人熟悉公司项目
	* 截止到 2018.01 小组在职前端 5 人.
* [公司业务外]
	* 和另一个小伙伴(目前已离职) 创办公司狼人杀社团
	* 运营至今, 截止到 2018.01 群成员 130+, 每周不定期活动

### 非正式工作

* `2013.10-2015.06` TEDxMoonLake(现TEDxNingbo)成员 前端工程师(志愿者性质)
	* `2015.06-现在` tedxningbo.org 网站/域名运维相关(志愿者性质)
* `2012.01-2012.10` 火狐校园大使(志愿者性质)

## 教育信息

* 本科 `2011.09-2015.06` 宁波工程学院 电子与信息工程学院 网络工程
	* `2013.12` 宁波市“锐捷杯”网络配置大赛，通过校赛，市赛参与奖
	* `2012.12` 《宁波市智慧产业人才基地》证书 企业级应用框架技术
	* `2012.06` 《Bye！IE6》暑期社会实践 获院重点 团队创始人+负责人
* 普高 `2008.09-2011.06` 阳谷第一中学

## 更多信息

* 个人网站：[http://BoltDoggy.com][1]
* 微博：[@BoltDoggy][2]
* GitHub：[@BoltDoggy][3]



[1]: http://boltdoggy.com "BoltDoggy.com"
[2]: http://weibo.com/clbolt "新浪：@BoltDoggy"
[3]: http://github.com/BoltDoggy "Bolt"
