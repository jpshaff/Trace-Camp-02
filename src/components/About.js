import Cards from './Cards'

import ArtsNCrafts from '../images/ArtsNCrafts.jpg'
import AerialSilks from '../images/AerialSilks.jpg'
import Pinball from '../images/Pinball.jpg'
import Mayhem from '../images/Mayhem.jpg'

function About ()
{
  return(
    
  <div className = "bg-gray-100 pt-10">
         <h2 className = "text-center text-xl font-bold text-gray-900">Interests</h2>
         <ul className = "display-grid p-10 gap-10 md:grid md:grid-cols-4" >
          <Cards img = {ArtsNCrafts} title = "Arts'N'Crafts" alt= "" txt = "Including but not limited to acrylic painting, potholdering, and pottery."/>   
          <Cards img = {AerialSilks} title = "Aerial Silks" alt= ""  txt ="Both a full-body workout and a great way to confront your basiphobia!" />
          <Cards img = {Pinball} title = "Gaming" alt= ""  txt = "PC, VR, console, board games, pinball... you name it. " />
          <Cards img = {Mayhem} title = "General Chaos and Mayhem Management" alt= ""  txt = "Keeping the peace with the sassy floofballs while working remotely." />
         </ul>
   </div>
  );
}

export default About;
