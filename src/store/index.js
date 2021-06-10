import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: "dark",
    games:[
      {
          id: 1,
          name: 'The witcher 3',
          platform: ['Windows', 'Switch', 'XboxOne', 'XboxSeries', 'PS4', 'PS5'],
          cover:'The_Witcher_3.png',
          rate: "4.8",
          releaseD: "18/05/2015",
      },
      {
          id: 2,
          name: 'Total War Warhammer 3',
          platform: ['windows'],
          cover:'total_war_warhammer_3.jpg',
          rate: 'not released yet',
          releaseD: "2021",
      },
      {
          id: 3,
          name: 'Hades',
          platform: ['windows', 'switch', 'Mac OS'],
          cover:'hades.jpg',
          rate: "4.5",
          releaseD: "06/12/2018",
      },
      {
          id: 4,
          name: 'gsfgs',
          platform: ['windows', 'switch', 'Mac OS'],
          cover:'hades.jpg',
          rate: "4.5",
          releaseD: "06/12/2018",
      },
      {
          id: 5,
          name: 'zazaz',
          platform: ['windows', 'switch', 'Mac OS'],
          cover:'hades.jpg',
          rate: "4.5",
          releaseD: "06/12/2018",
      },
      {
          id: 6,
          name: 'gergr',
          platform: ['windows', 'switch', 'Mac OS'],
          cover:'hades.jpg',
          rate: "4.5",
          releaseD: "06/12/2018",
      },],
    userLibrary:[
      {
          id: 1,
          name: 'The witcher 3',
          platform: ['Windows', 'Switch', 'XboxOne', 'XboxSeries', 'PS4', 'PS5'],
          cover:'The_Witcher_3.png',
          rate: "4.8",
          releaseD: "18/05/2015",
      },
      {
          id: 2,
          name: 'Total War Warhammer 3',
          platform: ['windows'],
          cover:'total_war_warhammer_3.jpg',
          rate: 'not released yet',
          releaseD: "2021",
      },],
    userWishList: [
      {
          id: 3,
          name: 'Hades',
          platform: ['windows', 'switch', 'Mac OS'],
          cover:'hades.jpg',
          rate: "4.5",
          releaseD: "06/12/2018",
      },],
  },
  mutations: {
    currentMode: function(state, newMode){
      return state.theme = newMode
    }
  },
  getters: {
    getGames: function(state){
      return state.games
    },
    getUserLibrary: function(state){
      return state.userLibrary
    },
    getUserWishList: function(state){
      return state.userWishList
    },
    getActualTheme: function(state){
      return state.theme
    }
  },
  actions: {
    // better to use it instead of mutations
    changeMode({commit, state}, newMode){
      let mode
      if(newMode == "dark"){
        mode = "light"
      }else if(newMode == "light"){
        mode = "dark"
      }
      commit('currentMode', mode);
    }
  },
  modules: {
  }
})
