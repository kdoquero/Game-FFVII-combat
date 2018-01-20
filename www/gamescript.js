"use strict"
let cloud = new Perso1;
let sephiroth = new Perso2;

let potion = {
    name : 'Potion',
    hp : 75
}

let hiPotion = {
    name : 'hi-potion',
    hp : 125
}

let manaPot = {
    name : 'Ether',
    cp : 25
}

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

function endGame(target1,target2) {
    if (target1.pv <= 0) {
        perso1.setAttribute('class', 'perso1dead');
        console.log(`${target1.name} died`);
        gameOver.style.display ="flex";

        
    }
    if (target2.pv <= 0) {
        perso2.setAttribute('class', 'perso2dead');
        console.log(`${target2.name} died`);
        gameOver.style.display ="flex";

        
    }

};


attack.addEventListener('click' , function(event){
    cloud.attack(sephiroth,0);
    sephiroth.iaAttack(cloud);
    endGame(cloud,sephiroth);
    display();
    
});
invocation.addEventListener('click' , function(event){
    cloud.skill(sephiroth,5);
    sephiroth.iaAttack(cloud);
    endGame(cloud,sephiroth);
    display();
    
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
    endGame(cloud,sephiroth);

    display();
    
});

skill2.addEventListener('click' , function(event){
    cloud.skill(sephiroth,2);
    sephiroth.iaAttack(cloud);
    endGame(cloud,sephiroth);
    display();
   
    
});
skill3.addEventListener('click' , function(event){
    sephiroth.iaAttack(cloud);
    endGame(cloud,sephiroth);
    cloud.skill(sephiroth,3);
    display();
   
    
});

block.addEventListener('click' , function(event){
    sephiroth.iaAttack(cloud);
    endGame(cloud,sephiroth);
    cloud.actionBlock(sephiroth,6);
    display();
   
    
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
    cloud.useItem(potion,7);
    display();
    
});

item2.addEventListener('click' , function(event){
    sephiroth.iaAttack(cloud);
    cloud.useItem(hiPotion,7);
    display();
    
});

function display() {
    let sephirothHp = document.querySelector('#barpv1');
    let sephirothHptext = document.querySelector('#barpv1text');
    let cloudHptext = document.querySelector('#barpv2text');
    let cloudHp = document.querySelector('#barpv2');
    let sephirothCp = document.querySelector('#barcp1');
    let cloudCp = document.querySelector('#barcp2');
    let cloudCptext = document.querySelector('#barcp2text');
    let sephirothCptext = document.querySelector('#barcp1text');

    sephirothHptext.textContent = `PV : ${sephiroth.pv} /200`;
    cloudHptext.textContent = `PV : ${cloud.pv} /275`;
    sephirothHp.style.width = sephiroth.pv/2  + "%";
    cloudHp.style.width = cloud.pv/2.5   + "%";
    sephirothCp.style.width = sephiroth.cp*4 + "%";
    cloudCp.style.width = cloud.cp*2 + "%";
    sephirothCptext.textContent = `CP: ${sephiroth.cp} /25`;
    cloudCptext.textContent = `CP: ${cloud.cp} /50`;
    // skill1.setAttribute('value', `${climHazard.skillName} : ${climHazard.cpCost} cp`);
    // skill2.setAttribute('value', `${meteoRain.skillName} : ${meteoRain.cpCost} cp`);
    // skill3.setAttribute('value', `${omnislash.skillName} : ${omnislash.cpCost} cp`);
    // item1.setAttribute('value', `${potion.name} : restaure ${potion.hp} pv`);
    skillblock.style.display ='none';

}

display();




