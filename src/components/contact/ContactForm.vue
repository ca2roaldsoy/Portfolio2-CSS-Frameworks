<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label-for="firstname" label="First Name">
        <b-form-input
          name="firstname"
          id="firstname"
          v-model="firstname"
          required
          placeholder="First name..."
        />
      </b-form-group>

      <b-form-group label-for="lastname" label="Last Name">
        <b-form-input
          name="lastname"
          id="lastname"
          v-model="lastname"
          required
          placeholder="Last name..."
        />
      </b-form-group>

      <b-form-group label-for="telephone" label="telephone">
        <b-form-input
          name="telephone"
          id="telephone"
          v-model="lastname"
          required
          placeholder="telephone..."
        />
      </b-form-group>

      <b-form-group label-for="email" label="email">
        <b-form-input
          name="email"
          id="email"
          v-model="email"
          required
          placeholder="email..."
        />
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",

  data() {
    return {
      firstname: "",
      lastname: "",
      telephone: "",
      email: "",
      errors: [],
    };
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();
    },
    onReset(e) {
      e.preventDefault();
      this.firstname = "";
    },
  },

  computed: {
    validate() {
      return this.firstname.length > 1, this.lastname.length > 1;
    },
  },
};
</script>
