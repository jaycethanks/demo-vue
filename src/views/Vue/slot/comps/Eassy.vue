<template>
  <section class="eassy-container">
    <header class="eassy-header">
      <h1>
        <slot name="header" v-bind:anyname="title"></slot>
      </h1>
    </header>
    <main class="eassy-main">
      <slot name="main"></slot>
    </main>
    <footer class="eassy-footer">
      <slot name="footer"></slot>
    </footer>
  </section>
</template>
<script>
export default {
  props: ['title'],
}
</script>


<style>
.eassy-container {
  width: 500px;
  border: 3px double #dfdfdf;
  min-height: 600px;
  margin: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
.eassy-header,
.eassy-main,
.eassy-footer {
  width: 100%;
  margin: 2px;
  padding: 10px;
}
.eassy-header {
  min-height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: rgba(255, 99, 71, 0.075);
}
.eassy-main {
  min-height: 300px;
  background-color: rgba(170, 139, 0, 0.164);
}
.eassy-footer {
  min-height: 80px;
  line-height: 80px;
  background-color: rgba(0, 170, 156, 0.205);
}
</style>