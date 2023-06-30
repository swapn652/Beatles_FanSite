import MemberCard from './MemberCard'

const Home = () => {
  return (
    <>
        <div className="flex justify-center flex-wrap md:mr-32 mx-auto">
        <div className="md:w-auto lg:w-1/2">
          <MemberCard name="John Lennnon" img_url="src/assets/members/john.png"/>
        </div>
        <div className="md:w-auto lg:w-1/2">
          <MemberCard name="Paul McCartney" img_url="src/assets/members/paul.png"/>
        </div>
        <div className="md:w-auto lg:w-1/2">
          <MemberCard name="George Harrison" img_url="src/assets/members/george.jpeg"/>
        </div>
        <div className="md:w-auto lg:w-1/2">
          <MemberCard name="Ringo Starr" img_url="src/assets/members/ringo.webp"/>
        </div>̀
      </div>
    </>
  )
}

export default Home
