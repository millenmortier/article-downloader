import downloadPdfWithBrowser from "./downloadPdfWithBrowser";
import { getPdfLink } from "@millenmortier/scihub-tools";

async function downloadFromArticleLink(
  articleLink: string
): Promise<Buffer | null> {
  const pdfLink = await getPdfLink(articleLink);
  if (!pdfLink) {
    throw new Error("Couldn't get the PDF link through SciHub!");
  }
  return await downloadPdfWithBrowser(pdfLink);
}

export default async function getPdfDataForArticle({
  url,
  pdf,
}: {
  url: string;
  pdf: string;
}) {
  let pdfData;
  if (pdf) {
    pdfData = await downloadPdfWithBrowser(pdf);
  }
  if (!pdfData) {
    pdfData = await downloadFromArticleLink(url);
  }
  if (!pdfData) {
    throw new Error("failed to get data from the pdf link or the article link");
  }
  return pdfData;
}
