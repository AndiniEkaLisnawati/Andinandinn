"use client";

import { Button, Navbar } from "flowbite-react";

export function NaigationBar() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Allo Bank</span>
            </Navbar.Brand>
            <div className="flex">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#hero">See More</Navbar.Link>
                <Navbar.Link href="#service">Service</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NaigationBar
