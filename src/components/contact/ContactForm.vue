<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div class="row">
      <v-text-field
        v-model="firstname"
        :rules="firstNameRules"
        placeholder="First Name..."
        required
        class="form-group col-lg-6"
      ></v-text-field>

      <v-text-field
        v-model="lastname"
        :rules="lastNameRules"
        placeholder="Last Name..."
        required
        class="form-group col-lg-6"
      ></v-text-field>

      <v-text-field
        v-model="telephone"
        :rules="telRules"
        placeholder="Telephone..."
        required
        class="form-group col-lg-12"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        placeholder="Email..."
        required
        class="form-group col-lg-12"
      ></v-text-field>
    </div>

    <v-btn
      :disabled="!valid"
      class="mr-4 col-sm-2 btn btn-warning"
      @click="submit"
    >
      Submit
    </v-btn>

    <v-btn class="mr-4 col-sm-2 btn btn-danger" @click="reset">
      Reset Form
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "ContactForm",

  data: () => ({
    valid: true,
    firstname: "",
    firstNameRules: [(v) => !!v || "First name is required"],
    lastname: "",
    lastNameRules: [(v) => !!v || "Last name is required"],
    telephone: "",
    telRules: [
      (v) => !!v || "Telephone Number is required",
      (v) => /[0-9]/.test(v) || "Telephone must be a number",
    ],

    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    submit() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="scss">
label {
  position: inherit !important;
}

input {
  width: 100%;
  padding: 5px;
}

.v-messages {
  color: red !important;
  padding-top: 5px;
  font-size: 14px;
}
</style>
