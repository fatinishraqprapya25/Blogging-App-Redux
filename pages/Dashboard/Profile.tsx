
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const Profile: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Profile Settings</h1>
        <p className="text-slate-500">Update your personal information and public profile.</p>
      </div>

      <div className="bg-white rounded-xl border shadow-sm">
        <div className="p-8 border-b">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <img 
                src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&size=120`} 
                className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover" 
              />
              <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full shadow-lg border-2 border-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </button>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900">{user?.name}</h3>
              <p className="text-slate-500 text-sm mb-4">{user?.role} since 2023</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Button variant="outline" size="sm">Remove Photo</Button>
                <Button variant="secondary" size="sm">Change Avatar</Button>
              </div>
            </div>
          </div>
        </div>
        
        <form className="p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Full Name" defaultValue={user?.name} />
            <Input label="Email Address" defaultValue={user?.email} disabled />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">Bio</label>
            <textarea 
              className="w-full min-h-[120px] p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Tell the world about yourself..."
              defaultValue="I am a software engineer and writer passionate about the future of technology and human-centric design."
            />
          </div>

          <div className="pt-6 border-t flex justify-end gap-3">
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Save Changes</Button>
          </div>
        </form>
      </div>

      <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-red-900">Danger Zone</h4>
          <p className="text-sm text-red-700">Deleting your account is permanent and cannot be undone.</p>
        </div>
        <Button variant="danger">Delete Account</Button>
      </div>
    </div>
  );
};

export default Profile;
