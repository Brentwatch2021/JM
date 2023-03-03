import axios from "axios";
import { useState } from "react";
import './Modal.css'


function Modal(props)
{
    const [itemID,setItemId] = useState(0);
    const [techName,setTechName] = useState('');
    const [activity,setActivity] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleTechnicanNameChange = (event) => {
        const { value } = event.target;
        setTechName(value);
    }

    const handleActivityChange = (event) => {
        const { value } = event.target;
        setActivity(value);
    }

    const handleJobSave = (event) => {
        event.preventDefault();

        switch(props.CurrentModalMode)
        {
            case 'Create':
                axios.post('http://localhost:22537/api/JM_Job',{
                    "Technician": techName,
                    "Activity": activity
                                        })
                  .then(resp => {
                    console.log(`This is returned from json server post: ${resp.data.Technician}`);
                    props.UpdateList();
                  })
                  .catch(err => {
                    console.log(err);
                  })
            break;
            case 'Edit':
                axios.put(`http://localhost:22537/api/JM_Job/${props.ItemID}`,
                {
                  "Technician": props.TechName,
                  "Activity": props.Activity,
                  "id":props.ItemID
                }
              )
              .then(resp => {
                props.UpdateList();
                console.log(resp.data);
              })
              .catch(err => {
                console.log(err);
              });
            break;
            case 'Delete':
                // axios.delete(`http://localhost:22537/api/JM_Job/${idD}`)
                // .then(resp => {
                //   console.log(resp.data);
                //   //props.getJobs();
                // })
                // .catch(err => {
                //   console.log(err);
                // })
            break;
        }

        props.ShowModalHook(false);
    }

    const handleJobCancel = (event) => {
        event.preventDefault();
        props.ShowModalHook(false);
        setTechName('');
        setActivity('');
    }


     let ModalModeToUse;

    const modalModeCreate = <form className={props.ShowModal ? 'FormModal' : 'FormModalOff'}>
                              <label >Technician Name</label>
                              <input id="technicianNameInput" value={techName} name="tName" type="text" onChange={handleTechnicanNameChange}></input>
                              <label >Activity Name</label>
                              <input id="activityInput" value={activity} name="aName" type="text" onChange={handleActivityChange}></input>
                              <button onClick={handleJobSave}>Save</button>
                              <button onClick={handleJobCancel}>Cancel</button>
                            </form>

    const modalModeEdit = <form className={props.ShowModal ? 'FormModal' : 'FormModalOff'}>
                            <label >Technician Name</label>
                            <input id="technicianNameInput" value={props.TechName} name="tName" type="text" onChange={handleTechnicanNameChange}></input>
                            <label >Activity Name</label>
                            <input id="activityInput" value={props.Activity} name="aName" type="text" onChange={handleActivityChange}></input>
                            <button onClick={handleJobSave}>Save</button>
                            <button onClick={handleJobCancel}>Cancel</button>
                           </form>

    // const modalModeDelete = <form className={props.ShowModal ? 'FormModal' : 'FormModalOff'}>
    //                           <label >Are you sure you would like to Delete this Item?</label>
    //                           <button onClick={handleJobSave}>Yes</button>
    //                           <button onClick={handleJobCancel}>No</button>
    //                           </form>

    switch(props.ModalMode)
    {
        case 'Create':
        ModalModeToUse = modalModeCreate;
        break;
        case 'Edit':
        ModalModeToUse = modalModeEdit;
        break;
        case 'Delete':
        //ModalModeToUse = modalModeDelete;
        break;
        default:
        ModalModeToUse = modalModeCreate;
        break;
    }

    ModalModeToUse = modalModeCreate;

    return (
        <>
         {ModalModeToUse} 
        </>
    );
}

export default Modal;