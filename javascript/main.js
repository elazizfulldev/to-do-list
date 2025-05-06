
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
}

document.getElementById("submit-button").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("test");

    /*===== get the value of all elments =======*/

    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    /*====== creat a object =======*/

    const todoitem = { name, comment, date, status };

    /*======== creat a local storage for stocage ==========*/

    let todos = JSON.parse(localStorage.getItem("todolist")) || [];

    /*===== add values in localstorage =========*/
    todos.push(todoitem);
    localStorage.setItem("todolist", JSON.stringify(todos));


    /*===== clear the form ======*/

    document.getElementById("myform").reset();
    alert("To-do added successfully!");

});