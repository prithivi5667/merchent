import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  
  
    
        
      

//console.log(getdata)
    //console.log(props);
    const userData = props.user ? 
    (<div >

    <div>
        <h1>Profile</h1>
        <p><strong>Name:</strong> {props.user.name}</p> 
        <p><strong>Email:</strong> {props.user.email}</p> 
        <p><strong>ID:</strong> {props.user.id}</p> 
        
    </div>
    <div >
  <div className="row">
    <div className="col">
    <Link className="btn btn-primary  links"to="/merchent">Merchent</Link> 
    </div>
    <div className="col">
    <Link className="btn btn-primary links"to="/customer">Customer</Link> 

    </div>
    
  </div>
</div>
    
    </div>
    
    
    
    
    
    
    
    ) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );

}

export default Profile;