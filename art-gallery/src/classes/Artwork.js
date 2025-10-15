export default class Artwork {
    constructor(id, title, artist, category, imageId) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.category = category;
        this.imageId = imageId;
    }

    getImageURL() {
        return 'https://i.ibb.co/' + this.imageId;
    }
}
