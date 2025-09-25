// import {plansFeatures, basicPlan, premiumPlan, ultimatePlan } from "@/data/plansFeatures";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

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
    <main className="">
      <section className="hidden lg:block bg-accent-var p-10 mb-16 lg:mx-24">
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
        {/*</div>*/}≠
        {/*))}*/}
        
      </section>
      {/* -- FAQ -- */}
      <section>
        <div className="grid place-items-center max-w-screen px-8 lg:mx-24">
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
      {/* -- FAQ ACCORDION -- */}
      <section className="grid lg:grid-cols-3  w-screen lg:w-fit gap-6  lg:mx-24 mb-20">
        <Accordion
              type="single"
              collapsible
              className="lg:col-start-1 lg:col-span-2 bg-accent-var rounded-lg w-full p-8"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>What is personalized nutrition coaching?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can nutrition coaching help me lose weight?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Nutrition coaching provides you with a tailored plan that matches your lifestyle and goals. Your coach will help you set realistic targets, track your progress, and adjust your nutrition plan as needed. You’ll learn how to make healthier choices, understand portion sizes, and develop habits that support sustainable weight loss.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I still enjoy my favorite foods while on a nutrition plan?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Absolutely! Nutrition coaching is all about balance, not restriction. Your coach will help you include your favorite foods in moderation so you don’t feel deprived. The goal is to create a plan that fits your tastes and lifestyle, making it easier to stick with long-term.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How often will I have contact with my nutritionist?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    This depends on your preferences and the coaching package you choose. Typically, clients communicate with their nutritionist weekly through calls, messages, or check-ins. We’re flexible—let us know what works best for you!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How long will it take to see results?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>Results vary from person to person and depend on your goals, commitment, and starting point. Most clients notice positive changes within a few weeks, but lasting results come from consistent habits over several months. Your coach will support you every step of the way.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Are the meal plans and recipes provided suitable for vegetarians or vegans?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>Yes! We offer meal plans and recipes tailored to various dietary preferences, including vegetarian and vegan options. Just let your coach know about your needs, and we’ll make sure your plan fits your lifestyle.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* -- CTA -- */}
            <div className="lg:col-start-3 bg-accent-var rounded-lg p-8 h-92 text-center">
              <div className="flex justify-center">
              <img src="assets/images/pricing/cta.png" alt="cta icon" width={75} height={75}/>
              </div>
              <h2 className="text-2xl font-semibold pt-6">Ask a question</h2>
              <p className="py-8 text-sm">Feel free to ask questions at anytime</p>
              <Button aria-description="ask a question button">Ask a Question</Button>
            </div>
      </section>
    </main>
  );
};

export default PlansFeatures;
