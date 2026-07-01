import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import PageContainer from "./PageContainer";
import SectionTitle from "./SectionTitle";

type Award = {
  time: string;
  title: string;
};

const awards: Award[] = [
  { time: "Jun 2026", title: "Chancellor's List" },
  { time: "May 2026", title: "Magna Cum Laude" },
  { time: "Jan 2026", title: "Provost's List" },
  { time: "Aug 2025", title: "Chancellor's List" },
  { time: "Dec 2024", title: "Chancellor's List" },
  { time: "Aug 2024", title: "International Trojan Opportunity Scholarship" },
];

export default function Awards() {
  return (
    <div>
      <PageContainer>
        <SectionTitle>AWARDS & HONORS</SectionTitle>
        <Table>
          <TableBody>
            {awards.map((award) => (
              <TableRow
                key={`${award.time}-${award.title}`}
                className="hover-bg-accent"
              >
                <TableCell className="font-medium text-left text-xs md:text-sm whitespace-nowrap">
                  {award.time}
                </TableCell>
                <TableCell className="text-left text-xs md:text-sm">
                  {award.title}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PageContainer>
    </div>
  );
}
