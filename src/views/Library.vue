<template>
    <div class="library">
        <SearchBar v-on:handleEnter="handleKeyEnter($event)" v-on:handleSearch="handleChange($event)"></SearchBar>
        <Animation v-if="!done" v-on:endAnimation="animationEnded($event)"></Animation>
        <div v-else class="container">
            <div v-if="searching" class="card_container">
                <Card v-for="game in searchFilter" v-bind:key="game.name" v-bind:name="game.name" v-bind:rate="game.rate" v-bind:platforms="game.platform" v-bind:release-d="game.releaseD" v-bind:picture-src="game.cover" ></Card>
            </div>
            <div v-else class="row_container">
                <Row title="Ma bibliothèque" v-bind:array="userLibrary"></Row>
                <Row title="Ma liste de souhaits" v-bind:array="wishList"></Row>
                <Row title="Les dernieres sorties" v-bind:array="games"></Row>
            </div>
        </div>
    </div>
</template>
<script>
// @ equals src path
import Animation from '@/components/Animation.vue'
import SearchBar from '@/components/libraryVue/SearchBar.vue'
import Card from '@/components/games/Card.vue'
import Row from '@/components/libraryVue/Row.vue'
import api from '@/assets/games/api/gamesApi.js'


export default {
    name:'Library',
    components:{
        Animation,
        SearchBar,
        Card,
        Row
    },
    data() {
        return {
            done: false,
            search: "",
            searching: false,
            games: [],
            wishList: [],
            userLibrary: []
        }
    },
    methods: {
        animationEnded: function(event){
            this.done = event;
        },
        handleChange: function (event) {
            this.search = event;
            if(this.search != ""){
                this.searching = true
            }else{
                this.searching = false
            }
        },
        // handleKeyEnter: function(event) {
        // },
    },
    computed:{
        searchFilter: function() {
            return this.games.filter( game => game.name.toLowerCase().includes(this.search.toLowerCase()));
        }
    },
    // beforeCreate -> you call api
    beforeCreate() {
        
    },
    // after being created -> you use the api
    beforeMount() {
        this.games = api.games
        this.wishList = api.userWishList
        this.userLibrary = api.userLibrary
        console.log(this.games)
    },
    mounted() {
    },
}
</script>
<style scoped lang="scss">
    .container{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        .card_container{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .row_container{
            margin-top: 15px;
            position: relative;
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>