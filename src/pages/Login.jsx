import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleSubmit = (e) => {
     localStorage.removeItem('user');
    e.preventDefault();
    if (email && password) {
      console.log("Нэвтрэх оролдлого:", email, password);
      navigate('/industry');
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 grid place-items-center h-screen">
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
        <div className="w-full max-w-md bg-white/50 dark:bg-gray-800 dark:text-white backdrop-blur-lg shadow-lg p-8 mb-10 rounded-3xl border border-gray-300 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="flex flex-col items-center mb-4 text-green-700 font-bold text-2xl">GREEN MONITOR</div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Имейл хаяг</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-green-500 focus:border-green-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Нууц үг</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-green-500 focus:border-green-500"/>
            </div>
            <button type="submit" className="w-full bg-green-500 text-white font-semibold text-lg py-2 mt-6 mb-8 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700">Нэвтрэх</button>
          </form>
          <div className="dark:text-gray-800 text-white">m</div>
        </div>
        <div className="absolute top-5 left-5 flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500 drak:text-white">
                {darkMode ? 'Dark mode' : 'Light mode'}
            </span>
            <button onClick={() => setDarkMode(!darkMode)} 
                  className="relative w-14 h-8 flex items-center rounded-full shadow-md bg-grya-700 dark:bg-gray-700 px-1 transition duration-300">
                <div
                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            darkMode ? 'translate-x-6' : ''
          }`}
        />
            </button>
        </div>
      </div>
    </div>
  );
}
