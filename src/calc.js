import characterlist from '../src/characters.js';
import weaponlist from '../src/weapons.js'
import materiallist from '../src/materials.js';
import rules from '../src/rules.js';

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
        let mora = xpcost(charexp(end, start));
        let mat = {}
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
                    if(mat[m] == undefined) mat[m] = 0;
                    mat[m] += parseInt(b[i].split("-")[1]);
                }
                //get mora needed per talent level * 3
                if(document.querySelector("#talent").checked) {
                    if(talentceils["" + l] != null) {
                        talentceils["" + l].forEach(t => {
                            mora = parseInt(mora) + (parseInt(rules["talents"][t]["mora"]) * 3);
                            //get items needed per talent level
                            let a = (rules["talents"][t]["mcost"].split(","));
                            for(let i = 0; i < talmats.length; i++) {
                                let m = talmats[i];
                                if(parseInt(a[i].split("-")[0]) != 0) {
                                    m = materiallist[m][parseInt(a[i].split("-")[0])];
                                }
                                if(mat[m] == undefined) mat[m] = 0;
                                mat[m] += (3 * parseInt(a[i].split("-")[1]));
                            }
                        })
                    }
                }
            }
        }
        res["mora"] = mora;
        res["mat"] = mat;
        return res;
    } else if (type === "wp") {
        var mats = weaponlist[name].split(",");
        //get mora needed per level
        let mora = xpcost2(wpexp(end, start));
        let mat = {}
        for(let l = start; l < end; l++) {
            if(lvlceils.includes("" + l)) {
                //calc mora needed per ascension
                mora = parseInt(mora) + parseInt(rules["weapons"][l]["mora"]);
                //get items needed per ascension
                let b = rules["weapons"][l]["mcost"].split(",");
                for(let i = 0; i < mats.length; i++) {
                    let m = mats[i];
                    if(parseInt(b[i].split("-")[0]) != 0) {
                        m = materiallist[m][parseInt(b[i].split("-")[0])];
                    }
                    if(mat[m] == undefined) mat[m] = 0;
                    mat[m] += parseInt(b[i].split("-")[1]);
                }
            }
        }
        res["mora"] = mora;
        res["mat"] = mat;
        return res;
    }
}

var greedyChar = (xp) => {

}

var greedyWeap = (xp) => {

}

//xp needed to go to from a to b inclusive
var charexp = (b, a) => {
    return rules["charlevels"][b] - rules["charlevels"][a];
}

var wpexp = (b, a) => {
    return rules["wplevels"][b] - rules["wplevels"][a];
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