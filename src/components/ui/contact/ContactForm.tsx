import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import {useState} from 'react';



// import { Button } from '@/components/ui/button'
// interface ContactFormProps {
//   propName: string;
// }

const ContactForm = () => {
 
 const [isToast, setIsToast] = useState ("It worked"); 
  
  return (
    <div>
      <motion.form
        className="bg-accent-var grid gap-8 p-10 lg:mx-24 my-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
          <div className="[&_input]:my-2">
            <section className="flex gap-4 w-full [&_fieldset]:w-full lg:[&_fieldset]:w-1/2 [&_fieldset]:pb-8  [&_input]:bg-input/80 [&_input]:rounded-lg [&_input]:p-6 [&_input]:h-10 [&_input]:w-full">
              <fieldset className="pb-10">
                <label className="w-full">Full Name</label>
                <input
                  name="name"
                  placeholder="Enter your Name"
                />
              </fieldset>
              <fieldset>
                <label>Email</label>
                <input
                  name="mail"
                  placeholder="Enter your Email"
                />
              </fieldset>
            </section>
            <fieldset className="pb-4">
              <label htmlFor="">Phone Number</label>
              <input className="bg-input/80 rounded-lg p-6 h-10 w-full" type="text" placeholder="Enter your Number"/>
            </fieldset>
            <fieldset className="pb-10">
              <label>Message</label>
              <input
                className="bg-input/80 rounded-lg p-6 h-32 w-full [&::placeholder]:align-top"
                name="message"
                placeholder="Enter your Message"
              />
              <p className="text-sm float-right">Max 250 chars</p>
            </fieldset>
            <Button id="sendIt" onClick={() => setIsToast()} className="w-full" type="submit">
              Send Message
            </Button>
            {isToast && <Toaster position="top-right" richColors closeButton />}
          </div>
          <div className="col-start-2">
            <img src="/assets/images/map.png" alt="" />
          </div>
      </motion.form>
    </div>
  );
};

export default ContactForm;
