import jaipur from '../../assets/jaipur.jpeg';
import manali from '../../assets/manali.jpg';
import goa from '../../assets/goa.jpeg';
import TripTicket from '../tripTicket/TripTicket';
import './TripBoard.css';

export default function TripBoard(){
    const trips = [
        {
            id: '1',
            date: new Date('2025-06-15'),
            image: jaipur,
            location: 'Jaipur',
            price: 4500,
            details: 'Visited forts and enjoyed traditional thali.',
        },
        {
            id: '2',
            date: new Date('2025-06-18'),
            image: manali,
            location: 'Manali',
            price: 7800,
            details: 'Snow trek and beautiful views of mountains.',
        },
        {
            id: '3',
            date: new Date('2025-07-10'),
            image: goa,
            location: 'Goa',
            price: 6200,
            details: 'Relaxed on beaches and tried seafood.',
        },

    ];

    return(
        <div className='trip-board'>
            <h1 className='title'>Trips Timeline</h1>
            <div className='list'>
                {trips.map((i) => (
                    <TripTicket 
                    key={i.id} 
                    date={i.date} 
                    location={i.location} 
                    price={i.price} 
                    details={i.details} 
                    image={i.image}/>
                ))}
            </div>
            </div>
    );
}