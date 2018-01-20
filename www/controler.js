"use strict"


class controller {
    constructor() {
        this.cloud = new Cloud;
        this.sephiroth = new Sephiroth;
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
        let perso1 = document.querySelector('.perso1');
        let perso2 = document.querySelector('.perso2');
        let audio = document.querySelector('audio');

        attack.addEventListener('click' , function(event){
            _this.cloud.attack(_this.sephiroth,0);
            sephiroth.iaAttack(cloud);
            endGame(cloud,sephiroth);
            display();
            
        });

    }
}