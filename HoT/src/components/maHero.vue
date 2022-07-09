// src\components\Heroes.vue

<script>
import { computed, reactive } from "vue";
import fetchHerosq from "../composables/fetchHero";

import { hr1 } from "../HeroInfo";
import HeroDetail from "./HeroDetail.vue";
import message from "./message.vue";
import fetchHeros from '../composables/fetchHero';
import MessageService from "../composables/messageServices.js";
import fetchHeroes from "../composables/fetchHero.js";
export default {
  name: 'maHero',
   components: { HeroDetail,message },
  setup(){
    let messageService = new MessageService();
    let mahero=fetchHeros();
      let selectedHero = reactive({});
    function onSelect(hero) {
      Object.assign(selectedHero,hero);
      messageService.add(hero.name); 
    }
    function setId(id){
          console.log(id)
          return id
    }
    // let heroCap;
      return {
     mahero,
      selectedHero,
       onSelect,
       setId
    //   heroCap:hero.name.charAt(0).toUpperCase() + hero.name.slice(1)
    }},
  
};
</script>
<template>
  <div>
         <h2>超强英雄</h2>
  <ul class="maHero">
     <li v-for="hero in  mahero"  v-bind:key='hero.id' @click=" onSelect(hero)" :class="{'selected': 
     hero.id === selectedHero.id}">
      <span class="badge"  v-if="hero.level>80" ><span>id: </span>{{ hero.id }} <span>
        姓名: </span>{{ hero.name }}
       
        <br>
        <br>
       <div style="float: right;  margin: 5px; ">
    name<br><label style="">
      <input v-model="selectedHero.name" placeholder='selectedHero.name'/>
    </label>
    level<label>
      <input v-model="selectedHero.level" placeholder="input level" />
    </label>
  </div>
  </span>
    </li>
  </ul>
  <HeroDetail :hero="selectedHero" />
  </div>
</template>

<style scoped>
/* maHero.vue私有样式 */
.maHero {
  margin: 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.maHero li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 7.6em;
  border-radius: 4px;
}
.maHero li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
.maHero li.selected {
  background-color: #CFD8DC;
  color: white;
}
.maHero li.selected:hover {
  background-color: #BBD8DC;
  color: white;
}
.maHero .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color:#405061;
  line-height: 0.2em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 7.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
</style>

