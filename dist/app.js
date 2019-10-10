"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.config();
    }
    config() {
        this.app = express_1.default();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.route("/").get((req, res, next) => {
            res.status(200).send("Project is scaffolded");
        });
        this.app.use((req, res, next) => {
            return next();
        });
        this.app.use(express_1.default.static("public"));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map