import AuthCarousel from "@/components/Shared/AuthCarousel";

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang='en'>
      <body>
        <main>
          <div className='flex flex-1 !h-screen'>
            <div className='xl:w-3/6 w-full hideScrollBar flex items-center h-full'>
              {children}
            </div>

            <AuthCarousel />
          </div>
        </main>
      </body>
    </html>
  );
};

export default AuthLayout;
