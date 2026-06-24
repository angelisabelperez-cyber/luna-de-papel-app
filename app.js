let materiales = [
    { nombre: "Acetato", existencias: 50, costoUnitario: 3.07 },
    { nombre: "Papel fotográfico adhesivo brillante", existencias: 100, costoUnitario: 3.58 },
    { nombre: "Opalina 225gr", existencias: 5, costoUnitario: 1.75 },
    { nombre: "Listón rojo", existencias: 91, costoUnitario: 1.07 },
    { nombre: "Vinil imprimible holográfico a4", existencias: 24, costoUnitario: 5.26 }
]

console.log(materiales)

let tbody = document.getElementById("tabla-inventario")

materiales.forEach(function(material) {
    let alertaBajo =material.existencias <20 ? "background-color: #FCEBEB;" : ""

    let fila = "<tr style='" + alertaBajo + "'>"
    fila += "<td>" + material.nombre + "</td>"
    fila += "<td>" + material.existencias + "</td>"
    fila += "<td>$" + material.costoUnitario + "</td>"
    fila += "</tr>"
    tbody.innerHTML += fila
})