noseX = ""
noseY = ""

function preload() 
{
	mario_coin = loadSound("coin.wav")
	game_over = loadSound("gameover.wav")
	mario_jump = loadSound("jump.wav")
	mario_kick = loadSound("kick.wav")
	mario_die = loadSound("mariodie.wav")
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}
function setup() 
{
	canvas = createCanvas(1240,336);
	canvas.parent("canvas_1")

	instializeInSetup(mario);

	video = createCapture(VIDEO)
	video.size(1200, 336)
	video.parent("game_console")

	poseNet = ml5.poseNet(video , modelLoaded)
	poseNet.on('pose' , gotposes)
}
function modelLoaded() 
{
	console.log('Model is Loaded')
}
function gotposes(results) 
{
	if (results.length > 0) 
	{
		console.log(results)
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
	}
}
function draw() 
{
	game()
}