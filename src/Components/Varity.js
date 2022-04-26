import React from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Components.css'
import '../Assets/css/Shared.css'
import { ReactComponent as SvgWave } from '../Assets/Icons/wave.svg';
function Wave()
{
    return <SvgWave className='-mt-32  h-64 w-full Bg-Gradiant-Blue'></SvgWave>
}
export {Wave}