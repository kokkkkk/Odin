const container = document.querySelector('#container');

const TotalNumOfGrid = 16*16;

for(i = 0; i<TotalNumOfGrid; i++){
    let div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
}

function changeColor(grid){
    grid.classList.add('changeToBlue');
    console.log("change");
}

function addListener(){
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid=>grid.addEventListener('mouseover', function(){
        changeColor(grid);
    }));
}

addListener();
