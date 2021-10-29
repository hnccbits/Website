import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '../components/button/Button';
import StyledInput from '../components/input/StyledInput';
import Screen from '../components/screen/Screen';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.USER_ID
      )
      .then(
        () => {
          setShow(true);
          setSuccess(true);
          setTimeout(() => {
            setShow(false);
          }, 5000);
        },
        () => {
          setShow(true);
          setSuccess(false);
          setTimeout(() => {
            setShow(false);
          }, 5000);
        }
      );
    setEmail('');
    setMessage('');
    setName('');
  };

  return (
    <Screen>
      <section className="container-70">
        <div className="mt-28 mb-12 pt-10 pb-8 sm:mt-20 sm:mb-10">
          <h1 className="text-7xl sm:text-5xl">
            Interested?
            <br />
            Let&apos;s talk!
          </h1>
          <p className="mt-20 w-2/5 text-lg xl:w-3/5 sm:w-3/4 sm:text-base">
            Just fill this simple form in and we will contact you promptly. Hate
            forms? Drop us a line at{' '}
            <span>
              <a className="text-blue" href="mailto:hnccbits@gmail.com">
                hnccbits@gmail.com
              </a>
            </span>
          </p>
        </div>
        <div className="mt-16">
          <p
            style={{
              transition: 'all 300ms ease-in-out',
              color: success ? 'green' : 'red',
            }}
            className={`my-4 ${show ? 'visible' : 'invisible'}`}
          >
            {success
              ? 'Successfully sent the mail.'
              : 'Sorry, something went wrong! Please try again later.'}
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="flex justify-between items-center flex-wrap xl:flex-col xl:justify-start xl:items-start">
              <StyledInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                label="Your name"
                autoComplete="false"
                filled={name === ''}
                required
                className="w-3/5"
              />
              <StyledInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                label="Your email"
                autoComplete="false"
                filled={email === ''}
                required
                className="w-3/5"
              />
            </div>
            <StyledInput
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              label="Your message"
              autoComplete="false"
              filled={message === ''}
              required
              className="w-4/5"
            />
            <button type="submit" className="mt-16">
              <Button
                style={{ border: 'none' }}
                className="bg-primary-light text-primary hover:text-primary-light"
              >
                <span
                  style={{
                    color: 'inherit',
                    transition: 'all 300ms ease-in-out',
                  }}
                  className="z-10"
                >
                  Submit
                </span>
              </Button>
            </button>
          </form>
        </div>
      </section>
    </Screen>
  );
};

export default ContactUs;
