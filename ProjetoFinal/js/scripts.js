function getFakeProducts(quantity) {
    const products = [];
    for (let i = 0; i < quantity; i++){
        products.push({
            id: i + 1,
            name: "Produto",
            description: "lakdsjalkjsdlkajsdlaldkajsdkljalkdjaskjl",
            price: 0,
            discount: 0,
            quantity: 0,
            rating: Math.floor(Math.random()*5)
        });
    }
    return products;
}

const root = {
    data() {
        return {products: getFakeProducts(3)};
    },
    methods: {
        remove(id){
            let index = 0;
            for (let product of this.products){
                if(product.id === id){
                    break;
                }
                index = index + 1;
            }
            this.products.splice(index, 1);
        
        },
    
        add(){
            products.push({
                id: i + 1,
                name: "Produto",
                description: "lakdsjalkjsdlkajsdlaldkajsdkljalkdjaskjl",
                price: (0).toFixed(2),
                discount: 0,
                quantity: 0,
                rating: Math.floor(Math.random()*5)
            });
        }
    }
}

const listProduct = {
    template:`
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <slot></slot>
        </div>    
    `        
}

const productCard = {
    props: {
        id: Number,  
        name: String,
        price: Number,
        quantity: Number,
        discount: Number,
        rating: Number
    },

    computed: {
        sale(){
            return (this.discount > 0);
        },
        priceWithDiscount(){
            return (this.price - (this.discount/100)*this.price);
        },
    },

    template:`
    <div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div v-if="sale" class="badge bg-danger text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <!-- Product image-->
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">{{name}} {{id}}</h5>
                    <!-- Product reviews-->
                    <div class="d-flex justify-content-center small text-warning mb-2">
                        <div v-for="i in rating" class="bi-star-fill"></div>
                    </div>
                    <!-- Product price-->
                    <span :class="{ 'text\-decoration\-line\-through' :sale, 'text\-muted':sale}" >\${{price}}</span>
                    <span v-if="sale"> - \${{priceWithDiscount}}</span>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <a v-if="quantity" class="btn btn-outline-dark mt-auto" href="#">Adicionar ao carrinho</a>
                    <a v-else class="btn btn-outline-danger mt-auto" href="#">Produto Indisponível</a>
                </div>
            </div>
        </div>
    </div>
    `
}

const stock = {
    template:`
    <div class="row gx-4 gx-lg-5">
        <div class="col" >
            <h2>Estoque</h2>
            <hr>
            <table class="table table-stripped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Qtd.</th>
                        <th>Preço</th>
                        <th>Discount(%)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <slot></slot>
                </tbody>
            </table>
        </div>
    </div>            
    `
}

const stockItem = {
    props:{
        id:Number,
        name:String,
        description:String,
        price:Number,
        quantity:Number,
        discount:Number,
    },

    emits:['update:name','update:desciption','update:price','update:quantity','update:discount','remove'],
    
    computed:{
        mName:{
          get(){
            return this.name;
          },
          set(value){
            this.$emit('update:name', value);
          }  
        },
        mDescription:{
            get(){
                return this.description;
              },
              set(value){
                this.$emit('update:description', value);
              }
        },
        mPrice:{
            get(){
                return this.price;
              },
              set(value){
                this.$emit('update:price', value);
              }
        },
        mQuantity:{
            get(){
                return this.quantity;
              },
              set(value){
                this.$emit('update:quantity', value);
              }
        },
        mDiscount:{
            get(){
                return this.discount;
              },
              set(value){
                this.$emit('update:discount', value);
              }
        },
    },
    
    template:`
    <tr>
        <td>{{id}}</td>
        <td><input type="text" v-model="mName"></td>
        <td><input type="text" v-model="mDescription"></td>
        <td><input type="number" min="0" max="1000" step="1" v-model="mQuantity"></td>
        <td><input type="number" min="0" max="1000" v-model="mPrice"></td>
        <td><input type="number" min="0" max="95" step="5" v-model="mDiscount"></td>
        <td><button class="btn btn-danger" @click="$emit('remove',id)">Deletar</button></td>
    </tr>
    `
}

const app = Vue.createApp(root);

app.component('list-product', listProduct);

app.component('product-card', productCard);

app.component('stock', stock);

app.component('stock-item', stockItem);

app.mount("#app");

