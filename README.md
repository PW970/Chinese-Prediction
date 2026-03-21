# Chinese Prediction

一个面向中国传统术数与民俗测算场景的前端项目，目标是把常见的推演、排盘、占测与辅助解释模块统一到一个现代化网站中。

当前项目已经完成第一轮现代化重构，使用 React、TypeScript、Vite 与 React Router 组织页面、算法与状态。现阶段重点是先搭出一套可扩展的平台骨架，再逐步把各个术数模块从“基础版”推进到更严谨、更接近专业排盘系统的版本。

## 项目目标

- 提供一个统一入口，集中承载多个东方术数模块。
- 将算法、数据、界面分层，方便后续继续细化排盘规则。
- 兼顾可视化展示与后续工程扩展，而不是只做单页脚本演示。
- 为未来增加更多术数体系、断语库、门派差异配置和用户输入流程预留空间。

## 技术栈

- React 19
- TypeScript
- Vite
- React Router

这套技术栈适合当前项目的原因：

- React 适合做多模块页面切换、组件复用与交互管理。
- TypeScript 有利于整理复杂术数算法的数据结构。
- Vite 让本地开发和生产构建都更轻量。
- React Router 能把总站入口和各模块页面统一成单页应用中的独立路由。

## 当前目录结构

```text
Chinese-Prediction/
├── src/
│   ├── components/
│   │   └── AppShell.tsx
│   ├── lib/
│   │   ├── fortune.ts
│   │   ├── liuren.ts
│   │   ├── metaphysics.ts
│   │   └── time.ts
│   ├── pages/
│   │   ├── BaziPage.tsx
│   │   ├── DreamPage.tsx
│   │   ├── FengshuiPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── LiurenPage.tsx
│   │   ├── LotPage.tsx
│   │   ├── QimenPage.tsx
│   │   ├── ShengbeiPage.tsx
│   │   └── ZiweiPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

补充说明：

- [src/lib](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/lib) 主要负责算法、时间转换和词库数据。
- [src/pages](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/pages) 负责每个功能模块的页面展示。
- [src/components/AppShell.tsx](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/components/AppShell.tsx) 是整体导航与布局壳子。
- [src/App.tsx](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/App.tsx) 统一定义路由。

## 运行方式

安装依赖：

```bash
npm install
```

开发模式：

```bash
npm run dev
```

生产构建：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview
```

## 模块总览

当前已经迁移到新版工程中的模块有：

- 小六壬
- 奇门遁甲
- 紫微斗数
- 八字排盘
- 抽签
- 圣杯
- 解梦
- 风水

下面是每个模块的详细说明。

## 小六壬模块

页面位置：
[src/pages/LiurenPage.tsx](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/pages/LiurenPage.tsx)

算法位置：
[src/lib/liuren.ts](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/lib/liuren.ts)

时间支持：
[src/lib/time.ts](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/lib/time.ts)

### 模块定位

小六壬模块是当前最完整、最接近“可直接使用”的模块之一。它的目标是让用户输入一个时间点，系统自动换算农历与时辰，再根据固定公式生成六神结果。

### 当前功能

- 支持输入公历日期时间。
- 自动换算农历月、日。
- 自动识别对应时辰。
- 根据小六壬公式实时起卦。
- 展示卦名、基本含义、断辞诗句。
- 展示公历、农历和时辰信息。

### 当前实现逻辑

系统采用基础公式：

`(农历月 + 农历日 + 时辰序号 - 2) % 6`

结果映射到六神：

- 大安
- 留连
- 速喜
- 赤口
- 小吉
- 空亡

### 后续可扩展方向

- 增加更丰富的断语分类，例如感情、事业、出行、失物、健康等。
- 增加历史结果记录。
- 增加指定问题类型后的定向解释。
- 加入更完整的农历与节气边界校验逻辑。

## 奇门遁甲模块

页面位置：
[src/pages/QimenPage.tsx](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/pages/QimenPage.tsx)

