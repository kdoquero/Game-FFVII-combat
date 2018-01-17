class Cloud extends Persorev {
    constructor(){
        let normalAttack = new Skill("Attack", 1, 1,"perso1atk1");
        let contreTaillade = new Skill("Contre-taillade", 5, 3,"perso1atk2");
        let climHazard = new Skill("Climhazard", 10, 6, "perso1atk3");
        let omniSlash = new Skill("Omnislash", 35, 9, "perso1Atk4");
        let skills = [normalAttack,contreTaillade,climHazard,omniSlash];
        super("Cloud", 250, 50, 7, 4, 4, 250,skills);
    }

    

    animation(idAttack) {
        perso1.setAttribute('class',`${this.skills[idAttack].anim}`);
        containerPerso.style.justifyContent = "center";
        perso1.addEventListener('animationend', function() {
        perso1.setAttribute('class', 'perso1');
        containerPerso.style.justifyContent = "space-around";
        });
    };

    attack(target,idAttack){
        let att = this.str + Math.floor((Math.random() * 9) + 0);
        target.pv = target.pv - att;
        console.log(this);
        console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
        this.animation(0);
        return target.pv;


    }

    

    contreTaillade(target,idAttack) {
        if (this.cp < this.skills[1].cp) {
            console.log('no cp left,attaque normale');
            let att = this.str;
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv}pv`);
            console.log(`il reste à ${this.name},  ${this.pv}pv`);
            this.animation(0);
    
            
            
        } else {
        
            console.log(`${this.skills[idAttack].name} de ${this.name}.`)
            this.cp = this.cp - this.skills[idAttack].cp;
            let att = this.str*this.skills[idAttack].str+ Math.floor((Math.random() * 4) + 0);
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att}, il lui reste ${target.pv}`);
            this.animation(1);
            return target.hp;
        }
        
    }

    climHazard(target,idAttack) {
        if (this.cp < this.skills[idAttack].cp) {
            console.log('no cp left,attaque normale');
            let att = this.str;
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv}pv`);
            console.log(`il reste à ${this.name},  ${this.pv}pv`);
            this.animation(0);
    
            
            
        } else {
        
            console.log(`${this.skills[idAttack].name} de ${this.name}.`)
            this.cp = this.skills[idAttack].cp;
            let att = this.str*this.skills[idAttack].str+ Math.floor((Math.random() * 4) + 0);
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att}, il lui reste ${target.pv}`);
            this.animation(2);
            return target.hp;
        }
        
    }

    omniSlash(target,idAttack) {
        if (this.cp < this.skills[idAttack].cp) {
            console.log('no cp left,attaque normale');
            let att = this.str;
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv}pv`);
            console.log(`il reste à ${this.name},  ${this.pv}pv`);
            this.animation(0);
    
            
            
        } else {
        
            console.log(`${this.skills[idAttack].name} de ${this.name}.`)
            this.cp = this.skills[idAttack].cp;
            let att = this.str*this.skills[idAttack].str+ Math.floor((Math.random() * 4) + 0);
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att}, il lui reste ${target.pv}`);
            this.animation(3);
            return target.hp;
        }
        
    }
}