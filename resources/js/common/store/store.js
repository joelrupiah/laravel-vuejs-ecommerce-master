import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {user} from './modules/user'
import {admin} from './modules/admin'
import { category } from './modules/category'
import { product } from './modules/product'
import { wishlist } from './modules/wishlist'
import { cart } from './modules/cart'
import { order } from './modules/order'

export const store = new Vuex.Store({
    modules: {
        user : user,
        admin : admin,
        category : category,
        product : product,
        wishlist : wishlist,
        cart : cart,
        order: order
    }
  })