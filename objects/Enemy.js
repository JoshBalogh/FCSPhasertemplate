export class Enemy extends Phaser.GameObjects.Rectangle {
    pathIndex = 0

constructor(scene, x, y, type) {
    super(scene, x, y, 64, 64, type)
    this.scene = scene
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.collideWorldBounds = true
    this.setOrigin(.5)
    this.setScale(0.5)
    this.timeAlive = 0
    this.type = type
    this.alive = true
    
    if(this.type === 'darkSlime'){
        this.fillColor = 0xff0000
        this.speed = 1/10000
        this.setScale(1)
    }
    if(this.type === 'regSlime'){
        this.fillColor = 0x0000ff
        this.speed = 1/5000 //in millisecond | 1000millisecond = 1 second
    }


    

 }
 setEnemyPath(p){
    this.path = p
 }
 preUpdate(t,d){
    this.timeAlive += d  * this.speed
    if(this.timeAlive > 1){
        this.timeAlive = 1
    }
    if(!this.alive){
        this.destroy()
    }

 


    const point = this.path.getPoint(this.timeAlive)
    //this.scene.physics.moveTo(this, point.x, point.y)
    this.setPosition(point.x, point.y)
    
 }
}