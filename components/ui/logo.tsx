import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="Pixsence">
      {/* Иконка: лаконичный синий квадрат со скруглением — символ "On-prem/Box" решения */}
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" className="fill-blue-600" />
        <path 
          d="M10 10H22V22H10V10Z" 
          className="fill-white opacity-20" 
        />
        <path 
          d="M14 14H18V18H14V14Z" 
          className="fill-white" 
        />
      </svg>
      {/* Текстовая часть */}
      <span className="text-xl font-bold tracking-tight text-gray-200">
        Pixsence<span className="text-blue-500">.</span>
      </span>
    </Link>
  );
}
