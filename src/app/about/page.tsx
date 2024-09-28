import Button from "@/components/Button";
import Link from "next/link";

export default function About() {
    return(
        <div className="flex justify-center items-center h-screen  bg-purple-300 px-20">
            <div className="lg:space-y-5 space-y-2 bg-purple-200 lg:p-7 p-3 rounded-lg">
                <h1 className="lg:text-6xl text-2xl text-center font-bold">About US</h1>
                <p className="md:text-2xl text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis quasi repudiandae, voluptates ipsam architecto dolorum asperiores assumenda ipsum excepturi, nobis error ipsa! Illum molestias unde atque odio at tempore quia, possimus, accusamus asperiores sunt accusantium quod quasi voluptatibus nemo delectus distinctio! Corporis aliquid quibusdam quo eligendi ratione praesentium consequatur natus, vitae officia esse. Aliquid architecto dolores explicabo tenetur eveniet nulla blanditiis, iure dolorem est sapiente ad aspernatur dolore quae quas veritatis quod quia! Accusantium necessitatibus repellat non exercitationem, sunt aperiam ipsam veritatis eius vitae molestias est laborum, asperiores quis distinctio. Eos impedit id vitae accusantium iure tenetur odio unde.</p>
            
            <div>

                <Link href={"/"}>
                    <Button/>
                    </Link>
                    </div>
            </div>
        </div>
    )
    }
    