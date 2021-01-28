//plus button handler
const plusBtn = document.getElementById('plusBtn').addEventListener(
    'click', ()=>{
        const productQuantity = getInputs('productQuantity');
        updateValues('productQuantity',productQuantity + 1);
    }
)

//minus button handler
const minusBtn = document.getElementById('minusBtn').addEventListener(
    'click', ()=>{
        const productQuantity = getInputs('productQuantity');
        updateValues('productQuantity', productQuantity - 1);
    }
)


function getInputs(id) {
    const input = document.getElementById(id).value;
    const numberInput = parseFloat(input);
    return numberInput;
}

function updateValues(id, productQuantity) {
    if (productQuantity >= 0) {
        document.getElementById(id).value = productQuantity;
    }
}