import React from "react";
import InfoSection from "./InfoSection";

export default function EducationSection({ hide, title }) {
  return (
    <InfoSection hide={hide} title={title}>
      <h3>June 2019 - Current | MIT Lectures</h3>
      <ul>
        <li>
          Watching MIT lectures on their open courseware site following required
          credits for a Bachelors in Computer Science
        </li>
        <li>
          <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/">
            Click here to see the open courseware website containing the
            resources I use
          </a>
        </li>
        <li>
          <a href="http://catalog.mit.edu/degree-charts/computer-science-engineering-course-6-3/">
            Click here to see the degree chart I follow
          </a>
        </li>
      </ul>
      <h3>January 2020 | Certificate of Completion</h3>
      <ul>
        <li>The Complete 2020 Web Development Bootcamp on Udemy.com</li>
        <li>
          <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">
            Click here to see the course
          </a>
        </li>
        <li>
          <a href="./files/Certificate of Completion.pdf">
            Click here to see the Certificate
          </a>
        </li>
      </ul>
      <h3>February 2013 | High School Diploma</h3>
      <ul>
        <li>Attended Waukesha North High School and graduated with Honors</li>
      </ul>
    </InfoSection>
  );
}
