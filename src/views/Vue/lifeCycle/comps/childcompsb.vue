<template>
  <div>
    <h2>compb</h2>
    <p>{{content}}</p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      content:'default'
    }
  },
  methods:{
    init(content){
      this.content = content;
    }
  },
  created(){
    console.log("childcompsb_created",'--line20');
  },
  mounted(){
    console.log('this_is_childcompsb:$mounted','--line23');
  }
}
</script>