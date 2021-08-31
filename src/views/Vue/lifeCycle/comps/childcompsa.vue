<template>
  <div>
    <div v-if="visible">
    <h2>compa</h2>
    <childcompsb @hook:mounted="childMounted" ref="childcompsb"/>
    </div>
  </div>
</template>
<script>
import childcompsb from './childcompsb.vue'
export default {
  data(){
    return{
      visible:false,
      midRecord:''

    }
  },
  components:{
    childcompsb
  },
  methods:{
    show(content){
      this.visible = true;
      this.midRecord = content;
      // this.$refs.childcompsb.init(content);

      
      console.log(this.$refs.childcompsb,'--line24');
    },

    childMounted(){
      console.log("comps trigger",'--line30');
      this.$refs.childcompsb.init(this.midRecord);
    }
  },
  
  mounted(){
    console.log('this_is_childcompsa:$mounted','--line25');
  }
}
</script>