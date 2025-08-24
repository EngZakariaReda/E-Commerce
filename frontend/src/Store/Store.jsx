import { toast } from "react-toastify";
import { create } from "zustand";


export const useStore = create((set,get)=>({
    domain : "http://localhost:1337",
    successtostify:(message)=> toast.success(message,{autoClose:2000}),
    errortostify:(message)=> toast.error(message,{autoClose:2000}),
    cart:[],
    addtocart:(product)=>{
        const cart = get().cart;
        const ifexist = cart.find((ele)=> product.documentId === ele.documentId)
        if (ifexist){
            ifexist.quantity += 1
            get().successtostify("item has alreay added to cart & increased its quantity by one")
        }else{
            cart.push({...product , quantity : 1})
            get().successtostify("add item to cart successfuly")
        }
        set({cart : cart})
    },
    increasequantity:(id , qty)=>{
        const cart = get().cart;
        const ifexist = cart.find((ele)=> product.documentId === ele.documentId)

        if(ifexist){
            set((state)=>({
                cart : state.cart.map((ele)=> {
                    if(ele.documentId === id){
                        ele.quantity = qty
                        get().successtostify(`increased quantity of item to ${qty}`)
                    }else{
                        get().errortostify('you must add item to cart first')
                    }
                    return ele
                } )
            }))
        }else{
            get().errortostify('you must add item to cart first')
        }
    },
    decreasequantity:(id , qty)=>{
        const cart = get().cart;
        const ifexist = cart.find((ele)=> product.documentId === ele.documentId)
        if(ifexist){
            if(qty === 0){
                get().removefromcart(id)
            }else{
                set((state)=>({
                cart : state.cart.map((ele)=> {
                    if(ele.documentId === id){
                        ele.quantity = qty
                        get().successtostify(`decreased quantity of item to ${qty}`)
                    }else{
                        get().errortostify('you must add item to cart first')
                    }
                    return ele
                } )
            }))
            }
        }else{
            get().errortostify('you must add item to cart first')
        }
    },
    removefromcart:(id)=>{
        set((state)=>({
            cart : state.cart.filter((ele)=> ele.documentId !== id)
        }))
        get().successtostify(`item deleted from cart`)
    },
    gettotalprice:()=>{
        const total = get().cart.reduce((acc , curr)=> acc + curr.product_price * curr.quantity,0)
        return total
    },

    wishlist:[],
    addtowishlist:(product)=>{
        const wishlist = get().wishlist;
        const ifexist = wishlist.find((ele)=> product.documentId === ele.documentId)
        if (ifexist){
            get().successtostify("item has alreay added to wishlist")
        }else{
            wishlist.push(product)
            get().successtostify("added item to wishlist successfuly")
        }
        set({wishlist : wishlist})
    },
    removefromwishlist:(id)=>{
        set((state)=>({
            wishlist : state.wishlist.filter((ele)=> ele.documentId !== id)
        }))
        get().successtostify(`item deleted from wishlist`)
    },

    comparelist:[],
    addtocomparelist:(product)=>{
        const comparelist = get().comparelist;
        const ifexist = comparelist.find((ele)=> product.documentId === ele.documentId)
        if (ifexist){
            get().successtostify("item has alreay added to comparelist")
        }else{
            comparelist.push(product)
            get().successtostify("added item to comparelist successfuly")
        }
        set({comparelist : comparelist})
    },
    removefromcomparelist:(id)=>{
        set((state)=>({
            comparelist : state.comparelist.filter((ele)=> ele.documentId !== id)
        }))
        get().successtostify(`item deleted from comparelist`)
    },
}))