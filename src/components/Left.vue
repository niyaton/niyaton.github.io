<template>
  <section
      class="pan-layout-left"
      :style="bgImageAndColor"
  >
    <section
        class="pan-layout-left__overlay"
        :style="overlayStyle"
    />

    <div class="pan-layout-left__top">
      <div class="pan-layout-left__avatar">
        <a href="/">
          <img :src="$static.metadata.avatar" :alt="$static.metadata.siteName" />
        </a>
      </div>

      <div class="pan-layout-left__info">
        <h1 class="pan-layout-left__title">
          {{ $static.metadata.siteName }}
        </h1>

        <h3 class="pan-layout-left__subtitle" v-if="$static.metadata.siteSubName">
          {{ $static.metadata.siteSubName }}
        </h3>
      </div>
    </div>

    <div class="pan-layout-left__middle">
      <!-- TODO add menu here -->
      <ul class="pan-layout-left__menu">
        <li><g-link to="/">Home</g-link></li>
        <li><g-link to="/about">About</g-link></li>
        <li><g-link to="/publications">Publications</g-link></li>
      </ul>
    </div>

    <div class="pan-layout-left__bottom">
      <div class="pan-layout-left__small">
        <span>GET IN TOUCH</span>
      </div>
      <div class="pan-layout-left__social">
        <ul v-if="$static.allSocialIcons">
          <li v-for="edge in $static.allSocialIcons.edges">
            <a target="_blank" :href="edge.node.link">
              <font-awesome :icon="edge.node.icon.split(' ')"></font-awesome>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- original code for close button
    <div
        class="pan-layout-left__close"
        {% if site.left_side %}
        style="{% if site.left_side.close_button_color %}color: {{ site.left_side.close_button_color }} !important;{% endif %}"
        {% endif %}
    >
      <i class="fa fa-fw fa-times"></i>
    </div>
    -->
    <div class="pan-layout-left__close" v-on:click="$emit('closeMenu')">
      <font-awesome :icon="'times'" fixed-width></font-awesome>
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    siteName
    siteSubName
    avatar
    left_side {
      background_image
      text_color
    }
  }
  allSocialIcons(sortBy: "id", order: ASC) {
    edges {
      node {
        name
        link
        icon
      }
    }
  }
}
</static-query>

<script>

export default {
  name: "Left",
  computed: {
    bgImageAndColor: function () {
      console.debug("hello!");
      if (!this.$static.metadata.left_side)
        return "color: red;";
      console.debug("hello!");
      let style = []
      if (this.$static.metadata.left_side.background_image) {
        style.push(`background-image: url(${this.$static.metadata.left_side.background_image});`);
      }
      if (this.$static.metadata.left_side.text_color) {
        style.push(`color: ${this.$static.metadata.left_side.text_color};`);
      }
      return style.join(" ");
    },
    overlayStyle: function () {
      return this.$static.metadata.left_side ? "background-color: " + this.$static.metadata.left_side.background_color + " !important" : "";
    },
  }
}
</script>

<style scoped>

</style>
