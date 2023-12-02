# 我的简历

熟悉全栈开发(前端/后端/数据库), 经历完整前端发展历史, 不受框架/技术栈局限, 关注社区最新动态(deno/bun).

- 坐标：浙江杭州
- 求职意向：`技术主管(偏前端)` / `前端研发工程师+`
- 技术文章：https://juejin.cn/user/1468603262311326/posts

## 基本信息

- 姓名：王春岩
- 手机：18815285492（浙江宁波）
- 邮箱：jobs@robolt.uu.me

## 工作简历

### `2021.01-至今` 字节跳动(杭州) 高级前端工程师

本人在职期间 5 次(半年/全年)**绩效评级均为 M+**

- 获得**字节范~务实敢为奖**
- 获得新人系统**资深导师勋章**，辅助 2 名实习 + 3 名校招员工转正
- 获得稀土掘金开发者社区**技术先锋证书**

#### 飞书 - 财务业务 `2023.07-至今`

核算团队小组前端负责人，带 3 人团队, 负责核算引擎/报账平台/质量平台等业务前端开发. 字节内部财务系统, 支撑字节大体量业财一体化.

项目成就：由于后台系统多为表格场景和表单场景, 本人**通过业务组件封装 + 页面模板 cli, 将普通列表页开发工时缩短 80%**.

- 本人参与业务组件库建设, 对于表格场景, 作为虚拟小组负责人, 基于字节内基础组件库, 进一步封装业务表格组件. 相较于基础组件新增拖拽排序(react-dnd)/常用批量操作等能力, 集成常用列类型(人员展示/状态展示等). 组件易用可扩展, 透传基础组件全部能力, 避免业务不满足时重复封装业务组件.
- 实现的 cli 用于模板创建新页面, 在团队协作中, 避免新人因从头熟悉组件库带来的开发耗时. 页面模板通过模块拆分 & 状态管理, 易读已扩展.
- 「cli 中模板创建文件方案」 技术分享: [https://juejin.cn/post/7307260032583663626](https://juejin.cn/post/7307260032583663626)
  - 本人以业务实现作为首要目标, 避免重复造轮子导致技术产出喧宾夺主.

#### 飞书 - 审批应用 `2021.01-2023.07`

负责应用架构设计/业务研发. 飞书审批应用, 对于使用飞书的企业客户, 可以在飞书内发起审批申请 & 执行审批操作. 

##### `项目1`: PC 端审批中心统一

项目介绍: 字节内各个内部系统都各自开发自己的审批能力, 同时又存在飞书审批中心(跟随飞书商业化)和字节内部的 OA 审批中心, 目标都是集成其他系统的单据. 我们通过合并审批中心入口, 使得飞书审批中心成为唯一入口, 统一交互, 提升审批效率.

项目成就:

- 全新三栏式设计, 内嵌三方审批单据, 统一了列表体验. 基于双向通讯, 实现开放 sdk 为内嵌三方单据提供更多能力.
- 支持从飞书消息打开审批应用时, 直接定位到指定单据. 通过列表栏和详情栏的按需加载, 实现提升来自消息直接打开详情时的加载体验.
- 支持单据托管能力, 新增的三方系统无需开发自己的审批详情, 在飞书审批托管审批数据, 可以使用飞书审批一致的详情交互
- 业务上: 审批人处理单量显著提升, 多数访谈用户认为对审批效率有提升, 减少了应用跳出率.

##### `项目2`: PC 端小程序重构为 web

项目介绍: 为了审批系统可以反嵌到三方系统中, 我们将飞书小程序重构为飞书 web 应用, 支持与反嵌版本同构.

项目成就:

- 本人负责 web 方案的架构设计, 基于 vite 脚手架, 接入字节内请求/埋点/监控等基础能力方案.
- 通过减少应用首屏代码执行, 提高应用的启动性能.
  - 「异步 JSON parse」 技术分享: [https://juejin.cn/post/7260403622495731749](https://juejin.cn/post/7260403622495731749)
  - 「通过 Promise 方案优化 React 应用」 技术分享: [https://juejin.cn/post/7268187099525349431](https://juejin.cn/post/7260403622495731749)
- 迁移到 monorepo 仓库 & 多个 monorepo 仓库融合
- 基于自定义 jsx runtime 处理, 使用 jsx 作为工具提升效率.

### `2015.01-2021.01` 杭州大搜车汽车服务有限公司 资深前端工程师

小组前端负责人, 带 5 人左右团队. 负责企业后台系统 & 微店/营销工具等 c 端 h5和小程序. 用于二手车企业建站, 客户留资, 以及进销存等企业管理.

项目成就：

- 后台建站系统，模块化定制，通过可视化拖拽 & 配置生成个性化页面，可用于微店或营销活动页面
- 基于小程序开放平台的第三方平台，用于车商企业用户的小程序批量发布
- 企业端营销工具，可便捷生成活动海报分享到朋友圈，降低了获客成本，申请专利号：CN201911140368.7、CN201911140849.8、CN201910848980.3
- C 端手机版微店，APP 级体验优化，车商企业用户 1万+, 日均 uv 10 万+, pv 100 万+
- 卖车比价工具，通过模拟微信交互式界面，提高用户留资率，多端同步开发(web / h5 / APP / 微信小程序 / 支付宝小程序)，webview 内嵌 H5 JSSDK 调用的统一封装
- 大搜车集团官网，web / h5自适应, 中英文切换, 基于 Nuxt 编译时生成静态 html 实现 SEO 优化
- 基于 node 开发访问时编译的前端服务，基于 cdn 缓存防止重复编译

### 毕业前，其他非正式工作

教育信息：本科 `2011.09-2015.06` 宁波工程学院 电子与信息工程学院 网络工程

* `2013.10-2015.06` TEDxMoonLake(后改名为 TEDxNingbo)成员 前端工程师(志愿者性质)
* `2012.01-2012.10` 火狐校园大使(志愿者性质)

## 开源项目

[![vanilla-jsx/vanilla-jsx - GitHub](https://gh-card.dev/repos/vanilla-jsx/vanilla-jsx.svg)](https://github.com/vanilla-jsx/vanilla-jsx)
[![BoltDoggy/parcel-plugin-vue - GitHub](https://gh-card.dev/repos/BoltDoggy/parcel-plugin-vue.svg)](https://github.com/BoltDoggy/parcel-plugin-vue)

[1]: http://boltdoggy.com "BoltDoggy.com"
[3]: http://github.com/BoltDoggy "Bolt"

