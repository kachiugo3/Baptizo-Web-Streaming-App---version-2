import {Button} from "@/components/ui/button";
import {Player} from "@lottiefiles/react-lottie-player";
import {useRouter} from "next/navigation";

export const CheckEmail = ({lottieImg}: {lottieImg?: string}) => {
  const router = useRouter();
  const fallbackLottie =
    "https://res.cloudinary.com/dgfsobn9i/raw/upload/v1743186315/Baptizo/check_email.json";

  return (
    <div className='flex gap-y-4 flex-col flex-1'>
      <div className='p-5 bg-grey-200 mt-5 rounded-md w-full max-w-[390px]'>
        <Player
          autoplay
          loop
          src={lottieImg || fallbackLottie}
          style={{height: "250px", width: "250px"}}
        />
      </div>

      <Button
        className='rounded-md !w-full'
        size='lg'
        onClick={() => router.push("/login")}
      >
        Back To login
      </Button>
    </div>
  );
};
