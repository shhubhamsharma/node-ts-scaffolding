import * as http from "http";
import app from "./app";

http.createServer(app).listen(9000, () => {
        // tslint:disable-next-line:no-console
console.log("Server started");
});
