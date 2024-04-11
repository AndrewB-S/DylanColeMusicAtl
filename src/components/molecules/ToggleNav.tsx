import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import hamburgerMenuWhite from "/src/assets/hamburgerMenuWhite.svg?url"
import closeWhite from "/src/assets/closeWhite.svg?url"
import { navListItems } from "../atoms/NavListItems.tsx"
import { streamingServices } from "../atoms/StreamingServices.tsx"

export default function ToggleNav() {


  return (
    <Sheet>
      <SheetTrigger name="Menu" className="lg:invisible"><img src={hamburgerMenuWhite} alt="" width={32} height={32} /></SheetTrigger>
      <SheetContent side={"right"} className="bg-primary flex flex-col">
        <SheetClose asChild><img src={closeWhite} alt="Close button" className="absolute top-5 right-5" /></SheetClose>
        <SheetHeader>
          <SheetTitle className="font-alameda text-4xl tracking-wide text-primary-foreground w-full text-center">Menu</SheetTitle>
        </SheetHeader>
        <ul className="w-full flex flex-col gap-4" aria-label="links">
          {
            navListItems.map(item => {
              return (
                <li className="flex justify-end" key={item.title}>
                  <SheetClose asChild>
                    <a className="rounded p-2 w-full text-primary-foreground underline text-center font-biorhyme" href={item.link}>
                      {item.title}
                    </a>
                  </SheetClose>
                </li>
              )
            })
          }
        </ul>
        <div className="flex flex-col place-items-center w-full gap-8 mt-4">
          <span className="font-alameda text-3xl">Listen</span>
          <ul className="w-full flex px-4 justify-center gap-4">
            {Object.values(streamingServices).map((service, index) => {
              return (
                <li key={index}>
                  <a href={service.link}>
                    <img src={service.icon} alt={service.altText} width={32} height={32} decoding="async"
                      loading="lazy" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </SheetContent>
    </Sheet>

  )
}