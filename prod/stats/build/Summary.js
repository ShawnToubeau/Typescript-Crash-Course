"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
var HTMLReporter_1 = require("./Reporters/HTMLReporter");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HTMLReporter_1.HTMLReporter());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
