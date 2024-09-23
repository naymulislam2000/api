

document.getElementById("search-button").addEventListener('click' ,
function () {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    console.log(searchText);
    if(searchText == ''){
        alert("written search")
        return
    }
    //console.log(`www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
    //api fetch
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res => res.json())
    .then(data => displayFoodData(data.meals))
    



    //clear the input
    searchInput.value = ""
    
})
//in foods recive the array data + loop in array and get single deta from array
const displayFoodData = (foods) => {
    //console.log(foods);
    if(foods == null){
        alert("wrong search")
        return
    }
    const ui = document.getElementById('foods-div');
    ui.innerHTML = ''

    foods?.map((food)=> {
        //console.log(food);
        const div = document.createElement('div');
        div.classList.add("card")
        div.classList.add("border-2")
        div.innerHTML = `
        <figure>
          <img
            src="${food?.strMealThumb}"
            alt="Food" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${food?.strMeal}</h2>
          <p>${food?.strInstructions?.slice(0, 170)}</p>
          <div class="card-actions justify-end">
            <button onclick="loadfoodName('${food?.strMeal}')" class="btn btn-primary btn-outline w-full">see details</button>
          </div>
        </div>`

        ui.appendChild(div)
    })
    
}

const loadfoodName = (strMeal)=> {
    //console.log(foodname , 'run');
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`)
    .then(res => res.json())
    .then(data => displyDesply(data[0]))

    
}
const displyDesply = (food)=>{
    console.log(food);
    
    const detailseDiv = document.getElementById('food-detils');
    detailseDiv.innerHTML =  `
    <figure>
      <img class="w-full h-auto border-2 mx-auto "
        src="${food?.strMealThumb}"
        alt="Food" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">${food?.strMeal}</h2>
      <p class="my-5">${food?.strInstructions?.slice(0, 170)}</p>
      
    </div>`
}

