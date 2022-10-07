let resultado = document.getElementById("resultado")
let historial = document.getElementById("historial")
const backup=[]

const boton=(value)=>{
resultado.value += value;
}

const limpiar =()=>{
    resultado.value="";
}

const resect =()=>{
    resultado.value="";
    historial.value="";
    for (let index = 0; index < backup.length; index++) {
        backup.splice(index);
    }
}
// 
const respuesta=()=>{
    let resul = eval(resultado.value)
    if (resul === undefined){
        alert("No se encuetra nada digitado")
        return;
    }else{
    backup.push(`${resultado.value} = ${resul}`);
    let data =''
    backup.map(item => {
        data = data+item+"\n"
    });
    historial.value = data
    resultado.value = resul
   }
}