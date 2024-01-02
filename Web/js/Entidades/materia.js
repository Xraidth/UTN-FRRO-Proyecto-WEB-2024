class Materia{
    constructor(nom, desc){
    this.nombre = nom;
    this.descripcion = desc;
    }
    getObjName(){
        return "Materias";
    }
}
const materias = [];
materias.push(
new Materia('Base de datos','Es una linda materia')
);