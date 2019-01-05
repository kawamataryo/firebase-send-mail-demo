<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout row justify-center>
          <v-flex md8> <contact-form/> </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
  name: "App",
  components: {
    ContactForm
  }
};
</script>
