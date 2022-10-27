//global
var WW = innerWidth;
var HH = innerHeight;
var IngredientID = 12;
var activeING = [];
var activeDishRecipe = [];

//classes
class Ingredient {

    constructor(id, name, img, cal) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.cal = cal;

    }

    Render() {
        var str = '';
        str += `<div id="${this.name}" class="IngredientCards col-6 col-md-4 col-lg-3">`;
        str += `<p class="nameIngredient">${this.name}</p>`;
        str += `<img class="img-fluid imgIngredient" src="${this.img}" alt="img of Ingredient"/>`;
        str += `<p class="CalIngredient">Calories per 100g: ${this.cal}</p>`;
        str += `<input id="${this.name}" class="inputsclass" type="checkbox" name="Ingredient"/><label for="Ingredient" class="addLable">Add</label></div>`
        return str;



        //<div id="" class="IngredientCards col-12 col-md-4 col-lg-3">
        //    <p class="nameIngredient">Pasta</p>
        //    <img class="img-fluid imgIngredient" src="https://www.foodpackaging.guru/pastapackaging/wp-content/uploads/sites/14/2016/01/PFM_pasta-standard-dried.jpg" alt="Alternate Text" />
        //    <p class="CalIngredient">Calories per 100g: 34</p>
        //    <input type="checkbox" name="Ingredient" />
        //    <label for="Ingredient" class="addLable">Add</label><br />
        //</div>
    }

}

class DishRecipe {
    constructor(name, ingredients, time, img) {

        this.name = name;
        this.ingredients = ingredients;
        this.time = time;
        this.img = img;


    }

    getTotalCalories() {
        var sum = 0;
        for (let i; i < this.ingredients.length;i++) {
            sum += this.ingredients[i];
        }
        return sum;
    }

    Render() {
        var str = '';
        str += `<div class="col-12 DishRecipeCards col-md-4 col-lg-3">`;
        str += ` <img class="img-fluid" src="${this.img}" alt="image of Dish"/>`
        str += `<p>Dish Name: ${this.name}</p>`;
        str += `<p>Total cooking time : ${this.time} min</p>`;
        var strarr='';
        for (var i = 0; i < this.ingredients.length; i++) {
            strarr += `${this.ingredients[i]}, `;
        }
        str += `<p>Ingredients: ${strarr}</p>`
        str += `<p>Total Cal : ${this.getTotalCalories()}</p>`;
        str += `<button onclick="ClickShowIngredient(this.id)" id="${strarr}">Show Ingredient</button></div>`;
        return str;




        //<div class="col-12 DishRecipeCards col-md-4 col-lg-3">
        //    <img class="img-fluid" src="https://www.foodandwine.com/thmb/89ZZD9UjFK0gl916arfCVwjJamc=/2000x1334/filters:fill(auto,1)/cream-tomato-rigatoni-FT-RECIPE1020-139fb3fa52574e8bb06f98e7fa3e4f1e.jpg" alt="Alternate Text" />
        //    <p>Dish Name: Pasta With sauce</p>
        //    <p>Total cooking time : 45 min</p>
        //    <p>Total Cal : 345</p>
        //    <button>Show Ingredient</button>
        //</div>
    }

}


//wire to onClick Img Plate
function OnClickPlate(img) {
    if (img.id =='Ing') {
        img.src = 'img/plateGreen.png';
        document.getElementById('Dis').src = 'img/plate.png';
        IngredientModal();
    }
    else {
        img.src = 'img/plateGreen.png';
        document.getElementById('Ing').src = 'img/plate.png';
        DishRecipeModal();
    }
    document.getElementById('CrispySound').play();
    document.getElementById('steakSound').volume  = 0.1;
    document.getElementById('steakSound').play();
    
}




