const employees = [
    { 
      "id": 1, 
      "email": "employee1@example.com", 
      "password": "123",
      "tasks": [
        {
          "task_title": "Complete report submission",
          "task_description": "Submit the quarterly report to the manager.",
          "task_date": "2025-03-01",
          "task_category": "Reporting",
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
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    { 
      "id": 2, 
      "email": "employee2@example.com", 
      "password": "123",
      "tasks": [
        {
          "task_title": "Code review",
          "task_description": "Review the latest code changes and provide feedback.",
          "task_date": "2025-03-01",
          "task_category": "Development",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    { 
      "id": 3, 
      "email": "employee3@example.com", 
      "password": "123",
      "tasks": [
        {
          "task_title": "Update project documentation",
          "task_description": "Ensure all project documents are up to date.",
          "task_date": "2025-03-01",
          "task_category": "Documentation",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    { 
      "id": 4, 
      "email": "employee4@example.com", 
      "password": "123",
      "tasks": [
        {
          "task_title": "Prepare presentation slides",
          "task_description": "Create slides for the upcoming client presentation.",
          "task_date": "2025-03-03",
          "task_category": "Presentation",
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
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": true
        }
      ]
    },
    { 
      "id": 5, 
      "email": "employee5@example.com", 
      "password": "123",
      "tasks": [
        {
          "task_title": "Customer support call",
          "task_description": "Call the customer regarding the issue reported.",
          "task_date": "2025-03-05",
          "task_category": "Support",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]


const admin = [
    {
        "id": 1, 
        "email": "admin@example.com", 
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employess = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    console.log(employees)
    console.log(admin)
    
}