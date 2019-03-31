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
      // create an array of routes. We use destructuring to extract data for each route
      navigationItems: [
        {
          ...routes.home
        },
        // this is a custom action nav item, not a route
        {
          meta: {
            label: 'navigations.logout',
            auth: true
          },
          // action to trigger. We pass a function as a property.
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
