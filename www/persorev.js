"use strict"
class Persorev {
    constructor(name, pv, cp, str, def, item, maxPv, idleAnim ,skills = [],maxCp,summonCount,limitBreak,deadAnim) {
        this.name = name;
        this.pv = pv;
        this.cp = cp;
        this.str = str;
        this.def = def;
        this.item = item;
        this.maxPv = maxPv;
        this.idleAnim = idleAnim;
        this.skills = skills;
        this.maxCP = maxCp;
        this.summonCount = summonCount;
        this.limitBreak = limitBreak;
        this.deadAnim = deadAnim;
        
    }

    iaAttack(target,idPerso) {
        let rand =Math.round(Math.random() * 5)
        if (this.pv < 45 && this.item >=1) {
            this.useItem(hiPotion,5,perso2);
    
        }
        if (this.cp < 5 && this.item >=1) {
            this.useCpItem(manaPot);

        } else switch (rand) {
            case 0 : this.attack(target,0,idPerso);
                break;
            case 1 : this.skill(target,1,idPerso);
                break;
            case 2 : this.skill(target,2,idPerso);
                break;
            case 3 : this.skill(target,3,idPerso);
                break;
            case 4 : this.actionBlock(target,4,idPerso);
                break;
            case 5 : this.summon(target,7,idPerso);

                
            default:
                break;
        }    
    
        
    };

    showLimitBreak (){
        if (this.limitBreak >=255) {
            limitBreakButton.style.display ="flex";
            
        } else {
            limitBreakButton.style.display ="none";
        
        }
    }

    attack(target,idAttack,idPerso){
        let _this = this;
        this.limitBreak = this.limitBreak + Math.floor((Math.random() * 25) + 3);
        let att = this.str + Math.floor((Math.random() * 9) + 0);
        target.pv = target.pv - att;
        console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
        idPerso.setAttribute('class',this.skills[idAttack].anim);
        containerPerso.style.justifyContent = "center";
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.play();
        idPerso.addEventListener('animationend', function() {
        idPerso.setAttribute('class',`${_this.idleAnim}`);
        containerPerso.style.justifyContent = "space-around";
        })

    };

    summon(target,idAttack,idPerso,idtarget,idDef){
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
        this.limitBreak = this.limitBreak + Math.floor((Math.random() * 25) + 3);
        let _this = this;
        idPerso.setAttribute('class',this.skills[idAttack].anim);
        containerPerso.style.justifyContent = "center";
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.play();
        this.cp = 0;
        idPerso.addEventListener('animationend', function() {
        idPerso.setAttribute('class',`${_this.idleAnim}`);
        containerPerso.style.justifyContent = "space-around";
        });
        this.summonCount--;

    };
    

