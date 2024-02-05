import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Navbar from "@/components/Navbar";

export default async function Nav() {
  const session = await getServerSession(authOptions);

  return <Navbar user={session?.user} />;
}
