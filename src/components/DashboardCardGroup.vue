<template>
  <v-card height="380" width="600" rounded="xl">
    <v-card-title> Clientes </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <v-card height="120" width="260" outlined rounded="xl">
            <v-card-subtitle> Clientes Cadastrados </v-card-subtitle>
            <v-card-text>
              <h1>
                <v-icon class="mr-2">mdi-domain</v-icon>
                {{ clientCount }}
              </h1>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card flat color="#E2E8F0" rounded="xxl" @click="addClientCount">
            <v-card-text>
              <v-row align="end" style="height: 110px">
                <v-col cols="12" class="pb-0 mb-0">
                  <v-icon>mdi-account-plus</v-icon>
                </v-col>
                <v-col>
                  <span>Adicionar clientes</span>
                </v-col>
                <v-col cols="auto">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="end">
        <v-col>
          <h3 class="mt-2 mb-1">Certificados Digitais</h3>
          <v-card height="120" width="260" outlined rounded="xl">
            <v-card-text class="pa-1">
              <v-row align="center" dense>
                <v-icon x-large color="success">mdi-circle-small</v-icon>
                <strong class="mr-2">{{ 118 }}</strong>
                Integrados
              </v-row>
              <v-row align="center" dense>
                <v-icon x-large color="warning">mdi-circle-small</v-icon>
                <strong class="mr-2">{{ 36 }}</strong>
                Vencem em breve
              </v-row>
              <v-row align="center" dense>
                <v-icon x-large color="error">mdi-circle-small</v-icon>
                <strong class="mr-2">{{ 3 }}</strong>
                vencidos
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card flat color="#E2E8F0" rounded="xxl">
            <v-card-text>
              <v-row align="end" style="height: 110px">
                <v-col cols="12" class="pb-0 mb-0">
                  <v-icon>mdi-file-certificate</v-icon>
                </v-col>
                <v-col>
                  <span>Gerenciar certificados</span>
                </v-col>
                <v-col cols="auto">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { db } from "@/service/firebase-db";
export default {
  data() {
    return {
      clientCount: 0,
    };
  },
  methods: {
    async getClientCount() {
      this.clientCount = (await db.get()).child("count").val();
    },
    async addClientCount() {
      await (await db.child("count")).set(this.clientCount++);
    },
  },
  mounted() {
    this.getClientCount();
  },
};
</script>
