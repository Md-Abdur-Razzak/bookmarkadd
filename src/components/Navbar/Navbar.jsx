import img from "../../assets/m.jpeg"

function Navbar() {
    return (
        <div className="flex justify-between items-center md:p-4">
           <h1 className="font-bold text-3xl">Bangladesg News Word </h1>
           <img width={'50'} className="runded-full rounded-full" src={img} alt="" />
        </div>
    );
}

export default Navbar;