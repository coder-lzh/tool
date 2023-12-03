

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

// 顶部导航菜单
// 顶部导航
const nav = [
    {text: '首页', link: '/'},
    {
        text: '案例1',
        activeMatch: '/demo1/',
        items: [
            {
                text: 'AAA',
                items: [
                    {text: 'A', link: '/demo1/a'},
                    {text: 'B', link: '/demo1/b'},
                ]
            },
            {
                text: 'BBB',
                items: [
                    {text: 'A', link: '/demo2/a'},
                    {text: 'B', link: '/demo2/b'},
                ]
            },
        ]
    },
    {
        text: '案例2',
        activeMatch: '/demo2/',
        items: [
            {text: 'A', link: '/demo2/a'},
            {text: 'B', link: '/demo2/b'},
        ]
    }
]
// 全局左侧菜单
const sidebar = {
    '/demo1/': [
        {
            text: '案例1',
            // 是否可收缩
            collapsible: true,
            // 是否折叠
            collapsed: false,
            items: [
                {text: '1-A', link: '/demo1/a'},
                {text: '1-B', link: '/demo1/b'},
                {text: '1-C', link: '/demo1/c'}
            ]
        },
        {
            text: '案例2',
            // 是否可收缩
            collapsible: true,
            // 是否折叠
            collapsed: false,
            items: [
                {text: '2-A', link: '/demo2/a'},
                {text: '2-B', link: '/demo2/b'},
                {text: '2-C', link: '/demo2/c'}
            ]
        }
    ],
    '/demo2/': [
        {
            text: '案例2',
            // 是否可收缩
            collapsible: true,
            // 是否默认展开
            collapsed: true,
            items: [
                {text: '2-A', link: '/demo2/a'},
                {text: '2-B', link: '/demo2/b'},
                {text: '2-C', link: '/demo2/c'}
            ]
        }
    ]
}

// 主题配置
const themeConfig = {
    lastUpdatedText: '上次更新',
    logo: './images/logo.png',
    socialLinks ,
    footer,
    docFooter,
    nav,
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

