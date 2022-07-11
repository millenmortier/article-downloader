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
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_1 = require("playwright");
function default_1(pdfUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield playwright_1.firefox.launch({
            headless: true,
        });
        const page = yield browser.newPage();
        let response;
        try {
            [response] = yield Promise.all([
                page.waitForResponse((response) => __awaiter(this, void 0, void 0, function* () {
                    var _b;
                    const headers = yield response.allHeaders();
                    if ((_b = headers['content-type']) === null || _b === void 0 ? void 0 : _b.includes('application/pdf')) {
                        console.log(headers['content-length']);
                        return true;
                    }
                    else {
                        return false;
                    }
                }), {
                    timeout: 10000,
                }),
                page.goto(pdfUrl),
            ]);
        }
        catch (_a) {
            yield browser.close();
            return null;
        }
        const data = yield response.body();
        yield browser.close();
        return data;
    });
}
exports.default = default_1;
