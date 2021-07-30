function TechSupportMembers (props)
{
  return(
       
       <>   
          <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={props.img} />
        <br />
        <span class="inline-block h-1 w-20 rounded bg-blue-700 mt-6 mb-4"></span>
        <h2 class="text-blue-900 font-bold font-medium title-font tracking-wider text-base">{props.name}</h2>
        <p class="text-gray-500"> {props.blurb}</p>
       </>
   
  );
}

export default TechSupportMembers;