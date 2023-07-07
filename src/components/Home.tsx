import MemberCard from './MemberCard'

const Home = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap md:pr-32 mx-auto bg-white dark:bg-zinc-900">
        <div className="md:w-auto lg:w-1/2">
          <MemberCard name="John Lennnon" img_url="/members/john.png"/>
        </div>
        <div className="md:w-auto lg:w-1/2">
          <MemberCard name="Paul McCartney" img_url="/members/paul.png"/>
        </div>
        <div className="md:w-auto lg:w-1/2">
          <MemberCard name="George Harrison" img_url="/members/george.jpeg"/>
        </div>
        <div className="md:w-auto lg:w-1/2">
          <MemberCard name="Ringo Starr" img_url="/members/ringo.webp"/>
        </div>̀
      </div>
    </>
  );
}

export default Home
