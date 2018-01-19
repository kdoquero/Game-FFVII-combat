"use strict"
class Persorev {
    constructor(name, pv, cp, str, def, item, maxPv, idleAnim ,skills = []) {
        this.name = name;
        this.pv = pv;
        this.cp = cp;
        this.str = str;
        this.def = def;
        this.item = item;
        this.maxPv = maxPv;
        this.idleAnim = idleAnim;
        this.skills = skills;
        
    }

    endGame() {
        if (this.pv <= 0) {
            perso1.setAttribute('class', 'perso1dead');
            console.log(`${target1.name} died`);
            gameOver.style.display ="flex";
    
            
        }
    
    };

    
}
