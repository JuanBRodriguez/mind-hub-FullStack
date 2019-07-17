var orientacion = "";

window.addEventListener("orientationchange", () => {
   console.log(window.screen.orientation);
   orientacion = window.screen.orientation.type;

   if (orientacion == "landscape-primary") {
      console.log("horizontal");

   } else {
      console.log("vertical");

   }
});

$("button").click(function () {
   let nameclass = this.className;
   console.log(nameclass);

   // options info
   Visualizar(nameclass, "find-opt-cal","#drop-cal", "show" );//open calendar
   Visualizar(nameclass, "find-opt-tea","#drop-tea", "show" );//open calendar
   Visualizar(nameclass, "find-opt-loc","#drop-loc", "show" );//open calendar

 ///////////// calendar

   Visualizar(nameclass, "find-mes-sep","#drop-sep", "toggle" );//open september
   // fechas septiembre
   Visualizar(nameclass, "find-fecha-901","#drop-901", "toggle" ); //open 901
   Visualizar(nameclass, "find-fecha-908","#drop-908", "toggle" ); //open 908
   Visualizar(nameclass, "find-fecha-915","#drop-915", "toggle" ); //open 915
   Visualizar(nameclass, "find-fecha-922","#drop-922", "toggle" ); //open 922
   Visualizar(nameclass, "find-fecha-929","#drop-929", "toggle" ); //open 929

   // 
   Visualizar(nameclass, "find-mes-oct","#drop-oct", "toggle" ); //open october
   // fechas octubre
   Visualizar(nameclass, "find-fecha-1006","#drop-1006", "toggle" ); //open 1006
   Visualizar(nameclass, "find-fecha-1013","#drop-1013", "toggle" ); //open 1013
   Visualizar(nameclass, "find-fecha-1020","#drop-1020", "toggle" ); //open 1020
   Visualizar(nameclass, "find-fecha-1027","#drop-1027", "toggle" ); //open 1027

   // lanscape clone 
   // if (nameclass.includes("fecha")) { //open locations
   //    $(this).next(".collapse").appendTo("#inf-land");
   // }
});

$("a").click(function () {
   let nameclass = this.className;
   console.log(nameclass);

   // nav bar
   if (nameclass.includes("nav-item")) { //drop nav al seleccionar
      $("#dropnav").collapse('hide');
   }
   if (nameclass.includes("find-nav-hom")) { //open home
      $("#drop-hom").collapse('show');
   }
   if (nameclass.includes("find-nav-abo")) { //open about
      $("#drop-abo").collapse('show');
   }
   if (nameclass.includes("find-nav-inf")) { //open inf
      $("#drop-inf").collapse('show');
   }
   if (nameclass.includes("find-nav-rul")) { //open rul
      $("#drop-rul").collapse('show');
   }
   if (nameclass.includes("find-nav-con")) { //open con
      $("#drop-con").collapse('show');
   }

   // locations
   if (nameclass == "find-loc-aj") { //open aj katzenmaier
      $("#drop-loc").collapse('show');
      $("#dropaj").collapse('show');
   }
   if (nameclass == "find-loc-gre") { //open gre
      $("#drop-loc").collapse('show');
      $("#dropgre").collapse('show');
   }
   if (nameclass == "find-loc-mar") { //open mar
      $("#drop-loc").collapse('show');
      $("#dropmar").collapse('show');
   }
   if (nameclass == "find-loc-how") { //open how
      $("#drop-loc").collapse('show');
      $("#drophow").collapse('show');
   }
   if (nameclass == "find-loc-nor") { //open nor
      $("#drop-loc").collapse('show');
      $("#dropnor").collapse('show');
   }
   if (nameclass == "find-loc-sou") { //open sou
      $("#drop-loc").collapse('show');
      $("#dropsou").collapse('show');
   }
   // teams
   if (nameclass == "find-team-u1") { //open u1
      $("#drop-tea").collapse('show');
      $("#dropu1").collapse('show');
   }
   if (nameclass == "find-team-u2") { //open u2
      $("#drop-tea").collapse('show');
      $("#dropu2").collapse('show');
   }
   if (nameclass == "find-team-u3") { //open u3
      $("#drop-tea").collapse('show');
      $("#dropu3").collapse('show');
   }
   if (nameclass == "find-team-u4") { //open u4
      $("#drop-tea").collapse('show');
      $("#dropu4").collapse('show');
   }
   if (nameclass == "find-team-u5") { //open u5
      $("#drop-tea").collapse('show');
      $("#dropu5").collapse('show');
   }
   if (nameclass == "find-team-u6") { //open u6
      $("#drop-tea").collapse('show');
      $("#dropu6").collapse('show');
   }
});

function Visualizar(clases, buscado, controlado, accion){
   if (clases.includes(buscado)) {
      $(controlado).collapse(accion);
   }
}