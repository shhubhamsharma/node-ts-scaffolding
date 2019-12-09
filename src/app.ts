import * as bodyParser from "body-parser";
import express from "express";
import { Routes } from "./routes/routes";

class App {
    public app: express.Application;
    public routes = new Routes();

    constructor() {
        this.config();
        this.routes.routes(this.app);
    }
    public config(): void {

        this.app = express();
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction): any => {

            return next();
        });

        this.app.use(express.static("public"));
    }
}

export default new App().app;
