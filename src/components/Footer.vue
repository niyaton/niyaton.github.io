<template>
  <section class="pan-layout-footer">
    <div class="pan-layout-footer-right">
      <div>
        <span v-if="$static.metadata.footer" class="pan-layout-footer__copyright" v-html="$static.metadata.footer.copyright_text"></span>
        <span>Original Theme is <a target="_blank" href="https://github.com/christianezeani/panthera-jekyll">Panthera Jekyll</a> by <a target="_blank" href="https://github.com/christianezeani">Christian Ezeani</a>.</span>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    footer {
      copyright_text
    }
  }
}
</static-query>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

</style>
