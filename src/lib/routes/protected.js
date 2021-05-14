import ProfileLayout from '../../views/profile/layout/index.svelte'
import DashboardIndex from '../../views/profile/dashboard/index.svelte'

const protectedRoutes = [
  {
    name: 'profile',
    component: ProfileLayout,
    nestedRoutes: [
      { name: 'index', component: DashboardIndex }
    ]
  }
]

export { protectedRoutes }
