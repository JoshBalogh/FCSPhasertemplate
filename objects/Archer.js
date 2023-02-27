import {Projectile} from '../objects/Projectile.js'
export class Archer extends Phaser.GameObjects.Ellipse {
constructor(scene, x, y, target){
    super(scene, x, y, 100, 100, 0xffffff)
    this.scene = scene
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.collideWorldBounds = true
    this.target = target
    this.nextProjectile = Math.random()*500+500


}
    preUpdate(timestamp, delta){
        //add a timer for the projectile to shoot slimes(enemy) don't know if this will work need to add the x and y for projectile don't know how i'd don this ***
        if(this.target && !this.target.alive){ //!this.target?.alive - these are the same
            this.target = undefined 
        }else{
            this.target = this.scene.enemies.find(e => e.alive)
        }
        this.nextProjectile -= delta
        if(this.nextProjectile <= 0 && this.target?.alive){
            const p = new Projectile(this.scene, this.target, this.x, this.y)
            this.scene.projectiles.push(p)
            this.nextProjectile = Math.random()*1000+500
        }
        
    }
}