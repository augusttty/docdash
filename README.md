# Docdash-cn. forked from  https://github.com/clenemt/docdash
## 增加中文翻译
## 增加自定义标签 @category
# 安装
```
npm install docdash-cn
```
# 配置及使用方法:
```
//jsdoc.json配置示例 更多配置参考原仓库

{
    "source": {
        "include": ["src","README.md"],
        "includePattern": ".+\\.js(doc|x)?$",
        "exclude": ["node_modules","docs"]
    },
    "opts": {
        "encoding": "utf8",
        "template": "node_modules/docdash-cn",
        "destination": "docs/",
        "recurse": true,
        "verbose": true
    },
    "plugins": [
        "plugins/markdown",
        "node_modules/docdash-cn/custom-tags.js",
    ],
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false,
        "default": {
            "useLongnameInNav": true,
            "outputSourceFiles": false
        }
    },
    "docdash": {
        "static": true,
        "sort": true,
        "search": true,
        "collapse": true,
        "typedefs": true,
        "removeQuotes": "none",
        "scripts": [],
        "menu":{
            "github": {
                "href":"https://github.com/augusttty/docdash",
                "target":"_blank",
                "class":"menu-item",
                "id":"home"
            },
            "分类1": {
                "type": "category",
                "class":"menu-item",
                "id":"category1"
            },
            "分类2": {
                "type": "category",
                "class":"menu-item",
                "id":"category2"
            }
        }
    }
}


// 在注释中使用@category:
/**
 * 我的类
 * @category category1
 */
class MyClass {
    constructor(){}
}

// 生成文档

jsdoc -c jsdoc.json

```
## License
Licensed under the Apache License, version 2.0. (see [Apache-2.0](LICENSE.md)).
