<script>
  import SidebarItem from './item.svelte'

  export let items = []
</script>

{#each items as item, index}
  <SidebarItem {item} />
{/each}
