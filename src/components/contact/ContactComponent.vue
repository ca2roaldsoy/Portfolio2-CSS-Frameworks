<template>
  <ContactForm
    :showFirstNameErr="showFirstNameErr"
    :showLastNameErr="showLastNameErr"
    :showPhoneErr="showPhoneErr"
    :showEmailErr="showEmailErr"
    @click="onClick"
  />
</template>

<script>
import ContactForm from "./ContactForm";

export default {
  name: "ContactComponent",
  components: {
    ContactForm,
  },

  data() {
    return {
      ErrMsg: "Please enter name",
    };
  },
};
</script>
