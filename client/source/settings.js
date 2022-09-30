export default {

	title: 'LaCrypte - Online',

	ttl: 600000,

	motd: `<pre>nLA CRYPTE v.0.0.1
	https://github.com/HadrienBoyer/LaCrypte \n
	Tip of the day: /help                                                ----------------------------------------------------------------------</pre>`,

	nick: {
		maxLen: 20,
		minLen: 2,
	},

	key: {
		maxLen: 1024,
		minLen: 8,
	},

	room: {
		minLen: 1,
		maxLen: 64
	},

	notifications: {
		maxOnePerMs: 3000
	}
};