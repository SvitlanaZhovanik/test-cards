import { Button} from './Button';
import { convertValue } from '../helpers/convertValue';
import Logo from '../assets/Logo.svg'


export const Card = ({id, user, tweets, followers, avatar, follow,
  onFollow }) => {
  const isFollow = n => {
    onFollow(id, n);
  };

  return (
    <li className='cardBackground w-[380px] h-[460px] relative pt-5 pb-8 rounded-large shadow-large'>
          <img src={Logo} width={76} height={22} alt="logo site" className='w-[76px] h-[22px] pl-5'/>
          <div className='line relative mt-[172px]'>
              <div className='absolute w-[80px] h-[80px] mx-auto rounded-full bg-light shadow-avatar top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40'>
          <img src={avatar} alt={user} width={62} height={62}  className='rounded-full z-50 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
                </div>
            </div>

      <div className='px-5 mt-7'>
        <div className='grid grid-cols-1 text-center items-center gap-4 py-[26px] justify-center'>
          <p className='uppercase text-light'>{tweets} Tweets</p>
          <p className='uppercase text-light'>{convertValue(followers)} Followers</p>
        </div>

       {!follow && <Button color='bg-light' onClick={() => isFollow(1)}>Follow</Button>}
      {follow && (
        <Button color='bg-accent' onClick={() => isFollow(-1)}>
          Following
        </Button>
      )}
      </div>
    </li>
  );
};