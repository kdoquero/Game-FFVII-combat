"use strict"
class PersoModel {
    constructor(name, pv, cp, str, def, item, maxPv, idleAnim ,skills = [],maxCp,summonCount,limitBreak,deadAnim,id,winAnim) {
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
        this.id = id;
        this.winAnim = winAnim;
        
    }

    iaAttack(target) {
        let rand = Math.round(Math.random() * 5);
        if (this.pv < 45 && this.item >=1) {
            this.useItem(hiPotion,5);
    
        } else if (this.cp < 5 && this.item >=1) {
            this.useCpItem(manaPot,8);

        } else if (this.limitBreak >= 255 && rand <= 2){
            this.limitBreakSkill(target,10);

        } else { 
        switch (rand) {
            case 0 : this.attack(target,0);
                break;
            case 1 : this.skill(target,1);
                break;
            case 2 : this.skill(target,2);
                break;
            case 3 : this.skill(target,3);
                break;
            case 4 : this.actionBlock(target,4);
                break;
            case 5 : this.summon(target,7);
                break;
            // case 6 : this.buff(9);
            //     break;

            default:
                break;
        }    
    }
        
    };

    showLimitBreak (){
        if (this.limitBreak >=255) {
            limitBreakButton.style.display ="flex";
            
        } else {
            limitBreakButton.style.display ="none";
        
        }
    }

    attack(target,idAttack){
        let _this = this;
        
        let att = this.str + Math.floor((Math.random() * 9) + 0);
        target.pv = target.pv - att;
        target.limitBreak = target.limitBreak + att + Math.floor((Math.random() * 9) + 0);
        console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
        this.id.setAttribute('class',this.skills[idAttack].anim);
        containerPerso.style.justifyContent = "center";
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.play();
        this.id.addEventListener('animationend', function() {
        _this.id.setAttribute('class',`${_this.idleAnim}`);
        containerPerso.style.justifyContent = "space-around";
        if (target.pv <= 0) {
            _this.id.setAttribute('class',_this.winAnim);
            _this.id.addEventListener('animationend', function() {
                body.setAttribute('id','gameover');
                setTimeout("location.reload(true);",8000);
            })
            
        }
        })
        

    };

