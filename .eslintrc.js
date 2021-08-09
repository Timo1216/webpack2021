/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-08-08 10:23:03
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-08-08 10:29:01
 * @FilePath     : /webpack2021/.eslintrc.js
 */
module.exports = {
    root: true,
    parseOptions: { // 解析器的选项，AST语法解析树
        sourceType: 'module',
        ecmaVersion: 'es2015',
    },
    env: { // 指定运行环境
        browser: true, // window, document
        node: true, // node 环境， required, process
    },
    rules: {
        indent: ["error", 4]
    }
}