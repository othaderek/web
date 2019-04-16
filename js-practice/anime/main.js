// anime({
// 	targets: 'div.box.red',
// 	translateY: [
// 	{ value: 200, duration: 900 },
// 	{ value: 0, duration: 1200 }

// 	],
// 	rotate: {
// 		value: '1turn',
// 		easing: 'easeInOutSine'
// 	}
// });

// anime({
// 	targets: 'div.box.blue',
// 	translateY: [
// 	{ value: 200, duration: 900, delay: 100 },
// 	{ value: 0, duration: 1200 }

// 	],
// 	rotate: {
// 		value: '2turn',
// 		easing: 'easeInOutSine',
// 		delay: 500
// 	}
// });

// anime({
// 	targets: 'div.box.green',
// 	translateY: [
// 	{ value: 200, duration: 900, delay: 111 },
// 	{ value: 0, duration: 1200 }

// 	],
// 	rotate: {
// 		value: '2turn',
// 		easing: 'easeInOutSine',
// 		delay: 550
// 	}
// });

// anime({
// 	targets: 'div.box.yellow',
// 	translateY: [
// 	{ value: 200, duration: 900, delay: 125 },
// 	{ value: 0, duration: 1200 }

// 	],
// 	rotate: {
// 		value: '2turn',
// 		easing: 'easeInOutSine',
// 		delay: 600
// 	}
// });

anime({
	targets: 'div.box',
	translateY: [
	{ value: 200, duration: 900 },
	{ value: 0, duration: 1200 }

	],
	rotate: {
		value: '1turn',
		easing: 'easeInOutSine'
	},
	delay: function(el, i, l){ return i * 500}
});



