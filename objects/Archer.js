import {Projectile} from '../objects/Projectile.js'
export class Archer extends Phaser.GameObjects.Ellipse {
constructor(scene, x, y, target){
    super(scene, x, y, 100, 100, 0xffffff)
    this.scene = scene
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.collideWorldBounds = true
    this.target = target
    this.nextProjectile = 5000
    this.projectiles = []

}
    preUpdate(timestamp, delta){
        //add a timer for the projectile to shoot slimes(enemy) don't know if this will work need to add the x and y for projectile don't know how i'd don this ***


        this.nextProjectile -= delta
        if(this.nextProjectile <= 0){
            const p = new Projectile(this.scene, this.target)
            this.projectiles.push(p)
            this.nextProjectile = 500
        }
    }
}