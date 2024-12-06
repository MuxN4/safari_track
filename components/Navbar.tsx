import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Button from "./Button"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <div className="flex items-center" style={{ width: '150px', height: '40px' }}>
                <span className="text-black text-2xl font-bold">Safari</span>
                <span className="text-green-500 text-2xl font-bold">Track</span>
            </div>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
        <Image 
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  )
}

export default Navbar