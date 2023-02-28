import { Archer } from '../objects/Archer.js';
import { Castle } from '../objects/Castle.js';
import { Enemy } from '../objects/Enemy.js'

export class MainLevel extends Phaser.Scene {
  constructor() {
    super({ key: "main-level" });
    this.enemies = []
    this.nextEnemy = 70
    this.nextBigEnemy = 75
    this.enemyDelay = 1000
    this.projectiles = []
  } 
 

  preload() {
    console.log("loading MainLevel");
  }

  create() {

    this.path = new Phaser.Curves.Path(100, 500);
    this.path.lineTo(300, 500)
    this.path.lineTo(300, 100)
    this.path.lineTo(500, 100)
    this.path.lineTo(500, 900)
    this.path.lineTo(700, 900)
    this.path.lineTo(700, 100)
    this.path.lineTo(900, 100)
    this.path.lineTo(900, 900)
    this.path.lineTo(1100, 900)
    this.path.lineTo(1100, 500)
    this.path.lineTo(1400, 500)

    this.castle = new Castle(this)

    const e = new Enemy(this, 100, 100, 'darkSlime')

    new Archer(this, 1500, 100, e)
    new Archer(this, 1500, 500, e)
    new Archer(this, 1500, 900, e)


    

    e.setEnemyPath(this.path)
    this.enemies.push(e)
    this.createColliders();
  }
  update(timestamp, delta) {
    // this runs every frame
    // delta can be used to determine the number of milliseconds since the last update

    this.nextEnemy -= delta;
    if(this.nextEnemy <= 0){
      const e = new Enemy(this, 100, 100, 'regSlime')
      e.setEnemyPath(this.path)
      this.enemies.push(e)
      this.nextEnemy = this.enemyDelay
      this.enemyDelay *= .99
    }
    this.nextBigEnemy -= delta
    if(this.nextBigEnemy <= 0){
      const e = new Enemy(this, 100, 100, 'darkSlime')
      e.setEnemyPath(this.path)
      this.enemies.push(e)
      this.nextBigEnemy = this.enemyDelay
      this.enemyDelay *= .99
    }

    if(this.castle.hp <= 0){
      this.scene.pause()
      this.castle.hprect.width = 0
      this.add.text(700, 700, ' GAME OVER')
    }
  }

  
  createColliders() {
    this.physics.add.overlap(
      this.enemies, 
      this.castle,
      this.castleHealth,
      null,
      this
    )

    this.physics.add.collider(
      this.enemies,
      this.projectiles,
      this.deadSlimes,
      null, 
      this
    )
  }
  deadSlimes(e, p) {
    e.alive = false
    p.alive = false
    
  }
  castleHealth(e, c){
    if(e.alive){
      this.castle.hp -= 5
    }
    e.alive = false
  }

  
}