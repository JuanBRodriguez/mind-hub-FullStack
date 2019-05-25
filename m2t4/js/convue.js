var app = new Vue({
    el: '#app',
    data: {
        pathname: window.location.pathname,
        url: "",
        datos: [],
        pw: "vZNfxCfRP7nqVY41tNk6DG39jr7TdL8gkojxAkI8",
        page: "",
        dem: [],
        rep: [],
        ind: [],

        general: [{
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

        topLoy: [{
            nUrl: "https://adams.house.gov",
            fullName: "top",
            votesParty: 0,
            VWPP: 0
        }, ],
        botLoy: [{
            nUrl: "https://adams.house.gov",
            fullName: "bot",
            votesParty: 0,
            VWPP: 0
        }, ],
        topAtt: [{
            nUrl: "https://adams.house.gov",
            fullName: "atop",
            missedVotes: 0,
            MVP: 0
        }, ],
        botAtt: [{
            nUrl: "https://adams.house.gov",
            fullName: "asbot",
            missedVotes: 0,
            MVP: 0
        }, ]
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
                    //console.log(this.datos);
                })
                .catch(err => console.log(err))
        },
        verPag() { //verifica el url de la pagina actual y segun este mismo elige que tipo de JSON llamar.
            if (this.pathname.includes('/senate')) {
                this.page = "senate";
                return this.url = "https://api.propublica.org/congress/v1/113/senate/members.json";
            } else if (this.pathname.includes('/house')) {
                this.page = "house";
                return this.url = "https://api.propublica.org/congress/v1/113/house/members.json";
            }
        },
        calculosGenerales() {
            for (i = 0; i < this.datos.length; i++) {
                if (this.datos[i].party == 'R') {
                    this.rep.push(this.datos[i]);
                } else if (this.datos[i].party == 'D') {
                    this.dem.push(this.datos[i]);
                } else if (this.datos[i].party == 'I') {
                    this.ind.push(this.datos[i]);
                }
            }
            console.log(this.dem[0]);
        },
    },
    computed: {

    },
    created() {
        this.verPag();
        this.usandoFetch();
        this.calculosGenerales();
    }

})