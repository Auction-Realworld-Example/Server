const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
sharp.cache(false);

const rootDir = path.resolve("src");

const random = (pathname, folderName) => {
	const files = fs.readdirSync(pathname);
	const randomIndex = Math.floor(Math.random() * files.length);
	return `${rootDir}/images/${folderName}/${files[randomIndex]}`;
};

const compositeImage = async () => {
	console.log(fs.readdirSync("src/build/images").length);
	await sharp(random("src/images/bg", "bg"))
		.resize(640, 480)
		.composite([
			{
				input: random("src/images/cars", "cars"),
				gravity: "center",
			},
			{
				input: random("src/images/stuff", "stuff"),
				gravity: "southeast",
			},
			{
				input: random("src/images/stuff", "stuff"),
				gravity: "northwest",
			},
		])
		.toFile(
			`${rootDir}/build/images/${fs.readdirSync("src/build/images").length}.png`
		);
};

try {
	fs.mkdirSync(path.resolve("src/build"));
	fs.mkdirSync(path.resolve("src/build/images"));
	fs.mkdirSync(path.resolve("src/build/json"));
} catch (err) {}

(async () => {
	for (let i = 0; i < 100; i++) {
		await compositeImage();
	}
})();
