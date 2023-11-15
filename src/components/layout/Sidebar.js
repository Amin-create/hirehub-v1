
import { Icons, } from '../../components';
import logo from "../../assets/images/logo/logo.png"
import { NavLink, useLocation } from 'react-router-dom';
import Icon from '../icon';

const NavItem = ({ value, slug }) => {
    const pathParts = slug.split('/');
    const _slug = pathParts[pathParts.length - 1];
    return (
        <li className='pb-2'>
            <NavLink
                to={value?.path}
                className={`flex justify-start items-center gap-x-2  ${value?.path === _slug ? "text-white bg-gradient-to-r from-purple-4 to-purple-3" : "text-gray-6"} hover:text-white text-[14px] hover:bg-gradient-to-r hover:from-purple-4 hover:to-purple-3 transition-all rounded-[8px] px-3 py-[10px]`}
            >
                <span className='text-[18px]'>{value?.icon}</span>
                <span>{value?.name}</span>
            </NavLink>
        </li >
    );
};
function Sidebar({ isSidebarOpen, toggleSidebar }) {

    const menu = [
        {
            icon: <Icon name="App" />,
            path: "dashboard",
            name: "Dashboard",
        },
        {
            icon: <Icon name="User" />,
            path: "manage-employers",
            name: "Manage Employers",
        },
        {
            icon: <Icon name="Users" />,
            path: "manage-candidates",
            name: "Manage Candidates",
        },
        {
            icon: <Icon name="Briefcase" />,
            path: "manage-jobs",
            name: "Manage Jobs",
        },
        {
            icon: <Icon name="Wallet" />,
            path: "manage-payments",
            name: "Manage Payments",
        },
        {
            icon: <Icon name="SmsNotification" />,
            path: "manage-subscription-packages",
            name: "Manage Subscription Packages",
        },
        {
            icon: <Icon name="Bell1" />,
            path: "manage-notification",
            name: "Manage Notification",
        },
        {
            icon: <Icon name="Document1" />,
            path: "manage-terms-and-conditions",
            name: "Manage Terms and Conditions",
        },
        {
            icon: <Icon name="Keyboard" />,
            path: "manage-faq",
            name: "Manage FAQ",
        },
        {
            icon: <Icon name="Envelope" />,
            path: "email-templates",
            name: "Email Templates",
        },
        {
            icon: <Icon name="Setting1" />,
            path: "manage-platform-setting",
            name: "Manage Platform setting",
        },
        {
            icon: <Icon name="Book" />,
            path: "manage-blogs",
            name: "Manage Blogs",
        },
    ]
    const location = useLocation();

    return (
        <aside
            className={`${isSidebarOpen ? 'translate-x-0' : ''} 
                fixed md:static z-50 w-[264px] h-screen
                text-black bg-white 
                -translate-x-full md:translate-x-0 transition-all shadow-md
                flex flex-col justify-between 
            `}
        >
            <div className="flex flex-col justify-start h-[88%]">
                <div className="relative pt-6 pb-6 px-2">
                    <img src={logo} alt="logo" />
                    <span className={`absolute top-[18px] right-[-13px] ${isSidebarOpen ? 'block' : 'hidden'}  md:hidden text-white text-[20px] cursor-pointer border-[5px] border-white rounded-full bg-purple-1`}
                        onClick={toggleSidebar}>
                        <Icons.GoChevronLeft />
                    </span>
                </div>
                <ul className="max-h-[610px] overflow-y-scroll scrollbar p-4">
                    {menu.map((value) => {
                        return (
                            <NavItem key={value * 2} value={value} slug={location?.pathname} />
                        )
                    })}
                </ul>
            </div>
            <a className='block h-[60px] border-t px-4 pt-2 pb-4'>
                <NavLink
                    to={'/login'}
                    className='flex justify-start items-center gap-x-2 text-gray-6 hover:text-white text-[14px] hover:bg-gradient-to-r hover:from-purple-4 hover:to-purple-3 transition-all rounded-[8px] px-3 py-[10px]'
                >
                    <span className='text-[18px]'>
                        <Icon name="Logout" />
                    </span>
                    <span>Logout</span>
                </NavLink>
            </a>
        </aside>
    )
}

export default Sidebar