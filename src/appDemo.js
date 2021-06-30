const app = new Vue({
    el: '#vueApp',
    data: {
        Submit: 'Submits',
        currentRoute: 'form',
        currentFamily:{
            members: []
        }
    },
    methods: {
        AddMember: function(){
            this.currentFamily.members.push({});
        },
        RemoveMember: function(i) {
            console.log(i);
            this.currentFamily.members.splice(i, 1);
        }
    }
});

$(document).ready(function(){   
    $('#familiesListContainer').load("familiesList.html"); 
});