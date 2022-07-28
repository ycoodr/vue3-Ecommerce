<template>
<h1>Employee of the month</h1>
<div v-if="personData">
<h3>{{ personData.name.first }} {{ personData.name.last }}</h3>
</div>
</template>

<script>

import randomPersonMixin from '../mixins/randomPersonMixin';
export default {
    name: 'EmployeeOfTheMonthPage',
   mixins: [randomPersonMixin],
}
</script>