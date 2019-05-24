var statistics = {
    "number_of_democrats": 0,
    "number_of_republicans": 0,
    "number_of_independents": 0,
    "total": 0,
    "democrats_average_votes_with_party": 0,
    "republicans_average_votes_with_party": 0,
    "independents_average_votes_with_party": 0,
    "total_average": 0,
    "least_engaged": [],
    "most_engaged": [],
    "least_loyal": [],
    "most_loyal": [],
  };
  
  
  var members = data.results[0].members;
  
  //at Glance function
  
  atGlance()
  
  function atGlance() {
  
    let dArray = filtrarPorPartido(members, "D");
    statistics.number_of_democrats = dArray.length;
    statistics.democrats_average_votes_with_party = mediaVotos(dArray);
  
    let rArray = filtrarPorPartido(members, "R");
    statistics.number_of_republicans = rArray.length;
    statistics.republicans_average_votes_with_party = mediaVotos(rArray);;
  
    let iArray = filtrarPorPartido(members, "I");
    statistics.number_of_independents = iArray.length;
    statistics.independents_average_votes_with_party = mediaVotos(iArray);;
  
    statistics.total = dArray.length + rArray.length + iArray.length;
    statistics.total_average = mediaVotos(members)
  }
  
  function filtrarPorPartido(arrayOriginal, partido) {
    let arrayPartido = [];
    arrayPartido = arrayOriginal.filter(member => member.party == partido);
    return arrayPartido;
  }
  
  function mediaVotos(arrayPartido) {
    let media = Math.round(sumatoriaDeVotos(arrayPartido) / arrayPartido.length * 100) / 100 || 0;
    return media
  }
  
  function sumatoriaDeVotos(array) {
    sumatoria = array.reduce((sum, miembro) => sum + miembro.votes_with_party_pct, 0)
    return sumatoria  
  }
  
  //Pintamos la Tabla AtGlance
  
  
  function atGlanceTable() {
    return "<tr>" +
      "<td>Democrats</td>" + "<td>" + statistics.number_of_democrats + "</td>" + "<td>" + statistics.democrats_average_votes_with_party + " % </td>" +
      "</tr>" +
      "<tr>" +
      "<td>Republicans</td>" + "<td>" + statistics.number_of_republicans + "</td>" + "<td>" + statistics.republicans_average_votes_with_party + " % </td>" +
      "</tr>" +
      "<tr>" +
      "<td>Independents</td>" + "<td>" + statistics.number_of_independents + "</td><td>" + statistics.independents_average_votes_with_party + " % </td>" +
      "</tr>" +
      "<tr>" +
      "<td>Total</td><td>" + statistics.total + "</td><td>" + statistics.total_average + " % </td>" +
      "</tr>"
  }
  
  $("#at-glance").html(atGlanceTable());
  
  
  
  //Loyalty & Attendance
  
  statistics.least_loyal= diezPorCiento("peores", members, "votes_with_party_pct");
  statistics.most_loyal= diezPorCiento("mejores", members, "votes_with_party_pct");
  statistics.least_engaged= diezPorCiento("mejores", members, "missed_votes_pct");
  statistics.most_engaged= diezPorCiento("peores", members, "missed_votes_pct");
  
  function ascendente(a,b) {
    return a - b;
  }
  
  function completarDiezPorciento (diezPorCiento,ordenado){
    let diezPosta = diezPorCiento
    let aunFalta =true
    while (aunFalta){
      if (diezPosta[diezPosta.length-1] == ordenado[diezPosta.length]) {
        diezPosta.push(ordenado[diezPosta.length])
      }else{
        aunFalta = false
      }
     // diezPosta[diezPosta.length-1] == ordenado[diezPosta.length] ? diezPosta.push(ordenado[diezPosta.length]) : aunFalta = false
    }
    return diezPosta
  }
  function diezPorCiento(parametro,arrayTotal,campoAnalisis){
    let ordenado=[]
    array1 = arrayTotal.map(miembro => miembro[campoAnalisis]);
    console.log(array1)
  
    parametro == "peores" ? ordenado = array1.sort(ascendente) : ordenado =array1.sort(ascendente).reverse(ascendente)
  
    
    console.log(ordenado)
  
    let diezPorCiento =[]
    diezPorCiento = ordenado.filter((miembro,indice) => indice/arrayTotal.length * 100 < 10) 
    console.log(diezPorCiento)
  
    let diezPorCientoPosta = completarDiezPorciento(diezPorCiento,ordenado)
    console.log(diezPorCientoPosta)
  
    var arrayFinal = [];
    for (i in diezPorCientoPosta){
      for (j in arrayTotal){
        if (diezPorCientoPosta[i] == arrayTotal[j][campoAnalisis] && diezPorCientoPosta.indexOf(diezPorCientoPosta[i]) == i)
        arrayFinal.push(arrayTotal[j]);
      }
    }
    console.log(arrayFinal)
    
    return arrayFinal
  
  }
  
  
  //Loyalty & Attendance Tables
  
  var leastLoyalTable = statistics.least_loyal.map(function(x){
    return "<tr><td><a href=\"" + x.url + "\">" + x.last_name + ", " + x.first_name + " " + (x.middle_name || "") + "</a></td><td>" + x.total_votes + "</td><td>" + x.votes_with_party_pct +  " %</td></tr>"
  })
  $("#least-loyal").html(leastLoyalTable);
  
  var mostLoyalTable = statistics.most_loyal.map(function(x){
    return "<tr><td><a href=\"" + x.url + "\">" + x.last_name + ", " + x.first_name + " " + (x.middle_name || "") + "</a></td><td>" + x.total_votes + "</td><td>" + x.votes_with_party_pct +  " %</td></tr>"
  })
  $("#most-loyal").html(mostLoyalTable);
  
  var leastEngagedTable = statistics.least_engaged.map(function(x){
    return "<tr><td><a href=\"" + x.url + "\">" + x.last_name + ", " + x.first_name + " " + (x.middle_name || "") + "</a></td><td>" + x.missed_votes + "</td><td>" + x.missed_votes_pct +  " %</td></tr>"
  })
  $("#least-engaged").html(leastEngagedTable);
  
  var mostEngagedTable = statistics.most_engaged.map(function(x){
    return "<tr><td><a href=\"" + x.url + "\">" + x.last_name + ", " + x.first_name + " " + (x.middle_name || "") + "</a></td><td>" + x.missed_votes + "</td><td>" + x.missed_votes_pct +  " %</td></tr>"
  })
  $("#most-engaged").html(mostEngagedTable);