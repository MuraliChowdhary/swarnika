import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Heart } from "lucide-react"

const designs = [
  { name: "Classic Gold Chain", category: "Chains", image: "https://placehold.co/600x400/ca8a04/FFFFFF?text=Chain+1" },
  { name: "Modern Silver Ring", category: "Rings", image: "https://placehold.co/600x400/71717a/FFFFFF?text=Ring+1" },
  { name: "Ruby Drop Earrings", category: "Earrings", image: "https://placehold.co/600x400/be123c/FFFFFF?text=Earrings+1" },
  { name: "Intricate Bracelet", category: "Bracelets", image: "https://placehold.co/600x400/059669/FFFFFF?text=Bracelet+1" },
  { name: "Sun Pendant", category: "Necklaces", image: "https://placehold.co/600x400/f97316/FFFFFF?text=Pendant+1" },
  { name: "Wedding Band", category: "Rings", image: "https://placehold.co/600x400/71717a/FFFFFF?text=Ring+2" },
  { name: "Pearl Studs", category: "Earrings", image: "https://placehold.co/600x400/be123c/FFFFFF?text=Earrings+2" },
  { name: "Thick Rope Chain", category: "Chains", image: "https://placehold.co/600x400/ca8a04/FFFFFF?text=Chain+2" },
];

const DesignsPage = () => {
    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Design Gallery</h1>
                <p className="text-muted-foreground mt-2">Explore our ever-growing collection of ornament designs.</p>
            </div>

            {/* Filters */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input placeholder="Search by name or design code..." />
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Filter by Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="rings">Rings</SelectItem>
                        <SelectItem value="necklaces">Necklaces</SelectItem>
                        <SelectItem value="earrings">Earrings</SelectItem>
                        <SelectItem value="bracelets">Bracelets</SelectItem>
                        <SelectItem value="chains">Chains</SelectItem>
                    </SelectContent>
                </Select>
                 <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="weight-asc">Weight (Low to High)</SelectItem>
                        <SelectItem value="weight-desc">Weight (High to Low)</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Design Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {designs.map((design, index) => (
                    <Card key={index} className="group overflow-hidden">
                        <div className="relative">
                            <img src={design.image} alt={design.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                            <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/70 hover:bg-white rounded-full">
                                <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500"/>
                            </Button>
                        </div>
                        <CardContent className="p-4">
                            <h3 className="font-semibold text-lg truncate">{design.name}</h3>
                            <p className="text-sm text-muted-foreground">{design.category}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DesignsPage;