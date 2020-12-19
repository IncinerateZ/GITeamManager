var a = async () => {
  const res = await fetch('http://api.incin.tech/analytics', {
    method: 'GET',
    mode: 'cors',
  });
  const j = await res.json();
}

export default a;