<script>
  import SidebarMenu from './menu.svelte'
  import { _ } from '../../../../locales/i18n';
  
  export const currentUser = {}
  let userMenuItems = [
    { to: '/', icon: 'home', title: $_('profile.sidebar.home_icon') },
    { to: '/profile/', icon: 'dashboard', title: $_('profile.sidebar.dashboard_icon') },
    { to: 'profile/npo/', icon: 'volunteer_activism', title: $_('profile.sidebar.npo_icon') }]
</script>

<style>
  .sidenav-fixed {
    margin-top: 64px;
  }
</style>

<ul id="sidenav-left" class="sidenav sidenav-fixed">
  <li>
    <h5 class="center">{$_('profile.sidebar.main_menu')}</h5>
  </li>
  <SidebarMenu items={userMenuItems} />
</ul>
