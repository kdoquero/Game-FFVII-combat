"use strict"
let cloud = new Cloud();
let sephiroth = new Sephiroth();

let potion = {
    name : 'Potion',
    hp : 50
}

let hiPotion = {
    name : 'hi-potion',
    hp : 100
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


attack.addEventListener('click' , function(event){
    sephiroth.iaAttack(cloud);
    cloud.attack(sephiroth,0);
    display();
    
});
invocation.addEventListener('click' , function(event){
    // let randomId = Math.floor(Math.random() * 3) + 0;
    cloud.attack(sephiroth,5);
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
    display();
    
});

skill2.addEventListener('click' , function(event){
    cloud.skill(sephiroth,2);
    display();
   
    
});
skill3.addEventListener('click' , function(event){
    cloud.skill(sephiroth,3);
    display();
   
    
});

block.addEventListener('click' , function(event){
    cloud.actionBlock(sephiroth);
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




