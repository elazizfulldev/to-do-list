document.getElementById("sub-login").addEventListener("click" , function(e){
    e.preventDefault();
    console.log("test button sub");

    const user = document.getElementById("user").value;
    const password = document.getElementById("pasword").value;
    if(user ==="admin" && password === "admin"){

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "dashboard.html";


    }else{
        alert("uers or passwor is not corecct !");
    }
});