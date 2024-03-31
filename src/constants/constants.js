export const projects = [
   {
      title: "E-Commerce WebAPP",
      description:
         `This is the E-Commerce webapp, where users come and buy the product and can do the payment by RozorPay. Noteworthy Features:-`,
      featuresList: [
            `1. SignUp and SignIn Features using OAUTH service.`,
            `2. Listing Of all the products in both Grid and List view Manner.`,
            `3. Filtering out the products based on the alphabet, company name, color, price and category.`,
            `4. Each product has ratings, details of the product, price, shipping-fee, no of stocks.`,
            `5. Payment through RAZORPAY which have all types of payment method.`,
         ],
      image: "/images/ECommerce.png",
      tags: ["React", "Redux", "NodeJs", "MongoDB"],
      source: "https://github.com/khanempire/ECommerce_genetal-store",
      visit: "https://fastservice.netlify.app/",
      id: 1,
   },
   {
      title: "ManPower Services",
      description:"One-stop solution for all the manpower needs related to AC services, plumbing, carpentry, painting, and more.",
      featuresList:[
         `1. Handpicked professionals, Wide Range of Services.`,
       `2. Convenience`,
       `3. Quality Assurance`,
       `4. Transparent Pricing`, 
       `5. Prompt Response`,
       `6. Experience hassle-free`,
       `7. Reliable manpower services.`,
      ],
      image: "/images/manpower.png",
      tags: ["React", "Redux", "NodeJs", "MongoDB","RazorPay"],
      source: "https://github.com/khanempire/manpowerbiz",
      visit: "https://manpowerbiz.in/",
      id: 1,
   },
   {
      title: "Github Users Search App",
      description:
         "This is the webApp where users come and see anyone's github repository related information in a chart visualization manner. Noteworthy Features:-",
      featuresList:[
            `1. SignUp and SignIn Features using OAUTH service.`,
            `2. Searching the github users by their username in the search box.`,
            `3.  Display the user’s data along with most used languages, stars per language, the most popular language with Chart Visualization.`
      ],
      image: "/images/github_search_users.png",
      tags: ["React", "JavaScript", "HTML", "CSS", "ChartJs"],
      source: "https://github.com/khanempire/github-search-user",
      visit: "https://find-githubuser.netlify.app/login",
      id: 2,
   },
   {
      title: "Blog WebApp",
      description:
         "This is blog App, where users can come and read about the latest technologies. Noteworthy Features:-",
      featuresList:[
         `1. Displaying the recent articles in the homepage upon clicking to see the details of that article.`,
         `2. Category-wise listing of articles.`,
         `3. Storing all the data in GraphCMS database.`,
         `4. Separate list for recent articles and related post.`,
         `5.  Fetching all the required data from GraphCMS using GraphQL.`
      ],
      image: "/images/blog_webapp.png",
      tags: ["React", "NextJs", "CSS", "GraphQL", "GraphCMS"],
      source: "https://github.com/khanempire/devEasy",
      visit: "https://dev-easy.vercel.app/",
      id: 3,
   },
];

export const TimeLineData = [
   { year: 2016, text: "Started my Graduation Journey" },
   { year: 2020, text: "Completed the Graduation" },
   { year: 2020, text: "Started working as a developer" },
   { year: 2021, text: "Started my own Youtube channel and blog" },
   { year: 2023, text: "Started my Freelance Journey" },
];

export const experience = [
   {
      title: "ZF Group",
      description:
         `Developed a scalable server-less notification center, which played a pivotal role in streamlining communication within applications, ensuring users were promptly informed about crucial events and updates. Noteworthy Features Includes:-`,
         featuresList:[
            `1. Led the design and development of both high and low-level architecture,
            resulting in a 20% improvement in system efficiency.`,
            `2. Implemented fast and secure RESTful API using AWS API Gateway, achieving a
            25% reduction in response time.`,
            `3. Designed intuitive UI, boosting user satisfaction by 30% and managing
            notifications efficiently.`,
            `4. Built a scalable email service for event notification.`,
            `5. Optimized MongoDB database queries, leading to a 40% reduction in query
            execution time.`
         ],
         image: "/images/ZF_Group.jpg",
      tags: ["React", "Redux", "NodeJs", "MongoDB", "AWS", "Terraform", "Terragrunt", "Helm", "Material-UI", "Datadog", "Unleash"],
      // source: "https://github.com/khanempire/ECommerce_genetal-store",
      // visit: "https://fastservice.netlify.app/",
      id: 1,
   },
   {
      title: "Accenture",
      description:
         `Worked as a full-stack developer to develop a one-stop marketplace for infrastructure
         provisioning on different clouds providers. NoteWorthy Features Includes:- `,
         featuresList :[
            `1. Improved AWS Cloud integration, with reliability and scalability by 30%
            through UI component creation to infrastructure setup.`,
            `2. Crafted NGINX-integrated maintenance page, slashing downtime issues by
            15% and enhancing user experience.`,
            `3. Built infra-specific page to load cloud-specific details with Vanilla JS, boosting
            UI responsiveness by 25% and user engagement.`,
            `4. Developed live-order status page, enhancing user satisfaction and tracking
            efficiency by 40%`
         ],
      image: "/images/accenture.jpg",
      tags: ["React", "Redux", "Python", "MongoDB", "AWS", "Docker", "Kubernetes", "Terraform", "HTML5", "CSS3"],
      // source: "https://github.com/khanempire/manpowerbiz",
      // visit: "https://manpowerbiz.in/",
      id: 2,
   },
];
