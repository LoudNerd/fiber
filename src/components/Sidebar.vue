<template>
  <v-navigation-drawer app>
    <v-img
      height="80"

      class="pa-4"
      src="https://www.fiberlinklimited.co.ke/wp-content/uploads/2022/01/logo-5.png"
    >
    
    <v-spacer> </v-spacer>
    
      <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img
            aspect-ratio="30"
            src="https://www.fiberlinklimited.co.ke/wp-content/uploads/2022/01/logo-5.png"
          />
        </v-avatar>
        <h2 class="white--text">FiberLink</h2>
      </div>

    </v-img>
    <v-divider></v-divider>

    <v-list>
        <v-spacer> </v-spacer>
      <v-list-item v-for="[icon, text] in links" :key="icon" link>
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
// @ is an alias to /src
export default {
 // eslint-disable-next-line vue/multi-word-component-names
 name: "Sidebar",
 props : ["drawer"],
  data() {
    return {
      links: [
        ["mdi-microsoft-windows", "Dashboard"],
        ["mdi-account", "Profile"],
        ["mdi-clipboard-list-outline", "Products"],
        ["mdi-card-account-details-outline", "Orders"],
        ["mdi-cog", "System Setting"],
      ],
    };
  },
};
</script>

<style scoped></style>