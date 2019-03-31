<template>
  <!-- If its not an action render a router-link -->
  <router-link
    v-if="!item.action && isVisible"
    :to="{ name: item.name }"
    class="TheNavigationItem"
  >
    {{ navLabel }}
  </router-link>
  <!-- Render a normal anchor with a click event calling the action property -->
  <a
    v-else-if="item.action && isVisible"
    href="#"
    @click.prevent="item.action"
  >
    {{ navLabel }}
  </a>
</template>

<script>
import { mapGetters } from 'vuex'
import { canAccess } from '../utils'

/**
 * @module TheNavigationItem
 */
export default {
  name: 'TheNavigationItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    // extract these getters from Vuex
    ...mapGetters(['isLoggedIn', 'user']),
    // Return the translated label
    navLabel () {
      return this.$t(this.item.meta.label)
    },
    // checks if the current item should be visible or not based on authentication permissions
    isVisible () {
      const auth = this.item.meta && this.item.meta.auth
      return canAccess(auth)
    }
  }
}
</script>

<style lang='scss'>

</style>
