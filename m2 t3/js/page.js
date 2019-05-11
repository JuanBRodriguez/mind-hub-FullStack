var DataJson = JSON.parse(JSON.stringify(data));
var fullName = "";
var filtros = ["D", "R", "I", "All"];
var DataAprobada=[];
$("#table-data").append('<thead class="bg-light">'
	+ '<tr>'
	+ '<th>Name</th>'
	+ '<th>Party</th>'
	+ '<th>State</th>'
	+ '<th>Years in office</th>'
	+ '<th>%Votes w/party</th>'/* */
	+ '</tr>'
	+ '</thead>'
	+ '<tbody>'
);
//--- --------------------- impresion completa inicial
DataAprobada = filtrar(DataJson, filtros);//se "filtra" pero en verdad todos pasan el filtro y DataJson pasa a Data aprobada solo los miembros!
imprimirTabla(DataAprobada); //los datos son enviados a imprimirse en el html

$("#table-data").append('</tbody>');
//----------------Espera el evento de click en la barra de filtros para ejecutarse
document.getElementById('filter').addEventListener('change', function () {
	//imprimo encabezado
	document.getElementById('table-data').innerHTML = '<thead class="bg-light">' + '<tr>' + '<th>Name</th>' + '<th>Party</th>' + '<th>State</th>'
		+ '<th>Years in office</th>' + '<th>%Votes w/party</th>' + '</tr>' + '</thead>' + '<tbody>';
	//verifico el estado de la barra de filtros
	filtros[0] = $('input[type=checkbox][name=Democrat]:checked').val();
	filtros[1] = $('input[type=checkbox][name=Republican]:checked').val();
	filtros[2] = $('input[type=checkbox][name=Independent]:checked').val();
	filtros[3] = $('select#select-states option:checked').val();
	//verifico en consola los estados
	console.log(filtros[0]);
	console.log(filtros[1]);
	console.log(filtros[2]);
	console.log(filtros[3]);
	DataAprobada = filtrar(DataJson, filtros);
	imprimirTabla(DataAprobada);
	$("#table-data").append('</tbody>');
});

//--------------------Agrega al array segun los estados del filtro
function filtrar(datos, eFiltros) {
	let datosAprob = [];
	for (let i = 0; i < datos.results[0].members.length; i++) {
		if (eFiltros[3] == "All") {
			for (let j = 0; j < 3; j++) {
				if (datos.results[0].members[i].party == eFiltros[j]) {
					datosAprob.push(datos.results[0].members[i]);
				}
			}
		} else {
			for (let j = 0; j < 3; j++) {
				if (datos.results[0].members[i].party == eFiltros[j] && datos.results[0].members[i].state == eFiltros[3]) {
					datosAprob.push(datos.results[0].members[i]);
				}
			}
		}

	}
	return datosAprob;
}

//---------------------------------crea cada linea de la tabla con el objeto dado
function imprimirTabla(datos) {
	for (i = 0; i < datos.length; i++) {
		fullName = concatenarNombre(datos[i]);
		$("#table-data").append('<tr>'
			+ '<td>' + '<a href=' + datos[i].url + '>' + fullName + '</a>' + '</td>'
			+ '<td>' + datos[i].party + '</td>'
			+ '<td>' + datos[i].state + '</td>'
			+ '<td>' + datos[i].seniority + '</td>'
			+ '<td>' + datos[i].votes_with_party_pct + ' % </td>'
			+ '</tr>');
	}

}
//---------------------------------------Concateno los nombres en cada iteracion de imprimir tabla
function concatenarNombre(informacion) {
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

