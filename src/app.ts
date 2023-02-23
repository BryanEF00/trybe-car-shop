import express from 'express';
import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

import errorHandler from './middlewares/error';
import carRouter from './routes/car';
import motorcycleRouter from './routes/motorcycle';

const app = express();
app.use(express.json());

app.use(carRouter);
app.use('/motorcycles', motorcycleRouter);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(errorHandler);

export default app;
