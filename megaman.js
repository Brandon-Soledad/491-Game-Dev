class MegaMan {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./megasprite.png");

        this.animations = [];
        
                                                          // x, y, width, height, frameCount, frameDuration, spacing, reverse, loop
        this.animations.push(new Animator(this.spritesheet, 0, 87, 75, 67, 4, 0.06, 50, false, true));
    };

    update() {

    };

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, 300, 200, 8);
    };
}
