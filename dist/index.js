"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const downloadPdfWithBrowser_1 = __importDefault(require("./downloadPdfWithBrowser"));
const scihub_tools_1 = require("@millenmortier/scihub-tools");
function downloadFromArticleLink(articleLink) {
    return __awaiter(this, void 0, void 0, function* () {
        const pdfLink = yield (0, scihub_tools_1.getPdfLink)(articleLink);
        if (!pdfLink) {
            throw new Error("Couldn't get the PDF link through SciHub!");
        }
        return yield (0, downloadPdfWithBrowser_1.default)(pdfLink);
    });
}
function getPdfDataForArticle({ pdf, url, }) {
    return __awaiter(this, void 0, void 0, function* () {
        let pdfData;
        if (pdf) {
            pdfData = yield (0, downloadPdfWithBrowser_1.default)(pdf);
        }
        if (!pdfData) {
            pdfData = yield downloadFromArticleLink(url);
        }
        if (!pdfData) {
            throw new Error('failed to get data from the pdf link or the article link');
        }
        return pdfData;
    });
}
exports.default = getPdfDataForArticle;