    skill(target,idAttack,idPerso) {
        this.limitBreak = this.limitBreak + Math.floor((Math.random() * 25) + 3);
        let _this = this;
        if (this.cp < this.skills[idAttack].cp) {
            idPerso.setAttribute('class',this.skills[0].anim);
            containerPerso.style.justifyContent = "center";
            let hitAudio = new Audio(this.skills[0].audio);
            hitAudio.play();
            idPerso.addEventListener('animationend', function() {
            idPerso.setAttribute('class', `${_this.idleAnim}`);
            containerPerso.style.justifyContent = "space-around";
            })
            console.log('no cp left,attaque normale');
            let att = this.str;
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv}pv`);
            console.log(`il reste à ${this.name},  ${this.pv}pv`);
    
            
            
        } else {
            idPerso.setAttribute('class',this.skills[idAttack].anim);
            containerPerso.style.justifyContent = "center";
            let hitAudio = new Audio(this.skills[idAttack].audio);
            hitAudio.play();
            idPerso.addEventListener('animationend', function() {
            idPerso.setAttribute('class', _this.idleAnim);
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

    magick(target,idAttack,idPerso) {
        let _this = this;
        if (this.cp < this.skills[idAttack].cp) {
            this.limitBreak = this.limitBreak + Math.floor((Math.random() * 3) + 1);
            idPerso.setAttribute('class',this.skills[idAttack].anim);
            containerPerso.style.justifyContent = "center";
            let hitAudio = new Audio(this.skills[idAttack].audio);
            hitAudio.play();
            idPerso.addEventListener('animationend', function() {
            idPerso.setAttribute('class', `${_this.idleAnim}`);
            containerPerso.style.justifyContent = "space-around";
            })
            console.log('no cp left,attaque normale');
            let att = this.skills[idAttack].str;
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`petite magie,${target.name} perd ${att} pv, il lui reste ${target.pv}pv`);
            console.log(`il reste à ${this.name},  ${this.pv}pv`);
    
            
            
        } else {
            this.limitBreak = this.limitBreak + Math.floor((Math.random() * 75) + 15);
            idPerso.setAttribute('class',this.skills[idAttack].anim);
            let hitAudio = new Audio(this.skills[idAttack].audio);
            hitAudio.play();
            idPerso.addEventListener('animationend', function() {
                idPerso.setAttribute('class',_this.idleAnim);
                containerPerso.style.justifyContent = "space-around";
            })
            console.log(`${this.skills[idAttack].name} de ${this.name}.`)
            this.cp = this.cp - this.skills[idAttack].cp;
            let att = this.skills[idAttack].str+ Math.floor((Math.random() * 4) + 0);
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`);
            console.log(`La magie augmente de beaucoup la jauge de limit break :${this.limitBreak} /255`);
            console.log(`${target.name} perd ${att}, il lui reste ${target.pv}`);
        }

        
        
    }

    limitBreakSkill(target,idAttack,idPerso) {
        let _this = this;
        idPerso.setAttribute('class',this.skills[idAttack].anim);
        containerPerso.style.justifyContent = "center";
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.play();
        idPerso.addEventListener('animationend', function() {
        idPerso.setAttribute('class', _this.idleAnim);
        containerPerso.style.justifyContent = "space-around";
        })
        console.log(`${this.skills[idAttack].name} de ${this.name}.`)
        this.cp = this.cp - this.skills[idAttack].cp;
        let att = this.str*this.skills[idAttack].str+ Math.floor((Math.random() * 50) + 0);
        target.pv = target.pv - att;
        console.log(`il reste ${this.cp} cp à ${this.name}.`)
        console.log(`${target.name} perd ${att}, il lui reste ${target.pv}`);
        this.limitBreak = 0;
        return target.hp;
    
    }

    actionBlock(target,idAttack,idPerso) {
        this.limitBreak = this.limitBreak + Math.floor((Math.random() * 25) + 3);
        if (this.hp > this.maxPv)  {
            this.hp = this.maxPv;
            
        }
        let _this = this;
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.volume = 0.2;
        hitAudio.play();
        idPerso.setAttribute('class',`${this.skills[idAttack].anim}`);
        idPerso.addEventListener('animationend', function() {
        idPerso.setAttribute('class', `${_this.idleAnim}`);
        })
        this.pv = this.pv + this.def*2 + Math.floor((Math.random() * 40) + 0) - target.str;
        this.cp = this.cp + Math.floor((Math.random() * 3) + 1)
        console.log(`${this.name} bloque ,il lui reste ${this.pv}, l'attaque fait ${target.str} dégats de pv.`);
        
        
    };

    useItem(item,idAttack,idPerso) {
        this.limitBreak = this.limitBreak + Math.floor((Math.random() * 25) + 3);
        if (this.item == 0) {
            item1.style.display ='none';
            item2.style.display ='none';
            console.log('no item left');
    
            
        }
    
        if (this.hp >= this.maxPV)  {
            this.hp = this.maxPV;
            
        } else {
            let _this = this;
            idPerso.setAttribute('class',`${this.skills[idAttack].anim}`);
            idPerso.addEventListener('animationend', function() {
            idPerso.setAttribute('class', `${_this.idleAnim}`);
            })
            
            this.pv = this.pv + item.hp
            this.item--
            console.log(`used ${item.name} recovered ${item.hp} pv. ${this.pv} left.` );
        }
    };



    endGame(idPerso) {
        if (this.pv <= 0) {
            idPerso.setAttribute('class', this.deadAnim);
            idPerso.addEventListener('animationend', function() {
                body.setAttribute('id','gameover');
                body.addEventListener('onclick',function () {
                    windows.location.reload();
                    
                })
            })
            
    

        }
    }
    
    useCpItem(item) {
        if (this.item <= 0) {
            item1.style.display ='none';
            item2.style.display ='none';
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
