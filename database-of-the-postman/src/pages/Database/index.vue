<template>
    <div>
      <div>
        <master-pages>
          <template v-slot:my-link1>
            <router-link to="/">Main</router-link>
          </template>
          <template v-slot:my-link2>
            <router-link to="/about">About</router-link>
          </template>
          <h1>Database</h1>
        </master-pages>
        
      </div>  
      <season-ticket
      v-if="receivedSeasonTicketId"
      :number="currentSeasonTicket.number"
      :number_of_newspapers="currentSeasonTicket.number_of_newspapers"
      :name="currentSeasonTicket.name"
      />

      <season-tickets-list v-else :list-data="SeasonTicketsList"/>
    </div>
    
    
</template>
  
<script>
  import MasterPages from '@/masterpages/MasterPages.vue'
  import SeasonTicketsList from '@/components/SeasonTicketsList'
  import SeasonTicket from '@/components/SeasonTicketsList/SeasonTicket.vue';

  import {mapGetters } from 'vuex';
  export default {
    name: "Database",

    components: {
        SeasonTicketsList,
        SeasonTicket,
        MasterPages,
    },

    computed: {
        ...mapGetters(["SeasonTicketsList", "getSeasonTicketById"]),
        receivedSeasonTicketId() {
          return this.$route.params.id
      },
      currentSeasonTicket() {
        return this.getSeasonTicketById(this.$route.params.id)
      },
      
    },

  }
</script>

<style>

</style>