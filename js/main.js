let elList = document.querySelector('.js-card-list');
// let elCardwrapper = document.querySelectorAll('.card-wrapper');

// const localData = JSON.parse(window.localStorage.getItem('book'));
// let books = localData ? localData : [];



const renderBook = (array, node) => {
    // window.localStorage.setItem('book', JSON.stringify(books));
    node.innerHTML='';

    array.forEach(item => {
        
          const newItem = document.createElement('div');
          newItem.setAttribute('class', 'card p-0');
          newItem.id=item.id;

          newItem.innerHTML=`
            <img class="pe-none" style="border-radius: 5px 5px 0 0 ;" src="../images/${item.imageLink}" alt="img" width="215" height="300">
            <div class="card-info px-1 pt-2 pe-none">
              <h2 class="fs-5 text-center mt-2 p-0 mb-0 text-white card-title pe-none">${item.title}</h2>
              <strong class="fs-6 m-0 d-block mb-3 text-center text-success pe-none">${item.author}</strong>
            </div>
          `
          node.appendChild(newItem);
    });

}

renderBook(books, elList)


// search
// const elSearch = document.querySelector('#search');
// const elSearchForm = document.querySelector('#search-form')

// elSearch.addEventListener("focus", (evt) => {
//   elSearchForm.classList.remove('w-25');
//   elSearchForm.classList.add('w-75')
// });
// elSearch.addEventListener("blur", (evt) => {
//   if (evt.target.value.trim().length === 0) {

//     elSearchForm.classList.remove('w-75');
//     elSearchForm.classList.add('w-25')
//     evt.target.value = "";
//   }
//   else{
//     elSearchForm.classList.remove('w-25');
//     elSearchForm.classList.add('w-75')
//   }
// });

elList.addEventListener('click', (evt)=>{
  console.log(evt.target);
})