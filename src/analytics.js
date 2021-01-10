function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var a = async () => {
  let visited = getCookie("visited");
  if (visited === "" || parseInt(visited) !== new Date().getDate()) {
    document.cookie = "visited=" + new Date().getDate();
  } else {
    return;
  }
  
  const res = await fetch('https://api.incin.tech/analytics', {
    method: 'GET',
    mode: 'cors',
  });
  const j = await res.json();
}

export default a;