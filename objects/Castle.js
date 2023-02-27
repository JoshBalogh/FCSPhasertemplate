export class Castle extends Phaser.GameObjects.Rectangle{
    constructor(scene){
        super(scene, 1600, 1400, 200, 1000, 0x00ff00)
        this.scene = scene
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)
        this.body.collideWorldBounds = true
        this.timeAlive = 0
        this.hp = 100
        this.bghprect  = this.scene.add.rectangle(1190, 50, 400, 50, 0xff0000)
        this.hprect = this.scene.add.rectangle(1190, 50, 400, 50, 0x00ff00)
        
    }
    preUpdate(){
    
      this.hprect.width = this.hp * 4

    }
    
}