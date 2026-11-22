# 待辦清單 Web App

這是在 **GitHub Copilot 實戰工作坊**中完成的純前端待辦清單應用程式。

## 🌐 線上展示

**https://ppk11654.github.io/copilot-workshop-agent-mode-mcp/**

> ⚠️ 請把上面這行換成你自己的 GitHub Pages 網址。

## ✨ 功能

- 新增待辦事項，輸入空白內容時不會新增
- 每筆待辦左側有勾選框，勾選後文字加上刪除線並淡化
- 每筆待辦右側有刪除按鈕，可刪除該筆
- 底部顯示「未完成:N 項」
- 清單為空時顯示提示文字「還沒有任何待辦事項,新增一個吧!」
- 篩選檢視：全部 / 未完成 / 已完成
- 深色模式切換，按鈕顯示圖示與文字（🌙 深色模式 / ☀️ 淺色模式）
- 版面置中，最大寬度 520px，卡片式設計、圓角、淡淡陰影
- 支援手機螢幕（RWD）

## 🛠 技術

| 項目 | 內容 |
| :--- | :--- |
| 前端 | HTML5、CSS3、原生 JavaScript |
| 框架 / 套件 | **無** —— 沒有 React / Vue / jQuery / Bootstrap / Tailwind，沒有 `package.json`，沒有建置流程 |
| 外部資源 | **無** —— 不引用任何 CDN，可完全離線運作 |
| 檔案結構 | 單一 `index.html`，CSS 與 JavaScript 皆內嵌 |

## 🤖 開發方式

這個專案是透過 GitHub Copilot Agent Mode 協作完成的：

- 在 Agent Mode 下，根據需求規格建立單一 `index.html`，內嵌所有 CSS 與 JavaScript
- 建立 `.vscode/mcp.json`，設定 Microsoft Learn MCP Server，用於查詢 CSS `prefers-color-scheme` 與深色模式無障礙的官方文件
- 建立 `.github/copilot-instructions.md`，定義專案的技術限制、程式風格與協作方式規範
- 使用 Microsoft Learn 文件工具查詢官方建議，並檢查專案深色配色的可存取性改進空間

## 💡 我學到什麼

1. 純前端專案不需要任何框架或建置流程，單一 HTML 檔案即可離線運作
2. CSS 變數搭配 `data-theme` 屬性可以乾淨地實作淺色/深色模式切換
3. `prefers-color-scheme` 可讓網頁跟隨作業系統的深色模式偏好
4. 透過 MCP Server 可以查詢 Microsoft Learn 等官方文件，作為開發參考
5. `.github/copilot-instructions.md` 可以為 AI 協作設定明確的專案規範與程式風格