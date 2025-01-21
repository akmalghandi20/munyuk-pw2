'use client'

import * as z from 'zod'
import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Store } from "@prisma/client"
import { Trash } from "lucide-react"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface SettingPageProps {
    initialData: Store;
}

const formSchema = z.object({
    name: z.string().min(1)
})

type SettingsFormValue = z.infer<typeof formSchema>

export const SettingsForm: React.FC<SettingPageProps> = (
    {initialData}
) => {

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    

    const form = useForm<SettingsFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData,
    });

    return(
        <>
        <div className="flex items-center justify-between">
            <Heading
                title="Settings"
                description="Atur Toko"
            />
            <Button
            variant="destructive"
            size="sm"
            onClick={() =>{} }
            >
                <Trash className="h-4 w-4"/>
            </Button>
        </div>
        <Separator />
        </>
    )
}