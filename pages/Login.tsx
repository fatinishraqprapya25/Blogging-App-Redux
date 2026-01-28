
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard/overview');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 text-white p-12 flex-col justify-between">
        <div className="text-3xl font-bold">Inkwell</div>
        <div>
          <h1 className="text-5xl font-black mb-6">Welcome home.</h1>
          <p className="text-xl text-indigo-100 max-w-md">"The art of writing is the art of discovering what you believe."</p>
          <div className="mt-8 pt-8 border-t border-indigo-400">
            <p className="font-bold">- Gustave Flaubert</p>
          </div>
        </div>
        <div className="text-sm text-indigo-200">© 2024 Inkwell Media Inc.</div>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Sign in to your account</h2>
            <p className="text-slate-500">Welcome back! Enter your details below.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleLogin}>
            <Input label="Email Address" type="email" placeholder="alex@example.com" required />
            <div className="space-y-1">
              <Input label="Password" type="password" placeholder="••••••••" required />
              <div className="flex justify-end">
                <button type="button" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Forgot password?</button>
              </div>
            </div>
            
            <Button type="submit" className="w-full h-12 text-lg">Sign In</Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-500">Or continue with</span></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <Button variant="outline" className="gap-2">
                 <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                 Google
               </Button>
               <Button variant="outline" className="gap-2">
                 <svg className="w-5 h-5 fill-slate-900" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                 GitHub
               </Button>
            </div>
          </form>
          
          <p className="text-center text-sm text-slate-500">
            Don't have an account? <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-700">Get started today</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
