# 🧪 Playwright + Cucumber BDD Framework (TypeScript)

This repository contains an end-to-end **UI automation framework** built using **Playwright**, **Cucumber (BDD)**, and *
*TypeScript**.  
It demonstrates a clean, modular test structure with reusable Page Objects, scenario outlines, dynamic parameters, and
automated HTML reporting.

---

## 📁 Project Structure

playwright_cucumber_bdd/
├── features/
│ ├── login.feature
│ ├── purchase.feature
│ └── sort.feature
├── src/
│ ├── hooks/hooks.ts
│ ├── pages/login.page.ts
│ ├── pages/purchase.page.ts
│ ├── steps/login.steps.ts
│ ├── steps/purchase.steps.ts
│ ├── steps/sortSteps.ts
│ ├── utils/generateReports.js
│ └── global/global.d.ts
├── reports/
│ └── html/index.html
├── package.json
├── tsconfig.json
└── README.md


---

## 🚀 Features

- BDD Scenarios written in **Gherkin**
- **Page Object Model (POM)** for maintainability
- Automated test reports (**HTML + screenshots**)
- CI/CD ready (**Jenkins**, **GitHub Actions**)
- Modular and scalable folder structure

---

## 🧩 Folder Overview

| Folder       | Description                                    |
|--------------|------------------------------------------------|
| `features/`  | Contains all feature files written in Gherkin  |
| `src/pages/` | Page Object classes for UI elements            |
| `src/steps/` | Step definitions for feature steps             |
| `src/hooks/` | Global setup and teardown hooks                |
| `src/utils/` | Utility helpers (e.g., HTML report generation) |

---

## ⚙️ How to Run Tests

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Run Cucumber tests
npm test

After execution, the HTML report will be generated at:
📄 reports/html/index.html


✅ Test Summary

All scenarios executed successfully (8 passed)
Author: Abaz Esentur (QA Automation Engineer / SDET)
Location: Chicago, IL


🧰 Tech Stack
Playwright
Cucumber.js
TypeScript
Node.js
HTML Reports