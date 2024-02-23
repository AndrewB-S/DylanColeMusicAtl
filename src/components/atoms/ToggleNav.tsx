import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import hamburgerMenuWhite from "/hamburgerMenuWhite.svg?url"
import closeWhite from "/closeWhite.svg?url"

const navListItems = [
  { title: "Home", link: "#Home" },
  { title: "About", link: "#About" },
  { title: "Tour", link: "#Performances" },
  { title: "Contact", link: "#Contact" },
];


export default function ToggleNav() {


  return (
    <Drawer>
      <DrawerTrigger className="lg:invisible">
        <img src={hamburgerMenuWhite} alt="" />
      </DrawerTrigger>
      <DrawerContent className="items-end bg-primary ml-32 lg:invisible pt-4 font-biorhyme">
        <DrawerTitle className="w-full p-4 md:p-8 md:text-3xl text-center text-xl text-primary-foreground">Menu</DrawerTitle>
        <DrawerClose asChild><img src={closeWhite} alt="" className="absolute pt-2 pr-4" /></DrawerClose>
        <ul className="w-full flex flex-col px-4" aria-label="links">
          {
            navListItems.map(item => {
              return (
                <li className="flex justify-end">
                  <DrawerClose asChild>
                    <a className="rounded p-4 md:p-8 w-full text-primary-foreground underline text-center" href={item.link}>
                      {item.title}
                    </a>
                  </DrawerClose>
                </li>
              )
            })
          }
        </ul>
      </DrawerContent>
    </Drawer >
  )
}