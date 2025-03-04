const employees = [
  { 
    "id": 1, 
    "first_name": "John",
    "email": "employee1@example.com", 
    "password": "123",
    "tasks": [
      {
        "task_title": "Complete report submission",
        "task_description": "Submit the quarterly report to the manager.",
        "task_date": "2025-03-01",
        "task_category": "Reporting",
        "priority": "High",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Attend team meeting",
        "task_description": "Join the weekly team meeting at 3 PM.",
        "task_date": "2025-03-02",
        "task_category": "Meetings",
        "priority": "Medium",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "task_numbers": {
      "active": 1,
      "new_task": 1,
      "completed": 0,
      "failed": 0
    }
  },
  { 
    "id": 2, 
    "first_name": "Alice",
    "email": "employee2@example.com", 
    "password": "123",
    "tasks": [
      {
        "task_title": "Code review",
        "task_description": "Review the latest code changes and provide feedback.",
        "task_date": "2025-03-01",
        "task_category": "Development",
        "priority": "High",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      }
    ],
    "task_numbers": {
      "active": 1,
      "new_task": 0,
      "completed": 0,
      "failed": 0
    }
  },
  { 
    "id": 3, 
    "first_name": "Michael",
    "email": "employee3@example.com", 
    "password": "123",
    "tasks": [
      {
        "task_title": "Update project documentation",
        "task_description": "Ensure all project documents are up to date.",
        "task_date": "2025-03-01",
        "task_category": "Documentation",
        "priority": "Low",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      }
    ],
    "task_numbers": {
      "active": 1,
      "new_task": 0,
      "completed": 0,
      "failed": 0
    }
  },
  { 
    "id": 4, 
    "first_name": "Sarah",
    "email": "employee4@example.com", 
    "password": "123",
    "tasks": [
      {
        "task_title": "Prepare presentation slides",
        "task_description": "Create slides for the upcoming client presentation.",
        "task_date": "2025-03-03",
        "task_category": "Presentation",
        "priority": "Medium",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Fix bug in payment module",
        "task_description": "Resolve the checkout process bug in the payment system.",
        "task_date": "2025-03-04",
        "task_category": "Development",
        "priority": "High",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ],
    "task_numbers": {
      "active": 1,
      "new_task": 0,
      "completed": 0,
      "failed": 1
    }
  },
  { 
    "id": 5, 
    "first_name": "David",
    "email": "employee5@example.com", 
    "password": "123",
    "tasks": [
      {
        "task_title": "Customer support call",
        "task_description": "Call the customer regarding the issue reported.",
        "task_date": "2025-03-05",
        "task_category": "Support",
        "priority": "High",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      }
    ],
    "task_numbers": {
      "active": 1,
      "new_task": 0,
      "completed": 0,
      "failed": 0
    }
  }
];

const admin = [
  {
      "id": 1, 
      "first_name": "Emma",
      "email": "admin@example.com", 
      "password": "123"
  }
];



export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    
    return {employees, admin};
}