算法位置：
[src/lib/metaphysics.ts](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/lib/metaphysics.ts)

### 模块定位

奇门遁甲模块当前是“基础版时家奇门盘面原型”。它的主要目标不是现在就完全覆盖所有门派与排盘细节，而是先把九宫盘、九星、八门、八神、天干地支的可视化承载层搭好。

### 当前功能

- 支持根据输入时间生成基础九宫盘。
- 展示九宫名称。
- 展示九星分布。
- 展示八门分布。
- 展示八神分布。
- 展示每宫对应的天干和地支。

### 当前实现范围

当前版本更偏“工程骨架与展示原型”，适合作为后续正式奇门引擎的基础。

### 当前还未覆盖的高级能力

- 阴遁阳遁判定。
- 局数精确推导。
- 值符值使精确落宫。
- 节气切换与时家排局严谨规则。
- 天盘、地盘、人盘更完整的分层逻辑。
- 不同门派差异化排盘参数。

### 后续可扩展方向

- 接入节气数据与局数推演。
- 做成标准九宫格可视化盘。
- 增加“基础盘 / 专业盘”双模式。
- 增加用神、格局与简要断盘提示。

## 紫微斗数模块

页面位置：
[src/pages/ZiweiPage.tsx](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/pages/ZiweiPage.tsx)

算法位置：
[src/lib/metaphysics.ts](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/lib/metaphysics.ts)

### 模块定位

紫微斗数模块当前是“十二宫模型 + 基础星曜落位”的第一版。它的作用是先建立斗数页面、宫位结构和星曜渲染能力，为后续增加更多主星、辅星和四化提供框架。

### 当前功能

- 支持根据输入时间生成基础十二宫盘。
- 计算命宫起点。
- 顺排十二宫位。
- 为各宫配置一轮基础主星展示。
- 高亮命宫位置。

### 当前实现范围

当前版本强调的是“结构完整、可扩展”，而不是“斗数规则完全版”。

### 当前还未覆盖的高级能力

- 完整十四主星排布。
- 左右、昌曲、魁钺、火铃等辅星系统。
- 四化飞星。
- 大限、流年、流月。
- 身宫、命主、身主的完整判断。
- 不同流派差异。

### 后续可扩展方向

- 增加完整宫位数据模型。
- 增加主星与辅星配置系统。
- 增加命盘解释面板。
- 加入流年和大限切换能力。

## 八字排盘模块

页面位置：
[src/pages/BaziPage.tsx](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/pages/BaziPage.tsx)

算法位置：
[src/lib/metaphysics.ts](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/lib/metaphysics.ts)

### 模块定位

八字模块当前提供的是“四柱 + 五行概览”的基础能力，适合作为将来扩展命理分析的入口页。

### 当前功能

- 支持输入公历时间。
- 自动换算农历相关信息。
- 生成年柱、月柱、日柱、时柱。
- 展示四柱结果。
- 统计五行数量分布。
- 展示当前时辰信息。

### 当前实现范围

当前版本可用于基础展示和入门级结果生成，但还没有做到完整命理分析系统。

### 当前还未覆盖的高级能力

- 十神分析。
- 日主旺衰判断。
- 喜用神推导。
- 纳音、神煞、格局分析。
- 大运、流年、流月切换。
- 男女命、流派差异化解释体系。

### 后续可扩展方向

- 增加十神和藏干。
- 增加五行强弱图表。
- 增加大运排盘。
- 提供事业、财运、感情、健康等维度的结构化说明。

## 抽签模块

页面位置：
[src/pages/LotPage.tsx](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/pages/LotPage.tsx)

数据位置：
[src/lib/fortune.ts](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/lib/fortune.ts)

### 模块定位

抽签模块是一个轻量型民俗测算模块，用于快速随机生成签文和释义，适合做娱乐化入口，也适合后续扩充成更完整的签诗系统。

### 当前功能

- 随机抽取签文。
- 展示签等级。
- 展示签诗内容。
- 展示简要释义。

