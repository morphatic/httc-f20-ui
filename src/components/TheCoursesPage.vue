<template>
  <v-row>
    <v-col class="text-h1" cols="12">
      Courses
    </v-col>
    <v-col cols="12">

      <v-dialog
        v-model="showAddNewCourseDialog"
        persistent
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            color="cyan lighten-3"
            large
            block
            v-on="on"
          >
            <v-icon>mdi-plus-box-outline</v-icon>
            Add New Course
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            Add New Course
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="newCourseTitle"
              label="Course Title"
              hint="Usually the dept and number"
              :rules="[
                v => !!v || 'Title is required!'
              ]"
              required
            />
            <v-select
              v-model="newCourseDifficulty"
              label="Course Difficulty"
              :items="['Introductory', 'Intermediate', 'Advanced']"
            />
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="warning"
              @click="showAddNewCourseDialog = false"
            >
              Cancel
            </v-btn>
            <v-spacer />
            <v-btn
              color="info"
              @click="saveNewCourse()"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-col>
    <v-col cols="12">
        <ul>
          <li v-for="course in courses" :key="course.id">
            {{ course.title }} ({{ course.difficulty }})
          </li>
        </ul>
    </v-col>
  </v-row>
</template>

<script>
import api from '@/services/api'
export default {
  name: 'TheCoursesPage',
  data: () => ({
    courses: [],
    newCourseTitle: '',
    newCourseDifficulty: 'Introductory',
    showAddNewCourseDialog: false
  }),
  mounted () {
    api.service('courses').find({}).then(
      result => {
        this.courses = result.data
      }
    )
  },
  methods: {
    saveNewCourse () {
      const title = this.newCourseTitle
      const difficulty = this.newCourseDifficulty
      api.service('courses').create({ title, difficulty }).then(
        result => {
          this.courses.push(result)
          this.showAddNewCourseDialog = false
        }
      )
    }
  }
}
</script>
