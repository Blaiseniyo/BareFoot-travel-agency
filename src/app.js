import express from 'express';
import swaggerUI from 'swagger-ui-express';
import 'dotenv/config';
import db from './config/connection';
import routes from './routes/routes';
import adminRoles from './routes/adminRoles';
import swaggerDocument from '../swagger.json';

const app = express();
app.use(express.json());

app.use(express.json());

// routes
app.use('/', routes);
app.use('/admin', adminRoles);

// docuemntation route
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// db connection check
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log(`Error: ${err}`));

const port = process.env.PORT || 3000;

// db.authenticate()
//   .then(() => console.log('Database connected...'))
//   .catch((err) => console.log(`Error: ${err}`));

app.listen(port, () => {
  console.log(`Server started on port ${port} ...`);
  console.log(process.env.NODE_ENV);
});

export default app;
