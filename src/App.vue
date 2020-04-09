<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary md-dense">
        <div class="md-toolbar-row">
          <img class="toolbar-logo" src="@/assets/logo.png" alt="Logo" />
          <span class="md-title">Monitorr</span>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon></md-button>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer class="md-right" :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item to="/">
            <span class="md-list-item-text">Home</span>
            <md-icon>home</md-icon>
          </md-list-item>

          <md-list-item to="/profile">
            <span class="md-list-item-text">Profile</span>
            <md-icon>send</md-icon>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">Settings</span>
            <md-icon>settings</md-icon>
          </md-list-item>

          <md-divider></md-divider>

          <md-list-item>
            <span class="md-list-item-text">Monitorr</span>
            <md-icon>error</md-icon>
          </md-list-item>

          <md-list-item>
            <md-icon>attach_money</md-icon>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css";
import "@/assets/css/main.scss";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["getSites"]),
  },
  mounted() {
    this.getSites();
    setInterval(() => {
      this.getSites();
    }, 10000);
  },
  data() {
    return {
      menuVisible: false,
    };
  },
};
</script>
