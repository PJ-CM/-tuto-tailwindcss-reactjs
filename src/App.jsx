import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="container mx-auto mt-5 lg:px-24">
      <h1>Tailwind</h1>
      <h2>CSS</h2>
      <button className="btn btn-blue btn-blue:hover">Botón</button>

      <div className="flex flex-wrap mt-0 -mx-2 lg:mt-8">
        <div className="w-full px-2 mt-8 sm:w-1/2 md:w-1/3 lg:mt-0">
          <Card
            photo="https://picsum.photos/id/1002/300/200"
            title="El Archipiélago"
          />
        </div>
        <div className="w-full px-2 mt-8 sm:w-1/2 md:w-1/3 lg:mt-0">
          <Card
            photo="https://picsum.photos/id/1015/300/200"
            title="El Gran Cañón"
          />
        </div>
        <div className="w-full px-2 mt-8 sm:w-1/2 md:w-1/3 lg:mt-0">
          <Card
            photo="https://picsum.photos/id/1016/300/200"
            title="Las Montañas Rocosas"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