//show the input Ingredient card and hide the rest of dish cards
function IngredientModal() {
    $('#IngredientINPUT').animate({ top: `${HH / 6}px`, left: `${WW / 3.33}px` });
    $('#IngredientINPUT').fadeIn(1500);
    $('#DishRecipeINPUT').fadeOut(500);
    $('#DishRecipeCardsPH').hide();
}
function DishRecipeModal() {
    $('#DishRecipeINPUT').animate({ top: `${HH / 6}px`, left: `0px` });
    $('#DishRecipeINPUT').fadeIn(1500);
    $('#IngredientINPUT').fadeOut(500);
    $('#DishRecipeCardsPH').hide();
    var str = '<div class="row">';
    for (var i = 0; i < DataIngredient.length; i++) {
        let obj = new Ingredient(i, DataIngredient[i].name, DataIngredient[i].img, DataIngredient[i].cal);
        str += obj.Render();
    }
    str += '<div class="row"><button onclick="CreateDish()" id="dishCreateBtn">Create DishRecipe</button>';
    str += '<button onclick="CloseDish()" id="dishCloseBtn">Close</button>';
    str += '</div>';
    str += '</div>';
    document.getElementById('IngredientCardsPH').innerHTML = str;

}

//wire to close btn in the Ingredient card
function CloseIngredientModal() {
    //$('#IngredientINPUT').fadeOut(1500);
    //$('#DishRecipeCardsPH').show();
    ResetToMain();

}

//wire to create btn in the Ingredient card Create new object from Ingredient class 
function CreateIngredient() {
    IngredientID++;
    var name = document.getElementById('IngredientName').value;
    var img = document.getElementById('IngredientImg').value;
    var cal = document.getElementById('IngredientCal').value;

    var ingredient = new Ingredient(IngredientID, name, img, cal);

    DataIngredient.push(ingredient);
    alert('New Ingredient have been add');
    ResetToMain();

    

}

//wire to Create Dish Btn in " DishRecipeModal" function by render
function CreateDish() {
    var name = document.getElementById('DishRecipeName').value;
    var time = document.getElementById('DishRecipeTime').value;
    var img = document.getElementById('DishRecipeImg').value;
    var IngredientArray = [];
    //array
    var Ingreds = document.getElementById('IngredientCardsPH').getElementsByClassName('inputsclass'); //array
    for (var i = 0; i < Ingreds.length; i++) {
        if (Ingreds[i].checked==true) {
            IngredientArray.push(Ingreds[i].id);
        }
    }
    var dish = new DishRecipe(name, IngredientArray, time, img);
    activeDishRecipe.push(dish);
    alert('New DishRecipe have been add');
    ResetToMain();


}

function CloseDish() {
    ResetToMain();
}

//reset to the main screen
function ResetToMain() {
    $('#DishRecipeCardsPH').show();
    $('#DishRecipeINPUT').fadeOut(500);
    $('#IngredientINPUT').fadeOut(500);
    $('#ModalIngredient').fadeOut(500);
    document.getElementById('Dis').src = 'img/plate.png';
    document.getElementById('Ing').src = 'img/plate.png';
    var str = document.getElementById('DishRecipeCardsPH').innerHTML;
    for (var i = 0; i < activeDishRecipe.length; i++) {
        let obj = new DishRecipe(activeDishRecipe[i].name, activeDishRecipe[i].ingredients, activeDishRecipe[i].time, activeDishRecipe[i].img);
        str += obj.Render();
    }
    document.getElementById('DishRecipeCardsPH').innerHTML = str;  
    
    
}

function RenderToModalIngredient(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < DataIngredient.length; j++) {
            if (arr[i] == DataIngredient[j].name) {
                let obj = new Ingredient(IngredientID++, DataIngredient[j].name, DataIngredient[j].img, DataIngredient[j].cal)
                str += obj.Render();
            }
        }
        
        
    }
    document.getElementById('IngredientDetail').innerHTML = str;
    
}

function ClickShowIngredient(str) {
    var arr = str.split(", ");
    $('#ModalIngredient').animate({ top: `${HH / 6}px`, left: `17px` });
    $('#ModalIngredient').fadeIn(1000);
    RenderToModalIngredient(arr)
    

}




