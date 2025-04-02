const cakes=(recipe:Record<string,number>,available:Record<string,number>) => {
    const arrRecipe=Object.entries(recipe)
    const arrAvailable=Object.entries(available)
    let availability:any=null
    for(const [ingredient,quantity] of arrRecipe){
        const isAvailable=arrAvailable.find(([key])=>key===ingredient)
        console.log(isAvailable)
        if(!isAvailable){
            return 0
        }
        if(availability>Math.floor(isAvailable[1]/quantity)||availability===null){
            availability=Math.floor(isAvailable[1]/quantity)
        }
    }
    return availability
}
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));

// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})