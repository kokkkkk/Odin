const container = document.querySelector('#container');

function createGrid(num){
    for(i = 0; i<num; i++){
        let div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }
}

function changeColor(grid){
    grid.classList.add('changeToBlue');
}

function changeGridNumber(){
    let num = prompt("Please enter your the number for grids");

    if (num != null) {
        container.innerHTML = "";
        container.setAttribute('style',`grid-template-columns: repeat(${num}, auto); grid-template-rows: repeat(${num}, auto);`)
        if(num>=0 && num <= 100){
            createGrid(num*num);
        }else if(num > 100){
            createGrid(100);
        }
        addListener();
    }
}

function addListener(){
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid=>grid.addEventListener('mouseover', function(){
        changeColor(grid);
    }));

    const button = document.querySelector('button');
    button.addEventListener('click',function(){
        changeGridNumber();
    });
}

let TotalNumOfGrid = 16*16;
createGrid(TotalNumOfGrid);
addListener();
