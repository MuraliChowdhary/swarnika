// -----------------------------------------------------------------
import { Gem, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-2">
                     <div className="flex items-center gap-2 mb-2">
                        <Gem className="h-6 w-6 text-primary" />
                        <span className="font-bold text-lg text-foreground">GoldDesignHub</span>
                    </div>
                    <p className="text-sm">Digitizing the art of jewelry design for the modern era.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-primary">Home</a></li>
                        <li><a href="#" className="hover:text-primary">Designs</a></li>
                        <li><a href="#" className="hover:text-primary">About Us</a></li>
                        <li><a href="#" className="hover:text-primary">Contact</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-4">For Users</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-primary">Goldsmiths</a></li>
                        <li><a href="#" className="hover:text-primary">Design Companies</a></li>
                        <li><a href="#" className="hover:text-primary">Support</a></li>
                        <li><a href="#" className="hover:text-primary">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-primary"><Twitter /></a>
                        <a href="#" className="hover:text-primary"><Instagram /></a>
                        <a href="#" className="hover:text-primary"><Facebook /></a>
                    </div>
                </div>
            </div>
            <div className="bg-muted-foreground/10 py-4">
                <div className="container text-center text-sm">
                    © {new Date().getFullYear()} GoldDesignHub. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;