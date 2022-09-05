const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
sharp.cache(false);

random = (pathname) => {
	const files = fs.readdirSync(pathname);
	const length = files.length;
	const randomNumber = Math.floor(Math.random() * length);
	return path.resolve(`${pathname}/${files[randomNumber]}`);
};

compositeImage = async () => {
	const lengthFolder = fs.readdirSync("src/build/images")?.length || 0;
	await sharp(random("src/images/bg"))
		.resize(640, 480)
		.composite([
			{
				input: random("src/images/cars"),
				gravity: "center",
			},
			{
				input: random("src/images/stuff"),
				gravity: "southeast",
			},
			{
				input: random("src/images/stuff"),
				gravity: "northwest",
			},
		])
		.toFile(path.resolve(`src/build/images/${lengthFolder}.png`));
};

try {
	fs.mkdirSync(path.resolve("src/build"));
	fs.mkdirSync(path.resolve("src/build/images"));
	fs.mkdirSync(path.resolve("src/build/json"));
} catch (err) {}

main = async () => {
	for (let i = 0; i < 1000; i++) {
		await compositeImage();
	}
};

main();
