/* ////////////////////////////////////////////////
                ESTADISTICAS
//////////////////////////////////////////////// */

var memberSenateArray = dataSenate.results[0].members;
var memberHouseArray = dataHouse.results[0].members;
const independent = "I";
const democrat = "D";
const republican = "R";
const loyal = "loyal";
const attendance = "attendance";
const least = "least";
const most = "most";
var statistics = {
    'numberOfDemocrats': 0,
    'numberOfRepublicans': 0,
    'numberOfIndependents': 0,
    'averageVotesDemocrats': 0,
    'averageVotesRepublicans': 0,
    'averageVotesIndependents': 0,
    'averageVotesAll': 0,
    'mostAttendance': [],
    'leastAttendance': [],
    'mostLoyal': [],
    'leastLoyal': [],

}
verifyPage();
fillAtGlanceTable();
verifyLoyalTable();
verifyAttTable();

/* //////////////////////////
    CALCULOS
////////////////////////// */

// Cantidad de representantes por cada partido.
function countMembers(arrayM, partyChar) {
    let counted = arrayM.filter(e => e.party === partyChar);
    return counted.length;
}
// Cantidad promedio de votantes con cada partido. 
function averageVotesWithParty(arrayM, partyChar) {
    let dividerLength = 0;
    let countPercent = 0;
    let average = 0;
    for (let i = 0; i < arrayM.length; i++) {
        if (arrayM[i].party === partyChar) {
            countPercent += arrayM[i].votes_with_party_pct;
            dividerLength++
        }
    }
    average = (countPercent / dividerLength).toFixed(2)
    return average;
}
// Cantidad promedio de votantes con cada partido. 
function averageVotesWithPartyAll(arrayM) {
    let dividerLength = 0;
    let countPercent = 0;
    let average = 0;
    for (let i = 0; i < arrayM.length; i++) {
        countPercent += arrayM[i].votes_with_party_pct;
        dividerLength++
    }
    average = (countPercent / dividerLength).toFixed(2)
    console.log(average);

    return average;
}

// Most o Least de acuerdo a parámetros.
function mostLeast(arrayM, leastOrMost, attendanceOrLoyal) {
    const minLenght = Math.round((arrayM.length * 10) / 100) //
    let aux = [];
    if (leastOrMost === "least") {
        if (attendanceOrLoyal === "attendance") {
            arrayM.sort((a, b) => (a.missed_votes_pct > b.missed_votes_pct) ? 1 : ((b.missed_votes_pct > a.missed_votes_pct) ? -1 : 0));
            for (var i = 0; aux.length < minLenght; i++) {
                aux.push(arrayM[i]);
            }
            while (aux[aux.length - 1].missed_votes_pct === arrayM[i + 1].missed_votes_pct) {
                aux.push(arrayM[i + 1]);
                i++;
            }
            return aux;
        } else if (attendanceOrLoyal === "loyal") {
            arrayM.sort((a, b) => (a.votes_with_party_pct > b.votes_with_party_pct) ? 1 : ((b.votes_with_party_pct > a.votes_with_party_pct) ? -1 : 0));
            for (var i = 0; aux.length < minLenght; i++) {
                aux.push(arrayM[i]);
            }
            while (aux[aux.length - 1].votes_with_party_pct === arrayM[i + 1].votes_with_party_pct) {
                aux.push(arrayM[i + 1]);
                i++;
            }
            return aux;
        }
    } else if (leastOrMost === "most") {
        if (attendanceOrLoyal === "attendance") {
            arrayM.sort((a, b) => (a.missed_votes_pct < b.missed_votes_pct) ? 1 : ((b.missed_votes_pct < a.missed_votes_pct) ? -1 : 0));
            for (var i = 0; aux.length < minLenght; i++) {
                aux.push(arrayM[i]);
            }
            while (aux[aux.length - 1].missed_votes_pct === arrayM[i + 1].missed_votes_pct) {
                aux.push(arrayM[i + 1]);
                i++;
            }
            return aux;
        } else if (attendanceOrLoyal === "loyal") {
            arrayM.sort((a, b) => (a.votes_with_party_pct < b.votes_with_party_pct) ? 1 : ((b.votes_with_party_pct < a.votes_with_party_pct) ? -1 : 0));
            for (var i = 0; aux.length < minLenght; i++) {
                aux.push(arrayM[i]);
            }
            while (aux[aux.length - 1].votes_with_party_pct === arrayM[i + 1].votes_with_party_pct) {
                aux.push(arrayM[i + 1]);
                i++;
            }
            return aux;
        }
    }
}

/*//////////////////////////
    VERIFICACION
//////////////////////////*/
// Llena estadísticas con data Senate, o data House.
function verifyPage() {
    if (document.getElementById("senate")) {
        fillStatistics(memberSenateArray)
    } else if (document.getElementById("house")) {
        fillStatistics(memberHouseArray)
    }
}
function verifyAttTable() {
    if (document.getElementById('most-engaged-s')) {
        fillAttendanceTable(statistics.leastAttendance, 'most-engaged-s');
        fillAttendanceTable(statistics.mostAttendance, 'least-engaged-s');

    } else if (document.getElementById('most-engaged-h')) {
        fillAttendanceTable(statistics.leastAttendance, 'most-engaged-h');
        fillAttendanceTable(statistics.mostAttendance, 'least-engaged-h');
    }
}
function verifyLoyalTable() {
    if (document.getElementById('most-loyal-s')) {
        fillLoyaltyTable(statistics.leastLoyal, 'most-loyal-s');
        fillLoyaltyTable(statistics.mostLoyal, 'least-loyal-s');

    } else if (document.getElementById('most-loyal-h')) {
        fillLoyaltyTable(statistics.leastLoyal, 'most-loyal-h');
        fillLoyaltyTable(statistics.mostLoyal, 'least-loyal-h');
    }
}

