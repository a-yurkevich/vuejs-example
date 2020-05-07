export default {
  state: {
    ads: [
      {
        id: '1',
        title: 'Bird',
        description: 'This is a bird',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        id: '2',
        title: 'Squirrel',
        description: 'This is a squirrel',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        id: '3',
        title: 'Planet',
        description: 'This is a planet',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads;
    }
  }
}
