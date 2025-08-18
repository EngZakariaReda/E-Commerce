import "./Pagination.css"

export default function Pagination({totalproducts , productsnumber ,setcurrentpage,currentpage}) {
  const pages = [];
  let condition = Math.ceil(totalproducts / productsnumber)
  for(let i = 1 ; i <= condition ; i++){
    pages.push(i)
  }
  return (
    <div className="paginate d-flex gap-3 justify-content-center align-items-center w-100">
        {
          pages.map((page , index)=>(
            <button key={index} className={page === currentpage ? "activebtn" : "" }
            onClick={()=> {setcurrentpage(page)
              window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
            }}
            >{page}</button>
          ))
        }
    </div>
  )
}
