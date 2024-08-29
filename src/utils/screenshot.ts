import puppeteer from 'puppeteer'

export default async function captureScreenshot(url: string, path: string) {
  'use client'
  // Lançar o browser
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Navegar até a URL desejada
  await page.goto(url)

  // Capturar a screenshot
  await page.screenshot({ path })

  // Fechar o browser
  await browser.close()
  return path
}
