// import {plansFeatures, basicPlan, premiumPlan, ultimatePlan } from "@/data/plansFeatures";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


// interface Features {
//   propName: type;
// }



const PlansFeatures = () => {
  
  const items = [
    {
      id: "1",
      label: "Features",
      name: "Personalized Nutrition Plan",
      email: "alex.t@company.com",
      location: "San Francisco, US",
      status: "Active",
    },
    {
      id: "2",
      label: "Basic Plan",
      name: "Mobile App Access",
      email: "sarah.c@company.com",
      location: "Singapore",
      status: "Active",
    },
    {
      id: "3",
      label : "Premium Plan",
      name: "Email Support",
      email: "j.wilson@company.com",
      location: "London, UK",
      status: "Inactive",
    },
    {
      id: "4",
      label: "Ultimate Plan",
      name: "One -on One Video Consultations",
      email: "m.garcia@company.com",
      location: "Madrid, Spain",
      status: "Active",
    },
    {
      id: "5",
      name: "One -on One Video Consultations",
      email: "m.garcia@company.com",
      location: "Madrid, Spain",
      status: "Active",
    },
  ]
  
  return (
    <main>
      <section className="bg-accent-var p-10 mb-16 mx-24">
        {/* -- First Column -- */}
        {/*{tableHeaders.map((item, index) => (*/}
          {/*<div key={index} className="rounded-lg text-center md:text-left border-r pt-8 w-full">*/}
            <Table>
                    <TableHeader className="bg-transparent">
                      <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                        {items.map((item, index) => (
                          <TableHead key={index} className="text-left bg-primary rounded-lg text-white">{item.label}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
                      {items.map((item) => (
                        <TableRow
                          key={item.id}
                          className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
                        >
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.location}</TableCell>
                          <TableCell>{item.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
          {/*</div>*/}
        {/*))}*/}
      </section>
    </main>
  );
};

export default PlansFeatures;