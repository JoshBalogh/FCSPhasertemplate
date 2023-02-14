export class Projectile extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y){
        super(scene, x, y, w, h)
        this.damage = dm
    }
    preUpdate(){}
}
