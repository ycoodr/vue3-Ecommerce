<template>
<h1>Employee of the month</h1>
<div v-if="personData">
<h3>{{ personData.name.first }} {{ personData.name.last }}</h3>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'EmployeeOfTheMonthPage',
    data(){
        return {
            personData: null,
        }
    },
    created(){
        // fetch('https://randomuser.me/api')
        // .then(response => response.json())
        // .then(data => this.personData = data.results[0]);

        axios.get('https://randomuser.me/api')
        .then(response => this.personData = response.data.results[0]);
    }
}
</script>