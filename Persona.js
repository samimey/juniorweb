var selectedRow=null;
class Persona{
    constructor(id,nombre,email,pwd,roles){
        this.id=id;
        this.nombre=nombre;
        this.email=email;
        this.pwd=pwd;
        this.roles=roles;
    }
    
    creaObjeto(){
        var form=this.readObjeto();
        if(selectedRow==null)
            this.leaObjeto();
            else
            this.update(form);
        this.clear();
        
    }


    readObjeto(){
        var form={};
        const idH=form["id"] =document.getElementById("cc").value;
        const nombres =form["nombre"]= document.getElementById("nombre").value;
        const email =form["email"]= document.getElementById("email").value;
        const contraseña = form["contraseña"]=document.getElementById("pwd").value;
        const rol =form["rol"] =document.getElementById("roles").value;
        
        persona.id=idH;
        persona.nombre=nombres;
        persona.email=email;
        persona.pwd=contraseña;
        persona.roles=rol;
        return form;
    }
    leaObjeto(){
        document.getElementById("tables").innerHTML += "<tr><td>" +persona.id + "</td><td>" + persona.nombre + "</td><td>" + persona.email + "</td><td>" + persona.pwd + "</td><td>" + persona.roles + "</td><td>" + '<button onclick="edit(this)" class="btn btn-warning btn-sm edit">edit</button> <button onclick="delet(this)" class="btn btn-danger btn-sm delete"> elim</button>' + "</td></tr>";
        persona.clear();
    }
    clear(){
        document.getElementById("cc").value="";
        document.getElementById("nombre").value="";
        document.getElementById("email").value="";
        document.getElementById("pwd").value="";
        document.getElementById("roles").value="";
        
    }
    
    update(form){
        selectedRow.cells[0].innerHTML=form.id;
        selectedRow.cells[1].innerHTML=form.nombre;
        selectedRow.cells[2].innerHTML=form.email;
        selectedRow.cells[3].innerHTML=form.contraseña;
        selectedRow.cells[4].innerHTML=form.rol;
    
    }
    
    
    
    
    
    
}
