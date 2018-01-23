"use strict"
class Perso1 extends Persorev {
    constructor(){
        let normalAttack = new Skill("Attack", 1, 1,"perso1atk1","assets/audio/hit.wav");
        let contreTaillade = new Skill("Contre-taillade", 5, 3,"perso1atk2","assets/audio/hit.wav");
        let climHazard = new Skill("Climhazard", 10, 6, "perso1atk3","assets/audio/hit.wav");
        let omniSlash = new Skill("Omnislash", 0, 15, "perso1Atk4","assets/audio/Final Fantasy VII  Omnislash .mp3");
        let firebolt = new Skill ("magick:Firebolt",20,6,"perso1mag1","assets/audio/Fire 3.mp3");
        let bahamut = new Skill ("Bahamut",0,12,"perso1invo1","assets/audio/hit.wav");
        let blockAct = new Skill ("Block",0,0,"perso1block","assets/audio/shield block.mp3");
        let itemAct = new Skill ('Potion',0,0,"perso1item");
        let itemAct2 = new Skill ('Potion',0,0,"perso1item2");
        super("Cloud", 250, 50, 7, 4, 4, 250,"perso1",[normalAttack,contreTaillade,climHazard,omniSlash,firebolt,bahamut,blockAct,itemAct,itemAct2],50,1,0,"perso1dead",document.querySelector('.perso1'));
    }
}