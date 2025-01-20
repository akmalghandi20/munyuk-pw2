import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return ( 
        <div className="border-b">
             <div className="flex h-16 items-center px-4 ">
                <div> Store Switcher</div>
                <div> Main Nav</div>
                <div> <UserButton/> </div>
                
             </div>
             
        </div>
     );
}
 
export default Navbar;