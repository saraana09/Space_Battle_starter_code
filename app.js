const attackButton = document.getElementById("attack")
const retreatButton = document.getElementById("retreat")

class Ship{
    constructor(hull, firePower, accuracy){
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
        this.isAlive = true;
    }
    
}
class playerShip extends Ship {
    constructor(hull, firePower, accuracy) {
        super(hull, firePower, accuracy)
        
    }
    attack(target){
        let hit = Math.random();
        if(hit< this.accuracy){
            console.log(`It is direct hit with ${this.firePower} damage! `)
            target.hull -= this.firePower;
            if(target.hull <= 0){
                target.isAlive = false;
                console.log('Enemy is dead!')
            }
        } else {
            console.log('We missed the target!')
        }
        console.log(`Alien has ${target.hull} health left`)
    
    }
}
class enemyShip extends Ship {
    constructor(hull, firePower, accuracy) {
        super(hull, firePower, accuracy)        
        this.hull = Math.floor((Math.random() * 6) + 3);
        this.firePower = Math.floor((Math.random() * 4) + 2);
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
    attack(target){
        let hit = Math.random();
        if(hit< this.accuracy){
            console.log(`Enemy hit our ship with ${this.firePower} damage! `)
            target.hull -= this.firePower;
            if(target.hull <= 0){
                target.isAlive = false;
                console.log('Our ship is destroyed!')
            }
        } else {
            console.log('They missed the target!')
        }
        console.log(`We have ${target.hull} health left`)
    
    }
}

let ourShip = new playerShip(20, 5, 0.7);

// Creating 6 alienships 
let alienShips = []
    for (let i = 0; i <  6; i++){
    alienShips[i] = new enemyShip();
    } 

function attack(playerShip, enemyShip){   
    for(let i = 0; i < enemy.length; i++){
        if(playerShip.isAlive){
            console.log(" Enemyship + (i+1)")       

            while(enemyShip[i].isAlive && playerShip.isAlive){
                playerShip.attack(enemyShip[i])
                
            } if (enemyShip[i].isAlive){
                enemyShip[i].attack(playerShip)
            }
            
        }
    }
    console.log(attack(ourShip, alienShips))
        
// document.getElementsByClassName('playerStats').innerHTML = `Hull : ${playerShip.hull} <br> FirePower : ${playerShip.firepower} <br> Accuracy : ${playerShip.accuracy}`
// document.getElementsByClassName('enemyStats').innerHTML = `Hull : ${enemyShip[i].hull} <br> FirePower : ${enemyShip[i].firepower} <br> Accuracy : ${enemyShip[i].accuracy}`
// document.getElementsByClassName('enemyStats').innerHTML = `Hull : ${enemyShip.hull} <br> FirePower : ${enemyShip.firepower} <br> Accuracy : ${enemyShip.accuracy}`
// document.getElementsByClassName('playerStats').innerHTML = `Hull : ${playerShip.hull} <br> FirePower : ${playerShip.firepower} <br> Accuracy : ${playerShip.accuracy}`

