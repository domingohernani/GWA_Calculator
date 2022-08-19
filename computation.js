function computeGWA() {
    const LENGTH = document.querySelector('.container_courses').childElementCount;
    const result = document.querySelector('#result').innerText;
    let grades = [];
    let units = [];
    let totalUnits = 0;
    let totalGrade = 0;


    // For grabbing the units per box
    for (let i = 1; i <= LENGTH; i++) {
        units.push(document.querySelector(`#unit` + i).value);
    }
    for (let i = 0; i < units.length; i++) {
        units[i] = parseFloat(units[i]);
        totalUnits += units[i];
    }
    // console.log(units);
    // console.log(totalUnits);

// -------------------------------------------

    // For grabbing the grades per box
    for (let i = 1; i <= LENGTH; i++) {
        grades.push(document.querySelector(`#grade` + i).innerText);
    }
    for (let i = 0; i < grades.length; i++) {
        grades[i] = parseFloat(grades[i]);
        grades[i] *= units[i];
        totalGrade += grades[i];
    }
    // console.log(totalGrade);

    // Grade computation
    console.log(totalUnits);
    console.log(totalGrade);

    let finalGrade = totalGrade / totalUnits;
    document.querySelector('#result').innerText = finalGrade.toFixed(3);
}