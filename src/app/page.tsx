import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div  className="bg-purple-300 h-screen flex justify-center items-center flex-col gap-5">
  <h1 className="sm:text-8xl text-3xl font-bold">Home Page</h1>

  <div className="space-x-5">

    <Link href={"/about"}>
   <Button props="About" />
    </Link>

<Link href={"/contact"}> <Button props="Contact Us"/> </Link>


  </div>
</div>

  );

}
  