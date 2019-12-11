import {Routes} from "./routes"
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Routes Controller', () => {
    // let app: express.Application;
    beforeEach(()=>{
        // app = express();
    })
  it('routes class should exist', () => {
    const routes = new Routes();
    expect(routes).to.be.instanceOf(Routes);
  });
});