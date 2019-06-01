var app = new Vue({
    el: '#app',
    data: {
        pathname: window.location.pathname,
        url: "",
        pw: "vZNfxCfRP7nqVY41tNk6DG39jr7TdL8gkojxAkI8",
        primero: "",
        segundo: "",
        estados: [
            { value:"All", name:'All States'},
            { value:"AL", name: 'Alabama'},
            { value:"AK", name: 'Alaska'},
            { value:"AS", name:'American Samoa'},
            { value:"AZ", name:'Arizona'},
            { value:"AR" , name:'Arkansas'},
            { value: "CA" , name:'California'},
            { value: "CO", name:'Colorado'},
            { value: "CT", name:'Connecticut'},
            { value: "DE", name:'Delaware'},
            { value: "FL", name:'Florida'},
            { value: "GA", name:'Georgia'},
            { value: "GU", name:'Guam'},
            { value:"HI" , name:'Hawaii'},
            { value: "IA", name:'Iowa'},
            { value: "ID", name:'Idaho'},
            { value: "IL", name:'Illinois'},
            { value: "IN", name:'Indiana'},
            { value: "KS", name:'Kansas'},
            { value: "KY", name:'Kentucky'},
            { value:"LA" , name:'Lousiana'},
            { value: "MA", name:'Massachusetts'},
            { value: "MD", name:'Maryland'},
            { value:"ME" , name:'Maine'},
            { value: "MI", name:'Michigan'},
            { value: "MN", name:'Minnesota'},
            { value: "MO", name:'Missouri'},
            { value: "MP", name:'Northern Mariana Islands'},
            { value: "MS", name:'Mississippi'},
            { value: "MT", name:'Montana'},
            { value: "NC", name:'North Calorina'},
            { value: "ND", name:'North Dakota'},
            { value: "NE", name:'Nebraska'},
            { value: "NH", name:'New Hampshire'},
            { value: "NJ", name:'New Jersey'},
            { value: "NM", name:'New Mexico'},
            { value: "NV", name:'Nevada'},
            { value: "NY", name:'New York'},
            { value: "OH", name:'Ohio'},
            { value: "OK", name:'Oklahoma'},
            { value: "OR", name:'Oregon'},
            { value: "PA", name:'Pennsylvania'},
            { value:"PR" , name:'Puerto Rico'},
            { value: "RI", name:'Rhode Island'},
            { value: "SC", name:'South Carolina'},
            { value: "SD", name:'South Dakota'},
            { value: "TN", name:'Tennessee'},
            { value: "TX", name:'Texas'},
            { value: "UT", name:'Utah'},
            { value: "VA", name:'Virginia'},
            { value: "VI", name:'Virgin Islands'},
            { value: "VT", name:'Vermont'},
            { value: "WA", name:'Washington'},
            { value: "WI", name:'Wisconsin'},
            { value: "WV", name:'West Virginia'},
            { value: "WY", name:'Wyoming'},
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
                    DataJson = data;
                    this.calculosGenerales(data.results[0].members);
                    this.valoresBot(data.results[0].members, this.primero, this.segundo);
                    this.valoresTop(data.results[0].members, this.primero, this.segundo);
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
    },
    computed: {},
    created() {
        this.verPag();
        this.usandoFetch();
    }
})