//below we pass in three arguments, where the first is the component name,
//the second is the prop which passes the data into the component
//and the third is the object to configure our component.
app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    //The comment below is very important because it activates the es6-string-html
    // extension which enables html syntax inside this js file.
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :class="{ 'out-of-stock-img': !inStock}" :src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ saleMessage }}</p>
        <p>Shipping: {{ shipping }}</p>
        <p v-if="inStock > 0">In Stock</p>
        <p v-else>Out of Stock</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>            
        <ul>
          <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
        </ul>
        <div v-for="(variant, index) in variants" 
        :key="variant.id" 
        @mouseover="updateVariant(index)"
        class="color-circle"
        :style="{backgroundColor: variant.color}"
        >
        </div>
        <button 
        class="button" 
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
        @click="addToCart"
        >
        Add to Cart
      </button>
        <button 
        class="button" 
        @click="removeFromCart"
        >
        Remove from Cart
      </button>
      </div>
    </div>
    <review-list :reviews="reviews"></review-list>>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() { 
    return {
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
        sizes: ['S', 'M', 'L', 'XL'],
        reviews: []
    }
},
methods: {
    updateVariant(varIndex){
        this.selectedVariant = varIndex;
    },
    addToCart(){
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    removeFromCart(){
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
    },
    addReview(review){
        this.reviews.push(review)
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
   },
   shipping(){
       if(this.premium){
           return 'Free';
       }
       return 2.99;
   } 
}
})