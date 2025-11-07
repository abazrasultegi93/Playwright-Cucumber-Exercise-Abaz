# 🧪 Playwright + Cucumber BDD Framework (TypeScript)

This repository contains an end-to-end **UI automation framework** built using **Playwright**, **Cucumber (BDD)**, and **TypeScript**.
It demonstrates a clean, modular test structure with reusable Page Objects, scenario outlines, dynamic parameters, and automated HTML reporting.

---

## 📁 Project Structure

playwright_cucumber_bdd/
├── features/
│ ├── login.feature
│ ├── purchase.feature
│ └── sort.feature
├── src/
│ ├── hooks/hooks.ts
│ ├── pages/.ts
│ ├── steps/.ts
│ ├── utils/generateReports.js
│ └── global/global.d.ts
├── reports/
│ └── html/index.html
├── package.json
├── tsconfig.json
└── README.md


---

## 🚀 How to Run Tests

```bash
npm install
npm run build
npm test


The HTML report will open automatically at
/reports/html/index.html

✅ All scenarios executed successfully (8 passed)
✅ Author: Abaz Esentur 

6️⃣ Press **Ctrl + S** to save it.  
7️⃣ You’ll now see `README.md` appear in your file tree — done! 🎉  

---

Would you like me to add one more short section at the bottom (e.g. “How to run only @sort tests”)?  
That makes the README look even more professional if it’s for submission or GitHub.
