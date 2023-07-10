import { useState } from 'react';

export const Journey = () => {
  const [isLeftVisible1, setIsLeftVisible1] = useState(false);
  const [isLeftVisible2, setIsLeftVisible2] = useState(false);
  const [isRightVisible1, setIsRightVisible1] = useState(true);
  const [isRightVisible2, setIsRightVisible2] = useState(true);

  const handleLeftYearClick1 = () => {
    setIsLeftVisible1(!isLeftVisible1);
  };

  const handleLeftYearClick2 = () => {
    setIsLeftVisible2(!isLeftVisible2);
  };

  const handleRightYearClick1 = () => {
    setIsRightVisible1(!isRightVisible1);
  };

  const handleRightYearClick2 = () => {
    setIsRightVisible2(!isRightVisible2);
  };

  return (
    <>
      <div className="overflow-hidden h-screen dark:bg-zinc-900">
        <div className="py-6 flex flex-col justify-center sm:py-12">
          <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden sm:block w-1 bg-black absolute h-full left-1/2 transform -translate-x-1/2"></div>

              {/* Left section */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div
                  className="flex flex-col sm:flex-row items-center cursor-pointer"
                  onClick={handleLeftYearClick1}
                >
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className="p-4 bg-white dark:bg-zinc-900 dark:text-gray-100 flex justify-center text-2xl rounded shadow">
                        1956 - 1963
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-black w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* Right section */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div
                  className="flex flex-col sm:flex-row items-center cursor-pointer"
                  onClick={handleRightYearClick1}
                >
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="p-4 bg-white dark:bg-zinc-900 dark:text-gray-100 flex justify-center text-2xl rounded shadow">
                        1963 - 1966
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-black w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* Left section */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div
                  className="flex flex-col sm:flex-row items-center cursor-pointer"
                  onClick={handleLeftYearClick2}
                >
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className="p-4 bg-white dark:bg-zinc-900 dark:text-gray-100 flex justify-center text-2xl rounded shadow">
                        1966 - 1970
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-black w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* Right section */}
              <div className="mt-6 sm:mt-0">
                <div
                  className="flex flex-col sm:flex-row items-center cursor-pointer"
                  onClick={handleRightYearClick2}
                >
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="p-4 bg-white dark:bg-zinc-900 dark:text-gray-100 flex justify-center text-2xl rounded shadow">
                        1970 - present
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-black w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={handleLeftYearClick1}
          className={`h-96 w-96 text-sm p-4 bg-white dark:bg-zinc-900 dark:text-gray-100 -mt-[450px] border-4 border-black rounded-lg transition-transform duration-500 ${
            isLeftVisible1 ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          In the late 1950s, John Lennon formed a group called the Quarrymen, which later became the Beatles. Paul McCartney and George Harrison joined the band, and they gained popularity in Liverpool and Hamburg. Brian Epstein became their manager and secured a recording contract with EMI's Parlophone label. They released their first single, "Love Me Do," and their success grew under Epstein's guidance. They replaced drummer Pete Best with Ringo Starr and adopted a more professional approach to performing.
        </div>

        <div
          onClick={handleLeftYearClick2}
          className={`h-96 w-96 text-sm p-4 bg-white dark:bg-zinc-900 dark:text-gray-100 -mt-[384px] border-4 border-black rounded-lg transition-transform duration-500 ${
            isLeftVisible2 ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          The Beatles, a legendary British rock band formed in the 1960s, revolutionized the concept of rock albums with groundbreaking releases like "Sgt. Pepper's Lonely Hearts Club Band." They ventured into film projects such as "Magical Mystery Tour" and "Yellow Submarine." In 1968, they traveled to India for meditation, resulting in the prolific "White Album." However, tensions within the band grew, leading to strained relationships. They also established Apple Corps, a multimedia corporation. Despite their diverse musical styles showcased in albums like "The White Album" and "Abbey Road," the recording sessions for "Let It Be" were marked by conflict. The Beatles eventually disbanded in 1970, leaving behind a lasting legacy of musical inspiration.
        </div>

        <div className='flex justify-end'>
          <div
            onClick={handleRightYearClick1}
            className={`h-96 w-96 text-sm p-4 bg-white dark:bg-zinc-900 dark:text-gray-100 -mr-[385px] -mt-[380px]  border-4 border-black rounded-lg transition-transform duration-500 ${
              isRightVisible1 ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            In 1963, the Beatles recorded their debut album "Please Please Me" in a single day. The album and their subsequent singles achieved great success in the UK, leading to their first nationwide tour and the rise of "Beatlemania". The Beatles' popularity spread to the United States, where they made a groundbreaking appearance on The Ed Sullivan Show, sparking the British Invasion of music. Their first visit to the US coincided with the nation's mourning of President Kennedy's assassination and reignited a sense of excitement among the youth. The Beatles' film "A Hard Day's Night" further solidified their success. They continued touring internationally and met Bob Dylan, leading to a mutual influence on each other's music. The band also took a stand against racial segregation in the US. 
          </div>
        </div>

        <div className='flex justify-end'>
          <div
            onClick={handleRightYearClick2}
            className={`h-96 w-96 text-sm p-4 bg-white dark:bg-zinc-900 dark:text-gray-100 -mr-[385px] -mt-[380px]  border-4 border-black rounded-lg transition-transform duration-500 ${
              isRightVisible2 ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            In the 1970s, the Beatles disbanded, and each member pursued solo careers. John Lennon had successful albums but was tragically assassinated. Paul McCartney formed Wings and had hits like "Band on the Run." George Harrison had solo success, including "My Sweet Lord." Ringo Starr released albums and acted. In the 1980s, McCartney and Harrison had hits, and Starr released albums. The 1990s saw a Beatles resurgence with the "Anthology" project. McCartney, Harrison, and Starr collaborated on new tracks. In the 2000s, McCartney, Harrison, and Starr released solo music. Harrison passed away in 2001. McCartney and Starr continued performing and honoring the Beatles' legacy. In the 2010s, they remained active and influential in the music industry.
          </div>
        </div>
      </div>
    </>
  );
}