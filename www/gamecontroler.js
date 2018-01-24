"use strict"


class GameController {
    constructor() {
        let cloud = new Perso1;
        let sephiroth = new Perso2;
        this.view = new View;

        let _this =this;
        let form = document.querySelector('form');
        let attack = document.querySelector('#attack');
        let invocation = document.querySelector('#invocation');
        let skill = document.querySelector('#skill');
        let block = document.querySelector('#block');
        let item = document.querySelector('#item');
        let skillblock = document.querySelector('.skill-list');
        let itemblock = document.querySelector('.item-list');
        let skill1 = document.querySelector('#skill1');
        let skill2 = document.querySelector('#skill2');
        let skill3 = document.querySelector('#skill3');
        let skill4 = document.querySelector('#skill4');
        let item1 = document.querySelector('#item1');
        let item2 = document.querySelector('#item2');
        let item3 = document.querySelector('#item3');
        let item4 = document.querySelector('#item4');
        let SephirothHp = document.querySelector('.barpv1');
        let SephirothHpcontainer = document.querySelector('.barcontainer');
        let gameOver = document.querySelector('#gameover');
        let containerPerso = document.querySelector('.container-perso');
        let limitBreakButton = document.querySelector('#limitbreak');
        let themesong = new Audio("assets/final-fantasy-vii-last-stand2.mp3");
        let body = document.querySelector('body');
        let logs = document.querySelector('#log');
        let backgroundbtn = document.querySelector('#backgbtn');
        //let background = docum
        themesong.play();
        themesong.loop = true;
        themesong.volume = 0.15;

        

        // backgroundbtn.addEventListener('click', function () {
        //     let backgroundtab = [document.body.style.backgroundImage = "url('img_tree.png')",]
            
        // })
        
        attack.addEventListener('click' , function(event){
            cloud.attack(sephiroth,0);
            sephiroth.iaAttack(cloud);
            _this.view.display();
            
        });
        
        limitBreakButton.addEventListener('click' , function(event){
            cloud.limitBreakSkill(sephiroth,3);
            sephiroth.iaAttack(cloud);
            _this.view.display();
            
        });
        
        invocation.addEventListener('click' , function(event){
            cloud.summon(sephiroth,5);
            sephiroth.iaAttack(cloud);
            _this.view.display();
            
        });
        
        skill.addEventListener('click' , function(event){
            if (skillblock.style.display =='flex') {
                skillblock.style.display ='none';
                
            }else {
                skillblock.style.display ='flex';
            }
            
        });
        
        skill1.addEventListener('click' , function(event){
            cloud.skill(sephiroth,1);
            sephiroth.iaAttack(cloud);
        
            _this.view.display();
            
        });
        
        skill2.addEventListener('click' , function(event){
            cloud.skill(sephiroth,2);
            sephiroth.iaAttack(cloud);
           
            _this.view.display();
           
            
        });
        skill3.addEventListener('click' , function(event){
            cloud.magick(sephiroth,4);
            sephiroth.iaAttack(cloud);
            _this.view.display();
        
           
            
        });
        
        block.addEventListener('click' , function(event){
            sephiroth.iaAttack(cloud);
            cloud.actionBlock(sephiroth,6);
            _this.view.display();
        
           
            
        });
        item.addEventListener('click' , function(event){
            if (itemblock.style.display =='flex') {
                itemblock.style.display ='none';
                
            }else {
                itemblock.style.display ='flex';
            }
        });
        
        
        item1.addEventListener('click' , function(event){
            sephiroth.iaAttack(cloud);
            cloud.useItem(hiPotion,7);
            _this.view.display();
            
        });
        
        item2.addEventListener('click' , function(event){
            sephiroth.iaAttack(cloud);
            cloud.useCpItem(manaPot,8);
            _this.view.display();
            
        });
    }
}