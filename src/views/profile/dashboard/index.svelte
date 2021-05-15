<script>
  import { currentUser } from '../../../stores/current_user'
  import { Icon } from 'svelte-fontawesome';
  import { faEnvelope, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
  import { faWhatsappSquare, faLine } from '@fortawesome/free-brands-svg-icons';
  import FormButtons from '../../components/forms/buttons.svelte'

  let updated = false;

  const hideUpdated = () => updated = false;
  const showUpdated = () => updated = true;

  const updateSetting = (key) => {
    hideUpdated();
    $currentUser[key] = !$currentUser[key];
    // do some stuffs
    setTimeout(() => {
      showUpdated();
    }, 1000);
  }

  const updateId = (event, key) => {
    hideUpdated();
    $currentUser[key] = event.currentTarget.value;
    setTimeout(() => {
      showUpdated();
    }, 1000);
  }
</script>

<style>
  .msg-setting {
    position: relative;
    display: flex;
    margin-left: 32px;
  }

  :global(.active .icon.icon-mail) {
    color: burlywood;
  }

  :global(.active .icon.icon-line) {
    color: rgb(46, 223, 46);
  }

  :global(.active .icon.icon-whatsapp) {
    color: rgb(97, 163, 97);
  }

  :global(.active .icon-check) {
    opacity: 1;
    color: green;
    position: absolute;
    font-size: 32px;
    top: 0px;
    left: 38px;
  }
  
  :global(.icon-check) {
    opacity: 0;
    position: absolute;
  }

  input {
    display: none;
  }
  .active input {
    display: block;
  }

  :global(.icon) {
    font-size: 64px;
    color: grey;
    margin-right: 32px;
    margin-bottom: 32px;
    width: 56px!important;
    cursor: pointer;
    /* filter: drop-shadow(0px 0px 4px rgba(0,0,0,0.3)); */
  }

  :global(.icon-check-static) {
    color: green;
  }
</style>

<div class="masonry row">
  <div class="col s8">
    <h2>Dashboard</h2>
    <!-- {JSON.stringify($currentUser)} -->
    <p>Donation messages will be sent every 1st of each month. <Icon class="icon-check-static" icon={faCheckCircle}/></p>
    <h3>Message settings</h3>
    <p>Select the way for us to send you our donatin suggestions:</p>
    <div class="msg-setting" class:active={$currentUser.email_subs}>
      <div on:click={ () => {updateSetting('email_subs')}}>
        <Icon  class="icon icon-mail" icon={faEnvelope}/>
        <Icon class="icon-check" icon={faCheckCircle}/>
      </div>
      <input on:change={(e) => updateId(e,'email')} type="text" value={$currentUser.email} placeholder="Enter your mail!">
    </div>
    
    <div class="msg-setting"  class:active={$currentUser.line_subs}>
      <div on:click={ () => {updateSetting('line_subs')}} >
        <Icon  class="icon icon-line" icon={faLine}/>
        <Icon class="icon-check" icon={faCheckCircle}/>
      </div>
      <input on:change={(e) => updateId(e,'line_id')} type="text" value={$currentUser.line_id} placeholder="Enter your ID!" >

    </div>

    <div class="msg-setting" class:active={$currentUser.whatsapp_subs}>
      <div on:click={ () => {updateSetting('whatsapp_subs')}}>
        <Icon class="icon icon-whatsapp" icon={faWhatsappSquare}/>
        <Icon class="icon-check" icon={faCheckCircle}/>
      </div>
      <input on:change={(e) => updateId(e,'whatsapp_id')} type="text" value={$currentUser.whatsapp_id} placeholder="Enter your ID!" >
    </div>
    {#if updated}
    <FormButtons class="btn-save" cancelButton={false} submitText="Saved!" />
    {/if}
  </div>
</div>
