"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("./utils");
var CsvFilerReader = /** @class */ (function () {
    function CsvFilerReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFilerReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (match) {
            return match.split(',');
        })
            .map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
        var MatchResult;
        (function (MatchResult) {
            MatchResult["HomeWin"] = "H";
            MatchResult["AwayWin"] = "A";
            MatchResult["Draw"] = "D";
        })(MatchResult || (MatchResult = {}));
    };
    return CsvFilerReader;
}());
exports.CsvFilerReader = CsvFilerReader;
