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

export default function LinksPage() {
  const links: Link[] = [
    {
      title: "Coral Beach Tennis",
      description: "Tennis club website",
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
      title: "Fairmont Southampton Tennis Facility",
      description:
        "Six hard courts (3 floodlit) managed by Bermuda's No.1 player",
      primraryUrl:
        "https://www.fairmont.com/en/hotels/bermuda/fairmont-southampton.html",
      primraryUrlText: "Fairmont Southampton",
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
      title: "W.E.R. Joell Tennis Stadium",
      description:
        "Government-run facility with 8 courts (5 hard, 3 clay) near Hamilton",
      primraryUrl: "https://www.blta.bm/tennis-bermuda/national-tennis-center/",
      primraryUrlText: "National Tennis Center",
      secondaryUrl: null,
      secondaryUrlText: null,
    },
    {
      title: "Grotto Bay Beach Resort Tennis",
      description:
        "Four hard courts (2 floodlit), kid-friendly with mini-racquets",
      primraryUrl: "https://www.grottobay.com/Activities_Tennis",
      primraryUrlText: "Grotto Bay Tennis",
      secondaryUrl: null,
      secondaryUrlText: null,
    },
    {
      title: "Elbow Beach Tennis Facility",
      description: "Five plexipave courts in stunning beachside setting",
      primraryUrl:
        "https://www.gotobermuda.com/inspiration/article/where-play-tennis-bermuda",
      primraryUrlText: "Tennis in Bermuda",
      secondaryUrl: null,
      secondaryUrlText: null,
    },
    {
      title: "Pomander Gate Tennis Club",
      description:
        "Four hard courts and pickleball, welcomes temporary members",
      primraryUrl:
        "https://www.bermudayp.com/search/1/pomander%20gate%20tennis",
      primraryUrlText: "Find Details",
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
      title: "Port Royal Tennis",
      description: "Four hard courts at the scenic Southampton golf location",
      primraryUrl:
        "https://www.gotobermuda.com/inspiration/article/where-play-tennis-bermuda",
      primraryUrlText: "Tennis Guide",
      secondaryUrl: null,
      secondaryUrlText: null,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Tennis Links</h1>
        <p className="text-muted-foreground text-center">
          Quick access to tennis clubs and facilities in Bermuda
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
              <Button asChild className="w-1/2" variant="default">
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
                <Button asChild className="w-1/2" variant="outline">
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
