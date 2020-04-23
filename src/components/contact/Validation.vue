<template>
  <ContactForm :userNameErr="userNameErr" />
</template>

<script>

import ContactForm from "./ContactForm"

export default {
    name: "Validation",
    components: {ContactForm},

    data() {
        return {
            userNameErr: false 
        }
    },

    methods: {
        onSubmit(userName) {
            if(userName)
        }
    }
}
</script>