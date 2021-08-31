<!--
 * @Author: jayce
 * @Date: 2021-06-29 15:10:35
 * @LastEditTime: 2021-07-14 13:30:56
 * @Description: 
 * @FilePath: \demo-vue\src\views\TestCodemirror\index.vue
 *  
-->
<template>
  <div>
    <codemirror :value="code" :options="cmOptions" @ready="onCmReady" @focus="onCmFocus" @input="onCmCodeChange" />
    
  </div>

</template>


<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

export default {
  data() {
    return {
      code: 'const a = 10',
      cmOptions: {
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        // more CodeMirror options...
      },
    }
  },
  components: {
    codemirror
  },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focused!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    }
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    }
  }
}



</script>