<div>
          <Image
           width={40}
           height={40}
           src='/star.svg'
           alt='TECHATHON'
           priority
          />
       <div className="place-content-center grid space-x-9 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-14">
        <div className="write-up grid grid-cols  w-[50vw]">
            <h1 className='text-[40px] lg:text-[48px] leading text-center lg:text-start text-[#481DA6] font-[500] '>{HEROCONTENT.title}</h1>
            <p className="text-[18px] text-center leading-[24px] text-[#481DA6]">{HEROCONTENT.body}</p>
              <div className="border-2">
                <Button label="Get Started" className="w-full lg:w-[136px] bg-[#481DA6] text-white font-[200] h-[40px] mt-8" />
              </div>

              <div className="text-[#481DA6] grid  lg:grid-cols-2">
                 
                <p className="ml-2 flex lg:flex-none items-center gap-1"><AiOutlineCaretRight className="hidden lg:block"/> <VscDebugStart className="block lg:hidden"/> <span>Seasoned mentors</span> </p>
                <p className="ml-2 flex lg:flex-none items-center gap-1"><AiOutlineCaretRight className="hidden lg:block"/> <VscDebugStart className="block lg:hidden"/> <span>New tech developments</span> </p>
                
                <p className="ml-2 flex lg:flex-none items-center gap-1 "><AiOutlineCaretRight className="hidden lg:block"/> <VscDebugStart className="block lg:hidden"/><span className="text-nowrap"> Carry out realtime projects </span> </p>
                <p className="ml-2 flex lg:flex-none items-center gap-1 "><AiOutlineCaretRight className="hidden lg:block"/> <VscDebugStart className="block lg:hidden"/><span className="text-nowrap"> Work in a cross functional team </span> </p>
               
              </div>

        </div>
        <div className="image order-first md:order-first lg:order-last lg:-mt-24">
            <Image
                width={512}
                height={531}
                src='/hero.svg'
                alt='TECHATHON'
                priority
                className="-mt-32 md:"
            />
        </div>
       </div>
    </div>