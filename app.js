const btnlike = document.getElementById("btnlike");
const number = document.getElementById("number");
btnlike.addEventListener('click', function () {
    number.textContent = "201 ";
    this.style.fontWeight = "bold";
    /*document.getElementById("btnlike").classList.toggle("btn1 col-2 rounded");  
    document.getElementById("btnlike").classList.toggle("btn2 col-2 rounded");
    const className = document.getElementById("btnlike").className;
    if (className == "btn2 col-2 rounded") {
        number.textContent = "201";
    } else {
        number.textContent = "200";
    } */
    //Lo quise hacer de otra forma pero no me funcionó, supongo debe ser por la cantidad de clases. Anteriormente lo había hecho con una sola y css puro.
});
const follow = document.getElementById("follow");
follow.addEventListener('click', function () {

    changeText();
});
function changeText() {
    var text = follow.innerHTML;
    if (text === "Seguir") {
        follow.textContent = "Dejar de seguir";
        
    } else {
        follow.textContent = "Seguir";
    }
}
const btncomment = document.getElementById("btncomment");
const error = document.getElementById("error");
btncomment.addEventListener('click', function(event) {
    event.preventDefault();
    const txt = document.getElementById("user").value;
    const txtc = document.getElementById("comment").value;
    const cuser = document.getElementById("cuser");
    const ctxt = document.getElementById("ctxt");
    if (txt === "") {

        error.textContent = "Ingresá un usuario"
    }
    else {
        if (txtc === "") {

            error.textContent = "Ingresá un comentario"
        }
        else {
            error.textContent = ""
            cuser.textContent = txt;
            ctxt.textContent = txtc;

        }
    }
});
