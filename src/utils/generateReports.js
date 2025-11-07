import reporter from 'multiple-cucumber-html-reporter';
import { existsSync, mkdirSync, statSync } from 'fs';
import path from 'path';
import open from 'open';

const reportDir = './reports/html';
const reportPath = path.resolve(reportDir, 'index.html');

if (!existsSync(reportDir)) {
    mkdirSync(reportDir, { recursive: true });
}

reporter.generate({
    jsonDir: './reports',
    reportPath: reportDir,
    metadata: {
        browser: { name: 'chrome', version: 'latest' },
        device: 'Local Test Machine',
        platform: { name: 'Windows', version: '11' },
    },
    customData: {
        title: 'Playwright + Cucumber BDD Report',
        data: [
            { label: 'Project', value: 'Playwright + Cucumber BDD' },
            { label: 'Executed By', value: 'Abaz Esentur' },
            { label: 'Execution Date', value: new Date().toLocaleString() },
        ],
    },
});

console.log(`✅ HTML report generated at: ${reportPath}`);

// ✅ Wait until file exists before opening
let tries = 0;
const checkAndOpen = async () => {
    if (existsSync(reportPath) && statSync(reportPath).size > 0) {
        try {
            await open(reportPath);
            console.log('🌐 Report opened automatically in your browser!');
        } catch (err) {
            console.error('❌ Could not open report automatically:', err.message);
        }
    } else if (tries < 10) {
        tries++;
        setTimeout(checkAndOpen, 1000); // retry every 1s
    } else {
        console.error('❌ Report file not found after waiting 10s.');
    }
};

checkAndOpen();
