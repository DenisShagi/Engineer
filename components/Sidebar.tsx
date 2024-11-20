import { HomeIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
            <div className="p-4">
                <h1 className="text-2xl font-bold">Технолог</h1>
            </div>
            <nav className="flex-1 mt-4 space-y-4">
                <ul>
                    <li className="flex items-center p-2 hover:bg-gray-700 rounded">
                        <HomeIcon className="w-6 h-6 mr-2" />
                        <span>Главная</span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-700 rounded">
                        <ChartBarIcon className="w-6 h-6 mr-2" />
                        <span>Аналитика</span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-700 rounded">
                        <CogIcon className="w-6 h-6 mr-2" />
                        <span>Настройки</span>
                    </li>
                </ul>
            </nav>
            <div className="p-4">
                <span className="text-sm">© 2024 Технолог</span>
            </div>
        </div>
    );
}
