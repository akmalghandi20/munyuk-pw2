'use client'
import * as z from 'zod'

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "@/components/ui/modal";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';
import toast from 'react-hot-toast';

const formSchema = z.object({
    name: z.string().min(1),
});


export const StoreModal = () => {

    const [loading, setLoading] = useState(false)

    const storeModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), 
        defaultValues: {
            name: ""
        }
    })
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try{
            setLoading(true)

            const response = await fetch("/api/stores", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            console.log(await response.json());

            toast.success("Berhasil Membuat Toko");
             
        }catch{
            toast.error("Terjadi Kesalahan");
        }
        finally{
            setLoading(false);
        }
    };

    return(
        <Modal title="Buat Store" description="Tambahkan Store untuk membuat produk dan kategori" isOpen={storeModal.isOpen} onClose={storeModal.onClose}> 
            
            <div>
                <div className='space-y-4 py-2 pb-4'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Nama</FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder='Nama Toko'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
                                <Button
                                    disabled={loading}
                                    variant="outline"
                                    onClick={storeModal.onClose}
                                >
                                    Cancel
                                </Button>

                                <Button disabled={loading} type="submit">
                                    Continue
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>

        </Modal>
    )
}