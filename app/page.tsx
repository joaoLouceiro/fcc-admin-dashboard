import Search from "@/components/Search";
import UsersTable from "@/components/UsersTable";
import { Card } from "@tremor/react";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const query = searchParams.q;
  const users = await prisma.user.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
      email: {
        contains: query,
        mode: "insensitive",
      },
    },
  });

  return (
    <main>
      <Card className="mt-8">
        <Search />
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
