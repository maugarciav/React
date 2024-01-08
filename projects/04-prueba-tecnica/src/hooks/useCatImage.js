import { useEffect, useState } from 'react';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({fact}){
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if(!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    const imageUrl = `${CAT_PREFIX_IMAGE_URL}/cat/says/${firstWord}?fontSize=50&fontColor=white`
    setImageUrl(imageUrl)
  
  }, [fact])

  return {imageUrl}
}