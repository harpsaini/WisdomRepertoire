

const app = {};

//get quotes from the api 
app.getQuotes = () =>{
  const apiResponse = $.ajax({
    url:'https://inspirational-quotes-api.herokuapp.com/quotes',
     method:'get',
     dataType: 'json'  
   }).then((res) => {
       const returnedData = getRandomIndexFromArr(res);
        app.displayQuotes(returnedData);
            
  });
}

// an event listener for user click 
app.buttonClickEventListener = () =>{
  $('button').on('click',function(){
    app.getQuotes();
    $('.userEvent').addClass('userEvent1');
  });  
}

//event listener for the button displayed after initial quote is rendered 

app.secondQuoteClickEventListener = () =>{
  $('.secondQuote').on('click',()=>{
    app.getQuotes();
   
  });
}

// create a random index 

const getRandomIndexFromArr = (array) =>{
  const randomIndex = Math.floor(Math.random()*array.length);
  return array[randomIndex];
}

// this is the display function 
app.displayQuotes = (returnedData) =>{
  $('.display').html(`<h2>${returnedData.quote}</h2>
  <p>${returnedData.source}</p>
  <button class="secondQuote">Click To Get Another Quote</button>
  `);
  app.secondQuoteClickEventListener();
}



//Kicks every thing
app.init = () =>{
  app.buttonClickEventListener();
};

// document ready
$(function(){
  app.init();
});
