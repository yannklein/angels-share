import AdminLayout from '../../views/admin/layout/index.svelte'
import DashboardIndex from '../../views/admin/dashboard/index.svelte'

const protectedRoutes = [
  {
    name: 'admin',
    component: AdminLayout,
    nestedRoutes: [
      { name: 'index', component: DashboardIndex }
    ]
  }
]

export { protectedRoutes }
