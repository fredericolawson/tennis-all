import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type Link = {
  title: string;
  description: string;
  primraryUrl: string;
  primraryUrlText: string;
  secondaryUrl: string | null;
  secondaryUrlText: string | null;
};

export default function HomePage() {
  const links: Link[] = [
    {
      title: "Coral Beach Tennis",
      description:
        "Coral Beach & Tennis Club offers eight championship clay tennis courts for members to enjoy.",
      primraryUrl: "https://www.coralbeachclub.com/tennis",
      primraryUrlText: "Coral Beach Tennis",
      secondaryUrl: "https://coralbeach.tennis.bm",
      secondaryUrlText: "Club ladder",
    },
    {
      title: "Tucker's Point Tennis Club",
      description:
        "Four Har-Tru clay courts with Cliff Drysdale Tennis program",
      primraryUrl: "https://tuckerspoint.com/the-club/tennis/",
      primraryUrlText: "Tucker's Point Tennis",
      secondaryUrl: null,
      secondaryUrlText: null,
    },
    {
      title: "Bermuda Lawn Tennis Association",
      description:
        "Official tennis association promoting tennis development in Bermuda",
      primraryUrl: "https://www.blta.bm/",
      primraryUrlText: "BLTA Website",
      secondaryUrl: null,
      secondaryUrlText: null,
    },
    {
      title: "International Club of Bermuda",
      description: "Tennis club part of the global IC network",
      primraryUrl: "https://www.bermuda.ictennis.net/",
      primraryUrlText: "IC Bermuda",
      secondaryUrl: null,
      secondaryUrlText: null,
    },
    {
      title: "Pomander Gate Tennis Club",
      description:
        "Four hard courts and pickleball, welcomes temporary members",
      primraryUrl: "http://www.pgtc.bm/",
      primraryUrlText: "Pomander Gate Tennis Club",
      secondaryUrl: null,
      secondaryUrlText: null,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Bermuda Tennis</h1>
        <p className="text-muted-foreground text-center">
          Quick access to useful links
        </p>
      </div>

      <div className="space-y-4">
        {links.map((link, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">{link.title}</CardTitle>
              <CardDescription>{link.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 md:flex-row">
              <Button asChild className="md:w-1/2" variant="outline">
                <a
                  href={link.primraryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  {link.primraryUrlText}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              {link.secondaryUrl && (
                <Button asChild className="md:w-1/2" variant="default">
                  <a
                    href={link.secondaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    {link.secondaryUrlText}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
