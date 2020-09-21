<template>
  <div class="layout">
    <section class="pan-layout">
      <Left />
      <section class="pan-layout-overlay"></section>

      <section class="pan-layout-right">
        <Header />
        <section class="pan-layout-content">
          <slot/>
        </section>
      </section>

      <slot name="footer" />
      <Footer />
    </section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Left from "../components/Left";
export default {
  components: {Footer, Header, Left}
}
</script>
