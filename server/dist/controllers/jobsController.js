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
exports.showStats = exports.deleteJob = exports.updateJob = exports.getAllJobs = exports.createJob = void 0;
const http_status_codes_1 = require("http-status-codes");
const Job_1 = __importDefault(require("../models/Job"));
const errors_1 = require("../errors");
const createJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { position, company } = req.body;
    if (!position || !company) {
        throw new errors_1.BadRequestError("Please provide all values");
    }
    req.body.createdBy = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
    const job = yield Job_1.default.create(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ job });
});
exports.createJob = createJob;
const getAllJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("getAllJobs");
});
exports.getAllJobs = getAllJobs;
const updateJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("updateJob");
});
exports.updateJob = updateJob;
const deleteJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("deleteJobs ");
});
exports.deleteJob = deleteJob;
const showStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("showStats");
});
exports.showStats = showStats;
