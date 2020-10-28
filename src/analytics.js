

var a = async () => {
  const res = await fetch('https://api.incin.tech/.netlify/functions/analytics/update?origin=gi', {
    method: 'GET',
    mode: 'cors',
  });
  console.log(await res);
  const j = await res.json();
  console.log(j);
};

export default a;