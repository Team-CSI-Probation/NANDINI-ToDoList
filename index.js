
// tab-section
function opendiscription(evt, _tasks) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(_tasks).style.display = "block";
    evt.currentTarget.className += " active";
}


//   updating-list
const form1 = document.querySelector("#form");
const inputItem = document.querySelector("#form input");
const itemslist = document.querySelector("#itemslist");
const filters = document.querySelectorAll(".tablinks");


var todoitemss = [];
const handleitem = function (itemData) {
    const items = document.querySelectorAll(".group_item");
    items.forEach((item) => {
        // if (item.querySelector(".title").getAttribute("data-time") == itemData.addedAt) {
            // checking button
            item.querySelector("[data-done]").addEventListener("click", function (e) {
                e.preventDefault();
                const itemIndex = todoitemss.indexOf(itemData);
                const currentItem = todoitemss[itemIndex];
                const currentclass =  currentItem.isdone ? "filled":"updations";
                currentItem.isdone = "true";
                todoitemss.splice(itemIndex, 1, currentItem);
                setLocalStorage(todoitems);
                const iconClass = currentItem.isdone ? "filled":"updations";
                this.firstElementChild.classList.replace(currentclass,iconClass);
            });

            
    });
};


const getList = function (todoItems) {
    itemslist.innerHTML = "";
    if (todoitemss.length > 0) {
        todoitemss.forEach((item) => {
            const iconClass = item.isdone ? "filled":"updations";
            itemslist.insertAdjacentHTML("beforeend",
                `<li class="group_item">
            <span class="title" data-time="${item.addedAt}">${item.name}</span>
            <span>
                <a href="#" class=" ${iconClass}"data-done><img src="/Screenshot__22_-removebg-preview.png" alt=""></a>
                <a href="#"class="updations"data-edit>edit</a>
                <a href="#"class="updations" data-delete>delete</a>
            </span>
        </li>`
            );
            handleitem(item);
        });
    }
};
const setLocalStorage = function (todoitems) {
    localStorage.setItem("todoitems", JSON.stringify(todoitems));
};

const getlocalstorage = function () {
    const todostorage = localStorage.getItem("todoitems");
    if (todostorage == "undefined" || todostorage == "null") {
        todoitemss = [];
    }
    else {
        todoitemss = JSON.parse(todostorage);
    }
    console.log("items", todoitemss);
    getList(todoitemss);
}





document.addEventListener("DOMContentLoaded", () => {
    form1.addEventListener("submit", (e) => {
        e.preventDefault();
        const itemName = inputItem.value.trim();
        if (itemName.length == 0) {
            alert("Nothing has been added");
        }
        else {
            const itemobj = {
                name: itemName,
                isdone: false,
                addedAt: new Date().getTime()
            };
            todoitems.push(itemobj);
            console.log("hyy");
            setLocalStorage(todoitemss);
        }
    });
    getlocalstorage();
});

