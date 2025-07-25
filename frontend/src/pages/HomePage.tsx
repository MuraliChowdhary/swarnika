//                     /src/pages/HomePage.tsx
//
// -----------------------------------------------------------------
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowRight, BookOpen, UploadCloud, Heart } from 'lucide-react';

const featuredDesigns = [
    { name: "Emerald Necklace", image: "https://res.cloudinary.com/duwwsrzyp/image/upload/v1753462936/Necklace_rm8ocw.webp" },
    { name: "Diamond Ring", image: "https://res.cloudinary.com/duwwsrzyp/image/upload/v1753463122/ring1_gptxng.webp" },
    { name: "Gold Bracelet", image: "https://res.cloudinary.com/duwwsrzyp/image/upload/v1753458795/Bracelet4_x3ypb8.webp" },
    { name: "Gold Earrings", image: "https://res.cloudinary.com/duwwsrzyp/image/upload/v1753459619/Chandabalis5_enjq6i.webp" },
];

const categories = [
    { name: "Rings", icon: "💍" },
    { name: "Necklaces", icon: "💎" },
    { name: "Earrings", icon: "✨" },
    { name: "Bracelets", icon: "🔗" },
];

const HomePage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <img src="https://images.unsplash.com/photo-1611652033933-55c88b7aa2c2?q=80&w=2070&auto=format&fit=crop" alt="Jewelry background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 container">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">The Future of Jewelry Design is Here</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                        Say goodbye to heavy books. Access thousands of exquisite gold and silver ornament designs, anytime, anywhere.
                    </p>
                    <Button size="lg" className="mt-8">
                        Explore Designs <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-muted">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-2">A Digital Revolution for Jewelry</h2>
                    <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">We connect goldsmiths with the latest trends from top design companies, all in one seamless platform.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4"><BookOpen className="h-8 w-8 text-primary" /></div>
                                <CardTitle>For Goldsmiths</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Carry an entire design universe in your pocket. Showcase stunning designs to clients effortlessly and mark favorites for custom orders.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                 <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4"><UploadCloud className="h-8 w-8 text-primary" /></div>
                                <CardTitle>For Design Companies</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Instantly publish your latest collections to a nationwide network of goldsmiths. Get real-time feedback and expand your reach.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                 <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4"><Heart className="h-8 w-8 text-primary" /></div>
                                <CardTitle>Always Up-to-Date</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Our library is constantly updated with fresh, trend-setting designs, ensuring you always have the best to offer.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Featured Designs Section */}
            <section className="py-20">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-12">Featured Designs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredDesigns.map(design => (
                            <Card key={design.name} className="overflow-hidden group">
                                <img src={design.image} alt={design.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-lg">{design.name}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
             {/* Categories Section */}
            <section className="py-20 bg-muted">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-12">Browse by Category</h2>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                         {categories.map(category => (
                             <Card key={category.name} className="flex flex-col items-center justify-center p-6 hover:bg-primary/10 cursor-pointer transition-colors">
                                 <div className="text-5xl mb-2">{category.icon}</div>
                                 <h3 className="font-semibold text-xl">{category.name}</h3>
                             </Card>
                         ))}
                     </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="py-20">
                <div className="container">
                    <div className="bg-primary text-primary-foreground p-12 rounded-lg text-center">
                        <h2 className="text-3xl font-bold">Ready to Join the Digital Design Hub?</h2>
                        <p className="mt-2 mb-6 max-w-xl mx-auto">Create an account today and transform how you buy and sell jewelry designs.</p>
                        <Button variant="secondary" size="lg">Get Started for Free</Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
