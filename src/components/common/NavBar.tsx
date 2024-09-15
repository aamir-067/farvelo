"use client";
import React, { useEffect, useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../../public/logo.png";
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

// import sv from "@/../public/logo.svg";
const NavBar = () => {
    const [isDark, setIsDark] = useState(false);
    const [modelOpen, setModelOpen] = useState(false);
    const toggleDarkMode = () => {
        const root = document.getElementsByTagName('html')[0];
        const isDark = root.classList.contains('dark');
        if (isDark) {
            root.classList.remove('dark');
            root.classList.remove("bg-slate-950");
            setIsDark(false);
            localStorage.removeItem("isDark");
        } else {
            root.classList.add('dark');
            root.classList.add("bg-slate-950");
            setIsDark(true);
            localStorage.setItem("isDark", "true");
        }
    }

    useEffect(() => {
        const dark = localStorage.getItem("isDark");
        const root = document.getElementsByTagName('html')[0];
        if (dark) {
            root.classList.add('dark');
            root.classList.add("bg-slate-950");
            setIsDark(true);
        } else {
            root.classList.remove('dark');
            root.classList.remove("bg-slate-950");
            setIsDark(false);
        }
    }, []);

    const router = useRouter();
    return (
        <nav className='w-screen relative'>
            <div className='flex py-4 lg:py-6 px-2 lg:px-20 md:px-10 items-center justify-between'>
                <div className='size-14 flex items-center justify-center rounded-full bg-transparent dark:bg-white'>
                    <Image src={Logo} className='size-10 object-contain' alt='logo of the website' />
                </div>
                <NavigationMenu className='hidden lg:block'>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <button className='mt-2' onClick={toggleDarkMode}>
                                {
                                    isDark ?
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_9_31)">
                                                <path d="M6.76 4.83999L4.96 3.04999L3.55 4.45999L5.34 6.24999L6.76 4.83999ZM4 10.5H1V12.5H4V10.5ZM13 0.549988H11V3.49999H13V0.549988ZM20.45 4.45999L19.04 3.04999L17.25 4.83999L18.66 6.24999L20.45 4.45999ZM17.24 18.16L19.03 19.96L20.44 18.55L18.64 16.76L17.24 18.16ZM20 10.5V12.5H23V10.5H20ZM12 5.49999C8.69 5.49999 6 8.18999 6 11.5C6 14.81 8.69 17.5 12 17.5C15.31 17.5 18 14.81 18 11.5C18 8.18999 15.31 5.49999 12 5.49999ZM11 22.45H13V19.5H11V22.45ZM3.55 18.54L4.96 19.95L6.75 18.15L5.34 16.74L3.55 18.54Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_9_31">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        :
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 21C9.48333 21 7.354 20.129 5.612 18.387C3.87067 16.6457 3 14.5167 3 12C3 9.70002 3.75 7.70402 5.25 6.01202C6.75 4.32069 8.66667 3.33336 11 3.05002C11.4167 3.00002 11.7417 3.15002 11.975 3.50002C12.2083 3.85002 12.2 4.21669 11.95 4.60002C11.6667 5.03336 11.454 5.49169 11.312 5.97502C11.1707 6.45836 11.1 6.96669 11.1 7.50002C11.1 9.00002 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.0167 12.9 17.5293 12.825 18.038 12.675C18.546 12.525 19 12.3167 19.4 12.05C19.75 11.8167 20.1083 11.804 20.475 12.012C20.8417 12.2207 21 12.55 20.95 13C20.7167 15.3 19.7377 17.2084 18.013 18.725C16.2877 20.2417 14.2833 21 12 21Z" fill="black" />
                                        </svg>
                                }
                            </button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-fit flex flex-col gap-y-3 p-4">
                                    <p className='whitespace-nowrap'>Web Development</p>
                                    <p className='whitespace-nowrap'>Blockchain Solutions</p>
                                    <p className='whitespace-nowrap'>Mobile app Development</p>
                                    <p className='whitespace-nowrap'>Social media marking</p>
                                    <p className='whitespace-nowrap'>Welcome</p>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-40 flex flex-col gap-y-3 p-4">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Link href={"/timerApp"}>Timer App</Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Productivity App</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>Morph AI</TooltipTrigger>
                                            <TooltipContent>
                                                <p>mobile app for image transformation</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>Coming Soon</TooltipTrigger>
                                            <TooltipContent>
                                                <p>coming soon</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <button onClick={() => router.push("/about")}>About Us</button>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button onClick={() => router.push("/contact")} variant={"default"}>Contact Us</Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>






                <button onClick={() => setModelOpen(!modelOpen)} className={`lg:hidden z-50 block ${modelOpen ? "hidden" : ""}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5V7H22V5H2ZM2 11V13H22V11H2ZM2 17V19H22V17H2Z" fill="black" />
                    </svg>
                </button>


            </div>


            {/* model */}
            <div
                className={`absolute z-40 p-3 top-0 h-screen w-screen bg-red-400 ${modelOpen ? "" : "hidden"}`}
            >
                <button onClick={() => setModelOpen(!modelOpen)} className='lg:hidden block'>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_14_30)">
                            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_14_30">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </button>


                <NavigationMenu>
                    <NavigationMenuList className='flex flex-col justify-center items-center gap-8'>
                        <NavigationMenuItem>
                            <button className='mt-2 flex items-center gap-x-3' onClick={toggleDarkMode}>
                                {
                                    isDark ?
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_9_31)">
                                                <path d="M6.76 4.83999L4.96 3.04999L3.55 4.45999L5.34 6.24999L6.76 4.83999ZM4 10.5H1V12.5H4V10.5ZM13 0.549988H11V3.49999H13V0.549988ZM20.45 4.45999L19.04 3.04999L17.25 4.83999L18.66 6.24999L20.45 4.45999ZM17.24 18.16L19.03 19.96L20.44 18.55L18.64 16.76L17.24 18.16ZM20 10.5V12.5H23V10.5H20ZM12 5.49999C8.69 5.49999 6 8.18999 6 11.5C6 14.81 8.69 17.5 12 17.5C15.31 17.5 18 14.81 18 11.5C18 8.18999 15.31 5.49999 12 5.49999ZM11 22.45H13V19.5H11V22.45ZM3.55 18.54L4.96 19.95L6.75 18.15L5.34 16.74L3.55 18.54Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_9_31">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        :
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 21C9.48333 21 7.354 20.129 5.612 18.387C3.87067 16.6457 3 14.5167 3 12C3 9.70002 3.75 7.70402 5.25 6.01202C6.75 4.32069 8.66667 3.33336 11 3.05002C11.4167 3.00002 11.7417 3.15002 11.975 3.50002C12.2083 3.85002 12.2 4.21669 11.95 4.60002C11.6667 5.03336 11.454 5.49169 11.312 5.97502C11.1707 6.45836 11.1 6.96669 11.1 7.50002C11.1 9.00002 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.0167 12.9 17.5293 12.825 18.038 12.675C18.546 12.525 19 12.3167 19.4 12.05C19.75 11.8167 20.1083 11.804 20.475 12.012C20.8417 12.2207 21 12.55 20.95 13C20.7167 15.3 19.7377 17.2084 18.013 18.725C16.2877 20.2417 14.2833 21 12 21Z" fill="black" />
                                        </svg>
                                }

                                <p>Dark theme</p>
                            </button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-fit flex flex-col gap-y-3 p-4">
                                    <p className='whitespace-nowrap'>Web Development</p>
                                    <p className='whitespace-nowrap'>Blockchain Solutions</p>
                                    <p className='whitespace-nowrap'>Mobile app Development</p>
                                    <p className='whitespace-nowrap'>Social media marking</p>
                                    <p className='whitespace-nowrap'>Welcome</p>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-40 flex flex-col gap-y-3 p-4">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Link href={"/timerApp"}>Timer App</Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Productivity App</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>Morph AI</TooltipTrigger>
                                            <TooltipContent>
                                                <p>mobile app for image transformation</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>Coming Soon</TooltipTrigger>
                                            <TooltipContent>
                                                <p>coming soon</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <button onClick={() => router.push("/about")}>About Us</button>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button onClick={() => router.push("/contact")} variant={"default"}>Contact Us</Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>



            </div>
        </nav>
    )
}

export default NavBar