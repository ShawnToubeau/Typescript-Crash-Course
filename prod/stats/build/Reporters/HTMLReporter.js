"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HTMLReporter = /** @class */ (function () {
    function HTMLReporter() {
    }
    HTMLReporter.prototype.print = function (report) {
        var html = "\n      <div>\n        <h1>Analysis Output</h1>\n        <div>" + report + "</div>\n      </div>\n    ";
        fs_1.default.writeFileSync('report.html', html);
    };
    return HTMLReporter;
}());
exports.HTMLReporter = HTMLReporter;
