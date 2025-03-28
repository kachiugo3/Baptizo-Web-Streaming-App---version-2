import {Button} from "@/components/ui/button";
import {Player} from "@lottiefiles/react-lottie-player";

export const CheckEmail = () => {
  return (
    <div className='flex gap-y-4 flex-col flex-1'>
      <div className='p-5 bg-grey-200 mt-5 rounded-md w-full max-w-[390px]'>
        <Player
          autoplay
          loop
          src='https://res.cloudinary.com/dgfsobn9i/raw/upload/v1743186315/Baptizo/check_email.json'
          style={{height: "250px", width: "250px"}}
        ></Player>
      </div>

      <Button className='rounded-md' size='lg'>
        Back To login
      </Button>
    </div>
  );
};
