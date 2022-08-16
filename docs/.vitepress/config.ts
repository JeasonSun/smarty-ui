import { demoBlockPlugin } from "vitepress-theme-demoblock";

const sidebar = {
  "/": [
    { text: "快速开始", link: "/", items: [] },
    {
      text: "通用",
      items: [{ text: "Button 按钮", link: "/components/button/" , items: []}],
    },
    { text: "导航", link: "/" , items: []},
    { text: "反馈", link: "/" , items: []},
    { text: "数据录入", link: "/" , items: []},
    { text: "数据展示", link: "/" , items: []},
    { text: "布局", link: "/" , items: []},
  ],
};
const config = {
  title: 'Smarty-UI',
  description: '组件库搭建的教学模型',
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin);
    }
  }
};

export default config;
