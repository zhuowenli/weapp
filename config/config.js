/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

module.exports = {
    "modules": ["demo"], // 这里配置所有项目
    "xml": {
        "src": "src/**/*.xml",
        "extname": ".wxml"
    },
    "sass": {
        "src": "src/**/*.scss",
        "extname": ".wxss"
    },
    "json": {
        "src": "src/**/*.json",
    },
    "img": {
        "src": "src/**/*.{jpg,jpeg,png,gif}",
    },
    "js": {
        "src": "src/**/*.js",
    },
    "dest": "dist"
};
