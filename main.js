const cssPromises = {}

const loadResource = async (src) => {
//     JS
    if (src.endsWith('.js')) return import(src)


//     CSS
    if (!cssPromises[src]) {
        if (src.endsWith('.css')) {

            const linkCSS = document.createElement('link')
            linkCSS.rel = "stylesheet"
            linkCSS.integrity = "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            linkCSS.crossOrigin = "anonymous"
            linkCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            document.head.append(linkCSS)

            // make this async action possible to connect to async await...
            const promise = new Promise((resolve) => {
                linkCSS.addEventListener('load', () => {
                    resolve()
                })
            })

            cssPromises[src] = promise

            return cssPromises[src]
        }
    }

//     API
    return fetch(src).then(res => res.json())
}

const app = document.getElementById('app')

const searchParams = new URLSearchParams(location.search)
const productId = searchParams.get('productId')

const renderPage = (jsModule, serverApi, css) => {
    Promise.all([jsModule, serverApi, css,]
        .map(src => loadResource(src)))
        .then(([jsModule, apiData]) => {
            app.innerHTML = ''
            app.append(jsModule.renderApp(apiData))
        })
}

renderPage(
    productId ? "./product_detail.js" : "./product_list.js",
    `https://api.escuelajs.co/api/v1/products/${productId ? productId : ''}`,
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
)



