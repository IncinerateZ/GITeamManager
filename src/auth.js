var profile = null;

function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
    document.getElementById("user-name").innerHTML = profile.getName();
    document.getElementById("user-img").innerHTML = "<img id='profile-img' src='" + profile.getImageUrl() + "'>"
    document.getElementById("signinbtn").style.visibility = "hidden";
    document.getElementById("signinbtn").style.width = "0px";
    document.getElementById("user-profile").style.visibility = "visible";
}