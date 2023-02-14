export class Castle extends Phaser.GameObjects.Rectangle{
    constructor(scene){
        super(scene, 1600, 1400, 200, 1000, 0x00ff00)
        this.scene = scene
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)
        this.body.collideWorldBounds = true
        this.timeAlive = 0
    }
    preUpdate(){}
}