import TechSupportMembers from './Techsupportmembers'

import JennyBrown1 from '../images/JennyBrown1.jpg'
import Ryder1 from '../images/Ryder1.jpeg'
import Rhys1 from '../images/Rhys1.jpg'

function TechSupport ()
{
  return(
    <div class="container px-5 py-24 mx-auto">
    <div class="grid grid-cols-3">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
     <TechSupportMembers img = {JennyBrown1} name = "Jenny Brown" blurb = "Woodstock, GA"/>
     <TechSupportMembers img = {Ryder1} name = "Ryder" blurb = "Moonlights as furry alarm clock"/>
     <TechSupportMembers img = {Rhys1} name = "Rhys" blurb = "Menace to toes everywhere"/>

     </div>
      </div>
    </div>
  </div>
  );
}

export default TechSupport;