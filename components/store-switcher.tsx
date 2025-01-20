'use client'

import { Store } from "@prisma/client";
import { PopoverTrigger } from "./ui/popover";

type PopOverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopOverTriggerProps {
    items: Store[];
}

const StoreSwitcher = ({
    className,
    items = []
}: StoreSwitcherProps ) => {
    return ( 
        <div>
            Store Switcher New
        </div>
     );
}
 
export default StoreSwitcher;