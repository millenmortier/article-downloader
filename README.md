# Article Downloader

Given the data for a Google Scholar article, downloads a PDF.

In Google Scholar, PDF's can be obtained in two ways:

1. The PDF link is already present in the result
2. You enter the article link in a tool like SciHub, and it returns the
   PDF for you.

This package's defaul export supports both methods.

## Installation

```sh
npm i @millenmortier/article-downloader
```

## Usage

```js
import download from '@millenmortier/article-downloader';

/**
 * `download` receives as it's argument an object with either a 'pdf', of a 'url' (the article url).
 * (This is for better interoperability with other libraries).
 *
 * If a `pdf` is provided, the PDF is downloaded using method 1. If a `url` is provided, the PDF is downloaded using
 * method 2. If both are provided, first method 1 is tried, and only if it fails is method 2 performed.
 */

(async () => {
  // Valid ✅
  const pdfData = await download({
    pdf: 'https://www.sciencedirect.com/science/article/pii/S2212827119309813/pdf?md5=7f49ba5f9d451a1eda1d49ab2b4d1803&pid=1-s2.0-S2212827119309813-main.pdf',
  });

  // Valid ✅
  const pdfData = await download({
    url: 'https://www.sciencedirect.com/science/article/pii/S2212827119309813',
  });

  // Valid ✅
  const pdfData = await download({
    pdf: 'https://www.sciencedirect.com/science/article/pii/S2212827119309813/pdf?md5=7f49ba5f9d451a1eda1d49ab2b4d1803&pid=1-s2.0-S2212827119309813-main.pdf',
    url: 'https://www.sciencedirect.com/science/article/pii/S2212827119309813',
  });
})();
```
