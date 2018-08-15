let section__gallery = new Vue({
  el: '#gallery',
  data: {
    title: 'Фотогалерея',
    gallery: [
      // {
      //     thumb: 'img/_gallery/thumb/1.png',
      //     full: 'img/_gallery/full/1.png'
      //   }
    ],
  },
  mounted() {
    for (let i = 1; i <= 36; i++) {
      let photo = {};
      photo.thumb = `img/_gallery/thumb/${i}.png`;
      photo.full = `img/_gallery/full/${i}.png`;
      this.gallery.push(photo);
    }
  },
})