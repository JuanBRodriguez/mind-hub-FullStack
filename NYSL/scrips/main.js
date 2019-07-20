var orientacion = "";
orientacion = window.screen.orientation.type;
console.log(orientacion);

window.addEventListener("orientationchange", () => {
   console.log(window.screen.orientation);
   orientacion = window.screen.orientation.type;
   console.log(orientacion);
   if (orientacion == "landscape-primary") {
      console.log("horizontal");
   } else {
      console.log("vertical");
   }
});

$("button").click(function () {
   let nameclass = this.className;
   console.log(nameclass);
   if (orientacion == "landscape-primary") {
      $("#drop-game").collapse('show'); //mantiene cualquier informacion anterior
   } else {
      $("#drop-game").collapse('hide'); //cierra cualquier informacion anterior
   }

   // options info
   visualizarDoble(nameclass, "find-opt-cal", "#drop-cont", "show", "#drop-cal", "show"); //open calendar
   visualizarDoble(nameclass, "find-opt-tea", "#drop-cont", "show", "#drop-tea", "show"); //open calendar
   visualizarDoble(nameclass, "find-opt-loc", "#drop-cont", "show", "#drop-loc", "show"); //open calendar


   //calendar

   visualizar(nameclass, "find-mes-sep", "#drop-sep", "toggle"); //open september
   // fechas septiembre
   visualizar(nameclass, "find-fecha-901", "#drop-901", "toggle"); //open 901
   visualizar(nameclass, "find-fecha-908", "#drop-908", "toggle"); //open 908
   visualizar(nameclass, "find-fecha-915", "#drop-915", "toggle"); //open 915
   visualizar(nameclass, "find-fecha-922", "#drop-922", "toggle"); //open 922
   visualizar(nameclass, "find-fecha-929", "#drop-929", "toggle"); //open 929

   visualizar(nameclass, "find-mes-oct", "#drop-oct", "toggle"); //open october
   // fechas octubre
   visualizar(nameclass, "find-fecha-1006", "#drop-1006", "toggle"); //open 10/06
   visualizar(nameclass, "find-fecha-1013", "#drop-1013", "toggle"); //open 10/13
   visualizar(nameclass, "find-fecha-1020", "#drop-1020", "toggle"); //open 10/20
   visualizar(nameclass, "find-fecha-1027", "#drop-1027", "toggle"); //open 10/27

   // Partidos
   if (orientacion == "landscape-primary") {
      // septiembre
      visualizarGames(nameclass, "find-part-914", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-914", "show"); //open 9 u1 u4
      visualizarGames(nameclass, "find-part-932", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-932", "show"); //open 932

      visualizarGames(nameclass, "find-part-956", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-956", "show"); //open 956
      visualizarGames(nameclass, "find-part-961", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-961", "show"); //open 961

      visualizarGames(nameclass, "find-part-924", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-924", "show"); //open 924
      visualizarGames(nameclass, "find-part-935", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-935", "show"); //open 935

      visualizarGames(nameclass, "find-part-913", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-913", "show"); //open 913
      visualizarGames(nameclass, "find-part-926", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-926", "show"); //open 926

      visualizarGames(nameclass, "find-part-945", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-932", "show"); //open 945

      // octubre
      visualizarGames(nameclass, "find-part-1025", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-1025", "show"); //open 1025
      visualizarGames(nameclass, "find-part-1016", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-1016", "show"); //open 1016

      visualizarGames(nameclass, "find-part-1034", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-1034", "show"); //open 1034
      visualizarGames(nameclass, "find-part-1051", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-1051", "show"); //open 1051

      visualizarGames(nameclass, "find-part-1063", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-1063", "show"); //open 1063
      visualizarGames(nameclass, "find-part-1024", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-1024", "show"); //open 1024

      visualizarGames(nameclass, "find-part-1031", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-1031", "show"); //open 1031
      visualizarGames(nameclass, "find-part-1056", "#drop-cont", "show", "#partidos", "show", "#drop-game", "show", "#drop-1056", "show"); //open 1056
   } else {
      // septiembre
      visualizarGames(nameclass, "find-part-914", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-914", "show"); //open 9 u1 u4
      visualizarGames(nameclass, "find-part-932", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-932", "show"); //open 932

      visualizarGames(nameclass, "find-part-956", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-956", "show"); //open 956
      visualizarGames(nameclass, "find-part-961", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-961", "show"); //open 961

      visualizarGames(nameclass, "find-part-924", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-924", "show"); //open 924
      visualizarGames(nameclass, "find-part-935", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-935", "show"); //open 935

      visualizarGames(nameclass, "find-part-913", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-913", "show"); //open 913
      visualizarGames(nameclass, "find-part-926", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-926", "show"); //open 926

      visualizarGames(nameclass, "find-part-945", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-932", "show"); //open 945

      // octubre
      visualizarGames(nameclass, "find-part-1025", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-1025", "show"); //open 1025
      visualizarGames(nameclass, "find-part-1016", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-1016", "show"); //open 1016

      visualizarGames(nameclass, "find-part-1034", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-1034", "show"); //open 1034
      visualizarGames(nameclass, "find-part-1051", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-1051", "show"); //open 1051

      visualizarGames(nameclass, "find-part-1063", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-1063", "show"); //open 1063
      visualizarGames(nameclass, "find-part-1024", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-1024", "show"); //open 1024

      visualizarGames(nameclass, "find-part-1031", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-1031", "show"); //open 1031
      visualizarGames(nameclass, "find-part-1056", "#drop-cont", "hide", "#partidos", "show", "#drop-game", "show", "#drop-1056", "show"); //open 1056
   }

   // Localizaciones
   if (orientacion == "landscape-primary") {
      visualizarGames(nameclass, "find-loc-aj", "#drop-cont", "show", "#estadios", "show", "#drop-game", "show", "#drop-aj", "show"); //open aj
      visualizarGames(nameclass, "find-loc-gre", "#drop-cont", "show", "#estadios", "show", "#drop-game", "show", "#drop-gre", "show"); //open gre
      visualizarGames(nameclass, "find-loc-mar", "#drop-cont", "show", "#estadios", "show", "#drop-game", "show", "#drop-mar", "show"); //open mar
      visualizarGames(nameclass, "find-loc-how", "#drop-cont", "show", "#estadios", "show", "#drop-game", "show", "#drop-how", "show"); //open how
      visualizarGames(nameclass, "find-loc-nor", "#drop-cont", "show", "#estadios", "show", "#drop-game", "show", "#drop-nor", "show"); //open nor
      visualizarGames(nameclass, "find-loc-sou", "#drop-cont", "show", "#estadios", "show", "#drop-game", "show", "#drop-sou", "show"); //open sou
   } else {
      visualizarGames(nameclass, "find-loc-aj", "#drop-cont", "hide", "#estadios", "show", "#drop-game", "show", "#drop-aj", "show"); //open aj
      visualizarGames(nameclass, "find-loc-gre", "#drop-cont", "hide", "#estadios", "show", "#drop-game", "show", "#drop-gre", "show"); //open gre
      visualizarGames(nameclass, "find-loc-mar", "#drop-cont", "hide", "#estadios", "show", "#drop-game", "show", "#drop-mar", "show"); //open mar
      visualizarGames(nameclass, "find-loc-how", "#drop-cont", "hide", "#estadios", "show", "#drop-game", "show", "#drop-how", "show"); //open how
      visualizarGames(nameclass, "find-loc-nor", "#drop-cont", "hide", "#estadios", "show", "#drop-game", "show", "#drop-nor", "show"); //open nor
      visualizarGames(nameclass, "find-loc-sou", "#drop-cont", "hide", "#estadios", "show", "#drop-game", "show", "#drop-sou", "show"); //open sou
   }

   // teams
   visualizar(nameclass, "find-team-u1", "#drop-u1", "toggle"); //open u1
   visualizar(nameclass, "find-team-u2", "#drop-u2", "toggle"); //open u2
   visualizar(nameclass, "find-team-u3", "#drop-u3", "toggle"); //open u3
   visualizar(nameclass, "find-team-u4", "#drop-u4", "toggle"); //open u4
   visualizar(nameclass, "find-team-u5", "#drop-u5", "toggle"); //open u5
   visualizar(nameclass, "find-team-u6", "#drop-u6", "toggle"); //open u6

});

$("a").click(function () {
   let nameclass = this.className;
   console.log(nameclass);
   $("#drop-game").collapse('hide'); //cierra cualquier informacion anterior

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
      $("#drop-cont").collapse('show');
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

function visualizar(clases, buscado, controlado, accion) {
   if (clases.includes(buscado)) {
      $(controlado).collapse(accion);
   }
}

function visualizarDoble(clases, buscado, controlado, accion, controlado2, accion2) {
   if (clases.includes(buscado)) {
      $(controlado).collapse(accion);
      $(controlado2).collapse(accion2);
   }
}

function visualizarGames(clases, buscado, controlado, accion, controlado2, accion2, controlado3, accion3, controlado4, accion4) {
   if (clases.includes(buscado)) {
      $(controlado).collapse(accion);
      $(controlado2).collapse(accion2);
      $(controlado3).collapse(accion3);
      $(controlado4).collapse(accion4);
   }
}
function visualizarTriple(clases, buscado, controlado, accion, controlado2, accion2, controlado3, accion3) {
   if (clases.includes(buscado)) {
      $(controlado).collapse(accion);
      $(controlado2).collapse(accion2);
      $(controlado3).collapse(accion3);
   }
}