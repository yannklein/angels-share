<script>
  import SidebarMenu from './menu.svelte'
  export const currentUser = {}
  let userMenuItems = [
    { to: '/', icon: 'home', title: 'Home' },
    { to: '/profile/', icon: 'dashboard', title: 'Dashboard' }]
</script>

<style>
  .sidenav-fixed {
    margin-top: 64px;
  }
</style>

<ul id="sidenav-left" class="sidenav sidenav-fixed">
  <li>
    <h5 class="center">Main menu</h5>
  </li>
  <SidebarMenu items={userMenuItems} />
</ul>
