<template>
    <div class="row">
        <div class="title_line">
            <span class="title">{{title}}</span>
            <div class="line"></div>
            <div class="btns_container">
                <font-awesome-icon v-on:click="previous" icon="caret-left" class="logo"/>
                <font-awesome-icon v-on:click="next" icon="caret-right" class="logo"/>
            </div>
        </div>
        <Flickity ref="flickity" :options="flickityOptions">
            <!-- <router-link :to="{}"></router-link> -->
            <Card v-for="game in array" v-bind:key="game.id" v-bind:name="game.name" v-bind:rate="game.rate" v-bind:platforms="game.platform" v-bind:release-d="game.releaseD" v-bind:picture-src="game.cover"></Card>
        </Flickity>
    </div>
</template>
<script>
import Card from '@/components/games/Card.vue'
import Flickity from 'vue-flickity';
export default {
    name: "Row",
    components:{
        Card,
        Flickity
    },
    props:{
        title: String,
        array: Array
    },
    data() {
        return {
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                groupCells: '100%',
                freeScroll: true,
                cellAlign: 'left',
                // any options from Flickity can be used
            }
        }
    },
    methods: {
        next: function() {
            this.$refs.flickity.next();
        },
        previous() {
            this.$refs.flickity.previous();
        }
    },
}
</script>