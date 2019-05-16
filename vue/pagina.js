var app= new Vue({
    el: '#app',
    data: {
        titulo: 'hola mundo con vue!',
        frutas: [
            { nombre: 'manzana', cantidad: 11} , 
            { nombre: 'pera', cantidad: 0},
            { nombre: 'naranja', cantidad: 5}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods:{
        agregarFrutas(){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevafruta= '';
        }
    },
    computed: {
        sumarFrutas(){
            this.total= 0;
            for(fruta of this.frutas){
                this.total +=fruta.cantidad;
            }
            return this.total;
        }
    },

})