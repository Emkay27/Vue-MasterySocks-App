const app = Vue.createApp({
    data() { 
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            quantity: 0,
            selectedVariant: 0,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', 
                quantity: 50},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', 
                quantity: 0}],
            sizes: ['S', 'M', 'L', 'XL']
        }
    },
    methods: {
        addToCart(){
            this.cart += 1;
        },
        updateVariant(varIndex){
            this.selectedVariant = varIndex;
        },
        removeFromCart(){
            this.cart -= 1;
        }
    },
    computed: {
       title(){
        return this.brand + ' ' + this.product;   
       },
       saleMessage(){
        if(this.onSale){
            Sale = 'are on sale';
        }
        else{
            Sale = 'are not on sale';
        }
        return this.brand + ' ' + this.product + ' ' + Sale;
       },
       image(){
           return this.variants[this.selectedVariant].image;
       },
       inStock(){
           return this.variants[this.selectedVariant].quantity;
       } 
    }
})
