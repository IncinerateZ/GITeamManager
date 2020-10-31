var a = async () => {
  let origin = window.location.hostname;
  const res = await fetch('https://api.incin.tech/analytics?o=' + origin, {
    method: 'GET',
    mode: 'cors',
  });
  const j = await res.json();
  console.log(j);
}

export default a;