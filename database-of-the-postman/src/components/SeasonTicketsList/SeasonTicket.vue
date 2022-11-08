<template>
    <div class="table">
        <table>
            <tr>
                <th>Номер будинку</th>
                <th>кількість газет що виписуються</th>
                <th>Перелік назв газет</th>
            </tr>
            <tr>
                <td>{{number}}</td>
                <td>{{number_of_newspapers}}</td>
                <td>{{name}}</td>
                <td><button @click.stop="$emit('open-info')">button</button></td>
                <td><button @click.stop="$emit('delete-item')">delete</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'SeasonTicket',
        props: {
            number: {
                type: Number,
                default: 0,
            },
            number_of_newspapers: {
                type: Number,
                default: 0,
            },
            name: {
                type: String,
                default: "No names"
            }
        }
    }
</script>

<style>
    .table th{
        border: 1px solid black
    }
    .table td{
        border: 1px solid black
    }
</style>