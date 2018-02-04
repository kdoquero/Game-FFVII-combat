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
let themeSong = new Audio("assets/audio/Final Fantasy - Prelude Orchestral.mp3");
fightSong = new Audio('assets/audio/final-fantasy-vii-last-stand2.mp3');
let startMenu = document.querySelector('.start-menu');
let logs = document.querySelector('#log');
let backgroundbtn = document.querySelector('#backgbtn');
let body = document.querySelector('body');
let background = document.querySelector('.container-game');
let intro = document.querySelector('#intro');
themeSong.play();
themeSong.loop = true;
themeSong.volume = 0.55;
display();

// startMenu.addEventListener('click', function () {
//     startMenu.style.backgroundImage = ;
    
    
// })




intro.addEventListener('click' , function () {
    
    themeSong.pause();
    fightSong.play();
    fightSong.loop = true;
    fightSong.volume = 0.15;

    intro.setAttribute('id', "");
    
})

backgroundbtn.addEventListener('click', function (event) {
    let tab = ["url('assets/images/image0.gif')","url('assets/images/image1.gif')","url('assets/images/LafBWtl.gif')"];
    
    background.style.backgroundImage = tab[1];
        
        

});


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