import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

// import { Button } from '@/components/ui/button'
// interface ContactFormProps {
//   propName: string;
// }

const ContactForm = () => {
  return (
    <div>
      <motion.form
        className="bg-accent-var grid gap-8 p-10 mx-24 my-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
          <div>
            <section className="flex gap-4 w-full [&_fieldset]:w-full lg:[&_fieldset]:w-1/2 [&_fieldset]:pb-8 [&_input]:bg-input/80 [&_input]:rounded-lg [&_input]:p-6 [&_input]:h-10 [&_input]:w-full">
              <fieldset className="pb-10">
                <label className="w-full">Full Name</label>
                <input
                  name="query"
                  placeholder="Enter your Name"
                />
              </fieldset>
              <fieldset>
                <label>Email</label>
                <input
                  name="query"
                  placeholder="Enter your Email"
                />
              </fieldset>
            </section>
            <fieldset>
              <label htmlFor="">Phone Number</label>
              <input className="bg-input/80 rounded-lg p-6 h-10 mb-8 w-full" type="text" placeholder="Enter your Number"/>
            </fieldset>
            <fieldset className="pb-10">
              <label>Message</label>
              <input
                className="bg-input/80 rounded-lg p-6 h-40 w-full"
                name="query"
                placeholder="Enter your Message"
              />
              <p className="text-sm float-right">Max 200 chars</p>
            </fieldset>
            <Button className="w-full" type="submit">
              Send Message
            </Button>
          </div>
          <div className="col-start-2">
            <img src="/assets/images/map.png" alt="" />
          </div>
      </motion.form>
    </div>
  );
};

export default ContactForm;
