

function Bookmark({item,deuratin}) {
    console.log(item);
    return (
        <div className="bg-[#e7dfdf] w-full rounded-md  ">
            <h1 className="text-3xl px-5 font-mono">Spent time on read : {deuratin}min</h1>
            <h1 className="text-3xl px-5 font-mono border-b-4">totall Book mark : {item.length}</h1>
           <div >
           {
                item.map(booking=><div key={booking.id} className="bg-[#f8f5f5] rounded-lg p-9  m-7">{booking.title}</div>)
            }
           </div>
        </div>
    );
}

export default Bookmark;