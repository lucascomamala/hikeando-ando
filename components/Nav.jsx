import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <div className='xl:p-0 w-11/12 my-0 mx-auto'>
      <nav className="flex justify-between items-center static">
        <div className="flex flex-row">
          <Link href='/'>
            <div className="flex flex-row gap-4">
              <Image src='/assets/iso_white.png' height={50} width={80} alt="logo" />
              <Image src='/assets/logo_white_300.png' height={50} width={160}  alt="logo" />
            </div>
          </Link>
          <ul className="nav_menu flex flex-row items-end text-lg font-medium gap-5 pl-10">
            <Link href='/'>
              <li className="text-white hover:text-primary-orange hover:underline">Experiencias</li>
            </Link>
            <Link href='/'>
              <li className="text-white hover:text-primary-orange hover:underline">Nuestro Team</li>
            </Link>
            <Link href='/'>
              <li className="text-white hover:text-primary-orange hover:underline">Calendario</li>
            </Link>
            <Link href='/'>
              <li className="text-white hover:text-primary-orange hover:underline">Contacto</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row gap-8 items-center">
          <span className='font-extrabold'>55-5555-5555</span>
          <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-orange hover:bg-primary-orange/80">
            Reserva ahora
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Nav
