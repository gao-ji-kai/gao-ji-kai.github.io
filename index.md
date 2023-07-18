---
layout: home
layoutClass: 'm-home-layout'

# title: Gaoter Blog
# titleTemplate: The Power of Small Changes

hero:
  name: 高特儿
  text: Gaoter 的学习笔记
  tagline: The Power of Small Changes
  image:
    src: /logo.png
    alt: gaoter
  actions:
    - text: 前端相关
      link: /f2e/javascript/clone
    - text: 前端导航
      link: /nav
      theme: alt
features:
  - icon: 📖
    title: 前端知识
    details: 个人前端笔记
    link: /f2e/javascript/types
    linkText: 前端知识
  - icon: 📘
    title: 源码阅读
    details: 了解各种库和框架的实现原理<br />学习其中的小技巧和冷知识
    link: /analysis/utils/only-allow
    linkText: 源码阅读
  - icon: ⚡️
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /workflow/utils/library
    linkText: 常用工具库
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /efficiency/online-tools
    linkText: 提效工具

---




<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>