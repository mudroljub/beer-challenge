const closeButton = document.getElementById('close-button') as HTMLButtonElement;
const modal = document.getElementById('modal') as HTMLDivElement;
const orderBtn = document.getElementById('order-button') as HTMLButtonElement;
const orderMenu = document.getElementById('dropdown') as HTMLDivElement;

async function fetchData() {
  const response = await fetch('https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9')
  const data = await response.json()

  const container = document.getElementById('container')!
  
  data.record.forEach((item: any) => {
    const div = document.createElement('div')
    div.className = `bg${Math.min(Math.floor(item.ibu / 10), 9)}`
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>IBU: ${item.ibu}</p>
      <p>ABV: ${item.abv}</p>
      <img src="${item.image_url}" />
    `
    div.onclick = () => showModal(item)
    container.appendChild(div)
  })
}

fetchData()

/* EVENTS */

function showModal(item: any) {
  modal.hidden = false
  document.getElementById('modal-description')!.textContent = item.description
  document.getElementById('modal-image')!.src = item.image_url
}

closeButton.addEventListener('click', () => {
  modal.hidden = orderMenu.hidden = true
})

orderBtn.addEventListener('click', () => {
  orderMenu.hidden = !orderMenu.hidden;
})
