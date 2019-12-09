import { NextFunction, Request, Response } from "express";

export class Routes {
    public routes(app: any): void {
        app.route("/").get((req: Request, res: Response, next: NextFunction) => {
            res.status(200).send({ message: "Done" });
        });
    }}
