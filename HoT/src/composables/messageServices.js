import { ref } from 'vue'
export default class MessageService {
  constructor(){
    if(!MessageService.instance){
      this.messages = ref([]);
      MessageService.instance = this;
    }
    return MessageService.instance
  }
  add(message) {
    this.messages.value.push(message);
  }
  clear() {
    this.messages.value = [];
  }
}
