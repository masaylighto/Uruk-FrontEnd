import React from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Components.css'
import '../Assets/css/Shared.css'
import { ReactComponent as SvgWave } from '../Assets/Icons/wave.svg';
import { ReactComponent as SvgTraingle } from '../Assets/Icons/Tringle.svg';
import { ReactComponent as LeftArrow } from '../Assets/Icons/Left.svg';
import { ReactComponent as RightArrow } from '../Assets/Icons/Right.svg';
function Wave()
{
    return <SvgWave className='  sm:h-56 sm:visible  invisible w-full Bg-Gradiant-Blue'></SvgWave>
}
function Tringle(props)
{
    return <SvgTraingle className={'lg:visible invisible  h-44P w-full '+props.className}></SvgTraingle>
}
export {Wave,Tringle,LeftArrow,RightArrow}