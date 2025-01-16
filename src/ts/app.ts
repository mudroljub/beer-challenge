async function fetchData() {
  const response = await fetch('https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9')
  const data = await response.json()
  console.log(data)
 
  const grid = document.getElementById('grid')!
  
  data.record.forEach((item: any) => {
    const div = document.createElement('div')
    div.className = `bg${Math.min(Math.floor(item.IBU / 10), 9)}`
    div.innerHTML = `<h3>${item.title}</h3><p>IBU: ${item.IBU}</p><p>ABV: ${item.ABV}</p><img src="${item.picture}" />`
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
