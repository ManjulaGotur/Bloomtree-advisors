import React  from "react";
import "../styles/Firstpage.css";

const Firstpage = () => {

  return (
    <div className="firstpage">
      <div className="Section1">
        <div className="bloomtree">
          <div className="content">
            <div className="heading">
              <h1>Bloomtree Advisors</h1>
              <p>
                You take care of the core business and we take care of the math.
                Our vision is to cater as a one-stop solution for all your
                finance related services
              </p>
              <button className="btn btn-secondary">Get Started -&gt;</button>
            </div>
            <div className="sources">
              <div className="source1">
                <p>Outsourced Accounting</p>
                <p>Consulting and Advisory</p>
                <p>Virtual CFO and Allied</p>
              </div>
              <div className="source2">
                <p>Taxation and Compliances</p>
                <p>Corporate Finance and Audit</p>
                <p>Investor Relation</p>
              </div>
            </div>
          </div>
          <div className="image ms-5">
            <img
              src="https://m.foolcdn.com/media/dubs/images/smiling_man_in_business_suit_at_laptop_GettyIma.original.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="Section2">
        <div className="aboutsec">
          <div className="mainabout">
            <div className="imge ms-5 mt-5">
              <img
                src="https://bloomtreeadvisors.com/assets/uploads/about/welcome.jpg"
                alt=""
              />
              <div className="headings ms-2 mt-4">
                <h1>
                  <span>ABOUT US</span>
                </h1>
                <h2>Welcome To Bloomtree Advisors</h2>
              </div>
              <div className="establish ms-2 ">
                <p>
                  Bloomtree Advisors was established with a vision to support
                  the <br />
                  functionalities of an organization by complimenting the work
                  of a <br />
                  CEO/the founders by acting as their shadow in the finance
                  domain <br />
                  of the company. The team comprises of subject matter experts
                  who <br />
                  provide professional, results-driven and high-quality advisory{" "}
                  <br />
                  services to all our clients with time-bound precision.
                </p>
                <button className="btn btn-secondary">LEARN MORE &gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Section3">
        <div className="main-offer">
          <div className="services">
            <h2 className="text-center">WHAT WE DO</h2>
            <h1 className="text-center ">Services We Offer</h1>

            <div className="outsource1  mt-5">
              <div className="outsrc">
                <img
                  className="mt-3"
                  src="https://bloomtreeadvisors.com/assets/uploads/service/calculator.png"
                  alt=""
                />
                <h3 className="mt-3">Outsourced Accounting</h3>
                <p className="mt-2 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione nulla odio amet voluptatem nihil inventore! Suscipit
                  numquam veritatis natus ea repudiandae dicta porro. Iste, ad.
                </p>
                <button className="butt btn btn-primary mb-2">
                  Read more -&gt;
                </button>
              </div>

              <div className="consult">
                <img
                  className="mt-3"
                  src="https://bloomtreeadvisors.com/assets/uploads/service/consultant-services.png"
                  alt=""
                />
                <h3 className="mt-3">Consulting and Advisory</h3>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  odit veritatis, quam, deleniti voluptatum ratione nobis, ab
                  deserunt atque dolorum laborum sed eveniet. Saepe, maxime?
                </p>
                <button className=" butt btn btn-primary mb-2">
                  Read more -&gt;
                </button>
              </div>

              <div className="virtual">
                <img
                  className="mt-3"
                  src="https://bloomtreeadvisors.com/assets/uploads/service/planning.png"
                  alt=""
                />
                <h3 className="mt-3">Virtual CFO & Allied Services</h3>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque saepe quaerat ipsum. Impedit officiis labore,
                  recusandae qui ipsam voluptates totam, corporis minima vitae
                  mollitia porro.{" "}
                </p>
                <button className="butt btn btn-primary mb-2">
                  Read more -&gt;
                </button>
              </div>
            </div>

            <div className="oursource2 ms-1 p-4 mt-5">
              <div className="tax">
                <img
                  className="mt-3"
                  src="https://bloomtreeadvisors.com/assets/uploads/service/taxes.png"
                  alt=""
                />
                <h3 className="mt-3">Taxation & Compliances</h3>
                <p className="mt-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione atque distinctio nobis eaque eligendi libero dolores
                  temporibus omnis, consequuntur soluta, facere nostrum minus
                  fuga labore?
                </p>
                <button className="butt btn btn-primary mb-2">
                  Read more -&gt;
                </button>
              </div>

              <div className="corporate ms-">
                <img
                  className="mt-3"
                  src="https://bloomtreeadvisors.com/assets/uploads/service/operator.png"
                  alt=""
                />
                <h3 className="mt-3">Corporate Finance and Audit</h3>
                <p className="mt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis eos sed, saepe aliquam obcaecati placeat repudiandae
                  eveniet autem, nostrum dolorem impedit? Nemo corporis a
                  consectetur.
                </p>
                <button className="butt btn btn-primary mb-2 ">
                  Read more -&gt;
                </button>
              </div>

              <div className="investor">
                <img
                  className="mt-3"
                  src="https://bloomtreeadvisors.com/assets/uploads/service/assignment.png"
                  alt=""
                />
                <h3 className="mt-3">Investor Relation</h3>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi minus quidem iusto. Dolore quidem labore quia nemo,
                  neque vitae, suscipit error eaque numquam iure doloribus?
                </p>
                <button className="btn btn-primary mb-2 text-center">
                  Read more -&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Section4">
        <div className="teammates ">
          <h2 className="mt-5 fs-1 text-center">Our Team</h2>
          <div className="teammember  ">
            <div className="person1">
              <img
                src="https://bloomtreeadvisors.com/assets/uploads/team/_MG_4437.jpg"
                alt=""
              />
              <h4 className="text-center">Anantha Padmanabha H S</h4>
              <p className="text-center">View Profile</p>
            </div>
            <div className="person2">
              <img
                src="https://bloomtreeadvisors.com/assets/uploads/team/_MG_4417.jpg"
                alt=""
              />
              <h4 className="text-center">Prathik N P</h4>
              <p className="text-center">View Profile</p>
            </div>
            <div className="person3">
              <img
                src="https://bloomtreeadvisors.com/assets/uploads/team/_MG_4473.jpg"
                alt=""
              />
              <h4 className="text-center">Shravan R K</h4>
              <p className="text-center">View Profile</p>
            </div>
            <div className="text-center">
              <button className="btn btn-success">View All -&gt;</button>
            </div>
          </div>
        </div>
      </div>

      <div className="Section5">
      <div className="contact ">
      <div className="contactsec">
        <div className="contactus1">
          <h1>Contact Us</h1>
          <h2 className="mt-4">Call us or Visit us for more queries</h2>
          <h5 className="ms-2 mt-3">
            <svg
              className="two inline-block" 
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              class="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            42,12th Main Rd,4th Block East,KV Layout,Jayanagar,Bengaluru,
            Karnataka-560011
          </h5>
          <h5 className="ms-2 mt-4">
            <svg
              className="two inline-block" 
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-telephone-outbound"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
            </svg>
            +91-8867474079
            +91-9035309350
          </h5>
          <h5 className="ms-2 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-envelope-x"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-4.854-1.354a.5.5 0 0 0 0 .708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708l-.647-.646.647-.646a.5.5 0 0 0-.708-.708l-.646.647-.646-.647a.5.5 0 0 0-.708 0" />
            </svg>
            anantha@bloomtreeadvisors.com
            prathik@bloomtreeadvisors.com
          </h5>
        </div>

        <div className="contactdetails">
          <form action="" className="w-100 ">
            <input type="Name" placeholder="Full Name*" />
            <input type="number" name="" id="" placeholder="Mobile*" />
            <input type="email" name="" id="" placeholder="Email*" />
            <textarea placeholder="Message/Query"></textarea>
            <button className="btn btn-dark mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
      </div>

      <div className="Section6">
        <div className="testimonials">
          <div className="testimonial1 ms-4">
            <h1 className="text-center">Testimonials</h1>
            <div className="testimonialhonest d-flex justify-content-center mt-5 ms-4 ">
              <div className="honest">
                <h2>
                  Honest, Competent and <br /> Always Available
                </h2>
                <p>
                  We have worked with Bloomtree for close to 5 years now, have
                  had them as our Advisors for two of our companies and across
                  multiple functions. What we have seen is that they have been
                  very helpful with whatever issues and questions we have. We
                  appreciate that they have been our advisors in all our
                  businesses and have been with us from our start and have
                  helped us execute complicated local/international transactions
                  while following due process and paperwork.
                </p>

                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  Phalgun - Lightingale Technologies <br />
                  Pvt Ltd.
                </h3>
              </div>

              <div className="young ms-4">
                <h2>Young and Dynamic Team</h2>
                <p>
                  We are pleased with the experience that we enjoyed while
                  working with Bloomtree Advisor. Always met the promised
                  deadlines during annual GST returns & Internal Audit. The team
                  has always been very accessible to help us address & analyze
                  issues that arise during the year.
                </p>
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  Gomathi - Ample Technologies Pvt Ltd
                </h3>
              </div>

              <div className="ownership ms-5 mr-5">
                <h2>Ownership, Second to None</h2>
                <p>
                  We have been working with them since 2020 and they've handled
                  some of our crucial aspects. A young team who has always
                  thought company first in every single aspect. If ownership is
                  what you're looking for, they're the ones to work with. They
                  are tailor-made to work with Founders and startups
                </p>
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  Aprameya Radhakrishna - CEO, Koo App
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
