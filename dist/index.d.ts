/// <reference types="node" />
export default function getPdfDataForArticle({ url, pdf, }: {
    url: string;
    pdf: string;
}): Promise<Buffer>;
