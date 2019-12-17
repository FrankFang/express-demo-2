import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  res.write('hi'); // 不能用 send 用两次，所以改成 write
  next();
});
app.use((req, res, next) => {
  console.log(req.url);
  res.write('hi');
  next();
});
app.use((req, res, next) => {
  res.end(); // 不 end 不行
  next(); // next() 好像可以省略
});

app.listen(3000);
