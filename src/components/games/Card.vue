<template lang="">
    <div class="game_card">
        <!-- <img v-bind:src="require(`@/assets/games/img/covers/${pictureSrc}`)" v-bind:alt="name + ' cover'"><div class="mirror_effect"></div></img> -->
        <div class="cover" v-bind:style="{'background-image': 'url(' + require(`@/assets/games/img/covers/${pictureSrc}`)+ ')'}" v-bind:alt="name + ' cover'">
            <div class="info_container">
                <span class="name">{{name}}</span>
                <div class="release_date">
                    Date de sortie: <span class="date">{{releaseD}}</span>
                </div>
                <div class="plats_container">
                    Platforme(s): 
                    <span v-for="platform in platforms" class="platform">{{platform}}</span>
                </div>
                <div class="rate_container">
                    Note: <span class="rate">{{rate}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Card",
    props:{
        pictureSrc: String,
        name: String,
        platforms: Array,
        rate: String,
        releaseD: String,
        idPlatform: Number,
    }
}
</script>
<style lang="scss">
    .game_card{
        position: relative;
        width: 250px;
        height: 350px;
        margin: 50px;
        perspective: 1000px;
        .cover{
            z-index: 1;
            position: relative;
            width: 100%;
            height: 100%;
            background-size: cover;
            transition: transform .15s ease-in-out;
            transform-origin: top center;
            transform-style: preserve-3d;
            perspective-origin: 50% 50%;
            transform: skew(0.001deg);
            box-shadow: 0px 10px 15px 3px rgba(0,0,0,0.5);
            overflow: hidden;
        }
        .info_container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            position: absolute;
            background: rgba(38, 33, 46, 0.7);
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            transition: 0.6s ease-in-out;
            .name{
                font-size: 2rem;
            }
            .release_date, .name, .rate_container, .plats_container{
                margin: 5px;
            }
            .plats_container{
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                span:after{
                    content: "/";
                    position: relative;
                    right: 0;
                }
                span:last-child:after{
                    content: "";
                }
            }
        }
        .cover:after{
            content: '';
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            width: 110%;
            height: 120%;
            background:0 linear-gradient(226deg, 
                rgba(255,255,255,0.4) 0%,
                rgba(255,255,255,0.4) 35%,
                rgba(255,255,255,0.2) 42%,
                rgba(255,255,255,0) 60%,);
            transform: translateY(-20%);
            transition: transform 0.65s cubic-bezier(0.18,0.9,0.58,1);
        }
    }
    .game_card:after{
        display: block;
        content: '';
        position: absolute;
        top: 5%;
        left: 5%;
        width: 90%;
        height: 90%;
        background: rgba(0,0,0,0.5);
        box-shadow:  0 6px 12px 12px rgba(0,0,0,0.4);
        transition: transform 0.35s ease-in-out, opacity 0.5s ease-in-out;
    }
    .game_card:hover{
        cursor: pointer;
        .info_container{
            left: 0;
        }
    }
    .game_card:hover .cover{
        transform: rotateX(7deg) translateY(-6px);
    }
    .game_card:hover .cover:after{
        transform: translateY(-6px);
    }
    .game_card:hover::after{
        transform: rotateX(7deg) translateY(-6deg) scale(1.05);
    }
</style>