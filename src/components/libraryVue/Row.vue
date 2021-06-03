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
            <Card v-for="game in array" v-bind:key="game.name" v-bind:name="game.name" v-bind:rate="game.rate" v-bind:platforms="game.platform" v-bind:release-d="game.releaseD" v-bind:picture-src="game.cover"></Card>
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
<style lang="scss">
    .row{
        position: relative;
        width: 100%;
        .title_line{
            position: relative;
            .title{
                position: absolute;
                background: #26212E;
                padding: 0px 10px;
                z-index: 2;
                border-radius: 5rem;
                top: 50%;
                left: 5%;
                transform: translateY(-50%);
            }
            .line{
                z-index: 1;
                position: absolute;
                width: 100%;
                height: 1px;
                background: rgba(253, 247, 248, 0.5);
                top: 50%;
                transform: translateY(-50%);
            }
            .btns_container{
                position: absolute;
                z-index: 2;
                display: flex;
                align-items: center;
                top: 50%;
                transform: translateY(-50%);
                right: 5%;
                background: #26212E;
                .logo{
                    padding: 0px 10px;
                    font-size: 1.5rem;
                    transition: .3s;
                    border-radius: 0.2rem;
                }
                .logo:hover{
                    background: #4A4453;
                }
            }
        }
        .flickity-slider{
            left: 20px !important;
        }
    }
</style>