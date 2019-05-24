var app = new Vue({
    el: '#app1',
    data: {
      senateData: [],
      url: "",
      pw: "W0e4QOiJNvMVHrhETcK3K9BLyMDSeQ2nDfLK0tgr",
      filter1: [],
      filter2: [],
      select:"",
      text:"",
      pathname:window.location.pathname,
    },
    methods: {
      getFech: function () {
        fetch(this.url, {
          method: 'GET',
          headers: new Headers({
          //  header('content-type: application/json; charset=utf-8');
            'X-API-Key': this.pw
          })
        }).then(response => response.json())
          .then(data => {
            this.senateData = data.results[0].members;
          })
          .catch(err => console.log(err))
      },
      cargaPag: function(){
  
         if(this.pathname.includes('/senate.html')){
           this.url="https://api.propublica.org/congress/v1/115/senate/members.json";
           this.text ="First convened in 1789, the composition and powers of the Senate are established in Article One of the U.S. Constitution. Each state is represented by two senators, regardless of population, who serve staggered six-year terms. The Senate has several exclusive powers not granted to the House, including consenting to treaties as a precondition to their ratification and consenting to or confirming appointments of Cabinet secretaries, federal judges, other federal executive    officials, military officers, regulatory officials, ambassadors, and other federal uniformed officers, as well as trial of federal officials impeached by the House.";
          }
         else if(this.pathname.includes('/house.html')){
           this.url = "https://api.propublica.org/congress/v1/115/house/members.json";
           this.text = "First convened in 1789, the composition and powers of the Senate are established in Article One of the U.S. Constitution. Each state is represented by two senators, regardless of population, who serve staggered six-year terms. The Senate has several exclusive powers not granted to the House, including consenting to treaties as a precondition to their ratification and consenting to or confirming appointments of Cabinet secretaries, federal judges, other federal executive officials, military officers, regulatory officials, ambassadors, and other federal uniformed officers, as well as trial of federal officials impeached by the House."
       }
      },
    },
      computed: {
      mostrarTabla: function() {
  
         if(this.select != "all"){
         return this.filter2 = this.senateData.filter ((dato) => (dato.party == this.filter1[0] ||
         dato.party == this.filter1[1] ||  dato.party == this.filter1[2]) && dato.state == this.select );
         }
         else{
          return this.filter2 = this.senateData.filter ((dato) => (dato.party == this.filter1[0] ||
            dato.party == this.filter1[1] ||  dato.party == this.filter1[2]) );
         }
  
     },
  
    },
  
      created() {
        this.cargaPag();
        this.getFech();
      },
  
    });