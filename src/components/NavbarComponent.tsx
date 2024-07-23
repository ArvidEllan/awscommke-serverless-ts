import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import DropDownMenu from "./DropDownMenu";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Members", "Sponsors", "Events", "Writeups", "Contact Us"];

  return (
    <Navbar
      position="sticky"
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      className="flex overflow-y-hidden lg:overflow-y-auto"
    >
      {/* Logo and dropdown menu for small screens */}
      <NavbarContent className="sm:hidden flex items-center w-full p-2 m-2">
        <NavbarBrand className="flex-1">
          <img
            src="/AWSLogo.png"
            alt="AWS Logo"
            className="w-14 sm:w-14" // Responsive width classes
          />
        </NavbarBrand>

        <div className="flex-none w-16 sm:w-18">
          <DropDownMenu
            menuLabels={[
              "Members",
              "Sponsors",
              "Events",
              "Writeups",
              "Contact Us",
            ]}
          />
        </div>
      </NavbarContent>

      {/* Logo for big screens */}
      <NavbarContent className="hidden sm:flex items-center w-1/4 p-2 m-4 ">
        <NavbarBrand>
          <img
            src="/AWSLogo.png"
            alt="AWS Logo"
            className="w-14 sm:w-16 md:w-20 lg:w-22 xl:w-24" // Responsive width classes
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Navigation links for big screens */}
      <NavbarContent className="hidden sm:flex items-center justify-start w-full sm:w-3/4 p-2 m-2">
        <NavbarItem className="flex-1 flex items-center space-x-6 lg:space-x-10 xl:space-x-12 justify-center">
          <Link href="#" aria-current="page" className="hover:underline">
            Members
          </Link>
          <Link href="#" aria-current="page" className="hover:underline">
            Sponsors
          </Link>
          <Link href="#" aria-current="page" className="hover:underline">
            Events
          </Link>
          <Link href="#" aria-current="page" className="hover:underline">
            Articles
          </Link>
          <Link href="#" aria-current="page" className="hover:underline">
            Contacts
          </Link>
        </NavbarItem>
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          <NavbarItem>
            <Link href="#" className="hover:underline">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button href="#" variant="ghost" className="bg-[#f79b01] mt-0">
              Sign Up
            </Button>
          </NavbarItem>
        </div>
      </NavbarContent>
    </Navbar>
  );
}

{
  /* <NavbarContent className="flex m-2 justify-end border border-green-500">
          <NavbarItem>
            <Link href="#" className="text-sm lg:text-lg">
              Login
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Button
              as={Link}
              color="secondary"
              href="#"
              className="text-sm lg:text-lg bg-white p-1 rounded-lg"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent> */
}
{
  /* </div>
    </Navbar>

    // <Navbar
    //   isBordered
    //   isMenuOpen={isMenuOpen}
    //   onMenuOpenChange={setIsMenuOpen}
    //   className="flex justify-center border border-green-500 mb-4"
    // >
    //   <NavbarContent className="sm:hidden">
    //     <NavbarMenuToggle
    //       aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    //     />
    //   </NavbarContent>

    //   <NavbarContent className="sm:hidden pr-3">
    //     <NavbarBrand>
    //       <img
    //         src="/AWSLogo.png"
    //         alt="AWS Logo"
    //         className="border border-red-500 w-11"
    //       />
    //       <p>Big Screen</p>
    //     </NavbarBrand>
    //   </NavbarContent>

    //   <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //     <NavbarBrand>
    //       <img
    //         src="/AWSLogo.png"
    //         alt="AWS Logo"
    //         className="border border-red-500 w-24"
    //       />
    //       <p>Small Screen</p>
    //     </NavbarBrand>
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Features
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem isActive>
    //       <Link href="#" aria-current="page">
    //         Customers
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Integrations
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>

    //   <NavbarContent justify="end">
    //     <NavbarItem className="hidden lg:flex">
    //       <Link href="#">Login</Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Button as={Link} color="warning" href="#" variant="flat">
    //         Sign Up
    //       </Button>
    //     </NavbarItem>
    //   </NavbarContent>

    //   <NavbarMenu>
    //     {menuItems.map((item, index) => (
    //       <NavbarMenuItem key={`${item}-${index}`}>
    //         <Link
    //           className="w-full"
    //           color={
    //             index === 2
    //               ? "warning"
    //               : index === menuItems.length - 1
    //                 ? "danger"
    //                 : "foreground"
    //           }
    //           href="#"
    //           size="lg"
    //         >
    //           {item}
    //         </Link>
    //       </NavbarMenuItem>
    //     ))}
    //   </NavbarMenu>
    // </Navbar>
  );
} */
}
