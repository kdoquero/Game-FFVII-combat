"use strict"
class Perso1 extends Persorev {
    constructor(){
        let normalAttack = new Skill("Attack", 1, 1,"perso1atk1","assets/audio/hit.wav");
        let contreTaillade = new Skill("Contre-taillade", 5, 3,"perso1atk2","assets/audio/hit.wav");
        let climHazard = new Skill("Climhazard", 10, 6, "perso1atk3","assets/audio/hit.wav");
        let omniSlash = new Skill("Omnislash", 35, 9, "perso1Atk4","assets/audio/Final Fantasy VII  Omnislash .mp3");
        let firebolt = new Skill ("Firebolt",6,4,"perso1mag1");
        let bahamut = new Skill ("Bahamut",0,12,"perso1invo1","assets/audio/hit.wav");
        let blockAct = new Skill ("Block",0,0,"perso1block","assets/audio/shield block.mp3");
        let itemAct = new Skill ('Potion',0,0,"perso1item");
        let deadPerso1 = new Skill ('dead',0,0,"perso1dead");
        super("Cloud", 250, 50, 7, 4, 4, 250,"perso1",[normalAttack,contreTaillade,climHazard,omniSlash,firebolt,bahamut,blockAct,itemAct,deadPerso1],50,1);
        let _this = this;
    }

    endGame(idAttack) {
        let _this = this;
        if (this.pv <= 0) {
            perso1.setAttribute('class',`${this.skills[idAttack].anim}`);
            console.log(`${this.name} died`);
            perso1.addEventListener('animationend', function() {
                perso1.setAttribute('class',`${_this.idleAnim}`);
                containerPerso.style.justifyContent = "space-around";
            })
            gameOver.style.display ="flex";
    
            
        }

    
    };

    attack(target,idAttack){
        if (target.pv <= 0) {
            gameOver.style.display ="flex";
        }
        let _this = this;
        let att = this.str + Math.floor((Math.random() * 9) + 0);
        target.pv = target.pv - att;
        console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
        perso1.setAttribute('class',this.skills[idAttack].anim);
        containerPerso.style.justifyContent = "center";
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.play();
        perso1.addEventListener('animationend', function() {
        perso1.setAttribute('class',`${_this.idleAnim}`);
        containerPerso.style.justifyContent = "space-around";
        })

    };

    summon(target,idAttack){
        if (target.pv <= 0) {
            gameOver.style.display ="flex";
        }
        if (this.summonCount <=0) {
            console.log("pouvoir d'invocation deja utilisé, attaque nulle");
        }
        if (this.cp < this.maxCP/2 && this.summonCount >= 1) {
            console.log(` Demi-Invocation de ${this.skills[idAttack].name}.`)
            let att = this.skills[idAttack].str+ Math.floor((Math.random() * 75) + 25);
            target.pv = target.pv - att;
            console.log(`pas assez de cp pour une full attaque,degats max divisé par 2 !${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
        } 
        if (this.cp >= this.maxCP/2 && this.summonCount >= 1) {
            console.log(`Invocation de ${this.skills[idAttack].name}.`)
            let att = this.skills[idAttack].str+ Math.floor((Math.random() * 200) + 50);
            target.pv = target.pv - att;
            console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
        }
        let _this = this;
        perso1.setAttribute('class',this.skills[idAttack].anim);
        containerPerso.style.justifyContent = "center";
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.play();
        this.cp = 0;
        perso1.addEventListener('animationend', function() {
        perso1.setAttribute('class',`${_this.idleAnim}`);
        containerPerso.style.justifyContent = "space-around";
        });
        this.summonCount--;

    };
    

    skill(target,idAttack) {
        if (target.pv <= 0) {
            gameOver.style.display ="flex";
        }
        let _this = this;
        if (this.cp < this.skills[idAttack].cp) {
            perso1.setAttribute('class',this.skills[0].anim);
            containerPerso.style.justifyContent = "center";
            let hitAudio = new Audio(this.skills[0].audio);
            hitAudio.play();
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
            perso1.setAttribute('class',this.skills[idAttack].anim);
            containerPerso.style.justifyContent = "center";
            let hitAudio = new Audio(this.skills[idAttack].audio);
            hitAudio.play();
            perso1.addEventListener('animationend', function() {
            perso1.setAttribute('class', _this.idleAnim);
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

    actionBlock(target,idAttack) {
        if (target.pv <= 0) {
            gameOver.style.display ="flex";
        }
        if (this.hp > this.maxPv)  {
            this.hp = this.maxPv;
            
        }
        // if (this.cp > this.cp)  {
        //     this.cp = this.cp;
            
        // }
        let _this = this;
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.volume = 0.2;
        hitAudio.play();
        perso1.setAttribute('class',`${this.skills[idAttack].anim}`);
        perso1.addEventListener('animationend', function() {
        perso1.setAttribute('class', `${_this.idleAnim}`);
        })
        this.pv = this.pv + this.def*2 + Math.floor((Math.random() * 40) + 0) - target.str;
        this.cp = this.cp + Math.floor((Math.random() * 3) + 1)
        console.log(`${this.name} bloque ,il lui reste ${this.pv}, l'attaque fait ${target.str} dégats de pv.`);
        
        
    };

    endGame(target1,target2) {
        if (this.pv <= 0) {
            perso1.setAttribute('class', 'perso1dead');
            console.log(`${this.name} died`);
            
        }
        if (target2.pv <= 0) {
            perso2.setAttribute('class', 'perso2dead');
            console.log(`${target2.name} died`);
    
            
        }
    
    };

    useItem(item,idAttack) {
        if (this.item == 0) {
            item1.style.display ='none';
            item2.style.display ='none';
            item3.style.display ='none';
            item4.style.display ='none';
            console.log('no item left');
    
            
        }
    
        if (this.hp >= this.maxPV)  {
            this.hp = this.maxPV;
            
        } else {
            let _this = this;
            perso1.setAttribute('class',`${this.skills[idAttack].anim}`);
            perso1.addEventListener('animationend', function() {
            perso1.setAttribute('class', `${_this.idleAnim}`);
            })
            
            this.pv = this.pv + item.hp
            this.item--
            console.log(`used ${item.name} recovered ${item.hp} pv. ${this.pv} left.` );
        }
    };


}