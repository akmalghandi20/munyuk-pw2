'use client'

import * as z from 'zod'
import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Store } from "@prisma/client"
import { Trash } from "lucide-react"
import { Form, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

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

    const [loading, setLoading] = useState(false)

    const form = useForm<SettingsFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData,
    });

    const onSubmit = async(data: SettingsFormValue) => {
        console.log(data)
        setLoading(true) 
    }

    return(
        <>
        <div className="flex items-center justify-between">
            <Heading
                title="Settings"
                description="Atur Toko"
            />
            <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
            >
                <Trash className="h-4 w-4"/>
            </Button>
        </div>
        <Separator />
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <div className="grid grid-cols-3 gap-8">
                <FormField 
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Nama</FormLabel>
                            <FormControl>
                                <Input placeholder="Nama Toko Perlu Diinputkan" disabled={loading} value={field.value} onChange={field.onChange} /> 
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <Button
            disabled={loading}
            type='submit'
            >
                Simpan
            </Button>
        </form>
        </>
    )
}