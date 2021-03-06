import React from 'react'; 
import background from "../../assets/Projects/fog.jpg"



function About() {

    return (
         
        <section className="about-section">
            
            <h1 id="about" style={{ backgroundImage: `url(${background})` }}>
               About Me
            </h1>
            <div className="my-2">
               <li>
                 <p>
                        Currently, I am attending the Fullstack Web Development 
                    Coding Bootcamp at UC Berkeley. My primary goal is to develop a new skill set,
                    and to accomplish this I seek to gain experience through certification programs. I've
                    also included networking and working on individual projects to help me gain experience.
                    Overall, I am not interested in skimping over coding and web development knowledge
                    for a quick jump into a career but instead seek to fully understand what makes this
                    an interesting and challenging career choice by developing my skills and knowledge,
                    after I've met these personal goals I've set for myself ill then be ready to branch
                    out and start a new career.

                    In the near future I hope to start a C/C++ certification program, as well as 
                    work as a freelancer to add to my work experience. 
                </p>
                </li>
            </div>
            
        </section>
        
    
    );
}

export default About;