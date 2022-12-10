const list = document.querySelector('#shoe-list ul');
const forms = document.forms;

// delete shoes
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});


const addForm = forms['add-shoe'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  // create elements

  const li = document.createElement('li');
  const shoeName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  shoeName.textContent = value;
  deleteBtn.textContent = 'delete';

  //add classes
  shoeName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(shoeName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  


});

  //hide books 
  const hideBox =document.querySelector('#hide');
  hideBox.addEventListener('change',function(e){
    if(hideBox.checked){
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  //filter book
  const searchBar = document.forms['search-shoe'].querySelector('input');
  searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const shoe = list.getElementsByTagName('li');
    Array.from(shoe).forEach(function(shoe){
      const title = shoe.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term)!= -1){
        shoe.style.display = 'block';
      } else {
        shoe.style.display = 'none';
      }
    });
  });