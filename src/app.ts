import * as bodyParser from "body-parser";
import express from "express";
class App {
    public app: express.Application;
    constructor() {
        this.config();
    }
    public config(): void {

        this.app = express();
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.route("/").get((req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(200).send("Project is scaffolded");
        });

        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction): any => {

            return next();
        });

        this.app.use(express.static("public"));
    }
}

export default new App().app;
