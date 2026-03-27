import React from 'react';
import styles from '../styles/avatar.css'; 
import defaultAvatar from '../images/avatar.svg';

function Avatar({ 
   size = "80px",
   image = defaultAvatar,
   borderColor = "var(--color-grey)",
}) {
   
   const avatarStyle = {
       width: size,
       height: size,
       borderColor: borderColor,
   };

   return (
       <div className="avatar" style={avatarStyle}>
           <img 
               src={image} 
               alt="User Avatar" 
               className="avatar-image" 
           />
       </div>
   );
}

export default Avatar;