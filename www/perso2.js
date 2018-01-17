let cloud = new Cloud();
let sephiroth = new Sephiroth();

function normalattack(target){
    let att = this.str + Math.floor((Math.random() * 9) + 0);
    target.pv = target.pv - att;
    console.log(`${cloud.name} perd ${cloud.skills[0].cp} cp`)
    console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
    return target.pv;

}


// cloud.normalAttack(sephiroth,Skill.normalattack);
// sephiroth.normalAttack(cloud,Skill.normalattack);

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
    cloud.attack(sephiroth,0);
    
});

skill.addEventListener('click' , function(event){
    if (skillblock.style.display =='flex') {
        skillblock.style.display ='none';
        
    }else {
        skillblock.style.display ='flex';
    }
    
    
});

skill1.addEventListener('click' , function(event){
    cloud.contreTaillade(sephiroth,1);
    
});

skill2.addEventListener('click' , function(event){
    cloud.climHazard(sephiroth,2);
   
    
});
skill3.addEventListener('click' , function(event){
    cloud.omniSlash(sephiroth,3);
   
    
});






