import { create } from "zustand";


export const useStore = create((set,get)=>({
    domain : "http://localhost:1337",
    cart:[],
    addtocart:(product)=>{
        const cart = get().cart;
        const ifexist = cart.find((ele)=> product.documentId === ele.documentId)
        if (ifexist){
            ifexist.quantity += 1
        }else{
            cart.push({...product , quantity : 1})
        }
        console.log(cart)
        set({cart : cart})
    },
    increasequantity:(id , qty)=>{
        set((state)=>({
            cart : state.cart.map((ele)=> {
                if(ele.documentId === id){
                    ele.quantity = qty
                }
                return ele
            } )
        }))
        console.log(get().cart);
    },
    decreasequantity:(id , qty)=>{
        if(qty === 0){
            get().removefromcart(id)
        }else{
            set((state)=>({
            cart : state.cart.map((ele)=> {
                if(ele.documentId === id){
                    ele.quantity = qty
                }
                return ele
            } )
        }))
        }
        console.log(get().cart);
    },
    removefromcart:(id)=>{
        set((state)=>({
            cart : state.cart.filter((ele)=> ele.documentId !== id)
        }))
    },

    wishlist:[],
    addtowishlist:(product)=>{
        const wishlist = get().wishlist;
        const ifexist = wishlist.find((ele)=> product.documentId === ele.documentId)
        if (ifexist){
            return ;
        }else{
            wishlist.push(product)
        }
        set({wishlist : wishlist})
        console.log(get().wishlist)
    },
    removefromwishlist:(id)=>{
        set((state)=>({
            wishlist : state.wishlist.filter((ele)=> ele.documentId !== id)
        }))
        console.log(get().wishlist)
    },

    comparelist:[],
    addtocomparelist:(product)=>{
        const comparelist = get().comparelist;
        const ifexist = comparelist.find((ele)=> product.documentId === ele.documentId)
        if (ifexist){
            return ;
        }else{
            comparelist.push(product)
        }
        set({comparelist : comparelist})
        console.log(get().comparelist)
    },
    removefromcomparelist:(id)=>{
        set((state)=>({
            comparelist : state.comparelist.filter((ele)=> ele.documentId !== id)
        }))
        console.log(get().comparelist)
    },
}))