function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    document.getElementById("user-name").innerHTML = profile.getName();
    document.getElementById("user-img").innerHTML = "<img id='profile-img' src='" + profile.getImageUrl() + "'>"
    document.getElementById("signinbtn").style.visibility = "hidden";
    document.getElementById("signinbtn").style.width = "0px";
    document.getElementById("user-profile").style.visibility = "visible";
}