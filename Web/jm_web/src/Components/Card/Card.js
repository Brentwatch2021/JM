function Card(props)
{   

    const handleJobEdit = (event) => {
        // props.ShowModalHook(true);
        // props.SetModalModeHook('Edit');
        // props.setItemIDHook(props.id);
        // props.setTechNameHook(props.technician);
        // props.setActivityHook(props.activity);
    }



    return (
        <div key={props.id}>
            <h1>{props.id}</h1>
            <h1>Technician Name:</h1><h1>{props.technician}</h1>
          <h2>Activity:</h2><h2>{props.activity}</h2>
          <button onClick={handleJobEdit}>Edit</button>
          <button>Delete</button>
        </div>
    );
}

export default Card;