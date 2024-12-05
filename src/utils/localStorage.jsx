const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Presentation",
        description: "Create a presentation for the upcoming client meeting.",
        date: "2024-12-10",
        category: "Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend the weekly team meeting and provide updates.",
        date: "2024-12-11",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Review Reports",
        description: "Analyze and review the latest financial reports.",
        date: "2024-12-08",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Code Debugging",
        description: "Fix bugs in the user authentication module.",
        date: "2024-12-09",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Documentation",
        description: "Update the API documentation with the latest changes.",
        date: "2024-12-12",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Prepare User Stories",
        description: "Draft user stories for the upcoming sprint.",
        date: "2024-12-07",
        category: "Planning",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Client Follow-Up",
        description: "Reach out to clients to discuss feedback.",
        date: "2024-12-09",
        category: "Communication",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Inventory Check",
        description: "Perform a check on office inventory levels.",
        date: "2024-12-13",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Internal Audit",
        description: "Conduct an internal audit for compliance checks.",
        date: "2024-12-06",
        category: "Audit",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "System Maintenance",
        description: "Run scheduled maintenance on the company servers.",
        date: "2024-12-09",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Training Session",
        description: "Attend the cybersecurity training session.",
        date: "2024-12-10",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Policy Review",
        description: "Review and update company policies as needed.",
        date: "2024-12-08",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Event Planning",
        description: "Organize the annual company party.",
        date: "2024-12-15",
        category: "Events",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Budget Allocation",
        description: "Draft budget plans for the next quarter.",
        date: "2024-12-14",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Customer Feedback Analysis",
        description: "Analyze customer feedback surveys for insights.",
        date: "2024-12-07",
        category: "Research",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const storedEmployees = JSON.parse(localStorage.getItem("employees"));
  const storedAdmin = JSON.parse(localStorage.getItem("admin"));
  return { storedEmployees, storedAdmin };
};
