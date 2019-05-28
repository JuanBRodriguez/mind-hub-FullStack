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

        top: [{
            nUrl: "https://adams.house.gov",
            fullName: "top",
            primero: 0,
            segundo: 0
        }, ],
        bot: [{
            nUrl: "https://adams.house.gov",
            fullName: "bot",
            primero: 0,
            segundo: 0
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
                return this.url = "https://api.propublica.org/congress/v1/113/senate/members.json";
            } else if (this.pathname.includes('/house')) {
                return this.url = "https://api.propublica.org/congress/v1/113/house/members.json";
            }
            if (this.pathname.includes('attendance')) {
                return this.page = "att";
            } else if (this.pathname.includes('loyalty')) {
                return this.page = "loy";
            }
        },
        calculosGenerales() {
            let demo=[];
            let inde=[];
            let repu=[];
            for (i = 0; i < this.datos.length; i++) {
                console.log(this.datos);
                if (this.datos[i].party == 'R') {
                    repu.push(this.datos[i]);
                } else if (this.datos[i].party == 'D') {
                    demo.push(this.datos[i]);
                } else if (this.datos[i].party == 'I') {
                    inde.push(this.datos[i]);
                }
            }
            this.dem = demo;
            this.ind = inde;
            this.rep = repu;
            
            console.log(this.dem);
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