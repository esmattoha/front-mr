<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    
    >
     <v-list
          dense
          rounded
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title >{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar 
      app  
      color="#78909C"
      dark
      >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title >Home</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm--and-down">
        <v-btn text v-bind:to="{name : 'AddMovie'}">Add Movie</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <div id="app">
          <router-view></router-view>
        </div>
      </v-container>
    </v-content>
    <v-footer app color="#B0BEC5">
      <span class="purple--text ma-auto">&copy; Dipu, 2021</span>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
       drawer: null,
         items: [
          { title: 'Home', icon: 'mdi-home', to:'/' },
          { title: 'Contact', icon: 'mdi-contacts', to:'/contact' },
        ],
        right: null,
       
    })
  }
</script>