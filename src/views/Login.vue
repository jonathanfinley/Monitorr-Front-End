<template>
  <div class="login">
    <h1>This is an login page</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Site from "@/components/Site.vue";

export default {
  name: "Home",
  computed: {
    ...mapState(["sites"])
  },
  components: {
    Site
  },
  data() {
    return { 
      randomVariable: 'hello hello hello',
    };
  }
};
</script>