import Heroimg from '../../components/Heroimg/Heroimg'

export default function Favourite() {
  return (
    <>
      <Heroimg text="Wishlist" page="Wishlist" icon="'>'"/>
      <div style={{backgroundColor:"#2b2b2b",padding:"100px 0px"}}>
        <h4 className='d-flex justify-content-center text-capitalize fs-2'>
          Your wishlist looks empty
        </h4>
      </div>
    </>
  )
}
