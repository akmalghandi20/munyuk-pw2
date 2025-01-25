'use client'

import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BannerColumn } from "./columns"
import { Button } from "@/components/ui/button"

interface CellActionProps{
    data: BannerColumn
}

export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    return(
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button>
                        <span>
                            Open Menu
                        </span>
                    </Button>
                </DropdownMenuTrigger>
            </DropdownMenu>
        </div>
    )