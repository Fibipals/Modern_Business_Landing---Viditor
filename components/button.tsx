import Link from 'next/link'
import { IconType } from 'react-icons'
import { GoFlame } from 'react-icons/go'

interface ButtonProps{
    text: string
    link: string
    icon: IconType
}

const Button = ({text, link, icon: Icon}: ButtonProps) => {
  return (
    <Link href={link}>
      <div className="relative flex flex-row items-center w-44 h-12 px-4 py-3 gap-4 bg-gradient-to-tr from-slate-950 to-blue-950 border-2 border-blue-950 rounded-xl shadow-md shadow-blue-900 cursor-pointer overflow-hidden">
        <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-lime-400 border-t border-l border-indigo-700 rotate-45"></div>
        <Icon className="w-7 h-7 p-1 border-[1px] border-slate-500 rounded-lg" />
        <p className="text-xs font-semibold text-white uppercase">{text}</p>
      </div>
    </Link>
  )
}

export default Button


        
