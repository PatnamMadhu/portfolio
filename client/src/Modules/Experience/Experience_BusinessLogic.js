import { fetchData } from "../../Services/portfolioservice";
import { hideLoader, showLoader } from "../../Redux/loader";

export class Experience_BusinessLogic {
  // Handle form input changes
  handleInputChange(objContext, field, value) {
    objContext.dispatch({
      type: "UPDATE_FIELD",
      field,
      value,
    });
  }

  // Fetch experience data from the API
  async fetchExperienceData(objContext) {
    try {
      objContext.reduxDispatch(showLoader());
      // const experiences = await fetchData({
      //   endpoint:
      //     "https://myportifolioapi.azurewebsites.net/api/Experience/GetData",
      // });
      const experiences = [
        {
  id: 1,
  jobTitle: "Software Engineer Intern",
  company: "ChannelCore",
  logo: "https://channelcore.io/wp-content/uploads/2024/11/ccgear_small.png", // Replace with actual logo URL if available
  responsibilities: [
    "At ChannelCore, I built a cross-platform React Native and ReactJS platform enabling direct collaboration between creators and brands. I integrated AWS Lambda, DynamoDB, Cognito, Node.js, and Python backends with MongoDB for secure, scalable mobile experiences. I also migrated infrastructure from Replit to AWS, implemented S3 for secure video storage with IAM-based access, and optimized upload, streaming, and deletion workflows. Additionally, I diagnosed and resolved performance issues, improving app load times by 30%."
  ],
  fromDate: "05/2025",
  toDate: "Present",
},
{
  id: 2,
  jobTitle: "Software Engineer Intern",
  company: "AI Republic",
  logo: "https://www.airepublic.com/static/img/logo/logo_w_no_words_sm.png", // Replace with actual logo URL if available
  responsibilities: [
    "At AI Republic, I designed and deployed serverless backend APIs using Python (Flask) on AWS Lambda, integrating DynamoDB and Cognito for secure, real-time mobile data processing. I developed React Native components connected to AI-powered APIs for dynamic dashboards and built event-driven microservices using AWS SQS, SNS, and DynamoDB to handle large-scale data flows. I also explored GitHub Actions to automate CI/CD workflows for PR checks and production releases."
  ],
  fromDate: "11/2024",
  toDate: "02/2025",
},
        {
          id: 3,
          jobTitle: "Senior Software Engineer",
          company: "Reward360 Global Services",
          logo: "https://cdn.prod.website-files.com/5f9d4c59612fe22970ee1a18/5f9d505999175cda5673889b_R360_unit.svg",
          responsibilities: [
            "At Reward360, I worked on modernizing HDFC SmartBuy’s  e-commerce rewards platform by moving from a monolithic system to a microservices architecture with Spring Boot and Java. I developed full-stack features using Angular and PHP, and built out complex workflows with MySQL and MongoDB. I also automated cloud infrastructure on AWS and GCP with Terraform, and set up CI/CD pipelines using Azure DevOps and Cloud Build."
          ],
          fromDate: "08/2023",
          toDate: "07/2024",
        },
        {
          id: 4,
          jobTitle: "Software Engineer II",
          company: " Brillio (Client: Verizon)",
          logo: "https://www.brillio.com/wp-content/themes/brillio/assets/images/logo/Brillio_Secondary-Logo.svg",
          responsibilities: [
            " Worked on Verizon’s 5G network projects, developing backend services with Spring Boot, MySQL, MongoDB, and"+
 " Redis for data integration. Built and maintained RESTful APIs with proper validation and error handling, and"+
 " contributed to Node.js services and JavaScript front-end components. Supported a scalable microservices architecture"+
 " within an Agile Scrum team, and wrote unit tests with JUnit and Mockito to keep code quality high."

          ],
          fromDate: "04/2022",
          toDate: "07/2023",
        },
        {
          id: 3,
          jobTitle: "Software Engineer I",
          company: "Capgemini (Client: IKEA)",
          logo: "https://www.capgemini.com/us-en/wp-content/themes/capgemini2020/assets/images/logo.svg",
          responsibilities: [
            "Worked on IKEA’s point-of-sale systems, developing responsive web apps with Angular and Spring Boot. Set up "+
 "CI/CD with Jenkins and Azure DevOps, and managed cloud resources using Terraform. Improved security with JWT "+
 "authentication and refactored legacy code for easier maintenance. Contributed to Agile sprints with a focus on quality "+
 "and integration testing."
          ],
          fromDate: "08/2020",
          toDate: "04/2022",
        },
                {
          id: 5,
          jobTitle: "Software Engineer Intern",
          company: "Capgemini",
          logo: "https://www.capgemini.com/us-en/wp-content/themes/capgemini2020/assets/images/logo.svg",
          responsibilities: [
"During my internship, I focused on Java Enterprise Edition (JEE), where I built scalable enterprise-level applications using JSP, Servlets, and JDBC. I developed and tested backend components—including data access layers, service classes, and utility modules—using Java and SQL, and implemented CRUD operations while integrating front-end forms with backend logic to support dynamic content rendering. In addition, I contributed to internal tools by identifying and fixing bugs, enhancing feature functionality, and optimizing SQL queries for improved performance."
          ],
          fromDate: "01/2020",
          toDate: "05/2020",
        },
      ];

      objContext.dispatch({
        type: "SET_STATE",
        payload: {
          experiences: experiences,
        },
      });
    } catch (error) {
      console.error("Failed to fetch experience data:", error);
    } finally {
      setTimeout(() => {
        objContext.reduxDispatch(hideLoader());
        objContext.dispatch({
          type: "SET_STATE",
          payload: {
            isDataLoaded: true,
          },
        });
      }, 500);
    }
  }
}
