$(document).ready(function(){

//formularz
let formPizzaOrder = $('#pizza-order');

//input imie/nazwisko
let firstName = $('#first-name');
let lastName = $('#last-name');

//input ulica/numer
let street = $('#street');
let streetNo = $('#street-no');

//input kod pocztowy /miasto
let postCode = $('#post-code');
let city = $('#city');

//select rodzaj pizzy
let pizza = $('#pizza');
let price = $('#price');

//input sosy
let sosy = $('#tomato-sauce'+ 'garlic-sause')
let tomatoSause = $('#tomato-sauce');
let garlicSause = $('#garlic-sauce');

//checkbox zgoda
let agree = $('#agree');

//lista error
let errors = $('#errors');


//CENNIK

let priceTable = [
    {id: 1, price: 29},
    {id: 2, price: 32},
    {id: 3, price: 36},
    {id: 4, price: 39},
    {id: 5, price: 41},
];

pizza.change(function(){
    let pizzaPrice = 0;
    let pizzaType = $(this).val();
    // console.log(pizzaType);
    if(pizzaType == 0) {
        price.text('0 PLN');
        return;
    }
    priceTable.forEach(function(element){
        if(element.id == pizzaType){
            pizzaPrice = element.price;
            price.text(pizzaPrice + ' PLN');
        }
    })
  })

  formPizzaOrder.submit(function(){
    errors.empty();
      
    //pusta tablica na errors
      let errorsArray = [];

      if($.trim(firstName.val()) == ''){
          errorsArray.push('Uzupełnij pole: Imię');
      }
      if($.trim(lastName.val()) == ''){
        errorsArray.push('Uzupełnij pole: Nazwisko');
    }
        if($.trim(street.val()) == ''){
        errorsArray.push('Uzupełnij pole: Ulica');
    }
        if($.trim(streetNo.val()) == ''){
        errorsArray.push('Uzupełnij pole: Numer');
    }
        if($.trim(postCode.val()) == ''){
        errorsArray.push('Uzupełnij pole: Kod pocztowy');
    }
        if($.trim(city.val()) == ''){
        errorsArray.push('Uzupełnij pole: Miasto');
    }
        if(!agree.is(':checked') == true) {
            errorsArray.push('Musisz wyrazic zgode RODO');
    }
        if(pizza.val() == 0){
            errorsArray.push('Wybierz Pizze');
    }
        if(!tomatoSause.is(':checked') && !garlicSause.is(':checked')) {
        errorsArray.push('Musisz wybrac sos');
    }
        
        if(errorsArray.length != 0){
          console.log(errorsArray);
          errorsArray.forEach(function(element){
             let newLi = '<li>' + element + '</li>'; 
             errors.append(newLi);
          })
          return false;
      }  
  })
})