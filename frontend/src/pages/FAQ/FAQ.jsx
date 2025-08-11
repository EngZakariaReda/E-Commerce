import Heroimg from '../../components/Heroimg/Heroimg'
import Accordiation from '../../components/Accordiation/Accordiation'
import "./Faq.css"

export default function FAQ() {
  return (
    <>
      <Heroimg text="faq" page="faq" icon="'>'"/>
      <div className='products'>
        <Accordiation />
      </div>
    </>
  )
}