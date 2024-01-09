class Materia{
    constructor(nom, desc){
    this.nombre = nom;
    this.descripcion = desc;
    }
    getObjName(){
        return "Materias";
    }
}


const apiUrlMateria = '/Materias.json';

function altaMateria(mat){
    fetch(apiUrlMateria,{
        method:'POST',
        headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify(mat)
    }).then(response => response.json())
    .then(data => {console.log('Respuesta POST:', data);})
    .catch(error => console.error('Error en POST:', error))
}

async function getAllMaterias(){
    const json = await fetch(apiUrlMateria)
    .then(response => response.json())
    let aux = json.map(
        x => new Materia(
        x.nombre, 
        x.descripcion,
        ));
    return aux;
    
}

function getOneMateria (id){
    fetch(apiUrlMateria+ "?nombre=" + id)
    .then(response => response.json())
    .then(data => console.log('Respuesta GET (one):', data))
    .catch(error => console.error('Error en GET(one):', error));
}


function updateMateria(mat, id){
    fetch(apiUrlMateria+ "?nombre=" + id,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mat),
      })
        .then(response => response.json())
        .then(data => console.log('Respuesta PUT:', data))
        .catch(error => console.error('Error en PUT:', error));
    }

    function deleteMateria(id){
        
        fetch(apiUrlMateria+ "?nombre=" + id,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(data => console.log('Respuesta DELETE:', data))
        .catch(error => console.error('Error en DELETE:', error));
        
    }