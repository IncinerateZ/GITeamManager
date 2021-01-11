import calc from './calc.js';
import wprarity from './wprarity.js';
import analytics from './analytics.js';

//analytics();

//xp to go to level N = levels[N] - levels[N-1]
//mora cost = 5xp per mora

const faqtitles = {
    0 : "Is There Mobile Support?",
    1 : "Where did you get the data?",
    2 : "Why is there no Traveler/MC?",
    3 : "Why is the ___ I am looking for not showing?",
    4 : "You are showing the wrong data!"
}

const faqanswers = {
    0 : "Support for mobile devices are currently minimal",
    1 : "Numerical data are manually compiled from the official wiki, otherwise data regarding upcoming characters or weapons are taken from <a href='https://g-hhw.com' target='_blank' style='color:#555'>Honey Hunter World</a>.",
    2 : "The Traveler is unique which will take some time to implement.",
    3 : "As per (1), data is taken largely from the official wiki, so if no data is available for a certain character or weapon they cannot be calculated.",
    4 : "Most of the data is manually typed in to the local database and ruleset which may cause some errors during entry, I try my best to fix all the errors. If you spot any mistakes or have a suggestion, feel free to DM me on Discord at IncinerateZ#4038."
}

var showfaq = () => {
    let popup = document.querySelector("#popup-container");
            popup.style.visibility = "visible";
            let target = document.querySelector("#popup-content");
            
            target.innerHTML += 
            "<div id='faq-text'>" +
                "<div id='faq-title'> FAQ </div>" +
                "<div class='faq-t'>" + faqtitles[0] + "</div>" +
                "<div class='faq-p'>" + faqanswers[0] + "</div>" +
                "<div class='faq-t'>" + faqtitles[1] + "</div>" +
                "<div class='faq-p'>" + faqanswers[1] + "</div>" +
                "<div class='faq-t'>" + faqtitles[2] + "</div>" +
                "<div class='faq-p'>" + faqanswers[2] + "</div>" +
                "<div class='faq-t'>" + faqtitles[3] + "</div>" +
                "<div class='faq-p'>" + faqanswers[3] + "</div>" +
                "<div class='faq-t'>" + faqtitles[4] + "</div>" +
                "<div class='faq-p'>" + faqanswers[4] + "</div>" +
            "</div>"
            ;
}

showfaq();

const bowlist = ["alley-hunter", "amos-bow", "blackcliff-warbow", "compound-bow", /*"ebony-bow",*/ "favonius-warbow", "hunters-bow", "messenger", "prototype-crescent", "raven-bow", "recurve-bow", /*"royal-bow"*/, "rust", "sacrificial-bow", "seasoned-hunters-bow", "sharpshooters-oath", "skyward-harp", "slingshot", "the-stringless", "the-viridescent-hunt"];
const catalystlist = [/*"amber-catalyst",*/ "apprentices-notes", /*"blackcliff-amulet",*/ "emerald-orb", "eye-of-perception", "favonius-codex", "frostbearer", "lost-prayer-to-the-sacred-winds", "magic-guide", "mappa-mare", "memory-of-dust", "otherworldly-story", "pocket-grimoire", "prototype-malice", "royal-grimoire", "sacrificial-fragments", "skyward-atlas", "solar-pearl", "the-widsith", "thrilling-tales-of-dragon-slayers", "twin-nephrite", "wine-and-song"];
const greatswordlist = [/*"blackcliff-slasher",*/ "bloodtainted-greatsword", "debate-club", "favonius-greatsword", "ferrous-shadow", /*"lithic-blade"*/, "old-mercs-pal", "prototype-aminus", /*"quartz"*/, "rainslasher", "royal-greatsword", "sacrificial-greatsword", "serpent-spine", "skyrider-greatsword", "snow-tombed-starsilver", "skyward-pride", "the-bell", "the-unforged","waster-greatsword", "white-iron-greatsword", "whiteblind", "wolfs-gravestone"];
const polearmlist = ["beginners-protector", "black-tassel", /*"blackcliff-pole",*/ "crescent-pike", "deathmatch", "dragons-bane", "dragonspine-spear","favonius-lance", "halberd", "iron-point", /*"kunwus-iris-rift", "lithic-spear",*/ "primordial-jade-winged-spear", "prototype-grudge", "skyward-spine", "vortex-vanquisher","white-tassel"];
const swordlist = ["aquila-favonia", /*"blackcliff-longsword",*/ "cool-steel", "dark-iron-sword", "dull-blade", "favonius-sword", "festering-desire", "fillet-blade", "harbinger-of-dawn", "iron-sting", "lions-roar", "prototype-rancour", /*"royal-longsword",*/ "sacrificial-sword", "silver-sword", "skyrider-sword", "skyward-blade", "summit-shaper",/*"the-alley-flash",*/ "the-black-sword", "the-flute", "travelers-handy-sword"];
const weaponlist = [bowlist, catalystlist, greatswordlist, polearmlist, swordlist]; 

