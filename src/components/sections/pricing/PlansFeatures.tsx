// import {plansFeatures, basicPlan, premiumPlan, ultimatePlan } from "@/data/plansFeatures";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "motion/react";

// interface Features {
//   propName: type;
// }

const PlansFeatures = () => { const items = [
    {
      id: "1",
      label: "Features",
      feature1: "Personalized Nutrition Plan",
      email: "alex.t@company.com",
      location: "San Francisco, US",
      check: "/assets/icons/pricing/check.svg",
      cross: "/assets/icons/pricing/cross.svg",
    },
    {
      id: "2",
      label: "Basic Plan",
      feature1: "Mobilwcive App Access",
      feature2: "Mobile App Access",
      feature3: "Mobile App Access",
      feature4: "Mobile App Access",
      feature5: "Mobile App Access",
      feature6: "Mobile App Access",
      feature7: "Mobile App Access",
      feature8: "Mobile App Access",
      feature9: "Mobile App Access",
      feature10: "Mobile App Access",
      email: "sarah.c@company.com",
      location: "Singapore",
      check: "/assets/icons/pricing/check.svg",
      cross: "/assets/icons/pricing/cross.svg",
    },
    {
      id: "3",
      label: "Premium Plan",
      feature1: "Email Support",
      email: "j.wilson@company.com",
      location: "London, UK",
      check: "/assets/icons/pricing/check.svg",
      cross: "/assets/icons/pricing/cross.svg",
    },
    {
      id: "4",
      label: "Ultimate Plan",
      feature1: "One -on One Video Consultations",
      email: "m.garcia@company.com",
      location: "Madrid, Spain",
      check: "/assets/icons/pricing/check.svg",
      cross: "/assets/icons/pricing/cross.svg",
    },
  ];

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
                <TableHead
                  key={index}
                  className="text-left bg-primary rounded-lg text-white"
                >
                  {item.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
            {items.map((item) => (
              <TableRow
                key={item.id}
                className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
              >
                <TableCell className="font-medium">{item.feature1}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>
                  <img src={item.check} alt="" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/*</div>*/}
        {/*))}*/}
        
      </section>
      {/* -- FAQ -- */}
      <section>
        <div className="">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
            className="text-3xl md:text-5xl  font-semibold text-center"
          >
            FAQ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 1.4 }}
            className="text-center py-14 "
          >
            We address commonly asked questions and provide comprehensive answers to help you navigate your <br />
            way through your nutrition and wellness journey.
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default PlansFeatures;
