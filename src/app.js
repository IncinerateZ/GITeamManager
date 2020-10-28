import calc from './calc.js';
import rules from './rules.js';
import materiallist from './materials.js';
import wprarity from './wprarity.js';

//xp to go to level N = levels[N] - levels[N-1]
//mora cost = 5xp per mora

const bowlist = ["alley-hunter", "amos-bow", "blackcliff-warbow", "compound-bow", /*"ebony-bow",*/ "favonius-warbow", "hunters-bow", "messenger", "prototype-crescent", "raven-bow", "recurve-bow", /*"royal-bow"*/, "rust", "sacrificial-bow", "seasoned-hunters-bow", "sharpshooters-oath", "skyward-harp", "slingshot", "the-stringless", "the-viridescent-hunt"];
const catalystlist = [/*"amber-catalyst",*/ "apprentices-notes", /*"blackcliff-amulet",*/ "emerald-orb", "eye-of-perception", "favonius-codex", "lost-prayer-to-the-sacred-winds", "magic-guide", "mappa-mare", "otherworldly-story", "pocket-grimoire", "prototype-malice", "royal-grimoire", "sacrificial-fragments", "skyward-atlas", "solar-pearl", "the-widsith", "thrilling-tales-of-dragon-slayers", "twin-nephrite", "wine-and-song"];
const greatswordlist = [/*"blackcliff-slasher",*/ "bloodtainted-greatsword", "debate-club", "favonius-greatsword", "ferrous-shadow", /*"lithic-blade"*/, "old-mercs-pal", "prototype-aminus", /*"quartz"*/, "rainslasher", "royal-greatsword", "sacrificial-greatsword", "serpent-spine", "skyrider-greatsword", "skyward-pride", "the-bell", "waster-greatsword", "white-iron-greatsword", "whiteblind", "wolfs-gravestone"];
const polearmlist = ["beginners-protector", "black-tassel", /*"blackcliff-pole",*/ "crescent-pike", "deathmatch", "dragons-bane", "favonius-lance", "halberd", "iron-point", /*"kunwus-iris-rift", "lithic-spear",*/ "primordial-jade-winged-spear", "prototype-grudge", "skyward-spine", "white-tassel"];
const swordlist = ["aquila-favonia", /*"blackcliff-longsword",*/ "cool-steel", "dark-iron-sword", "dull-blade", "favonius-sword", "fillet-blade", "harbinger-of-dawn", "iron-sting", "lions-roar", "prototype-rancour", /*"royal-longsword",*/ "sacrificial-sword", "silver-sword", "skyrider-sword", "skyward-blade", /*"the-alley-flash",*/ "the-black-sword", "the-flute", "travelers-handy-sword"];
const weaponlist = [bowlist, catalystlist, greatswordlist, polearmlist, swordlist];

const wpmax = [70, 70, 90 - 10, 90 - 10, 90 - 10];

var startbtn;

var charstart;
var charend;
var weapstart;
var weapend;
var talent;

var rarity = 4;

var prevcharselected;
var charselected = "amber";

var prevweapselected;
var weapselected = "alley-hunter";

var charname = "Amber";
var weapname = "Alley Hunter";

let j =
"{}";

var toJson = (s) => {
    let res = "{";
    let t = s.split(" ");
    let c = 1;
    t.forEach(i => {
        if(c == 1) {
            res += "\n\t" + i + " : ";
        }
        if(c == 3) {
            while(i.includes(",")) i = i.replace(",", "");
            if(i === "-") i = null;
            res += i + ",";
        }
        c++;
        if(c == 4) c = 1;
    });
    res += "\n}"
    console.log(res);
}

//toJson(j);
//console.log(rules["temp"])

var clearCards = () => {
    document.querySelector("#popup-content").innerHTML = "";
}

var getNewMargin = (width) => {
    return (100 - width) / 2;
}

var preloadImage = () => {
    for(let base in materiallist) {
        for(let n in materiallist[base]) {
            var img = new Image();
            img.src = './src/img/items/' + materiallist[base][n] + ".png";
        }
    }
}

