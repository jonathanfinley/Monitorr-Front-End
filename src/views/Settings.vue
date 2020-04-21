<template>
  <div class="settings">
    <h1>This is a settings page</h1>
    <div>
      <md-tabs>
        <md-tab id="tab-services" md-label="Services" md-icon="list_alt">
          <div class="home">
            <div class="md-layout md-alignment-top-center" v-if="sites.length > 0">
              <div class="md-layout-item" v-for="site in sites" v-bind:key="site.id">
                <Site :site="site" :message="randomVariable" />
              </div>
            </div>
          </div>
        </md-tab>
        <md-tab id="tab-app-settings" md-label="App Settings" md-icon="settings_applications">
          <div>Refresh Interval</div>
        </md-tab>
        <md-tab id="tab-user-settings" md-label="User Settings" md-icon="face">
          <div>Title</div>
          <div>URL</div>
          <div>Branch</div>
          <div>Timezome</div>
          <div>Time Standard</div>
          <div>Custom CSS</div>
        </md-tab>
        <md-tab id="tab-info" md-label="App Info" md-icon="info">
          <div>Info</div>
          <div>Monitorr Installed Version</div>
          <div>Monitorr Repo Version</div>
          <div>OS / Version</div>
          <div>Install Path</div>
          <div>DB Path</div>
          <div>Resources. (Github, Feathug, Docker, Discord, Donate)</div>
          <div>Release Log</div>
          <md-divider />
          <div>
            <h2>TO DO:</h2>
            <p>
              <br />- Finish Settings GUI Build
              <br />- Clean Up CSS
              <br />- Investivate Homepage stuff
              <br />- Footer
              <br />- Login logout things
              <br />- FontAwesome
            </p>
          </div>
        </md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Site from "@/components/SiteEdit.vue";

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
      randomVariable: "hello hello hello"
    };
  }
};
</script>