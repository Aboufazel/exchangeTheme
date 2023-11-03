import {Fragment, useState} from 'react'
import {Dialog, Disclosure, Popover, Transition} from '@headlessui/react'
import Logo from '../../assets/svg/logo.svg';
import Style from "../../styles/layouts/header.module.scss";
import User from "../../assets/svg/user.svg";
import Search from "../../assets/svg/search.svg"


import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon, PhoneIcon, PlayCircleIcon} from '@heroicons/react/20/solid'
import Image from "next/image";
import {HeaderMenu} from "@/Data/Data";
import Link from "next/link";


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [value, setValue] = useState("HOME");


    const manageChange = (value) => {
        setValue(value)
    }

    return (
        <header className={""}>
            <nav className="flex text-white items-center justify-between p-6 lg:px-8"
                 aria-label="Global">
                <div onClick={()=>manageChange("HOME")} className="flex lg:flex-1">
                    <Link href="/" className="flex items-center -m-1.5 p-1.5">
                        <div className={`${Style.logoIcon} flex items-center justify-center`}>
                            <Image src={Logo} alt={"arzi-exchanger"}/>
                        </div>
                        <h1 className="text-2xl font-bold tracking-wider">
                            <span className={`font-bold ${Style.logoTitle}`}>{"A"}</span>
                            {"RZICLUB"}
                        </h1>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        {
                            !mobileMenuOpen ? <Bars3Icon className="h-6 w-6 stroke-white" aria-hidden="true"/> : ""
                        }
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">

                    {
                        HeaderMenu.map(item => (
                            <div className={`text-lg text-white leading-6 text-gray-900  ${Style.headerMenu}`}
                                 key={`header-menu-${item.id}`} onClick={() => manageChange(item.name)}>
                                <Link href={item.Link}
                                      className={value === item.name ? `font-semibold ${Style.menuItem} ` : ""}>
                                    {item.name}
                                </Link>
                            </div>
                        ))
                    }

                </Popover.Group>
                <div className="hidden lg:flex items-center lg:flex-1 lg:justify-end">
                    <div className={`${Style.tracingSearch} flex justify-end`}>
                        <Image src={Search} alt={"exchanger-search"}/>
                        <input type="text" name="search" placeholder="TRACING CODE"/>
                    </div>
                    <Link href="/auth" className="text-sm text-white  font-semi-bold leading-6 text-gray-900">
                        <div className={`${Style.userIcon} flex items-center justify-center`}>
                            <Image src={User} alt={"arzi-exchanger"}/>
                        </div>
                    </Link>
                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>

                <div className="fixed inset-0 z-10"/>

                <Dialog.Panel
                    className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto ${Style.mobileMenuBg}   px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <XMarkIcon className="h-6 w-6 stroke-white" aria-hidden="true"/>
                        </button>

                        <div className="lg:hidden flex items-center">
                            <div className={`${Style.tracingSearch} flex justify-end`}>
                                <Image src={Search} alt={"exchanger-search"}/>
                                <input type="text" name="search" placeholder="TRACING CODE"/>
                            </div>
                            <a href="/auth" className="text-sm text-white  font-semi-bold leading-6 text-gray-900">
                                <div className={`${Style.userIcon} flex items-center justify-center`}>
                                    <Image src={User} alt={"arzi-exchanger"}/>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 flex flex-col items-end py-6">

                                {
                                    HeaderMenu.map(item => (
                                        <Link
                                            key={`mobile-menu-${item.id}`}
                                            href={item.Link}
                                            className="-mx-3 text-white block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900"
                                        >
                                            {item.name}
                                        </Link>
                                    ))
                                }
                            </div>
                            <div className="py-6">
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>

            </Dialog>
        </header>
    )
}
