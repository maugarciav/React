import { useEffect, useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App() {
  const [fact, setFact] = useState()

  //Pensando que no se puede usar axios.
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  },[])

  return (
    <main>
      <h1>App</h1>
      {fact && <p>{fact}</p>}
    </main>
  );
}
