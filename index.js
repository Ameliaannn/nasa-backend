const express = require('express');
const cors = require('cors');
const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 路由导入
const nasaRouter = require('./routes/nasaRouter');
const marsRouter = require('./routes/marsRouter');
const epicRouter = require('./routes/epicRouter');
const asteroidRouter = require('./routes/asteroidRouter');

// 路由挂载（避免重复）
app.use('/api/nasa', nasaRouter);
app.use('/api/mars', marsRouter);
app.use('/api/epic', epicRouter);
app.use('/api/asteroids', asteroidRouter); // 让前端直接访问 /api/asteroids?date=xxx

// 启动服务
app.listen(5000, () => {
    console.log('🚀 Server running at http://localhost:5000');
});

// 定时任务
require('./cronjob');