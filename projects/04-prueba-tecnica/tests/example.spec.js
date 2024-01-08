// @ts-check

// Test end to end
import  { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgSrc = await image.getAttribute('src')

  await expect(textContent).not.toBeNull()
  await expect(imgSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})

