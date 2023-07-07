import Album from './Album'

export const Albums = () => {
  return (
    <>
    <div className="dark:bg-zinc-900">
      <div className='flex flex-wrap md:pl-20 lg:pl-32 md:gap-y-10 xl:pl-12 pt-20'>
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/4'>
          <Album name="Please Please Me" img_url="/albums/please_please_me.png" date="22 March 1963"/>
        </div>  
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/4'>
          <Album name="With The Beatles" img_url="/albums/with_the_beatles.png" date="22 November 1963"/>
        </div>
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/4'>
          <Album name="A Hard Day's Night" img_url="/albums/a_hard_days_night.png" date="10 July 1964"/>
        </div>
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/4'>
          <Album name="Beatles For Sale" img_url="/albums/beatles_for_sale.png" date="4 December 1964"/>
        </div>
      </div>

      <div className='flex flex-wrap md:pl-20 lg:pl-32 md:gap-y-10 xl:pl-12 pt-20 pb-10 md:pb-20'>
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/4'>
          <Album name="Help" img_url="/albums/help.png" date="6 August 1965"/>
        </div>  
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/4'>
          <Album name="Rubber Soul" img_url="/albums/rubber_soul.png" date="3 December 1965"/>
        </div>
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/4'>
          <Album name="Revolver" img_url="/albums/revolver.png" date="5 August 1966"/>
        </div>
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/4'>
          <Album name="Magical Mystery Tour" img_url="/albums/magical_mystery_tour.png" date="27 November 1967"/>
        </div>
      </div>
    </div>
  </>
  );
}
