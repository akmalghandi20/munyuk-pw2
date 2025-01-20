'use client'

import { cn } from "@/lib/utils"

export function MainNav({
    classname,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    
    return (
        <nav className={cn(
            "flex items-center space-x-4 lg:space-x-6", 
            classname
        )}>
            Ini Main Nav
        </nav>
    )
}