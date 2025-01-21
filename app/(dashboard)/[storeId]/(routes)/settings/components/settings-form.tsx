'use client'

import * as z from 'zod'
import { use, useState } from 'react'

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Store } from "@prisma/client"
import { Trash } from "lucide-react"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/compat/router'
import { AlertModal } from '@/components/modals/alert-modal'
import { ApiAlert } from '@/components/ui/api-alert'
import { UseOrigin } from '@/hooks/use-origin'

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
    const params = useParams();
    const router = useRouter();
    const origin = UseOrigin();

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const form = useForm<SettingsFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData,
    });

    const onSubmit = async(data: SettingsFormValue) => {
        setLoading(true);
        try {
            await axios.patch(`/api/stores/${params.storeId}`, data);
            toast.success("Toko Berhasil diupdate");
            if (router) {
                router.refresh("/")
            }
        } catch (error) {
            toast.error("Cek kembali data yang sudah di inputkan");
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        try {
            setLoading(true)
            await axios.delete(`/api/stores/${params.storeId}`)
            toast.success("Toko Berhasil Dihapus")
            if (router) {
                router.push("/")
            }
        } catch (error) {
            toast.error("Cek kembali data dan koneksi anda")
        }finally{
            setLoading(false)
            setOpen(false)
        }
    }

    return(
        <>
        <AlertModal 
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
        />
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
        <Form {...form}>
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
        </Form>
        <Separator />
        <ApiAlert title="PUBLIC_API_URL" description={`${origin}/api/${params.storeId}`} variant={'public'} />
        </>
    );
};