import Link from 'next/link'
import Image from 'next/image'
// Импортируем твой новый файл логотипа
import LogoImg from '@/public/images/pixsence-logo.png'

export default function Logo() {
  return (
    <Link className="inline-flex items-center justify-center" href="/" aria-label="Pixsence">
      <Image
        src={LogoImg}
        width={32} // Ширина в пикселях (можно увеличить до 40, если будет мелко)
        height={32} // Высота должна быть такой же, чтобы логотип оставался квадратным
        alt="Pixsence Logo"
        priority // Загружаем логотип сразу, так как он вверху страницы
        className="rounded-sm" // Опционально: добавляем небольшое скругление углов
      />
    </Link>
  )
}
