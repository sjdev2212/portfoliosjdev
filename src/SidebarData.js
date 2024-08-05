import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import { HiEye } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome  color="#dc234c"/>,
        cName: 'nav-text'

    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <HiEye color="#dc234c" />,
        cName: 'nav-text'

    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaRegEnvelopeOpen color="#dc234c" />,
        cName: 'nav-text'

    },
    {
        title: 'About',
        path: '/about',
        icon: <VscAccount color="#dc234c" />,
        cName: 'nav-text'

    },

]
