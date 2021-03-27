module.exports = {
    head: [// 设置 favor.ico，html/head 标题中添加 style 标签
        ['link', { rel: 'icon', href: `logo.png` }]
    ],
    title: '前端开发规范', // 设置网站标题
    description: '描述：前端开发规范',
    base: '/', //默认路径
    themeConfig: {// 主题设置
        nav: [{// 右上导航航条 docs/.vuepress 文件夹下
            text: '概述',
            link: '/'
        }, {
            text: 'Vue开发规范',
            link: '/vue'
        }, {
            text: 'React开发规范',
            link: '/react'
        }],
        sidebar: {//左侧列表
            '/guide/html/': [{ // 对应导航中的link文件夹路径，注意这里是 ‘/’结束
                title: 'HTML开发规范',
                collapsable: true,
                children: [{
                    title: 'HTML',
                    path: 'html'
                }]
            }],
            // '/guide/ts/': [{
            //     title: 'Typescript 学习',
            //     collapsable: false,
            //     children: [{
            //         title: '测试',
            //         path: 'test01'
            //     }]
            // }],
            // fallback 侧边栏被最后定义
            '/': [''], //不能放在数组第一个，否则会导致右侧栏无法使用
        },
        // 左侧列表展开级数，默认是 1
        sidebarDepth: 6
    }
}
