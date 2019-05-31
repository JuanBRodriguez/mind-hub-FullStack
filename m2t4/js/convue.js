var app = new Vue({
    el: '#app',
    data: {
        pathname: window.location.pathname,
        url: "",
        datos: [],
        pw: "vZNfxCfRP7nqVY41tNk6DG39jr7TdL8gkojxAkI8",
        campo: "",

        general: [
            {
                partido: "Democratas",
                cantidad: 0,
                VWP: 0
            },
            {
                partido: "Republicanos",
                cantidad: 0,
                VWP: 0
            },
            {
                partido: "Independientes",
                cantidad: 0,
                VWP: 0
            },
            {
                partido: "Total",
                cantidad: 0,
                VWP: 0
            }
        ],

        top: [{
            nUrl: "https://adams.house.gov",
            fullName: "top",
            primero: 0,
            segundo: 0
        },],
        bot: [{
            nUrl: "https://adams.house.gov",
            fullName: "bot",
            primero: 0,
            segundo: 0
        },]

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
                    this.datos = data.results[0].members;
                    this.calculosGenerales(data.results[0].members);

                    this.valoresBot(campo, data.results[0].members)
                    //console.log(this.datos);
                })
                .catch(err => console.log(err))
        },
        verPag() { //verifica el url de la pagina actual y segun este mismo elige que tipo de JSON llamar.
            if (this.pathname.includes('/senate')) {
                this.url = "https://api.propublica.org/congress/v1/113/senate/members.json";
            } else if (this.pathname.includes('/house')) {
                this.url = "https://api.propublica.org/congress/v1/113/house/members.json";
            }
            if (this.pathname.includes('attendance')) {
                this.campo = "missed_votes_pct";
            } else if (this.pathname.includes('loyalty')) {
                this.campo = "votes_with_party_pct";
            }
        },
        calculosGenerales(miembros) {
            let demo = [];
            let VWPD = 0;
            let inde = [];
            let VWPI = 0;
            let repu = [];
            let VWPR = 0;
            let VWPT = 0;

            for (let i = 0; i < miembros.length; i++) {
                if (miembros[i].party == 'R') {
                    repu.push(miembros[i]);
                    VWPR += miembros[i].votes_with_party_pct;
                } else if (miembros[i].party == 'D') {
                    demo.push(miembros[i]);
                    VWPD += miembros[i].votes_with_party_pct;
                } else if (miembros[i].party == 'I') {
                    inde.push(miembros[i]);
                    VWPI += miembros[i].votes_with_party_pct;
                }
                VWPT += miembros[i].votes_with_party_pct;
            }
            this.general[0].cantidad = demo.length;
            this.general[1].cantidad = repu.length;
            this.general[2].cantidad = inde.length;
            this.general[3].cantidad = miembros.length;

            VWPD /= demo.length;
            VWPR /= repu.length;
            VWPI /= inde.length;
            VWPT /= miembros.length;
            VWPD = VWPD.toFixed(2);
            VWPR = VWPR.toFixed(2);
            VWPI = VWPI.toFixed(2);
            VWPT = VWPT.toFixed(2);

            this.general[0].VWP = VWPD;
            this.general[1].VWP = VWPR;
            this.general[2].VWP = VWPI;
            this.general[3].VWP = VWPT;
        },
        valoresBot(campo) {
            
        },
        concatenarNombre(informacion) {//-- Unir nombres para imprimir en tabla
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
        },
        ascendente(){
            return a - b;
        },
        decendente(){
            return b - a;
        },

    },
    computed: {

    },
    created() {
        this.verPag();
        this.usandoFetch();
    }

})