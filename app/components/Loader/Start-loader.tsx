import { Spinner } from '@nextui-org/react';
import React from 'react';
import { NeonGradientCard } from '../ui/neonCard';

type Props = {};

const Startloader = (props: Props) => {
    return (
        <div className='flex flex-col justify-center items-center h-screen '>
            <NeonGradientCard className="max-w-sm items-center justify-center text-center h-fit w-[450px]">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap light:text-black dark:text-white text-center text-xl font-medium leading-none tracking-tighter">
                    Hang tight! Your request is on its way! ⏳
                    <br />
                    Since we’re using <strong className='dark:text-purple-600'>Render’s free-tier backend </strong>, the server needs a little time to spin up after inactivity.
                    Typically, it takes around 2-3 minutes for the first request. <br /><br />
                    But don’t worry — everything will be up and running smoothly in no time! ⏱️
                    <br />
                    Thank you for your patience! 🌟
                </span>
            </NeonGradientCard>
        </div>
    );
};

export default Startloader;
