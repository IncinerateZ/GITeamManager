const bowlist = ["alley-hunter", "amos-bow", "blackcliff-warbow", "compound-bow", "ebony-bow", "favonius-warbow", "hunters-bow", "messenger", "prototype-crescent", "raven-bow", "recurve-bow", "royal-bow", "rust", "sacrificial-bow", "seasoned-hunters-bow", "sharpshooters-oath", "skyward-harp", "slingshot", "the-stringless", "the-viridescent-hunt"];
const catalystlist = ["amber-catalyst", "apprentices-notes", "blackcliff-amulet", "emerald-orb", "eye-of-perception", "favonius-codex", "lost-prayer-to-the-sacred-winds", "magic-guide", "mappa-mare", "otherworldly-story", "pocket-grimoire", "prototype-malice", "royal-grimoire", "sacrificial-fragments", "skyward-atlas", "solar-pearl", "the-widsith", "thrilling-tales-of-dragon-slayers", "twin-nephrite", "wine-and-song"];
const greatswordlist = ["blackcliff-slasher", "bloodtainted-greatsword", "debate-club", "favonius-greatsword", "ferrous-shadow", "lithic-blade", "old-mercs-pal", "prototype-aminus", "quartz", "rainslasher", "royal-greatsword", "sacrificial-greatsword", "serpent-spine", "skyrider-greatsword", "skyward-pride", "the-bell", "waster-greatsword", "white-iron-greatsword", "whiteblind", "wolfs-gravestone"];
const polearmlist = ["beginners-protector", "black-tassel", "blackcliff-pole", "crescent-pike", "deathmatch", "dragons-bane", "favonius-lance", "halberd", "iron-point", "kunwus-iris-rift", "lithic-spear", "primordial-jade-winged-spear", "prototype-grudge", "skyward-spine", "white-tassel"];
const swordlist = ["aquila-favonia", "blackcliff-longsword", "cool-steel", "dark-iron-sword", "dull-blade", "favonius-sword", "fillet-blade", "harbinger-of-dawn", "iron-sting", "lions-roar", "prototype-rancour", "royal-longsword", "sacrificial-sword", "silver-sword", "skyrider-sword", "skyward-blade", "the-alley-flash", "the-black-sword", "the-flute", "travelers-handy-sword"];
const weaponlist = [bowlist, catalystlist, greatswordlist, polearmlist, swordlist];

var charactersjson;
var weaponsjson;
var materialsjson;

var prevcharselected;
var charselected = "amber";

var prevweapselected;
var weapselected = "alley-hunter";

var charname = "Amber";
var weapname = "Alley Hunter";

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

    document.addEventListener("click", (e) => {
        if(e.target.classList.contains("char")) {
            avatarselect(e.target);
        } else if (e.target.classList.contains("weap")) {
            weaponselect(e.target);
        }
    })

    charactersjson = characters;
    
    materialsjson = materials;

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
    weapicon.style.border = "2px solid gold";
    weapname = weapselected[0].toUpperCase() + weapselected.substr(1, weapselected.length);
    document.getElementById("weapon-name").innerHTML = nameextract(weapname);
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
    let i = amount.length - 1;
    let c = 0;
    let res = "";
    while(i >= 0) {
        if(c % 3 == 0 && c != 0) res += ",";
        res += amount[i];
        c++;
        i--;
    }
    return res.split("").reverse().join("");
}