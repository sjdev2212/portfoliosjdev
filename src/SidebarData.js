import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import { HiEye } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'

    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <HiEye />,
        cName: 'nav-text'

    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaRegEnvelopeOpen />,
        cName: 'nav-text'

    },
    {
        title: 'About',
        path: '/about',
        icon: <VscAccount />,
        cName: 'nav-text'

    },

]
