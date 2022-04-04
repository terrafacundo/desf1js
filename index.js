let actividades = [
    {id:'1',actividad:'musculacion',calxhora:400},
    {id:'2',actividad:'crossfit',calxhora:600},
    {id:'3',actividad:'running',calxhora:450},
    {id:'4',actividad:'yoga',calxhora:150},
    {id:'5',actividad:'caminata',calxhora:500},
    {id:'6',actividad:'descanso', calxhora:0}
];

let contadorActividadKcal=[];

acumuladorKcal ();

function acumuladorKcal(){
    while (contadorActividadKcal.length<7){
    let actividadNueva= Number(prompt("Ingrese el ID de la actividad que acaba de realizar"));
    let ingresoAct = actividades.find((x)=>x.id==actividadNueva);
    contadorActividadKcal.push(ingresoAct);
    console.log("Usted acaba de realizar: ",contadorActividadKcal);
    actualizacionAct();
    }
}

function actualizacionAct(){
    console.log(`Este mes ha realizado ${contadorActividadKcal.length} actividades hasta el momento.`);
    let añadir = contadorActividadKcal.reduce((y,z)=> y+z.calxhora,0);
    console.log(`Este mes ha quemado ${añadir} calorias.`)
}