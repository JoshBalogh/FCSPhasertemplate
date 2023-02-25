export class Projectile extends Phaser.GameObjects.Rectangle {
    constructor(scene, target, x, y){
        super(scene, x, y, 20, 20, 0xff22ff)
        this.scene = scene
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)
        this.body.collideWorldBounds = true
        //this.damage = dm
        this.target = target
        this.alive = true
        this.ttl = 1000 //ttl is TIME TO LIVE
    }
    preUpdate(t, d){
        this.ttl -= d
        if(this.ttl <= 0){
            this.alive = false
        }
        if(this.target){
            this.scene.physics.moveToObject(this, this.target, 1250)
        }else{
            this.alive = false
        }
        if(!this.alive){
            this.destroy()
        }
        

    }
}
