"use strict"
class Cloud extends Persorev {
    constructor(){
        let normalAttack = new Skill("Attack", 1, 1,"perso1atk1");
        let contreTaillade = new Skill("Contre-taillade", 5, 3,"perso1atk2");
        let climHazard = new Skill("Climhazard", 10, 6, "perso1atk3");
        let omniSlash = new Skill("Omnislash", 35, 9, "perso1Atk4");
        let firebolt = new Skill ("Firebolt",6,4,"perso1mag1");
        let bahamut = new Skill ("Bahamut",50,12,"perso1invo1")
        let skills = [normalAttack,contreTaillade,climHazard,omniSlash,firebolt,bahamut];
        super("Cloud", 250, 50, 7, 4, 4, 250,"perso1",skills);
        let _this = this;
    }

    attack(target,idAttack){
        let _this = this;
        let att = this.str + Math.floor((Math.random() * 9) + 0);
        target.pv = target.pv - att;
        console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
        perso1.setAttribute('class',`${this.skills[idAttack].anim}`);
        containerPerso.style.justifyContent = "center";
        perso1.addEventListener('animationend', function() {
        perso1.setAttribute('class',`${_this.idleAnim}`);
        containerPerso.style.justifyContent = "space-around";
        })
    };

    

    skill(target,idAttack) {
        let _this = this;
        if (this.cp < this.skills[idAttack].cp) {
            perso1.setAttribute('class',`${this.skills[0].anim}`);
            containerPerso.style.justifyContent = "center";
            perso1.addEventListener('animationend', function() {
            perso1.setAttribute('class', `${_this.idleAnim}`);
            containerPerso.style.justifyContent = "space-around";
            })
            console.log('no cp left,attaque normale');
            let att = this.str;
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv}pv`);
            console.log(`il reste à ${this.name},  ${this.pv}pv`);
    
            
            
        } else {
            perso1.setAttribute('class',`${this.skills[idAttack].anim}`);
            containerPerso.style.justifyContent = "center";
            perso1.addEventListener('animationend', function() {
            perso1.setAttribute('class', `${_this.idleAnim}`);
            containerPerso.style.justifyContent = "space-around";
        })
            console.log(`${this.skills[idAttack].name} de ${this.name}.`)
            this.cp = this.cp - this.skills[idAttack].cp;
            let att = this.str*this.skills[idAttack].str+ Math.floor((Math.random() * 4) + 0);
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att}, il lui reste ${target.pv}`);
            return target.hp;
        }

        
        
    }

    actionBlock(target) {
        this.pv = this.pv + this.def*2 + Math.floor((Math.random() * 40) + 0) - target.str;
        this.cp = this.cp + Math.floor((Math.random() * 3) + 1)
        console.log(`${this.name} bloque ,il lui reste ${this.pv}, l'attaque fait ${target.str} dégats de pv.`);
        if (this.hp > this.maxPv)  {
            this.hp = this.maxPv;
            
        }
        if (this.cp > this.cp)  {
            this.cp = this.cp;
            
        }
        
    };
}