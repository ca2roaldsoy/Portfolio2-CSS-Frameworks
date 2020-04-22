<template>
  <div>
    <h1>Contact us</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quisquam
      suscipit recusandae ex impedit officiis voluptate libero sunt, labore
      explicabo eligendi ratione voluptas nulla minus fugiat neque magni quas!
      Qui?
    </p>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "./components/contact/ContactForm";

export default {
  name: "ContactComponent",
  components: { ContactForm },
};
</script>
