var prevselected;
var selected = "amber";

window.onload = function() {
    var characterlist = document.getElementsByClassName("character-icon");
    for(var char in characterlist){
        if(characterlist[char].id == null) break;
        var char = characterlist[char].id;
        var charicon = document.getElementById(char);
        charicon.innerHTML = "<img class='char-avatar' id='i-" + char + "' src='src/img/characters/gi-" + char + ".png'>";;
        if(char === selected) {
            var s = document.getElementById("i-" + char);
            s.style.border = "2px solid gold";
        }
    }

    document.addEventListener("click", function(e) {
        if(e.target.id.includes("i-")) {
            avatarselect(e.target);
        }
    })
}

var avatarselect = charicon => {
    prevselected = selected;
    selected = charicon.id.substring(2, charicon.id.length);
    var prev = document.getElementById("i-" + prevselected);
    prev.style.border = "";
    charicon.style.border = "2px solid gold";
}