preloadImage();

var forceAspectRatio = (img) => {
    //constraints  : width & height less than 100px
    let tw = img.naturalWidth;
    let th = img.naturalHeight;
    //make sure image is loaded
    let c = 0;
    while(tw == 0 || th == 0) {
        if(!img.src.includes("?t=")) img.src += "?t=";
        img.src = img.src.split("?t=")[0] + "?t=" + c;
        c++;

        tw = img.naturalWidth;
        th = img.naturalHeight;
        if(c > 200) break;
    }

    let imgAR = th / tw;

    while(tw > 100) {
        tw *= 0.95;
        th = imgAR * tw;
    }
    while(th > 100) {
        th *= 0.95;
        tw = th / imgAR;
    }
    img.style.width = tw + "px";
    img.style.height = th + "px";
    img.style.marginLeft = getNewMargin(tw) + "px";
    img.style.marginTop = getNewMargin(th) + "px";
}

var createCard = (name, amount, type) => {
    let target = document.querySelector("#popup-content");
    let imgsrc = "/src/img/items/" + name + ".png";
    let res = 
    "<div class='item-card " + type + "'>" +
        "<div class='card-main tooltip'>" +
            "<div class='img-box'>" +
                "<img src='" + imgsrc + "' id='i-" + name + "'>" +
            "</div>" +
            "<span class='tooltiptext'>" + nameextract(name) + "</span>" +
        "</div>" +
        "<div class='amt-box'>" +
            "<div class='amt-text card-content'>" + currencyformat(amount) +
            "</div>" +
        "</div>" +
    "</div>"
    ;
    target.innerHTML += res;

    let img = document.querySelector("#i-" + name);
    forceAspectRatio(img);
}

window.onload = function() {
    var characterlist = document.getElementsByClassName("character");
    var weapons = document.getElementById("weapon-bar");
    //load weapons
    for(let list in weaponlist) {
        for(let weapon in weaponlist[list]) {
            weapons.innerHTML += "<div class='icon weapons' id='" + weaponlist[list][weapon] + "'><img class='avatar weap' id='i-" + weaponlist[list][weapon] + "' src='src/img/weapons/" + weaponlist[list][weapon] + ".png'></div>"
            if(weapselected === weaponlist[list][weapon]) {
                var s = document.getElementById("i-" + weaponlist[list][weapon]);
                s.style.border = "2px solid gold";
            }
        }
    }

    //load characters
    for(var char in characterlist){
        if(characterlist[char].id == null) break;
        var char = characterlist[char].id;
        var charicon = document.getElementById(char);
        charicon.innerHTML = "<img class='avatar char' id='i-" + char + "' src='src/img/characters/gi-" + char + ".png'>";;
        if(char === charselected) {
            var s = document.getElementById("i-" + char);
            s.style.border = "2px solid gold";
        }
    }
    //load settings
    charstart = document.querySelector('#char-start');
    charend = document.querySelector('#char-end');
    weapstart = document.querySelector('#weap-start');
    weapend = document.querySelector('#weap-end');
    talent = document.querySelector('#talent');

    startbtn = document.querySelector("#start-btn");

    //setting input box force charlength
    charstart.addEventListener("keydown", (e) => forceNumFormat(e));
    charend.addEventListener("keydown", (e) => forceNumFormat(e));
    weapstart.addEventListener("keydown", (e) => forceNumFormat(e));
    weapend.addEventListener("keydown", (e) => forceNumFormat(e));
    startbtn.addEventListener("click", () => {
        forceInRange();
        let res = [];
        res.push(calc(charselected, charstart.value, charend.value, "char"));
        res.push(calc(weapselected, weapstart.value, weapend.value, "wp"));
        document.querySelector("#popup-container").style.visibility = "visible";


        //clear prev cards
        clearCards();
        //create cards
        let c = 0;
        let type;
        res.forEach((list) => {
            if(c==0) type = "c";
            if(c==1) type = "w"
            createCard("mora", list["mora"], type);
            if(list["mora2"] != undefined) createCard("mora", list["mora2"], "t");
            let mats = list["mat"];
            for(let i in mats["xpmats"]) {
                createCard(i, mats["xpmats"][i], type);
            }
            for(let i in mats) {
                if(i === "xpmats") continue;
                let type = i.substr(i.length - 1, i.length - 1);
                let m = i.substr(0, i.length - 1);
                createCard(m, mats[i], type);
            }
            c++;
        });
    });


    document.addEventListener("click", (e) => {
        forceInRange();
        var tt = document.querySelector("#char-check");
        if(e.target.classList.contains("char")) {
            avatarselect(e.target);
        } else if (e.target.classList.contains("weap")) {
            weaponselect(e.target);
        } else if (e.target.id === "popup-container") {
            e.target.style.visibility = "hidden";
        }
    })
}

