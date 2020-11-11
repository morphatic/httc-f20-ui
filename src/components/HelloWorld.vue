<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col cols="4">
        <ul>
          <li v-for="course in courses" :key="course.id">
            {{ course.title }} ({{ course.difficulty }})
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from '@/services/api'
export default {
  name: 'HelloWorld',
  data: () => ({
    courses: []
  }),
  mounted () {
    api.service('courses').find({}).then(
      result => {
        this.courses = result.data
      }
    )
  }
}
</script>
