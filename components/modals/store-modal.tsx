'use client'
import * as z from 'zod'

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "@/components/ui/modal";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
    name: z.string().min(1),
});



export const StoreModal = () => {
    const storeModal = useStoreModal();
    return(
        <Modal title="Buat Store" description="Tambahkan Store untuk membuat produk dan kategori" isOpen={storeModal.isOpen} onClose={storeModal.onClose}> 
            Store Form 
        </Modal>
    )
}