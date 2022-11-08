<template>
    <div>
        <season-ticket 
        v-for = "item in listData"
        :key="item.id"
        :number="item.number"
        :number_of_newspapers="item.number_of_newspapers"
        :name="item.name"
        @open-info="openInfo(item.id)"
        @delete-item="onDelete(item.id)"
        />
    </div>
</template>

<script>
import SeasonTicket from './SeasonTicket.vue';
import { mapActions } from 'vuex'

export default({
    name: 'SeasonTicketsList',
    components: {
        SeasonTicket
    },
    props: {
            listData:{ 
                type: Array,
                default: () => [],
            },
        },
    methods:{
        ...mapActions(['deleteItemAction']),
        openInfo(itemId) {
                this.$router.push({
                    name: "database",
                    params: { id: itemId },
                })
            },
            onDelete(itemId) {
                this.deleteItemAction(itemId)
            },
    }
})
</script>
