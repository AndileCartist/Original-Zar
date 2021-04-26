<template>
  <div id="tab-links">
    <div>
        <ul>
            <li v-for="link in links"
              :key="link"  class="wrap">
                 <router-link :to="link.dest" tag="div" class="ripple" :style="{'textDecoration': 'none', 'color': ' rgb(53 47 51)', 'width': '259px','font-size': '20px'}">{{ link.name}}  </router-link>  
            </li>
        </ul>          
        
    </div>
  </div> 
</template>
<script>
export default {
  name: "tabLinks",
  props: {
     links: Array,
   },
  data() {
    return {};
  }
};
</script>
<style scoped>
ul {
    width: 260px;
    height: 316px;
    margin: 0 5px;
    padding-left: 10px;
    background: inherit;
    color: #413e3f;
    text-decoration: none
}
li {
  line-height: 38px;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  color: inherit;
  cursor: pointer;
  
}

li:hover {
  background: #a7a1a4;
}
.wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
   flex-direction: column;
  justify-content: space-between;
  align-items: center;
 
} 
.ripple {
  background-position: center;
  transition: background 0.6s;
}

.ripple:active {
  background-color: #8f8188;
  background-size: 100%;
  transition: background 0s;
} 
</style>