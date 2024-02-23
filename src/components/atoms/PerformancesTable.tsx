import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import type { CollectionEntry } from "astro:content"
import { a } from "dist/_astro/index.eJYblSHp"


interface props {
    performances: any[]
}

const buttonClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"


export default function PerformancesTable({ performances }: props): any {

    return (
        <Table>
            <TableCaption className="tracking-widest">UPCOMING PERFORMANCES</TableCaption>
            <TableBody>
                {
                    performances.map(performance => {
                        return (
                            <TableRow className="justify-between border-none text-primary-foreground hover:text-black hover:cursor-pointer w-full flex items-center px-4 gap-8">
                                <TableCell className=" flex flex-col grow">
                                    <h3 className="underline text-lg ">{performance.frontmatter.title}</h3>
                                    <p>{performance.rawContent()}</p>
                                </TableCell>

                                <TableCell className={buttonClasses}><a href={performance.frontmatter.link}>Buy Tickets</a></TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table >
    )
}