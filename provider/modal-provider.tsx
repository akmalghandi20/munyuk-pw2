'use client'

import { StoreModal } from "@/components/modals/store-modal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isMounted, setisMounted] = useStatete(false)

    useEffect(() => {
        setisMounted(true)
    },[])
    if (!isMounted){
        return null
    }
    return(
        <>
        <StoreModal/>
        </>
    )
}