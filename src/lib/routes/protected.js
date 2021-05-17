import ProfileLayout from '../../views/profile/layout/index.svelte'
import DashboardIndex from '../../views/profile/dashboard/index.svelte'
import NgoIndex from '../../views/profile/ngo/index.svelte'

const protectedRoutes = [
  {
    name: 'profile',
    component: ProfileLayout,
    nestedRoutes: [
      { name: 'index', component: DashboardIndex },
      { name: 'ngo', component: NgoIndex }
    ]
  }
]

export { protectedRoutes }
