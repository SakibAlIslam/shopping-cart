const plusBtn = document.getElementById('plusBtn').addEventListener(
    'click', ()=>{
        handleProductChange(true);
    }
)

//minus button handler
const minusBtn = document.getElementById('minusBtn').addEventListener(
    'click', ()=>{
        handleProductChange(false);
    }
)

function handleProductChange(isIncrease) {
    const caseInput = document.getElementById('case-count');
        const caseCount = parseInt(caseInput.value);
        let caseNewCount = caseCount;
        if (isIncrease == true) {
            caseNewCount = caseCount + 1;
        }
        if (isIncrease == false && caseCount > 0) {
            caseNewCount = caseCount - 1;
        }
        caseInput.value = caseNewCount;
        const caseTotal = caseNewCount * 1219;
        document.getElementById('caseTotal').innerText = '$' + caseTotal;
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