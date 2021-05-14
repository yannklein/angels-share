<script>
  import { currentUser } from '../../../stores/current_user'

</script>

<div class="masonry row">
  <div class="col s12">
    <h2>Dashboard</h2>
    {JSON.stringify($currentUser)}
    <p>You're all fine! the donation message will be sent every 1st of each month!</p>
  </div>
</div>
