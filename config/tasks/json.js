/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Compile json source to distribution directory
 */
'use strict';

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins')
const handleErrors = require('../lib/handleErrors');
const config = require('../config.json');

const plugins = gulpLoadPlugins();

const env = process.env.NODE_ENV || 'development';
const isProduction = () => env === 'production';

const jsonTask = () => {
    const module = process.env.MODULE_NAME;
    const jsonPath = path.join(module, config.json.src);
    const destPath = path.join(module, config.dest);

    return gulp.src([jsonPath])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.jsonminify())
        .on('error', handleErrors)
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(dest));
};

gulp.task('compile:json', jsonTask);
module.exports = jsonTask;
