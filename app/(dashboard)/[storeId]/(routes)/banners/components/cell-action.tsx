'use client'

import { BannerColumn } from "./columns"

interface CellActionProps{
    data: BannerColumn
}

export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    return(
        <div>
            action
        </div>
    )