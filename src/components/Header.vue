<template>
  <section class="pan-layout-header">
    <div class="pan-layout-header__menutoggle">
      <font-awesome :icon="'bars'" v-on:click="$emit('openMenu')"></font-awesome>
    </div>

    <div class="pan-layout-header__content">
      <div class="pan-layout-header__avatar">
        <span>{{ $static.metadata.siteName }}</span>

        <g-link to="/">
          <img :src="$static.metadata.avatar" alt="">
        </g-link>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    siteName
    avatar
  }
}
</static-query>

<script>
export default {
name: "Header"
}
</script>

<style scoped>

</style>
