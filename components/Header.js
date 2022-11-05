function Header() {
  return (
    <header className='fixed top-0 w-full bg-white z-50 shadow-xl'>
      <nav className='container mx-auto py-2 px-4 flex justify-between items-center'>
        <div id='logo'>
          <p className='select-none text-2xl font-black'>Fahad Hossian</p>
        </div>
        <button className='text-lg px-4 py-2.5 text-white bg-[#b82d24] font-bold hover:bg-white border-4 border-[#b82d24] transition-all duration-150 hover:text-[#b82d24]'>
          <a
            href='https://www.youtube.com/channel/UC89PsEw-lR-76Q27ZyY-msQ'
            target='_blank'
            rel='noreferrer'
          >
            Subscribe
          </a>
        </button>
      </nav>
    </header>
  )
}

export default Header
