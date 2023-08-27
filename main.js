
const searchBar=document.getElementById('searchBar');
const searchBtn=document.getElementById('searchBtn');
const insertBar=document.getElementById('insertBar');
const insertBtn=document.getElementById('insertBtn');

let listItems=[];

// get the parent div element where the list items must be added
const boxes=document.getElementById('boxes');

// insert itemNode

insertBtn.addEventListener('click',insertItems);

function insertItems() {
    const item=insertBar.value;
    if(item.length===0)
    return;

    const itemNode=document.createElement("div");
    itemNode.setAttribute("class","itemBox container-fluid");
    itemNode.innerHTML=`${listItems.length+1} .${item}`;
    const closeButton=document.createElement("i");
    // closeButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    closeButton.setAttribute("class","fa fa-lg fa-solid fa-trash float-right pt-3");
    closeButton.addEventListener('click',removeItems);
    itemNode.append(closeButton);
    boxes.append(itemNode);
    listItems.push(itemNode);
    insertBar.value="";
    insertBar.focus();
}

// search ItemNode

searchBtn.addEventListener('click',searchItems);

function searchItems() {
    const searchItem=searchBar.value;
    let newListItems=listItems;
    
    newListItems=newListItems.map(item => {
        const itemVal=item.innerText;
        console.log(itemVal);
       if(itemVal.includes(searchItem))
        return item;
    })

    const children=Array.from(boxes.children);

    children.forEach(item => item.style.display="none");

    newListItems.forEach(item => {
        if(item!=undefined) {
        item.style.display="block";
        console.log(item.innerHTML);
        console.log(searchItem);
        boxes.append(item);
        }
    })
}


function removeItems(event) {
    const node=event.target.parentElement;
    boxes.removeChild(node);
    listItems=Array.from(boxes.children).sort();
}
