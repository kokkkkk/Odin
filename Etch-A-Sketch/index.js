const container = document.querySelector('#container');
container.setAttribute
('style',
    'display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); padding: 10px;'
)

const TotalNumOfGrid = 16*16;

for(i = 0; i<TotalNumOfGrid; i++){
    let div = document.createElement('div');
    div.setAttribute
    ('style', 
        'border-style: solid; padding: 20px;'
    ); 
    
    container.appendChild(div);
}
