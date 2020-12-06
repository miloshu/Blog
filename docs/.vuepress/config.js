module.exports = {
  title: '个人博客',
  description: 'my first blog',
  theme: '@vuepress/blog',
  themeConfig: {
    // 请参考文档来查看所有可用的选项。
    // logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/home/' },
      { text: 'About', link: '/guides/', target:'_self', rel:'' },
      { text: 'External', link: 'https://baidu.com' },
    ],
    sidebar: [
      {
        title: "HTML5/HTML5",
        collapsable: false,
        children: ["/guides/html5/"],
      },
      {
        title: "CSS/CSS3",
        collapsable: false,
        children: [
          "/guides/css3",
        ]
      }
    ]
  }
}
