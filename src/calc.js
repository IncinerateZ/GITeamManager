import characterlist from '../src/characters.js';
import weaponlist from '../src/weapons.js'
import wprarity from './wprarity.js';
import materiallist from '../src/materials.js';
import rules from '../src/rules.js';

const cxpmat = [1000, 5000, 20000];
const wxpmat = [400, 2000, 10000];

const cmat = {
    0 : "wanderers-advice",
    1 : "adventurers-experience",
    2 : "heros-wit"
}

const wmat = {
    0 : "enhancement-ore",
    1 : "fine-enhancement-ore",
    2 : "mystic-enhancement-ore"
}

const lvlceils = ["20", "40", "50", "60", "70", "80"];
const talentceils = {
    "40" : [2],
    "50" : [3, 4],
    "60" : [5, 6],
    "70" : [7, 8]
}

//assume start is not ascended, asume end level will not ascend
// 1) calculate mora & items needed based on pure xp
// 2) calculate mora & items needed for ascension
// 3) calculate mora & items needed for talents
var calc = (name, start, end, type) => {
    if(name == null) return null;
    let res = {  };
    if(type === "char") {
        var mats = characterlist[name];
        var ascmats = mats["ascension"].split(",");
        var talmats = mats["talents"].split(",");
        //get mora needed per level
        let xp = charexp(end, start);
        let mora = xpcost(xp);
        let mora2 = 0;
        let mat = {}
        greedyChar(mat, xp);
        for(let l = start; l < end; l++) {
            if(lvlceils.includes("" + l)) {
                //calc mora needed per ascension
                mora = parseInt(mora) + parseInt(rules["ascension"]["" + l]["mora"]);
                //get items needed per ascension
                let b = rules["ascension"]["" + l]["mcost"].split(",");
                for(let i = 0; i < ascmats.length; i++) {
                    let m = ascmats[i];
                    if(parseInt(b[i].split("-")[0]) != 0) {
                        m = materiallist[m][parseInt(b[i].split("-")[0])];
                    }
                    if(mat[m + "c"] == undefined) mat[m + "c"] = 0;
                    mat[m + "c"] += parseInt(b[i].split("-")[1]);
                }
                //get mora needed per talent level * 3
                if(document.querySelector("#talent").checked) {
                    if(talentceils["" + l] != null) {
                        talentceils["" + l].forEach(t => {
                            mora2 = parseInt(mora2) + (parseInt(rules["talents"][t]["mora"]) * 3);
                            //get items needed per talent level
                            let a = (rules["talents"][t]["mcost"].split(","));
                            for(let i = 0; i < talmats.length; i++) {
                                let m = talmats[i];
                                if(m === "unknown" || parseInt(a[i].split("-")[0]) != 0) {
                                    m = materiallist[m][parseInt(a[i].split("-")[0])];
                                }
                                if(mat[m + "t"] == undefined) mat[m + "t"] = 0;
                                mat[m + "t"] += (3 * parseInt(a[i].split("-")[1]));
                            }
                        })
                    }
                }
            }
        }
        res["mora"] = mora;
        res["mora2"] = mora2;
        res["mat"] = mat;
        res["type"] = 0;
        return res;
    } else if (type === "wp") {
        var rarity = wprarity[name];
        var mats = weaponlist[name].split(",");
        //get mora needed per level
        let xp = wpexp(end, start, rarity)
        let mora = xpcost2(xp);
        let mat = {}
        greedyWeap(mat, xp);
        for(let l = start; l < end; l++) {
            if(lvlceils.includes("" + l)) {
                //calc mora needed per ascension
                mora = parseInt(mora) + parseInt(rules["weapons"][rarity][l]["mora"]);
                //get items needed per ascension
                let b = rules["weapons"][rarity][l]["mcost"].split(",");
                for(let i = 0; i < mats.length; i++) {
                    let m = mats[i];
                    if(parseInt(b[i].split("-")[0]) != 0) {
                        m = materiallist[m][parseInt(b[i].split("-")[0])];
                    }
                    if(mat[m + "w"] == undefined) mat[m + "w"] = 0;
                    mat[m + "w"] += parseInt(b[i].split("-")[1]);
                }
            }
        }
        res["mora"] = mora;
        res["mat"] = mat;
        res["rarity"] = rarity;
        res["type"] = 1;
        return res;
    }
}

var greedyChar = (mat, xp) => {
    let mats = {};
    for(let i = cxpmat.length - 1; i >= 0; i--) {
        while(xp >= cxpmat[i]) {
            if(mats[cmat[i]] == undefined) mats[cmat[i]] = 0;
            mats[cmat[i]] += 1;
            xp -= cxpmat[i];
        }
    }
    if(mats[cmat[0]] == undefined) mats[cmat[0]] = 0;
    if(xp > 0) mats[cmat[0]] += 1;
    mat["xpmats"] = mats;
}

var greedyWeap = (mat, xp) => {
    let mats = {};
    for(let i = wxpmat.length - 1; i >= 0; i--) {
        while(xp >= wxpmat[i]) {
            if(mats[wmat[i]] == undefined) mats[wmat[i]] = 0;
            mats[wmat[i]] += 1;
            xp -= wxpmat[i];
        }
    }
    if(mats[wmat[0]] == undefined) mats[wmat[0]] = 0;
    if(xp > 0) mats[wmat[0]] += 1;
    mat["xpmats"] = mats;
}

//xp needed to go to from a to b inclusive
var charexp = (b, a) => {
    return rules["charlevels"][b] - rules["charlevels"][a];
}

var wpexp = (b, a, rarity) => {
    return rules["wplevels"][rarity][b] - rules["wplevels"][rarity][a];
}

//mora needed for N char xp
var xpcost = xp => {
    return xp/5;
}

//mora needed for N wp xp
var xpcost2 = xp => {
    return xp/10;
}

export default calc;