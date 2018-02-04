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

    sephirothHptext.textContent = `PV : ${sephiroth.pv} /300`;
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
    skill4.setAttribute('value', `${cloud.skills[9].name} : ${cloud.skills[9].cp} cp`);
    item1.setAttribute('value', `${hiPotion.name} :${hiPotion.hp} pv`);
    item2.setAttribute('value', `${manaPot.name} :${manaPot.cp} cp`);
    skillblock.style.display ='none';
    itemblock.style.display ='none';
    cloud.overloadStats();
    sephiroth.overloadStats();
    cloud.showLimitBreak();
    cloud.endGame(sephiroth);
    sephiroth.endGame(cloud);
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