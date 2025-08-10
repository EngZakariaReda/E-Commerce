import './Havorcard.css'
export default function Havorcard() {
    const items=[
        {
            id:1,
            backpic:"url('../images/img-1.webp')",
            onpic:"/images/Group_25739.webp",
        },
        {
            id:2,
            backpic:"url('../images/img-1.webp')",
            onpic:"/images/Group_25740-_1_.webp",
        },
        {
            id:3,
            backpic:"url('../images/img-1.webp')",
            onpic:"/images/Group_25740.webp",
        },
        {
            id:4,
            backpic:"url('../images/img-1.webp')",
            onpic:"/images/Group_25741.webp",
        },
        {
            id:5,
            backpic:"url('../images/img-1.webp')",
            onpic:"/images/Group_25742.webp",
        },
        {
            id:6,
            backpic:"url('../images/img-1.webp')",
            onpic:"/images/Group_25743.webp",
        },
    ]
    
  return (
    <div>
       <div className="row m-0 g-3">
            {
                items.map((el)=>{
                   return <div key={el.id}  className="col-lg-2 col-md-4 col-12 cardhover" 
                         style={{backgroundImage:`${el.backpic}`,}}>
                        <img src={el.onpic} loading='lazy' />
                    </div>
                })
            }
       </div> 
    </div>
  )
} 
