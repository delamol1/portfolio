import React from "react"
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"





class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      thumbnailPosition: 'bottom',
      showVideo: {},
    }
  }



  render() {

    const images = [
      {
        original: "/static/media/layout.77f33f14.png",
        thumbnail: '/static/media/layout.77f33f14.png',

      },
      {
        original: '/static/media/project2.f1338d3b.png',
        thumbnail: '/static/media/project2.f1338d3b.png'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    console.log(images)

    return (
      <ImageGallery items={images}
        showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
      />
    );
  }

}

export default Gallery