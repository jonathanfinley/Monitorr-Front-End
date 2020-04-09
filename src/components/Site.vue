<template>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ site.name }}</div>
            <div class="md-subhead">{{ site.url }}</div>
          </md-card-header-text>
          <div>
            <md-card-media>
              <img :src="site.icon" alt="Avatar" />
            </md-card-media>
          </div>
        </md-card-header>

        <md-card-content v-if="site.online">
          <md-icon class="thumbsup">thumb_up</md-icon>
          Ping Time: {{ site.time }}ms
        </md-card-content>
        <md-card-content v-else>
          <md-icon class="thumbsdown">thumb_down</md-icon>
          SITE IS OFFLINE
        </md-card-content>
      </md-ripple>
    </md-card>
</template>

<script>
export default {
  props: ["site", "message"],
};
</script>
