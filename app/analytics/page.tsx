import Analytics from "@/components/Analytics";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AnalyticsPage() {
  const session = await getServerSession(authOptions);
  /**
   * If there's no authenticated user, we redirect to the login route, which is /api/auth/sign-in.
   */
  if (!session) {
    redirect("api/auth/signin");
  }

  return <Analytics />;
}
