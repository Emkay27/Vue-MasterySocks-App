const app = Vue.createApp({
    data() { 
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            Inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}],
            sizes: ['S', 'M', 'L', 'XL']
        }
    },
    methods: {
        addToCart(){
            this.cart += 1;
        },
        updateImage(variantImage){
            this.image = variantImage;
        },
        removeFromCart(){
            if(this.cart > 0){ //Only remove from cart when there's something in the cart.
                this.cart -= 1;
            }
        }
    }
})
