'use client'

import { Heading } from "@/components/ui/heading"
import { Store } from "@prisma/client"

interface SettingPageProps {
    initialData: Store
}

export const SettingsForm: React.FC<SettingPageProps> = (
    initialData
) => {
    return(
        <div className="flex items-center justify-between">
            <Heading
                title="Settings"
                description="Atur Toko"
            />
        </div>
    )
}