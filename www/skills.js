class Skills extends Perso {
    constructor(skillName,cpCost,str,name,pv,cp,def,item) {
        super(name,pv,cp,str,def,item);
        this.skillName = skillName;
        this.cpCost= cpCost;

    }

}