document.querySelector('button').addEventListener('click', showPrice)

function showPrice() {
    const choice = document.querySelector('input').value
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + choice + '&interval=60min&outputsize=compact&apikey=10R757JYBCK1NQW4'

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            let stats = document.querySelector(".container");
            if (stats.style.display === "none") {
                stats.style.display = "block";
            } else {
                stats.style.display = "none";
            }
            let arr = Object.values(data['Time Series (Daily)'])

            document.querySelector('#name').innerText = "Name: $" + data['Meta Data']['2. Symbol'].toUpperCase()
            document.querySelector('#open').innerText = "Open: $" + arr[0]['1. open']
            document.querySelector('#high').innerText = "High: $" + arr[0]['2. high']
            document.querySelector('#low').innerText = "Low: $" + arr[0]['3. low']
            document.querySelector('#close').innerText = "Close: $" + arr[0]['4. close']
            console.log(data)
            console.log(data['Meta Data']['2. Symbol'])
            console.log(data['Time Series (Daily)'])

            console.log(arr[0]['1. open'])
            let today = new Date()
            console.log(today)

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}