const closeButton = document.getElementById('close-button') as HTMLButtonElement;
const modal = document.getElementById('modal') as HTMLDivElement;
const orderBtn = document.getElementById('order-button') as HTMLButtonElement;
const orderMenu = document.getElementById('dropdown') as HTMLDivElement;

type Item = {
  id: number;
  name: string;
  ibu: number;
  abv: number;
  description: string;
  image_url: string;
};

/* INIT */

async function fetchData() {
  const response = await fetch('https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9')
  const data = await response.json()

  const container = document.getElementById('container')!
  
  data.record.forEach((item: Item) => {
    const div = document.createElement('div')
    div.className = `item bg${Math.min(Math.floor(item.ibu / 10), 9)}`
    div.innerHTML = `
      <p class="ibu ribbon">IBU: ${item.ibu}</p>
      <p class="abv">ABV: ${item.abv}</p>
      <img src="${item.image_url}" />
      <h3>${item.name}</h3>
    `
    div.onclick = () => showModal(item)
    container.appendChild(div)
  })
}

fetchData()

/* EVENTS */

function showModal(item: Item) {
  modal.hidden = false
  document.getElementById('modal-description')!.textContent = item.description
  const modalImage = document.getElementById('modal-image') as HTMLImageElement;
  modalImage.src = item.image_url;  
}

closeButton.addEventListener('click', () => {
  modal.hidden = orderMenu.hidden = true
})

orderBtn.addEventListener('click', () => {
  orderMenu.hidden = !orderMenu.hidden;
})
