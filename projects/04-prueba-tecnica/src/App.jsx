import { useEffect, useState } from 'react';
import './App.css'


const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState(null)


  //Pensando que no se puede usar axios.
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const {fact} = data
        setFact(fact)

        const firstWord = fact.split(' ', 3).join(' ')

        setImageUrl(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white`)
      })
  },[])

  return (
    <main>
      <h1>App</h1>
      <section>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image from first word of ${fact}`} />}
      </section>
    </main>
  );
}
