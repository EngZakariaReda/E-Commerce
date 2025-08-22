import Heroimg from "../../components/Heroimg/Heroimg";
import { useStore } from "../../Store/Store";

export default function Compare() {
  const {domain , comparelist , removefromcomparelist} = useStore()
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
