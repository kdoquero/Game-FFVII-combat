class Perso2 extends Persorev {
    constructor(){
        let normalattack = new Skill("Attack", 0, 1, "perso2atk1","assets/audio/hit.wav");
        let sectionx = new Skill("Section", 4, 2, "perso2atk2");
        let spaceSlash = new Skill("SpaceSlash", 9, 4,"perso2atk3");
        let xcross = new Skill("X-Cross",25,8,"perso2atk4");
        let xzoolomid = new Skill("Xzoolomid",0,11,"perso2invoc","asset/audio/hit.wav");

        let blockAct2 = new Skill ("Block",0,0,"perso2block","assets/audio/shield block.wav");
        let itemAct2 = new Skill ('Potion',0,0,"perso2item");
        let deadPerso2 = new Skill ('dead',0,0,"perso2dead");

        super("Sephiroth", 200, 35, 14, 2, 2, 200,"perso2",[normalattack, sectionx, spaceSlash,xcross,blockAct2,itemAct2,deadPerso2],35,1);
        let _this = this;
    }
    
    iaAttack(target) {
        let rand =Math.round(Math.random() * 5)
        if (this.pv < 45 && this.item >=1) {
            this.useItem(hiPotion,5);
        }
        if (this.cp < 5 && this.item >=1) {
            this.useCpItem(manaPot);
        }  
        switch (rand) {
            case 0 : this.attack(target,0);
                break;
            case 1 : this.skill(target,1);
                break;
            case 2 : this.skill(target,2);
                break;
            case 3 : this.skill(target,3);
                break;
            case 4 : this.actionBlock(cloud,4);
                break;
            // case 5 : this.useItem(hiPotion);
            //     break;

                
            default:
                break;
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
        perso2.setAttribute('class',`${this.skills[idAttack].anim}`);
        containerPerso.style.justifyContent = "center";
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.play();
        perso2.addEventListener('animationend', function() {
        perso2.setAttribute('class',`${_this.idleAnim}`);
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
        let _this = this;
        if (target.pv <= 0) {
            gameOver.style.display ="flex";
        }
        if (this.cp < this.skills[idAttack].cp) {
            perso2.setAttribute('class',`${this.skills[0].anim}`);
            containerPerso.style.justifyContent = "center";
            perso2.addEventListener('animationend', function() {
            perso2.setAttribute('class', `${_this.idleAnim}`);
            containerPerso.style.justifyContent = "space-around";
            })
            console.log('no cp left,attaque normale');
            let att = this.str;
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv}pv`);
            console.log(`il reste à ${this.name},  ${this.pv}pv`);
    
            
            
        } else {
            perso2.setAttribute('class',`${this.skills[idAttack].anim}`);
            containerPerso.style.justifyContent = "center";
            perso2.addEventListener('animationend', function() {
            perso2.setAttribute('class', `${_this.idleAnim}`);
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
        if (this.hp > this.maxPv)  {
            this.hp = this.maxPv;
            
        }
        // if (this.cp > this.cp)  {
        //     this.cp = this.cp;
            
        // }
        let _this = this;
        perso2.setAttribute('class',`${this.skills[idAttack].anim}`);
        perso2.addEventListener('animationend', function() {
        perso2.setAttribute('class', `${_this.idleAnim}`);
        })
        this.pv = this.pv + this.def*2 + Math.floor((Math.random() * 40) + 0) - target.str;
        this.cp = this.cp + Math.floor((Math.random() * 3) + 1)
        console.log(`${this.name} bloque ,il lui reste ${this.pv}, l'attaque fait ${target.str} dégats de pv.`);
        
        
    };

    endGame(target1,target2) {
        if (this.pv <= 0) {
            perso1.setAttribute('class', 'perso2dead');
            console.log(`${this.name} died`);
    
            
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
            perso2.setAttribute('class',`${this.skills[idAttack].anim}`);
            perso2.addEventListener('animationend', function() {
            perso2.setAttribute('class', `${_this.idleAnim}`);
            });
            this.pv = this.pv + item.hp
            this.item--
            console.log(`used ${this.name} recovered ${this.hp} pv. ${this.pv} left.` );
        }
    };

    useCpItem(item) {
        if (this.item == 0) {
            item1.style.display ='none';
            item2.style.display ='none';
            item3.style.display ='none';
            item4.style.display ='none';
            console.log('no item left');
    
            
        }
    
        if (this.cp >= this.maxCp)  {
            this.cp = this.maxcp;
            
        } else {
            
            this.cp = this.cp + item.cp
            this.item--
            console.log(`used ${this.name} recovered ${item.cp} cp. ${this.cp} cp left.` );
        }
    };
}