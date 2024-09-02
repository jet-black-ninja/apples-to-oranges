import {Filters, Fruits} from "../data/types"

//Return true if the fruit matched the query , otherwise false

function matchesQuery(fruit, query){
    const getCleanStr =(str:string) =>{
        return str.replace(/\s+/g,"").toLowerCase();//remove all whitespace with empty string
    }

    const getCleanQuery = (str:string) => {
        return getCleanStr(str).replace(/[^\w\s]/gi,"");//replace all non characters and white spaces
    }

    const cleanQuery = getCleanQuery(query);

    if(cleanQuery){
        const matchString = (str) => getCleanStr(str).includes(cleanQuery);
        const matchVitamins = (arr) => arr.some((vitamin) => matchString(vitamin));
        const matchColors = (arr) => arr.some((color) => matchString(color+"color"));

        const anyMatch = 
        matchString(fruit.name +"fruit") ||
        matchString(fruit.family +"family")||
        matchVitamins(fruit.vitamins)||
        matchColors(fruit.colors);
        return anyMatch;
    }
//when no query ,its an auto match 
    return true;
}

//Return true if the fruit matches all the checked checkboxes , otherwise false
function matchesCheckboxes(fruit, colors, families, vitamins){
    const checkedColors = colors
        .filter((color) => color.isChecked())
        .map((color)=> color.name);
    const checkedFamilies = families
        .filter((family) => family.isChecked())
        .map((family) => family.name);
    const checkedVitamins = vitamins
        .filter((vitamin) => vitamin.isChecked)
        .map((vitamin) => vitamin.name);

    //if any checkboxes are checked , perform checks
    if(checkedColors.length || checkedFamilies.length || checkedVitamins.length ){
        const colorMatch = checkedColors.every((checkedColor) => fruit.colors.includes(checkedColor));
        const familyMatch = checkedFamilies.every((checkedFamily) => fruit.family.includes(checkedFamily));
        const vitaminMatch = checkedVitamins.every((checkedVitamin) => fruit.vitamins.includes(checkedVitamin));

        return colorMatch && familyMatch && vitaminMatch;
    }
    // no checked boxes mean always match
    return true;
}
// return true always, unless favorite filter is checked and fruit.favorite is false
function matchesFavorites(fruit, favorite){
    if(favorite && !fruit.isFavorite){
        return false;
    }

    return true;
}

function filterFruits(fruits:Fruits, filters:Filters){
    const{colors, families, vitamins, favorite, query} = filters;

    const filteredFruits = fruits.filter((fruit) => {
        const favoriteMatch = matchesFavorites(fruit, favorite);
        const queryMatch = matchesQuery(fruit, query);
        const checkBoxMatch = matchesCheckboxes(fruits, colors, families, vitamins);

        return favoriteMatch && queryMatch && checkBoxMatch;
    });
    return filteredFruits;
}

export default filterFruits;