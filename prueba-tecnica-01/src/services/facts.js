const CAT_API_RANDOM_FACT = 'https://catfact.ninja/fact'

// llamando a la api con async await
export const getRandomFact = async () => {
  // get random fact
  try {
    const data = await fetch(CAT_API_RANDOM_FACT)
    const json = await data.json()
    const { fact } = json
    return fact
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export const getRandomImage = async fact => {
  // como el valor de fact no existe, no se ejecuta la función
  if (!fact) return

  // get first word of fact
  const firstWord = fact.split(' ')[0]

  // get random image
  try {
    const dataImage = await fetch(
      `https://cataas.com/cat/says/${firstWord}?json=true`
    )
    const jsonImage = await dataImage.json()
    const { url } = jsonImage
    return url
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
