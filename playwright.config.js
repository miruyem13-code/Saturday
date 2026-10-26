import { defineConfig } from '@playwright/test'
export default defineConfig({
 testDir: './tests',
 fullyParallel: false,
 reporter: 'list',
 use: { baseURL: 'http://127.0.0.1:5173', viewport: { width: 1440, height: 1080 }, launchOptions: { executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' } },
 webServer: { command: 'npm.cmd run dev -- --host 127.0.0.1', url: 'http://127.0.0.1:5173', reuseExistingServer: true },
})
