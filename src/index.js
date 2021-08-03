/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-07-17 16:09:46
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-07-24 22:02:53
 * @FilePath     : /webpack2021/src/index.js
 */
import './index.css';
// document.write('hello worldaa1');
// console.log('log 111 hello world => ');


const logo = require('./images/logo.png');
const img = new Image();

img.src = logo;
const root = document.getElementById('root');
root.appendChild(img);
console.log('log 111 logo => ', logo);