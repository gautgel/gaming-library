<template>
    <div class="animation">
        <div class="words" style="textAlign: center">
            <span id="word">Welcome </span><span id="word">in </span><br><span id="word">Waldhafyr's </span><span id="word">Library!</span>
        </div>
    </div>
</template>
<script>

export default {
    name:'Animation',
    data() {
        return {
            index: -1,
        }
    },
    methods:{
      animation: function (params) {
        const words = document.querySelectorAll("#word"),
        animation = document.querySelector(".animation");
        var setInt = setInterval(() => {
          this.index++;
          const word = words[this.index];
          word.style.transform = 'scale(1)';
          word.style.opacity = 1;
          if (this.index == words.length - 1) {
            clearInterval(setInt);
            setTimeout(() => {
              animation.style.opacity = 0;
              animation.ontransitionend = ()=>{
                this.$emit('endAnimation', true);
              } 
            },1000);
          }
        }, 500);
      }
    },
    mounted() {
        this.animation();
    },
}
</script>

<style lang="scss" scoped>

</style>