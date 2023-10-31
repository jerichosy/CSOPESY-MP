// main.js
function strategyChange() {
    let strategy = document.getElementById('strategy').value;
    let timeQuantumDiv = document.getElementById('timeQuantumDiv');

    // If strategy is RR, show Time Quantum input. Otherwise, hide it.
    if(strategy === 'RR') {
        timeQuantumDiv.style.display = 'block';
    } else {
        timeQuantumDiv.style.display = 'none';
    }
}

function submitClick() {
    // let strategy = document.getElementById('strategy').value;
    // let arrivalTime = document.getElementById('arrivalTime').value;
    // let burstTime = document.getElementById('burstTime').value;
    // let timeQuantum = document.getElementById('timeQuantum').value;
    // let output = 'Strategy: ' + strategy + '\nArrival Time: ' + arrivalTime + '\nBurst Time: ' + burstTime;

    // // If strategy is RR, add Time Quantum to output.
    // if(strategy === 'RR') {
    //     output += '\nTime Quantum: ' + timeQuantum;
    // }

    // // Output the results in the textbox
    // document.getElementById('output').innerText = output;
}