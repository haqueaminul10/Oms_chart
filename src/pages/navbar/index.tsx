import Link from 'next/link';

const navLinks = [
  { name: 'Rechart', href: '/' },
  { name: 'ECharts', href: '/echarts' },
];

const Navbar = () => {
  return (
    <header className='bg-gradient-to-r from-slate-900 to-cyan-900 shadow-lg sticky top-0 z-50 w-full'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-3'>
        <Link
          href='/'
          className='text-2xl font-bold tracking-wide text-white flex items-center gap-1'
        >
          OMS<span className='text-cyan-400'>Chart</span>
        </Link>
        <nav className='flex gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-white text-lg font-medium hover:text-cyan-400 transition-colors duration-200 relative after:block after:h-0.5 after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:w-full'
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
