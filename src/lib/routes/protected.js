import ProfileLayout from '../../views/profile/layout/index.svelte'
import DashboardIndex from '../../views/profile/dashboard/index.svelte'
import NpoIndex from '../../views/profile/npo/index.svelte'

const protectedRoutes = [
  {
    name: 'profile',
    component: ProfileLayout,
    nestedRoutes: [
      { name: 'index', component: DashboardIndex },
      { name: 'npo', component: NpoIndex }
    ]
  }
]

export { protectedRoutes }
