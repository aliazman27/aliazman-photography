import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className='blog-ans'>
                <h3>Difference between `authorization` and `authentication`</h3>
                <p>Authentication is the process of verifying your identity by confirming our credentials, 
such as our User, Name/User ID and password. For this, we employ the OpenID Connect protocol.
 By clicking the My Account option in the top right corner, we  may manage our login.

Authorization, on the other hand, happens once cloudHQ has properly confirmed your identity.
 Then you may grant cloudHQ access to your resources, such as files and emails. 
The OAuth2 protocol is used to manage this. Simply put, 
authorisation allows our system to access your data stored in the cloud.
 As a result, you must provide admin@ access to Box and Google Drive. 
Under the Cloud Accounts page, you may authorize users.</p>
            </div>
        </div>
    );
};

export default Blogs;