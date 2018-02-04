class Perso2 extends PersoModel {
    constructor(){
        let normalattack = new Skill("Attack", 0, 1, "perso2atk1","assets/audio/hit.wav");
        let sectionx = new Skill("Section", 4, 2, "perso2atk2");
        let spaceSlash = new Skill("SpaceSlash", 9, 4,"perso2atk3");
        let xcross = new Skill("X-Cross",25,6,"perso2atk4");
        let xzoolomid = new Skill("Xzoolomid",0,9,"perso2invo1","assets/audio/hit.wav");

        let blockAct2 = new Skill ("Block",0,0,"perso2block","assets/audio/shield block.mp3");
        let itemAct2 = new Skill ('Ether',0,0,"perso2item2","assets/audio/bring.wav");
        let itemAct = new Skill ('Potion',0,0,"perso2item","assets/audio/bring.wav");
        let deadPerso2 = new Skill ('dead',0,0,"perso2dead");
        let cloudFire = new Skill("firebolt",0,0,"cloudfire","assets/audio/hit.wav");
        let buff2 = new Skill ('Elévation',15,0,"perso2buff","assets/audio/limit.wav");
        let limitbreak2 = new Skill('Inferno',0,8,"perso2limit1","assets/audio/hit.wav");

        super("Sephiroth", 300, 35, 14, 2, 2, 300,"perso2",[normalattack, sectionx, spaceSlash,xcross,blockAct2,itemAct,deadPerso2,xzoolomid,itemAct2,buff2,limitbreak2],35,1,0,"perso2dead",document.querySelector('.perso2'),"perso2win");
    }
    
}