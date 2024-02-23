import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import hamburgerMenuWhite from "/hamburgerMenuWhite.svg?url"
import closeWhite from "/closeWhite.svg?url"

interface navListItem {
  // Define the properties of your object here
  title: string;
  link: string;
  // Add more properties as needed
}

interface Props {
  navListItems: navListItem[]
}


export default function ToggleNav({ navListItems }: Props) {


  return (
    <Drawer>
      <DrawerTrigger className="lg:invisible">
        <img src={hamburgerMenuWhite} alt="" />
      </DrawerTrigger>
      <DrawerContent className="items-end bg-primary ml-32 lg:invisible pt-4 font-biorhyme">
        <DrawerTitle className="w-full p-4 md:p-8 md:text-3xl text-center text-xl text-primary-foreground">Menu</DrawerTitle>
        <DrawerClose asChild><img src={closeWhite} alt="" className="absolute pt-2 pr-4" /></DrawerClose>
        <ul className="w-full flex flex-col px-4 gap-4" aria-label="links">
          {
            navListItems.map(item => {
              return (
                <li className="flex justify-end bg-black">
                  <DrawerClose asChild>
                    <a className="bg-secondary rounded p-4 md:p-8 w-full text-secondary-foreground underline text-center" href={item.link}>
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