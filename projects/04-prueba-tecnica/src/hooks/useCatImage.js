import { useEffect, useState } from 'react';

export function useCatImage({fact}){
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if(!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    const imageUrl = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white`
    setImageUrl(imageUrl)
  
  }, [fact])

  return {imageUrl}
}