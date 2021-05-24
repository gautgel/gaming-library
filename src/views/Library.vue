<template>
    <div class="library">
        <Animation v-if="!done" v-on:endAnimation="animationEnded($event)"></Animation>
        <!--<Animation></Animation>-->
    </div>
</template>
<script>
// @ equals src path
import Animation from '@/components/Animation.vue'
export default {
    name:'Library',
    components:{
        Animation
    },
    data() {
        return {
            done: false,
            disapear: false,
        }
    },
    methods: {
        animationEnded: function(event){
            this.done = event;
        }
    },
}
</script>
<style scoped lang="scss">
</style>