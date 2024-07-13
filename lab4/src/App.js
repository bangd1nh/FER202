import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  applicants: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCode: "12345"
      },
      education: [
        {
          degree: "B.Sc. Computer Science",
          institution: "University of Example",
          yearOfGraduation: 2020
        }
      ],
      workExperience: [
        {
          company: "Tech Solutions Inc.",
          position: "Software Developer",
          startDate: "2021-01-15",
          endDate: "2023-06-30",
          responsibilities: [
            "Developed and maintained web applications",
            "Collaborated with cross-functional teams to define project requirements"
          ]
        }
      ],
      skills: ["JavaScript", "React", "Node.js", "SQL"],
    },
    {
      id: 2,
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily.johnson@example.com",
      phone: "+1234567892",
      address: {
        street: "456 Elm St",
        city: "Othertown",
        state: "TX",
        zipCode: "67890"
      },
      education: [
        {
          degree: "M.Sc. Information Technology",
          institution: "Institute of Example",
          yearOfGraduation: 2018
        }
      ],
      workExperience: [
        {
          company: "Innovative Solutions Ltd.",
          position: "IT Consultant",
          startDate: "2019-03-01",
          endDate: "2022-12-31",
          responsibilities: [
            "Provided IT consulting services to clients",
            "Implemented software solutions and managed projects"
          ]
        }
      ],
      skills: ["Python", "Django", "Machine Learning", "Project Management"],
    }
  ],
  form: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    degree: "",
    institution: "",
    yearOfGraduation: "",
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
    skills: ""
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_APPLICANT':
      return {
        ...state,
        applicants: [...state.applicants, action.payload],
        form: initialState.form
      };
    case 'UPDATE_APPLICANT':
      return {
        ...state,
        applicants: state.applicants.map(applicant => applicant.id === action.payload.id ? action.payload : applicant),
        form: initialState.form
      };
    case 'DELETE_APPLICANT':
      return {
        ...state,
        applicants: state.applicants.filter(applicant => applicant.id !== action.payload)
      };
    case 'SET_FORM':
      return {
        ...state,
        form: { ...state.form, ...action.payload }
      };
    case 'RESET_FORM':
      return {
        ...state,
        form: initialState.form
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch({ type: 'SET_FORM', payload: { [id]: value } });
  };

  const handleSubmit = () => {
    const newApplicant = {
      ...state.form,
      id: state.form.id ? state.form.id : Date.now(),
      address: { street: state.form.street, city: state.form.city, state: state.form.state, zipCode: state.form.zipCode },
      education: [{ degree: state.form.degree, institution: state.form.institution, yearOfGraduation: state.form.yearOfGraduation }],
      workExperience: [{ company: state.form.company, position: state.form.position, startDate: state.form.startDate, endDate: state.form.endDate, responsibilities: [state.form.responsibilities] }],
      skills: state.form.skills.split(',')
    };
    if (state.form.id) {
      dispatch({ type: 'UPDATE_APPLICANT', payload: newApplicant });
    } else {
      dispatch({ type: 'ADD_APPLICANT', payload: newApplicant });
    }
    dispatch({ type: 'RESET_FORM' });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_APPLICANT', payload: id });
  };

  const handleEdit = (applicant) => {
    dispatch({
      type: 'SET_FORM', payload: {
        ...applicant,
        street: applicant.address.street,
        city: applicant.address.city,
        state: applicant.address.state,
        zipCode: applicant.address.zipCode,
        degree: applicant.education[0].degree,
        institution: applicant.education[0].institution,
        yearOfGraduation: applicant.education[0].yearOfGraduation,
        company: applicant.workExperience[0].company,
        position: applicant.workExperience[0].position,
        startDate: applicant.workExperience[0].startDate,
        endDate: applicant.workExperience[0].endDate,
        responsibilities: applicant.workExperience[0].responsibilities.join(', '),
        skills: applicant.skills.join(', ')
      }
    });
  };

  return (
    <div className="container mt-4">
      <h2>Applicant Form</h2>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" id="firstName" className="form-control" value={state.form.firstName} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" id="lastName" className="form-control" value={state.form.lastName} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" className="form-control" value={state.form.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="text" id="phone" className="form-control" value={state.form.phone} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="street" className="form-label">Street</label>
        <input type="text" id="street" className="form-control" value={state.form.street} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <input type="text" id="city" className="form-control" value={state.form.city} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="form-label">State</label>
        <input type="text" id="state" className="form-control" value={state.form.state} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="zipCode" className="form-label">Zip Code</label>
        <input type="text" id="zipCode" className="form-control" value={state.form.zipCode} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="degree" className="form-label">Degree</label>
        <input type="text" id="degree" className="form-control" value={state.form.degree} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="institution" className="form-label">Institution</label>
        <input type="text" id="institution" className="form-control" value={state.form.institution} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="yearOfGraduation" className="form-label">Year of Graduation</label>
        <input type="text" id="yearOfGraduation" className="form-control" value={state.form.yearOfGraduation} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="company" className="form-label">Company</label>
        <input type="text" id="company" className="form-control" value={state.form.company} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="position" className="form-label">Position</label>
        <input type="text" id="position" className="form-control" value={state.form.position} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="startDate" className="form-label">Start Date</label>
        <input type="date" id="startDate" className="form-control" value={state.form.startDate} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="endDate" className="form-label">End Date</label>
        <input type="date" id="endDate" className="form-control" value={state.form.endDate} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="responsibilities" className="form-label">Responsibilities</label>
        <input type="text" id="responsibilities" className="form-control" value={state.form.responsibilities} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="skills" className="form-label">Skills</label>
        <input type="text" id="skills" className="form-control" value={state.form.skills} onChange={handleChange} />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

      <h2 className="mt-4">Applicantss</h2>
      <ul className="list-group">
        {state.applicants.map(applicant => (
          <li key={applicant.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{applicant.firstName} {applicant.lastName}</h5>
              <p>Email: {applicant.email}</p>
              <p>Phone: {applicant.phone}</p>
              <p>Address: {applicant.address.street}, {applicant.address.city}, {applicant.address.state} {applicant.address.zipCode}</p>
              <h6>Education</h6>
              {applicant.education.map((edu, index) => (
                <p key={index}>{edu.degree}, {edu.institution}, {edu.yearOfGraduation}</p>
              ))}
              <h6>Work Experience</h6>
              {applicant.workExperience.map((work, index) => (
                <div key={index}>
                  <p>Position: {work.position}, Company: {work.company},Work time {work.startDate} to {work.endDate}</p>

                  <h6>Resposibility:</h6> {work.responsibilities.map((resp, i) => <div key={i}>{resp}</div>)}

                </div>
              ))}
              <h6 style={{ marginTop: "10px" }}>Skills</h6>
              <p>{applicant.skills.join(', ')}</p>
            </div>
            <div>
              <button className="btn btn-danger me-2" onClick={() => handleDelete(applicant.id)}>Delete</button>
              <button className="btn btn-secondary" onClick={() => handleEdit(applicant)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
