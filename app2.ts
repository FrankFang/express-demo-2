import express from 'express';
// 源码里说应该用 import * as express from "express";
// 但是使用后报错，所以就改了，不用太纠结到底用哪个，哪个能用就用哪个
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));