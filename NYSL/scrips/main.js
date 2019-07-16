var orientacion="";

window.addEventListener("orientationchange", ()=> {
   console.log(window.screen.orientation);
   orientacion=window.screen.orientation.type;

   if (orientacion=="landscape-primary") {
      console.log("horizontal");

   }else{
      console.log("vertical");

   }
});



$("button").click(function () {
   let nameclass = this.className;
   console.log(nameclass);

   // options info
   if (nameclass.includes("find-opt-cal")) { //open calendar
      $("#drop-cal").collapse('show');
   }
   if (nameclass.includes("find-opt-tea")) { //open teams
      $("#drop-tea").collapse('show');
   }
   if (nameclass.includes("find-opt-loc")) { //open locations
      $("#drop-loc").collapse('show');
   }
   // calendar
   if (nameclass.includes("find-mes-sep")) { //open september
      $("#drop-sep").collapse('toggle');
   }
   if (nameclass.includes("find-mes-oct")) { //open october
      $("#drop-oct").collapse('toggle');
   }
   
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