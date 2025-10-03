import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie";
export const useStore = create(persist(
    (set, get) => ({
      domain: "http://localhost:1337",

      jwt_token : Cookies.get("jwt_token") || null ,
      settoken : (newtoken) =>{ 
        Cookies.set("jwt_token", newtoken ,{ expires: 7 , secure: true})
        set({jwt_token:newtoken})
      },
      removetoken : () =>{ 
        Cookies.remove("jwt_token",{ path: "/", secure: true })
        set({jwt_token:null})
        localStorage.removeItem("userdata")
      },

      activevalue: JSON.parse(sessionStorage.getItem("activepage")) || 0,
      changecolor: (index) => {
        sessionStorage.setItem("activepage" , JSON.stringify(index))
        set({ activevalue: index });
      },

      successtostify: (message) => toast.success(message, { autoClose: 1250 }),
      errortostify: (message) => toast.error(message, { autoClose: 1250 }),

      cart: [],
      addtocart: (product) => {
        if(get().jwt_token){
          const cart = get().cart;
          const ifexist = cart.find((ele) => product.documentId === ele.documentId);
          if (ifexist) {
            ifexist.quantity += 1;
            get().successtostify("Item already in cart. Quantity increased by 1");
          } else {
            cart.push({ ...product, quantity: 1 });
            get().successtostify("Item added to cart successfully");
          }
          set({ cart });
        }else{
          get().errortostify("you must login first")
        }
      },

      increasequantity: (id, qty) => {
        const cart = get().cart;
        const ifexist = cart.find((ele) => id === ele.documentId);

        if (ifexist) {
          set((state) => ({
            cart: state.cart.map((ele) => {
              if (ele.documentId === id) {
                ele.quantity = qty;
                get().successtostify(`Increased quantity to ${qty}`);
              }
              return ele;
            }),
          }));
        } else {
          get().errortostify("You must add item to cart first");
        }
      },

      decreasequantity: (id, qty) => {
        const cart = get().cart;
        const ifexist = cart.find((ele) => id === ele.documentId);
        if (ifexist) {
          if (qty === 0) {
            get().removefromcart(id);
          } else {
            set((state) => ({
              cart: state.cart.map((ele) => {
                if (ele.documentId === id) {
                  ele.quantity = qty;
                  get().successtostify(`Decreased quantity to ${qty}`);
                }
                return ele;
              }),
            }));
          }
        } else {
          get().errortostify("You must add item to cart first");
        }
      },

      removefromcart: (id) => {
        set((state) => ({
          cart: state.cart.filter((ele) => ele.documentId !== id),
        }));
        get().successtostify("Item removed from cart");
      },

      gettotalprice: (arr) => {
        return arr.reduce(
          (acc, curr) => acc + curr.product_price * curr.quantity,
          0
        );
      },

      
      wishlist: [],
      addtowishlist: (product) => {
        if(get().jwt_token){
          const wishlist = get().wishlist;
          const ifexist = wishlist.find(
            (ele) => product.documentId === ele.documentId
          );
          if (ifexist) {
            get().successtostify("Item already in wishlist");
          } else {
            wishlist.push(product);
            get().successtostify("Item added to wishlist successfully");
          }
          set({ wishlist });
        }else{
          get().errortostify("you must login first")
        }
      },

      removefromwishlist: (id) => {
        set((state) => ({
          wishlist: state.wishlist.filter((ele) => ele.documentId !== id),
        }));
        get().successtostify("Item removed from wishlist");
      },

      comparelist: [],
      addtocomparelist: (product) => {
        if(get().jwt_token){
          const comparelist = get().comparelist;
          const ifexist = comparelist.find(
            (ele) => product.documentId === ele.documentId
          );
          if (ifexist) {
            get().successtostify("Item already in compare list");
          } else {
            comparelist.push(product);
            get().successtostify("Item added to compare list successfully");
          }
          set({ comparelist });
        }else{
          get().errortostify("you must login first")
        }
      },

      removefromcomparelist: (id) => {
        set((state) => ({
          comparelist: state.comparelist.filter(
            (ele) => ele.documentId !== id
          ),
        }));
        get().successtostify("Item removed from compare list");
      },

      orderslist: [],
      makeorder:()=>{
        let orders = get().orderslist;
        let cart = get().cart;
        orders.push(cart);
        cart = [];
        set({orders})
        set({cart})
        console.log(orders);
      },
      
      deleteorder:(index)=>{
        let orders = get().orderslist;
        orders.splice(index , 1);
        set({orders})
        console.log(orders);
      },

    }),
    {
      name: "store-data", 
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        comparelist: state.comparelist,
        orderslist: state.orderslist,
      })
    }
  ))