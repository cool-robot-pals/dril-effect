const app = require('./src/express.js');
const config = require('./.hellarc');

app.listen(config.ports.live, () =>
	console.log(`🍦 Running on http://localhost:${config.ports.live}/ !`)
);
