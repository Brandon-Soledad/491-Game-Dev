var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./megasprite.png")

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	var megaman1 = new MegaMan(gameEngine);
	gameEngine.init(ctx);
	gameEngine.addEntity(megaman1);
	gameEngine.start();
});