/*let r = "";
for(let list of weaponlist) {
    for(let w of list) {
        r += w + ",";
    }
}
console.log(r);*/

/*
UPCOMING WEAPONS

To add, add commented out above, then add uncommented out below

To release, remove below and uncomment above

*/

const upcomingweapons = [];

const wpmax = [70, 70, 90 - 10, 90, 90];

var collapseToggle = false;
var collapseText = {
    false : "Collapse",
    true : "Expand"
}

var uncollapsed;
var collapsed;

var startbtn;

var charstart;
var charend;
var weapstart;
var weapend;
var talent;

var rarity = 4;

var prevcharselected;
var charselected = "albedo";

var prevweapselected;
var weapselected = "alley-hunter";

var charname = "Albedo";
var weapname = "Alley Hunter";

let j =
"{}";

/*var toJson = (s) => {
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
}*/

//toJson(j);
//console.log(rules["temp"])

var toggleCollapse = () => {
    let target = document.getElementById("popup-content");
    let target2 = target.cloneNode(true);
    if(collapsed != null) {
        clearCards();
        if(collapseToggle) {
            for(let i in collapsed) {
                createCard(i, collapsed[i], "o");
            }
        } else {
            for(let i = 0; i < uncollapsed.childNodes.length; i++) {
                let dat = uncollapsed.childNodes[i].querySelector(".amt-text").innerHTML;
                while(dat.includes(",")) dat = dat.replace(",", "");
                createCard(uncollapsed.childNodes[i].id, dat, uncollapsed.childNodes[i].classList[1])
            }
        }
    } else {
        uncollapsed = target2.cloneNode(true);
        let map = {};
        for(let i = 0; i < uncollapsed.childNodes.length; i++) {
            if(map[uncollapsed.childNodes[i].id] == undefined) map[uncollapsed.childNodes[i].id] = 0;
            let dat = uncollapsed.childNodes[i].querySelector(".amt-text").innerHTML;
            while(dat.includes(",")) {
                dat = dat.replace(",", "");
            }
            map[uncollapsed.childNodes[i].id] += parseInt(dat);
        }
        clearCards();
        for(let i in map) {
            createCard(i, map[i], "o");
        }
        collapsed = map;
    }
}

var sortCards = () => {
    let target = document.getElementById("popup-content");
    let target2 = document.getElementById("popup-content").cloneNode(true);

    let c = target2.getElementsByClassName("c");
    let t = target2.getElementsByClassName("t");
    let w = target2.getElementsByClassName("w");

    clearCards();

    //chars
    for(let card = 0; card < c.length; card++) {
        target.appendChild(c[card].cloneNode(true));
    }
    for(let card = 0; card < t.length; card++) {
        target.appendChild(t[card].cloneNode(true));
    }
    for(let card = 0; card < w.length; card++) {
        target.appendChild(w[card].cloneNode(true));
    }
}

var clearCards = () => {
    document.querySelector("#popup-content").innerHTML = "";
}

var getNewMargin = (width) => {
    return (100 - width) / 2;
}

/*var preloadImage = () => {
    for(let base in materiallist) {
        for(let n in materiallist[base]) {
            var img = new Image();
            img.src = './src/img/items/' + materiallist[base][n] + ".png";
        }
    }
}*/

//preloadImage();

var toggleTalents = (checked) => {
    if(checked) {
        var target = document.querySelector("#talent-setting-bar");
        return;
    } else {
        var target = document.querySelector("#talent-setting-bar");
        return;
    }
}

var resizeImg = (img, w, h) => {
    let parent = img.parentNode;
    let src = img.src;
    let id = img.id;
    let mw = getNewMargin(w) + "px";
    let mh = getNewMargin(h) + "px";
    parent.innerHTML = "<img src='" + src + "' id='" + id + "' style='width: " + w + "px; height:" + h + "px; margin-left: " + mw + "px; margin-top: " + mh + "px;'"+ ">";
    console.log("RESIZE")
}