    summon(target,idAttack){
        if (this.summonCount <=0) {
            console.log("pouvoir d'invocation deja utilisé, attaque nulle");
        }
        if (this.cp < this.maxCP/2 && this.summonCount >= 1) {
            console.log(` Demi-Invocation de ${this.skills[idAttack].name}.`)
            let att = this.skills[idAttack].str+ Math.floor((Math.random() * 75) + 25);
            target.pv = target.pv - att;
            target.limitBreak = target.limitBreak + att/2 + Math.floor((Math.random() * 9) + 0);
            console.log(`pas assez de cp pour une full attaque,degats max divisé par 2 !${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
        } 
        if (this.cp >= this.maxCP/2 && this.summonCount >= 1) {
            console.log(`Invocation de ${this.skills[idAttack].name}.`)
            let att = this.skills[idAttack].str+ Math.floor((Math.random() * 200) + 50);
            target.pv = target.pv - att;
            target.limitBreak = target.limitBreak + att/2 + Math.floor((Math.random() * 9) + 0);
            console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
        }
        let _this = this;
        this.id.setAttribute('class',this.skills[idAttack].anim);
        containerPerso.style.justifyContent = "center";
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.play();
        this.cp = 0;
        this.id.addEventListener('animationend', function() {
        _this.id.setAttribute('class',`${_this.idleAnim}`);
        containerPerso.style.justifyContent = "space-around";
        if (target.pv <= 0) {
            _this.id.setAttribute('class',_this.winAnim);
            _this.id.addEventListener('animationend', function() {
                body.setAttribute('id','gameover');
                setTimeout("location.reload(true);",8000);
            })
            
        }
        });
        this.summonCount--;

    };
    

    skill(target,idAttack) {
        
        let _this = this;
        if (this.cp < this.skills[idAttack].cp) {
            this.id.setAttribute('class',this.skills[0].anim);
            containerPerso.style.justifyContent = "center";
            let hitAudio = new Audio(this.skills[0].audio);
            hitAudio.play();
            this.id.addEventListener('animationend', function() {
            _this.id.setAttribute('class', `${_this.idleAnim}`);
            if (target.pv <= 0) {
                _this.id.setAttribute('class',_this.winAnim);
                _this.id.addEventListener('animationend', function() {
                    body.setAttribute('id','gameover');
                    setTimeout("location.reload(true);",8000);
                })
                
            }
            containerPerso.style.justifyContent = "space-around";
            })
            console.log('no cp left,attaque normale');
            let att = this.str;
            target.pv = target.pv - att;
            target.limitBreak = target.limitBreak + att/2 + Math.floor((Math.random() * 9) + 0);
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv}pv`);
            console.log(`il reste à ${this.name},  ${this.pv}pv`);
    
            
            
        } else {
            this.id.setAttribute('class',this.skills[idAttack].anim);
            containerPerso.style.justifyContent = "center";
            let hitAudio = new Audio(this.skills[idAttack].audio);
            hitAudio.play();
            this.id.addEventListener('animationend', function() {
            _this.id.setAttribute('class', _this.idleAnim);
            if (target.pv <= 0) {
                _this.id.setAttribute('class',_this.winAnim);
                _this.id.addEventListener('animationend', function() {
                    body.setAttribute('id','gameover');
                    setTimeout("location.reload(true);",8000);
                })
                
            }
            containerPerso.style.justifyContent = "space-around";
            })
            console.log(`${this.skills[idAttack].name} de ${this.name}.`)
            this.cp = this.cp - this.skills[idAttack].cp;
            let att = this.str*this.skills[idAttack].str+ Math.floor((Math.random() * 4) + 0);
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv`);
            target.limitBreak = target.limitBreak + att/2 + Math.floor((Math.random() * 9) + 0);
        }
        
        
        
    }

    buff(idAttack) {
        let _this = this;
        this.limitBreak = this.limitBreak + Math.floor((Math.random() * 55) + 15);
        let pvLost = Math.floor((Math.random() * 75) + 35);
        this.pv = this.pv - pvLost;
        let strBoost = Math.floor((Math.random() * 5) + 3);
        this.str = this.str + strBoost;
        this.cp = this.cp - this.skills[idAttack].cp;
        console.log(`${this.name} aumgente sa force de ${strBoost},mais perd ${pvLost} pv`);
        console.log(`${this.skills[idAttack].name} consome ${this.skills[idAttack].cp} cp`);
        this.id.setAttribute('class',this.skills[idAttack].anim);
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.play();
        //_this.idleAnim = this.skills[idAttack].anim;
        this.id.addEventListener('animationend', function() {
        _this.id.setAttribute('class', `${_this.idleAnim}`);
        containerPerso.style.justifyContent = "space-around";
        })
        

        
        
    }

    magick(target,idAttack) {
        let _this = this;
        if (this.cp < this.skills[idAttack].cp) {
            this.limitBreak = this.limitBreak + Math.floor((Math.random() * 3) + 1);
            this.id.setAttribute('class',this.skills[idAttack].anim);
            containerPerso.style.justifyContent = "center";
            let hitAudio = new Audio(this.skills[idAttack].audio);
            hitAudio.play();
            this.id.addEventListener('animationend', function() {
            _this.id.setAttribute('class', `${_this.idleAnim}`);
            if (target.pv <= 0) {
                _this.id.setAttribute('class',_this.winAnim);
                _this.id.addEventListener('animationend', function() {
                    body.setAttribute('id','gameover');
                    setTimeout("location.reload(true);",8000);
                })
                
            }
            containerPerso.style.justifyContent = "space-around";
            })
            console.log('no cp left,attaque normale');
            let att = this.skills[idAttack].str;
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`petite magie,${target.name} perd ${att} pv, il lui reste ${target.pv}pv`);
            console.log(`il reste à ${this.name},  ${this.pv}pv`);
    
            
            
        } else {
            this.limitBreak = this.limitBreak + Math.floor((Math.random() * 75) + 30);
            this.id.setAttribute('class',this.skills[idAttack].anim);
            let hitAudio = new Audio(this.skills[idAttack].audio);
            hitAudio.play();
            this.id.addEventListener('animationend', function() {
                _this.id.setAttribute('class',_this.idleAnim);
                if (target.pv <= 0) {
                    _this.id.setAttribute('class',_this.winAnim);
                    _this.id.addEventListener('animationend', function() {
                        body.setAttribute('id','gameover');
                        setTimeout("location.reload(true);",8000);
                    })
                    
                }
                containerPerso.style.justifyContent = "space-around";
            })
            console.log(`${this.skills[idAttack].name} de ${this.name}.`)
            this.cp = this.cp - this.skills[idAttack].cp;
            let att = this.skills[idAttack].str+ Math.floor((Math.random() * 4) + 0);
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`);
            console.log(`La magie augmente de beaucoup la jauge de limit break :${this.limitBreak} /255`);
            console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv`);
        }

        
        
    }

    limitBreakSkill(target,idAttack) {
        let _this = this;
        this.id.setAttribute('class',this.skills[idAttack].anim);
        containerPerso.style.justifyContent = "center";
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.play();
        this.id.addEventListener('animationend', function() {
        _this.id.setAttribute('class', _this.idleAnim);
        if (target.pv <= 0) {
            _this.id.setAttribute('class',_this.winAnim);
            _this.id.addEventListener('animationend', function() {
                body.setAttribute('id','gameover');
                setTimeout("location.reload(true);",8000);
            })
            
        }
        containerPerso.style.justifyContent = "space-around";
        })
        console.log(`${this.skills[idAttack].name} de ${this.name}.`)
        this.cp = this.cp - this.skills[idAttack].cp;
        let att = this.str*this.skills[idAttack].str+ Math.floor((Math.random() * 75) + 10);
        target.pv = target.pv - att;
        target.limitBreak = target.limitBreak + att/2 + Math.floor((Math.random() * 9) + 0);
        console.log(`il reste ${this.cp} cp à ${this.name}.`)
        console.log(`${target.name} perd ${att}, il lui reste ${target.pv}`);
        this.limitBreak = 0;
        return target.hp;
    
    }

    actionBlock(target,idAttack) {
        this.limitBreak = this.limitBreak + Math.floor((Math.random() * 25) + 3);
        if (this.hp > this.maxPv)  {
            this.hp = this.maxPv;
            
        }
        let _this = this;
        let hitAudio = new Audio(this.skills[idAttack].audio);
        hitAudio.volume = 0.2;
        hitAudio.play();
        this.id.setAttribute('class',`${this.skills[idAttack].anim}`);
        this.id.addEventListener('animationend', function() {
        _this.id.setAttribute('class', `${_this.idleAnim}`);
        })
        this.pv = this.pv + this.def*2 + Math.floor((Math.random() * 70) + 10) - target.str;
        this.cp = this.cp + Math.floor((Math.random() * 10) + 3);
        console.log(`${this.name} bloque ,il lui reste ${this.pv} pv, l'attaque fait ${target.str} dégats de pv.`);
        
        
    };

