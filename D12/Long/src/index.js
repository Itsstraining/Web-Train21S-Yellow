const app = require('./server');
const config = require('./config');

app.listen(config.PORT, config.HOST, () => {
    console.log(`Server is running on ${config.HOST}:${config.PORT}`);
});

