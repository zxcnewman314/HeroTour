// src\components\Heroes.vue


<script>
import { computed, reactive, toRefs } from "vue";
import { hr1 } from "../HeroInfo";
export default {
  name: 'HeroDetail',
  props: ["hero"],
  setup(props){
     let hero = toRefs(props);
    let heromen =hr1;
      let selectedHero = reactive({});
    function onSelect(hero) {
      Object.assign(this.selectedHero,hero);
    }
     let heroCap= computed(() => {
      return (
        props.hero.name &&
        props.hero.level &&
        props.hero.id
      );
    });
      return {
      heromen,
      selectedHero,
       onSelect,
     heroCap
    }},
  
};
</script>
<template>
  <div v-if="hero.name">
       <h2>{{ heroCap }} Details of SuperHero</h2>>
     <div> <span>id :</span>{{hero.id}}</div>
  <div><lable>id:
    <input v-model="hero.id" placeholder="id">
  </lable>
  <lable>level:
    <input v-model="hero.level" placeholder="level">
  </lable>
  </div>
  </div>
</template>
<style scoped>
/* maHero.vue私有样式 */
.HeroDetail {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.HeroDetail li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.HeroDetail li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
.HeroDetail li.selected {
  background-color: #CFD8DC;
  color: white;
}
.HeroDetail li.selected:hover {
  background-color: #BBD8DC;
  color: white;
}
.HeroDetail .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color:#405061;
  line-height: 0.2em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
</style>

