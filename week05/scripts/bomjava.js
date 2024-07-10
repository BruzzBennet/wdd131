const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');
let chaptersArray = getChapterList() || [];
button.addEventListener("click", addchapter);

function addchapter() {
    if (input.value.trim() !== "") {
        displayList(input.value); 
        chaptersArray.push(input.value); 
        setChapterList(); 
        input.value = ''; 
        input.focus(); 
    }
    else {
        alert("Please insert a chapter");
        input.focus();
    }
};



chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

 function displayList(item){
        let li = document.createElement('li');
        let del = document.createElement('button');
        li.textContent = item;
        del.textContent = '❌';
        li.append(del);
        list.appendChild(li);
        del.addEventListener('click', function () {
            list.removeChild(li);
            deleteChapter(li.textContent);
            deleteChapter(del.textContent); 
            input.focus(); 
          });
        input.value = '';
        input.focus();
  }

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }

  getChapterList();