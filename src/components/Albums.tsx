import Album from './Album'

export const Albums = () => {
  return (
    <>
    <div className='flex flex-wrap ml-12 mt-20'>
      <div className='w-1/4'>
        <Album name="Please Please Me" img_url="src/assets/albums/please_please_me.png" date="22 March 1963"/>
      </div>  
      <div className='w-1/4'>
        <Album name="With The Beatles" img_url="src/assets/albums/with_the_beatles.png" date="22 November 1963"/>
      </div>
      <div className='w-1/4'>
        <Album name="A Hard Day's Night" img_url="src/assets/albums/a_hard_days_night.png" date="10 July 1964"/>
      </div>
      <div className='w-1/4'>
        <Album name="Beatles For Sale" img_url="src/assets/albums/beatles_for_sale.png" date="4 December 1964"/>
      </div>
    </div>
    <div className='flex flex-wrap ml-12 mt-20'>
    <div className='w-1/4'>
      <Album name="Help" img_url="src/assets/albums/help.png" date="6 August 1965"/>
    </div>  
    <div className='w-1/4'>
      <Album name="Rubber Soul" img_url="src/assets/albums/rubber_soul.png" date="3 December 1965"/>
    </div>
    <div className='w-1/4'>
      <Album name="Revolver" img_url="src/assets/albums/revolver.png" date="5 August 1966"/>
    </div>
    <div className='w-1/4'>
      <Album name="Magical Mystery Tour" img_url="src/assets/albums/magical_mystery_tour.png" date="27 November 1967"/>
    </div>
  </div>
  </>
  )
}
