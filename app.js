const app = Vue.createApp({
    //data, functions, component template to be rendered
    data(){ //create function and return object from function
        return {
            showBooks: true,
            url: "http://www.thenetninja.co.uk",
            age: 100,
            x: 0,
            y: 0,
            books: [
                {title: 'name of the wind', author:'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true},
            ]
        }
    },
    methods: {
        changeTitle(title){
            this.title = title //this references component itself
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            console.log('clicked')
            book.isFav = !book.isFav
        },
    },
    computed: {
        filteredBooks(){
            return this.books.filter(book => book.isFav)
        }
    }
})

app.mount('#app') //where we implement vue app into dom