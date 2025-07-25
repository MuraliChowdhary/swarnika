import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Gem, Menu, X } from 'lucide-react';

interface NavbarProps {
  setPage: (page: string) => void;
}

const Navbar = ({ setPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Designs', page: 'designs' },
    { name: 'For Goldsmiths', page: 'goldsmiths' },
    { name: 'For Companies', page: 'companies' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
          <Gem className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">GoldDesignHub</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href="#" onClick={(e) => { e.preventDefault(); setPage(link.page); }} className="text-muted-foreground transition-colors hover:text-foreground">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" onClick={() => setPage('login')}>Log In</Button>
          <Button onClick={() => setPage('signup')}>Sign Up</Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href="#" onClick={(e) => { e.preventDefault(); setPage(link.page); setIsOpen(false); }} className="text-lg font-medium text-muted-foreground hover:text-foreground">
                {link.name}
              </a>
            ))}
            <div className="border-t pt-4 flex flex-col gap-2">
               <Button variant="outline" onClick={() => {setPage('login'); setIsOpen(false);}}>Log In</Button>
               <Button onClick={() => {setPage('signup'); setIsOpen(false);}}>Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;