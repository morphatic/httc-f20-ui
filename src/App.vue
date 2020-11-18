<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-bottom-navigation
      color="blue"
    >
      <v-btn to="/students">Students</v-btn>
      <v-btn to="/courses">Courses</v-btn>
      <v-btn to="/subjects">Subjects</v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>

</style>
