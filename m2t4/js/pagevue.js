var app = new Vue({
    el: '#app',
    data: {
        pathname: window.location.pathname,
        url: "",
        pw: "vZNfxCfRP7nqVY41tNk6DG39jr7TdL8gkojxAkI8",
        filtros: ["", "",""],
        estado: "All",
        dataJson: [],
        aprobados: [],

        estados: [
            {
                value: "All",
                name: 'All States'
            },
            {
                value: "AL",
                name: 'Alabama'
            },
            {
                value: "AK",
                name: 'Alaska'
            },
            {
                value: "AS",
                name: 'American Samoa'
            },
            {
                value: "AZ",
                name: 'Arizona'
            },
            {
                value: "AR",
                name: 'Arkansas'
            },
            {
                value: "CA",
                name: 'California'
            },
            {
                value: "CO",
                name: 'Colorado'
            },
            {
                value: "CT",
                name: 'Connecticut'
            },
            {
                value: "DE",
                name: 'Delaware'
            },
            {
                value: "FL",
                name: 'Florida'
            },
            {
                value: "GA",
                name: 'Georgia'
            },
            {
                value: "GU",
                name: 'Guam'
            },
            {
                value: "HI",
                name: 'Hawaii'
            },
            {
                value: "IA",
                name: 'Iowa'
            },
            {
                value: "ID",
                name: 'Idaho'
            },
            {
                value: "IL",
                name: 'Illinois'
            },
            {
                value: "IN",
                name: 'Indiana'
            },
            {
                value: "KS",
                name: 'Kansas'
            },
            {
                value: "KY",
                name: 'Kentucky'
            },
            {
                value: "LA",
                name: 'Lousiana'
            },
            {
                value: "MA",
                name: 'Massachusetts'
            },
            {
                value: "MD",
                name: 'Maryland'
            },
            {
                value: "ME",
                name: 'Maine'
            },
            {
                value: "MI",
                name: 'Michigan'
            },
            {
                value: "MN",
                name: 'Minnesota'
            },
            {
                value: "MO",
                name: 'Missouri'
            },
            {
                value: "MP",
                name: 'Northern Mariana Islands'
            },
            {
                value: "MS",
                name: 'Mississippi'
            },
            {
                value: "MT",
                name: 'Montana'
            },
            {
                value: "NC",
                name: 'North Calorina'
            },
            {
                value: "ND",
                name: 'North Dakota'
            },
            {
                value: "NE",
                name: 'Nebraska'
            },
            {
                value: "NH",
                name: 'New Hampshire'
            },
            {
                value: "NJ",
                name: 'New Jersey'
            },
            {
                value: "NM",
                name: 'New Mexico'
            },
            {
                value: "NV",
                name: 'Nevada'
            },
            {
                value: "NY",
                name: 'New York'
            },
            {
                value: "OH",
                name: 'Ohio'
            },
            {
                value: "OK",
                name: 'Oklahoma'
            },
            {
                value: "OR",
                name: 'Oregon'
            },
            {
                value: "PA",
                name: 'Pennsylvania'
            },
            {
                value: "PR",
                name: 'Puerto Rico'
            },
            {
                value: "RI",
                name: 'Rhode Island'
            },
            {
                value: "SC",
                name: 'South Carolina'
            },
            {
                value: "SD",
                name: 'South Dakota'
            },
            {
                value: "TN",
                name: 'Tennessee'
            },
            {
                value: "TX",
                name: 'Texas'
            },
            {
                value: "UT",
                name: 'Utah'
            },
            {
                value: "VA",
                name: 'Virginia'
            },
            {
                value: "VI",
                name: 'Virgin Islands'
            },
            {
                value: "VT",
                name: 'Vermont'
            },
            {
                value: "WA",
                name: 'Washington'
            },
            {
                value: "WI",
                name: 'Wisconsin'
            },
            {
                value: "WV",
                name: 'West Virginia'
            },
            {
                value: "WY",
                name: 'Wyoming'
            },
        ],

    },
    methods: {
        usandoFetch() { //metodo para llamar al fetch que pide el JSON a la API.
            fetch(this.url, {
                method: 'GET',
                headers: new Headers({
                    'X-API-Key': this.pw
                })
            }).then(response => response.json())
                .then(data => {
                    this.dataJson = data.results[0].members;
                    this.seleccionarElegidos();
                })
                .catch(err => console.log(err))
        },
        verPag() { //verifica el url de la pagina actual y segun este mismo elige que tipo de JSON llamar.
            if (this.pathname.includes('/senate')) {
                this.url = "https://api.propublica.org/congress/v1/113/senate/members.json";
            } else if (this.pathname.includes('/house')) {
                this.url = "https://api.propublica.org/congress/v1/113/house/members.json";
            }
        },
        concatenarNombre(informacion) { //-- Unir nombres para imprimir en tabla
            let nombreComp = "";
            if (informacion.middle_name != null) {
                nombreComp = informacion.first_name + " " + informacion.middle_name + " " + informacion.last_name;
            } else {
                nombreComp = informacion.first_name + " " + informacion.last_name;
            }
            return nombreComp;
        },
        seleccionarElegidos() {
            this.filtros[0] = $('input[type=checkbox][name=Democrat]:checked').val();
            this.filtros[1] = $('input[type=checkbox][name=Republican]:checked').val();
            this.filtros[2] = $('input[type=checkbox][name=Independent]:checked').val();
            this.estado = $('select#select-states option:checked').val();
            let datosAprob = [];
            console.log(this.filtros);
            console.log(this.estado);
            for (let i = 0; i < this.dataJson.length; i++) {
                if (this.estado == "All") {
                    for (let j = 0; j < 3; j++) {
                        let ap = {
                            url: "",
                            fullName: "",
                            party: "",
                            state: "",
                            seniority: "",
                            votes_with_party_pct: "",
                        };
                        if (this.dataJson[i].party == this.filtros[j]) {
                            ap.url = this.dataJson[i].url;
                            ap.fullName = this.concatenarNombre(this.dataJson[i]);
                            ap.party = this.dataJson[i].party;
                            ap.state = this.dataJson[i].state;
                            ap.seniority = this.dataJson[i].seniority;
                            ap.votes_with_party_pct = this.dataJson[i].votes_with_party_pct;
                            datosAprob.push(ap);
                        }
                    }
                } else {
                    for (let j = 0; j < 3; j++) {
                        let ap = {
                            url: "",
                            fullName: "",
                            party: "",
                            state: "",
                            seniority: "",
                            votes_with_party_pct: "",
                        };
                        if (this.dataJson[i].party == this.filtros[j] && this.dataJson[i].state == this.estado) {
                            ap.url = this.dataJson[i].url;
                            ap.fullName = this.concatenarNombre(this.dataJson[i]);
                            ap.party = this.dataJson[i].party;
                            ap.state = this.dataJson[i].state;
                            ap.seniority = this.dataJson[i].seniority;
                            ap.votes_with_party_pct = this.dataJson[i].votes_with_party_pct;
                            datosAprob.push(ap);
                        }
                    }
                }
            }
            return this.aprobados = datosAprob;
        },
    },
    computed: {
    },
    created() {
        this.verPag();
        this.usandoFetch();
    }
})