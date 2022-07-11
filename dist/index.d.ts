/// <reference types="node" />
export default function getPdfDataForArticle({ pdf, url, }: {
    pdf?: string;
    url: string;
}): Promise<Buffer>;
