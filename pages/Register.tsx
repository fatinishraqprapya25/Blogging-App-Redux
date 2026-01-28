
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard/overview');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 text-white p-12 flex-col justify-between">
        <div className="text-3xl font-bold">Inkwell</div>
        <div>
          <h1 className="text-5xl font-black mb-6">Create without limits.</h1>
          <p className="text-xl text-indigo-100 max-w-md">Join a community of 500,000+ writers and start your journey today.</p>
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-bold">50M+</p>
              <p className="text-indigo-200">Monthly Readers</p>
            </div>
            <div>
              <p className="text-3xl font-bold">10K+</p>
              <p className="text-indigo-200">Verified Authors</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <img key={i} className="w-8 h-8 rounded-full border-2 border-indigo-600 bg-slate-200" src={`https://picsum.photos/seed/user${i}/32/32`} />
            ))}
          </div>
          <p className="text-sm text-indigo-200">Join Alex, Sarah and 500k others.</p>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Create your account</h2>
            <p className="text-slate-500">Free forever. No credit card required.</p>
          </div>
          
          <form className="space-y-4" onSubmit={handleRegister}>
            <Input label="Full Name" placeholder="Alex Rivera" required />
            <Input label="Email Address" type="email" placeholder="alex@example.com" required />
            <Input label="Password" type="password" placeholder="At least 8 characters" required />
            
            <div className="flex items-start gap-3 py-2">
              <input type="checkbox" id="terms" className="mt-1 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" required />
              <label htmlFor="terms" className="text-sm text-slate-500">
                I agree to the <Link to="/terms" className="text-indigo-600 font-medium">Terms of Service</Link> and <Link to="/privacy" className="text-indigo-600 font-medium">Privacy Policy</Link>.
              </label>
            </div>
            
            <Button type="submit" className="w-full h-12 text-lg">Create Account</Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-500">Or sign up with</span></div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
               <Button variant="outline" className="gap-2 h-12">
                 <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                 Continue with Google
               </Button>
            </div>
          </form>
          
          <p className="text-center text-sm text-slate-500">
            Already have an account? <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-700">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
