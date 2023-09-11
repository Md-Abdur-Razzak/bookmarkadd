import {BsBookmarkPlus } from 'react-icons/bs';

const Card = ({data,hadladalingChange}) => {
    const{cover,title,author_img,author,posted_date,reading_time,hashtags}=data
    return (
        <div className='border-b-2 mt-7'>
            <div className='w-[100%]'>
            <div>
                <img className='rounded-md' src={cover} alt="" />
                <h1 className='text-2xl font-mono mx-3 my-3'>{title}</h1>
            </div>
            <div className='flex gap-3 justify-between mt-2 px-2'>
                <div className='flex gap-4'>
                    <img width={'40'} className='rounded-full' src={author_img} alt="" />
                    <div className='text-xl font-mono'>
                        <h1>{author}</h1>
                        <h1>{posted_date}</h1>
                    </div>
                </div>
                <div>
                    {reading_time} <span>ago</span>
                   
                   <button className='text-2xl' onClick={()=>hadladalingChange(data)}> <BsBookmarkPlus></BsBookmarkPlus></button>
                   
                </div>
            </div>
            <div className='flex gap-3 font-mono mx-16 my-3'>
                <h2>{hashtags[0]}</h2>
                <h2>{hashtags[1]} </h2>
            </div>
        </div>
        </div>
    );
};

export default Card;