const renderApp = (apiData) => {
    console.log(apiData)

    const container = document.createElement('div')
    container.classList.add('container', 'd-flex', 'justify-content-between', 'flex-wrap', 'py-4')

    const card = document.createElement('div')
    const img = document.createElement('img')
    const cardBody = document.createElement('div')
    const cardTitle = document.createElement('h5')
    const header = document.createElement('h1')
    const cardText = document.createElement('p')
    const link = document.createElement('a')


    card.style.width = '70%'
    card.classList.add('card', 'mb-3')
    card.id = apiData.id

    img.src = apiData.category.image
    img.classList.add('card-img-top')
    img.style.height = '80%'
    img.alt = apiData.title

    cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'justify-content-between')

    header.textContent = `Description obout ${apiData.title}`

    cardTitle.classList.add('card-text')
    cardTitle.textContent = `${apiData.price}$`

    cardText.classList.add('lead')
    cardText.textContent = `${apiData.description}$`

    link.id = apiData.id
    link.href = `http://localhost:63342/DINAMIC-loading-for-CSS-JS-API/index.html?_ijt=bvs3hdj6ks3hb4j9vnmhn0ooce&_ij_reload=RELOAD_ON_SAVE`
    link.classList.add('btn', 'btn-primary')
    link.textContent = 'BACK TO MAIN'

    cardBody.append(cardTitle, cardText, link)

    card.append(img, cardBody)

    container.append(header, card)

    return container
}


export {renderApp}