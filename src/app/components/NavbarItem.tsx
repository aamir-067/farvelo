"use client";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarItem = ({ className = "", title, icon, pathname }: any) => {
    const router = useRouter();


    // get current path
    const { pathname: currentPath } = router;
    return (
        <li>
            <Link href={pathname}>
                <p
                    className={`px-3 py-2 mr-4 text-base text-gray-50 transition duration-300 ease-in-out border-b  border-brand  focus:outline-none ${pathname == currentPath
                        ? "border-opacity-0 lg:border-opacity-80"
                        : "border-opacity-0 hover:border-opacity-80"
                        } ${className}`}
                >
                    {icon && <i className={`fa ${icon} mr-2`}></i>}
                    {title}
                </p>
            </Link>
        </li>
    );
};
NavbarItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.node.isRequired,
    icon: PropTypes.string,
    pathname: PropTypes.string.isRequired,
};
export default NavbarItem;
