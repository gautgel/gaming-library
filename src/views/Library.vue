<template>
    <div class="library">
        <SearchBar v-on:handleEnter="handleKeyEnter($event)" v-on:handleSearch="handleChange($event)"></SearchBar>
        <Animation v-if="!done" v-on:endAnimation="animationEnded($event)"></Animation>
        <div v-else class="card_container">
        <Card v-for="game in searchFilter" v-bind:key="game.name" v-bind:name="game.name" v-bind:rate="game.rate" v-bind:platforms="game.platform" v-bind:release-d="game.releaseD" v-bind:picture-src="game.cover" ></Card>
        </div>
    </div>
</template>
<script>
// @ equals src path
import Animation from '@/components/Animation.vue'
import SearchBar from '@/components/libraryVue/SearchBar.vue'
import Card from '@/components/games/Card.vue'
import api from '@/assets/games/api/gamesApi.js'


export default {
    name:'Library',
    components:{
        Animation,
        SearchBar,
        Card
    },
    data() {
        return {
            done: false,
            search: "",
            games: [],
        }
    },
    methods: {
        animationEnded: function(event){
            this.done = event;
        },
        handleChange: function (event) {
            this.search = event;
        },
        // handleKeyEnter: function(event) {
        // },
    },
    computed:{
        searchFilter: function() {
            return this.games.filter( game=> game.name.toLowerCase().includes(this.search.toLowerCase()));
        }
    },
    // beforeCreate -> you call api
    beforeCreate() {
        
    },
    // after being created -> you use the api
    beforeMount() {
        this.games = api
    },
    mounted() {
    },
}
</script>
<style scoped lang="scss">
    .card_container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>