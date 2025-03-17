import Image from "next/image";

const authLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang='en'>
      <body>
        <main>
          <div className='flex flex-1 h-screen'>
            <div className='w-3/6'>{children}</div>
            <div className='w-3/6 relative'>
              <div className='absolute left-[80px] bottom-[200px] !max-w-[543px]'>
                <h2 className='text-white text-5xl font-bold line'>
                  Adventure Starts Here
                </h2>
                <p className='text-xl text-[#D0D0D0] mt-3.5'>
                  From audiobooks to dramas and series, experience storytelling
                  that comes alive in your ears.
                </p>
              </div>
              <Image
                src='/img/auth_img_1.webp'
                alt='baptizo_authentication_image'
                width={824}
                height={825}
                className='w-full h-full !object-cover'
                priority
              />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default authLayout;
