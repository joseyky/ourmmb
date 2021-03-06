# 慢慢买综合实战

## 前言为什么要做这个综合实战项目
1.做这个项目把之前知识点串联起来将知识转换为项目经验 
2.体会公司项目开发的流程 将来去公司能够和后端程序猿好好配合快速上手项目
3.无论是将来面试还是工作都是自己能力和工作经验的表现
## 1.搭建慢慢买项目结构
```
├─ /slowlybuy/ ··················· 项目所在目录
└─┬─ /css/ ······················· 我们自己的CSS和less文件
  ├─ /fonts/ ······················使用到的字体文件
  ├─ /images/ ·····················使用到的图片文件
  ├─ /js/ ························ 自己写的JS脚本
  ├─ /lib/ ······················· 从第三方下载回来的库【只用不改】
  ├─ /favicon.ico ················ 站点图标
  └─ /index.html ················· 入口文件
```
## 2.使用svn创建服务器进行项目版本控制
1. 组长安装svn服务器创建一个项目的仓库并创建好组内所有成员的账号将仓库的地址发给所有成员
2. 所有成员安装svn客户端和svn汉化包
3. 所有成员使用svn检出组长给的仓库代码
4. 每当一天工作完成或者某个功能块完成后提交一次代码

## 3.划分项目模块和分工
1. 组长根据成员能力划分模块（模块来源项目文档）
	```
	孟翔宇：负责index	bijia	inlanddiscount
	朱红伟：负责baicai	moneyctrl
	於科远：负责moneyproduct	brand	couponproduct
	邢璇：	负责sitenav	brandTitle	discount
	王文平：负责category	productlist
	王勇智：负责coupon	gsproduct
	
	```
2. 成员根据各各模块开始安排时间制定每天任务目标
3. 组长每日查看成员任务完成情况进行适当调整

## 4.理解项目各各模块需求
1. 成员根据组长安排的模块找到对应项目文档的介绍理解项目模块的需求
2. 根据项目需求搭建自己模块需要依赖的文件和模块的骨架

## 5.按照需求实现页面效果
1. 成员根据模块的页面需求先实现页面的基本布局和特效

## 6.根据页面需求和API文档介绍实现数据的交互
1. 理解模块的交互功能需求
2. 学会看懂API文档并调用api测试效果
3. 根据API返回的数据去实现交互功能需求

## 7.测试各模块功能实现情况
1. 各成员完成模块功能后测试功能
2. 确认模块功能完善后提交代码到svn仓库

## 8.整合打包项目发布
1. 组长最终整合所有模块整体和成员一起整体测试所有模块功能细节完善后发布到网上

## 总结

### 通过这几天的综合实战 需要大家掌握的是

1. 学会理解项目的需求和交互

2. 学会和后台程序员以及跟同事之间进行沟通交流

3. 学会看懂并调用后台给的API实现功能 并且看不懂的情况学会询问后台

4. 学会整个项目的开发流程和项目周期