const plusBtn = document.getElementById('plusBtn').addEventListener(
    'click', ()=>{
        handleProductChange('phone', true, 1219);
        calculateTotal();
    }
)

//minus button handler
const minusBtn = document.getElementById('minusBtn').addEventListener(
    'click', ()=>{
        handleProductChange('phone', false, 1219);
        calculateTotal();
    }
)


const caseIncrease = document.getElementById('case-increase').addEventListener(
    'click', ()=>{
        handleProductChange('case', true, 59);
        calculateTotal()
    }
)

const caseDecrease = document.getElementById('case-decrease').addEventListener(
    'click', ()=>{
        handleProductChange('case', false, 59);
        calculateTotal()
    }
)

function handleProductChange(productName, isIncrease, prices) {
        const caseInput = document.getElementById(productName + '-count');
        const caseCount = parseInt(caseInput.value);
        let caseNewCount = caseCount;
        if (isIncrease == true) {
            caseNewCount = caseCount + 1;
        }
        if (isIncrease == false && caseCount > 0) {
            caseNewCount = caseCount - 1;
        }
        // const caseNewCount = caseCount - 1;
        caseInput.value = caseNewCount;
        const caseTotal = caseNewCount * prices;
        document.getElementById(productName + '-total').innerText = '$' + caseTotal;
}



function calculateTotal(){
    const phoneInput = document.getElementById('phone-count').value;
    const phoneCount = parseInt(phoneInput);
    const caseInput = document.getElementById('case-count').value;
    const caseCount = parseInt(caseInput);
    const totalPrice = (phoneCount * 1219) + (caseCount * 59)
    document.getElementById('total-price').innerText = '$' + totalPrice;
}






// function handleCaseChange(isIncrease) {
//         const caseInput = document.getElementById('case-count');
//         const caseCount = parseInt(caseInput.value);
//         let caseNewCount = caseCount;
//         if (isIncrease == true) {
//             caseNewCount = caseCount + 1;
//         }
//         if (isIncrease == false && caseCount > 0) {
//             caseNewCount = caseCount - 1;
//         }
//         // const caseNewCount = caseCount - 1;
//         caseInput.value = caseNewCount;
//         const caseTotal = caseNewCount * 59;
//         document.getElementById('case-total').innerText = '$' + caseTotal;
// }


// function handlePhoneChange(isIncrease) {
//         const phoneInput = document.getElementById('phone-count');
//         const phoneCount = parseInt(phoneInput.value);
//         let phoneNewCount = phoneCount;
//         if (isIncrease == true) {
//             phoneNewCount = phoneCount + 1;
//         }
//         if (isIncrease == false && phoneCount > 0) {
//             phoneNewCount = phoneCount - 1;
//         }
//         phoneInput.value = phoneNewCount;
//         const phoneTotal = phoneNewCount * 1219;
//         document.getElementById('phoneTotal').innerText = '$' + phoneTotal;
// }











//plus button handler
// const plusBtn = document.getElementById('plusBtn').addEventListener(
//     'click', ()=>{
//         const caseInput = document.getElementById('case-count');
//         const caseCount = parseInt(caseInput.value);
//         const caseNewCount = caseCount + 1;
//         caseInput.value = caseNewCount;
//         const caseTotal = caseNewCount * 1219;
//         document.getElementById('caseTotal').innerText = '$' + caseTotal;
//     }
// )

// //minus button handler
// const minusBtn = document.getElementById('minusBtn').addEventListener(
//     'click', ()=>{
//         const caseInput = document.getElementById('case-count');
//         const caseCount = parseInt(caseInput.value);
//         const caseNewCount = caseCount - 1;
//         caseInput.value = caseNewCount;
//         const caseTotal = caseNewCount * 1219;
//         document.getElementById('caseTotal').innerText = '$' + caseTotal;
//     }
// )