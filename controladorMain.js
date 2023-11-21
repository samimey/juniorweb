const persona = new Persona();

function crearObjeto(){
    persona.creaObjeto();
    
}
function edit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("cc").value=selectedRow.cells[0].innerHTML;
    document.getElementById("nombre").value=selectedRow.cells[1].innerHTML;
    document.getElementById("email").value=selectedRow.cells[2].innerHTML;
    document.getElementById("pwd").value=selectedRow.cells[3].innerHTML;
    document.getElementById("roles").value=selectedRow.cells[4].innerHTML;

}
function delet(td){
    if(confirm('seguro quiere eliminar')){
        row=td.parentElement.parentElement;
        document.getElementById("tables").deleteRow(row.rowIndex);
        persona.clear();
    }
}