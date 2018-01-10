class Skills extends Perso {
    constructor(skillName,usedCp,str,name,pv,cp,def,item) {
        super(name,pv,cp,str,def,item);
        this.skillName = skillName;
        this.usedCp= usedCp;

    }

    contreTaillade(cp) {
            if (cp <= 5) {
                let str = this.str;
                console.log('no Cp left, normal attack!');
                
            }
            
            let str = this.str *3 + Math.floor((Math.random() * 10) + 1);
    
            return usedCp;
            return str;

       
    }
}