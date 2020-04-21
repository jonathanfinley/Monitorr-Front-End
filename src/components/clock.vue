<template>
  <clock :time="time"></clock>
</template>

<script>
  import { mapState, mapAction } from 'vuex';
  import Clock from 'vue-clock2';
  export default {
    components: { Clock },
    methods: {
      ...mapAction(['getTime']),
    },
    computed: {
      ...mapState(['time']),
    },
    mounted() {
      this.getTime();
    }
  }
</script>