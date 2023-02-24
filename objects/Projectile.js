import {Archer} from '../Objects/Archer.js'
export class Projectile extends Phaser.GameObjects.Rectangle {
    constructor(scene, target){
        super(scene, Archer.x, Archer.y, 50, 20, 0xff2200)
        this.scene = scene
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)
        this.body.collideWorldBounds = true
        //this.damage = dm
        this.target = target
    }
    preUpdate(t, d){
         if (this.target) this.scene.physics.moveToObject(this, this.target, 500)
    }
}
