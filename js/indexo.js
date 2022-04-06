//array con el nombre de cada actividad y las calorias q implica
let actividades="";
let semana=[];

function init(){
    //bienvenida se encarga de preg nombre e imprimir en el html los datos de bienvenida
    bienvenida();
    //programa se encarga de calcular calorias x actividad x dia de semana
    programa();
    //con todos los datos anteriores imprime divs que detallan el progreso semanal.
    botones();

}

    function bienvenida(){
        let nombreUsuario = prompt("Inicia sesión con tu nombre de usuario: ");
        let saludo = document.createElement("h1");
        saludo.innerHTML=`<h1 class="bienvenida">Bienvenido de nuevo ${nombreUsuario}</h1> <h2>Tus Actividades</h2>`;
        document.body.append(saludo);
    }


    function programa(){
        const actividad1 = {actividad:"musculacion", calxhora:400};
        const actividad2 = {actividad:"crossfit", calxhora:600};
        const actividad3 = {actividad:"running", calxhora:450};
        const actividad4 = {actividad:"yoga", calxhora:150};
        const actividad5 = {actividad:"caminata", calxhora:500};
        const actividad6 = {actividad:"descanso", calxhora:0};

        actividades = [actividad1,actividad2,actividad3,actividad4,actividad5,actividad6];
        console.log(actividades);

        let dato="";
        //funciones
        for(let i=1;i<8;i++){
            //primero requerimos la actividad, y el numero de horas, parametros que van a entrar en la funcion MultiplicadoHoras declarada debajo de este bloque.

            let busqueda = prompt("Ingresa la actividad que acabas de hacer").toLowerCase();
            let horas = Number(prompt("Ingresa cuantas horas entrenaste"));

            // inicio una busqueda en el array para hacerme de ese elemento completo y poder ejecutar la operacion.
            let sumaAct = actividades.find((x)=> x.actividad==busqueda);

            sumaAct.calxhora = multiplicadorHoras(sumaAct.calxhora,horas);

            //meto como parametro (la cant de cal que requiere esa actividad en especifica, citada desde el array. Y la cant de horas solicitad al usuario.)
            semana.push(sumaAct);
        }




        //llamo a la funcion que encarga de analizar el array "semana" que recoje todas las actividades y arroja el valor calorico total.
        actualizacionAct();

        function multiplicadorHoras(a,b) {
            return a*b;
        }

        function actualizacionAct(){
            console.log(`Este mes ha realizado ${semana.length} actividades hasta el momento.`);
            let conteo = semana.reduce((y,z)=> y+z.calxhora,0);
            console.log(`Este mes ha quemado ${conteo} calorias.`)
            console.log(conteo);
        }
        console.log(semana);
    }


    function botones() {
        console.log(actividades)
        for (x of semana){
            let actividad= document.createElement('div');
            actividad.setAttribute("class","marcadores")
            actividad.innerHTML +=`<h3>Actividad: ${x.actividad}, Calorías quemadas: ${x.calxhora}</h3>.`;
            document.body.append(actividad);
        }
    }