var avatarselect = charicon => {
    if(charselected === charicon.id.substring(2, charicon.id.length)) {
        charselected = null;
        charicon.style.border = "";
        document.getElementById("char-name").innerHTML = "None";
        return;
    }
    prevcharselected = charselected;
    charselected = charicon.id.substring(2, charicon.id.length);
    if(prevcharselected !== null) {
        var prev = document.getElementById("i-" + prevcharselected);
        prev.style.border = "";
    }
    charicon.style.border = "2px solid gold";
    charname = charselected[0].toUpperCase() + charselected.substr(1, charselected.length);
    document.getElementById("char-name").innerHTML = charname;
    //id = charselected
}

var weaponselect = weapicon => {
    if(weapselected === weapicon.id.substring(2, weapicon.id.length)) {
        weapselected = null;
        weapicon.style.border = "";
        document.getElementById("weapon-name").innerHTML = "None";
        return;
    }
    prevweapselected = weapselected;
    weapselected = weapicon.id.substring(2, weapicon.id.length);
    if(prevweapselected !== null) {
        var prev = document.getElementById("i-" + prevweapselected);
        prev.style.border = "";
    }
    rarity = wprarity[weapselected];
    changeConstraints(rarity);
    weapicon.style.border = "2px solid gold";
    weapname = weapselected[0].toUpperCase() + weapselected.substr(1, weapselected.length);
    document.getElementById("weapon-name").innerHTML = nameextract(weapname);
    //id = weapselected
}

var forceNumFormat = (e) => {
    if(e.target.value.length > 1) e.target.value = e.target.value.substr(0, 1);
};

var forceInRange = () => {
    //charstart
    if(charstart.value > charstart.max) charstart.value = charstart.max;
    if(charstart.value < charstart.min) charstart.value = charstart.min;
    //charend
    //charstart
    if(charend.value > charend.max) charend.value = charend.max;
    if(charend.value < charend.min) charend.value = charend.min;
    //wpstart
    if(weapstart.value > weapstart.max) weapstart.value = weapstart.max;
    if(weapstart.value < weapstart.min) weapstart.value = weapstart.min;
    //wpend
    if(weapend.value > weapend.max) weapend.value = weapend.max;
    if(weapend.value < weapend.min) weapend.value = weapend.min;
}

var nameextract = name => {
    let res = name;
    while(res.includes("-")) {
        res = res.replace("-", " ");
    }
    res = res.split(" ");
    for(let i = 0; i < res.length; i++) {
        res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
    }
    res = res.join(" ");
    return res;
}

var currencyformat = amount => {
    amount = Math.floor(amount);
    amount += "";
    let i = amount.length - 1;
    let c = 0;
    let res = "";
    while(i >= 0) {
        if(c % 3 == 0 && c != 0) res += ",";
        res += amount[i];
        c++;
        i--;
    }
    res = res.split("").reverse().join("")
    return res;
}

var changeConstraints = (rarity) => {
    let max = wpmax[rarity];
    weapend.max = max;
}
