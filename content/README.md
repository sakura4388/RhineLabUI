# 修改档案内容

[`archives.json`](archives.json) 是页面与 TXT 下载共用的档案数据。修改内容无需编辑 TypeScript；`src/data.ts` 只保留类型和阵列位置映射。

## 文件结构

- `categories`：档案分类；“全部档案”由界面添加，无需填写。当前只保留“个人简历”。
- `columns`：三维阵列中的档案分类。当前只有一列“个人简历”。
- `records`：八份个人简历档案，按数组顺序排列。原档案编号保留，用于兼容收藏和下载链接。

| 字段                        | 内容                                                        |
| --------------------------- | ----------------------------------------------------------- |
| `id`                        | 稳定编号，用于收藏、定位和下载文件名                        |
| `title`、`en`               | 中文标题、英文标题                                          |
| `department`、`category`    | 部门及所属分类；分类须与上面的名称完全一致                  |
| `date`、`lead`、`clearance` | 档案日期、相关人物、访问范围                                 |
| `abstract`                  | 摘要                                                        |
| `findings`                  | 至少一条研究记录，使用字符串数组                            |
| `sections`                  | 可选的三块主题栏目，每块包含标题、英文名与条目               |
| `source`                    | 设定参考的完整 HTTP 或 HTTPS 链接                           |

以上字段均必填，文本不能只包含空白。所有内容按纯文本显示，不支持 Markdown 或 HTML；引号按 JSON 规则写为 `\"`，换行写为 `\n`。页面会转义 HTML 特殊字符，TXT 下载保留原文。保留公开设定的来源，区分档案式改写与游戏原文。

## 修改与验证

1. 编辑 JSON 中对应档案的字段。修改分类名称时，同时更新 `categories`、`columns` 和各档案的 `category`。
2. 执行 `npm run export:archives`，校验数据并更新 `public/archives/` 中的下载文件。校验失败时不会写入任何下载文件。
3. 执行 `npm run check:content` 检查校验规则与下载一致性，再运行 `npm run build` 验证构建。将 JSON 与更新后的 TXT 一起提交。
4. 在 `npm run dev` 中查看标题、详情、检索和下载结果，尤其检查长标题与较长正文的实际布局。

`npm run dev` 启动前和 `npm run build` 构建前都会自动校验并导出。开发服务器运行期间，JSON 修改会更新页面；下载文件需再次执行 `npm run export:archives` 或重启开发服务器。

当前保留一列、八份个人简历档案。每个档案编号保持稳定；数组顺序决定列内浏览顺序。改动档案数量时，需同时确认目录、校验和导出逻辑。

内容分离的建议来自 [@Tomahawkd 的 PR #3](https://github.com/LBEILC/RhineLabUI/pull/3)。此实现仅拆分当前项目的档案数据、校验和导出。
