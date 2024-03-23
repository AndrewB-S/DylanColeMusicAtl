import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import hamburgerMenuWhite from "/src/assets/hamburgerMenuWhite.svg?url"
import closeWhite from "/src/assets/closeWhite.svg?url"

import { navListItems } from "../atoms/NavListItems"

export default function ToggleNav() {


  return (
    <Drawer>
      <DrawerTrigger name="Menu" className="lg:invisible">
        <img src={hamburgerMenuWhite} alt="" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Menu</DrawerTitle>
        <DrawerClose asChild><img src={closeWhite} alt="" className="absolute pt-2 pr-4" /></DrawerClose>
        <ul className="w-full flex flex-col px-4" aria-label="links">
          {
            navListItems.map(item => {
              return (
                <li className="flex justify-end" key={item.title}>
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