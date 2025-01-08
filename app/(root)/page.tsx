'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const StartPage = () => {
  return (
    <div className="p-4">
        <Modal title="Test Title" description="Test Desc" isOpen={true} onClose={() => {}} >
          Children
        </Modal>
    </div>
  );
}

export default StartPage;