<template>
    <h1>User info</h1>
    <div v-if="shouldShowValidationErrors">
    <div v-for="error in validationErrors" :key="error">
    {{ error }}
    </div></div>
    <div>
        <input placeholder="Name" v-model="name" />
        <input placeholder="Age" type="number" v-model.number="age" />
        <input placeholder="Address" v-model="address" />
        <button @click="displayData">Save</button>
    </div>
</template>



<script>
        export default {
           name: 'UserInfoPage',
           data(){
            return {
                name: '',
                age: 0,
                address: '',
                shouldShowValidationErrors: false,
            };
           },
           methods: {
            displayData(){
                this.shouldShowValidationErrors = true;
                alert(`name is ${this.name}, age is ${this.age},
                address is ${this.address}`);
            }
           },
           computed: {
            validationErrors(){
                let errors = [];

                if(this.name.length < 2){
                    errors.push("Please enter a name longer than 2 characters");
                }

                if(this.age < 16){
                    errors.push("Age must be 16 or greater");
                }

                if(this.address.length <= 5){
                    errors.push("Please enter an address longer than 4 characters");
                }

                return errors;
            }
           }
        }
</script>