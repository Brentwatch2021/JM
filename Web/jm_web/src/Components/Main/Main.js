import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

function Main(props)
{
    const [jobs,setJobs] = useState([]);


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
    },[])

    // SetItemIDHook={setID} SetTechNameHook={setTechName} SetActivityHook={setActivity}
    return (
        <div>
            {/* Jobs List */}
            {jobs.map(job => <Card SetModalModeHook={props.SetModalMode} id={job.id} technician={job.technician} activity={job.activity} setItemIDHook={props.SetItemIDHook} setTechNameHook={props.SetTechNameHook} setActivityHook={props.SetActivityHook} ShowModalHook={props.ShowMHook}/>)}
        </div>
    );
}

export default Main;