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

window.addEventListener("load", () =>{
    const form = document.querySelector("#form");
    const input = document.querySelector("#user");
    const list_el = document.querySelector(".lists");
    
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        const task = input.value;
        if(!task){
            alert("Please fill out the task");
            return;
        }
        
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerHTML = task;
        task_el.appendChild(task_content_el);
        // const task_input_el = document.createElement("input");
        list_el.appendChild(task_el); 
    })
})