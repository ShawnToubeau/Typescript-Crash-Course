"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (match) {
            return match.split(',');
        });
        var MatchResult;
        (function (MatchResult) {
            MatchResult["HomeWin"] = "H";
            MatchResult["AwayWin"] = "A";
            MatchResult["Draw"] = "D";
        })(MatchResult || (MatchResult = {}));
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
