const locations = [
  { id: 1, title: "1. Байршил", temperature: "15°C", humidity: "70%" },
  { id: 2, title: "2. Байршил", temperature: "15°C", humidity: "70%" },
  { id: 3, title: "3. Байршил", temperature: "15°C", humidity: "70%" },
  { id: 4, title: "4. Байршил", temperature: "15°C", humidity: "70%" },
];

export default function Warehouse() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Дундын агуулах</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {locations.map((loc) => (
          <LocationCard key={loc.id} {...loc} />
        ))}
      </div>
    </div>
  );
}

function LocationCard({ title, temperature, humidity }) {
  return (
    <div className="dark:bg-gray-600 dark:text-white rounded-lg 
                    p-4 shadow-2xl border-2 dark:border-gray-600
                    transform transition-transform duration-300 
                    hover:scale-95">
      <h3 className="font-bold mb-2">{title}</h3>
      <p>Температур: {temperature}</p>
      <p>Чийгшил: {humidity}</p>
      <div className="flex space-x-4 mt-3 hover : scale-9">
        <div className="h-16 w-16 bg-gray border-gray-400 dark:bg-gray-400 border rounded-md flex items-center justify-center">
          📈
        </div>
        <div className="h-16 w-16 bg-gray border-gray-400 dark:bg-gray-400 border rounded-md flex items-center justify-center">
          📈
        </div>
      </div>
    </div>
  );
}
