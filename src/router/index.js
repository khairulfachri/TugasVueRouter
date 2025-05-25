import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import CourseList from '../views/CourseList.vue'
import MyCourses from '../views/MyCourses.vue'
import CourseDetail from '../views/CourseDetail.vue'
import CourseMaterials from '../views/CourseMaterials.vue'
import CourseAssignments from '../views/CourseAssignments.vue'
import Progress from '../views/Progress.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'

const routes = [
  { path: '/views', component: Dashboard },
  { path: '/views/courses', component: CourseList },
  { path: '/views/my-courses', component: MyCourses },
  { path: '/views/course-detail', component: CourseDetail },
  { path: '/views/course-materials', component: CourseMaterials },
  { path: '/views/course-assignments', component: CourseAssignments },
  { path: '/views/progress', component: Progress },
  { path: '/views/profile', component: Profile },
  { path: '/views/settings', component: Settings },
  { path: '/', redirect: '/views' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
