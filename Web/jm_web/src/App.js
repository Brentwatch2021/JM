import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'

function App() {

  const [techName,setTechName] = useState('');
  const [activity,setActivity] = useState('');
  const [idD,setID] = useState(0);
  const [jobs,setJobs] = useState([]);
  const [showModal,setShowingModal] = useState(false);
  const [ModalMode,setModalMode] = useState('Create');
  


  const getJobs = () => {
    axios.get('http://localhost:22537/api/JM_Job')
    .then(resp => {
        console.log(resp.data);
      setJobs(resp.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getJobs();
  },[]);


  const handlejobCreate = (e) => {
    // Access json server API to create job
//     axios.post('http://localhost:3000/jobs',{
//       "Technician": techName,
//       "Activity": activity
//  })
//     .then(resp => {
//       console.log(`This is returned from json server post: ${resp.data.Technician}`);
//     })
//     .catch(err => {
//       console.log(err);
//     })
    //alert(`The oke that done the job is: ${techName} and completed the ${activity}`);

    setShowingModal(true);
    setActivity('');
    setTechName('');
    setID('');
    setModalMode('Create');
  }

  const handleJobSave = e => {
    e.preventDefault();

    switch(ModalMode)
    {
      case 'Create':
        axios.post('http://localhost:22537/api/JM_Job',{
          "Technician": techName,
          "Activity": activity
                              })
        .then(resp => {
          console.log(`This is returned from json server post: ${resp.data.Technician}`);
          getJobs();
        })
        .catch(err => {
          console.log(err);
        })
      break;
      case 'Edit':
        axios.put(`http://localhost:22537/api/JM_Job/${idD}`,
          {
            "Technician": techName,
            "Activity": activity,
            "id":1
          }
        )
        .then(resp => {
          getJobs();
          console.log(resp.data);
        })
        .catch(err => {
          console.log(err);
        });
      break;
      case 'Delete':
        axios.delete(`http://localhost:22537/api/JM_Job/${idD}`)
        .then(resp => {
          console.log(resp.data);
          getJobs();
        })
        .catch(err => {
          console.log(err);
        })
      break;
    }
    

    setShowingModal(false);
  }

  const handleJobCancel = e => {
    e.preventDefault();
    // clear fields TODO
    setShowingModal(false);
  }


  const handleTechnicanNameChange = e => {
    const { value } = e.target;
    setTechName(value);
  }

  const handleActivityChange = e => {
    const { value } = e.target;
    setActivity(value);
  }

  const handleJobEdit = (e) => {
    console.log(`Tech Name: ${e.target.parentNode.children[2].innerText}`);
    console.log(`Activity: ${e.target.parentNode.children[4].innerText}`);
    setTechName(e.target.parentNode.children[2].innerText);
    setActivity(e.target.parentNode.children[4].innerText);
    
    // Bug causing no show on modal fix
    setID(e.target.parentNode.children[0].innerText);
    setModalMode('Edit');


    setShowingModal(true);

  }

  const handleJobDelete = (e) => {
    setID(e.target.parentNode.children[0].innerText);
    setModalMode('Delete');
    setShowingModal(true);
  }



  let ModalModeToUse;

  const modalModeCreate = <form className={showModal ? 'FormModal' : 'FormModalOff'}>
                              <label >Technician Name</label>
                              <input id="technicianNameInput" value={techName} name="tName" type="text" onChange={handleTechnicanNameChange}></input>
                              <label >Activity Name</label>
                              <input id="activityInput" value={activity} name="aName" type="text" onChange={handleActivityChange}></input>
                              <button onClick={handleJobSave}>Save</button>
                              <button onClick={handleJobCancel}>Cancel</button>
                            </form>

  const modalModeEdit = <form className={showModal ? 'FormModal' : 'FormModalOff'}>
                          <label >Technician Name</label>
                          <input id="technicianNameInput" value={techName} name="tName" type="text" onChange={handleTechnicanNameChange}></input>
                          <label >Activity Name</label>
                          <input id="activityInput" value={activity} name="aName" type="text" onChange={handleActivityChange}></input>
                          <button onClick={handleJobSave}>Save</button>
                          <button onClick={handleJobCancel}>Cancel</button>
                        </form>

  const modalModeDelete = <form className={showModal ? 'FormModal' : 'FormModalOff'}>
                              <label >Are you sure you would like to Delete this Item?</label>
                              <button onClick={handleJobSave}>Yes</button>
                              <button onClick={handleJobCancel}>No</button>
                              </form>
  
  switch(ModalMode)
  {
    case 'Create':
    ModalModeToUse = modalModeCreate;
    break;
    case 'Edit':
    ModalModeToUse = modalModeEdit;
    break;
    case 'Delete':
    ModalModeToUse = modalModeDelete;
    break;
    ModalModeToUse = modalModeCreate;
    default:

    break;
  }


  return (
    <>
    <div className="App" >
      <header className="App-header">
        <p>Construction App :)</p>
        <button onClick={handlejobCreate}>Create Job</button>
      </header>
      <div>
        {jobs.map(job => <div>
          <h1>{job.id}</h1>
          <h1>Technician Name:</h1><h1>{job.technician}</h1>
          <h2>Activity: {job.Activity}</h2><h2>{job.activity}</h2>
          <button onClick={handleJobEdit}>Edit</button>
          <button onClick={handleJobDelete}>Delete</button>
        </div>)}
      </div>
    </div>
    {ModalModeToUse}
  </>
  );
}

export default App;
