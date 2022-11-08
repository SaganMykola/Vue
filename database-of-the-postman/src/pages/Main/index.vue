<template>
    <master-pages>
      <template v-slot:my-link1>
         <router-link to="/database">Database</router-link>
      </template>
  
      <template v-slot:my-link2>
        <router-link to="/about">About</router-link>
      </template>
  
      <h1>Main</h1>
  
    </master-pages>
  </template>
    
    <script>
    import MasterPages from '@/masterpages/MasterPages.vue'
    export default {
      name: 'Main',
  
      components: {
      MasterPages,
    },
  
  }
    </script>
    