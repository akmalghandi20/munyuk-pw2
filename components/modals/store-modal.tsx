'use client'
import * as z from 'zod'

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "@/components/ui/modal";
import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormControl, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from 'postcss';
import { Button } from '../ui/button';

const formSchema = z.object({
    name: z.string().min(1),
});

const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), defaultValues: {name:"",}
})

const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
}

export const StoreModal = () => {
    const storeModal = useStoreModal();
    return(
        <Modal title="Buat Store" description="Tambahkan Store untuk membuat produk dan kategori" isOpen={storeModal.isOpen} onClose={storeModal.onClose}> 
            
            <div>
                <div className='space-y-4 py-2 pb-4'>
                    <Form {...Form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                        control={form.control}
                        name='name'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>name</FormLabel>
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
                            variant="outline"
                            onClick={storeModal.onClose}
                            >
                                Cancel
                            </Button>

                            <Button typeof="submit">
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