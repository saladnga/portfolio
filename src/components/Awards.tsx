import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const awards = [
  {
    time: "Jan 2026",
    title: "Provost's List",
  },
  {
    time: "Aug 2025",
    title: "Chancellor's List",
  },
  {
    time: "Dec 2024",
    title: "Chancellor's List",
  },
  {
    time: "Aug 2024",
    title: "International Trojan Opportunity Scholarship (50% Scholarship)",
  },
];

export default function Awards() {
  return (
    <div>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-4 md:px-0">
        <div className="text-2xl md:text-4xl font-semibold tracking-widest text-left mb-6 md:mb-10">
          AWARDS & HONORS
        </div>
        <Table>
          <TableBody>
            {awards.map((award, index) => (
              <TableRow
                key={index}
                className="hover:bg-white/20 dark:hover:bg-white/10"
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
      </div>
    </div>
  );
}
