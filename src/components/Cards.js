function Cards (props)
{
  return(
    <li className="bg-white shadow rounded-lg overflow-hidden">
    <img src={props.img} className="w-full" alt= "" />
    <div className="p-4">
         <h3 className="font-bold">{props.title}</h3>
         <p>{props.txt}</p>
    </div>
</li>
  );
}

export default Cards;