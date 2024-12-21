import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Params {
  id: string;
}

export default async function SingleAnalysis({ params }: { params: Params }) {
  const id = (await params).id;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="max-w-lg w-full shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-lg bg-blue-50 border-blue-400">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold animate-fadeIn">
            Analysis {id}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-center text-gray-600 animate-slideUp">
            Coming soon!
          </h2>
          <div className="mt-6 flex justify-center">
            <Link href="/analysis">
              <Button variant="outline" className="animate-bounceHover">
                Back to Analysis
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
