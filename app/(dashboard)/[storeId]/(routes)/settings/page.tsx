import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

interface SettingPageProps {
    params: {
        storeId: string;
    }
}

const SettingPage: React.FC<SettingPageProps> = async({
    params
}) => {

    const { userId } = await auth();

    if(!userId){
        redirect('/sign-in')
    }

    const store = await db.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    })

    if(!store){
        redirect('/')
    }

    return (
        <div>
            ini page setting
        </div>
     );
}
 
export default SettingPage;