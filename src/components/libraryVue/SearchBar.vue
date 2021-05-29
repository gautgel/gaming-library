<template>
  <div class="search_bar">
    <input v-on:keyup.enter="handleEnter" v-on:input="handleSearch" v-model="search" type="text" placeholder="Search for a game">
    <font-awesome-icon icon="search" class="logo"/>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: ''
    }
  },
  methods: {
    handleSearch: function() {
      this.$emit('handleSearch', this.search)
    },
    handleEnter: function() {
      this.$emit('handleEnter', "")
    }
  },
}
</script>
<style lang="">
    
</style>