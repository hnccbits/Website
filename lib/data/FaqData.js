import Link from 'next/link';

const options = [
  {
    title: <>What is HnCC ?</>,
    body: (
      <>
        HnCC, Hackathon and Coding Club is the Official Coding Club of BIT
        Sindri, Dhanbad. It works as an open-source organization. Members here
        learn and collaborate to make their ideas into a solution/product. It
        also organizes national level hackathons driven by the idea of making
        proof of concepts of great ideas using software.
      </>
    ),
  },
  {
    title: <>Who is the Professor-In-Charge of HnCC ?</>,
    body: (
      <>
        The Professor-In-Charge of HnCC is Mr. Dinesh Kumar Prabhakar Sir from
        the Dept. of Information Technology, BIT Sindri.
      </>
    ),
  },
  {
    title: <>Where does HnCC operate from ?</>,
    body: (
      <>
        In college, HnCC operates from IT Building, BIT Sindri, Dhanbad,
        Jharkhand-828123, now it is in operation via remote only
      </>
    ),
  },
  {
    title: <>What qualities are required at HnCC ?</>,
    body: (
      <>
        To join HnCC you have to:-
        <ul className="pl-8">
          <li>
            Prove that you understand Computer Science and the IT industry
          </li>
          <li>
            Showcase your technical skills in programming by either making cool
            projects or being good at competitive programming.
          </li>
          <li>
            Be versatile. You have to be good at social skills as well such as
            communication and leadership.
          </li>
          <li>
            Be patient. You have to prove your willingness to join HnCC. We will
            test this quality by rejecting you if you fall short in your domain.
            You have to improve and apply again. We want genuine people who show
            interest as well as do some actual work to get inducted.
          </li>
          <li>Think objectively. We will set up multiple hurdles for you.</li>
          <li>
            Have a Hacker mentality. Hacker mentality means that you have to
            possess a thought process to solve problems you haven’t heard about
            or have experienced before.
          </li>
        </ul>
        For the design team :-
        <ul>
          <li>
            Have an interest in art and craft and willingness to go digital.
          </li>
          <li>Prove that you have a good taste in design principles.</li>
          <li>Ability to take criticism over your work.</li>
          <li>
            Learn digital art from the guidance of current HnCC members and
            submit your work for evaluation.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <>What are some of the domains of HnCC ?</>,
    body: (
      <>
        The domains of HnCC are:-
        <ul>
          <li>Competitive Programming</li>
          <li>Android App Development</li>
          <li>Web Development</li>
          <li>Game Development</li>
          <li>Systems Programming (Currently on Linux)</li>
          <li>Free and Open Source Software (FOSS) Culture.</li>
          <li>Graphics Design</li>
          <li>Machine Learning and Deep Neural Networks</li>
          <li>API’s, backend and Cloud Computing</li>
          <li>Management.</li>
        </ul>
      </>
    ),
  },
  {
    title: <>What tasks do I need to do to land an interview for HnCC ?</>,
    body: (
      <>
        Do at least one of the following:-
        <ul>
          <li>
            Get in touch with a member of HnCC and ask him/her to refer you.
            He/she will refer you only if they feel you are skilled.
          </li>
          <li>
            At least 4 stars on{' '}
            <a
              href="https://www.hackerrank.com/"
              target="_blank"
              rel="noreferrer"
            >
              HackerRank
            </a>{' '}
            in any domain such as language or problem solving, etc.
          </li>
          <li>
            Should know basic algorithms such as Bubble Sort, Selection Sort,
            Insertion Sort, Binary Search, ‘Tower of Hanoi’.
          </li>
          <li>
            Can solve at least 2 questions from{' '}
            <a
              href="https://www.codechef.com/"
              target="_blank"
              rel="noreferrer"
            >
              CodeChef
            </a>{' '}
            Codechef Monthly Long Challenge 8 months from joining College or 4
            questions, after 1.5 years from joining college
          </li>
          <li>
            You are confident enough to explain to us any concept from your
            previous experience in programming from your class 10 or 12.
          </li>
          <li>
            Make a very simple and basic App and should be able to explain
            basics from your own project.
          </li>
          <li>
            Make a very simple and basic Website and should be able to explain
            basics from your own project.
          </li>
          <li>
            Make a very simple and basic Game and should be able to explain
            basics from your own project.
          </li>
          <li>
            Make a very simple and basic Machine Learning Project and should be
            able to explain basics from your own project.
          </li>
          <li>
            Make an attractive Design and should be able to explain the basics
            of the platform you have used.
          </li>
          <li>
            You have experience with Linux Operating systems before and you can
            use and explain basic UNIX commands.
          </li>
          <li>
            You can explain DBMS or SQL concepts and can perform basic SQL
            queries.
          </li>
          <li>
            Make a 3D design from software such as Blender and can explain the
            basics of their project.
          </li>
          <li>
            Make a promotional video from scratch in any of the following
            software like Adobe Premiere Pro, Adobe After Effects, Filmora, etc.
          </li>
          <li>
            You have displayed management skills before and you have (Management
            + basic programming skills) or (Management + any skill in any domain
            of HnCC). In such a scenario Management has more weightage.
          </li>
          <li>Have any prior experience with Robots or Arduino.</li>
          <li>
            Miscellaneous i.e. Show us any skill that you might think HnCC might
            be interested in.
          </li>
        </ul>
        Once you have completed any of the points, contact your immediate
        seniors.
      </>
    ),
  },
  {
    title: (
      <>
        I got rejected in Interview but I want to join the Developer’s community
        i.e. HnCC. What should I do now ?
      </>
    ),
    body: (
      <>
        There is nothing to be worried about if you got rejected. You can try
        again after sharpening your skills. All that matters is skill and
        interest to join HnCC.
      </>
    ),
  },
  {
    title: (
      <>I want to keep in touch with my seniors. How can I contact them ?</>
    ),
    body: (
      <>
        Hey, you can get a list of all our members at{' '}
        <Link href="/teams">
          <a>HnCC Team Page.</a>
        </Link>{' '}
        Keep in touch with your Seniors and Alumni, It is a very good culture.
        You will gain a lot.
      </>
    ),
  },
  {
    title: <>I don’t know anything about coding. What should I do ?</>,
    body: (
      <>
        Just start with any Object-Oriented Programming Language like(Python,
        Java, C++, etc).
        <br />
        For now, you should focus on our{' '}
        <strong>“INTRO TO PYTHON BOOTCAMP”</strong> session. Also, you can pick
        a language of your own and search for a top-rated playlist on YouTube.
        Knowledge is free on the Internet. Don’t pay.
      </>
    ),
  },
  {
    title: (
      <>I am not from a CSE/IT Branch. Is HnCC the right choice for me ?</>
    ),
    body: (
      <>
        There is <strong>“NO BRANCH RESTRICTION”</strong>, we have more than 60%
        of members, who are from non-CS/IT branch, If you are interested in any
        one of our segments, then definitely you should apply.
      </>
    ),
  },
  {
    title: (
      <>
        Please give me an assignment. I want to get started and show off my
        skills.
      </>
    ),
    body: (
      <ul>
        <li>
          <strong>Competitive Programming</strong> : Here are some suggestions
          you can go to{' '}
          <a href="https://www.hackerrank.com" target="_blank" rel="noreferrer">
            HackerRank
          </a>{' '}
          and get a Gold Badge in any domain.
        </li>
        <li>
          <strong>Android Development</strong> : You can create a Calculator App
          or a Tic Tac Toc App or you can choose any one from internet or here{' '}
          <a
            href="https://techvidvan.com/tutorials/android-project-ideas/"
            target="_blank"
            rel="noreferrer"
          >
            Android Development Project Ideas for Beginners.
          </a>
        </li>
        <li>
          <strong>Web Development</strong> : You can make a TO DO App or a Login
          Page or any project from Internet or see here{' '}
          <a
            href="https://www.upgrad.com/blog/web-development-project-ideas-for-beginners/"
            target="_blank"
            rel="noreferrer"
          >
            Web Development Project Ideas for Beginners.
          </a>
        </li>
        <li>
          <strong>Game Development</strong> : Check out the Unity Website{' '}
          <a
            href="https://learn.unity.com/projects"
            target="_blank"
            rel="noreferrer"
          >
            Unity Projects.
          </a>{' '}
          Pick a beginner level project from here or from youtube.
        </li>
        <li>
          <strong>Machine Learning</strong> : Check this out{' '}
          <a
            href="https://www.dezyre.com/article/top-10-machine-learning-projects-for-beginners/397"
            target="_blank"
            rel="noreferrer"
          >
            Top 10 Machine Learning Projects for Beginners.
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: <>Is HnCC an open club ?</>,
    body: (
      <>
        <strong>No.</strong> It takes a lot of time and dedication for what we
        do. To achieve our goals we need full time members. Be it hard skills
        like coding or soft skills like event management, product management,
        etc. , HnCC got you covered.
        <br />
        There are some organizations/clubs you can be in along with HnCC are:-
        <ul>
          <li>Arts Club</li>
          <li>Sports Club</li>
          <li>Prayaas India</li>
          <li>Sarjana</li>
        </ul>
        If your club is not in the list and you feel it should be here. Please
        contact and ask us for a review.
      </>
    ),
  },
  {
    title: (
      <>
        Sir, I don&apos;t know anything about coding but I want to learn, so
        kindly guide me from where should I start and which language should I
        learn first ?
      </>
    ),
    body: (
      <>
        No issues, if you have no prior knowledge of coding you just need a
        strong will to master programming. First of all, pick a programming
        language (C++, Java, Python -recommended) learn its syntax and then dive
        into learning DSA (Data Structure and Algorithm) using that language and
        practice your skills on various platforms such as{' '}
        <a href="https://www.hackerrank.com" target="_blank" rel="noreferrer">
          HackerRank
        </a>{' '}
        ,{' '}
        <a href="https://www.hackerearth.com" target="_blank" rel="noreferrer">
          HackerEarth
        </a>
        .
      </>
    ),
  },
  {
    title: <>When will the inductions start ?</>,
    body: (
      <>
        The induction process has no starting and ending point. It is LIVE
        always. However, there is a good chance the earliest you join the more
        you get to learn fast and become Industry ready. If for any reason, you
        don’t understand what to do or how to get inducted, just make a project
        of your own and show us the project by sending a message on our Fb page
        or follow{' '}
        <a href="https://learn.hnccbits.com" target="_blank" rel="noreferrer">
          HnCC Learn.
        </a>
      </>
    ),
  },
  {
    title: <>Can a Non-Bitian become a member of HnCC ?</>,
    body: (
      <>
        HnCC is working towards making the community diverse and strong. We are
        going to come up with this idea very soon. Right now we are working
        towards the structure of HnCC when Non-Bitian can join.
      </>
    ),
  },
  {
    title: <>How to get started with Android App Development ?</>,
    body: (
      <>
        First of all you should be clear to your learning goals like how to step
        one by one from basics to advance and for that one should follow a
        roadmap as it is the best way to get ahead in a proper manner and will
        help you to be a pro in this field.
        <br />
        Follow the steps listed below :-
        <ul>
          <li>Learn Basics of Java</li>
          <li>Find a beginner course on YT or any Online learning platform</li>
          <li>
            Make simple projects like Calculator, Tic Tac Toe, TO DO, Reminder
            App, Alarm App to get started.
          </li>
        </ul>
        You can find resources on YouTube such as{' '}
        <a
          href="https://www.youtube.com/watch?v=hzrGAZnMOMQ&list=PLonJJ3BVjZW6hYgvtkaWvwAVvOFB7fkLa"
          target="_blank"
          rel="noreferrer"
        >
          slidenerd
        </a>{' '}
        YouTube channel. You can find intermediate free resources by Google at
        Udemy and Coursera. There are a lot of very good free courses at
        Coursera and edx.
      </>
    ),
  },
  {
    title: <>How to get started with Website Development ?</>,
    body: (
      <>
        Web Development basically involves the development of front-end and
        back-end.
        <br />
        <br />
        In front-end development, we develop the user-end of the website. For
        front-end you should learn HTML, CSS and Javascript. You should first
        start with front-end development. After having a good command on HTML
        and CSS, you should learn Javascript basics(For simple front-end
        development basics of JS is enough).
        <br />
        <br />
        After the front-end, comes the backend. In the backend you should first
        learn about servers, databases and how the internet works? After that
        pick up a language (any one) such as Python (Django/Flask) preferable if
        you want to increase your tech-stack, You can also prefer Node.js as you
        have already learnt about JS in the front-end, you don’t have to learn
        something new. Learn Database languages like SQL and MongoDB (learn
        both). After that, you should learn any javascript framework which is in
        great demand like ReactJS.
        <br />
        <br />
        Also, keep in mind that each year, lots of new things come in this
        field, so be prepared with old technologies. The new ones are basically
        the modified forms of the old ones.
        <br />
        For learning all these, you can refer to W3Schools, MDN WebDocs, Udemy,
        YouTube or the official documentation of the language.
      </>
    ),
  },
  {
    title: <>How to get started with Graphics Design ?</>,
    body: (
      <>
        Graphic Design is a broad field with various niches. You will need to
        figure out your niche and proceed, which will ultimately come along with
        experience.
        <br />
        <br />
        First of all grab a decent level laptop and try installing Adobe
        Illustrator or Photoshop, and look for some courses for Graphic Design
        on Udemy (Although they are paid but you can get them for free on
        torrent).
        <br />
        Complete the course and parallelly keep exploring about Graphic Design
        on the internet, particularly on YouTube. (Some recommended channels:
        The Futur, GFX Mentor).
        <br />
        <br />
        Follow the above steps, you&apos;ll gradually get to know how to proceed
        further in the world of Media and Graphics. Hope it helps!
        <br />
        <strong>
          PS: You can feel free to contact any of your seniors if you face issue
          in any of the above mentioned steps.
        </strong>
      </>
    ),
  },
  {
    title: <>How to get started with Game Development ?</>,
    body: (
      <>
        You can start game development using any language but a game engine is
        preferred as it make everything easy and manageable, Unity (C#), Godot
        (C++, GDScript, C#) or Unreal Engine (C++) .<br />
        <br />
        In HnCC we use Unity as it is good for beginners and small developers.
        YouTube has tons of tutorials regarding Unity Game Development and Unity
        itself has Demo Games and Tutorials for learning for free on their
        website.
        <br />
        <br />A mid or high core cpu is recommended and if you are thinking of
        creating a high graphics intensive game you must have a dedicated
        graphic card.
      </>
    ),
  },
  {
    title: <>What is AI ? What is Machine Learning ? How do I get started ?</>,
    body: (
      <>
        AI or artificial intelligence simply means human intelligence exhibited
        by machines.
        <br />
        <br />
        Machine Learning is a subset of AI,it is an algorithm that has the
        capability to learn from its previous experiences and for that we don’t
        have to program it separately.
        <br />
        First thing is to get familiar with the terms that we use in ML like
        features,training etc, secondly we have to understand the use of tools
        like jupyter notebook,pandas,numpy etc.then learn about the common ML
        models like linear regression,decision trees etc and the maths behind
        them.’
        <br />
        <br />
        You can start your journey with the youtube channel “Code with Harry”.
        <br />
        <strong>
          In short , ML is one small step towards data science. Start your
          journey with this small initiative.
        </strong>
      </>
    ),
  },
  {
    title: <>What is Competitive Programming ? How do I get started ?</>,
    body: (
      <>
        Competitive programming is solving well-defined problems by writing
        computer programs under specified limits.
        <br />
        <br />
        Follow these steps to start your Competitive Programming journey:-
        <ul>
          <li>Choose a Programming Language</li>
          <li>Understand the Concept of Time and Space Complexity.</li>
          <li>Learn the Fundamentals of Data Structures and Algorithms.</li>
          <li>
            Start solving problems on online judges (i.e.{' '}
            <a href="https://hackerrank.com" target="_blank" rel="noreferrer">
              HackerRank
            </a>{' '}
            and{' '}
            <a href="https://hackerearth.com" target="_blank" rel="noreferrer">
              HackerEarth
            </a>{' '}
            for beginners and{' '}
            <a href="https://codechef.com" target="_blank" rel="noreferrer">
              CodeChef
            </a>{' '}
            and{' '}
            <a href="https://codeforces.com" target="_blank" rel="noreferrer">
              CodeForces
            </a>{' '}
            for intermediates)
          </li>
          <li>Practice and do it regularly.</li>
        </ul>
      </>
    ),
  },
  {
    title: (
      <>
        I see myself as an IT Engineer 5 years from now. What should I perceive
        technology from now ?
      </>
    ),
    body: (
      <>
        There are some mandatory characteristics of a good Silicon Engineer :-
        <ul>
          <li>They have a strong approach in Data Structure and Algorithms.</li>
          <li>They understand what Open-Source is.</li>
          <li>
            They are very active in community activities and learn even from
            simple things.
          </li>
          <li>They use the Internet like a PRO.</li>
          <li>
            Internet is more important for them i.e. they have a higher priority
            for paying Internet bills than Restaurant bills.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <>What are Data Structures and Algorithms ?</>,
    body: (
      <>
        How would you sort a list that has a billion names on it in minimum
        time?
        <br />
        How would you find the shortest route between two towns in a dense city?
        <br />
        How would scientists find a bad gene in the DNA strand of billions of
        genes?
        <br />
        <br />
        These are some problems that have a huge data set to work on.
        <br />
        So to solve these in a reasonable amount of time, one has to come with
        creative ideas to minimize the time and resources required to solve this
        on a computer.
        <br />
        Data Structures and Algorithms is the study of these common problems.
        You’ll learn how to solve these kinds of huge problems.
      </>
    ),
  },
  {
    title: <>I don’t have a laptop. I am eligible to join HnCC ?</>,
    body: (
      <>
        To prove your interest you don’t need a laptop definitely but we
        recommend that you buy a laptop within six months after joining BIT.
        Yes, you need a laptop to survive in HnCC or else you will not be able
        to take the benefit of the community that HnCC offers.
      </>
    ),
  },
  {
    title: <>Can you suggest a laptop for me ?</>,
    body: (
      <>
        It depends upon your work. But it&apos;s preferable for general use to
        have a high-end laptop with an intel i5 processor or above or Ryzen 5 or
        above along with 8GB RAM and 1TB Hard Disk or, 256GB SSD. Graphics card
        up to 4GB 1050Ti if you want to do graphic designing, video editing, and
        game development.
        <br />
        <strong>For Web Development</strong> : i5 or Ryzen 5 with 8GB RAM
        recommended Android Development: i5 or Ryzen 5 with 8GB RAM recommended
        Graphics Design, Video Editing, 3D Rendering: i5 or Ryzen 5 with 8GB
        RAM, with 2-4 GB Graphics Memory recommended.
        <br />
        <strong>Notes:-</strong>
        <br />
        Try going for an SSD first. SSD increases productivity many fold times.
        <br />
        If a laptop is costly for you to buy directly, try No-Cost EMI, it is a
        great way to ease the financial pressure.
      </>
    ),
  },
  {
    title: (
      <>
        I cannot buy a laptop right now, laptops are very costly, what should I
        do now?
      </>
    ),
    body: (
      <>
        You won’t need the laptop right now as you’ll be learning about the
        basics and you can do that using your phones.
        <br />
        If a laptop is costly for you to buy directly, try No-Cost EMI, it is a
        great way to ease the financial pressure.
      </>
    ),
  },
  {
    title: <>I want someone to mentor me. Can HnCC help me ?</>,
    body: (
      <>
        <Link href="/teams">
          <a>HnCC Team Page</a>
        </Link>
        <br />
        Of course. Find a mentor in the domain you are interested in and contact
        them.
        <br />
        You have to prove to them that your interest is genuine so that they
        won’t be wasting time on you.
      </>
    ),
  },
  {
    title: (
      <>
        Is it safe to buy a laptop online because online stores are cheaper for
        the same laptop offered offline ?
      </>
    ),
    body: (
      <>
        A lot of our members and friends have bought laptops online. Please buy
        from a trustable source with trustable sellers only.
      </>
    ),
  },
  {
    title: <>How big is HnCC ?</>,
    body: (
      <>
        <strong>4 letters big!!!</strong> Just kidding.
        <br />
        In terms of a team, we are being led by our Prof-in-Charge Dr. Dinesh
        Prabhakar Sir along with students from all the years.
        <br />
        The final year members bepost-bearersors and the third year are the post
        bearers of the club. Generally, each year consists of 15-20 members, it
        can be more or less.
        <br />
        So we have a great family of developers and coders proficient in various
        fields.
      </>
    ),
  },
  {
    title: <>What are some of the events the developer organizes ?</>,
    body: (
      <ul>
        <li>Hackathon (HACKATRON)</li>
        <li>Developer of the Year (DOTY)</li>
        <li>CodeStorm</li>
        <li>Bit Code (Monthly Coding Contest)</li>
        <li>HacktoberFest</li>
      </ul>
    ),
  },
  {
    title: <>What are some of the achievements of HnCC ?</>,
    body: (
      <>
        <ul>
          <li>
            We organized the first-ever national-level hackathon, Hackatron,
            ever in BIT Sindri.
          </li>
          <li>
            Two of our members from 3rd year, Suraj Mahto(IT) and Anjani
            Kumar(IT) hold developer status in the KDE Community.
          </li>
          <li>
            Recently, our android team (lead by Shivam Anand and Anubhaw Sharma)
            had taken part in a National Hackathon, in which they were currently
            got into finals with 6th rank.
          </li>
          <li>We have a record high of 20.5k downloads on Play Store</li>
          <li>
            A team from HnCC won the 1st prize in COVIDTHON organized by Govt.
            of Jharkhand
          </li>
        </ul>
        This are some of the recent achievements.
      </>
    ),
  },
  {
    title: <>What is Open-Source software ?</>,
    body: (
      <>
        From Wikipedia, Open-Source software is a type of computer software in
        which source code is released under a license in which the copyright
        holder grants users the rights to use, study, change, and distribute the
        software to anyone and for any purpose.
        <br />
        For us, it is a great chance to work in real work experience from great
        project maintainers in the world and contribute to software that you use
        in your daily life or it improves the experience of thousands of people.
      </>
    ),
  },
  {
    title: <>What is Linux ? Why do HnCC members suggest Linux ?</>,
    body: (
      <>
        <strong>Short Answer</strong>:- Linux is the best operating system for
        developers or programmers.
        <br />
        <br />
        <strong>Long Answer</strong>:- HnCC Members will always suggest you go
        for the open-source operating system Linux. Linux powers the internet,
        system administrators, Supercomputers etc.
        <br />
        For most apps or websites that you use, there is a high probability that
        it might have been powered by a Linux system.
        <br />
        <strong>For a student, learning is the most important</strong>.<br />
        Closed systems like Windows and Mac don’t provide that degree of open
        environment and hackable features like you get on a Linux system which
        is most important for learning and experimenting.
        <br />
        You can read more about the experience of having Linux OS, on the blog
        written by one of our 2nd-year member, Zeeshan Ashraf (ECE) at{' '}
        <a
          href="https://blog.hnccbits.com/2020-07-16-LinuxExp-blog/"
          target="_blank"
          rel="noreferrer"
        >
          Developer Docs
        </a>
      </>
    ),
  },
  {
    title: (
      <>
        What are some of the projects deployed by HnCC and can be seen by users
        ?
      </>
    ),
    body: (
      <>
        <strong>Android Apps</strong>
        <ul>
          <li>
            Simple Paint :{' '}
            <a
              href="https://play.google.com/store/apps/details?id=com.teamvoyager.myapplication"
              target="_blank"
              rel="noreferrer"
            >
              App Link
            </a>
          </li>
          <li>
            Algorithm Visualizer :{' '}
            <a
              href="https://play.google.com/store/apps/details?id=project.teamvoyager.visualizer"
              target="_blank"
              rel="noreferrer"
            >
              App Link
            </a>
          </li>
          <li>
            Open Chat in WhatsApp ~ 20kb :{' '}
            <a
              href="https://play.google.com/store/apps/details?id=team.Voyager.openinwhatsapp"
              target="_blank"
              rel="noreferrer"
            >
              App Link
            </a>
          </li>
        </ul>
        <br />
        <strong>Websites</strong>
        <ul>
          <li>
            <Link href="/">
              <a rel="noreferrer">HnCC Club Site</a>
            </Link>
          </li>
          <li>
            <a
              href="https://contest.hnccbits.com"
              target="_blank"
              rel="noreferrer"
            >
              HnCC Contest Page
            </a>
          </li>
          <li>
            <a
              href="https://learn.hnccbits.com"
              target="_blank"
              rel="noreferrer"
            >
              HnCC Learn Website
            </a>
          </li>
          <li>
            <a
              href="https://hackatron19.hnccbits.com"
              target="_blank"
              rel="noreferrer"
            >
              Hackatron Website (National Level Hackathon held last year)
            </a>
          </li>
        </ul>
        <br />
        <strong>Games</strong>
        <ul>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.Hncc.APlane"
              target="_blank"
              rel="noreferrer"
            >
              A Plane-A Space Voyage
            </a>
          </li>
        </ul>
        <br />
        Apart from this HnCC has made a lot of Projects. The projects above
        mentioned were robust and scalable enough to be used by the public.
      </>
    ),
  },
  {
    title: <>What are the social handles of HnCC ?</>,
    body: (
      <>
        <a
          href="https://www.facebook.com/hnccbits/"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <br />
        <a
          href="https://www.linkedin.com/company/hnccbits/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <br />
        <a
          href="https://www.instagram.com/hnccbits/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <br />
        <a href="https://github.com/hnccbits" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </>
    ),
  },
  {
    title: <>We are an organization and we want to collab with HnCC.</>,
    body: (
      <>
        Email us at <a href="mailto:hnccbits@gmail.com">hnccbits@gmail.com</a>{' '}
        or drop a message at our facebook page.
      </>
    ),
  },
];

export default options;
