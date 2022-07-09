
<template>
  <div>
    <h2>Messages</h2>
    <button 
	    class="clear" 
	    @click="messageService.clear()"
	>clear
	</button>
    <div 
    	v-for="message in messageService.messages.value" 
    	:key="message"
    >{{ message }}</div>
  </div>
</template>
<script>
import MessageService from '../composables/messageServices';
export default {
  name: "message",
  setup() {
    return {
      messageService: new MessageService()
    };
  },

};


</script>