### 后续可扩展方向

- 增加签文分类，例如事业、姻缘、考试、出行。
- 增加不同签种，如观音签、月老签、关帝签等。
- 增加签号索引与签文详情页。

## 圣杯模块

页面位置：
[src/pages/ShengbeiPage.tsx](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/pages/ShengbeiPage.tsx)

### 模块定位

圣杯模块用于模拟掷筊结果，是一个非常适合和民俗互动场景结合的轻模块。

### 当前功能

- 随机生成掷筊结果。
- 支持展示三种基础结果：
  - 圣杯
  - 笑杯
  - 阴杯
- 给出简要解释。

### 后续可扩展方向

- 增加多次连续掷筊流程。
- 增加“是否继续请示”的引导逻辑。
- 增加图形化筊杯动画。

## 解梦模块

页面位置：
[src/pages/DreamPage.tsx](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/pages/DreamPage.tsx)

数据位置：
[src/lib/fortune.ts](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/lib/fortune.ts)

### 模块定位

解梦模块当前是一个关键词驱动的象征解释工具，适合作为轻量内容模块，也适合未来扩展成更大的梦象词典。

### 当前功能

- 输入梦境关键词。
- 在内置词库中即时检索。
- 展示匹配到的梦境标题与含义。
- 未命中时给出引导提示。

### 当前词库方向

当前词库主要覆盖基础高频意象，例如：

- 水
- 火
- 蛇
- 龙
- 掉牙
- 考试

### 后续可扩展方向

- 增加更大的梦象词库。
- 支持多关键词组合分析。
- 增加按情绪、场景、人物分类的解梦方式。
- 增加 AI 辅助解释层，但保留基础词库作为确定性结果来源。

## 风水模块

页面位置：
[src/pages/FengshuiPage.tsx](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/pages/FengshuiPage.tsx)

数据位置：
[src/lib/fortune.ts](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src/lib/fortune.ts)

### 模块定位

风水模块当前是“方位 + 空间场景”的建议生成器。它更偏向内容型和工具型模块，适合后续逐步演化成空间咨询辅助工具。

### 当前功能

- 选择方位。
- 选择空间场景。
- 输出该方位的基础风水说明。
- 输出对应空间的布局建议。

### 当前支持内容

方位示例：

- 东
- 南
- 西
- 北
- 东南
- 西南
- 东北
- 西北

空间示例：

- 客厅
- 卧室
- 书房
- 办公室
- 店铺

### 后续可扩展方向

- 增加户型输入。
- 增加方位示意图。
- 增加流年风水、九宫飞星、宅位分析。
- 增加家居摆件、色彩、动线等建议维度。

## 当前架构优势

相比旧版静态脚本结构，当前重构后的工程有这些好处：

- 所有模块都在一个统一应用内维护。
- 算法和页面分离，更适合后续多人协作。
- TypeScript 让后续补复杂术数规则时更安全。
- 路由结构清晰，后续可继续扩成多层导航。
- 可以很容易继续引入状态管理、表单库、图表库或后端 API。

## 旧目录说明

仓库里仍保留了一部分旧的静态多目录页面与过渡性文件，它们目前主要用于迁移参考，不是新版主入口。新版主要应以 [src](/Users/makebukepurou/Desktop/ChinesePredictions/Chinese-Prediction/src) 下的 React 应用为准。

如果后续继续整理仓库，可以考虑：

- 移除旧静态目录。
- 增加 `.gitignore`。
- 补齐 ESLint、Prettier、测试框架。
- 将每个模块拆成更独立的业务组件与数据模型。

## 后续建议路线

如果要继续往“专业术数平台”推进，比较推荐的开发顺序是：

1. 先把小六壬、八字做成更完整的结构化结果页。
2. 再提升奇门遁甲和紫微斗数的排盘精度。
3. 最后扩充签诗、解梦、风水等偏内容型模块的数据深度。


## 开源协议

MIT
