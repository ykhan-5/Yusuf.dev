import React from "react";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="card0">
          <div className="name">Yusuf Khan</div>

          <div className="header-blurb">
            {/* Programming. Learning. Curiosity. Engagement. Development.{" "} */}
            <button class="button-74" role="button">
              See my Resume!
            </button>
          </div>
        </div>
        <div className="card1">
          <div className="content">
            <div>June 2023 - Present</div>
            <div className="card-title">
              Data Anaytics and Self Service Intern @ WM
            </div>
            <div className="card-notes">
              Optimized customer flows within WM.com to improve user experience
              and customer satisfaction. Enhanced the WM.com chatbot by
              utilizing AWS Lex for intent/response control and Snowflake for
              data analytics. Served as product owner for the chatbot team's
              data analytics, showcasing the results of recent enhancements.
              Verified Bulk Pickup availability for over 20,000 customers,
              reducing frustration about discrepancies between availability and
              site information.
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="small-card-1">
            <div className="content">
              <div>Future</div>
              <div className="card-title">Incoming API Intern @ HCSS</div>
              <div className="card-notes">
                As an API intern at HCSS, a leading Civil/ Construction focused
                SaaS company offering APIs as a service, I look forward to
                developing and maintaining APIs, creating detailed
                documentation, and working closely with both business and
                technical teams.
              </div>
            </div>
          </div>
          <div className="small-card-2">
            <div className="content">
              <div>Future</div>
              <div className="card-title">Student Ambassador @ ION</div>
              <div className="card-notes">
                I’m excited to dive into the Ion and Ion District as a Student
                Ambassador. I look forward to working with the Ion team and
                fellow students to highlight the programs and events that make
                the Ion a hub for innovation.
              </div>
            </div>
          </div>
        </div>
        <div className="card3">
          <div className="content">
            <div>December 2023 - Present</div>
            <div className="card-title">
              SEP Data Structures Workshop Facilitator @ UH
            </div>
            <div className="card-notes">
              In my role as a workshop facilitator for over 30 students, I
              provide engaging sessions on Data Structures, addressing
              individual learning needs and developing supplementary materials.
              This approach has led to a 10% increase in exam averages. I focus
              on creating a collaborative learning environment to enhance
              critical thinking and problem-solving skills.
            </div>
          </div>
        </div>
        <div className="card4">
          <div className="small-card-3">
            <div className="content-small">Resume</div>
          </div>
          <div className="small-card-3">
            <div className="content-small">Linkedin</div>
          </div>
          <div className="small-card-3">
            <div className="content-small">Github</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
