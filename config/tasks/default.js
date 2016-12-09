/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const config = require('../config.json');

const plugins = gulpLoadPlugins();

const defaultTask = function(next) {
    next();
};

gulp.task('default', defaultTask);

module.exports = defaultTask;
