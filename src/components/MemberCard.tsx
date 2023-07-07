type CardProps = {
  name: string,
  img_url: string
}

const MemberCard = (props: CardProps) => {
  return (
    <div className='w-96 mt-20 ml-20'>
      <div className='h-96 p-8 bg-black flex flex-col items-center justify-center border-4 border-white'>
        <img src={props.img_url} alt={props.name} className="h-72 w-72 mb-2 border-4 border-white" />
        <div className='mt-2'>
            <span className='text-white text-center text-3xl'>{(props.name).toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}

export default MemberCard