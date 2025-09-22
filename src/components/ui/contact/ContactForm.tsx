import {motion} from 'motion/react'

// import { Button } from '@/components/ui/button'
// interface ContactFormProps {
//   propName: string;
// }

const ContactForm = () => {
  return (
    <div>
      <motion.form>
          <input name="query" />
          <button type="submit">Search</button>
      </motion.form>
    </div>
  );
};

export default ContactForm;