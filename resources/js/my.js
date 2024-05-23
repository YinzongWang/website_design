let pageItems = document.querySelectorAll('.page-item')
let page1 = document.getElementById('page-1')
let page2 = document.getElementById('page-2')

for (let pageItem of pageItems) {
    pageItem.onclick = function () {
        pageItems.forEach(p => {
            p.classList.remove('active')
        })
        this.classList.add('active')
        let page = Number(this.innerText) % 2
        if (page === 1) {
            page1.style.display = 'block'
            page2.style.display = 'none'
        } else {
            page1.style.display = 'none'
            page2.style.display = 'block'
        }
    }
}
