var DataJson = JSON.parse(JSON.stringify(data));
var DataRep = [];
var DataDem = [];
var DataInd = [];
var diezPorciento = 0;
var fullName="";

var estadisticas = {
  numberD: 0,
  numberR: 0,
  numberI: 0,
  numberTotal: 0,
  VWPD: 0,
  VWPR: 0,
  VWPI: 0,
  VWPTotal: 0,
  membersTopA: [],
  membersBottomA: [],
  membersTopL: [],
  membersBottomL: []
}
//-----------separador de miembros por partido
for (i = 0; i < DataJson.results[0].members.length; i++) {
  if (DataJson.results[0].members[i].party == 'R') {
    DataRep.push(DataJson.results[0].members[i]);
  } else if (DataJson.results[0].members[i].party == 'D') {
    DataDem.push(DataJson.results[0].members[i]);
  } else if (DataJson.results[0].members[i].party == 'I') {
    DataInd.push(DataJson.results[0].members[i]);
  }
}
// asignacion de valores al objeto estadisticas
estadisticas.numberD = DataDem.length;
estadisticas.numberR = DataRep.length;
estadisticas.numberI = DataInd.length;
estadisticas.numberTotal = DataJson.results[0].members.length;

estadisticas.VWPD = sumarVotos(DataDem, estadisticas.numberD);
estadisticas.VWPR = sumarVotos(DataRep, estadisticas.numberR);
estadisticas.VWPI = sumarVotos(DataInd, estadisticas.numberI);
estadisticas.VWPTotal = sumarVotos(DataJson.results[0].members, estadisticas.numberTotal);

diezPorciento = parseInt((estadisticas.numberTotal * 0.1), 10);

estadisticas.membersTopA = topMembersA(DataJson.results[0].members);
estadisticas.membersBottomA = bottomMembersA(DataJson.results[0].members);
estadisticas.membersTopL = topMembersL(DataJson.results[0].members);
estadisticas.membersBottomL = bottomMembersL(DataJson.results[0].members);

// escritura en HTML

constructGlanceTable();
imprimirTablaAttBot(estadisticas.membersBottomA);
imprimirTablaAttTop(estadisticas.membersTopA);
imprimirTablaLoyBot(estadisticas.membersBottomL);
imprimirTablaLoyTop(estadisticas.membersTopL);

// funciones
function topMembersA(miembros) {// -- attendance filter top an bottom
  let seleccionados = [];
  let ordenados = miembros.sort(compMVas);
  for (let i = 0, j=0; j < diezPorciento; i++, j++) {
    if (ordenados[i].missed_votes_pct == ordenados[diezPorciento].missed_votes_pct) {
      j--;
    }
    seleccionados.push(ordenados[i]);
    // console.log(JSON.stringify(ordenados[i].missed_votes_pct));
  }
  // console.log(diezPorciento + " son la cantidad de seleccionados");
  // console.log(seleccionados.length);
  // console.log(JSON.stringify(seleccionados));
  return seleccionados;
}
function bottomMembersA(miembros) {
  let seleccionados = [];
  let ordenados = miembros.sort(compMVdes);
  for (let i = 0, j=0; j < diezPorciento; i++, j++) {
    if (ordenados[i].missed_votes_pct == ordenados[diezPorciento].missed_votes_pct) {
      j--;
    }
    seleccionados.push(ordenados[i]);
    // console.log(JSON.stringify(ordenados[i].missed_votes_pct));
  }
  // console.log(diezPorciento + " son la cantidad de seleccionados");
  // console.log(seleccionados.length);
  // console.log(JSON.stringify(seleccionados));
  return seleccionados;
}
function topMembersL(miembros) {// --------Loyalty
  let seleccionados = [];
  let ordenados = miembros.sort(compVPdes);
  for (let i = 0, j=0; j < diezPorciento; i++, j++) {
    if (ordenados[i].votes_with_party_pct == ordenados[diezPorciento].votes_with_party_pct) {
      j--;
    }
    seleccionados.push(ordenados[i]);
    //  console.log(JSON.stringify(ordenados[i].votes_with_party_pct));
  }
  // console.log(diezPorciento + " son la cantidad de seleccionados");
  // console.log(seleccionados.length);
  // console.log(JSON.stringify(seleccionados));
  return seleccionados;
}
function bottomMembersL(miembros) {
  let seleccionados = [];
  let ordenados = miembros.sort(compVPas);
  for (let i = 0, j=0; j < diezPorciento; i++, j++) {
    if (ordenados[i].votes_with_party_pct == ordenados[diezPorciento].votes_with_party_pct) {
      j--;
    }
    seleccionados.push(ordenados[i]);
    // console.log(JSON.stringify(ordenados[i].votes_with_party_pct));
  }
  // console.log(diezPorciento + " son la cantidad de seleccionados");
  // console.log(seleccionados.length);
  // console.log(JSON.stringify(seleccionados));
  return seleccionados;
}

