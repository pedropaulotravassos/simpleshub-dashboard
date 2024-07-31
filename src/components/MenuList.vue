<template>
  <v-card style="flex: 1" flat>
    <v-list>
      <v-list-item>
        <v-img
          src="https://www.simpleshub.com.br/img/sh-logo-navbar.726e03a1.svg"
        ></v-img>
      </v-list-item>

      <v-list-item link>
        <v-list-item-avatar tile>
          <v-img
            src="https://media.tenor.com/F06bFfXaIl8AAAAi/puglie-pug.gif"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text-h6"> John Doe </v-list-item-title>
          <v-list-item-subtitle>john@doe.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list nav dense>
      <v-list-item-group v-model="selectedItem" color="primary" class="pl-5">
        <v-list-item v-for="(item, i) in items" :key="i" class="pa-2">
          <v-list-item-icon>
            <v-icon v-if="item.icon" v-text="item.icon"></v-icon>
            <v-img v-else :src="item.img"></v-img>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      {
        text: "Resumo",
        img: require("@/assets/icons/custom-pie-char-icon.svg"),
      },
      { text: "Clientes", icon: "mdi-city-variant" },
      { text: "Emails", icon: "mdi-email" },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
