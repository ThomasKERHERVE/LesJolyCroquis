import { JSX } from 'react'

type BoxContactProps = {
  icon: JSX.Element
  title: string
  content: JSX.Element
}

export default function BoxContact({ icon, title, content }: BoxContactProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-6 border rounded-xl shadow-md text-center bg-white w-full max-w-sm">
      <div className="text-4xl text-[#e0d6cb]">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <div className="text-gray-700">{content}</div>
    </div>
  )
}