var forceAspectRatio = (img, type) => {
    //constraints  : width & height less than 100px
    let tw = 0;
    let th = 0;
    img.onload = (e) => {
        tw = img.naturalWidth;
        th = img.naturalHeight;

        let imgAR = th / tw;

        while(tw > 100) {
            tw *= 0.95;
            th = imgAR * tw;
        }
        while(th > 100) {
            th *= 0.95;
            tw = th / imgAR;
        }
        /*if(tw == 0 || th == 0) {
            tw = 90;
            th = 90;
        }*/
        let tmp = document.getElementsByClassName(type);
        for(let i = 0; i < tmp.length; i++) {
            if(tmp[i].id === img.id.substring(2)) {
                img = tmp[i].childNodes[0].firstChild.firstChild;
                break;
            }
        }

        if(th < 97) {
            img.parentNode.parentNode.parentNode.lastChild.style.position = "relative";
            //img.parentNode.parentNode.parentNode.lastChild.style.bottom = (th - 97)/10 + "px";
        }

        img.style.width = tw + "px";
        img.style.height = th + "px";
        img.style.marginLeft = getNewMargin(tw) + "px";
        img.style.marginTop = getNewMargin(th) * 2 + "px";
        img.style.transform = "translateY(-4px)";
    }
}

var createCard = (name, amount, type) => {
    if(amount <= 0) return;
    let target = document.querySelector("#popup-content");
    let imgsrc = "/src/img/webp-items/" + name + ".webp";
    let res = 
    "<div class='item-card " + type + "' id='" + name + "'>" +
        "<div class='card-main tooltip'>" +
            "<div class='img-box'>" +
                "<img src='" + imgsrc + "' alt='" + nameextract(name) + "' id='i-" + name + "'>" +
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
    forceAspectRatio(img, type);
}

window.onload = function() {
    
    var characterlist = document.getElementsByClassName("character");
    var weapons = document.getElementById("weapon-bar");

    //load weapons
    for(let list in weaponlist) {
        for(let weapon in weaponlist[list]) {
            weapons.innerHTML += "<div class='icon weapons' id='" + weaponlist[list][weapon] + "'><img class='avatar weap' id='i-" + weaponlist[list][weapon] + "' alt='" + nameextract(weaponlist[list][weapon]) + "' src='src/img/webp-weapons/" + weaponlist[list][weapon] + ".webp'></div>"
            if(weapselected === weaponlist[list][weapon]) {
                var s = document.getElementById("i-" + weaponlist[list][weapon]);
                s.style.border = "2px solid gold";
            }
        }
    }
    //upcoming weapons
    for(let weapon in upcomingweapons) {
        weapons.innerHTML += "<div class='icon grey' id='" + upcomingweapons[weapon] + "'><img class='avatar' id='i-" + upcomingweapons[weapon] + "' alt='" + nameextract(upcomingweapons[weapon]) + "' src='src/img/webp-weapons/" + upcomingweapons[weapon] + ".webp'></div>"
            if(weapselected === upcomingweapons[weapon]) {
                var s = document.getElementById("i-" + upcomingweapons[weapon]);
                s.style.border = "2px solid gold";
            }
    }

    //load characters
    for(var char in characterlist){
        if(characterlist[char].id == null) break;
        var char = characterlist[char].id;
        var charicon = document.getElementById(char);
        charicon.innerHTML = "<img class='avatar char' alt='" + char + "' id='i-" + char + "' src='src/img/webp-characters/gi-" + char + ".webp'>";;
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
        analytics();
        //clear collapse
        collapsed = null;
        collapseToggle = false;
        document.querySelector("#collapse").innerHTML = collapseText[collapseToggle];

        forceInRange();
        let res = [];
        res.push(calc(charselected, charstart.value, charend.value, "char"));
        res.push(calc(weapselected, weapstart.value, weapend.value, "wp"));

        //clear prev cards
        clearCards();
        //create cards
        let c;
        let type;
        res.forEach((list) => {
            if(list != null) {
                c = list["type"];
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
            }
        });
        sortCards();

        document.querySelector("#popup-container").style.visibility = "visible";
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
            clearCards();
        } else if (e.target.id === "collapse") {
            collapseToggle = !collapseToggle;
            e.target.innerHTML = collapseText[collapseToggle];
            toggleCollapse();
        } else if (e.target.id === "faq") {
            showfaq();
        } else if (e.target.id === "talent") {
            toggleTalents(e.target.checked);
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
    if(charend.value > charend.max) charend.value = charend.max;
    if(charend.value < charend.min) charend.value = charend.min;
    //wpstart
    if(weapstart.value > weapstart.max) weapstart.value = weapstart.max;
    if(weapstart.value < weapstart.min) weapstart.value = weapstart.min;
    //wpend
    if(weapend.value > weapend.max) weapend.value = weapend.max;
    if(weapend.value < weapend.min) weapend.value = weapend.min;

    if(charstart.value >= charend.value) charstart.value = charend.value - 1;
    if(weapstart.value >= weapend.value) weapstart.value = weapend.value - 1;
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
    let max = wpmax[rarity - 1];
    weapend.max = max;
}
