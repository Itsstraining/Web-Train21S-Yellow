const app = require('./server');
const config = require('./config');

app.listen(config.PORT, () => {
    console.log(`Server is running bruh bruh ${config.HOST}:${config.PORT}`)
});