import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { signupUser } from "../services/api";
import { Loader2 } from "lucide-react";

interface SignupPageProps {
  setPage: (page: string) => void;
}

const SignupPage = ({ setPage }: SignupPageProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'Goldsmith' | 'DesignCompany' | ''>('');
    const [companyName, setCompanyName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (role === 'DesignCompany' && !companyName) {
            setError('Company name is required for Design Companies.');
            return;
        }
        setError('');
        setSuccess('');
        setLoading(true);
        try {
            await signupUser({ name, email, password, role, companyName: role === 'DesignCompany' ? companyName : undefined });
            setSuccess('Account created successfully! Please log in.');
            setTimeout(() => setPage('login'), 2000);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to sign up. Please try again.');
        } finally {
            setLoading(false);
        }
    };

  return (
     <div className="flex items-center justify-center min-h-[80vh] bg-muted/40 py-12">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create an Account</CardTitle>
          <CardDescription>Join our community to discover and share amazing designs.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" value={name} onChange={e => setName(e.target.value)} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">I am a...</Label>
                <Select onValueChange={(value: 'Goldsmith' | 'DesignCompany') => setRole(value)} value={role}>
                    <SelectTrigger><SelectValue placeholder="Select your role" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Goldsmith">Goldsmith</SelectItem>
                        <SelectItem value="DesignCompany">Design Company</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              {role === 'DesignCompany' && (
                  <div className="grid gap-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" value={companyName} onChange={e => setCompanyName(e.target.value)} required />
                  </div>
              )}
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              {success && <p className="text-sm text-green-600">{success}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                 {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                 Create an account
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="#" onClick={() => setPage('login')} className="underline">Log in</a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignupPage;