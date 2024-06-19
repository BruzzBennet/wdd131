const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');


button.addEventListener("click", addchapter);

function addchapter() {
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = input.value;
        const del = document.createElement('button');
        del.textContent = '❌';
        li.append(del);
            del.addEventListener("click", dech);
            function dech() {
                list.removeChild(li);
                input.focus();
            };
        list.appendChild(li);
        input.value = '';
        input.focus();
    }
    else {
        alert("Please insert a chapter");
        input.focus();
    }
};