// ---------------------------------------------------------
function compVPas(a, b) {//  ordenar ascendente votes party %
  if (a.votes_with_party_pct < b.votes_with_party_pct) {
    return -1;
  }
  if (a.votes_with_party_pct > b.votes_with_party_pct) {
    return 1;
  }
  return 0;
}
function compVPdes(a, b) {//  ordenar decendente votes party %
  if (a.votes_with_party_pct > b.votes_with_party_pct) {
    return -1;
  }
  if (a.votes_with_party_pct < b.votes_with_party_pct) {
    return 1;
  }
  return 0;
}
function compMVas(a, b) {//  ordenar ascendente missed votes %
  if (a.missed_votes_pct < b.missed_votes_pct) {
    return -1;
  }
  if (a.missed_votes_pct > b.missed_votes_pct) {
    return 1;
  }
  return 0;
}
function compMVdes(a, b) {//  ordenar decendente missed votes %
  if (a.missed_votes_pct > b.missed_votes_pct) {
    return -1;
  }
  if (a.missed_votes_pct < b.missed_votes_pct) {
    return 1;
  }
  return 0;
}

// --------------escritura HTML
function imprimirTablaAttTop(datos) {
	for (i = 0; i < datos.length; i++) {
		fullName = concatenarNombre(datos[i]);
		$("#table-top-A").append(
      '<tr>'
			+ '<td>' + '<a href=' + datos[i].url + '>' + fullName + '</a>' + '</td>'
			+ '<td>' + datos[i].missed_votes + '</td>'
			+ '<td>' + datos[i].missed_votes_pct + ' % </td>'
			+ '</tr>');
	}
}
function imprimirTablaAttBot(datos) {
	for (i = 0; i < datos.length; i++) {
		fullName = concatenarNombre(datos[i]);
		$("#table-bottom-A").append(
      '<tr>'
			+ '<td>' + '<a href=' + datos[i].url + '>' + fullName + '</a>' + '</td>'
			+ '<td>' + datos[i].missed_votes + '</td>'
			+ '<td>' + datos[i].missed_votes_pct + ' % </td>'
			+ '</tr>');
  }
  //console.log(datos);
}
function imprimirTablaLoyTop(datos) {
	for (i = 0; i < datos.length; i++) {
		fullName = concatenarNombre(datos[i]);
		$("#table-top-L").append(
      '<tr>'
			+ '<td>' + '<a href=' + datos[i].url + '>' + fullName + '</a>' + '</td>'
			+ '<td>' + datos[i].total_votes + '</td>'
			+ '<td>' + datos[i].votes_with_party_pct + ' % </td>'
			+ '</tr>');
	}
}
function imprimirTablaLoyBot(datos) {
	for (i = 0; i < datos.length; i++) {
		fullName = concatenarNombre(datos[i]);
		$("#table-bottom-L").append(
      '<tr>'
			+ '<td>' + '<a href=' + datos[i].url + '>' + fullName + '</a>' + '</td>'
			+ '<td>' + datos[i].total_votes + '</td>'
			+ '<td>' + datos[i].votes_with_party_pct + ' % </td>'
			+ '</tr>');
	}
}
function constructGlanceTable() {
  if (isNaN(estadisticas.VWPI)) {
    estadisticas.VWPI=0;
  }
  $("#table-glance").append(
    '<tr>'
      + '<td>Democrat</td>'
      + '<td>' + estadisticas.numberD + '</td>'
      + '<td>' + estadisticas.VWPD + '%</td>'
    + '</tr>'
    + '<tr>'
      + '<td>Republican</td>'
      + '<td>' + estadisticas.numberR + '</td>'
      + '<td>' + estadisticas.VWPR + '%</td>'
    + '</tr>'
      + '<td>Independent</td>'
      + '<td>' + estadisticas.numberI + '</td>'
      + '<td>' + estadisticas.VWPI + '%</td>'
    + '</tr>'
      + '<td>Total</td>'
      + '<td>' + estadisticas.numberTotal + '</td>'
      + '<td>' + estadisticas.VWPTotal + '%</td>'
    + '</tr>'
  );
}

function sumarVotos(miembros, number) {//-- porcentaje VWP
  let suma = 0;
  miembros.forEach(e => {
    suma += e.votes_with_party_pct;
  });
  suma /= number;
  suma = suma.toFixed(2);
  return suma;
}
function concatenarNombre(informacion) {//-- Unir nombres para imprimir en tabla
	let nombreComp = "";
	if (informacion.middle_name != null) {
		nombreComp = informacion.first_name + " "
			+ informacion.middle_name + " "
			+ informacion.last_name;
	} else {
		nombreComp = informacion.first_name + " "
			+ informacion.last_name;
	}
	return nombreComp;
}