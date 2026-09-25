# 陈锦锋的个人档案 | Personal Introduction

这是一个以三维档案界面呈现的个人介绍网站。进入页面后，可以浏览八份按主题整理的档案，了解我的学习经历、项目、技能、荣誉和未来规划。页面基于 [RhineLabUI](https://github.com/LBEILC/RhineLabUI) 改编，保留了档案抽取、阅读和 360° 模型查看等交互。

## 关于我

我是陈锦锋，杭州电子科技大学智能制造工程专业 2026 级新生。从小学接触 Scratch 开始，我逐渐学习 Python，并通过小游戏和项目练习编程。我对数学、问题拆解和软件开发感兴趣，希望继续深入后端开发，并探索 Agent 相关技术。

更多个人资料见[我的个人主页](https://chenjinfeng-homepage.pages.dev/)。本仓库中的档案内容会随着学习和实践经历继续更新。

## 档案目录

页面只保留「个人简历」一列，包含以下八份档案：

| 编号 | 档案 | 内容 |
| --- | --- | --- |
| X-003 | 人生概览 | 个人信息、成长经历与兴趣目标 |
| X-005 | 学习经历 | 学校教育与编程学习过程 |
| X-010 | 职业经历 | 目前的实践经历与职业方向 |
| X-023 | 项目与成果 | 已参与的项目及阶段性成果 |
| X-024 | 技能与专长 | 编程技能、学习方法与个人能力 |
| X-025 | 荣誉与证书 | 获奖经历及相关项目地址 |
| X-026 | 重要经历 | 志愿服务、活动与成长节点 |
| X-027 | 未来规划 | 后端、软件开发与 Agent 方向的近期目标和长期愿景 |

档案中的个人经历依据[个人主页](https://chenjinfeng-homepage.pages.dev/)整理。未来规划包含我的职业意向；仍待补充的内容以页面当前文字为准。

## 本地运行

需要 Node.js 22.12 或更高版本，以及支持 WebGL 2 的现代浏览器。

```sh
git clone https://github.com/sakura4388/RhineLabUI.git
cd RhineLabUI
npm ci
npm run dev
```

打开终端显示的本地地址，通常是 `http://127.0.0.1:5173/`。运行时不需要后端服务或 API Key。

构建静态网站：

```sh
npm run build
```

构建结果位于 `dist/`，可部署到静态网站托管服务。

## 浏览与修改档案

- 使用方向键上下翻阅档案，按 `Enter` 打开当前档案。
- 在档案详情中阅读主题栏目，使用 `EXPORT` 下载对应的文本文件。
- 使用页面中的 `360° 查看档案模型` 旋转、缩放或拆解三维模型。
- 档案数据集中存放在 [`content/archives.json`](content/archives.json)。修改数据后运行 `npm run export:archives`，更新 [`public/archives/`](public/archives/) 中的文本文件。字段说明见 [`content/README.md`](content/README.md)。

网站使用 TypeScript、Three.js 和 Vite。主要界面代码在 [`src/`](src/)；模型资源、音频和其他静态文件在 [`public/`](public/)。

## 来源与许可

本仓库由 [LBEILC/RhineLabUI](https://github.com/LBEILC/RhineLabUI) 改编。原项目代码、模型及相关原创资源的授权条件见 [`LICENSE`](LICENSE) 和[原项目 README](https://github.com/LBEILC/RhineLabUI#readme)，版权署名为 Copyright (c) 2026 LBEILC。第三方字体、素材及《明日方舟》相关元素仍归各自权利人所有；相关说明以原项目为准。

本仓库的个人介绍文字和档案整理用于展示陈锦锋的经历与规划。
