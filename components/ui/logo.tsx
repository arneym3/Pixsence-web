import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo-main.png' // Путь к твоему новому лого

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Pixsence">
      <Image src={LogoImg} width={32} height={32} alt="Pixsence Logo" priority />
    </Link>
  )
}
