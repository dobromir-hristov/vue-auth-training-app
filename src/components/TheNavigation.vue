<template>
  <div class="TheNavigation">
    <the-navigation-item
      v-for="item in navigationItems"
      :key="item.name"
      :item="item"
    />
  </div>
</template>

<script>
import TheNavigationItem from './TheNavigationItem'
import { routes } from '../router/route-definitions'

/**
 * @module TheNavigation
 */
export default {
  name: 'TheNavigation',
  components: { TheNavigationItem },
  data () {
    return {
      navigationItems: [
        {
          ...routes.home
        },
        {
          meta: {
            label: 'navigations.logout',
            auth: true
          },
          action: () => this.$store.dispatch('logout')
        },
        {
          ...routes.about
        },
        {
          ...routes.cpanel
        },
        {
          ...routes.login
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
.TheNavigation {
  a {
    margin-right: 10px;
  }
}
</style>
