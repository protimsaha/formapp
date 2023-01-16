import React, { useState } from 'react';


const FormPage = () => {
    const [name,setName]= useState(':')
    const [sectors,setSectors]= useState(null)
    const [agree,setAgree]= useState(false)

    const handleName =(e)=>{
        setName(e.target.value)
        console.log(e.target.value)
    }

    const handleSector = (e)=>{
        setSectors(e.target.value)
        console.log(e.target.value)
    }
    const handleAgree = (e)=>{
        setAgree(!agree)
        console.log(!agree)
    }

    const handleSave =()=>{     
        if(name === ''){
            setName(false)
        }
        else if(name === ':'){
            setName(false)
        }
        if(sectors === false){
            setSectors(false)
        }
        if(sectors === null){
            setSectors(false)
        }
        if(agree ===false){
            setAgree(null)
        }
    }

    return (
        <div className='lg:w-3/4 w-[90%] h-auto shadow-lg mx-auto rounded-2xl lg:p-20 sm:p-12 p-6 mt-24'>
            <h1 className='text-slate-600 text-2xl font-semibold text-center'>Form</h1>
           
            <div className='mx-auto mt-4'>
            <label htmlFor='name' className='text-slate-600 text-base font-semibold   '>Name:</label>
            <input onChange={(e)=>handleName(e)} className='border-slate-800 border rounded-md mx-auto block h-11 px-5 mt-2  w-full' type='text' placeholder='Name' id='name'/>

           {!name  && <p className='text-red-600 text-semibold text-base mt-2'>*Please fill up the name</p>}

            </div>

            <div className='flex mt-4 items-center '>
                <p className='text-slate-600 text-base font-semibold'>Sectors:</p>
            <select onChange={(e)=>handleSector(e)} className='sm:ml-5 ml-2 border border-slate-800 lg:w-60 w-full h-11'>
                <option>Manufacturing</option>
                <option>Contruction materials</option>
                <option>Electronics and Optics</option>
                <option>Food and Beverage</option>
                <option>Bakery & confectionery products</option>
                <option>Beverage</option>
                <option>Fish & fish products</option>
                <option>Meat & meat products</option>
                <option>Milk & dairy products</option>
                <option>Other</option>
                <option>Sweet & sback food</option>
                <option>Furniture</option>
                <option>Bathroom/sauna</option>
                <option>Bedroom</option>
                <option>Children's room</option>
                <option>Kitchen</option>
                <option>Living room</option>
                <option>Office</option>
                <option>Other (furniture)</option>
                <option>Outdoor</option>
                <option>Project furniture</option>
                <option>Machinery</option>
                <option>Machinery components</option>
                <option>Machinery equipments/tools</option>
                <option>Manufracture of Machinery</option>
                <option>Maritime</option>
                <option>Aluminium and steel workboats</option>
                <option>Boat/Yacht building</option>
                <option>Ship repair and conversion</option>
                <option>Metal structures</option>
                <option>Other</option>
                <option>Reoair and maintanence service</option>
                <option>Metalworking</option>
                <option>Construction of metal structures</option>
                <option>Houses and buildings</option>
                <option>Metal products</option>
                <option>Metal works</option>
                <option>CNC-machining</option>
                <option>Forgings, Fasteners</option>
                <option>Gas, Plasma, laser cutting</option>
                <option>MIG, TIG, Aluminium welding</option>
                <option>Plastic and Rubber</option>
                <option>Packeging</option>
                <option>Plastic goods</option>
                <option>Plastic welding and processing </option>
                <option>Plastic profiles</option>
                <option>Printing</option>
                <option>Advertising</option>
                <option>Books/periodicals printing</option>
                <option>Labeling and packaging printing</option>
                <option>Textile and Clothing</option>
                <option>Clothing</option>
                <option>Textile</option>
                <option>Wood</option>
                <option>Other(Wood)</option>
                <option>Wooden building materials</option>
                <option>Wooden houses</option>
                <option>Other</option>
                <option>Creative industries</option>
                <option>Energy technology</option>
                <option>Environment</option>
                <option>Service</option>
                <option>Business Services</option>
                <option>Engineering</option>
                <option>Information Technology and Telecommunications</option>
                <option>Data processing, web portals, E-marketing</option>
                <option>Programming, consultancy</option>
                <option>Software, Hardware</option>
                <option>Telecommunications</option>
                <option>Tourism</option>
                <option>Translation services</option>
                <option>Transport and Logistics</option>
                <option>Air</option>
                <option>Rail</option>
                <option>Road</option>
                <option>Water</option>
            </select>


            </div>
         {(!sectors && sectors !=null) &&   <p className='text-red-600 text-semibold text-base mt-2'>*Please select a sector</p>}

            <div className='mt-4 flex items-center gap-2'>
                <input role='button' onChange={(e)=>handleAgree(e)} type='checkbox' id='agree'/>
                <label role='button' className='text-base text-slate-800 font-semibold' htmlFor='agree'>Agree to terms</label>
                    

            </div>
                { agree===null && <p className='text-red-600 text-semibold text-base mt-2'>*You need to agree the terms and conditions</p>}

            <button onClick={handleSave} className='px-6 py-2 mt-4 border border-slate-800 font-bold rounded hover:bg-slate-800 hover:text-white'>Save</button>

        </div>
    );
};

export default FormPage;