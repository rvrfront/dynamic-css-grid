function parseHex(val) {
    switch (val) {
        case 0:
            return "0";
        case 1:
            return "1";
        case 2:
            return "2";
        case 3:
            return "3";
        case 4:
            return "4";
        case 5:
            return "5";
        case 6: 
            return "6";
        case 7: 
            return "7";
        case 8:
            return "8";
        case 9: 
            return "9";
        case 10:
            return "A";
        case 11:
            return "B";
        case 12: 
            return "C";
        case 13:
            return "D";
        case 14:
            return "E";
        case 15: 
            return "F";
        default:
            return "0";

    }
}

function genRandomColor() {
    const color = ["#"];
    for (let i = 1; i <= 6; i++) {
        const term = Math.trunc(Math.random() * 16);
        const termHex = parseHex(term);
        color.push(termHex);
    }
    const result = color.join('');
    console.log('random color: ', result);
    return result;
}

function genTemplate(value){
    const result = [];
    for (let i = 1; i <= value; i++){
        result.push('1fr');
    }
    return result.join(",");
}

function addChildren(rows, columns, template){
    const total = rows * columns;
    let counter = 0;
    for (let i = 1; i <= total; i++){
        const article = document.createElement("article");
        article.classList.add(`item-${counter}`);
        template.appendChild(article);
        counter += 1;
    }
}


function genRandomGrid(){
    let gridHtml = document.querySelector(".container__portfolio");
    let rows = Math.trunc(Math.random() * 9) + 3;
    let columns = Math.trunc(Math.random() * 8) + 2;
    console.log('row rows: ', rows);
    console.log('row columns: ', columns);
    console.log('children before remove childre: ', gridHtml.children);

    //Parte de codigo responsable de eliminar hijos anteriores
/*     console.log('numero de hijos: ', gridHtml.children.length);
    let counterRemovedChildren = 0;
    while(gridHtml.firstChild) {
        console.log('firstChild: ', gridHtml.lastChild);
        gridHtml.removeChild(gridHtml.lastChild);
        counterRemovedChildren += 1;
    }
    console.log('removedChildren: ', counterRemovedChildren);

    gridHtml = document.querySelector(".container__portfolio");
    console.log('children after removing children: ' ,gridHtml.children);
    console.log('rows: ', rows - 1);
    console.log('columns: ', columns - 1);

    gridHtml = document.querySelector(".container__portfolio"); */

    //
    gridHtml.style.gridTemplateRows = genTemplate(rows - 1);
    gridHtml.style.gridTemplateColumns = genTemplate(columns - 1);
    gridHtml.style.gridGap = "10px";
    gridHtml.style.opacity = "0.7";
    let childrenCounter = 0;
    addChildren(rows - 1, columns - 1, gridHtml);
    for (let row = 1; row < rows; row++){
        for (let column = 1; column < columns; column++) {
            console.log('childrenCounter: ', childrenCounter);
            console.log('row: ', row);
            console.log('column: ', column);
            const children = document.querySelector(`.item-${childrenCounter}`);
            //Adds a p with the background color
            const pColorCode = document.createElement("p");
            pColorCode.style.textAlign = "center";
            pColorCode.style.color ="white";
            const tempRandomColor = genRandomColor();
            pColorCode.textContent = tempRandomColor;
            children.appendChild(pColorCode);
            //
            children.style.gridRowStart = row.toString();
            children.style.gridRowEnd = (row + 1).toString();
            children.style.gridColumnStart = column.toString();
            children.style.gridColumnEnd = (column + 1).toString();
            gridHtml.children.item(childrenCounter).style.backgroundColor = tempRandomColor;
            console.log(gridHtml.children.item(childrenCounter).style);
            console.log(gridHtml.children);
            childrenCounter += 1;
        }
    }
    
}


document.addEventListener("DOMContentLoaded", genRandomGrid);
genRandomColor();
genTemplate(5);