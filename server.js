const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const expressPlayground =
require('graphql-playground-middleware-express').default;
const schema = require('./schema');

const app = express();

app.all('/graphql', createHandler({ schema }));

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen(3000);