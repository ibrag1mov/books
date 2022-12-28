let elList = document.querySelector('.js-card-list');


const localData = JSON.parse(window.localStorage.getItem('book'));
let NewBook = localData ? localData : [];



const renderBook = (array, node) => {
    window.localStorage.setItem('book', JSON.stringify(NewBook));
    node.innerHTML='';

    array.forEach(item => {
        
          const newItem = document.createElement('div');
          newItem.setAttribute('class', 'card p-0');
          newItem.id=item.id;

          newItem.innerHTML=`
            <span class="year">${item.year}</span>
            <img class="pe-none" style="border-radius: 5px 5px 0 0 ;" src="../images/${item.imageLink}" alt="img" width="215" height="300">
            <div class="card-info px-1 pt-2 pe-none">
              <h2 class="fs-5 text-center mt-2 p-0 mb-0 text-white card-title pe-none">${item.title}</h2>
              <strong class="fs-6 m-0 d-block mb-1 text-center text-success pe-none">${item.author}</strong>
              <p class="fs-6 p-0 mb-3 text-center text-secondary">Lang &raquo ${item.language}</p>
            </div>
          `
          node.appendChild(newItem);
    });

}

renderBook(books, elList)


// search
const elSearch = document.querySelector('#search');
const elSearchForm = document.querySelector('#search-form')
const elCarusel = document.querySelector('.carusel');
const elChoose = document.querySelector('.choose');
const elResult = document.querySelector('.res');
const elResName = document.querySelector('.el-name');
const elResValue = document.querySelector('.el-value');

elSearch.addEventListener("input", (evt) => {
  evt.preventDefault();

  window.localStorage.setItem('search', JSON.stringify(elSearch.value))
  elList.innerHTML=''
  let elInputValue=JSON.parse(window.localStorage.getItem('search')).toLocaleLowerCase();

  books.forEach((el)=>{
            if(el.title.toLocaleLowerCase().includes(elInputValue)){
                NewBook.push(el)
            }
        });
        renderBook(NewBook, elList)
        NewBook=[]

        elSearch.value=JSON.parse(window.localStorage.getItem('search'));

  if(JSON.parse(window.localStorage.getItem('search')).length !== 0){
    elCarusel.classList.remove('d-block');
    elCarusel.classList.add('d-none');
    elChoose.classList.remove('d-block');
    elChoose.classList.add('d-none');
    elResult.classList.remove('d-none')
    elResult.classList.add('d-block')
    elResName.textContent="Search";
    elResValue.textContent = elSearch.value;
  }
  if(JSON.parse(window.localStorage.getItem('search')).length === 0){
    elCarusel.classList.remove('d-none');
    elCarusel.classList.add('d-block');
    elChoose.classList.remove('d-none');
    elChoose.classList.add('d-block');
    elResult.classList.remove('d-block')
    elResult.classList.add('d-none')
    elResName.textContent="";
    elResValue.textContent = "";
  }
});
elSearch.value=JSON.parse(window.localStorage.getItem('search'));

if(JSON.parse(window.localStorage.getItem('search')).length !== 0){
  elCarusel.classList.remove('d-block');
  elCarusel.classList.add('d-none');
  elChoose.classList.remove('d-block');
  elChoose.classList.add('d-none');
  elResult.classList.remove('d-none')
  elResult.classList.add('d-block')
  elResName.textContent="Search";
  elResValue.textContent = JSON.parse(window.localStorage.getItem('search'));
}
if(JSON.parse(window.localStorage.getItem('search')).length === 0){
  elCarusel.classList.remove('d-none');
  elCarusel.classList.add('d-block');
  elChoose.classList.remove('d-none');
  elChoose.classList.add('d-block');
  elResult.classList.remove('d-block')
  elResult.classList.add('d-none')

}


// sort

let elSelectSortName=document.querySelector('#sort-name');


elSelectSortName.addEventListener('change',(evt)=>{
  window.localStorage.setItem('sortName', JSON.stringify(elSelectSortName.value))
  let newSortName = JSON.parse(window.localStorage.getItem('sortName'));

    let elSelectSortNameVal=newSortName;

    elResult.classList.remove('d-none')
    elResult.classList.add('d-block')
    elResName.textContent="Sort by Name";
    
    if(elSelectSortNameVal != "name"){
        if(elSelectSortNameVal == "A-Z"){
            const bookSort = books.sort((a, b)=> a.title.charCodeAt(0)-b.title.charCodeAt(0));
            renderBook(bookSort, elList)

            elResValue.textContent = elSelectSortNameVal;
            evt.preventDefault();
        }
        else if(elSelectSortNameVal == "Z-A"){
            const bookSort = books.sort((a, b)=> b.title.charCodeAt(0)-a.title.charCodeAt(0));
            renderBook(bookSort, elList)
            elResValue.textContent = elSelectSortNameVal;
            evt.preventDefault();
        }
    }
    else{
       const bookSort = books.sort((a, b)=> a.id-b.id);
       renderBook(bookSort, elList)
       elResValue.textContent = "Sort by Name";
       evt.preventDefault();
    }
    
})

elSelectSortName.value = JSON.parse(window.localStorage.getItem('sortName'));

let elSelectSortNameVal=elSelectSortName.value;

elResult.classList.remove('d-none')
elResult.classList.add('d-block')
elResName.textContent="Sort by Name";
 
if(elSelectSortNameVal != "name"){
  if(elSelectSortNameVal == "A-Z"){
      const bookSort = books.sort((a, b)=> a.title.charCodeAt(0)-b.title.charCodeAt(0));
      renderBook(bookSort, elList)
      elResValue.textContent = elSelectSortNameVal;
      evt.preventDefault();
  }
  else if(elSelectSortNameVal == "Z-A"){
      const bookSort = books.sort((a, b)=> b.title.charCodeAt(0)-a.title.charCodeAt(0));
      renderBook(bookSort, elList)
      elResValue.textContent = elSelectSortNameVal;

      evt.preventDefault();
  }
}
else{
 const bookSort = books.sort((a, b)=> a.id-b.id);
 renderBook(bookSort, elList)
 elResValue.textContent = "Sort by Name";
 evt.preventDefault();
}


// click more...

elList.addEventListener('click', (evt)=>{
  console.log(evt.target);
})