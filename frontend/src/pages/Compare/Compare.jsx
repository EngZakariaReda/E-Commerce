import Heroimg from "../../components/Heroimg/Heroimg";

export default function Compare() {
  return (
    <>
      <Heroimg text="compare" page="compare" icon="'>'"/>
      <div style={{backgroundColor:"#2b2b2b",padding:"100px 0px"}}>
        <h4 className='d-flex justify-content-center text-capitalize fs-2'>
            Nothing found to compare!
        </h4>
      </div>
    </>
  )
}
