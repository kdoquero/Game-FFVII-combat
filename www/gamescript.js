"use strict"
let cloud = new Perso1;
let sephiroth = new Perso2;


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
//let perso2 = document.querySelector('.perso2');
let limitBreakButton = document.querySelector('#limitbreak');
let themesong = new Audio("assets/final-fantasy-vii-last-stand2.mp3");
let body = document.querySelector('body');
let logs = document.querySelector('#log');
let backgroundbtn = document.querySelector('#backgbtn');
//let background = docum
themesong.play();
themesong.loop = true;
themesong.volume = 0.15;
display();

// backgroundbtn.addEventListener('click', function () {
//     let backgroundtab = [document.body.style.backgroundImage = "url('img_tree.png')",]
    
// })

attack.addEventListener('click' , function(event){
    cloud.attack(sephiroth,0);
    sephiroth.iaAttack(cloud);
    display();
    
});

limitBreakButton.addEventListener('click' , function(event){
    cloud.limitBreakSkill(sephiroth,3);
    sephiroth.iaAttack(cloud);
    display();
    
});

invocation.addEventListener('click' , function(event){
    cloud.summon(sephiroth,5);
    sephiroth.iaAttack(cloud);
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

    display();
    
});

skill2.addEventListener('click' , function(event){
    cloud.skill(sephiroth,2);
    sephiroth.iaAttack(cloud);
   
    display();
   
    
});
skill3.addEventListener('click' , function(event){
    cloud.magick(sephiroth,4);
    sephiroth.iaAttack(cloud);
    display();

   
    
});

skill4.addEventListener('click' , function(event){
    cloud.buff(9);
    sephiroth.iaAttack(cloud);
    display();

   
    
});

block.addEventListener('click' , function(event){
    sephiroth.iaAttack(cloud);
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
    cloud.useItem(hiPotion,7);
    display();
    
});

item2.addEventListener('click' , function(event){
    sephiroth.iaAttack(cloud);
    cloud.useCpItem(manaPot,8);
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
    let backgroundbtn = document.querySelector('#backgbtn');

    sephirothHptext.textContent = `PV : ${sephiroth.pv} /250`;
    cloudHptext.textContent = `PV : ${cloud.pv} /250`;
    sephirothHp.style.width = sephiroth.pv/2.5  + "%";
    cloudHp.style.width = cloud.pv/2.5   + "%";
    sephirothCp.style.width = sephiroth.cp*2.857142857 + "%";
    cloudCp.style.width = cloud.cp*2 + "%";
    sephirothCptext.textContent = `CP: ${sephiroth.cp} /35`;
    cloudCptext.textContent = `CP: ${cloud.cp} /50`;
    skill1.setAttribute('value', `${cloud.skills[1].name} : ${cloud.skills[1].cp} cp`);
    skill2.setAttribute('value', `${cloud.skills[2].name} : ${cloud.skills[2].cp} cp`);
    skill3.setAttribute('value', `${cloud.skills[4].name} : ${cloud.skills[4].cp} cp`);
    item1.setAttribute('value', `${hiPotion.name} :${hiPotion.hp} pv`);
    item2.setAttribute('value', `${manaPot.name} :${manaPot.cp} cp`);
    skillblock.style.display ='none';
    itemblock.style.display ='none';
    cloud.overloadStats();
    sephiroth.overloadStats();
    cloud.showLimitBreak();
    cloud.endGame();
    sephiroth.endGame();
    logs.scrollTop = logs.scrollHeight;

}


(function (logger) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }

            output += "</span>&nbsp;";
        }

        logger.innerHTML += output + "<br>";
        console.old.apply(undefined, arguments);
    };
})(document.getElementById("log"));




