async function fetchData() {
  const response = await fetch('https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9')
  const data = await response.json()

  const grid = document.getElementById('grid')!
  
  data.record.forEach((item: any) => {
    const div = document.createElement('div')
    div.className = `bg${Math.min(Math.floor(item.ibu / 10), 9)}`
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>IBU: ${item.ibu}</p>
      <p>ABV: ${item.abv}</p>
      <img src="${item.image_url}" />
    `
    div.onclick = () => showModal(item.description)
    grid.appendChild(div)
  })
}

function showModal(description: string) {
  const modal = document.getElementById('modal')!
  modal.hidden = false
  document.getElementById('description')!.textContent = description
}

fetchData()
