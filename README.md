#### 项目启动

    1、yarn install
    2、yarn start test || yarn start dev  // test 使用测试配置项启动  dev 使用开发配置项启动
    3、yarn build test || yarn build dev  // test 使用测试配置项打包  dev 使用开发配置项打包

#### 添加webpack进度条

```javascript
    yran add webpackbar


    webpack.config.js中修改

    const WebpackBar = require('webpackbar');
    module.exports 下 return 中 一级 plugins 中添加
    // 添加 进度条
    new WebpackBar()

```

#### 添加启动配置项

```javascript
    说明：
    yarn start test 当前启动 测试环境
    yarn start dev 当前启动 开发环境
    根据 不同的变量名 动态写入不同的 环境变量配置


    在 项目根目录下的 script 文件夹中的 start.js 和 build.js 中头部添加



    /*== 添加项目启动文件配置，开始 ====================================================================*/
    // 判断 配置文件是否存在
    if(process.argv.length < 3){
      throw new Error('启动参数不正确!');
    }
    // 添加配置文件写入
    if(process.argv.length >= 3){
      let configKey = process.argv[2];
      try {
        let path = require('path');
        let configFile = require(`../src/utils/shellConfig/config.${configKey}.js`);
        let writeConfigFun = require('./upDateItems');
        // 路径开头的/不会影响拼接，..代表上一级文件，拼接出来的结果是：E:/webpack-react/public/config.js
            writeConfigFun(configFile, path.join(__dirname,'..', 'public/config.js'));
      }catch (e) {
        throw new Error('启动的配置文件不存在!');
      }
    }
    /*== 添加项目启动文件配置，结束 ====================================================================*/

    说明：
    process.argv 是cmd命令执行的名称 返回值为数组 官方称为[ Node.js 进程的有关信息 ]
    数组的第一个元素process.argv[0]——返回启动Node.js进程的可执行文件所在的绝对路径
    数组的第二个元素process.argv[1]——为当前执行的JavaScript文件路径       
    数组的第三个元素process.argv[2]——为当前 附带的 参数
    

    当然可能携带的参数不止一个 所以要根据个人需要进行配置

    实现原理：
    1、获得 Node.js 进程的有关信息 和 定义的参数
    2、判断 当前进程信息数组 是否 小于3 如果小于的话 说明 没有携带约定的参数 并 停止进程 抛出异常
    3、判断 当前 约定的参数 是否能够查找到与设定的 配置文件
    4、拼接 项目工程约定的配置文件目录
    5、引用 writeConfigFun 方法 进行配置文件的写入
    6、在 public中 新建 config.js 本文件作为 项目工程配置文件
    7、在src/utils目录下新建 shellConfig 文件夹 并新建 config.dev.js 和 config.test.js 作为约定配置文件名
    

    writeConfigFun 方法说明： 
    1、方法依赖于 node 的 fs 模块
    2、创建配置文件格式
    3、读取文件，期间如果没有找到约定的文件 那么自动创建 并写入数据 如找到文件 则直接写入

    项目工程配置文件引用说明：
    1、在 public 中的 index.html 中 使用 <script src='./config.js'></script> 进行文件的引用
    2、在项目任意文件中 直接可用 使用 console.log(webConfig) 即可输出 配置文件
```
