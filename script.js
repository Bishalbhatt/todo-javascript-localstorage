const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item")
  createItem(item)
})


function displayItems(){
    let items = ""
    for(let i = 0; i < itemsArray.length; i++){
      items += `
                <br>
                <div class="item">
                  ${itemsArray[i]}
                  <button class="delete">Delete</button>
                  <button class="update">Update</button>
                </div>
                <br>
                `
    }
    document.querySelector(".to-do-list").innerHTML = items;
    activateDeleteListener();
    activateEditListener();
    // activateSaveListener();
    // activateCancelListener();
  }

function activateDeleteListener(){
  let deleteBtn=document.querySelectorAll(".delete");
  deleteBtn.forEach((db, i)=>{
    db.addEventListener("click",()=>{deleteItem(i)})
  })
}

function deleteItem(i){
  itemsArray.splice(i, 1);
  localStorage.setItem("items",JSON.stringify(itemsArray));
  location.reload();
}

function  activateEditListener(){
   const editBtn=document.querySelectorAll(".update");
   editBtn.forEach((eb,i)=>{
    eb.addEventListener("click", ()=>{editItem(i)} )
   })
}

function editItem(i){
    let editedTask=prompt("Enter the edited Task: ");
    itemsArray[i]=editedTask;
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}

function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
  }

  window.onload=function(){
    displayItems();
  }