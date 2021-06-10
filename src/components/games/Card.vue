<template lang="">
    <div class="game_card carousel-cell">
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