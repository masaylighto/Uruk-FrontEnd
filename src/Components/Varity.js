import React from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Components.css'
import '../Assets/css/Shared.css'
import { ReactComponent as SvgWave } from '../Assets/Icons/wave.svg';
import { ReactComponent as SvgTraingle } from '../Assets/Icons/Tringle.svg';
function Wave()
{
    return <SvgWave className='-mt-32  h-56 sm:visible invisible w-full Bg-Gradiant-Blue'></SvgWave>
}
function Tringle(props)
{
    return <SvgTraingle className={'sm:visible invisible '+props.className}></SvgTraingle>
}
export {Wave,Tringle}