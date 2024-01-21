import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem, Fade } from '@mui/material';
import { Facebook, Twitter, Instagram, Menu as MenuIcon, Close, ExpandMore } from '@mui/icons-material';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showMobileMenuIcon, setShowMobileMenuIcon] = useState(false);
    const [servicesMenuAnchor, setServicesMenuAnchor] = useState(null);
    const [projectsMenuAnchor, setProjectsMenuAnchor] = useState(null);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleServicesMenuOpen = (event) => {
        setServicesMenuAnchor(event.currentTarget);
    };

    const handleProjectsMenuOpen = (event) => {
        setProjectsMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setServicesMenuAnchor(null);
        setProjectsMenuAnchor(null);
    };

    const handleResize = () => {
        setShowMobileMenuIcon(window.innerWidth < 1020);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="border-white py-2.5 dark:border-white cta-nav-glass">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <Link to="/" className="flex items-center">
                    <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Do Daily</span>
                </Link>

                <div className="flex items-center lg:order-2">
                    <IconButton color="secondary" aria-label="Facebook" style={{ color: '#000' }}>
                        <Facebook />
                    </IconButton>
                    <IconButton color="secondary" aria-label="Twitter" style={{ color: '#000' }}>
                        <Twitter />
                    </IconButton>
                    <IconButton color="secondary" aria-label="Instagram" style={{ color: '#000' }}>
                        <Instagram />
                    </IconButton>
                    {showMobileMenuIcon && (
                        <IconButton
                            onClick={handleMobileMenuToggle}
                            type="button"
                            color="secondary"
                            aria-label="Mobile Menu Toggle"
                        >
                            {isMobileMenuOpen ? <Close style={{ color: '#000' }} /> : <MenuIcon style={{ color: '#000' }} />}
                        </IconButton>
                    )}
                </div>

                <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link to="/" className="block py-2 pl-3 pr-4 text-black rounded lg:text-black lg:p-0 dark:text-black" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="block py-2 pl-3 pr-4 text-black rounded lg:text-black lg:p-0 dark:text-black" aria-current="page">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <div className="relative">
                                <button
                                    onClick={handleServicesMenuOpen}
                                    className="flex items-center block py-2 pl-3 pr-4 text-black rounded lg:text-black lg:p-0 dark:text-black focus:outline-none"
                                >
                                    Services <ExpandMore style={{ marginLeft: '4px' }} />
                                </button>
                                <Menu
                                    anchorEl={servicesMenuAnchor}
                                    open={Boolean(servicesMenuAnchor)}
                                    onClose={handleMenuClose}
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 400 }}
                                >
                                    <Fade in={Boolean(servicesMenuAnchor)}>
                                        <div>
                                            <MenuItem onClick={handleMenuClose}>
                                                <Link to="/service1" className="text-black">
                                                    Service 1
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleMenuClose}>
                                                <Link to="/service2" className="text-black">
                                                    Service 2
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleMenuClose}>
                                                <Link to="/service3" className="text-black">
                                                    Service 3
                                                </Link>
                                            </MenuItem>
                                        </div>
                                    </Fade>
                                </Menu>
                            </div>
                        </li>
                        <li>
                            <div className="relative">
                                <button
                                    onClick={handleProjectsMenuOpen}
                                    className="flex items-center block py-2 pl-3 pr-4 text-black rounded lg:text-black lg:p-0 dark:text-black focus:outline-none"
                                >
                                    Projects <ExpandMore style={{ marginLeft: '4px' }} />
                                </button>
                                <Menu
                                    anchorEl={projectsMenuAnchor}
                                    open={Boolean(projectsMenuAnchor)}
                                    onClose={handleMenuClose}
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 400 }}
                                >
                                    <Fade in={Boolean(projectsMenuAnchor)}>
                                        <div>
                                            <MenuItem onClick={handleMenuClose}>
                                                <Link to="/project1" className="text-black">
                                                    Project 1
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleMenuClose}>
                                                <Link to="/project2" className="text-black">
                                                    Project 2
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleMenuClose}>
                                                <Link to="/project3" className="text-black">
                                                    Project 3
                                                </Link>
                                            </MenuItem>
                                        </div>
                                    </Fade>
                                </Menu>
                            </div>
                        </li>
                        <li>
                            <Link to="/" className="block py-2 pl-3 pr-4 text-black rounded lg:text-black lg:p-0 dark:text-black" aria-current="page">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
