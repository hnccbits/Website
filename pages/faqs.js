import { useEffect } from 'react';
import jQuery from 'jquery';

import Head from 'next/head';
import { BsChevronRight } from 'react-icons/bs';
import Screen from '../components/screen/Screen';
import options from '../lib/data/FaqData';
import styles from '../styles/faq.module.css';

function FAQs() {
  useEffect(() => {
    jQuery(`.${styles.title}`).on('click', function titleClicked() {
      const clickedElement = jQuery(this);
      // console.log(clickedElement);
      /* 
	    	Initially removing rotate-clockwise class from all dropdown icons
			  inside the accordion, it is to make sure that if the user clicks
			  on any other header except the opened one, the opened one's icon also
			  rotated to it's previous state
		  */
      clickedElement
        .parent()
        .parent()
        .find('.rotate-90')
        .removeClass('rotate-90');

      if (clickedElement.parent().hasClass(styles.active)) {
        /*
			      If one accordion is already open and the same ACCORDION HEADER is clicked,
			      then remove the active class from the ACCORDION ITEM and also remove the
			      rotate-90 class from it's icon and slide the ACCORDION CONTENT upwards.
		    */
        clickedElement.children().last().removeClass('rotate-90');
        clickedElement.parent().removeClass(styles.active);
        clickedElement.next().slideUp(280);
      } else {
        // Closing all opened accordion
        clickedElement
          .parent()
          .parent()
          .find(`.${styles.item}`)
          .removeClass(styles.active);

        clickedElement.parent().parent().find(`.${styles.body}`).slideUp(280);

        // Opening the clicked accordion item
        clickedElement.children().last().addClass('rotate-90');
        clickedElement.parent().addClass(styles.active);
        clickedElement.next().slideDown(280);
      }
    });
  }, []);

  return (
    <Screen>
      <Head>
        <title>Frequently Asked Question (FAQs) 🤔</title>
        <meta
          name="description"
          content="Frequently asked questions about HnCC by a student/professional"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Frequently Asked Question, FAQs, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <section className="container-70 pt-16 sm:pt-8 sm:w-4/5 xs:w-[85%]">
        <div className="mt-6 mb-20 sm:mt-8 sm:mb-20 xs:mt-4 xs:mb-16">
          <h1 className="text-6xl xl:text-5xl xl:leading-snug sm:text-4xl text-center">
            Frequently Asked Question (FAQs) 🤔
          </h1>
        </div>
        <div className="grid gap-4 sm:gap-2">
          {options.map(({ title, body }) => {
            return (
              <div className={styles.item} key={title.props.children}>
                <button type="button" className={styles.title}>
                  <h2 className="text-2xl text-left sm:text-xl">{title}</h2>
                  <BsChevronRight className="ml-4 w-8 shrink-0" />
                </button>
                <div className={styles.body}>
                  <div className="text-left text-lg">{body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Screen>
  );
}

export default FAQs;
