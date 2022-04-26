<template>
  <div class="view-content">

    <section class="not-found-section">

      <div class="not-found-title">Page introuvable</div>

      <div class="details">
        <p>La page que vous cherchez n'est pas accessible.
        <br>
        <router-link class="home-link" to="/">> Accueil</router-link></p>
      </div>

    </section>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc view containing redirection informations
 */
@Component({
  components: {
  }
})
export default class NotFoundView extends Vue {
}
</script>

<style scoped lang="scss">

  .not-found-section {
    max-width: 50rem;
    margin: 80px auto;
  }

  .not-found-title {
    font-size: 2em;
    font-weight: 900;
    color: var(--light);

    text-align: left;
  }

  .details {
    font-size: 1em;
    color: var(--light);
    text-align: left;
  }

  .home-link {
    color: var(--v-secondary-lighten3);
    text-decoration: none;
    transition: 0.3s;
  }

  .home-link:hover {
    color: var(--v-secondary-lighten4);
  }
</style>
