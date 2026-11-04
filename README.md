# dsh-human-draft

> DeepSeek Harness 插件：撰写论文、技术报告、行业研究报告等正式文档，**自动套用真实人类写作模板 + 去 AI 味规范**，产出读起来像人写、无机器腔与套话的成稿。

## 它能做什么

- **套真实模板**：学术论文（IMRaD）、技术报告（BLUF 原则）、行业研究报告（PEST / 波特五力 / SWOT）等，用该文体通用骨架，而不是"总分总三段式"。
- **去 AI 味**：落笔即守去味红线——删空泛词、套话开场、导览腔、假深刻收尾、显著性从句、名词化空转、整齐到可疑的句长节奏。
- **不编造**：缺数据/文献用 `【待补充】` 明确标注，绝不凭空生成数字、人名、年份、出处。
- **可溯源**：模板与去味规则来自公开写作指南（ScienceDirect 作者指南、各高校技术报告规范、行业研报框架）与社区去 AI 味实践，按中文语境重写。

## 安装

### 方式一：从 GitHub 安装（发布后）

先把这个仓库 push 到 GitHub，然后在 DSH 桌面版插件管理器里填 `github:<你的用户名>/dsh-human-draft`，或命令行：

```bash
dsh plugin --profile web add github:<你的用户名>/dsh-human-draft
```

> 桌面版正在运行时命令行不会改它的 profile：先退出桌面版（含托盘退出）再执行，或装完重启 DSH。

### 方式二：本地调试（开发时推荐）

```bash
git clone <本仓库地址> dsh-human-draft
cd dsh-human-draft
dsh plugin --profile web add link:$(pwd)
```

装完**重启 DSH**，然后说一句"帮我写一篇关于 X 的技术报告"验证技能被加载。

## 用法

技能会在你要求写正式长文时自动触发；也可以手动调用。

| 你说 | 效果 |
|---|---|
| "帮我写一份关于 XX 的行业研究报告" | 自动选行业研报模板，套结构 + 去味起草 |
| "把这段草稿改成论文，去掉 AI 味" | 按论文模板重组并去味润色 |
| "写技术报告，受众是技术决策者" | 用 BLUF 原则，先结论后支撑 |

### 示例提示词

```
帮我起草一份技术报告：
主题：用 STM32F103C8T6 做温湿度采集节点的功耗优化
受众：硬件团队技术负责人
已有素材：睡眠电流 1.2µA、唤醒 8ms、采样周期从 1s 改 5s 后日均功耗降 63%
```

模型会用技术报告骨架（Title → Executive Summary → Introduction → Methods → Results → Discussion → Conclusions → Recommendations），并把"降 63%"这类具体事实保留、把空泛表述全部替换掉。

## 目录结构

```
dsh-human-draft/
├── index.js                  # 入口：把 skills/ 注册为 DSH 技能树
├── cordis.patch.yml          # 插件层注册
├── package.json              # 含 dsh.bundle.patch
├── README.md
├── LICENSE
└── skills/
    └── human-draft/
        ├── SKILL.md          # 技能本体：工作流 + 去味红线 + 自检清单
        └── references/
            ├── paper-template.md    # 学术论文（IMRaD）逐节模板
            ├── report-template.md   # 技术报告 + 行业研报模板
            └── anti-ai-voice.md    # 去 AI 味完整词表/句式/自检
```

## 兼容性

peer 范围 `>=0.1.0-rc.6`，覆盖 DSH 0.1.x / 0.2.x。依赖宿主提供 `@deepseek-ai/dsh-skill-filesystem`（DSH 自带）。

## License

MIT
