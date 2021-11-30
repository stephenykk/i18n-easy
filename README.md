# i18n-easy
基于 [i18n-ally](https://github.com/lokalise/i18n-ally) 进行定制，增加所需功能

新增/修改的功能:
- 支持js格式的语言文件（*兼容旧项目*）
  ```js
    // zh-CN.js
    export default {
      hello: '你好'
    }
  ```
- 目录结构为扁平结构时，支持语言文件带额外的后缀
  ```sh
  - locales
    zh-CN.js
    zh-CN.user.js
    zh-CN.login.js
    en-US.js
    en-US.detail.js
  ```
- 扩展自动识别的语言目录，增加 `-local`, `-remote`后缀
  `i18n-ally`默认自动识别目录 `locale`, `locales`, `language`, `languages`, `i18n`, `messages`
  上述目录加后缀 `-local` `-remote` 也自动识别为语言目录，如: `language-local`, `language-remote`

- 支持远程语言文件加载
  在插件初始化前，如配置了 `i18n-easy.remoteApis` 则加载远程语言文件， *注意 配置在工作区*

- 支持语言文件导出excel
  `ctrl + shift + p` 打开命令面板，输入命令 `i18n-easy.output-excel` 选择语言目录，导出中文语言文件为excel格式

- 当前文档自动提取语言key功能修复
  由于使用缓存，多次重命名key，会出现替换位置错误的问题；vue文件 `name: "DemoComponent"` 被错误提取修复
  > 注意: 由于取消缓存，重命名key会比较慢，稍微等待一下

- 检测当前项目使用框架兼容 `vue-i18n` 为外部依赖的情况
  package.json 包含 `vue` 或 `@vue/cli-service` 也判断为vue框架的项目

[i18n-ally](https://github.com/lokalise/i18n-ally) 功能非常的全面和丰富，源码也很值得学习；

实用功能:

- 提取文案, 自动文案注释, 点击跳转到语言文件
  语言key显示为翻译文案，*再也不用自己在代码里加 文案注释* 
  ![annotation](https://github.com/stephenykk/i18n-easy/blob/master/images/annotation.gif)

- 相同文案复用现有key
  ![useExistKey](https://github.com/stephenykk/i18n-easy/blob/master/images/useExistsKey.gif)

- 自动识别文案内变量
  ![withVar](https://github.com/stephenykk/i18n-easy/blob/master/images/withVar.gif)

- 导出excel
  ![outputExcel](https://github.com/stephenykk/i18n-easy/blob/master/images/outputExcel.gif)

- 加载远程语言文件
  ![loadRemoteLocales](https://github.com/stephenykk/i18n-easy/blob/master/images/configRemoteLocales.gif)

- 自动提取所有文案
  ![autoExtract](https://github.com/stephenykk/i18n-easy/blob/master/images/autoExtract.gif)

- 更多功能和配置
  参考[i18n-ally 文档](https://github.com/lokalise/i18n-ally/wiki)