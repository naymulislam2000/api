
const loadcountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displaycountry(data))
}
loadcountries()

const displaycountry = (countries) => {
    //console.log(countries);
    const ui = document.getElementById('countries')
    
    countries.forEach(country => {
        //console.log(country);
        
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <img class="w-full h-52  border-2" src="${country.flags.png}" alt="">
        <h3 class="text-2xl mt-3">Name : ${country.name.common}</h3>
        <p class="my-5">Capital : ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')" class="btn btn-primary btn-outline w-full">see more</button>`

        ui.appendChild(div)
    })
    
}

const loadCountryByName =(name) => {
    //console.log(name);
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => displycountrydesply(data[0]))
    
}

const displycountrydesply = (country) => {
    //console.log(country);
    
    const detailsdiv = document.getElementById('country-details')
    detailsdiv.innerHTML =`
        <img class="w-100 h-80 mx-auto mt-5  border-2" src="${country.flags.png}" alt="">
        <h3 class="text-5xl mt-3">Name : ${country.name.common}</h3>
        <p class="my-5">Capital : ${country.capital}</p>
        <p class="my-5">population : ${country.population}</p>
        <p class="my-5">Region : ${country.region}</p>
        `
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll animation
        });
        
        
        // Attach to a button click
        
        
}
