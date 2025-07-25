import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { CircleUser, Gem, LogOut } from "lucide-react"
import { useAuth } from "../../contexts/AuthContext"

interface DashboardNavbarProps {
  setPage: (page: string) => void;
}

const DashboardNavbar = ({ setPage }: DashboardNavbarProps) => {
    const { user, logout } = useAuth();

    return (
        <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <a href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base" onClick={(e) => { e.preventDefault(); setPage('dashboard'); }}>
                    <Gem className="h-6 w-6 text-primary" />
                    <span className="sr-only">GoldDesignHub</span>
                </a>
                <a href="#" className="text-foreground transition-colors hover:text-foreground" onClick={(e) => { e.preventDefault(); setPage('dashboard'); }}>
                    Dashboard
                </a>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" onClick={(e) => { e.preventDefault(); setPage('favorites'); }}>
                    My Favorites
                </a>
                 {user?.role === 'DesignCompany' && (
                    <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" onClick={(e) => { e.preventDefault(); setPage('uploads'); }}>
                        My Uploads
                    </a>
                )}
            </nav>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <div className="ml-auto flex-1 sm:flex-initial">
                    {/* Future search bar could go here */}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={logout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Logout</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}

export default DashboardNavbar;
