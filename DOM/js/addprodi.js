const form = document.querySelector('#prodi-form');
const search = document.querySelector('#search');
const remove = document.querySelector('#prodi');

form.addEventListener('submit', addProdi);
search.addEventListener('keyup', searchProdi);
remove.addEventListener('click', removeProdi);

function addProdi(event){
    event.preventDefault();
    const prodiName = document.querySelector('#prodi-name');
    const prodiAbbr = document.querySelector('#prodi-abbr');

    const li = document.createElement('li');
    li.className = 'list-item';
    li.appendChild(document.createTextNode(`${prodiName.value} / ${prodiAbbr.value}`));

    const a = document.createElement('a');
    a.className = 'delete';
    a.setAttribute('href', '#');
    a.appendChild(document.createTextNode(' | Delete'));
    li.appendChild(a);

    const ul = document.querySelector('#prodi');
    ul.appendChild(li);

    prodiName = '';
    prodiAbbr = '';

    //console.log(`${prodiName.value}, ${prodiAbbr.value}`);
}

function searchProdi(event){
    const searchText = event.target.value.toLowerCase();

    //apapun yang didapatkan dari dalam array masukan di allProdi
    const allProdi = [...document.querySelectorAll('li')];
    
    allProdi.forEach(prodi => {
        let prodiName = prodi.firstChild.textContent;

        if(prodiName.toLowerCase().indexOf(searchText) != -1){
            prodi.style.display = 'block';
        }else{
            prodi.style.display = 'none';
            //prodi.innerHTML = `${searchText}` + 'is not exist';
        }

    });
    
    console.log(allProdi);

}

function removeProdi(event){
    if(event.target.classList.contains("delete")) {
        const li = event.target.parentElement;
        prodi.removeChild(li);
      }
}
