<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app class="floating-drawer">
      <MenuList />
    </v-navigation-drawer>

    <v-app-bar app class="ml-10 mt-1" color="#0DCE9A" dark>
      <v-toolbar-title>Dashboard</v-toolbar-title>
    </v-app-bar>

    <v-main class="ml-10 mt-5">
      <DashboardCardGroup />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    MenuList: () => import("./components/MenuList.vue"),
    DashboardCardGroup: () => import("./components/DashboardCardGroup.vue"),
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.floating-drawer {
  border: 0px;
  border-radius: 1%;
  box-shadow: 1px 1px 10px;
  margin: 4px 0px 0px 15px;
  max-height: 98vh !important;
}
</style>
