fetch("https://northwind.vercel.app/api/products").then(res => res.json()).then(data => {
    const theadTr = document.createElement("tr")
    const thead = document.getElementById("thead")
    const tbody = document.getElementById("tbody")

    for (let i = 0; i < Object.keys(data[0]).length; i++) {
        const th = document.createElement("th")
        th.textContent = Object.keys(data[0])[i]
        theadTr.appendChild(th)
    }
    thead.appendChild(theadTr)

    data.forEach(item => {
        const tr = document.createElement("tr")
        for (const key in item) {
            const td = document.createElement("td")
            td.textContent = item[key]
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    })
})