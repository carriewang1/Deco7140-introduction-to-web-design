function calcTotalPrice(quantity, price) {  // function to calculate total price
    return quantity * price;
}

function getMessage(quantity,totalPrice) {
    return 'You total price is $' + totalPrice  // show the total price to users
}

function parseQuantity(val) {
    return parseInt(val, 10) || 0; // input should either be a number or 0 
}

// Sum numbers in given list
function sum(list) {
    return list.reduce(function(acc, x) {  // sum in given list with given value like all classes and rooms selects 
        return acc + x;
    }, 0)
}

function allCheck() {
    
    var submitBtn = document.getElementById('submitButton');
    var outputPara = document.getElementById('totalPrice');
    // set each entities price 

    var config = [
        [document.getElementById('quantityStudio'), 699],  // studio room price is $699
        [document.getElementById('quantityFamily'), 1599],  // Family room price is $1599
        [document.getElementById('quantityDetox'), 200],  // Detox room price is $200
        [document.getElementById('quantityVR'), 150], // VR room price is $150
        [document.getElementById('quantityDiy'), 400] // DIY program price is $400
        

        
    ];

    submitBtn.addEventListener('click', function() {
        let totalPrices;
        let quantities = config.map(function (data) { 
            const el = data[0];
            return parseQuantity(el.value);
        });

        if ( sum(quantities) > 0 ) {
            totalPrices = config.map(function(data) {
                const el = data[0], price = data[1];
                return calcTotalPrice(parseQuantity(el.value), price);
            });

            outputPara.innerHTML = getMessage( sum(quantities), sum(totalPrices) );
        } else {
            alert('Please book  at least 1 room');
        }
    });
   

};
allCheck();

