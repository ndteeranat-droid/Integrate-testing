// @ts-nocheck
import { test, expect } from '@playwright/test';
import * as path from 'path';

test('ST-07 Stub Test: ตรวจสอบชื่อ-นามสกุล ใน cart.html stub', async ({ page }) => {
  // ดึง Absolute Path และแปลงเครื่องหมาย \ เป็น / รองรับระบบ Windows
  const filePath = path.resolve('stubs/cart.html').replace(/\\/g, '/');
  const stubPath = `file:///${filePath}`;

  // 1. เปิดหน้า cart.html stub
  await page.goto(stubPath);

  // 2. ตรวจสอบว่าแสดงชื่อ-นามสกุล "นายธีรนาถ ทัพหน้า"
  const studentName = page.locator('#student-name');
  await expect(studentName).toBeVisible();
  await expect(studentName).toHaveText('นายธีรนาถ ทัพหน้า');

  // 3. ตรวจสอบรหัสนักศึกษา
  const studentId = page.locator('#student-id');
  await expect(studentId).toContainText('6804101347');
});