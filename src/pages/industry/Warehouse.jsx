import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Warehouse() {
  const [sensorData, setSensorData] = useState({});

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("sensor-data", ({ slaveId, values, timestamp }) => {
      setSensorData(prev => ({
        ...prev,
        [slaveId]: {
          temperature: values[0] + "°C",
          humidity: values[1] + "%",
          timestamp,
        },
      }));
    });

    return () => {
      socket.disconnect();
    };
  }, []);


  const totalSensors = 17;
  const sensorIds = Array.from({ length: totalSensors }, (_, i) => i + 1);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Дундын агуулах</h2>
      <div className="flex flex-wrap gap-4">
        {sensorIds.map(slaveId => {
          const data = sensorData[slaveId] || {};
          return (
            <LocationCard
              key={slaveId}
              title={`Байршил ${slaveId}`}
              temperature={data.temperature || "-"}
              humidity={data.humidity || "-"}
              timestamp={data.timestamp || "-"}
            />
          );
        })}
      </div>
    </div>
  );
}

function LocationCard({ title, temperature, humidity, timestamp }) {
  return (
    <div className="dark:bg-gray-600 dark:text-white rounded-lg 
                    p-4 shadow-2xl border-2 dark:border-gray-600
                    transform transition-transform duration-300 
                    hover:scale-95
                    ">
      <h3 className="font-bold mb-2">{title}</h3>
      <p>Температур: {temperature}</p>
      <p>Чийгшил: {humidity}</p>
      <p className="text-sm text-gray-400 mt-2">Хугацаа : {timestamp}</p>
    </div>
  );
}
