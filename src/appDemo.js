const app = new Vue({
    el: '#vueApp',
    data: {
        currentRoute: 'form',
        currentFamily:{
            members: []
        },
        familyDataSet: []
    },
    methods: {
        AddMember: function(){
            this.currentFamily.members.push({});
        },
        RemoveMember: function(i) {
            this.currentFamily.members.splice(i, 1);
        },
        Submit: function(){
            this.familyDataSet.push(this.currentFamily);
            this.currentRoute = 'list'
        }
    }
});
