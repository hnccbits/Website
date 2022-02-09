import Head from 'next/head';
import Events from '../components/event/Events';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';

function About() {
  return (
    <Screen>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="HnCC or Hackathon and Coding Club is the official club of BIT Sindri that has the motto to instill a coding culture, collaborate, and arrange events relevant to Open Source, Graphics and Game Development, Web Development, App Development, and many other topics."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, About HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <section className="container-70 pt-28 md:pt-16 sm:pt-12">
        <div className="hidden">
          <p className="px-6">
            It has been indeed a pleasure to be the professor In-Charge of the
            Hackathon and Coding Club of BIT Sindri. The organization has been
            aiming to impart knowledge and guidance to the students of the
            college that put their interests into the fields of Computer
            Science, Development, and Designing. The club has been successfully
            been providing the proper guidance, information, and help to the
            people who ask for it. The club has many members that work
            selflessly for the events that the club organizes and for providing
            the best. The club has kept my expression good as I get an
            opportunity to see the enthusiasm the students pose to learn new
            stuff and whats even better, is that the people inducted in the club
            are even more enthusiastic to give away what they know in the best
            way possible. My aspirations from the club include creating a
            dynamic environment for the interest of computer science and its
            applications in the campus, including development and designing
            which is working high in the sky, so that the students excel in
            their fields of interest, and put their ideas into reality. I wish
            the organization all the very best. It makes me honored to be
            associated with a club of such kind.
          </p>
          <h2 className="text-xl mt-6 mb-3 px-10">- Dinesh Prabhakar</h2>
          <h4 className="pl-12">Prof. In-Charge, Information Technology</h4>
        </div>
        <div className="mt-12 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="About HnCC" />
          <div className="mt-6">
            <p className="text-lg">
              Hackathon and Coding Club (HnCC) is the official coding and
              development club of BIT Sindri. It was started with an initial
              motto to inculcate and improve collaborative coding culture in
              college. Our team expanded slowly in numbers and the spectrum of
              activities we deal with, expanded broadly.
            </p>
          </div>
        </div>
        <div className="mt-20 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="Our Activites" />
          <div className="mt-6">
            <p className="text-lg">
              We organize a national level hackathon, Hackatron every year. The
              first version of this hackathon was held in 16th-17th November
              2019. Checkout more at{' '}
              <a
                className="text-blue"
                href="https://www.hackatron.hnccbits.com"
              >
                hackatron.hnccbits.com
              </a>
              <br />
              Organize sessions related to various technology stacks such as
              Development, Open Source etc. <br /> Host competitions related to
              coding and other tech domains throughout the year and Techfest,
              BIT Sindri <br />
              Develop real world projects and solve real world problems.Checkout
              our GitHub account at GitHub <br /> We manage the official
              CodeChef Chapter of BIT Sindri, Dhanbad. See more about our coding
              culture at our official site{' '}
              <a className="text-blue" href="https://www.contest.hnccbits.com">
                contest.hnccbits.com
              </a>{' '}
            </p>
          </div>
        </div>

        <Events />
      </section>
    </Screen>
  );
}

export default About;
