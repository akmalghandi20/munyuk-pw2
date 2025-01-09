import db from "@/lib/db";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
    params,
}:{
    children: React.ReactNode;
    params: {storeId: String};
}) {
    const { userId } = useAuth();
    if(!userId){
        redirect ("sign-in");
    }
    const store =  await db.store.findFirst({
        where: {
            id : params.storeId,
            userId
        }
    })
    if(!store){
        redirect('/')
    }
    return (
        <>
        <div>
            This is navbar
            {children}
        </div>
        </>
    )
       
}
