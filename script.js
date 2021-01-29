const plusBtn = document.getElementById('plusBtn').addEventListener(
    'click', ()=>{
        handlePhoneChange(true);
    }
)

//minus button handler
const minusBtn = document.getElementById('minusBtn').addEventListener(
    'click', ()=>{
        handlePhoneChange(false);
    }
)


const caseIncrease = document.getElementById('case-increase').addEventListener(
    'click', ()=>{
        const caseInput = document.getElementById('case-count');
        const caseCount = parseInt(caseInput.value);
        const caseNewCount = caseCount + 1;
        caseInput.value = caseNewCount;
        const caseTotal = caseNewCount * 59;
        document.getElementById('case-total').innerText = '$' + caseTotal;
    }
)

const caseDecrease = document.getElementById('case-decrease').addEventListener(
    'click', ()=>{
        const caseInput = document.getElementById('case-count');
        const caseCount = parseInt(caseInput.value);
        const caseNewCount = caseCount - 1;
        caseInput.value = caseNewCount;
        const caseTotal = caseNewCount * 59;
        document.getElementById('case-total').innerText = '$' + caseTotal;
    }
)

function name(params) {
    
}


function handlePhoneChange(isIncrease) {
    const phoneInput = document.getElementById('phone-count');
        const phoneCount = parseInt(phoneInput.value);
        let phoneNewCount = phoneCount;
        if (isIncrease == true) {
            phoneNewCount = phoneCount + 1;
        }
        if (isIncrease == false && phoneCount > 0) {
            phoneNewCount = phoneCount - 1;
        }
        phoneInput.value = phoneNewCount;
        const phoneTotal = phoneNewCount * 1219;
        document.getElementById('phoneTotal').innerText = '$' + phoneTotal;
}











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