<template>
  <div class="home">
    <div class="md-layout md-alignment-top-center" v-if="sites.length > 0">
      <div class="md-layout-item" v-for="site in sites" v-bind:key="site.id">
        <Site :site="site" :message="randomVariable" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Site from "@/components/Site.vue";

export default {
  name: "Home",
  computed: {
    ...mapState(["sites"]),
  },
  components: {
    Site,
  },
  data() {
    return {
      randomVariable: "hello hello hello",
    };
  },
};
</script>
