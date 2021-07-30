function Header (){
    return (
        <header className="fixed w-full bg-blue-900 text-white md:flex md:justify-between">
        <a className="font-bold block px-10 py-6 hover:bg-blue-400 font-serif text-2xl" href="#top">Jennifer Shaffer Brown</a>
        <nav>
            <ul className="md:flex"> 
                <li> 
                    <a className="block px-8 py-6 hover:bg-blue-400 text-lg" href="#hero">Contact</a>
                </li>
                <li>
                    <a className="block px-8 py-6 hover:bg-blue-400 text-lg" href="#about">Hobbies</a>
                </li>
                <li>
                    <a className="block px-8 py-6 hover:bg-blue-400 text-lg" href="#techsupport">Peanut Gallery</a>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;