/* //////////////////////////
    LLENAR TABLAS
////////////////////////// */
// Llenar objeto estadisticas
function fillStatistics(arrayM) {
    statistics.numberOfDemocrats = countMembers(arrayM, democrat);
    statistics.numberOfRepublicans = countMembers(arrayM, republican);
    statistics.numberOfIndependents = countMembers(arrayM, independent);
    statistics.averageVotesDemocrats = averageVotesWithParty(arrayM, democrat);
    statistics.averageVotesRepublicans = averageVotesWithParty(arrayM, republican);
    statistics.averageVotesIndependents = averageVotesWithParty(arrayM, independent);
    statistics.averageVotesAll = averageVotesWithPartyAll(arrayM);
    statistics.leastAttendance = mostLeast(arrayM, least, attendance);
    statistics.mostAttendance = mostLeast(arrayM, most, attendance);
    statistics.leastLoyal = mostLeast(arrayM, least, loyal);
    statistics.mostLoyal = mostLeast(arrayM, most, loyal);
}
// Llenar tabla Glance
function fillAtGlanceTable() {
    let tableTotalMembers = document.getElementById('total-members');
    let table = `<thead class='thead-light'><tr><th> Party </th><th> Members </th><th> Percent of Votes</th></tr></thead>`;
    table += `<tbody>`;
    table += `<tr><td>Democrat</td><td>${statistics.numberOfDemocrats}</td><td>${statistics.averageVotesDemocrats} %</td></tr>`;
    table += `<tr><td>Republican</td><td>${statistics.numberOfRepublicans}</td><td>${statistics.averageVotesRepublicans} %</td></tr>`;
    if (statistics.numberOfIndependents > 0) {
        table += `<tr><td>Independent</td><td>${statistics.numberOfIndependents}</td><td>${statistics.averageVotesIndependents} %</td></tr>`;
    }
    table += `<tr><td class='font-weight-bold'>Total</td><td class='font-weight-bold'>${sumMbrs()}</td><td class='font-weight-bold'> ${statistics.averageVotesAll} %</td></tr>`;
    table += `</tbody>`;
    tableTotalMembers.innerHTML = table;
}
// Lenar tablas Attendance
function fillAttendanceTable(arrayM, id) {
    //Obtengo la tabla tabla
    const table = document.getElementById(id);
    //Crear head de la tabla.
    const thead = table.createTHead();
    thead.innerHTML = '<tr><th class="thead-light">Name</th><th>Missed Votes</th><th> Missed % </th></tr>';
    //Crear body de la tabla.
    const tbody = table.createTBody();
    // Crear una fila por cada miembro.
    arrayM.forEach(miembro => {
        const row = document.createElement('tr');
        const nameM = document.createElement('td');
        const missedVotesM = document.createElement('td');
        const missedVotesPercentM = document.createElement('td');
        // Asignar valores.
        // Controlar si tienen segundo nombre.
        if (miembro.middle_name === null) {
            nameM.textContent = `${miembro.first_name} ${miembro.last_name}`;
        } else {
            nameM.textContent = `${miembro.first_name} ${miembro.middle_name} ${miembro.last_name}`;
        }
        missedVotesM.textContent = miembro.missed_votes;
        missedVotesPercentM.textContent = `${miembro.missed_votes_pct} %`;
        //Insertar en la fila
        row.appendChild(nameM);
        row.appendChild(missedVotesM);
        row.appendChild(missedVotesPercentM);
        //Insertar en el body de la tabla.
        tbody.appendChild(row);
    });
}
// Lenar tablas Loyal
function fillLoyaltyTable(arrayM, id) {
    //Obtengo la tabla tabla
    const table = document.getElementById(id);
    //Crear head de la tabla.
    const thead = table.createTHead();
    thead.innerHTML = '<tr><th class="thead-light">Name</th><th>Party Votes</th><th> Votes % </th></tr>';
    //Crear body de la tabla.
    const tbody = table.createTBody();
    // Crear una fila por cada miembro.
    arrayM.forEach(miembro => {
        const row = document.createElement('tr');
        const nameM = document.createElement('td');
        const partyVotesM = document.createElement('td');
        const partyVotesPercentM = document.createElement('td');
        // Asignar valores.
        // Controlar si tienen segundo nombre.
        if (miembro.middle_name === null) {
            nameM.textContent = `${miembro.first_name} ${miembro.last_name}`;
        } else {
            nameM.textContent = `${miembro.first_name} ${miembro.middle_name} ${miembro.last_name}`;
        }
        partyVotesM.textContent = miembro.total_votes;
        partyVotesPercentM.textContent = `${miembro.votes_with_party_pct} %`;
        //Insertar en la fila
        row.appendChild(nameM);
        row.appendChild(partyVotesM);
        row.appendChild(partyVotesPercentM);
        //Insertar en el body de la tabla.
        tbody.appendChild(row);
    });
}

/*/////////////////////////
    OTROSSSSSSSSSSS
//////////////////////////*/
// Suma total de miembros.
function sumMbrs() {
    let x = statistics.numberOfDemocrats + statistics.numberOfRepublicans + statistics.numberOfIndependents
    return x;
}



