import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useAuth } from "../contexts/AuthContext";
import { Award, Gem, Upload } from "lucide-react";

const DashboardPage = () => {
    const { user } = useAuth();
    
    return (
        <div className="container py-12">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
            <p className="text-muted-foreground mb-8">Here's a summary of your account.</p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Your Role</CardTitle>
                        <Award className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{user?.role}</div>
                        <p className="text-xs text-muted-foreground">
                            {user?.role === 'Goldsmith' ? 'Access thousands of designs' : 'Upload your new collections'}
                        </p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Favorited Designs</CardTitle>
                        <Gem className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">
                            +2 since last week
                        </p>
                    </CardContent>
                </Card>
                {user?.role === 'DesignCompany' && (
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Designs Uploaded</CardTitle>
                            <Upload className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">45</div>
                            <p className="text-xs text-muted-foreground">
                                +5 new designs this month
                            </p>
                        </CardContent>
                    </Card>
                )}
            </div>
             <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
                {/* Add quick action buttons here */}
            </div>
        </div>
    );
};

export default DashboardPage;
