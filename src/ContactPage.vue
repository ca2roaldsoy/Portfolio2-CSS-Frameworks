<template>
  <div class="container mt-3">
    <h1>Contact us</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem
      pariatur quos minima, rerum omnis quas blanditiis dignissimos deserunt
      illum alias facere animi optio nesciunt praesentium earum minus laborum
      harum?
    </p>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "./components/contact/ContactForm";

export default {
  name: "ContactPage",
  components: { ContactForm },
};
</script>
