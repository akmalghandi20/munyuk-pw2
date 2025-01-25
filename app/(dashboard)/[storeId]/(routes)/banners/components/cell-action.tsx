'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BannerColumn } from "./columns"
import { Button } from "@/components/ui/button"
import { Copy, Delete, Edit, MoreHorizontal } from "lucide-react"

interface CellActionProps {
    data: BannerColumn
}

export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                        <span className="sr-only">
                            Open Menu
                        </span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                        Action
                    </DropdownMenuLabel>
                    <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4"/>
                        Copy Id
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4"/>
                        Update Id
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Delete className="mr-2 h-4 w-4"/>
                        Trash Id
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
