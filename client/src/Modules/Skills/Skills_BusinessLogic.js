import { hideLoader, showLoader } from "../../Redux/loader";
import { fetchData } from "../../Services/portfolioservice";

export class Skills_BusinessLogic {
  // Handle form input changes
  handleInputChange(objContext, field, value) {
    objContext.dispatch({
      type: "UPDATE_FIELD",
      field,
      value,
    });
  }

  // Group skills by category
  groupSkills(skills) {
    return skills.reduce((acc, skill) => {
      acc[skill.category] = acc[skill.category] || [];
      acc[skill.category].push(skill);
      return acc;
    }, {});
  }

  // Fetch skills data from mock or API
  async fetchSkillsData(objContext) {
    try {
      objContext.reduxDispatch(showLoader());

      const useMockData = process.env.NODE_ENV !== "production";

      const skills = useMockData
        ? this.getMockSkills()
        : await fetchData({
            endpoint:
              "https://myportifolioapi.azurewebsites.net/api/Skills/GetData",
          });

      const groupedSkills = this.groupSkills(skills);

      objContext.dispatch({
        type: "SET_STATE",
        payload: {
          skills,
          groupedSkills,
        },
      });
    } catch (error) {
      console.error("Failed to fetch skills data:", error);
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

  // Mock skill data
  getMockSkills() {
    return [
      { id: 6, skill: "Java", category: "Languages" },
      { id: 5, skill: "Go", category: "Languages" },
      { id: 7, skill: "C++", category: "Languages" },
      { id: 8, skill: "Python", category: "Languages" },
      { id: 9, skill: "JavaScript", category: "Languages" },
      { id: 10, skill: "TypeScript", category: "Languages" },
      { id: 11, skill: "Microsoft SQL Server", category: "Languages" },
      { id: 12, skill: "HTML/CSS", category: "Languages" },

      // ML
      { id: 13, skill: "Scikit-learn", category: "Machine Learning" },
      { id: 14, skill: "TensorFlow", category: "Machine Learning" },
      { id: 15, skill: "PyTorch", category: "Machine Learning" },
      { id: 16, skill: "Pandas", category: "Machine Learning" },
      { id: 17, skill: "NumPy", category: "Machine Learning" },
      { id: 18, skill: "Keras", category: "Machine Learning" },
      { id: 19, skill: "Matplotlib", category: "Machine Learning" },
      { id: 20, skill: "Seaborn", category: "Machine Learning" },
      { id: 21, skill: "Feature Engineering", category: "Machine Learning" },
      { id: 22, skill: "Model Optimization", category: "Machine Learning" },
      { id: 23, skill: "Data Visualization", category: "Machine Learning" },

      // Frameworks
      { id: 24, skill: "React", category: "Frameworks" },
      { id: 25, skill: ".Net core", category: "Frameworks" },
      { id: 26, skill: "Dapper", category: "Frameworks" },
      { id: 27, skill: "Jest", category: "Frameworks" },
      { id: 28, skill: "Tailwind-CSS", category: "Frameworks" },

      // Dev Tools
      { id: 29, skill: "Git", category: "Developer Tools" },
      { id: 30, skill: "VS Code", category: "Developer Tools" },
      { id: 31, skill: "Visual Studio", category: "Developer Tools" },

      // Cloud/DevOps
      { id: 32, skill: "Microsoft Azure", category: "Cloud/DevOps" },
      { id: 33, skill: "CI/CD", category: "Cloud/DevOps" },
      { id: 34, skill: "Cloudflare", category: "Cloud/DevOps" },
      { id: 35, skill: "Docker", category: "Cloud/DevOps" },

      // Other Skills
      { id: 36, skill: "Data structures and Algorithms", category: "Other Skills" },
      { id: 37, skill: "Elastic Search", category: "Other Skills" },
      { id: 38, skill: "Web API", category: "Other Skills" },
      { id: 39, skill: "Agile Methodologies", category: "Other Skills" },
      { id: 40, skill: "Problem Solving Skills", category: "Other Skills" },
    ];
  }
}