import { firefox } from 'playwright';

export default async function (pdfUrl: string) {
  const browser = await firefox.launch({
    headless: true,
  });
  const page = await browser.newPage();
  let response;
  try {
    [response] = await Promise.all([
      page.waitForResponse(
        async (response) => {
          const headers = await response.allHeaders();
          if (headers['content-type']?.includes('application/pdf')) {
            console.log(headers['content-length']);
            return true;
          } else {
            return false;
          }
        },
        {
          timeout: 10000,
        }
      ),
      page.goto(pdfUrl),
    ]);
  } catch {
    await browser.close();
    return null;
  }
  const data = await response.body();
  await browser.close();
  return data;
}
