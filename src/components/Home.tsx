import MemberCard from './MemberCard'

const Home = () => {
  return (
    <>
        <div className="flex flex-wrap ml-24">
        <div className="w-1/2">
          <MemberCard name="John Lennnon" img_url="src/assets/members/john.png"/>
        </div>
        <div className="w-1/2">
          <MemberCard name="Paul McCartney" img_url="src/assets/members/paul.png"/>
        </div>
        <div className="w-1/2">
          <MemberCard name="George Harrison" img_url="src/assets/members/george.jpeg"/>
        </div>
        <div className="w-1/2">
          <MemberCard name="Ringo Starr" img_url="src/assets/members/ringo.webp"/>
        </div>̀
      </div>
    </>
  )
}

export default Home
