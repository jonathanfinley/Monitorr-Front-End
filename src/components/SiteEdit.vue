<template>
  <md-card md-with-hover>
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
      <md-icon class="thumbsdown">thumb_down</md-icon>SITE IS OFFLINE
    </md-card-content>
    <md-divider />
    <md-card-actions>
      <div>
        <md-checkbox></md-checkbox>
        <md-tooltip>Service Enabled?</md-tooltip>
      </div>
      <div>
        <md-chip class="md-primary">
          <md-icon>edit</md-icon>
        </md-chip>
        <md-tooltip>Edit This Service</md-tooltip>
      </div>
      <div>
        <md-chip>
          <md-icon>drag_indicator</md-icon>
        </md-chip>
        <md-tooltip>Move</md-tooltip>
      </div>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  props: ["site", "message"]
};
</script>
