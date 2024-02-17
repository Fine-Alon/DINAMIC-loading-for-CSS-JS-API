const renderApp = (apiData) => {

    const container = document.createElement('div')
    container.classList.add('container', 'd-flex', 'justify-content-between', 'flex-wrap', 'py-4')

    apiData.map(cardItem => {

        const card = document.createElement('div')
        const img = document.createElement('img')
        const cardBody = document.createElement('div')
        const cardTitle = document.createElement('h5')
        const cardText = document.createElement('p')
        const link = document.createElement('a')


        card.style.width = '18%'
        card.classList.add('card', 'mb-3')
        card.id = cardItem.id

        img.src = cardItem.category.image
        img.classList.add('card-img-top')
        img.alt = cardItem.title

        cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'justify-content-between')

        cardTitle.classList.add('card-title')
        cardTitle.textContent = cardItem.title

        cardText.classList.add('card-text')
        cardText.textContent = `${cardItem.price}$`

        link.id = cardItem.id
        link.href = `?productId=${cardItem.id}`
        link.classList.add('btn', 'btn-primary')
        link.textContent = 'Description'

        cardBody.append(cardTitle, cardText, link)

        card.append(img, cardBody)

        container.append(card)
    })
    return container
}

export {renderApp}