var a = async () => {
  const res = await fetch('https://api.incin.tech/.netlify/functions/analytics', {
    method: 'GET',
    mode: 'cors',
  });
  const j = await res.json();
}

export default a;