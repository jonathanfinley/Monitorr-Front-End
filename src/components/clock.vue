<template>
  <clock :time="time"></clock>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Clock from 'vue-clock2';
  export default {
    components: { Clock },
    methods: {
      ...mapActions(['getTime']),
    },
    computed: {
      ...mapState(['time']),
    },
    mounted() {
      this.getTime();
    }
  }
</script>