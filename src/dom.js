import wallpaper from './images/tree.jpg'
import bitcoinWhitepaper from './pdfs/1_Search.pdf'

const domHandler = () => {
  console.log(wallpaper)
  console.log(bitcoinWhitepaper)
  document.body.style.backgroundImage = `url(${wallpaper})`
  const link = document.createElement('a')
  link.href = bitcoinWhitepaper
  link.textContent = 'Bitcoin Whitepaper'
  document.body.appendChild(link)
}

export default domHandler