// 头部导航
import topNav from "./topNav";

import { vitePressNote } from "./sideBar/vitePressBar";



import gitee from '../public/svg/gitee.txt'
import coding from '../public/svg/coding.txt'
import oschina from '../public/svg/oschina.txt'

//社交链接
const socialLinks= [
    { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    { icon: 'twitter', link: '...' },
    // 自定义图标
    {icon: {svg: gitee,}, link: 'https://gitee.com/'},
    {icon: {svg: coding,}, link: 'https://gitee.com/'},
    {icon: {svg: oschina,}, link: 'https://gitee.com/'}
]

// 页脚
const footer = {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2019-present Evan You'
}


const docFooter =  {
    prev: '上一页',
    next: '下一页'
}

// 全局左侧菜单
const sidebar = {
    "/note/vitePress": vitePressNote,
}

// 主题配置
const themeConfig = {
    lastUpdatedText: '上次更新',
    logo: './images/logo.png',
    socialLinks ,
    footer,
    docFooter,
    nav:topNav,
    // 全局左侧菜单
    sidebar,
    // 右侧目录标题
    outlineTitle: '本页目录'
}




const head = [
    ['link',{rel:'icon',href:'./images/logo.png'}]
]

//markdown 配置
const markdown = {
    // 是否开启行号
    lineNumbers: true
}

export default {
    title: '网站标题1',
    description: 'meta标签 我是网站描述.',
    base:'/tool/',
    //en-US
    lang: 'zh-CN',
    // 是否显示更新时间
    lastUpdated: true,
    themeConfig: themeConfig,
    //当设置为true时，VitePress不会因死链接而导致构建失败。
    ignoreDeadLinks: true,
    head,
    markdown,

}

