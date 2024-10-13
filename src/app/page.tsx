
 
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-orange-500 h-12">
      
   
    
      <nav  className="text-white flex justify-between items-center" >
        <h1 className="text-xl m-2 cursor-pointer">Home Page</h1>
      
        <ul className="flex gap-4 mr-4 cursor-pointer ">
          <li>
            <Link  className="hover:text-blue-300" href="/">HomePage</Link>
          </li>
          <li>
            <Link  className="hover:text-blue-300" href="/about">About Us</Link>
          </li>
          {/* Here we used Target tag ( which is open in next tab)*/}
          <li>
            <Link  className="hover:text-blue-700" href="/contact " target="_blank">
              Contact us
            </Link>
          </li>
          <li>
            <Link  className="hover:text-blue-600" href="/services">Services</Link>
          </li>
          
        </ul>
      </nav>
     
    
    
 
    </div>
        
 

  );
}
