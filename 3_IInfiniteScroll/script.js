const orderList = document.querySelectorAll('.order-list')
console.log(orderList)

// orderList.appendChild(list)

orderList.forEach( node => {
    const list = document.createElement('li')
    list.textContent = "list 2"
    node.appendChild(list)
    
}

)