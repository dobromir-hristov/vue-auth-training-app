<template>
  <router-link
    v-if="!item.action && isVisible"
    :to="{ name: item.name }"
    class="TheNavigationItem"
  >
    {{ navLabel }}
  </router-link>
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
    ...mapGetters(['isLoggedIn', 'user']),
    navLabel () {
      return this.$t(this.item.meta.label)
    },
    isVisible () {
      const auth = this.item.meta && this.item.meta.auth
      return canAccess(auth)
    }
  }
}
</script>

<style lang='scss'>

</style>
