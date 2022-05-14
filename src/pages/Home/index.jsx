import IDCard from '../../components/IDCard'
import LeftMenu from '../../components/LeftMenu'
import RightMenu from '../../components/RightMenu'

function Home() {
  return (
    <div className="bg-gray-50 font-primary w-screen h-screen">
      <div className="bg-gray-900 w-screen h-80 top-0 left-0 absolute lg:w-1/3 lg:h-screen"></div>
      <LeftMenu/>

      <IDCard/>

      <RightMenu/>
    </div>
  )
}

export default Home;
 