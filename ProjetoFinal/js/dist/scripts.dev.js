"use strict";

function getFakeProducts(quantity) {
  var products = [];

  for (var _i = 0; _i < quantity; _i++) {
    products.push({
      id: _i + 1,
      name: "Produto",
      description: "lakdsjalkjsdlkajsdlaldkajsdkljalkdjaskjl",
      price: 0 .toFixed(2),
      discount: 0,
      quantity: 0,
      rating: Math.floor(Math.random() * 5)
    });
  }

  return products;
}

var root = {
  data: function data() {
    return {
      products: getFakeProducts(3)
    };
  },
  methods: {
    remove: function remove(id) {
      var index = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var product = _step.value;

          if (product.id === id) {
            break;
          }

          index = index + 1;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.products.splice(index, 1);
    },
    add: function add() {
      products.push({
        id: i + 1,
        name: "Produto",
        description: "lakdsjalkjsdlkajsdlaldkajsdkljalkdjaskjl",
        price: 0 .toFixed(2),
        discount: 0,
        quantity: 0,
        rating: Math.floor(Math.random() * 5)
      });
    }
  }
};
var listProduct = {
  template: "\n        <div class=\"row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center\">\n            <slot></slot>\n        </div>    \n    "
};
var productCard = {
  props: {
    name: String,
    price: Number,
    quantity: Number,
    discount: Number,
    rating: Number
  },
  computed: {
    sale: function sale() {
      return this.discount > 0;
    },
    priceWithDiscount: function priceWithDiscount() {
      return (this.price - this.discount / 100 * this.price).toFixed(2);
    }
  },
  template: "\n    <div class=\"col mb-5\">\n        <div class=\"card h-100\">\n            <!-- Sale badge-->\n            <div v-if=\"sale\" class=\"badge bg-danger text-white position-absolute\" style=\"top: 0.5rem; right: 0.5rem\">Sale</div>\n            <!-- Product image-->\n            <img class=\"card-img-top\" src=\"https://dummyimage.com/450x300/dee2e6/6c757d.jpg\" alt=\"...\" />\n            <!-- Product details-->\n            <div class=\"card-body p-4\">\n                <div class=\"text-center\">\n                    <!-- Product name-->\n                    <h5 class=\"fw-bolder\">{{name}} {{id}}</h5>\n                    <!-- Product reviews-->\n                    <div class=\"d-flex justify-content-center small text-warning mb-2\">\n                        <div v-for=\"i in rating\" class=\"bi-star-fill\"></div>\n                    </div>\n                    <!-- Product price-->\n                    <span :class=\"{ 'text-decoration-line-through' :sale, 'text-muted':sale}\" >${{price}}</span>\n                    <span v-if=\"sale\"> - ${{priceWithDiscount}}</span>\n                </div>\n            </div>\n            <!-- Product actions-->\n            <div class=\"card-footer p-4 pt-0 border-top-0 bg-transparent\">\n                <div class=\"text-center\">\n                    <a v-if=\"quantity\" class=\"btn btn-outline-dark mt-auto\" href=\"#\">Adicionar ao carrinho</a>\n                    <a v-else class=\"btn btn-outline-danger mt-auto\" href=\"#\">Produto Indispon\xEDvel</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
};
var stock = {
  template: "\n    <div class=\"row gx-4 gx-lg-5\">\n        <div class=\"col\" >\n            <h2>Estoque</h2>\n            <hr>\n            <table class=\"table table-stripped\">\n                <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>Nome</th>\n                        <th>Descri\xE7\xE3o</th>\n                        <th>Qtd.</th>\n                        <th>Pre\xE7o</th>\n                        <th>Discount(%)</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <slot></slot>\n                </tbody>\n            </table>\n        </div>\n    </div>            \n    "
};
var stockItem = {
  props: {
    id: Number,
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    discount: Number,
    rating: Number
  },
  templete: "\n    <tr>\n        <td>{id}}</td>\n        <td><input type=\"text\" v-model=\"name\"></td>\n        <td><input type=\"text\" v-model=\"description\"></td>\n        <td><input type=\"number\" min=\"0\" max=\"1000\" step=\"1\" v-model=\"quantity\"></td>\n        <td><input type=\"number\" min=\"0\" max=\"1000\" v-model=\"price\"></td>\n        <td><input type=\"number\" min=\"0\" max=\"95\" step=\"5\" v-model=\"discount\"></td>\n        <td><button class=\"btn btn-danger\" @click=\"remove(id)\">Deletar</button></td>\n    </tr>\n    "
};
var app = Vue.createApp(root);
app.component('list-product', listProduct);
app.component('product-card', productCard);
app.component('stock', stock);
app.component('stock-item', stockItem);
app.mount("#app");