var a = async () => {
  const res = await fetch('https://api.incin.tech/analytics', {
    method: 'GET',
    mode: 'cors',
  });
  const j = await res.json();
  console.log(j);
}

export default a;