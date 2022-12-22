function generateHash() {
  const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let hash = ''

  for (var i = 0; i < 6; i++) {
    hash += sample(symbols)
  }

  return hash
}

function generateImage() {
  return new Promise((resolve, reject) => {
    const container = document.getElementById('artwork')

    html2canvas(container).then((canvas) => {
      canvas.style.position = 'absolute'
      canvas.style.left = '-99999px'
      document.body.appendChild(canvas)

      resolve()
    })
  })
}

function downloadImage() {
  const canvas = document.getElementsByTagName('canvas')[0]
  const imageData = canvas.toDataURL('image/png')

  const link = document.createElement('a')
  link.download = `Randomatizm-${generateHash()}.png`
  link.href = imageData
  link.click()
  link.remove()

  canvas.remove()
}

function handleKeydown(e) {
  console.log(e.key, e.code, e.keyCode)

  if (e.keyCode === 83) {
    generateImage().then(downloadImage)
  }
}

document.addEventListener('keydown', handleKeydown)
