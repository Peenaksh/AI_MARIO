function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas')
	video = createCapture(VIDEO)
	video.size(800,400)
    video.parent('game_console')
}

function draw() {
	game()
}






