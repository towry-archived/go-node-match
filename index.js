#!/usr/bin/env node

const fs = require('fs');

function main() {
	fs.open('./test.txt', 'r', function (status, fd) {
		if (status) {
			console.log(status.message);
			return;
		}

		var buf = new Buffer(100);
		var count = 0;

		for (;;) {

			var num = fs.readSync(fd, buf, 0, 100, null);
			count += num;
			if (num === 0) {
				break;
			}
		}

		console.log("done", count);
	})
}

main()
