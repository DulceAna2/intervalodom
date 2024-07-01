
function Lugares() {
    let primero = document.getElementById("A").value
    let segundo = document.getElementById("B").value
    if (isNaN(primero) || primero === "" || isNaN(segundo) || segundo === "") {//Verificar que sean numeros
        alert("Ingrese Numeros")
    } else {

        primero = +document.getElementById("A").value
        segundo = +document.getElementById("B").value
        //Cambiar valores de A y B
        if (primero > segundo) {
            let aux = segundo
            segundo = primero
            primero = aux
        }
        //Crear intervalo
        let tabla = document.getElementById("tabla")
        for (let cont = primero + 1; cont < segundo; cont++) {
            //TABLA
            let tr = document.createElement("tr")
            tabla.append(tr)
            let td = document.createElement("td")
            td.innerHTML = cont
            td.classList.add("centro")
            tr.append(td)
            //Agregar color a las celdas
            if (cont % 2 == 0) {
                td.classList.add("par")
            }
            else {
                td.classList.add("impar")
            }
        }
    }
}
function Eliminar() {
    let borrar = document.querySelectorAll("tr")
    let confirmacion=confirm("¿Desea eliminar la tabla?")
    if(confirmacion){
        for (let cont = 0; cont < borrar.length; cont++) {
            borrar[cont].remove()
        }
         //LIMPIAR
    document.getElementById("A").value = ""
    document.getElementById("B").value = ""
    }
   else{
alert("El documento sigue igual")
   }   
}