import db from "@/lib/db";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SetupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { userId } = useAuth()
    if(!userId) {
        redirect("sign-in")
    }

    const store = await db.store.findFirst({
        where: {
            userId
        }
    })
    if(store) {
        redirect (`/${store.id}`)
    }

    return(
        <>
        {children}
        </>
    )
}