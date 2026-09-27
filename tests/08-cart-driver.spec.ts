// @ts-nocheck
import { test, expect, Page } from '@playwright/test';
import * as path from 'path';

// Driver Function: ทำหน้าที่เรียกใช้งาน cart.html Stub
export async function cartDriver(page: Page) {
  const filePath = path.resolve('stubs/cart.html').replace(/\\/g, '/');
  const stubPath = `file:///${filePath}`;
  await page.goto(stubPath);
}

// Test Suite: ใช้ Driver ในการทดสอบ
test('ST-08 Driver Test: เรียกใช้งาน cart.html ผ่าน Driver และตรวจสอบข้อมูล', async ({ page }) => {
  // 1. ใช้ Driver ในการเรียกหน้า cart.html
  await cartDriver(page);

  // 2. ตรวจสอบชื่อและนามสกุลผ่าน Driver
  const studentName = page.locator('#student-name');
  await expect(studentName).toHaveText('นายธีรนาถ ทัพหน้า');

  // 3. ตรวจสอบรายการสินค้าใน Stub
  const item = page.locator('.inventory_item_name');
  await expect(item).toHaveText('Sauce Labs Backpack');
});