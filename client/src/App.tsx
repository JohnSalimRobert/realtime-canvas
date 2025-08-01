import { CanvasStage } from "./components/CanvasStage";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Real-Time Canvas Board
      </h1>
      {/* <Button onClick={handleAdd}>Add Rectangle</Button> */}
      <CanvasStage />
    </main>
  );
}

export default App;