    useItem(item,idAttack) {
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
            this.id.setAttribute('class',`${this.skills[idAttack].anim}`);
            let hitAudio = new Audio(this.skills[idAttack].audio);
            hitAudio.play();
            this.id.addEventListener('animationend', function() {
            _this.id.setAttribute('class', `${_this.idleAnim}`);
            })
            
            
            this.pv = this.pv + item.hp
            this.item--
            console.log(`${this.name} used ${item.name} recovered ${item.hp} pv. ${this.pv} left.` );
        } 
    };



    endGame(target) {
        if (this.pv <= 0) {
            this.id.setAttribute('class', this.deadAnim);
            
        }
        if (this.pv <= 0 && target.pv <=0 ) {
            this.id.setAttribute('class', this.deadAnim);
            body.setAttribute('id','gameover');
            setTimeout("location.reload(true);",8000);
            
        }
    }
    
    useCpItem(item,idAttack) {
        this.limitBreak = this.limitBreak + Math.floor((Math.random() * 25) + 10);
        if (this.item <= 0) {
            item1.style.display ='none';
            item2.style.display ='none';
            console.log('no item left');
    
            
        }
    
        if (this.cp >= this.maxCp)  {
            this.cp = this.maxcp;
            
        } else {
            let _this = this;
            this.id.setAttribute('class',`${this.skills[idAttack].anim}`);
            let hitAudio = new Audio(this.skills[idAttack].audio);
            hitAudio.play();
            this.id.addEventListener('animationend', function() {
            _this.id.setAttribute('class', `${_this.idleAnim}`);
            })
            
            this.cp = this.cp + item.cp
            this.item--
            console.log(`used ${this.name} recovered ${item.cp} cp. ${this.cp} cp left.` );
        }
    };

    overloadStats () {
        if (this.pv > this.maxPv) {
            this.pv = this.maxPv
            
        }
        if (this.cp > this.maxCP) {
            this.cp = this.maxCP
            
        }
    };
};
