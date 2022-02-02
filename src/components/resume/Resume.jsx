import "./resume.scss";

export default function Resume() {
    return <div className="resume" id="resume">
        <div className="left">
            <div className="section">
                <h1>Education</h1>            
                <div className="innerSec">
                      <div className="heading">
                          <h3>University of Central Missouri</h3>
                          <p>Expected Graduation: December 2022</p>
                      </div>
                      <div className="content">
                          <h3>Master of Science in Computer Science</h3>
                          <p>Major GPA: 4.0 / 4.0</p>
                      </div>
                </div>               
                <div className="innerSec">
                      <div className="heading">
                          <h3>Saranathan College of Engineering, India</h3>
                          <p>July 2011 - May 2015</p>
                      </div>
                      <div className="content">
                          <h3>Bachelor of Engineering in Computer Science</h3>                         
                      </div>
                </div>          
            </div>            
            <div className="section">
                <h1>Work</h1>
                <div className="innerSec">
                    <div className="heading">
                      <h3>Mphasis Ltd, Bangalore, India</h3>
                      <p>Dec 2020 – Joly 2021</p>
                    </div>
                    <div className="content">
                            <h3>Senior Software Engineer</h3>
                            <div className="list">
                              <ul className="listStyle">
                                <li>Worked with managers to re-architect a web page which improved the page speed by 15%.</li>
                                <li>Improved performance lags in the existing system which increased efficiency by 20%.</li>
                                <li>Customized standard functionality to expand on an out-of-the-box list feature without compromising the page load time.</li>
                              </ul>
                            </div>
                    </div>
                </div>
                <div className="innerSec">
                    <div className="heading">
                      <h3>ThermoFisher Scientific, India</h3>
                      <p>Jan 2019 – Dec 2020</p>
                    </div>
                    <div className="content">
                            <h3>Developer</h3>
                            <div className="list">
                              <ul className="listStyle">
                                <li>Led the migration of the entire business process of Japan from Veeva platform to Salesforce platform.</li>
                                <li>Built utility to derive price realization that reduced approximately 60% of manual workflow.</li>
                                <li>Developed an automated system that predicts the quotes for the upcoming quarter.</li>
                              </ul>
                            </div>
                    </div>
                </div>
                <div className="innerSec">
                    <div className="heading">
                      <h3>Infosys, Chennai, India</h3>
                      <p>November 2015 - September 2018</p>
                    </div>
                    <div className="content">
                            <h3>Software Engineer</h3>
                            <div className="list">
                              <ul className="listStyle">
                                <li>Developed Lab-Sample Request application using Lightning (MVC) framework and JavaScript.</li>
                                <li>Mentored Release Management Team (of 4) to deploy the application using AutoRABIT devOps tool. </li>
                                <li>Built an automated migration tool that analyses millions of Hospitality Chatter data of multiple applications maintained in different dbs and merges them into a single database.</li>
                              </ul>
                            </div>
                    </div>
                </div>              
            </div>              
        </div>
        <div className="right">
            <div className="skills">
              <h1>Skills</h1>
              <ul>
                <li>Java</li>
                <li>Apex</li>
                <li>Javascript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Spring</li>
                <li>GIT</li>
                <li>Postman</li>
                <li>Bootstrap</li>
                <li>Hibernate</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Eclipse</li>
                <li>IntelliJ</li>
                <li>Visual Studio Code</li>               
              </ul>
            </div>
            <div className="resume">
                <a href={process.env.PUBLIC_URL + "/assets/Susmitha_Tamilselvan.pdf"} download>Download Resume</a>
            </div>
        </div>      
    </div>;
}