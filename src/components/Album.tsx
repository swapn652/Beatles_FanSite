type AlbumProps = {
    name: string,
    img_url: string,
    date: string
}

const Album = (props: AlbumProps) => {
  return (
    <div className='h-72 w-72 bg-black border-4 border-white'>
        <div className='flex items-center justify-center'>
            <img src={props.img_url} alt="Album" className="h-48 w-48 mt-2 border-4 border-white" />
        </div>
        <div className='mt-2 text-center'>
            <div className='text-white text-2xl'>{props.name}</div>
            <div className='text-white text-sm mt-2'>{props.date}</div>   
        </div>
    </div>
  );
}

export default Album

