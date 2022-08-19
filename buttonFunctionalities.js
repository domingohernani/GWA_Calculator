const container = document.querySelector('.container_courses');
const addButton = document.querySelector('#add');
const removeButton = document.querySelector('#remove');
let counter = 5;

function addCourse() {
    let box = document.createElement('div')
    box.setAttribute('class', 'boxes');
    box.setAttribute('id', 'box' + counter);

    // Creating course box
    let input = document.createElement('input');
    input.setAttribute('placeholder', 'Subject ' + counter);
    input.setAttribute('id', 'course' + counter);
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'course');

    // Creating unit box
    let unit = document.createElement('input');
    unit.setAttribute('placeholder', 'Units');
    unit.setAttribute('id', 'unit' + counter);
    unit.setAttribute('type', 'text');
    unit.setAttribute('name', 'unit');
    
    // Creating remove icon/buttom
    let remove = document.createElement('button');
    remove.innerText = 'do_not_disturb_on';
    remove.setAttribute('class', 'material-symbols-outlined');
    remove.setAttribute('onclick', `minus${counter}()`);

    // Creating grade
    let grade = document.createElement('span')
    grade.innerText = '1.00'
    grade.setAttribute('id', `grade${counter}`)

    // Creating add icon/buttom
    let add = document.createElement('button');
    add.innerText = 'add_circle';
    add.setAttribute('class', 'material-symbols-outlined');
    add.setAttribute('onclick', `add${counter}()`);
    
    // Inserting the elements to their parent
    if (counter <= 15) {
        addButton.style.cursor = 'default';
        removeButton.style.cursor = 'default';
        box.append(input);
        box.append(unit);
        box.append(remove);
        box.append(grade);
        box.append(add);
        container.append(box);
        counter++;
    } else {
        addButton.style.cursor = 'no-drop';
    }
}

function removeCourse() {
    const box = document.querySelector('#box' + --counter);
    if (counter > 2) {
        removeButton.style.cursor = 'default';
        addButton.style.cursor = 'default';
        box.remove();
    } else {
        removeButton.style.cursor = 'no-drop';
        counter++;
    }
}